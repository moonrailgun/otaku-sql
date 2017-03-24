class LocalStorage {
  constructor() {

  }

  static addConnection(connectionInfo){
    if(typeof(connectionInfo) != "object"){
      console.error("addConnection方法的参数connectionInfo应为一个对象");
      return;
    }

    let connections = localStorage.getItem('Connections') || "[]";
    connections = JSON.parse(connections);
    connections.push(connectionInfo);
    localStorage.setItem('Connections', JSON.stringify(connections));
  }

  static getConnections(){
    let connections = localStorage.getItem('Connections') || "[]";
    connections = JSON.parse(connections);
    return connections;
  }
}
export default LocalStorage;
