'use strict';


var LoginStore = require('../../store/register-page/login-store');
var RegisterStore = require('../../store/register-page/register-store');
var RegisterActions = require('../../actions/register-page/register-actions');
var Reflux = require('reflux');
var constraint = require('../../../../mixin/register-constraint');
var validate = require('validate.js');

var Captcha = React.createClass({
  mixins: [Reflux.connect(RegisterStore), Reflux.connect(LoginStore)],

  getInitialState: function () {
    return {
      captchaError: ''
    };
  },

  checkInfo: function (value) {
    if (value.length === 0) {
      return '请输入验证码';
    } else if (value.length !== 4) {
      return '验证码位数错误';
    }
    return '';
  },

  validate: function (event) {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    var valObj = {};
    valObj[name] = value;
    var error = this.checkInfo(value);

    var stateObj = {};

    stateObj[name + 'Error'] = error;
    this.setState(stateObj);

    stateObj.captcha = value;

    RegisterActions.inputCaptcha(stateObj);
  },

  render: function () {

    return (

        <div>
          <div className="captcha-input">
            <input className="form-control" type="text" placeholder="请输入验证码" name="captcha"
                   ref="captcha"
                   onBlur={this.validate}/>
          </div>
          <div className="pull-right captcha-img">
            <img src="http://192.168.99.100:8888/api/captcha.jpg"/>
          </div>
          <div
              className={' lose-captcha' + (this.state.captchaError === '' ? ' hide' : '')}>{this.state.captchaError}</div>

        </div>
    );
  }
});

module.exports = Captcha;

