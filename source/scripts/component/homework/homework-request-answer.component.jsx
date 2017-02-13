'use strict';

var Reflux = require('reflux');
// var page = require('page');
var MentorManagementStore = require('../../store/user-center/mentor-management-store');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var MessageActions = require('../../actions/messages/message-actions');
var MessageStore = require('../../store/message/message-store');

var RequestAnswer = React.createClass({
  mixins: [Reflux.connect(MentorManagementStore), Reflux.connect(MessageStore)],

  getInitialState: function () {
    return {
      mentorList: [],
      answer: ''
    };
  },

  componentDidMount: function () {
    MentorManagementAction.getMentors(() => {
      if (this.state.mentorList.length) {
        MessageActions.getAnswer({
          from: this.state.mentorList[0].userId,
          type: 'AGREE_REQUEST_ANSWER',
          deeplink: this.props.questionId
        });
      }
    });
  },

  handleRequest: function () {
    MessageActions.createMessage({
      to: this.state.mentorList[0].userId,
      type: 'REQUEST_ANSWER',
      deeplink: this.props.questionId
    });
  },

  render() {
    const AddMentor = <a href='user-center.html'>您当前没有mentor,请先添加mentor.</a>;
    const RequestAnswerBtn = <button className="btn btn-primary" onClick={this.handleRequest}>请求答案</button>;
    const MentorSpan = <span
      className="mentor-span">{this.state.mentorList.length ? 'mentor : ' + this.state.mentorList[0].name : ''}</span>;
    let info = this.state.mentorList.length ? '' : AddMentor;
    let result = info || (this.state.answer ? this.state.answer : RequestAnswerBtn);
    return (
      <div className="runningResult tab">
        <div className="result">
          {MentorSpan}
          {result}
        </div>
      </div>
    );
  }
});

module.exports = RequestAnswer;