async function connect() {
    if (global.connection && global.connection.state !== "disconnected")
      return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
      "mysql://root:root@localhost:3306/mynode",
    );
    console.log("Conectou no Mysql!");
    global.connection = connection;
    return connection;
  }
  
  async function selectProdutos() {
    const conn = await connect();
    return await conn.query("SELECT * FROM produtos;");
  }
  
  module.exports = { selectProdutos };