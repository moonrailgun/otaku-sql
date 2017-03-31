import React, { Component, PropTypes } from 'react';

class FieldTypeSelect extends Component {
  constructor(props) {
    super(props);
    this.type = [
      "varchar"
    ]
  }

  render() {
    return (
      <select
        data-field={this.props.field}
        data-field-index={this.props.fieldIndex}
        onChange={this.props.onChange} >
        {
          this.type.map((item, index) => {
            return (<option key={index} value={item}>{item}</option>)
          })
        }
      </select>
    );
  }
};

export default FieldTypeSelect;
