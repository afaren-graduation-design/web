'use strict';

var Reflux = require('reflux');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var UserCenterActions = require('../../actions/user-center/user-center-actions');
var UserCenterStore = require('../../store/user-center/user-center-store');

var UserCenterSide = React.createClass({
  mixins: [Reflux.connect(UserCenterStore)],

  getInitialState: function () {
    return {
      currentState: window.location.hash.substr(1)
    };
  },

  handleClick: function (mark, currentState) {
    UserCenterActions.changeState(mark, currentState);
    if (mark === 'userDetail') {
      UserCenterActions.loadUserDetail();
    }
    if (mark === 'result') {
      UserCenterActions.loadResult();
    }
    if (mark === 'message') {
      UserCenterActions.loadMessage();
    }
    if (mark === 'mentorManagement') {
      UserCenterActions.loadMentorManagement();
    }
  },

  render() {
    var tags = [
      {mark: 'userDetail', value: '个人信息'},
      {mark: 'password', value: '修改密码'},
      {mark: 'message', value: '消息中心'},
      {mark: 'mentorManagement', value: '教练管理'}
    ];

    var itemHtml = tags.map((item, index) => {
      var classStr = 'list-group-item ' + (item.mark === this.state.currentState ? 'selected' : '');

      return (
        <a className={classStr} href={'#' + item.mark} key={index}
           onClick={this.handleClick.bind(null, item.mark, this.state.currentState)}>
          <div className="row">
            <div className="col-xs-9 h4 text-center">{item.value}</div>
            <div className="col-xs-3"></div>
          </div>
        </a>
      );
    });

    return (
      <div className="col-md-3 col-sm-3 col-xs-12">
        <div className="list-group">
          <div className="list-group-item active">
            <div className="row">
              <div className="col-xs-9 h4 text-center">个人中心</div>
              <div className="col-xs-3"><i className={'user-center-nav-icon h4 fa-lg fa fa-user-plus'}></i></div>
            </div>
          </div>
          {itemHtml}
        </div>
      </div>
    );
  }
});

module.exports = UserCenterSide;
