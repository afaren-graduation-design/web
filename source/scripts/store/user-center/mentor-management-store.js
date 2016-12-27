'use strict';

var Reflux = require('reflux');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var request = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');
var constant = require('../../../../mixin/constant');
var lang = require('../../../../mixin/lang-message/chinese');

var MentorManagementStore = Reflux.createStore({
  listenables: [MentorManagementAction],

  onSearchMentor: function (email) {
    request.get('/api/mentors?email=' + email)
        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err, res) => {
          if (!res) {
            return;
          }
          this.trigger({
            mentorSearchList: res.body.usersDetail
          });
        });
  }
});

module.exports = MentorManagementStore;
