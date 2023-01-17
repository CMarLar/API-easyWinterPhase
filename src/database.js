const mysql = require("mysql2");

/* const cors = require("cors") */

const connection = mysql.createConnection({
    
    host: process.env.DB_HOST           ||  "containers-us-west-177.railway.app",

    user: process.env.DB_USER           ||  "root",

    password: process.env.DB_PASSWORD   ||  "IjJsK1dXyMVFItfCR0r5",

    database: process.env.DB_NAME       ||  "railway",

    port: process.env.DB_PORT           ||  5485
})



module.exports = connection

