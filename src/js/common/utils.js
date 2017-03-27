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

export { showError }
