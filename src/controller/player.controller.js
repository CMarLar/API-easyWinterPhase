// const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
const {Player} = require("../models/player.model");

function postPlayer(request,response){

    console.log("BODY COMPLETO " + JSON.stringify(request.body));
    console.log("BODY[0] " +JSON.stringify(request.body[0]));
    console.log("BODY[0] " +JSON.stringify(request.body[1]));

    let sql = "INSERT INTO players (house_id,campaign_id,player_name,winterPhaseDone) VALUES ?;"//esto se hace para inserciones múltiples
    let values;
    if(request.body.length == 1){

        values =[
            [request.body[0].house_id,request.body[0].campaign_id,request.body[0].player_name,request.body[0].winterPhaseDone]
            
        ]

    }else if(request.body.length == 2){

        values =[

            [request.body[0].house_id,request.body[0].campaign_id,request.body[0].player_name,request.body[0].winterPhaseDone],
            [request.body[1].house_id,request.body[1].campaign_id,request.body[1].player_name,request.body[1].winterPhaseDone]
                    
        ]

    }else if(request.body.length == 3){

        values =[

            [request.body[0].house_id,request.body[0].campaign_id,request.body[0].player_name,request.body[0].winterPhaseDone],
            [request.body[1].house_id,request.body[1].campaign_id,request.body[1].player_name,request.body[1].winterPhaseDone],
            [request.body[2].house_id,request.body[2].campaign_id,request.body[2].player_name,request.body[2].winterPhaseDone]
                    
        ]

    }else if(request.body.length == 4){

        values =[

            [request.body[0].house_id,request.body[0].campaign_id,request.body[0].player_name,request.body[0].winterPhaseDone],
            [request.body[1].house_id,request.body[1].campaign_id,request.body[1].player_name,request.body[1].winterPhaseDone],
            [request.body[2].house_id,request.body[2].campaign_id,request.body[2].player_name,request.body[2].winterPhaseDone],
            [request.body[3].house_id,request.body[3].campaign_id,request.body[3].player_name,request.body[3].winterPhaseDone]
                    
        ]

    }else if(request.body.length == 5){

        values =[

            [request.body[0].house_id,request.body[0].campaign_id,request.body[0].player_name,request.body[0].winterPhaseDone],
            [request.body[1].house_id,request.body[1].campaign_id,request.body[1].player_name,request.body[1].winterPhaseDone],
            [request.body[2].house_id,request.body[2].campaign_id,request.body[2].player_name,request.body[2].winterPhaseDone],
            [request.body[3].house_id,request.body[3].campaign_id,request.body[3].player_name,request.body[3].winterPhaseDone],
            [request.body[4].house_id,request.body[4].campaign_id,request.body[4].player_name,request.body[4].winterPhaseDone]
                    
        ]

    }else if(request.body.length == 6){

        values =[

            [request.body[0].house_id,request.body[0].campaign_id,request.body[0].player_name,request.body[0].winterPhaseDone],
            [request.body[1].house_id,request.body[1].campaign_id,request.body[1].player_name,request.body[1].winterPhaseDone],
            [request.body[2].house_id,request.body[2].campaign_id,request.body[2].player_name,request.body[2].winterPhaseDone],
            [request.body[3].house_id,request.body[3].campaign_id,request.body[3].player_name,request.body[3].winterPhaseDone],
            [request.body[4].house_id,request.body[4].campaign_id,request.body[4].player_name,request.body[4].winterPhaseDone],
            [request.body[5].house_id,request.body[5].campaign_id,request.body[5].player_name,request.body[5].winterPhaseDone]
                    
        ]

    }
    

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

function getPlayersByCampaign(request, response) // funciona 
{
   let sql;
    if (request.query.campaign_id == null)
        sql = "SELECT * FROM players";
   else
        sql = "SELECT * FROM players WHERE campaign_id="  + request.query.campaign_id ;

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

function putPlayersHouse(request,response){

    console.log("CAMBIO JUGADOR" + request.body);
    console.log("HOLA: " + request.body.house_id);

    let sql = "UPDATE players SET house_id = ? where player_id = ?;"//esto se hace para inserciones múltiples

    let values = [request.body.house_id,request.body.player_id]

    connection.query(sql,values, function(error,result){
        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })

}

function putPlayers(request,response){

    console.log("CAMBIO JUGADOR" + JSON.stringify(request.body));
    console.log("HOLA: " + request.body.house_id);

    if (request.body.house_id == "" || request.body.house_id == null){
        request.body.house_id = null;
    }
    if (request.body.campaign_id == "" || request.body.campaign_id == null){
        request.body.campaign_id = null;
    }
    if (request.body.player_name == "" || request.body.player_name == null){
        request.body.player_name = null;
    }
    if (request.body.winterPhaseDone == "" || request.body.winterPhaseDone == null){
        request.body.winterPhaseDone = null;
    }

    if (request.body.winterPhaseDone == null){
        request.body.winterPhaseDone = 0;
    }
    
    let sql = "UPDATE players SET house_id = COALESCE(?,house_id), campaign_id = COALESCE(?,campaign_id), player_name = COALESCE(?,player_name), winterPhaseDone = COALESCE(?,winterPhaseDone) WHERE player_id = ?;"

    let values = [request.body.house_id,request.body.campaign_id,request.body.player_name,request.body.winterPhaseDone,request.body.player_id]

    connection.query(sql,values, function(error,result){
        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })

}

function putAllPlayers(request,response){

    console.log("JUGADORES" + JSON.stringify(request.body));//almacena un array, por lo que hay que adaptar el resto en un bucle. ponemos el sql antes

    let sql = "UPDATE players SET house_id = COALESCE(?,house_id), campaign_id = COALESCE(?,campaign_id), player_name = COALESCE(?,player_name), winterPhaseDone = COALESCE(?,winterPhaseDone) WHERE player_id = ?;"

    let values;

    let resultado = [];

    for (let i = 0; i < request.body.length; i++) {

        if (request.body[i].house_id == "" || request.body[i].house_id == null){
            request.body[i].house_id = null;
        }
        if (request.body[i].campaign_id == "" || request.body[i].campaign_id == null){
            request.body[i].campaign_id = null;
        }
        if (request.body[i].player_name == "" || request.body[i].player_name == null){
            request.body[i].player_name = null;
        }
        if (request.body[i].winterPhaseDone == "" || request.body[i].winterPhaseDone == null){
            request.body[i].winterPhaseDone = null;
        }
    
        if (request.body[i].winterPhaseDone == null){
            request.body[i].winterPhaseDone = 0;
        }

        values = [request.body[i].house_id,request.body[i].campaign_id,request.body[i].player_name,request.body[i].winterPhaseDone,request.body[i].player_id]
        

        connection.query(sql,values, function(error,result){
            if(error){
                console.log("Error: " + JSON.stringify(error));
                response.send(error);
            }else{
                resultado.push(result);//se hace para hacer un contador de result.
                console.log(JSON.stringify(resultado));
            }
        })
    }

    response.send(resultado)//hacemos el send.






}


module.exports = {postPlayer, getPlayers,putPlayersHouse,putPlayers,getPlayersByCampaign,putAllPlayers}

