var Reflux = require('reflux');
console.log('xixi');
// var PaperDetailAction = require('../../actions/paper-detail/paper-detail');
var PaperDetailStore = require('../../store/paper-index/paper-index');

var PaperDetailForm = React.createClass({

  mixins: [Reflux.connect(PaperDetailStore)],

  render(){
    return (
      <div>
        {this.state.id}
      </div>
    )
  }
});

module.exports = PaperDetailForm;
