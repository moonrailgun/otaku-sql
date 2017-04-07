import React, { Component, PropTypes } from 'react';
import Dropdown from './Dropdown';

class FieldTypeSelect extends Dropdown {
  constructor(props) {
    super(props);
    this.showSearch = true;
    this.option = [
      "tinyint",
      "smallint",
      "mediumint",
      "int",
      "integer",
      "bigint",
      "bit",
      "real",
      "double",
      "float",
      "decimal",
      "numeric",
      "char",
      "varchar",
      "date",
      "time",
      "year",
      "timestamp",
      "datetime",
      "tinyblob",
      "blob",
      "mediumblob",
      "longblob",
      "tinytext",
      "text",
      "mediumtext",
      "longtext",
      "enum",
      "set",
      "binary",
      "varbinary",
      "point",
      "linestring",
      "polygon",
      "geometry",
      "multipoint",
      "multilinestring",
      "multipolygon",
      "geometrycollection",
      "json"
    ];
  }

  _handleChange(e){
    const field = this.props.field;
    const fieldIndex = this.props.fieldIndex;
    let value = e.target.value;
    this.props.onChange(fieldIndex, field, value);
  }
};
FieldTypeSelect.propTypes = {
  field: PropTypes.string,
  fieldIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default FieldTypeSelect;
