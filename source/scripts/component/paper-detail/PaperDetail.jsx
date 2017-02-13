var Reflux = require('reflux');
var paperDetailAction = require('../../actions/paper-detail/paper-detail');
var paperDetailStore = require('../../store/paper-detail/paper-detail');

var PaperDetailForm = React.createClass({
  mixins: [Reflux.connect(paperDetailStore)],

  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },

  componentDidMount(){
    var id = this.getQueryString('id');
    var programId = this.getQueryString('programId');
    paperDetailAction.getPaperDetail(id, programId);
  },

  render(){
    return (
      <div>

      </div>
    )
  }
});

module.exports = PaperDetailForm;
