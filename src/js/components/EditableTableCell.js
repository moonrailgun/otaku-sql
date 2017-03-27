import React, { Component, PropTypes } from 'react';

//风格切换
class EditableTableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initValue: props.value,
      isEditing: false,
      value: props.value,
      isChange: false
    }
  }

  _checkChange() {
    if(this.state.initValue === this.state.value){
      this.setState({
        isChange: false
      });
    }else{
      this.setState({
        isChange: true
      });
    }
  }

  _handleClick() {
    console.log('click');
    this.setState({
      isEditing: true
    })
  }

  _handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }
  _handleBlur() {
    console.log('blur');
    this.setState({
      isEditing: false
    });
    this._checkChange();
  }
  _handleKeyup(event) {
    if (event.keyCode === 13) {
      this.setState({
        isEditing: false
      });
      this._checkChange();
    }
  }

  generateCell() {
    if(this.state.isEditing){
      return (
        <input
          style={{color:'#000'}}
          onKeyUp={this._handleKeyup.bind(this)}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          value={this.state.value}
          />
      )
    }else{
      return (
        <span
          onClick={this._handleClick.bind(this)}>
          {this.state.value}
        </span>
      )
    }
  }

  render() {
    return (
      <td
        style={this.state.isChange?{'background-color':'rgba(255,0,0,.3)'}:{}}>
        {this.generateCell()}
      </td>
    );
  }
};
EditableTableCell.propTypes = {
  value: PropTypes.string,
  // rowKey: PropTypes.string
}


export default EditableTableCell;
