require('font-awesome');

var Reflux = require('reflux');
var PaperListAction = require('../../actions/paper-list/paper-list');
var PaperListStore = require('../../store/paper-list/paper-list');

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
              <ul className="list">
                {paper.data.map((item, index) => {
                  return (
                      <li className={"list-item"} key={index}>
                        <a href="#">
                          <span className="paper-name">
                            {item.paperName}
                          </span>
                        </a>
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