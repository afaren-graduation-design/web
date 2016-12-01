require('../less/paper-list.less');

var Reflux = require('reflux');
var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');
var PaperForm = require('./component/paper-list/PaperList.jsx');

var PaperList = React.createClass({
  render: function () {
    return (
        <div>
          <header>
            <Navigation>
              <Account/>
            </Navigation>
          </header>
          <div>
            <PaperForm/>
          </div>
        </div>
    );
  }
});

ReactDOM.render(<PaperList/>, document.getElementById('paper-list'));