require('font-awesome');

var Reflux = require('reflux');
var papers = ['paper1', 'paper2', 'paper3', 'paper4', 'paper5', 'paper6'];
var PaperListAction = require('../../actions/paper-list/paper-list');
var PaperListStore = require('../../store/paper-list/paper-list');

var PaperList = React.createClass({
  getInitialState: function () {
    papers:[]
  },
  mixins: [Reflux.connect(PaperListStore)],

  componentDidMount: function () {
    PaperListAction.loadPapers();
  },
  render: function () {
    var papers = this.state.papers || [];
    var paperList = papers.map((paper, index) => {
      return <li className={"list-item"} key={index}>
        <a href="#">
          <span className="paper-name">
            {paper.title}
          </span>
        </a>
      </li>
    });

    return (
        <div>
          <h4>
            <span className="fa fa-group"> </span>
            <span>一年级</span>
          </h4>
          <ul className="list">
            {paperList}
          </ul>
        </div>
    );
  }
});

module.exports = PaperList;