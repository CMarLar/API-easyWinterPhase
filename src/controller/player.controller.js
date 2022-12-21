// const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
const {Player} = require("../models/player.model");

function postPlayer(request,response){

    console.log(request.body);
    console.log();

    let newPlayer = new Player (null,request.body.campaign_id,request.body.player_name,null);

    let sql = "INSERT INTO players (`campaign_id`, `player_name`) VALUES (?, ?);"

    let params = [newPlayer.campaign_id,newPlayer.player_name]
    console.log("DATOS: " + JSON.stringify(newPlayer));

    connection.query(sql,params, function(error,result){
        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })

}




module.exports = {postPlayer}

