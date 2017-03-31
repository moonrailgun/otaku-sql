import React, {Component, PropTypes} from 'react';
import TableStructure from '../TableStructure.js';

class NewTable extends Component{
  constructor(props) {
    super(props);
  }

  _saveTable(){
    let tableName = this.refs.tableName.value;
    if(!tableName){
      swal({
        title: "表名不能为空",
        type: "error"
      });
    }
  }

  _addField() {

  }

  render() {
    console.log("render NewTable");
    return (
      <div>
        <div className="container-fluid am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-9">
              <div className="page-header-heading">
                <i className="am-icon-database page-header-heading-icon"></i>
                 {this.props.databaseName} <small>{this.props.connectName}</small>
              </div>
              <p className="page-header-description">
                <input type="text" className="tpl-form-input isolated-input" ref="tableName" placeholder="请输入表名" />
              </p>
            </div>
            <div className="am-u-lg-3 tpl-index-settings-button">
              <button type="button" className="page-header-button" onClick={this._saveTable.bind(this)}>
                <span className="am-icon-save"></span> 保存
              </button>
            </div>
          </div>
        </div>
        <div className="row-content am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-12">
              <div className="widget am-cf">
                <div className="widget-body am-fr">
                  <div className="am-scrollable-horizontal am-u-sm-12">
                    <table className="am-table am-table-compact am-table-bordered am-table-centered am-text-nowrap tpl-table-black ">
                      <thead>
                        <tr>
                          <th>字段名</th>
                          <th>类型</th>
                          <th>长度</th>
                          <th>精度</th>
                          <th>是否非空</th>
                          <th>主键</th>
                        </tr>
                      </thead>
                      <TableStructure />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTable;
