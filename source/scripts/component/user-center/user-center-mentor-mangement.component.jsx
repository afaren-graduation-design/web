'use strict';
var UserCenterStore = require('../../store/user-center/user-center-store');
var MentorManagementStore = require('../../store/user-center/mentor-management-store');
var MentorManagementAction = require('../../actions/user-center/mentor-management-action');
var Reflux = require('reflux');
var Rx = require('rx');

var MentorManagement = React.createClass({
    mixins: [Reflux.connect(UserCenterStore),Reflux.connect(MentorManagementStore)],

    getInitialState: function () {
        return {
            currentState: 'userDetail',
            mentorSearchList: [],
            inputId: '',
            isDisabled: true
        };
    },

    componentDidMount: function () {
        Rx.Observable.fromEvent(this.inputInfo,'keyup')
            .pluck('target','value')
            .map(text => text.trim())
            .filter(text => text.length >= 3)
            .debounce(1000)
            .distinctUntilChanged()
            .forEach(item => {
               MentorManagementAction.searchMentor(item);
            })
    },

    onchange: function (event) {
        this.inputInfo.value =  event.target.value;
        this.setState({inputId: event.target.key, isDisabled:false});
    },

    searchMentor: function (event) {
        const email = event.target.value;
        console.log( "===="+ email);
    },

    addMentor: function () {
        const id = this.state.inputId;
        console.log("+++++" + id);

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

        var mentorSearchList = this.state.mentorSearchList || [];

        var mentorSearchListHTML = mentorSearchList.map((mentor, index) => {
            return (
                <option key={mentor._id} value={mentor.email}>{mentor.name}</option>
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
                            <input type="text" className="form-control search-mentor-frame col-md-3" placeholder="请输入教练邮箱"
                                   ref={(ref) => {
                                       this.inputInfo = ref;
                                   }} />
                            <span className="input-group-addon">
                                 <button className="add-mentor-btn" disabled={this.state.isDisabled} onClick={this.addMentor}>添加</button>
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