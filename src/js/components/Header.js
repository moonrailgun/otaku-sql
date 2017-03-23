import React, { Component, PropTypes } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
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

              <li className="am-text-sm">
                <a href="javascript:;">
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

export default Header;
