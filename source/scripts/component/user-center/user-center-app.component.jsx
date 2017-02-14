'use strict';

var Reflux = require('reflux');
var UserCenterActions = require('../../actions/user-center/user-center-actions');
var UserCenterStore = require('../../store/user-center/user-center-store');
var page = require('page');


var UserCenterApp = React.createClass({

  mixins:[Reflux.connect(UserCenterStore)],

  getInitialState: function () {

    return {
      currentState: ''
    };
  },

  componentDidMount:function () {
    page('/user-center.html',UserCenterActions.pathChange);
    page();
  },

  render() {
    return (
      <div className="row container-fluid">
        {this.props.children}
      </div>
    );
  }
});

module.exports = UserCenterApp;