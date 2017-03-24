import React, {Component, PropTypes} from 'react';
import SqlManager from '../../action/sqlManager';

//风格切换
class AddSql extends Component {
  constructor(props) {
    super(props);
  }

  _handleTest() {
    const host = this.refs.host.value || "127.0.0.1";
    const port = this.refs.port.value || "3306";
    const username = this.refs.username.value || "root";
    const password = this.refs.password.value || "";

    if(host && port && username){
      console.log(host + "|" +port+"|" +username+"|" +password);

      SqlManager.testConnect({
        host:host,
        port:port,
        username:username,
        password:password
      }, function(err, id){
        if(err){
          console.log(err.stack.split("\n")[0]);
          return;
        }

        console.log(id);
      })
    }
  }

  _handleSubmit() {
    const host = this.refs.host.value || "127.0.0.1";
    const port = this.refs.port.value || "3306";
    const username = this.refs.username.value || "root";
    const password = this.refs.password.value || "";

    if(host && port && username){
      console.log(host + "|" +port+"|" +username+"|" +password);

      SqlManager.getDatabases({
        host:host,
        port:port,
        username:username,
        password:password
      }, function(results){
        if(typeof(results) == "object"){
          results.map(function(item, index){
            console.log(item.Database);
          })
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-9">
              <div className="page-header-heading"><span className="am-icon-home page-header-heading-icon"></span> 添加数据库 <small>MySQL</small></div>
              <p className="page-header-description">添加数据库</p>
            </div>
          </div>
        </div>
        <div className="row-content am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-12">
              <div className="widget am-cf">
                <div className="widget-head am-cf">
                  <div className="widget-title am-fl">数据库信息</div>
                </div>
                <div className="widget-body am-fr">
                  <form className="am-form tpl-form-line-form">
                    <div className="am-form-group">
                      <label htmlFor="connect-name" className="am-u-sm-3 am-form-label">链接名
                        <span className="tpl-form-line-small-title">Name</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="connect-name" placeholder="请输入链接名" ref="connectName"/>
                        <small>该名字将会作为显示的标识名</small>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="host" className="am-u-sm-3 am-form-label">主机名/主机地址
                        <span className="tpl-form-line-small-title">IP Address</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="host" placeholder="127.0.0.1" ref="host"/>
                        <small>数据库的远程地址</small>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="port" className="am-u-sm-3 am-form-label">端口号
                        <span className="tpl-form-line-small-title">Port</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="port" placeholder="3306" ref="port"/>
                        <small>数据库端口号</small>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="username" className="am-u-sm-3 am-form-label">用户名
                        <span className="tpl-form-line-small-title">Username</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="username" placeholder="root" ref="username"/>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="password" className="am-u-sm-3 am-form-label">密码
                        <span className="tpl-form-line-small-title">Password</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="password" placeholder="" ref="password"/>
                      </div>
                    </div>

                    <div className="am-form-group">
                      <div className="am-u-sm-9 am-u-sm-push-3">
                        <button
                          type="button"
                          className="am-btn am-btn-warning"
                          onClick={this._handleTest.bind(this)} >
                          连接测试</button>
                        <button
                          type="button"
                          className="am-btn am-btn-primary"
                          onClick={this._handleSubmit.bind(this)} >
                          创建</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSql;
