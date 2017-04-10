import React, {Component, PropTypes} from 'react';
import FieldTypeSelect from './FieldTypeSelect.js';

class TableStructure extends Component {
  constructor(props) {
    super(props);
    this.blankRow = {
      _name: "",
      _type: "varchar",
      _length: "",
      _default: "",
      _isNotNull: false,
      _isPrimKey: false
    };
    this.state = {
      tableField: [this.blankRow]
    };
  }

  addBlankRow() {
    let tableField = this.state.tableField;
    tableField.push(this.blankRow);
    this.setState({
      tableField: tableField
    });
  }

  _updateField(index, field, value){
    if( index != undefined && field != undefined && value != undefined ){
      let tableField = this.state.tableField;
      tableField[index][field] = value;
      this.setState({
        tableField: tableField
      })
    }else{
      console.warn("[_updateField]参数不全:("+index+","+field+","+value+")");
    }
  }

  _handleChangeField(e) {
    let field = e.target.dataset.field;
    let fieldIndex = e.target.dataset.fieldIndex;
    let type = e.target.type;
    if(type == "text"){
      this._updateField(fieldIndex, field, e.target.value);
    }else if(type == "checkbox"){
      this._updateField(fieldIndex, field, e.target.checked);
    }
  }

  render() {
    console.log("render TableStructure");
    return (
      <tbody className="table-structure">
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
                    onChange={this._handleChangeField.bind(this)} />
                </td>
                <td>
                  <FieldTypeSelect
                    field="_type"
                    fieldIndex={index}
                    value={item._type}
                    onChange={this._updateField.bind(this)}/>
                </td>
                <td>
                  <input
                    type="text"
                    data-field="_length"
                    data-field-index={index}
                    value={item._length}
                    onChange={this._handleChangeField.bind(this)} />
                </td>
                <td>
                  <input
                    type="text"
                    data-field="_default"
                    data-field-index={index}
                    value={item._default}
                    onChange={this._handleChangeField.bind(this)} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    data-field="_isNotNull"
                    data-field-index={index}
                    checked={item._isNotNull}
                    onChange={this._handleChangeField.bind(this)} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    data-field="_isPrimKey"
                    data-field-index={index}
                    checked={item._isPrimKey}
                    onChange={this._handleChangeField.bind(this)} />
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
