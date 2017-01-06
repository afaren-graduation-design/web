'use strict';

var Reflux = require('reflux');

var MessageManagementAction = Reflux.createActions([
  'findUnread',
  'findAll'

]);

module.exports = MessageManagementAction;
