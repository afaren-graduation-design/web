'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MessageManagementStore = require('../../store/user-center/message-management-store');
var MessageManagementAction = require('../../actions/user-center/message-management-action');
var MessageTabs = require('./user-center-message-tabs.component.jsx');
var MessageList = require('./user-center-message-list.component.jsx');
var Reflux = require('reflux');

var tabsConfiguration = [
  {activeStatus: 'active', value: '未读', tabsLink: '/unread', icon: 'fa-bell'},
  {activeStatus: '', value: '所有', tabsLink: '/', icon: 'fa-envelope'}
];

var findMessage = [MessageManagementAction.findUnread,MessageManagementAction.findAll];

var Message = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],


  getInitialState: function () {
    return {
      currentState: 'userDetail',
      tabsConfiguration: tabsConfiguration,
      tabsValue: 0,
      totalCount: 0,
      messageList: []
    };
  },

  getMessageList: function (index) {
    findMessage.find((fuc,i)=> i === index)();
  },

  componentDidMount: function () {
    this.getMessageList(0);
  },

  onChangeTabsValue:function (index) {
    this.setState({
      tabsValue: index
    });
  },

  render: function () {
    var classString = (this.state.currentState === 'message' ? '' : ' hide');
    return (
        <div className={"col-md-9 col-sm-9 col-xs-12 container-fluid" + classString}>
          <div className="content">
          <div id='tabs' className='message-body'>
            <MessageTabs tabsConfiguration={this.state.tabsConfiguration}
                         onChangeTabsValue={this.onChangeTabsValue}
                         getMessageList={this.getMessageList}/>
            <MessageList tabsConfiguration={this.state.tabsConfiguration}
                         tabsValue={this.state.tabsValue}
                         messageList={this.state.messageList}
                         getMessageList={this.getMessageList}/>
          </div>
          </div>
        </div>
    );
  }
});

module.exports = Message;