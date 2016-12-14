'use strict';

var Reflux = require('reflux');

var DashboardActions = require('../../actions/dashboard/dashboard-actions');
var DashboardStore = require('../../store/dashboard/dashboard-store');
var getQueryString = require('../../../../tools/getQueryString');

var Dashboard = React.createClass({
  mixins: [Reflux.connect(DashboardStore)],

  componentDidMount: function () {
    var id = getQueryString('id');
    var programId = getQueryString('programId');
    DashboardActions.getStatus(programId, id);
  },

  render() {
    return (
      <div className="app-list container-fluid">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dashboard;
