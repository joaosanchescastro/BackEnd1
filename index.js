(async () => {
    const db = require("./db")
    console.log("começou");
    console.log("select * from produtos");
    const produtos = await db.selectprodutos();
    console.log(produtos);
})();
