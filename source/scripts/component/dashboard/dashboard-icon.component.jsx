/*eslint no-magic-numbers: 0*/

'use strict';

var Col = require('react-bootstrap/lib/Col');
var Reflux = require('reflux');
var DashboardStore = require('../../store/dashboard/dashboard-store');
var Arrow = require('./arrow.component.jsx');

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
    console.log(this.state);
    var PuzzleHref = (this.state.puzzleEnabled === true ? `start.html?sectionId=1` : '#');
    var homeworkHref = (this.state.homeworkEnabled === true ? 'homework.html' : 'deadline.html');
    // homeworkHref = this.state.isOverTime || this.state.isFinished ? 'deadline.html' : homeworkHref;
    var puzzleDisable = (this.state.puzzleEnabled === true ? 'enable' : 'disable');
    var homeworkDisable = (this.state.homeworkEnabled === true ? 'enable' : 'disable');

    var iconInfos = {
      logicQuizzes: {
        title: '逻辑题',
        href: PuzzleHref,
        isEnabled: puzzleDisable,
        name: 'logic',
        glyphicon: 'glyphicon-education'
      },
      homeworkQuizzes: {
        title: '编程题',
        href: homeworkHref,
        isEnabled: homeworkDisable,
        name: 'homework',
        glyphicon: 'glyphicon-road'
      }
    };
    var sectionList = this.state.sections.map((section, index) => {
      var arrow = (this.state.sections.indexOf(section) === this.state.sections.length - 1) ? (<div></div>) : (<Arrow/>);
      var uri = (section.type === 'logicQuizzes' && puzzleDisable === 'enable' ? `start.html?sectionId=${section.id}` :
                        (section.type === 'homeworkQuizzes' && homeworkDisable === 'enable' ? `homework.html?sectionId=${section.id}` : '#'));
      console.log(uri);
      return (
        <div key={index}>
        <a href={uri} className="icon-view">
          <div className={'icon-wrapper-' + iconInfos[section.type].isEnabled}
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