'use strict';

require('es6-shim');
var nocache = require('superagent-no-cache');
var Reflux = require('reflux');
var HomeworkActions = require('../../actions/homework/homework-actions');
var superAgent = require('superagent');
var homeworkQuizzesStatus = require('../../../../mixin/constant').homeworkQuizzesStatus;
var errorHandler = require('../../../../tools/error-handler.jsx');
var async = require('async');
var page = require('page');
var getQueryString = require('../../../../tools/getQueryString');
var id = getQueryString('sectionId');
var paperId = getQueryString('paperId');
var programId = getQueryString('programId');

var pollTimeout;
var TIMEOUT = 5000;

var HomeworkSidebarStore = Reflux.createStore({
  listenables: [HomeworkActions],

  init: function () {
    this.data = {};
  },

  hasTaskProcess() {
    return this.data.homeworkQuizzes.some((item) => {
      return item.status === homeworkQuizzesStatus.PROGRESS;
    });
  },

  pollData: function () {

    if (this.hasTaskProcess()) {
      pollTimeout = setTimeout(this.onInit(id), TIMEOUT);
    } else {
      pollTimeout && clearTimeout(pollTimeout);
    }
  },

  onInit: function ({programId, paperId, sectionId, questionId}) {
    async.waterfall([
      (done) => {
        superAgent.get('/api/test/detail')
          .set('Content-Type', 'application/json')
          .use(nocache)
          .use(errorHandler)
          .end(function (err, resp) {
            if (resp.body.data === false) {
              done(true, null);
            } else {
              done(null, null);
            }
          });
      },
      (data, done) => {
        superAgent.get(`/api/programs/${programId}/papers/${paperId}/sections/${sectionId}/questionIds`)
          .set('Content-Type', 'application/json')
          .use(nocache)
          .use(errorHandler)
          .end(done);
      },

      (data, done) => {
        this.data.homeworkQuizzes = data.body;

        var orderId = location.hash.substr(1);
        orderId = parseInt(orderId) || 1;
        orderId = Math.max(orderId, 1);
        orderId = Math.min(orderId, this.data.homeworkQuizzes.length);
        this.data.orderId = orderId;

        done(null, {
          id,
          orderId: orderId
        });
      },

      (query, done) => {
        superAgent.get(`/api/questions/${questionId}`)
          .set('Content-Type', 'application/json')
          .use(nocache)
          .use(errorHandler)
          .query(query)
          .end(done);
      }
    ], (err, data) => {
      if (err === true) {
        page('user-center.html');
      }
      this.data.currentQuiz = data.body;
      // if (data.body.answer.status === 200) {
      //   this.data.currentAnswer = data.body.answer.path;
      // }
      this.trigger(this.data);
      this.pollData();
    });
  },

  onCreateTask: function (data) {

    var jsonData = Object.assign({
      paperId: paperId,
      programId: programId,
      quizId: this.data.currentQuiz.id,
      homeworkQuizUri: this.data.currentQuiz.uri
    }, data);
    async.waterfall([
      (done) => {
        superAgent.post('/api/homework/scoring')
          .set('Content-Type', 'application/json')
          .use(nocache)
          .use(errorHandler)
          .send(jsonData)
          .end(done);
      },

      (data, done) => {
        this.data.currentQuiz.status = data.body.status;
        this.data.currentQuiz.result = data.body.result;
        this.data.homeworkQuizzes[this.data.orderId - 1].status = data.body.status;
        done(null, null);
      }
    ], (err, data) => {
      this.trigger(this.data);
      this.pollData();
    });
  },

  onChangeOrderId: function (orderId) {
    async.waterfall([
      (done) => {
        var orderId = location.hash.substr(1);
        orderId = parseInt(orderId) || 1;
        orderId = Math.max(orderId, 1);
        orderId = Math.min(orderId, this.data.homeworkQuizzes.length);
        this.data.orderId = orderId;

        done(null, {
          id,
          orderId: orderId
        });
      },

      (query, done) => {
        superAgent.get(`/api/questions/${orderId}`)
          .set('Content-Type', 'application/json')
          .use(nocache)
          .use(errorHandler)
          .query(query)
          .end(done);
      }
    ], (err, data) => {
      this.data.currentQuiz = data.body;
      this.trigger(this.data);
      this.pollData();
    });
  }
});

module.exports = HomeworkSidebarStore;


