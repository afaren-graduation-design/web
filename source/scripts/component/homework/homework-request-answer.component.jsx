'use strict';

var Reflux = require('reflux');
var MessageActions = require('../../actions/messages/message-actions');
var RequestAnswerStore = require('../../store/message/request-answer-store');

var RequestAnswer = React.createClass({
  mixins: [Reflux.connect(RequestAnswerStore)],

  handleRequest: function () {
    MessageActions.createMessage({
      to: 1,
      type: 'requestAnswer',
      deeplink: 'papers/1/sections/1/homeworks/1'
    });
  },

  render() {

    return (
      <div className="runningResult tab">
        <div className="result">
          <button className="btn btn-primary" onClick={this.handleRequest}>请求答案</button>

        </div>
      </div>
    );
  }
});

module.exports = RequestAnswer;