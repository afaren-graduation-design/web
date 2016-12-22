'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var Reflux = require('reflux');

var MentorManagement = React.createClass({
    mixins: [Reflux.connect(UserCenterStore)],


    getInitialState: function () {
        return {
            currentState: 'userDetail'
        };
    },
    render: function () {
        var classString = (this.state.currentState === 'mentorManagement' ? '' : ' hide');
        var mentorList = [
            {name: "李煜", state: '已添加'},
            {name: "杨幂", state: '已添加'},
            {name: "王一", state: '已添加'},
            {name: "王一", state: '已添加'},
            {name: "白宇", state: '已添加'}
        ];

        var mentorSearchList = [
            {name: "刘亦菲"},
            {name: "林依晨"},
            {name: "范冰冰"}];

        var mentorSearchListHTML = mentorSearchList.map((mentor,index) => {
            return (
                <option value="" key={index}>{mentor.name}</option>
            )
        });

        var mentorListHTML = mentorList.map((mentor,index) => {
            return (
                <tr key={index}>
                    <td>{mentor.name}</td>
                    <td>{mentor.state}</td>
                </tr>
            )
        });

        var selectClassString = mentorSearchListHTML ? '' : hide;

        return (
            <div className={"col-md-9" + classString}>
                <div className="content  text-center">
                        <table className='table  table-striped table-hover table-bordered'>
                            <thead>
                            <div className="list-group-item active"></div>
                            <tr className="table-head">
                                    <td>姓名</td>
                                    <td>状态</td>
                                </tr>
                            </thead>
                            <tbody>
                            {mentorListHTML}
                            </tbody>
                        </table>
                    <div className=" col-md-4 col-md-offset-3">
                        <div className="input-group">
                            <input type="text" className="form-control search-mentor-frame col-md-3"/>
                            <span className="input-group-addon">
                                 <button className="add-mentor-btn" disabled>添加</button>
                             </span>
                        </div>
                        <div className="search-mentor-list">
                            <select multiple="true" className={"col-md-10" + selectClassString}>
                                {mentorSearchListHTML}
                            </select>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
});

module.exports = MentorManagement;