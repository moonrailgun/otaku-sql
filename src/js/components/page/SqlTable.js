import React, {Component, PropTypes} from 'react';
import LocalStorage from '../../action/localStorage';
import SqlManager from '../../action/sqlManager';
import { showError, tableStructureHelper } from '../../common/utils';
import EditableTableCell from '../EditableTableCell';

class SqlTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: "",
      page: 1,
      limit: 20
    }
  }

  componentDidMount() {
    this.updateTableList();
  }

  _getTableField(table) {
    const sample = table[0];
    let field = [];
    for (var key in sample) {
      if (sample.hasOwnProperty(key)) {
        field.push(key);
      }
    }
    return field;
  }
  _getTableRowWithField(row, field) {
    let res = [];
    for (var i = 0; i < field.length; i++) {
      const _key = field[i];
      res.push(row[_key]);
    }
    return res;
  }
  _generateTableHeader(field) {

  }
  _generateTableBody(field) {

  }

  updateTableList() {
    let info = LocalStorage.getConnectInfo(this.props.connectName);
    info.database = this.props.databaseName;

    SqlManager.selectTable(
      info,
      this.props.tableName,
      this.state.limit,
      this.state.page,
      (err, results) => {
        if(err){
          showError(err);
          return;
        }
        // console.log(results);

        const field = this._getTableField(results);
        const tableHeader = field.map((item, index) => {
          return <th key={index + "-" + item}>{item}</th>
        });
        const tableBody = results.map((row, index) => {
          const rowHtml = this._getTableRowWithField(row, field).map((_sub, i) => {
            return (
              <EditableTableCell
                key={i+"-"+_sub}
                value={String(_sub)} />
            )
          });
          return (
            <tr key={index + "-row"}>
              {rowHtml}
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

    SqlManager.getTableStructure(info, this.props.tableName, (err, structure) => {
      if(err){
        showError(err);
        return;
      }

      // console.log(structure);
      const primaryKey = tableStructureHelper.getTablePrimaryKeyField(structure);
      console.log("primaryKey:" + primaryKey);
    });
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
