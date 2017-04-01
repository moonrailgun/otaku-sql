import React, {Component, PropTypes} from 'react';
import FieldTypeSelect from './FieldTypeSelect.js';

class TableStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableField: [
        {
          _name: "",
          _length: 255,
          _decimals: "",
          _isNotNull: false,
          _isPrimKey: false
        },
        {
          _name: "",
          _length: 255,
          _decimals: "",
          _isNotNull: false,
          _isPrimKey: false
        }
      ]
    }
  }

  _changeField(e) {
    let field = e.target.dataset.field;
    let fieldIndex = e.target.dataset.fieldIndex;
    let type = e.target.type;
    if(type == "text"){
      let tableField = this.state.tableField;
      tableField[fieldIndex][field] = e.target.value;
    }else if(type == "checkbox"){
      console.log(e.target.checked);
    }
  }

  render() {
    console.log("render TableStructure");
    return (
      <tbody>
        {
          this.state.tableField.map((item, index) => {
            return (
              <tr key={"tableStructure-row-" + index}>
                <td>
                  <input
                    type="text"
                    data-field="_name"
                    data-field-index={index}
                    value={item._name}
                    onChange={this._changeField.bind(this)} />
                </td>
                <td>
                  <FieldTypeSelect
                    field="_type"
                    fieldIndex={index}
                    onChange={this._changeField.bind(this)}/>
                </td>
                <td>
                  <input
                    type="text"
                    data-field="_length"
                    data-field-index={index}
                    value={item._length}
                    onChange={this._changeField.bind(this)} />
                </td>
                <td>
                  <input
                    type="text"
                    data-field="_decimals"
                    data-field-index={index}
                    value={item._decimals}
                    onChange={this._changeField} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    data-field="_isNotNull"
                    data-field-index={index}
                    checked={item._isNotNull ? "checked" : "unchecked"}
                    onChange={this._changeField} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    data-field="_isPrimKey"
                    data-field-index={index}
                    checked={item._isPrimKey ? "checked" : "unchecked"}
                    onChange={this._changeField} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    );
  }
};

export default TableStructure;
