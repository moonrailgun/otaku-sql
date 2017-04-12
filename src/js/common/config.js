const appConfig = {
  mysqlDatatype: {
    //默认默认大小为没有括号
    //默认默认值为空字符串
    specDefaultSize: {
      "char": 255,
      "varchar": 255,
      "enum": "''",
      "set": "''",
      "binary": 255,
      "varbinary": 255,
    },
    specNoDefaultValue: [
      "tinyblob", "blob", "mediumblob", "longblob", "tinytext", "text", "mediumtext", "longtext"
    ],
    specDefaultAddon: {
      "timestamp" : "ON UPDATE CURRENT_TIMESTAMP",
      "datetime" : "ON UPDATE CURRENT_TIMESTAMP",
    }
  }
}

export default appConfig;
