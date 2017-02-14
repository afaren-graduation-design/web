'use strict';

var Reflux = require('reflux');
var DashboardActions = require('../../actions/dashboard/dashboard-actions');
var request = require('superagent');
var nocache = require('superagent-no-cache');
var errorHandler = require('../../../../tools/error-handler.jsx');
var page = require('page');
var getQueryString = require('../../../../tools/getQueryString');
var programId = getQueryString('programId');
var paperId = getQueryString('paperId');

var DashboardStore = Reflux.createStore({
  listenables: DashboardActions,

  onInit: function () {
    request.get('/api/test/detail')
      .set('Content-Type', 'application/json')
      .use(nocache)
      .end((err, resp) => {
        if (resp.body.data === false) {
          page('user-center.html#userDetail');
          this.trigger({
            isGetStatus: false
          });
        } else {
          this.trigger({
            isGetStatus: true
          });
        }
      });
  },

  onGetStatus: function () {
    request.get(`/api/programs/${programId}/papers/${paperId}/sections`)
      .use(errorHandler)
      .end((err, res) => {
        if (err) {
          return;
        }
        this.trigger({
          sections: res.body.data
        });
      });
  },

  submitPaper: function () {
    request.post('/api/logic-puzzle')
      .set('Content_Type', 'application/json')
      .use(errorHandler)
      .end();
  }

});

module.exports = DashboardStore;
