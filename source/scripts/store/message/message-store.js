/*eslint no-magic-numbers: 0*/

var Reflux = require('reflux');
var superAgent = require('superagent');
var MessageActions = require('../../actions/messages/message-actions');
var errorHandler = require('../../../../tools/error-handler.jsx');

var requestAnswerStore = Reflux.createStore({
  listenables: [MessageActions],

  onCreateMessage: function (data) {
    superAgent
      .post('/api/messages')
      .use(errorHandler)
      .send(data)
      .end((err, res) => {
        console.log(res.body)
      })
  },

  onGetAnswer: function (data) {
    superAgent
      .post('/api/questions')
      .use(errorHandler)
      .send(data)
      .end((err, res) => {
        this.trigger({
          answer: res.body.answerPath
        });
      })
  }
});

module.exports = requestAnswerStore;
