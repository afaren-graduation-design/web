'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MessageManagementStore = require('../../store/user-center/message-management-store');
var MessageManagementAction = require('../../actions/user-center/message-management-action');
var Reflux = require('reflux');

var Message = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],


  getInitialState: function () {
    return {
      unreadMessages: [],
      currentState: 'userDetail'
    };
  },

  componentDidMount: function () {
    MessageManagementAction.findUnread();
  },

  render: function () {
    var classString = (this.state.currentState === 'message' ? '' : ' hide');
    const unreadMessages = this.state.unreadMessages.item || [];
    const unreadMessageHTML = unreadMessages.map(message => {
      if (message.type === 'agreementinvitation') {
        return (
            <tr key={message._id}>
              <td>
                  教练{message.name}已同意成为你的教练
                <i className='fa fa-check pull-right'> </i>
              </td>
            </tr>
        );
      } else if (message.type === 'agreementrequestAnswer') {
        return (
            <tr key={message._id}>
              <td>
                  教练{message.name}已同意你查看{message.deeplink}的答案
                <i className='fa fa-check pull-right'> </i>
              </td>
            </tr>
        );
      } else if (message.type === 'disagreementrequestAnswer') {
        return (
            <tr key={message._id}>
              <td>
                教练{message.name}不同意你查看{message.deeplink}的答案
                <i className='fa fa-check pull-right'> </i>
              </td>
            </tr>
        );
      }
    });

    return (
        <div className={"col-md-9 col-sm-9 col-xs-12 container-fluid" + classString}>
          <div id="tabs" className="content">
            <div>
              <ul id="myTab" className="myTab nav nav-tabs">
                <li className="active">
                  <a href="#unread" data-toggle="tab">
                    <font color="gray"><i className="fa fa-bell"></i>&nbsp;未读</font>
                  </a>
                </li>
                <li><a href="#all" data-toggle="tab">
                  <font color="gray"><i className="fa fa-envelope"></i>&nbsp;所有</font>
                </a>
                </li>
              </ul>
            </div>
            <div id="myTabContent" className="row tab-content">
              <div className="tab-pane fade in active" id="unread">
                <table className="table table-bordered table-striped table-hover">
                  <thead className="table-header">
                  <th>未读消息</th>
                  </thead>
                  <tbody className="table-body">
                  {unreadMessageHTML}
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="all">
                <table className="table table-bordered table-striped table-hover col-sm-5 col-sm-offset-1">
                  <thead className="table-header">
                  <th>所有消息</th>
                  </thead>
                  <tbody className="table-body">
                  <tr>
                    <td>教练未同意查看第一张试卷第一题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  <tr>
                    <td>教练未同意查看第一张试卷第二题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  <tr>
                    <td>教练未同意查看第一张试卷第三题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
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