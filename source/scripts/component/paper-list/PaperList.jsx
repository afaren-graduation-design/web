require('font-awesome');

var Reflux = require('reflux');
var PaperListAction = require('../../actions/paper-list/paper-list');
var PaperListStore = require('../../store/paper-list/paper-list');
var {ProgressBar} = require('react-bootstrap');


var PaperList = React.createClass({

  mixins: [Reflux.connect(PaperListStore)],

  componentDidMount: function () {
    PaperListAction.loadPapers();
  },
  render: function () {
    var papers = this.state.papers || [];

    var programList = papers.map((paper, index) => {
      return (
          <div key={index}>
            <h4>
              <span className="fa fa-group"> </span>
              <span>{paper.programId}</span>
            </h4>
            <div>
              <ul className="list row">
                {paper.data.map((item, index) => {
                  var icon = (item.type === "java") ? "fa-coffee" :
                        ((item.type === "Ruby") ? "fa-diamond" :
                          ((item.type === "python") ? "fa-code" :
                            ((item.type === "javaScript") ? "fa-cube":"fa-files-o")));
                  return (
                      <li className="list-item col-sm-2" key={index}>
                        <div className="icon-box col-sm-5">
                          <span>
                            <i className={"fa " + icon}> </i>
                          </span>
                        </div>
                        <div className="paper-box col-sm-7">
                          <div>
                            <a href="#">
                            <span className="paper-name">
                            {item.paperName}
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