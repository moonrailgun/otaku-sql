import React, { Component, PropTypes } from 'react';

class FieldTypeSelect extends Component {
  constructor(props) {
    super(props);
    this.type = [
      "varchar",
      "int"
    ];
    this.state = {
      currentIndex: 0
    };
  }

  componentDidMount(){
    $('.am-dropdown').dropdown();
  }

  _handleClick(index) {
    const field = this.props.field;
    const fieldIndex = this.props.fieldIndex;
    this.setState({
      currentIndex: index
    });
    this.props.onChange(fieldIndex, field, this.type[index]);
  }

  render() {
    console.log("render FieldTypeSelect");
    return (
      <div className="am-dropdown">
        <button className="am-selected-btn am-btn am-dropdown-toggle am-btn-default" data-am-dropdown-toggle>{this.type[this.state.currentIndex]}&nbsp;
          <span className="am-icon-caret-down"></span>
        </button>
        <div className="am-selected-content am-dropdown-content">
          <ul className="am-selected-list">
            {
              this.type.map((item, index) => {
                return (
                  <li
                    data-val={item}
                    onClick={this._handleClick.bind(this, index)}
                    key={index}
                    className={index==this.state.currentIndex?"am-checked":""}>
                    <span className="am-selected-text">{item}</span>
                    <i className="am-icon-check"></i>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};
FieldTypeSelect.propTypes = {
  field: PropTypes.string,
  fieldIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default FieldTypeSelect;
