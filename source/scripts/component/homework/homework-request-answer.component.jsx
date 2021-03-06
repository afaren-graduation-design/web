'use strict';

var Reflux = require('reflux');
var superAgent = require('superagent');
var noCache = require('superagent-no-cache');
var constant = require('../../../../mixin/constant');
var MentorManagementStore = require('../../store/user-center/mentor-management-store');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var MessageActions = require('../../actions/messages/message-actions');
var MessageStore = require('../../store/message/message-store');

var RequestAnswer = React.createClass({
  mixins: [Reflux.connect(MentorManagementStore), Reflux.connect(MessageStore)],

  getInitialState: function () {
    return {
      mentorList: [],
      answer: '',
    };
  },

  componentDidMount: function () {
    MentorManagementAction.getMentors(() => {
      if (this.state.mentorList.length) {
        superAgent
          .get('/api/questions/getAnswer/' + this.props.questionId)
          .query({
            from: this.state.mentorList[0].userId,
            type: 'AGREE_REQUEST_ANSWER',
          })
          .use(noCache)
          .end((err, res) => {
            if (res.statusCode === constant.httpCode.OK) {
              this.setState({answer: res.body.answerPath});
            }
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
    const answerDownload = this.props.homeworkQuizzes.length ? this.props.homeworkQuizzes[this.props.orderId - 1].homeworkName : '';
    const AddMentor = <a href='user-center.html#mentorManagement'>您当前没有mentor,请先添加mentor.</a>;
    const RequestAnswerBtn = <button className="btn btn-primary" onClick={this.handleRequest}>请求答案</button>;
    const MentorSpan = <span
      className="mentor-span">{this.state.mentorList.length ? 'mentor : ' + this.state.mentorList[0].name : ''}</span>;
    let info = this.state.mentorList.length ? '' : AddMentor;
    let result = info || (this.state.answer ?
        <a target="_blank" href={'/api/files/' + this.state.answer}>{answerDownload} </a> : RequestAnswerBtn);

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