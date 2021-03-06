import React, {Component, PropTypes} from 'react';
import LocalStorage from '../../action/localStorage';
import SqlManager from '../../action/sqlManager';
import { showError, tableStructureHelper } from '../../common/utils';
import EditableTableCell from '../EditableTableCell';
import Loading from '../Loading.js';
import SqlTableList from './SqlTableList.js';

class SqlTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: <Loading />,
      page: 1,
      limit: 20
    }
  }

  componentDidMount() {
    this.updateTableList();
  }

  _getTableField(tableStructure) {
    let res = [];
    for (var i = 0; i < tableStructure.length; i++) {
      res.push(tableStructure[i]['Field']);
    }

    return res;
  }
  _getTableRowWithField(row, field) {
    let res = [];
    for (var i = 0; i < field.length; i++) {
      const _key = field[i];
      res.push(row[_key]);
    }
    return res;
  }

  // 返回到父级页面TableList
  _toggleToTableList(){
    this.props.onChangeContentPage(
      <SqlTableList
        onChangeContentPage = {this.props.onChangeContentPage}
        connectName = {this.props.connectName}
        databaseName = {this.props.databaseName} />
    );
  }

  updateTableList() {
    let info = LocalStorage.getConnectInfo(this.props.connectName);
    info.database = this.props.databaseName;

    // 获取表结构
    SqlManager.getTableStructure(info, this.props.tableName, (err, structure) => {
      if(err){
        showError(err);
        return;
      }

      // 获取主键
      const primaryKey = tableStructureHelper.getTablePrimaryKeyField(structure);
      console.log("primaryKey:" + primaryKey);

      SqlManager.selectTable(
        info,
        this.props.tableName,
        this.state.limit,
        this.state.page,
        (err, results) => {
          if(err){
            showError(err);
            this.setState({
              table: ""
            })
            return;
          }
          // console.log(results);

          const field = this._getTableField(structure);
          const tableHeader = field.map((item, index) => {
            return <th key={index + "-" + item}>{item}</th>
          });
          const tableBody = results.map((row, index) => {
            return (
              <tr key={index + "-row"}>
                {
                  this._getTableRowWithField(row, field).map((_sub, i) => {
                    return (
                      <EditableTableCell
                        key={i+"-"+_sub}
                        value={String(_sub)} />
                    )
                  })
                }
              </tr>
            );
          });

          const table = (
            <table className="am-table am-table-compact am-table-striped tpl-table-black" id="example-r">
              <thead>
                <tr>
                  {tableHeader}
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>
          );
          this.setState({
            table: table
          });
        }
      );
    });
  }

  render() {
    return (
      <div className="sql-table">
        <div className="container-fluid am-cf">
          <div className="row">
            <div className="am-u-sm-12 am-u-md-12 am-u-lg-9">
              <div className="page-header-heading">
                <i className="am-icon-database page-header-heading-icon"></i>
                 {this.props.databaseName} <small>{this.props.connectName}</small>
              </div>
              <p
                className="page-header-description link"
                onClick={this._toggleToTableList.bind(this)}>
                {this.props.tableName} <i className="am-icon-chevron-right"></i>
              </p>
            </div>
            <div className="am-u-lg-3 tpl-index-settings-button">
              <button type="button" className="page-header-button">
                <span className="am-icon-paint-brush"></span> 设计表
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
                    {this.state.table}
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
SqlTable.propTypes = {
  onChangeContentPage: PropTypes.func,
  connectName: PropTypes.string,
  databaseName: PropTypes.string,
  tableName: PropTypes.string
}

export default SqlTable;
