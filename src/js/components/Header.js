import React, { Component, PropTypes } from 'react';
import AddSql from './page/AddSql';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  _addSql() {
    this.props.onChangeContentPage(
      <AddSql />
    )
  }

  _quitApp() {
    console.log("exit...");
  }

  render() {
    return (
      <header>
        {/* logo */}
        <div className="am-fl tpl-header-logo">
          <a href="javascript:;"><img src="assets/images/logo.png" alt="" /></a>
        </div>
        {/*右侧内容*/}
        <div className="tpl-header-fluid">
          {/*侧边切换*/}
          <div className="am-fl tpl-header-switch-button am-icon-list">
            <span></span>
          </div>
          <div className="am-fl tpl-header-search">
            <form className="tpl-header-search-form" action="javascript:;">
                <button className="tpl-header-search-btn am-icon-search"></button>
                <input className="tpl-header-search-box" type="text" placeholder="搜索内容..." />
            </form>
          </div>
          <div className="am-fr tpl-header-navbar">
            <ul>
              <li className="am-text-sm tpl-header-navbar-welcome">
                <a href="javascript:;">欢迎你, <span>moonrailgun</span> </a>
              </li>

              <li className="am-dropdown tpl-dropdown" data-am-dropdown="">
                <a href="javascript:;" className="am-dropdown-toggle tpl-dropdown-toggle" data-am-dropdown-toggle="">
                  <i className="am-icon-plus"></i>
                </a>
                {/*弹出列表*/}
                <ul className="am-dropdown-content tpl-dropdown-content">
                  <li className="tpl-dropdown-menu-notifications">
                    <a onClick={this._addSql.bind(this)} className="tpl-dropdown-menu-notifications-item am-cf">
                      <div className="tpl-dropdown-menu-notifications-title">
                        <i className="am-icon-database"></i>
                        <span> MySql数据库</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="am-text-sm" onClick={this._quitApp.bind(this)}>
                <a>
                  <span className="am-icon-sign-out"></span> 退出
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
};
Header.propTypes = {
  onChangeContentPage: PropTypes.func
}

export default Header;
