'use strict';

var Reflux = require('reflux');

var MessageManagementAction = Reflux.createActions([
  'findUnread',
  'findAll',
  'operateMessage'

]);

module.exports = MessageManagementAction;
