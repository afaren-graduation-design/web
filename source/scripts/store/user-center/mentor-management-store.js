'use strict';

var Reflux = require('reflux');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var request = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');

var MentorManagementStore = Reflux.createStore({
  listenables: [MentorManagementAction],

  onGetMessages: function () {
    request.get('api/messages')
        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          this.trigger({
            mentorList: res.body
          });
        });
  },

  onCreateMessages: function (mentorId) {
    request.post('api/messages')
        .set('Content-Type', 'application/json')
        .send({to: mentorId, type: 'invitation'})
        .use(errorHandler)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          request.get('api/messages')
              .set('Content-Type', 'application/json')
              .use(errorHandler)
              .end((err, res) => {
                if (err) {
                  throw err;
                }
                this.trigger({
                  mentorList: res.body
                });
              });
        });
  },

  onSearchMentor: function (email) {
    request.get('/api/mentors?email=' + email)
        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          this.trigger({
            mentorSearchList: res.body.usersDetail
          });
        });
  }
});

module.exports = MentorManagementStore;
