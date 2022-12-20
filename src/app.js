const express = require("express");
const cors = require("cors");
// const aditionalRouters = require("./routers/aditional.routers");


const UserRouters = require("./routers/user.router");

const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

app.use(UserRouters);

app.use(function (req,res,next){
    res.status(404).json({error : true, code : 404, message : "Endpoint doesnt found"});
});
app.use(errorHandling);

module.exports = app;