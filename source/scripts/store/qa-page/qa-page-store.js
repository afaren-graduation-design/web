'use strict';

var Reflux = require('reflux');
var QAPageActions = require('../../actions/qa-page/qa-page-actions');
var request = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');
var constant = require('../../../../mixin/constant');


var GetAccountStore = Reflux.createStore({
  listenables: [QAPageActions],

  onLoadQAContent:function() {
    request.get('/api/qa')
      .set('Content-Type', 'application/json')
      .use(errorHandler)
      .end((err, res) => {
        if (err) {return;}
        this.trigger({
          QAContent: res.body.QAContent
        });
      });
  }
});

module.exports = GetAccountStore;
