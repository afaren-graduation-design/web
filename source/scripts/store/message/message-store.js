/*eslint no-magic-numbers: 0*/

var Reflux = require('reflux');
var superAgent = require('superagent');
var MessageActions = require('../../actions/messages/message-actions');
var constant = require('../../../../mixin/constant');
var errorHandler = require('../../../../tools/error-handler.jsx');
var noCache = require('superagent-no-cache');

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
  }
});

module.exports = requestAnswerStore;
