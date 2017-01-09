'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MessageManagementStore = require('../../store/user-center/message-management-store');
var Reflux = require('reflux');

var MessageTabs = React.createClass({
  mixins: [Reflux.connect(UserCenterStore), Reflux.connect(MessageManagementStore)],


  onChangeTabsValue(index) {
    this.props.onChangeTabsValue(index);
  },

  getMessageList(index) {
    this.props.getMessageList(index);
  },

  handleTabsToggle(index) {
    this.props.tabsConfiguration.map((item, i) => {
      i === index ? item.activeStatus = 'active' : item.activeStatus = '';
      return item;
    });
    this.onChangeTabsValue(index);
    this.getMessageList(index);
  },

  render: function () {
    var tabsConfiguration = this.props.tabsConfiguration.map((tab, index) => {
      return (
          <li className={tab.activeStatus}>
            <a href='#' onClick={this.handleTabsToggle.bind(this, index)}>
              <div className='font-color'>
                <i className={'fa ' + tab.icon}> </i>&nbsp;&nbsp;{tab.value}
              </div>
            </a>
          </li>
      );
    });
    return (
        <div className='tab-ul'>
          <ul id='myTab' className='myTab nav nav-tabs'>
            {tabsConfiguration}
          </ul>
        </div>
    );
    }
});

module.exports = MessageTabs;