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
      links: [],
      deletedLinks: []
    };
  },

  componentDidMount: function () {
    PaperAssignmentAction.getLinks();
  },

  handleAddClick: function() {
    var phoneNumber = this.refs.phoneNumber.value;
    var paperName = this.refs.papers.value;

    PaperAssignmentAction.addLink({
      phoneNumber: phoneNumber,
      paperName: paperName
    },this.state.links)
  },

  handleDeleteClick:function(evt) {
    var deleteIndex = evt.target.id;
    PaperAssignmentAction.deleteLink({
      phoneNumber: this.state.links[deleteIndex].phoneNumber,
      paperName: this.state.links[deleteIndex].paperName
    },this.state.deletedLinks,deleteIndex)
  },

  render: function () {
    var linksHtml = this.state.links.map((link, index) => {
      if(this.state.deletedLinks.indexOf(index) !== -1){
        return (
            <div className="link row" key={index}>
              <div className="col-md-10 drop-little">
                <span>已删除</span>
              </div>
            </div>
        );
      } else {
        return (
            <div className="link row" key={index}>
              <div className="col-md-5 drop-little">
                <span>{link.phoneNumber}</span>
              </div>
              <div className="col-md-5 drop-little">
                <span>{link.paperName}</span>
              </div>
              <div className="col-md-1">
                <i className="fa fa-times fa-2x" id={index} onClick={this.handleDeleteClick}></i>
              </div>
            </div>
        );
      }
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
                  <input ref="phoneNumber" type="text" className="form-control"/>
                </div>
                <div className="col-md-5">
                  <select className="form-control" ref="papers" name="papers" id="papers">
                    <option value="初级智障可以掌握的paper">初级智障可以掌握的paper</option>
                    <option value="中级智障可以掌握的paper">中级智障可以掌握的paper</option>
                    <option value="高级智障可以掌握的paper">高级智障可以掌握的paper</option>
                    <option value="智障无法掌握的paper">智障无法掌握的paper</option>
                  </select>
                </div>
                <div className="col-md-1 drop-down">
                  <i className="fa fa-plus-circle fa-2x" onClick={this.handleAddClick}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

ReactDom.render(<PaperAssignment />, document.getElementById('assignment-container'));