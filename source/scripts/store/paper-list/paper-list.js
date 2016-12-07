var Reflux = require('reflux');
var PaperListAction = require('../../actions/paper-list/paper-list');
var request = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');
var async = require('async');
var page = require('page');

var PapersListStore = Reflux.createStore({
  listenables: [PaperListAction],

  onLoadPapers: function () {
    async.waterfall([
      (done) => {
        request.get('/api/user/programs')
          .set('Content-Type', 'application/json')
          .use(errorHandler)
          .end((err, res) => {
              if (err) {
                return;
              }
              done(null, res.body.programIds);
            }
          )
      },
      (data, done)=> {
        async.map(data, (programId, callback)=> {
          request.get(`/api/programs/${programId}/papers`)
            .set('Content-Type', 'application/json')
            .use(errorHandler)
            .end((err, resp)=> {
              if (err) {
                return;
              }
              callback(null, {data: resp.body.data, programId});
            })
        }, (err, result)=> {
          if (err) {
            return;
          }
          this.trigger({papers: result});
        })
      }
    ]);
  },

  onGetOnePaper: function (id, programId) {
    page('dashboard.html?programId='+programId + '&id='+id);
  }
});

module.exports = PapersListStore;