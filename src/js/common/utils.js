import appConfig from './config'

let showError = (err, cb) => {
  let errmsg = ""
  if(typeof(err) === "object"){
    errmsg = err.stack.split("\n")[0];
  }else{
    errmsg = err;
  }
  swal({
    title: "失败!",
    text: errmsg,
    type: "error",
    confirmButtonText: "确认"
  }, cb);
  console.warn(errmsg);
}

let showSuccess = (msg, cb) => {
  swal({
    title: "操作成功!",
    text: msg,
    type: "success",
    confirmButtonText: "确认"
  }, cb);
}

//structure: SqlManager.getTableStructure返回的数据
let tableStructureHelper = {
  getTablePrimaryKeyField: function(structure) {
    for (var i = 0; i < structure.length; i++) {
      let row = structure[i];
      if(row["Key"] && row["Key"] == "PRI") {
        return row["Field"];
      }
    }
  }
}

let configHelper = {
  checkSpecDefaultSize: function(type){
    const specDefaultSize = appConfig.mysqlDatatype.specDefaultSize;
    return specDefaultSize[type];
  },
  checkSpecNoDefaultValue: function(type){
    const specNoDefaultValue = appConfig.mysqlDatatype.specNoDefaultValue;
    for (var i = 0; i < specNoDefaultValue.length; i++) {
      if(type == specNoDefaultValue[i]){
        return true;
      }
    }
    return false;
  },
  checkSpecDefaultAddon: function(type){
    const specDefaultAddon = appConfig.mysqlDatatype.specDefaultAddon;
    return specDefaultAddon[type];
  }
}

export { showError, showSuccess, tableStructureHelper, configHelper }
