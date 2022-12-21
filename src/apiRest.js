const app = require("./app");
require("./database")
const cors = require("cors");


app.listen(process.env.PORT || 3000);

console.log("API REST FUNCIONANDO");