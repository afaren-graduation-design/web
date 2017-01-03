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
          this.trigger({
            unreadMessages: res.body
          });
        }
      });
  }
});

module.exports = MessageManagementStore;
