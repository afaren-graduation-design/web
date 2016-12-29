'use strict';

var Reflux = require('reflux');

var MentorManagementAction = Reflux.createActions([
  'getMessages',
  'searchMentor',
  'createMessages'

]);

module.exports = MentorManagementAction;
