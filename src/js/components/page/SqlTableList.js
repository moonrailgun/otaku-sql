import React, {Component, PropTypes} from 'react';
import SqlManager from '../../action/sqlManager';
import LocalStorage from '../../action/localStorage';
import SqlTable from './SqlTable';
import NewTable from './NewTable';
import {showError, showSuccess} from '../../common/utils';
import Loading from '../Loading.js';

class SqlTableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: <Loading />
    }
  }

  componentDidMount() {
    this.updateTableList();
  }

  updateTableList() {
    this._getTableList((html) => {
      this.setState({
        tableList: html
      })
    });
  }

  // TODO 数据表操作 - 创建
  _tableCreate(){
    this.props.onChangeContentPage(
      <NewTable
        onChangeContentPage = {this.props.onChangeContentPage}
        connectName = {this.props.connectName}
        databaseName = {this.props.databaseName}
         />
    )
  }
  // TODO 数据表操作 - 进入
  _tableEnter(tableName) {
    // console.log(tableName);
    this.props.onChangeContentPage(
      <SqlTable
        onChangeContentPage = {this.props.onChangeContentPage}
        connectName = {this.props.connectName}
        databaseName = {this.props.databaseName}
        tableName = {tableName} />
    )
  }
  // TODO 数据表操作 - 编辑
  _tableEdit(tableName) {
    console.log(tableName);
  }
  _tableDelete(tableName) {
    // console.log(tableName);
    let info = LocalStorage.getConnectInfo(this.props.connectName);
    info.database = this.props.databaseName;

    SqlManager.dropTable(info, tableName, (err, results) => {
      if(err){
        showError(err);
        return;
      }

      showSuccess("数据表已成功删除", () => {
        this.props.onChangeContentPage(
          <SqlTableList
            onChangeContentPage = {this.props.onChangeContentPage}
            connectName = {this.props.connectName}
            databaseName = {this.props.databaseName}
             />
        )
      });
    });
  }

  _getTableList(cb) {
    let info = LocalStorage.getConnectInfo(this.props.connectName);
    info.database = this.props.databaseName;

    SqlManager.getTables(info, (err, results) => {
      if(err){
        showError(err);
        this.setState({
          tableList: null
        })
        return;
      }

      if(results && results.length > 0){
        let tables = [];
        for (var i = 0; i < results.length; i++) {
          const item = results[i];
          tables.push(item['Tables_in_'+this.props.databaseName]);
        }
        cb(this._generateTableView(tables));
      }
    });
  }

  //生成表格html
  _generateTableView(tables) {
    let tableBody = tables.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td>
            <div className="am-btn-group am-btn-group-xs">
              <button
                type="button"
                className="am-btn am-btn-default am-btn-success"
                onClick={this._tableEnter.bind(this, item)}>
                <span className="am-icon-sign-in"></span> 进入
              </button>
              <button
                type="button"
                className="am-btn am-btn-default am-btn-secondary"
                onClick={this._tableEdit.bind(this, item)}>
                <span className="am-icon-pencil"></span> 编辑
              </button>
              <button
                type="button"
                className="am-btn am-btn-default am-btn-danger"
                onClick={this._tableDelete.bind(this, item)}>
                <span className="am-icon-trash-o"></span> 删除
              </button>
            </div>
          </td>
        </tr>
      )
    });

    return (
      <table className="am-table am-table-compact am-table-striped tpl-table-black" id="example-r">
        <thead>
          <tr>
            <th>数据库</th>
            <th style={{width:"300px"}}>操作</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div>
        <div className="container-fluid am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-9">
              <div className="page-header-heading">
                <i className="am-icon-database page-header-heading-icon"></i>
                 {this.props.databaseName} <small>{this.props.connectName}</small>
              </div>
              <p className="page-header-description">{this.props.databaseName}</p>
            </div>
            <div className="am-u-lg-3 tpl-index-settings-button">
              <button type="button" className="page-header-button" onClick={this._tableCreate.bind(this)}>
                <span className="am-icon-paint-brush"></span> 新建表
              </button>
            </div>
          </div>
        </div>
        <div className="row-content am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-12">
              <div className="widget am-cf">
                <div className="widget-body am-fr">
                  <div className="am-u-sm-12">
                    {this.state.tableList}
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
SqlTableList.propTypes = {
  onChangeContentPage: PropTypes.func,
  connectName: PropTypes.string,
  databaseName: PropTypes.string
}

export default SqlTableList;
