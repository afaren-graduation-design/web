'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var Reflux = require('reflux');

var Message = React.createClass({
  mixins: [Reflux.connect(UserCenterStore)],


  getInitialState: function () {
    return {
      currentState: 'userDetail'
    };
  },
render:function () {
    var classString = (this.state.currentState === 'message' ? '' : ' hide');

    return (
        <div className={"row container-fluid"+classString}>
          message
        </div>
    );
  }
});

module.exports = Message;