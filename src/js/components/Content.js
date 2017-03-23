import React, { Component, PropTypes } from 'react';

//风格切换
class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tpl-content-wrapper">
        {this.props.children}
      </div>
    );
  }
};

export default Content;
