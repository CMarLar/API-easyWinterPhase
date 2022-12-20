const express = require("express");
const cors = require("cors");
const errorHandling = require("./error/errorHandling")

const userRouters = require("./routers/user.routers");
const textRouters = require("./routers/text.routers");



const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

app.use(userRouters);
app.use(textRouters);

app.use(function (req,res,next){
    res.status(404).json({error : true, code : 404, message : "Endpoint doesnt found"});
});
app.use(errorHandling);

module.exports = app;