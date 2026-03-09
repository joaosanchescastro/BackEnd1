async function connect() {
    if (global.connection && global.connection.state !== "disconnected")
      return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
      "mysql://root:escola@localhost:3306/mynode"
    );
   
    console.log("Conectou no Mysql!");
    global.connection = connection;
    return connection;
  }
  
  async function selectprodutos() {
    const conn = await connect();
    return await conn.query("SELECT * FROM produtos;");
  }

   
async function insertprodutos(prod) {
   const conn = await connect();
   const sql = "INSERT INTO produtos(descricao, quantidade) VALUES(?,?);";
   const values = [prod.descricao, prod.quantidade];
   await conn.query(sql, values);
  
 }


   module.exports = { insertprodutos };
