require('font-awesome');

var Reflux = require('reflux');
var papers = ['paper1', 'paper2', 'paper3', 'paper4', 'paper5', 'paper6'];
var PaperList = React.createClass({
  render: function () {
    var paperList = papers.map((paper, index) => {
      return <li className={"list-item"} key={index}>
        <a href="#">
              <span className="paper-name">
                {paper}
              </span>
          <span> </span>
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