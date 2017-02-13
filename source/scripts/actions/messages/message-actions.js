'use strict';

var Reflux = require('reflux');

var MessageActions = Reflux.createActions([
  'createMessage',
  'getAnswer'
]);

module.exports = MessageActions;
