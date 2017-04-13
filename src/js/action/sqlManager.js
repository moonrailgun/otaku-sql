// import orm from 'orm'
import mysql from 'mysql'

class SqlManager {
  constructor() {

  }

  //TODO 未完成
  static getEstablishConnect(sqlInfo) {

  }

  // 数据库链接测试
  static testConnect(sqlInfo, cb) {
    const host = sqlInfo.host;
    const port = sqlInfo.port;
    const username = sqlInfo.username;
    const password = sqlInfo.password;

    if(host && port && username){
      //数据均存在，可以链接
      var connection = mysql.createConnection({
        host : host,
        port : port,
        user : username,
        password : password
      });

      connection.connect(function(err) {
        if(err){
          cb(err, null);
          return;
        }

        cb(null, connection.threadId);
      });

      connection.end();
    }else {
      console.error("链接参数不全无法链接");
    }
  }

  // 获取数据库列表
  static getDatabases(sqlInfo, cb) {
    const host = sqlInfo.host;
    const port = sqlInfo.port;
    const username = sqlInfo.username;
    const password = sqlInfo.password;

    if(host && port && username){
      //数据均存在，可以链接
      var connection = mysql.createConnection({
        host : host,
        port : port,
        user : username,
        password : password
      });

      connection.connect();

      connection.query('SHOW DATABASES', function (error, results, fields) {
        if(error){
          cb(error, null);
        }
        cb(null, results);
      });

      connection.end();
    }else {
      console.error("链接参数不全无法链接");
    }
  }

  // 获取某个数据库中数据表列表
  static getTables(sqlInfo, cb) {
    SqlManager.query(sqlInfo, 'SHOW TABLES', function(error, results, fields){
      if (error){
        cb(error, null);
      }
      cb(null, results);
    });
  }

  // 获取表结构
  static getTableStructure(sqlInfo, tableName, cb){
    let query = 'DESCRIBE `' + tableName + '`';
    SqlManager.query(sqlInfo, query, function(error, results, fields){
      if (error){
        cb(error, null);
      }
      cb(null, results);
    });
  }

  // 获取某个表一部分数据
  static selectTable(sqlInfo, tableName, limit, page, cb){
    let query = 'SELECT * FROM `' + tableName + '` LIMIT ' + (page-1)*limit + ',' + limit;
    SqlManager.query(sqlInfo, query, function(error, results, fields){
      if (error){
        cb(error, null);
      }
      cb(null, results);
    });
  }

  // 查询数据库
  static query(sqlInfo, query, cb){
    const host = sqlInfo.host;
    const port = sqlInfo.port;
    const username = sqlInfo.username;
    const password = sqlInfo.password;
    const database = sqlInfo.database;

    if(host && port && username && database){
      //数据均存在，可以链接
      var connection = mysql.createConnection({
        host : host,
        port : port,
        user : username,
        password : password,
        database : database
      });

      connection.connect();
      connection.query(query, cb);
      connection.end();
    }else {
      console.error("链接参数不全无法链接");
    }
  }
}

export default SqlManager
