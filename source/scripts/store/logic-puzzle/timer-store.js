'use strict';

var Reflux = require('reflux');
var TimerActions = require('../../actions/logic-puzzle/timer-actions');
var superAgent = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');

var TimerStore = Reflux.createStore({
  listenables: [TimerActions],

  onGetRemainTime: function (programId, paperId, sectionId) {
    superAgent
      .get('/api/timer/remain-time')
      .set('Content-Type', 'application/json')
      .query({programId, paperId, sectionId})
      .use(errorHandler)
      .end((err, res) => {
        this.trigger({
          'remainTime': res.body.remainTime
        });
      });
  }
});

module.exports = TimerStore;
