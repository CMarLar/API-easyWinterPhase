const express = require("express");
const cors = require("cors");
const errorHandling = require("./error/errorHandling")

const textRouters = require("./routers/text.routers");


const UserRouters = require("./routers/user.routers");
const campaignRouters = require("./routers/campaign.routers")
const playerRouters = require("./routers/player.routers")
const houseRouters = require("./routers/house.routers");
const charRouters = require("./routers/character.routers");
const yearRouters = require("./routers/year.routers");
const adicionalRouters = require("./routers/adicional.routers")



const app = express();

app.use(cors());
app.use(express.urlencoded({ extended : false}));
app.use(express.json()); 

app.use(UserRouters);
app.use(campaignRouters);
app.use(playerRouters);
app.use(textRouters);
app.use(houseRouters);
app.use(charRouters);
app.use(yearRouters);
app.use(adicionalRouters);

app.use(function (req,res,next){
    res.status(404).json({error : true, code : 404, message : "Endpoint doesnt found"});
});
app.use(errorHandling);

module.exports =  app;