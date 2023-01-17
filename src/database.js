const mysql = require("mysql2");

/* const cors = require("cors") */

const connection = mysql.createConnection({
    
    host: process.env.DB_HOST           ||  "easywinterphase.c57b8c7x0pfv.us-east-1.rds.amazonaws.com",

    user: process.env.DB_USER           ||  "admin",

    password: process.env.DB_PASSWORD   ||  "EasyWinterPhase1986!",

    database: process.env.DB_NAME       ||  "railway",

    port: process.env.DB_PORT           ||  3306
})



module.exports = connection

