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
      deeplink: `papers/${this.props.paperId}/sections/${this.props.sectionId}/homeworks/${this.props.orderId}`
    });
  },

  render() {
    const btn = <button className="btn btn-primary" onClick={this.handleRequest}>请求答案</button>;
    let result = this.props.answerPath ? this.props.answerPath : {btn};

    return (
      <div className="runningResult tab">
        <div className="result">
          {result}
        </div>
      </div>
    );
  }
});

module.exports = RequestAnswer;