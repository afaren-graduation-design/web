'use strict';

require('../less/paper-assignment.less');

var Navigation = require('./component/navigation/navigation.component.jsx');
var Account = require('./component/reuse/get-account.component.jsx');

var Reflux = require('reflux');
var validate = require('validate.js');
var PaperAssignmentAction = require('./actions/paper-assignment/paper-assignment-actions');
var PaperAssignmentStore = require('./store/paper-assignment/paper-assignment-store.js');
var constraint = require('../../mixin/register-constraint');

function getError(validateInfo, field) {
  if (validateInfo && validateInfo[field] && validateInfo[field].length > 0) {
    return validateInfo[field][0];
  }
  return '';
}

var PaperAssignment = React.createClass({
  mixins: [Reflux.connect(PaperAssignmentStore)],

  getInitialState: function () {
    return {
      links: [],
      papers: [
        {paperName:'初级智障可以掌握的paper'},
        {paperName:'中级智障可以掌握的paper'},
        {paperName:'高级智障可以掌握的paper'},
        {paperName:'智障完全无法掌握的paper'}
      ],
      phoneNumberError:''
    };
  },

  componentDidMount: function () {
    PaperAssignmentAction.getLinks();
    PaperAssignmentAction.getPaperName();
  },

  validate: function () {
    var phoneNumber = this.refs.phoneNumber.value.trim();
    var valObj = {};
    valObj.mobilePhone = phoneNumber;
    var result = validate(valObj, constraint);
    var error = getError(result, 'mobilePhone');

    this.setState({phoneNumberError: error});
  },

  handleAddClick: function() {
    var phoneNumber = this.refs.phoneNumber.value;
    var paperName = this.refs.papers.value;

    this.validate();

    if(!this.state.phoneNumberError){
      PaperAssignmentAction.addLink({
        phoneNumber: phoneNumber,
        paperName: paperName
      },this.state.links)
    }
  },

  handleDeleteClick:function(evt) {
    var deleteIndex = evt.target.id;
    PaperAssignmentAction.deleteLink({
      phoneNumber: this.state.links[deleteIndex].phoneNumber,
      paperName: this.state.links[deleteIndex].paperName
    },this.state.links,deleteIndex)
  },

  render: function () {
    var linksHtml = this.state.links.map((link, index) => {
      if(link.delete === true){
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
                <i id={index} onClick={this.handleDeleteClick}>删除</i>
              </div>
            </div>
        );
      }
    });

    var papersHtml = this.state.papers.map((paper, index) => {
        return (
            <option key={index} value={paper.paperName}>{paper.paperName}</option>
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
                  <input ref="phoneNumber" type="text" className="form-control" onBlur={this.validate} />
                  <div className={'lose' + (this.state.phoneNumberError === '' ? ' hide' : '')}>{this.state.phoneNumberError}</div>
                </div>
                <div className="col-md-5">
                  <select className="form-control" ref="papers" name="papers" id="papers">
                    {papersHtml}
                  </select>
                </div>
                <div className="col-md-1 drop-down">
                  <i onClick={this.handleAddClick}>增加</i>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

ReactDom.render(<PaperAssignment />, document.getElementById('assignment-container'));