'use strict';
import '../../../less/user-center.less';
var UserCenterStore = require('../../store/user-center/user-center-store');
var Reflux = require('reflux');

var Message = React.createClass({
  mixins: [Reflux.connect(UserCenterStore)],


  getInitialState: function () {
    return {
      currentState: 'userDetail'
    };
  },
  render: function () {
    var classString = (this.state.currentState === 'message' ? '' : ' hide');

    return (
        <div className={"col-md-9 col-sm-9 col-xs-12 container-fluid" + classString}>
          <div id="tabs" className="content">
            <div>
              <ul id="myTab" className="myTab nav nav-tabs">
                <li className="active">
                  <a href="#unread" data-toggle="tab">
                    <font color="gray"><i className="fa fa-bell"></i>&nbsp;未读</font>
                  </a>
                </li>
                <li><a href="#all" data-toggle="tab">
                  <font color="gray"><i className="fa fa-envelope"></i>&nbsp;所有</font>
                </a>
                </li>
              </ul>
            </div>
            <div id="myTabContent" className="row tab-content">
              <div className="tab-pane fade in active" id="unread">
                <table className="table table-bordered table-striped table-hover">
                  <thead className="table-header">
                  <th>未读消息</th>
                  </thead>
                  <tbody className="table-body">
                  <tr>
                  <td>教练未同意查看第一张试卷第一题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  <tr>
                    <td>教练未同意查看第一张试卷第二题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  <tr>
                    <td>教练未同意查看第一张试卷第三题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="all">
                <table className="table table-bordered table-striped table-hover col-sm-5 col-sm-offset-1">
                  <thead className="table-header">
                  <th>所有消息</th>
                  </thead>
                  <tbody className="table-body">
                  <tr>
                    <td>教练未同意查看第一张试卷第一题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  <tr>
                    <td>教练未同意查看第一张试卷第二题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  <tr>
                    <td>教练未同意查看第一张试卷第三题的答案<i className="fa fa-check pull-right"></i></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Message;