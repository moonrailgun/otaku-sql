let showError = (err) => {
  const errmsg = err.stack.split("\n")[0];
  console.warn(errmsg);
  swal({
    title: "失败!",
    text: errmsg,
    type: "error",
    confirmButtonText: "确认"
  });
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

export { showError, tableStructureHelper }
