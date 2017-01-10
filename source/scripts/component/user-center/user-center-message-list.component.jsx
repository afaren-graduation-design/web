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
  {type: 'AGREE_INVITATION', text: '同意成为你的教练'},
  {type: 'DISAGREE_INVITATION', text: '不同意成为你的教练'},
  {type: 'AGREE_REQUEST_ANSWER', text: '同意你查看答案'},
  {type: 'DISAGREE_REQUEST_ANSWER', text: '不同意你查看答案'}
];

var ButtonLine = React.createClass({

  handleRequest(messageId, operation, index) {
    MessageManagementAction.operateMessage(messageId, operation, index);
  },

  render() {
    return (
        <button type='button' className={'btn btn-xs ' + this.props.item.buttonType}
                onClick={this.handleRequest.bind(this, this.props.messageId, this.props.item.operation, this.props.index)}>
          <i className={'ace-icon ' + this.props.item.icon}> </i>{this.props.item.text}
        </button>
    );

  }
});
var MessageLine = React.createClass({
  render() {
    return (
        <tr key={this.props.message._id}>
          <td>
            {
              new Date(this.props.message.updatedAt).toDateString('ja-JP')}
            &nbsp;&nbsp;教练{this.props.message.fromDetail.name}{this.props.messageType.text}
            <div className={'pull-right ' + this.props.isShowButton}>
              {
                buttonConfiguration.map((item) => {
                  var index = this.props.tabsValue;
                  return (
                      <ButtonLine messageId={this.props.message._id}
                                  index={index} item={item}/>
                  )
                })
              }
            </div>
          </td>
        </tr>
    );
  }
});
var MessageList = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],
  getInitialState: function () {
    return {
      messageList: []
    };
  },

  getMessageList(index) {
    this.props.getMessageList(index);
  },

  render: function () {
    var messageList = this.props.messageList || [];
    return (
        <div id='myTabContent' className='row tab-content'>
          <div className='tab-pane fade in active unread' id='unread'>
            <table className='table table-bordered table-striped table-hover'>
              <tbody className='table-body'>
              {
                messageList.map((message) => {
                  let isShowButton = '';
                  let messageType = messageTypes.find(messageType => {
                    return messageType.type == message.type;
                  });
                  if (!messageType || message.state === 1) {
                    isShowButton = 'hidden';
                  }
                  return (
                      <MessageLine isShowButton={isShowButton} messageType={messageType}
                                   message={message} tabsValue={this.props.tabsValue}/>
                  )

                })
              }
              </tbody>
            </table>
          </div>
        </div>
    );
  }
});

module.exports = MessageList;