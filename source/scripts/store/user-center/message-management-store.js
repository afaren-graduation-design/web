'use strict';

var Reflux = require('reflux');
var MessageManagementAction = require('../../actions/user-center/message-management-action');
var request = require('superagent');
var noCache = require('superagent-no-cache');
var errorHandler = require('../../../../tools/error-handler.jsx');

var MessageManagementStore = Reflux.createStore({
  listenables: [MessageManagementAction],

  onFindUnread: function () {
    request.get('api/messages/unread')
      .set('Content-Type', 'application/json')
      .use(noCache)
      .use(errorHandler)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          console.log(res.body);
          this.trigger({
            messageList: res.body.items,
            totalCount: res.body.totalCount
          });
        }
      });
  },

  onFindAll: function () {
    request.get('api/messages')
        .set('Content-Type', 'application/json')
        .use(noCache)
        .use(errorHandler)
        .end((err, res) => {
          if (err) {
            throw err;
          } else {
            this.trigger({
              messageList: res.body.items,
              totalCount: res.body.totalCount
            });
          }
        });
  },

  onOperateMessage: function (messageId, operation, index) {
    request.put(`/api/messages/${messageId}/${operation}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (res.statusCode === 204) {
            console.log(index);
            if (index === 0){
              this.onFindUnread();
            } else {
              this.onFindAll();
            }
          } else {
            throw err;
          }
        });
  }
});

module.exports = MessageManagementStore;
