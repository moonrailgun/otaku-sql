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
      contentPage: <AddSql />
    }
  }

  _changeContentPage(info) {
    console.log(info);
  }

  render() {
    const databaseList = [
      {name: "首页", icon: "database"},
      {name: "首页", icon: "database"},
      {name: "首页", icon: "database"}
    ]

    return (
      <div className="am-g tpl-g">
        <Header />
        <Skiner />
        <Sidebar
          databaseList = {databaseList}
          handleChangeContentPage = {this._changeContentPage} />
        <Content>
          {this.state.contentPage}
        </Content>
      </div>
    );
  }
};

export default App;
