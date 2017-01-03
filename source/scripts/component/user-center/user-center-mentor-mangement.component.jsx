'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MentorManagementStore = require('../../store/user-center/mentor-management-store');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var Reflux = require('reflux');
var Rx = require('rx');
var MentorTable = require('./user-center-mentor-table.component.jsx');

var MentorManagement = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MentorManagementStore)],

  getInitialState: function () {
    return {
      currentState: 'userDetail',
      mentorList: [],
      mentorSearchList: [],
      inputId: '',
      isDisabled: true
    };
  },

  componentDidMount: function () {
    MentorManagementAction.getMessages();
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

  onchange: function (event) {
    var arr = event.target.value.split('-');
    this.inputInfo.value = arr[0];
    this.setState({inputId: arr[1], isDisabled: false});
  },

  addMentor: function () {
    MentorManagementAction.createMessages(this.state.inputId);
  },

  render: function () {
    var classString = (this.state.currentState === 'mentorManagement' ? '' : ' hide');
    var mentorSearchList = this.state.mentorSearchList || [];
    var mentorSearchListHTML = mentorSearchList.map((mentor, index) => {
      return (
        <option key={index} value={mentor.name + '-' + mentor.userId}>{mentor.name}</option>
      )
    });

    var selectClassString = mentorSearchListHTML ? '' : hide;

    return (
      <div className={"col-md-9 col-sm-9 col-xs-12" + classString}>
        <div className="content  text-center">
          <div className="table-list">
            <MentorTable mentorList={this.state.mentorList}/>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-3">
            <div className="input-group">
              <input type="text" className="form-control search-mentor-frame col-md-3 col-sm-3 col-xs-3"
                     placeholder="请输入教练邮箱"
                     ref={(ref) => {
                       this.inputInfo = ref;
                     }}/>
              <span className="input-group-addon">
                                 <button className="add-mentor-btn" disabled={this.state.isDisabled}
                                         onClick={this.addMentor}>添加</button>
                             </span>
            </div>
            <div className="search-mentor-list">
              <select multiple="true" className={"col-md-10 col-sm-10 col-xs-10" + selectClassString}
                      onChange={this.onchange}>
                {mentorSearchListHTML}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MentorManagement;