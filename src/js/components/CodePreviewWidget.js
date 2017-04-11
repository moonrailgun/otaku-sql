import React, { Component, PropTypes } from 'react';

class CodePreviewWidget extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    hljs.highlightBlock(this.refs.code);
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    // console.log("render CodePreviewWidget");
    return (
      <div className="row">
        <div className="am-u-sm-12 am-u-md-12 am-u-lg-12">
          <div className="widget am-cf">
            <div className="widget-body am-fr">
              <div className="am-u-sm-12">
                <pre><code className="sql" ref="code">{this.props.code}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
CodePreviewWidget.propTypes = {
  code: PropTypes.string
}

export default CodePreviewWidget;
