const connection = require("../database");
const yearCtrl = require("../controller/year.controller");

function getDatosCampaign(request,response){

    let sql = "SELECT player_id,player_name,winterPhaseDone,house.house_id,house.house_name,house.activeChar,house.shield,railway.character.char_name,railway.year.year_id,railway.year.yearNumber FROM players INNER JOIN house ON (players.house_id = house.house_id) INNER JOIN railway.character ON (house.activeChar = railway.character.character_id)  INNER JOIN railway.year ON(players.campaign_id = railway.year.campaign_id) WHERE players.campaign_id = ?  AND railway.year.isLastYear = 1;"

    let params = [request.query.campaign_id];

    connection.query(sql,params,function(error,result){

        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })
}

function getLastYear(request,response){

    let sql = "SELECT * FROM year WHERE isLastYear = 1 AND railway.year.campaign_id = ?";
    let params = [request.query.campaign_id];
    console.log(request.query);

    connection.query(sql,params,function(error,result){

        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })
}

function getYearByNumber(request,response){

    let sql = "SELECT * FROM year WHERE railway.year.campaign_id = ? AND yearNumber = ?";
    let params = [request.query.campaign_id,request.query.yearNumber];
    console.log(request.query);

    connection.query(sql,params,function(error,result){

        if(error){
            console.log(error);
            response.send(result);
        }else{
            console.log(result);
            response.send(result);
        }
    })
}

function currentcampaignToWinterPhase(request,response){

    console.log(JSON.stringify(request.body));

    let sql = "INSERT INTO year (yearNumber,isFirstYear,isLastYear,notes,campaign_id) VALUES (?,?,?,?,?)";
    let values = [request.body.yearNumber + 1,0,1,request.body.notes,request.body.campaign_id];

    connection.query(sql,values,function(error,result){

        if(error){
            console.log(error);
            // response.send(result);
        }else{
            console.log(result);
            response.send(result);
            let sql3 = "INSERT INTO railway.character(house_id,year_id,char_name,age,char_status,isMarried,marriageGlory,courtesyMod,railway.character.role,sex) SELECT house_id,?,char_name,age,char_status,isMarried,marriageGlory,courtesyMod,railway.character.role,sex FROM railway.character WHERE year_id = ?;"
            let values3 = [result.insertId,request.body.year_id];
            console.log("HOLA HOLITA VECINITO: " + values3);

            connection.query(sql3,values3,function(error,result){
                if(error){
                    console.log(error);
                    // response.send(result);
                }else{
                    console.log(result);
                    // response.send(result);
                }
            })
            
        }
    })

    let sql2 = "UPDATE year SET yearNumber = COALESCE(?,yearNumber),isFirstYear = COALESCE(?,isFirstYear), isLastYear = COALESCE(?,isLastYear),notes = COALESCE(?,notes) WHERE yearNumber = ? AND campaign_id = ?";    
    if(request.body.isFirstYear = null){
        request.body.isFirstYear = 0;
    }
    if(request.body.islastYear = null){
        request.body.isFirstYear = 0;
    }
    
    let values2 = [null,null,0,null,request.body.yearNumber,request.body.campaign_id];

    console.log(values2);
    connection.query(sql2,values2,function(error,result){
        if(error){
            console.log(error);
            // response.send(result);
        }else{
            console.log(result);
            // response.send(result);
        }
    })

}

module.exports = {getDatosCampaign,getLastYear,getYearByNumber,currentcampaignToWinterPhase};