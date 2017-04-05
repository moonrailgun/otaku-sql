import React, { Component, PropTypes } from 'react';
import Dropdown from './Dropdown';

class FieldTypeSelect extends Dropdown {
  constructor(props) {
    super(props);
    this.option = [
      "varchar",
      "int"
    ];
  }

  _handleClick(index) {
    const field = this.props.field;
    const fieldIndex = this.props.fieldIndex;
    this.setState({
      currentIndex: index
    });
    this.props.onChange(fieldIndex, field, this.option[index]);
  }
};
FieldTypeSelect.propTypes = {
  field: PropTypes.string,
  fieldIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default FieldTypeSelect;
