'use strict';
var GetAccountActions = require('../../actions/reuse/get-account-actions');
var GetAccountStore = require('../../store/reuse/get-account-store');
var Reflux = require('reflux');

var GetAccount = React.createClass({
  mixins: [Reflux.connect(GetAccountStore)],

  getInitialState: function () {
    return {
      isLoged: false,
      account: '',
      isSuperAdmin: false
    };
  },

  componentDidMount: function () {
    if ("index" !== this.props.state) {
      GetAccountActions.loadAccount();
    }
  },

  logout: function () {
    GetAccountActions.logout();
  },

  render: function () {
    var userList = (
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="user-center.html#userDetail">个人中心</a></li>
        <li><a href="paper-list.html">控制台</a></li>
        <li role="separator" className="divider"/>
        <li><a onClick={this.logout}>退出</a></li>
      </ul>
    );

    var superAdminList = (
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="admin.html">管理中心</a></li>
        <li><a href="paper-assignment.html">试卷指定</a></li>
        <li role="separator" className="divider"/>
        <li><a onClick={this.logout}>退出</a></li>
      </ul>
    );
    return (
      <div className="header-right">
        <div className={(this.state.isLoged ? 'hide' : '') + ' login'}>
          <a className="register" href='register.html#login'>登录</a><a href='register.html#register'>注册</a>
        </div>
        <div className={this.state.isLoged ? 'dropdown' : 'hide'}>
          <div className="dropdown-style" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="true">
            <a><font color="white"><i className="fa fa-bell bigger"></i></font></a>

            &nbsp;&nbsp;
            {this.state.account}
            <span className="caret"/>
          </div>
          {this.state.isSuperAdmin ? superAdminList : userList}
        </div>
      </div>
    );
  }
});

module.exports = GetAccount;
