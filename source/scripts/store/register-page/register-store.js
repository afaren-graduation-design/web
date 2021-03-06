'use strict';

var Reflux = require('reflux');
var RegisterActions = require('../../actions/register-page/register-actions');
var page = require('page');
var request = require('superagent');
var constant = require('../../../../mixin/constant');
var async = require('async');
var errorHandler = require('../../../../tools/error-handler.jsx');

var RegisterStore = Reflux.createStore({
  listenables: RegisterActions,

  onCheckEmail: function (value, done) {
    return request
      .get('/api/register/validate-email')
      .set('Content-Type', 'application/json')
      .query({
        email: value
      })
      .use(errorHandler)
      .end((err, req) => {
        var error = '';
        if (req.body.status === constant.httpCode.OK) {
          error = '该邮箱已被注册';
        }
        done({emailError: error});
      });
  },

  onCheckMobilePhone: function (value, done) {
    return request
      .get('/api/register/validate-mobile-phone')
      .set('Content-Type', 'application/json')
      .query({
        mobilePhone: value
      })
      .use(errorHandler)
      .end((err, req) => {
        var error = '';
        if (req.body.status === constant.httpCode.OK) {
          error = '该手机号已被注册';
        }
        done({mobilePhoneError: error});
      });
  },

  onRegister: function (mobilePhone, email, password, captcha) {
    request
      .post('/api/register')
      .set('Content-Type', 'application/json')
      .send({
        mobilePhone: mobilePhone,
        email: email,
        password: password,
        captcha: captcha
      })
      .use(errorHandler)
      .end((err, req) => {
        var info = req.body;

        if (info.status === constant.httpCode.OK) {
          page('user-center.html#userDetail');
        } else if (info.status === constant.httpCode.FORBIDDEN) {
          this.trigger({
            isDisabled: info.registerable
          });
        } else {
          var emailExist = info.data.isEmailExist ? '该邮箱已被注册' : '';
          var mobilePhoneExist = info.data.isMobilePhoneExist ? '该手机号已被注册' : '';
          var captchaError = info.data.isCaptchaError ? '验证码错误' : '';

          this.trigger({
            mobilePhoneError: mobilePhoneExist,
            emailError: emailExist,
            captchaError: captchaError,
            clickable: false
          });
        }
      });
  },

  onInitialUserQuiz: function () {
    async.series({
      initializeQuizzes: (done) => {
        request.get('/api/user-initialization/initializeQuizzes')
          .set('Content-Type', 'application/json')
          .use(errorHandler)
          .end(function (err) {
            if (err) {
              done(err);
            } else {
              done(null, true);
            }
          });
      }
    }, function (err, data) {
      if (data.initializeQuizzes) {
        page('user-center.html#userDetail');
      } else {
        console.log(err);
      }
    });
  },

  onChangeState: function (isShowToggle) {
    this.trigger({
      isShowToggle: !isShowToggle
    });
  },

  onInputPassword: function (password) {
    this.trigger({
      password: password
    });
  },

  onInputCaptcha: function (captcha) {
    this.trigger(captcha);
  },

  onCheckData: function (stateObj) {
    this.trigger(stateObj);
  },

  onRegisterable: function () {
    request.get('/api/register/registerable')
      .set('Content-Type', 'application/json')
      .use(errorHandler)
      .end((err, res) => {
        if (!res.body) {
          return;
        } else if (res.status === constant.httpCode.OK) {
          this.trigger({
            isDisabled: !res.body.registerable
          });
        }
      });
  }
});

module.exports = RegisterStore;
