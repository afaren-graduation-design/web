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
            {name: "王一", state: '已添加'},
            {name: "王一", state: '已添加'},
            {name: "王一", state: '已添加'},
            {name: "王一", state: '已添加'},
            {name: "王一", state: '已添加'}
        ];

        var mentorListHTML = mentorList.map((mentor) => {
            return (
                <div>
                    <tr>
                        <td>{mentor.name}</td>
                        <td>{mentor.state}</td>
                    </tr>
                </div>
            )
        });


        return (
            <div className={"col-md-9" + classString}>
                <div className="content  text-center">
                    <div className="table-list">
                        <table className='table  table-striped table-hover table-bordered'>
                            <thead>
                            <div className="list-group-item active">
                                <tr className="table-head">
                                    <td>姓名</td>
                                    <td>状态</td>
                                </tr>
                            </div>
                            </thead>
                            <tbody>
                            {mentorListHTML}
                            </tbody>
                        </table>
                    </div>

                    <div className="search-frame col-md-3 col-md-offset-4">
                        <input type="text" placeholder="请输入老师的名字"/>
                        <i className="glyphicon glyphicon-search"> </i>
                    </div>

                    <div className="col-md-4 text-center">
                        
                        <div>张三<button>添加</button></div>
                        <div>王二<button>添加</button></div>
                        <div>李一<button>添加</button></div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = MentorManagement;