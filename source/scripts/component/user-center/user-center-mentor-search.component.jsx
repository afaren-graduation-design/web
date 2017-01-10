'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MentorManagementStore = require('../../store/user-center/mentor-management-store');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var Reflux = require('reflux');
var Rx = require('rx');

var MentorSearch = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MentorManagementStore)],

  getInitialState: function () {
    return {
      mentorList: this.props.mentorList || [],
      mentorSearchList: [],
      searchResult: '',
      inputId: '',
      isDisabled: true,
      errorInfo: ''
    };
  },

  componentDidMount() {

    window.onresize = () => {
      let width = document.getElementById("email").offsetWidth;
      document.getElementById("searchList").style.width = width + 'px';

    };

    Rx.Observable.fromEvent(this.inputInfo, 'keyup')
      .pluck('target', 'value')
      .map(text => text.trim())
      .filter(text => text.length >= 3)
      .debounce(1000)
      .distinctUntilChanged()
      .forEach(item => {
        MentorManagementAction.searchMentor(item);
      })
  },

  handleClick: function ({name, userId}) {
    this.inputInfo.value = name;
    this.setState({
      inputId: userId,
      isDisabled: false
    });
  },

  addMentor: function () {
    let mentors = this.state.mentorList;
    console.log(mentors)
    let exit = mentors.find((item) => {
      return item.userId == this.state.inputId
    });
    if (exit) {
      this.setState({
        mentorSearchList: [],
        errorInfo: '已经添加过'
      });
    } else {
      MentorManagementAction.createMessages(this.state.inputId);
    }
  },

  render() {
    var mentorSearchList = this.state.mentorSearchList || [];

    return (
      <div>
        <div className="col-md-4 col-md-offset-3 ">
          <div className="input-group">
            <input id="email" type="text" className="form-control search-mentor-frame col-md-3"
                   placeholder="请输入教练邮箱"
                   ref={(ref) => {
                     this.inputInfo = ref;
                   }}/>
            <span className="input-group-addon">
              <button className="add-mentor-btn" disabled={this.state.isDisabled} onClick={this.addMentor}>添加</button>
            </span>
          </div>
          <div id="searchList" className={"search-mentor-list col-md-8 " + (mentorSearchList.length ? '' : 'hidden')}>
            <ul>
              {
                mentorSearchList.map(({name, userId}, index) => {
                  return (
                    <li key={index} onClick={this.handleClick.bind(this, {name, userId})}>{name}</li>
                  )
                })
              }
            </ul>
          </div>

          <div className={mentorSearchList.length ? 'hidden' : ''}>
            {this.state.searchResult ? '没有搜索到' : this.state.errorInfo}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MentorSearch;
