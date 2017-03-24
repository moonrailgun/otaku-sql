// import orm from 'orm'
import mysql from 'mysql'

class SqlManager {
  constructor() {

  }

  static getEstablishConnect(sqlInfo) {
    const host = sqlInfo.host;
    const port = sqlInfo.port;
    const username = sqlInfo.username;
    const password = sqlInfo.password;
    const database = sqlInfo.database;

    if(host && port && username){
      //数据均存在，可以链接
      // const url = "mysql://" + username + ":" + password + "@" + host + "/" +

      var connection = mysql.createConnection({
        host : host,
        port : port,
        user : username,
        password : password,
        // database : database
      });

      connection.connect();

      connection.query('SHOW DATABASES', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        console.log(JSON.stringify(results));
        console.log(results);
      });

      connection.end();
    }else {
      console.error("链接参数不全无法链接");
    }
  }

  static testConnect(sqlInfo, cb){
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

  static getDatabases(sqlInfo, cb){
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
        if (error) throw error;

        cb(results);
      });

      connection.end();
    }else {
      console.error("链接参数不全无法链接");
    }
  }

  static query(sqlInfo, query){

  }
}

export default SqlManager
