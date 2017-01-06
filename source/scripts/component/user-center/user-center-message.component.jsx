'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MessageManagementStore = require('../../store/user-center/message-management-store');
var MessageManagementAction = require('../../actions/user-center/message-management-action');
var Reflux = require('reflux');

var isActive = [
  {activeStatus: 'active', value: '未读', link: '#unread', icon: 'fa-bell'},
  {activeStatus: '', value: '所有', link: '#all', icon: 'fa-envelope'}
];

var buttonConfiguration = [
  {text: '标记为已读', buttonType: 'btn-info', icon: '', operation: 'read'}
];

var messageTypes = [
  {type: 'INVITATION', text: '已读成为教练的邀请'},
  {type: 'REQUEST_ANSWER', text: '已读请求查看答案的消息'}
];

var Message = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],


  getInitialState: function () {
    return {
      currentState: 'userDetail',
      unreadMessages: [],
      allMessages: [],
      unreadOrAll: false,
      isActive: isActive,
      buttonConfiguration: buttonConfiguration,
      totalCount: 0
    };
  },

  componentDidMount: function () {
    MessageManagementAction.findUnread();
  },
  handleRequest: function (a,b) {

  },

  handleIsActive: function (index) {
    this.state.isActive.map((item, i) => {
      i === index ? item.activeStatus = 'active' : item.activeStatus = '';
      return item;
    });
    var value = this.state.isActive.find(item => item.activeStatus === 'active').value;
    if (value === '未读') {
      this.setState({
        unreadOrAll: false
      }, () => {
        MessageManagementAction.findUnread();
      });
    } else if (value === '所有') {
      this.setState({
        unreadOrAll: true
      }, () => {
        MessageManagementAction.findAll();
      });
    }
  },

  render: function () {
    var classString = (this.state.currentState === 'message' ? '' : ' hide');
    const unreadMessages = this.state.unreadMessages || [];
    const allMessages = this.state.allMessages || [];
    const buttonConfiguration = (messageId) => {
      return this.state.buttonConfiguration.map((item) => {
        return (
            <button type='button' className={'btn btn-xs ' + item.buttonType}
                    onClick={this.handleRequest.bind(this,messageId, item.operation)}>
              <i className={'ace-icon ' + item.icon}> </i>{item.text}
            </button>
        );
      });
    };
    const tableItem = (message, text) => {
      let isShowButton = 'hidden';
      if (message.state === 0) {
        isShowButton = '';
      }
      return (
          <tr key={message._id}>
            <td>
              教练{message.fromDetail.name}{text}
              <div className={'pull-right ' + isShowButton}>
                {buttonConfiguration(message._id)}
              </div>
            </td>
          </tr>
      );
    };
    const unreadMessageHTML = unreadMessages.map(message => {
      return messageTypes.map(messageType => {
        if (messageType.type === message.type) {
          return tableItem(message, messageType.text);
        }
      });
    });
    const allMessagesHTML = allMessages.map(message => {
      return messageTypes.map(messageType => {
        if (messageType.type === message.type) {
          return tableItem(message, messageType.text);
        }
      });
    });
    const bookmarks = this.state.isActive.map((bookmark, index) => {
      return (
          <li className={bookmark.activeStatus}>
            <a href={bookmark.link} onClick={this.handleIsActive.bind(this,index)}>
              <div className='font-color'>
                <i className={'fa ' + bookmark.icon}> </i>&nbsp;&nbsp;{bookmark.value}
              </div>
            </a>
          </li>
      );
    });

    return (
        <div className={"col-md-9 col-sm-9 col-xs-12 container-fluid" + classString}>
          <div id="tabs" className="content">
            <div>
              <ul id="myTab" className="myTab nav nav-tabs">
                {bookmarks}
              </ul>
            </div>
            <div id="myTabContent" className="row tab-content">
              <div className="tab-pane fade in active">
                <table className="table table-bordered table-striped table-hover">
                  <tbody className="table-body">
                  {this.state.unreadOrAll ? allMessagesHTML : unreadMessageHTML}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Message;