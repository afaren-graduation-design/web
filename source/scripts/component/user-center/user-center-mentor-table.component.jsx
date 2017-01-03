'use strict';

var MentorTable = React.createClass({
  render() {
    const stateData = {
      'AGREE_INVITATION': '已接受',
      'INVITATION': '已发送'
    };

    var mentorList = this.props.mentorList || [];
    var mentorListHTML = mentorList.map(({name, type}, index) => {
      if (type !== 'DISAGREE_INVITATION') {
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{stateData[type]}</td>
          </tr>
        );
      }

    });
    return (
      <table className='table table-striped table-hover table-bordered'>
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
