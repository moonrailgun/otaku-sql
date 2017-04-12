let showError = (err, cb) => {
  let errmsg = ""
  if(typeof(err) === "object"){
    errmsg = err.stack.split("\n")[0];
  }else{
    errmsg = err;
  }
  console.warn(errmsg);
  swal({
    title: "失败!",
    text: errmsg,
    type: "error",
    confirmButtonText: "确认"
  }, cb);
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

export { showError, showSuccess, tableStructureHelper }
