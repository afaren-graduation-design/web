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