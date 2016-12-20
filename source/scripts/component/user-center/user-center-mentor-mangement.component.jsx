'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var Reflux = require('reflux');

var MentorManagement = React.createClass({
  mixins: [Reflux.connect(UserCenterStore)],


  getInitialState: function () {
    return {
      currentState: 'userDetail'
    };
  },
  render:function () {
    var classString = (this.state.currentState === 'mentorManagement' ? '' : ' hide');

    return (
        <div className={"row container-fluid"+classString}>
          MentorManagement
        </div>
    );
  }
});

module.exports = MentorManagement;