import React, { Component, PropTypes } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.showSearch = false;
    this.option = [];
  }

  componentDidMount(){
    // $('.am-dropdown').dropdown();
    let options = {
      maxHeight: '200px'
    };
    if(this.showSearch){
      options.searchBox = 1;
    }
    $(this.refs.select).selected(options).on('change', this._handleChange.bind(this))
  }

  _handleChange(e){
    console.log("当前选中值:" + e.target.value);
  }

  render() {
    // console.log("render FieldTypeSelect");
    return (
      <select ref="select">
        {
          this.option.map((item, index) => {
            return (
              <option key={index} value={item}>{item}</option>
            )
          })
        }
      </select>
    );
  }
};

export default Dropdown;
