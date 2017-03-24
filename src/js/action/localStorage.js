class LocalStorage {
  constructor() {

  }

  static addConnection(connectionInfo) {
    if(typeof(connectionInfo) != "object"){
      console.error("addConnection方法的参数connectionInfo应为一个对象");
      return;
    }

    let connections = localStorage.getItem('Connections') || "[]";
    connections = JSON.parse(connections);
    connections.push({
      name: connectionInfo.name,
      info: connectionInfo.info,
      databases: connectionInfo.databases
    });
    localStorage.setItem('Connections', JSON.stringify(connections));
  }

  static getConnections(){
    let connections = localStorage.getItem('Connections') || "[]";
    connections = JSON.parse(connections);
    return connections;
  }

  static getConnectInfo(connectionName){
    const connections = LocalStorage.getConnections();
    for (var i = 0; i < connections.length; i++) {
      let item = connections[i];
      if(item.name === connectionName){
        return item.info;
      }
    }
  }
}
export default LocalStorage;
