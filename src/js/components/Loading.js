import React, { Component, PropTypes } from 'react';

// 加载中
class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading am-text-center am-padding-xl">
        <i className="am-icon-spinner am-icon-pulse am-icon-lg"></i>
      </div>
    );
  }
};

export default Loading;
