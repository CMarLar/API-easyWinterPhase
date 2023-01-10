const connection = require("../database");//importa la conexión con la base de datos
const { Year } = require("../models/year.model");

function postYear(request,response){

    console.log(request.body);

    let sql = "INSERT INTO year (yearNumber,isFirstYear,isLastYear,notes,campaign_id) VALUES (?,?,?,?,?)";
    let values = [request.body.yearNumber,request.body.isFirstYear,request.body.isLastYear,request.body.notes,request.body.campaign_id];

    connection.query(sql,values,function(error,result){

        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })
}

function getYear(request,response){

    let sql = "SELECT * FROM year WHERE campaign_id = " + request.query.campaign_id
    let params = [request.query.campaign_id];
    console.log(request.query);

    connection.query(sql,function(error,result){

        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })
}

function postPlayerYear(request,response){

    console.log("QUIERO VER ESTE BODY: " + JSON.stringify(request.body));

    let sql = "INSERT INTO rel_players_years (player_id,year_id) VALUES ?";
    let values;
    
    if(request.body.players.length == 1){

        values =[
            [request.body.players[0].player_id,request.body.year.year_id]
            
        ]

    }else if(request.body.players.length == 2){

        values =[

            [request.body.players[0].player_id,request.body.year.year_id],
            [request.body.players[1].player_id,request.body.year.year_id]
                    
        ]

    }else if(request.body.players.length == 3){

        values =[

            [request.body.players[0].player_id,request.body.year.year_id],
            [request.body.players[1].player_id,request.body.year.year_id],
            [request.body.players[2].player_id,request.body.year.year_id]
                    
        ]

    }else if(request.body.players.length == 4){

        values =[

            [request.body.players[0].player_id,request.body.year.year_id],
            [request.body.players[1].player_id,request.body.year.year_id],
            [request.body.players[2].player_id,request.body.year.year_id],
            [request.body.players[3].player_id,request.body.year.year_id]
                    
        ]

    }else if(request.body.players.length == 5){

        values =[

            [request.body.players[0].player_id,request.body.year.year_id],
            [request.body.players[1].player_id,request.body.year.year_id],
            [request.body.players[2].player_id,request.body.year.year_id],
            [request.body.players[3].player_id,request.body.year.year_id],
            [request.body.players[4].player_id,request.body.year.year_id]
                    
        ]

    }else if(request.body.players.length == 6){

        values =[

            [request.body.players[0].player_id,request.body.year.year_id],
            [request.body.players[1].player_id,request.body.year.year_id],
            [request.body.players[2].player_id,request.body.year.year_id],
            [request.body.players[3].player_id,request.body.year.year_id],
            [request.body.players[4].player_id,request.body.year.year_id],
            [request.body.players[5].player_id,request.body.year.year_id]
                    
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

function putYear(request,response){

    console.log("###########################################################################");
    console.log(JSON.stringify(request.body));

    let sql = "UPDATE year SET yearNumber = COALESCE(?,yearNumber),isFirstYear = COALESCE(?,isFirstYear), isLastYear = COALESCE(?,isLastYear),notes = COALESCE(?,notes) WHERE year_id = ?";

    

    if (request.body.yearNumber == null){
        request.body.yearNumber = null;
    }
    if (request.body.isFirstYear == null){
        request.body.isFirstYear = null;
    }else if(request.body.isFirstYear == 0){
        request.body.isFirstYear = 0;
    }
    if (request.body.isLastYear == null){
        request.body.isLastYear = null;
    }else if(request.body.isLastYear == 0){
        request.body.isLastYear = 0;
    }
    if (request.body.notes == null){
        request.body.notes = null;
    }
    let values = [request.body.yearNumber,request.body.isFirstYear,request.body.isLastYear,request.body.notes,request.body.year_id];

    console.log(values);
    connection.query(sql,values,function(error,result){
        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })
}

module.exports = {postYear,postPlayerYear,putYear,getYear};