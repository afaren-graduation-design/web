'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');
var GroupAvatar = require('../style-guide/group-avatar.component.jsx');
var Paper = require('../style-guide/paper.component.jsx');

var GroupHomepage = React.createClass({
  getInitialState(){
    return {
    }
  },
  render(){
    return (
        <div>
          <GroupTitle titleName="我的群组"/>
          <GroupAvatar />
          <GroupTitle titleName="我关注的试卷"/>
          <Paper />
        </div>
    )
  }
});

module.exports = GroupHomepage;