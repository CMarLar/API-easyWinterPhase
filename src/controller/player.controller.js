// const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
const {Player} = require("../models/player.model");

function postPlayer(request,response){

    console.log(request.body);
    console.log(request.body.players[0]);

    let newPlayer = new Player (null,request.body.campaign_id,request.body.player_name,null);

    let sql = "INSERT INTO players (house_id,campaign_id, player_name,winterPhaseDone) VALUES ?;"//esto se hace para inserciones múltiples

    let values =[
        [request.body.players[0].house_id,request.body.players[0].campaign_id,request.body.players[0].player_name,request.body.players[0].winterPhaseDone,],
        [request.body.players[1].house_id,request.body.players[1].campaign_id,request.body.players[1].player_name,request.body.players[1].winterPhaseDone,],
        [request.body.players[2].house_id,request.body.players[2].campaign_id,request.body.players[2].player_name,request.body.players[2].winterPhaseDone,],
    ]

    let params = [newPlayer.campaign_id,newPlayer.player_name]
    console.log("DATOS: " + JSON.stringify(newPlayer));

    connection.query(sql,[values], function(error,result){
        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })

}
function getPlayers(request, response) // funciona 
{
   let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM players";
   else
        sql = "SELECT * FROM players WHERE player_id="  + request.query.id ;

    connection.query(sql, function (err, result) 
   {
       if (err) 
          console.log(err);
        else 
      {
           response.send(result);
       }
    })
}


/*
function insertTablaTeachers(){
    let sql = "INSERT INTO teachers(first_name, last_name) VALUES ?;"
    let values = [
        ["Miguel","Generoso Valero"],
        ["Adrian","Generoso Valero"],
        ["Diego","Generoso Diaz"],
        ["Mercedes","Valero Jimenez"],
        ["Pedro","Languila Sorra"],
        ["Ana","Perez Martin"],
        ["Luis","Garcia Vaquero"],
        ["Miguel","De Cervantes"],
        ["Miguel","Hernandez"],
        ["Maria","Magdalena Laputa"]
    ]
    connection.query(sql,[values], function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Datos introducidos con exito");
            console.log(result);
        }
    })
}
*/


module.exports = {postPlayer, getPlayers}

