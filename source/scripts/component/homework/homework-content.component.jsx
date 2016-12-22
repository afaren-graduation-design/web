'use strict';

var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');
var homeworkQuizzesStatus = require('../../../../mixin/constant').homeworkQuizzesStatus;
var getQueryString = require('../../../../tools/getQueryString');
var page = require('page');

var HomeworkContent = React.createClass({
  componentWillReceiveProps: function(nextProps) {
    if(this.props.orderId !== nextProps.orderId) {
        this.refs.tabs.state.activeKey = 0;
    }
  },

  backDashboard: function () {
    var programId = getQueryString('programId');
    var paperId = getQueryString('paperId');
    page(`dashboard.html?programId=${programId}&paperId=${paperId}`)
  },

  render(){
    var isOpend = homeworkQuizzesStatus.LOCKED !== this.props.quiz.status;

    var tabNames = isOpend ? ["题目说明", "提交作业", "运行结果"] : ["题目说明"];
    var tabHtml = tabNames.map((item, idx) => {
      return <Tab key={idx} eventKey={idx} title={item}>{this.props.children[idx]}</Tab>
    });

    return (
      <div className="col-md-9 col-sm-9 col-xs-12">
        <div className="content">
          <a className="btn btn-lg btn-danger btn-block" onClick={this.backDashboard}>返回试卷</a>

          <Tabs defaultActiveKey={0} animation={false} getShowStatus={true} ref="tabs">
            {tabHtml}
          </Tabs>
        </div>
      </div>
    );
  }

});

module.exports = HomeworkContent;
