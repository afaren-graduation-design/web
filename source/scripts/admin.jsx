'use strict';

require('../less/admin.less');

var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');
var Registerable = require('./component/admin/registerable.jsx');

ReactDOM.render(
    <div>
      <header>
        <Navigation>
          <Account />
        </Navigation>
      </header>
      <div className="row">
        <div className="col-md-8 col-md-offset-2 center-content">
          <Registerable/>
        </div>
      </div>
    </div>,
    document.getElementById('admin-container')
);
