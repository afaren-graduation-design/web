'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MessageManagementAction = require('../../actions/user-center/message-management-action');
var MessageManagementStore = require('../../store/user-center/message-management-store');
var Reflux = require('reflux');

var buttonConfiguration = [
  {text: '标记为已读', buttonType: 'btn-info', icon: '', operation: 'read'}
];

var messageTypes = [
  {type: 'INVITATION', text: '同意成为你的教练testType'},
  {type: 'REQUEST_ANSWER', text: '同意你查看答案testType'},
  {type: 'AGREE_INVITATION', text: '同意成为你的教练'},
  {type: 'DISAGREE_INVITATION', text: '不同意成为你的教练'},
  {type: 'AGREE_REQUEST_ANSWER', text: '同意你查看答案'},
  {type: 'DISAGREE_REQUEST_ANSWER', text: '不同意你查看答案'}
];

var MessageList = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],
  getInitialState: function () {
    return {
      messageList: [],
      buttonConfiguration: buttonConfiguration
    };
  },

  getMessageList(index) {
    this.props.getMessageList(index);
  },

  handleRequest(messageId, operation, index) {
     MessageManagementAction.operateMessage(messageId, operation, index);
  },

  render: function () {
    var buttonConfiguration = (messageId) => {
      return this.state.buttonConfiguration.map((item) => {
        var index = this.props.tabsValue;
        return (
            <button type='button' className={'btn btn-xs ' + item.buttonType}
                    onClick={this.handleRequest.bind(this, messageId, item.operation, index)}>
              <i className={'ace-icon ' + item.icon}> </i>{item.text}
            </button>
        );
      });
    };
    var messageList = this.props.messageList || [];
    var message = messageList.map((message) => {
      return messageTypes.map(messageType => {
        if (messageType.type === message.type) {
          let isShowButton = 'hidden';
          if (message.state === 0) {
            isShowButton = '';
          }
          return (
              <tr key={message._id}>
                <td>
                  教练{message.fromDetail.name}{messageType.text}
                  <div className={'pull-right ' + isShowButton}>
                    {buttonConfiguration(message._id)}
                  </div>
                </td>
              </tr>
          );
        }
      });
    });
    return (
        <div id='myTabContent' className='row tab-content'>
          <div className='tab-pane fade in active unread' id='unread'>
            <table className='table table-bordered table-striped table-hover'>
              <tbody className='table-body'>
              {message}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
});

module.exports = MessageList;