'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MentorManagementStore = require('../../store/user-center/mentor-management-store');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var Reflux = require('reflux');
var MentorTable = require('./user-center-mentor-table.component.jsx');
var MentorSearch = require('./user-center-mentor-search.component.jsx');

var MentorManagement = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MentorManagementStore)],

  getInitialState: function () {
    return {
      currentState: window.location.hash.substr(1) || 'userDetail',
      mentorList: []
    };
  },

  componentDidMount: function () {
    MentorManagementAction.getMentors();

  },

  render: function () {
    var classString = (this.state.currentState === 'mentorManagement' ? '' : ' hide');

    return (
      <div className={"col-md-9 col-sm-9 col-xs-12" + classString}>
        <div className="content">
          <MentorTable mentorList={this.state.mentorList}/>
          <MentorSearch mentorList={this.state.mentorList}/>
        </div>
      </div>
    );
  }
});

module.exports = MentorManagement;