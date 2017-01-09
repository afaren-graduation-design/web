'use strict';

var Reflux = require('reflux');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var request = require('superagent');
var noCache = require('superagent-no-cache');
var errorHandler = require('../../../../tools/error-handler.jsx');

var MentorManagementStore = Reflux.createStore({
  listenables: [MentorManagementAction],

  onGetMessages: function () {
    request.get('api/mentors')
      .set('Content-Type', 'application/json')
      .use(noCache)
      .use(errorHandler)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          this.trigger({
            mentorList: res.body
          });
        }
      });
  },

  onCreateMessages: function (mentorId) {
    request.post('api/messages')
      .set('Content-Type', 'application/json')
      .send({to: mentorId, type: 'INVITATION'})
      .use(errorHandler)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          request.get('api/mentors')
            .set('Content-Type', 'application/json')
            .use(noCache)
            .use(errorHandler)
            .end((err, res) => {
              if (err) {
                throw err;
              } else {
                this.trigger({
                  mentorList: res.body
                });
              }
            });
        }

      });
  },

  onSearchMentor: function (email) {
    request.get('/api/mentors/search?email=' + email)
      .set('Content-Type', 'application/json')
      .use(noCache)
      .use(errorHandler)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          this.trigger({
            mentorSearchList: res.body.usersDetail,
            searchResult: (res.body.usersDetail.length === 0)
          });
        }
      });
  }
});

module.exports = MentorManagementStore;
