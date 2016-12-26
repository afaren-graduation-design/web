'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var Reflux = require('reflux');

var MentorManagement = React.createClass({
    mixins: [Reflux.connect(UserCenterStore)],


    getInitialState: function () {
        return {
            currentState: 'userDetail',
            inputValue: ''
        };
    },
    onchange: function (event) {
        console.log("=========="+ event.target.value);
        this.setState({inputValue: event.target.value});


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

        var mentorSearchListHTML = mentorSearchList.map((mentor, index) => {
            return (
                <option key={index} value={mentor.name}>{mentor.name}</option>
            )
        });

        var mentorListHTML = mentorList.map((mentor, index) => {
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
                    <div className="table-list">
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
                    </div>
                    <div className=" col-md-4 col-md-offset-3">
                        <div className="input-group">
                            <input type="text" className="form-control search-mentor-frame col-md-3" placeholder="请输入教练邮箱" value={this.state.inputValue}/>
                            <span className="input-group-addon">
                                 <button className="add-mentor-btn" disabled>添加</button>
                             </span>
                        </div>
                        <div className="search-mentor-list">
                            <select multiple="true" className={"col-md-10" + selectClassString} onChange={this.onchange}>
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