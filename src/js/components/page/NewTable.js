import React, {Component, PropTypes} from 'react';
import TableStructure from '../TableStructure.js';

class NewTable extends Component{
  constructor(props) {
    super(props);
  }

  _checkField(tableField) {
    for (var i = 0; i < tableField.length; i++) {
      let item = tableField[i];
      if(item._name == ""){
        return false;
      }
    }
    return true;
  }

  _createQuery(tableName, tableField) {
    let query = "CREATE TABLE `"+tableName+"` (";
    // 表结构
    for (var i = 0; i < tableField.length; i++) {
      let item = tableField[i];
      query += "`"+item._name+"` ";
      query += item._type;
      if(item._length){
        query += "("+item._length+")";
      }
      if(item._isNotNull){
        query += " NOT NULL";
      }else{
        query += " NULL";
      }

      if(item._default){
        query += " DEFAULT `" + item._default + "`";
      }

      if (i != tableField.length - 1){
        query += ",";
      }
    }

    //主键
    let primaryKeyList = [];
    for (var i = 0; i < tableField.length; i++) {
      if(tableField[i]._isPrimKey === true) {
        primaryKeyList.push(tableField[i]._name);
      }
    }
    if(primaryKeyList.length > 0){
      query += ",PRIMARY KEY ("+ primaryKeyList.join(",") +")";
    }

    query += ");";

    return query;
  }

  _saveTable(){
    let tableName = this.refs.tableName.value;
    if(!tableName){
      swal({
        title: "表名不能为空",
        type: "error"
      });
    }else{
      let tableField = this.refs.tableBody.state.tableField;
      if(!!tableField){
        if(this._checkField(tableField)) {
          console.log(this._createQuery(tableName, tableField));
        }else{
          swal({
            title: "字段名不能为空",
            type: "error"
          });
        }
      }
    }
  }

  _addBlankRow() {
    console.log("_addBlankRow");
    this.refs.tableBody.addBlankRow();
  }

  _reviewQueryCommand() {
    console.log("_reviewQueryCommand");
  }

  _deleteCurrentRow() {
    console.log("_deleteCurrentRow");
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
                  <div className="am-u-sm-12 am-u-md-6 am-u-lg-6">
                    <div className="am-form-group">
                      <div className="am-btn-toolbar">
                        <div className="am-btn-group am-btn-group-xs">
                          <button type="button" className="am-btn am-btn-default am-btn-success" onClick={this._addBlankRow.bind(this)}><span className="am-icon-plus"></span> 新增</button>
                          <button type="button" className="am-btn am-btn-default am-btn-warning" onClick={this._reviewQueryCommand.bind(this)}><span className="am-icon-archive"></span> 预览</button>
                          <button type="button" className="am-btn am-btn-default am-btn-danger" onClick={this._deleteCurrentRow.bind(this)}><span className="am-icon-trash-o"></span> 删除</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="am-u-sm-12">
                    <table className="am-table am-table-compact am-table-bordered am-table-centered am-text-nowrap tpl-table-black ">
                      <thead>
                        <tr>
                          <th>字段名</th>
                          <th>类型</th>
                          <th>长度</th>
                          <th>默认值</th>
                          <th>是否非空</th>
                          <th>主键</th>
                        </tr>
                      </thead>
                      <TableStructure ref="tableBody" />
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
