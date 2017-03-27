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

let tableStructure = {
  getTablePrimaryKeyField: function(structure) {
    for (var i = 0; i < structure.length; i++) {
      let row = structure[i];
      if(row["Key"] && row["Key"] == "PRI") {
        return row["Field"];
      }
    }
  }
}

export { showError, tableStructure }
