import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: 0
    }
  }

  _handleClick(index) {
    this.setState({
      currentSelected: index
    });
    this.props.handleChangeContentPage({test: "123"});
  }

  _getSidebarList() {
    const list = this.props.databaseList;

    return list.map((item, index) => {
      const isActive = this.state.currentSelected == index ? "sidebar-nav-sub-title active" : "sidebar-nav-sub-title";
      return (
        <li key={index} className="sidebar-nav-link">
          <a className={isActive} onClick={this._handleClick.bind(this, index)}>
            <i className={"am-icon-" + item.icon + " sidebar-nav-link-logo"}></i> {item.name}
            <span className="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
          </a>
          <ul className="sidebar-nav sidebar-nav-sub" style={{display: "none"}}>
            <li className="sidebar-nav-link">
              <a>
                <span className="am-icon-table sidebar-nav-link-logo"></span> 数据表
              </a>
            </li>
          </ul>
        </li>
      )
    })
  }

  render() {
    const sidelist = this._getSidebarList();
    return (
      <div className="left-sidebar">
        <div className="tpl-sidebar-user-panel">
          <div className="tpl-user-panel-slide-toggleable">
            <div className="tpl-user-panel-profile-picture">
                <img src="assets/images/user04.png" alt="" />
            </div>
            <span className="user-panel-logged-in-text"><i className="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>禁言小张</span>
            <a href="javascript:;" className="tpl-user-panel-action-link"> <span className="am-icon-pencil"></span> 账号设置</a>
          </div>
        </div>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-heading">Databases <span className="sidebar-nav-heading-info"> 数据库</span></li>
          {sidelist}
        </ul>
      </div>
    );
  }
};
Sidebar.propTypes = {
  handleChangeContentPage: PropTypes.func,
  databaseList: PropTypes.array
}

export default Sidebar;
