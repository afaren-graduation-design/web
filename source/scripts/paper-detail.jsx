require('../less/paper-list.less');

var Reflux = require('reflux');
var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');
var PaperDetailForm = require('./component/paper-detail/PaperDetail.jsx');

var PaperDetail = React.createClass({
  render: function () {
    return (
        <div>
          <header>
            <Navigation>
              <Account/>
            </Navigation>
          </header>
          <div>
            <PaperDetailForm/>
          </div>
        </div>
    );
  }
});

ReactDOM.render(<PaperDetail/>, document.getElementById('paper-detail'));