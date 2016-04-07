'use strict';

require('../less/paper-assignment.less');

var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');

var Reflux = require('reflux');
var PaperAssignmentAction = require('./actions/paper-assignment/paper-assignment-actions');
var PaperAssignmentStore = require('./store/paper-assignment/paper-assignment-store.js');

var PaperAssignment = React.createClass({
  mixins: [Reflux.connect(PaperAssignmentStore)],

  getInitialState: function () {
    return {
      links: [
        {phoneNumber: '1388686868',paper:'初级智障可以掌握的paper'},
        {phoneNumber: '1387878787',paper:'中级智障可以掌握的paper'},
        {phoneNumber: '1869999999',paper:'高级智障可以掌握的paper'}
      ]
    };
  },

  componentDidUpdate: function () {

  },

  componentDidMount: function () {

  },

  render: function () {
    var linksHtml = this.state.links.map((link, index) => {

      return (
          <div className ="link row" key={index}>
            <div className="col-md-5 drop-little">
              <span>{link.phoneNumber}</span>
            </div>
            <div className="col-md-5 drop-little">
              <span>{link.paper}</span>
            </div>
            <div className="col-md-1">
              <i className="fa fa-times fa-2x"></i>
            </div>
          </div>
      );
    });

    return (
        <div>
          <header>
            <Navigation>
              <Account />
            </Navigation>
          </header>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 center-content">
              {linksHtml}
              <div id="new-links" className ="row">
                <div className="col-md-5">
                  <input type="text" className="form-control"/>
                </div>
                <div className="col-md-5">
                  <select className="form-control" name="papers" id="papers">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="col-md-1 drop-down">
                  <i className="fa fa-plus-circle fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

ReactDom.render(<PaperAssignment />, document.getElementById('assignment-container'));