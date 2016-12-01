var Reflux = require('reflux');
var PaperListAction = require('../../actions/paper-list/paper-list');
var request = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');

var PapersListStore = Reflux.createStore({
  listenables: [PaperListAction],

  onLoadPapers: function () {
    request.get('/api/program/1/papers')
        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err, res) => {
          if (err) {
            return;
          }
          this.trigger({papers: res.body.data});
        });
  }
});

module.exports = PapersListStore;