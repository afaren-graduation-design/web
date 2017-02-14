'use strict';

var Reflux = require('reflux');

var UserCenterActions = Reflux.createActions([
  'loadUserDetail',
  'pathChange',
  'updateUserDetail',
  'changeState',
  'changeGender',
  'validateGender',
  'checkGender',
  'loadResult',
  'loadMentorManagement',
  'loadMessage'
]);

module.exports = UserCenterActions;
