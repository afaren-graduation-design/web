'use strict';

var Reflux = require('reflux');
var QAPageUpdateAction = require('../../actions/admin/qa-page-update-actions');
var request = require('superagent');
var constant = require('../../../../mixin/constant');
var errorHandler = require('../../../../tools/error-handler.jsx');

var QAPageUpdateStore = Reflux.createStore({
  listenables: QAPageUpdateAction,

  onUpdateQAPage: function () {
    request.put('/api/qa/update')
        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err,res) => {
          this.trigger({
            updateStatus: res.body.status === constant.httpCode.OK ? 'success' : 'failed'
          });
        });
  }
});

module.exports = QAPageUpdateStore;