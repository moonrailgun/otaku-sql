import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Skiner from './Skiner';
import Sidebar from './Sidebar';
import Content from './Content';

import AddSql from './page/AddSql';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentPage: (
        <AddSql onAddConnection={this._updateSideBar.bind(this)}/>
      )
    };
    this.curConnectName = "";
    this.curDatabaseName = "";
  }

  _updateSideBar() {
    this.refs.sideBar.updateSidebarList();
  }

  _changeDatabase(connectName, databaseName) {
    this.curConnectName = connectName;
    this.curDatabaseName = databaseName;
  }

  _changeContentPage(page) {
    this.setState({
      contentPage: page
    });
  }

  render() {
    return (
      <div className="am-g tpl-g">
        <Header
          onUpdateSideBar={this._updateSideBar.bind(this)}
          onChangeContentPage = {this._changeContentPage.bind(this)}/>
        <Skiner />
        <Sidebar
          ref="sideBar"
          onChangeContentPage = {this._changeContentPage.bind(this)}
          onChangeDatabase={this._changeDatabase.bind(this)} />
        <Content>
          {this.state.contentPage}
        </Content>
      </div>
    );
  }
};

export default App;
