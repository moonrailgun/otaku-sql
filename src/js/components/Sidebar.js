import React, { Component, PropTypes } from 'react';
import LocalStorage from '../action/localStorage';
import SqlTableList from './page/SqlTableList';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: 0,
      currentSelectedDatabaseName: "",
      sidebarList: LocalStorage.getConnections()
    }
  }

  updateSidebarList() {
    this.setState({
      sidebarList: LocalStorage.getConnections()
    })
  }

  _handleConnectDatabase(connectName, databaseName) {
    this.setState({
      currentSelectedDatabaseName: databaseName
    });
    this.props.onChangeDatabase(connectName, databaseName);

    this.props.onChangeContentPage(
      <SqlTableList
        key = {Math.random()}
        onChangeContentPage = {this.props.onChangeContentPage}
        connectName = {connectName}
        databaseName = {databaseName} />
    );
  }

  _handleClick(index) {
    this.setState({
      currentSelected: index
    });
  }

  _getSidebarList() {
    const list = this.state.sidebarList;

    return list.map((item, index) => {
      const isActive = this.state.currentSelected == index ? "sidebar-nav-sub-title active" : "sidebar-nav-sub-title";
      const sublist = item.databases.map((subitem, subindex) => {
        const isDatabaseSelected = this.state.currentSelectedDatabaseName == subitem ? "active" : "";
        return (
          <li key={index+"-"+subindex} className="sidebar-nav-link">
            <a className={isDatabaseSelected} onClick={this._handleConnectDatabase.bind(this, item.name, subitem)}>
              <i className="am-icon-database sidebar-nav-link-logo"></i> {subitem}
            </a>
          </li>
        )
      })
      return (
        <li key={index} className="sidebar-nav-link">
          <a className={isActive} onClick={this._handleClick.bind(this, index)}>
            <i className={"am-icon-link sidebar-nav-link-logo"}></i> {item.name}
            <span className="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
          </a>
          <ul className="sidebar-nav sidebar-nav-sub" style={{display: "none"}}>
            {sublist}
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
  onChangeContentPage: PropTypes.func,
  onChangeDatabase: PropTypes.func
}

export default Sidebar;
