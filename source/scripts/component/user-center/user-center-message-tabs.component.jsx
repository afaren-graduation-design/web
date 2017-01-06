'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MessageManagementStore = require('../../store/user-center/message-management-store');
var MessageManagementAction = require('../../actions/user-center/message-management-action');
var Reflux = require('reflux');

var MessageTabs = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],


  render: function () {
  }
});

module.exports = MessageTabs;