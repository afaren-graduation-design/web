/*eslint no-magic-numbers: 0*/

'use strict';

var Col = require('react-bootstrap/lib/Col');
var Reflux = require('reflux');
var DashboardStore = require('../../store/dashboard/dashboard-store');
var Arrow = require('./arrow.component.jsx');
var getQueryString = require('../../../../tools/getQueryString');

var DashboardIcon = React.createClass({
  mixins: [Reflux.connect(DashboardStore)],

  getInitialState: function () {
    return {
      puzzleEnabled: true,
      homeworkEnabled: false,
      sections: []
    };
  },

  render() {
    var programId = getQueryString('programId');
    var paperId = getQueryString('paperId');
    var iconInfos = {
      LogicPuzzle: {
        title: '逻辑题',
        name: 'logic',
        glyphicon: 'glyphicon-education'
      },
      HomeworkQuiz: {
        title: '编程题',
        name: 'homework',
        glyphicon: 'glyphicon-road'
      }
    };
    var sectionList = this.state.sections.map((section, index) => {
      var arrow = (this.state.sections.indexOf(section) === this.state.sections.length - 1) ? (<div></div>) : (
          <Arrow/>);
      let preSection = this.state.sections[index - 1] || {status: 1};
      let preStatus = preSection.status;

      let status = (section.status === 0 || section.status === 3) && (preStatus === 1 || preStatus === 2);
      var disable = status === true ? 'enable' : 'disable';
      var uri = (section.type === 'LogicPuzzle' && disable === 'enable' ? `logic-puzzle.html?sectionId=${section.sectionId}&questionId=${section.firstQuizId}` :
        (section.type === 'HomeworkQuiz' && disable === 'enable' ? `homework.html?sectionId=${section.sectionId}&questionId=${section.firstQuizId}` : '#'));
      return (
        <div key={index}>
          <a href={uri} className="icon-view">
            <div className={'icon-wrapper-' + disable}
                 name={iconInfos[section.type].name}>
              <div className="icon-img" name={iconInfos[section.type].name}>
                <span className={'glyphicon ' + iconInfos[section.type].glyphicon} aria-hidden="true"/>
              </div>
              <div className="icon-name">
                {iconInfos[section.type].title}
              </div>
            </div>
          </a>
          {arrow}
        </div>
      )
    });

    return (
      <div className="dashboard-icon">
        {sectionList}
      </div>
    );
  }
});

module.exports = DashboardIcon;