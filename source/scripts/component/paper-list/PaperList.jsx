require('font-awesome');
var Reflux = require('reflux');
var PaperListAction = require('../../actions/paper-list/paper-list');
var PaperListStore = require('../../store/paper-list/paper-list');

var PaperList = React.createClass({

  mixins: [Reflux.connect(PaperListStore)],

  componentDidMount: function () {
    PaperListAction.loadPapers();
  },

  clickPaper: function (id, programId, operationType) {
    if (operationType === 'UNDISTRIBUTION') {
      return;
    }
    return () => {
      PaperListAction.getOnePaper(id, programId);
    }
  },
  render: function () {
    var papers = this.state.papers || [];

    var programList = papers.map((paper, index) => {

      var icons = ['fa-coffee', 'fa-diamond', 'fa-code', 'fa-files-o', 'fa-cube'];

      return (
        <div key={index}>
          <h4>
            <span className="fa fa-group"> </span>
            <span>{paper.programId}</span>
          </h4>
          <div>
            <ul className="list row">
              {paper.data.map((item, index) => {
                var randomNumber = Math.floor(Math.random() * 5);
                return (
                  <li className="list-item col-sm-2"
                      onClick={this.clickPaper(item.id, item.programId, item.operationType)} key={index}>
                    <div className="icon-box col-sm-4">
                          <span>
                            <i className={"fa " + icons[randomNumber]}> </i>
                          </span>
                    </div>
                    <div className="paper-box col-sm-8">
                      <div>
                        <a href="#">
                            <span className="paper-name">
                              {item.paperName}{item.operationType === 'DISTRIBUTION' ? '' : '(未发布)'}
                            </span>
                        </a>
                      </div>
                      <span className="quizzes">30道题</span>
                      <div className="progress">
                        <div className="progress-bar"></div>
                      </div>
                      <span className="progress-description">50% finished</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>)
    });

    return (
      <div>
        {programList}
      </div>
    )
  }
});

module.exports = PaperList;