'use strict';

var Reflux = require('reflux');
var DashboardActions = require('../../actions/dashboard/dashboard-actions');
var request = require('superagent');
var nocache = require('superagent-no-cache');
var errorHandler = require('../../../../tools/error-handler.jsx');
var page = require('page');
var async = require('async');

var DashboardStore = Reflux.createStore({
  listenables: DashboardActions,

  onInit: function () {
    request.get('/api/test/detail')
      .set('Content-Type', 'application/json')
      .use(nocache)
      .end((err, resp) => {
        if (resp.body.data === false) {
          page('user-center.html');
          this.trigger({
            isGetStatus: false
          })
        } else {
          this.trigger({
            isGetStatus: true
          });
        }
      })
  },
  onGetStatus: function (programId, paperId) {
    async.waterfall([
      (done) => {
        request.get(`/api/user-initialization/initializeQuizzes/${programId}/${paperId}`)
          .set('Content-Type', 'application/json')
          .use(errorHandler)
          .end(function (err, res) {
            if (err) {
              done(err);
            } else {
              done(null, res.body);
            }
          });
      },
      (data, done) => {
        if (data.status === 200) {
          var sections = data.sections;
          request.get('/api/dashboard')
            .set('Content-Type', 'application/json')
            .use(errorHandler)
            .end((err, res) => {
              if (!res.body.isFinishedDetail) {
                page('user-center.html');
              } else {
                var puzzleUnable = res.body.isPaperCommited;
                this.trigger({
                  sections: sections,
                  puzzleEnabled: !puzzleUnable,
                  homeworkEnabled: res.body.isPaperCommited,
                  isOverTime: res.body.isOverTime,
                  isFinished: res.body.isFinished,
                });
              }
            });
        } else {
          done(err);
        }
      }
    ]);
  },

  submitPaper: function () {
    request.post('/api/logic-puzzle')
      .set('Content_Type', 'application/json')
      .use(errorHandler)
      .end();
  }

});

module.exports = DashboardStore;
