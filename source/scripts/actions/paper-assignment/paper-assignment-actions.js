'use strict';

var Reflux = require('reflux');

var PaperAssignmentAction = Reflux.createActions([
  'addLink',
  'getLinks',
  'deleteLink'
]);

module.exports = PaperAssignmentAction;