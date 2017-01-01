'use strict';

var MentorTable = React.createClass({
  render() {
    var mentorList = this.props.mentorList || [];
    var mentorListHTML = mentorList.map((mentor, index) => {
      var state = '';
      if (mentor.state === 0) {
        state = '未读';
      } else {
        state = '已读';
      }
      return (
        <tr key={index}>
          <td>{mentor.name}</td>
          <td>{state}</td>
        </tr>
      )
    });
    return (
      <table className='table  table-striped table-hover table-bordered'>
        <thead>
        <tr className="table-head">
          <td>姓名</td>
          <td>状态</td>
        </tr>
        </thead>
        <tbody>
        {mentorListHTML}
        </tbody>
      </table>
    );
  }
});

module.exports = MentorTable;
