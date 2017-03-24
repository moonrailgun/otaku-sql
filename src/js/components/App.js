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

  _changeContentPage(page) {
    this.setState({
      contentPage: page
    });
  }

  render() {
    return (
      <div className="am-g tpl-g">
        <Header />
        <Skiner />
        <Sidebar
          onChangeContentPage = {this._changeContentPage.bind(this)} />
        <Content>
          {this.state.contentPage}
        </Content>
      </div>
    );
  }
};

export default App;
