'use strict';

var Reflux = require('reflux');
var RegisterAction = require('../../actions/register-page/register-actions.js');
var RegisterStore = require('../../store/register-page/register-store.js');
var RegisterForm = require('./register-form.component.jsx');
var LoginForm = require('./login-form.component.jsx');
var LoginInfo = require('./login-info.component.jsx');
var RegisterAgreement = require('./register-agreement.component.jsx');
var RegisterPassword = require('./register-password.component.jsx');
var Captcha = require('./captcha.component.jsx');

var RegisterApp = React.createClass({
  mixins: [Reflux.connect(RegisterStore)],

  getInitialState: function () {
    return {
      isDisabled: false
    }
  },

  componentWillMount: function () {
    RegisterAction.openRegister();
  },

  componentDidUpdate: function () {
    this.checkOpenRegister();
  },

  checkOpenRegister: function () {
    if (this.state.isDisabled) {
      $('#open-register-check').modal('show');
    }
  },

  render() {
    return (
        <div className="row">
          <RegisterForm isDisabled={this.state.isDisabled}>
            <RegisterPassword isDisabled={this.state.isDisabled}/>
            <Captcha />
          </RegisterForm>
          <LoginForm>
            <Captcha />
          </LoginForm>
          <LoginInfo/>
          <RegisterAgreement/>
        </div>
    );
  }
});

module.exports = RegisterApp;
