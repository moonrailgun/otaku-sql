import React, {Component, PropTypes} from 'react';

//风格切换
class AddSql extends Component {
  constructor(props) {
    super(props);
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
                        <input type="text" className="tpl-form-input" id="connect-name" placeholder="请输入链接名"/>
                        <small>该名字将会作为显示的标识名</small>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="host" className="am-u-sm-3 am-form-label">主机名/主机地址
                        <span className="tpl-form-line-small-title">IP Address</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="host" placeholder="127.0.0.1"/>
                        <small>数据库的远程地址</small>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="port" className="am-u-sm-3 am-form-label">端口号
                        <span className="tpl-form-line-small-title">Port</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="port" placeholder="3306"/>
                        <small>数据库端口号</small>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="username" className="am-u-sm-3 am-form-label">用户名
                        <span className="tpl-form-line-small-title">Username</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="username" placeholder=""/>
                      </div>
                    </div>
                    <div className="am-form-group">
                      <label htmlFor="password" className="am-u-sm-3 am-form-label">密码
                        <span className="tpl-form-line-small-title">Password</span>
                      </label>
                      <div className="am-u-sm-9">
                        <input type="text" className="tpl-form-input" id="password" placeholder=""/>
                      </div>
                    </div>

                    <div className="am-form-group">
                      <div className="am-u-sm-9 am-u-sm-push-3">
                        <button type="button" className="am-btn am-btn-warning">连接测试</button>
                        <button type="button" className="am-btn am-btn-primary">创建</button>
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
