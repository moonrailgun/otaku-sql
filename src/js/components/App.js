import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Skiner from './Skiner';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="am-g tpl-g">
        <Header />
        <Skiner />
      </div>
    );
  }
};

export default App;
