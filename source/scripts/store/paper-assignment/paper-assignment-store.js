'use strict';

var Reflux = require('reflux');
var PaperAssignmentAction = require('../../actions/paper-assignment/paper-assignment-actions');
var request = require('superagent');
var constant = require('../../../../mixin/constant');
var errorHandler = require('../../../../tools/error-handler.jsx');


var PaperAssignmentStore = Reflux.createStore({
  listenables: PaperAssignmentAction

});

module.exports = PaperAssignmentStore;
