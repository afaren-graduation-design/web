'use strict';


var Dashboard = require('./component/dashboard/dashboard.component.jsx');
var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');
require('../less/dashboard.less');
var Row = require('react-bootstrap/lib/Row');
var DashboardIcon = require('./component/dashboard/dashboard-icon.component.jsx');
var Arrow = require('./component/dashboard/arrow.component.jsx');
var DashboardActions = require('./actions/dashboard/dashboard-actions');
var DashboardStore = require('./store/dashboard/dashboard-store');
var Reflux = require('reflux');

var DashboardApp = React.createClass({
  mixins: [Reflux.connect(DashboardStore)],

  componentDidMount: function() {
    DashboardActions.init();
    window.onpopstate = DashboardActions.init;
  },

  render: function() {
    return (
        <div>
          <header>
            <Navigation>
              <Account />
            </Navigation>
          </header>
          <Dashboard>
            <Row>
              <DashboardIcon name="logic"/>
              <Arrow/>
              <DashboardIcon name="homework"/>
            </Row>
          </Dashboard>
        </div>
    )
  }
});

ReactDom.render(<DashboardApp />,document.getElementById('dashboard-container'));
