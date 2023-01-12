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
    let values = [request.body.year.yearNumber + 1,0,1,"",request.body.year.campaign_id];

    connection.query(sql,values,function(error,result){

        if(error){
            console.log(error);
            // response.send(result);
        }else{
            console.log(result);
            console.log("ESTE ES EL BIBIRI BABBIRI");
            // response.send(result);
            let sql3 = "INSERT INTO railway.character(house_id,year_id,char_name,age,char_status,isMarried,marriageGlory,courtesyMod,railway.character.role,sex) SELECT house_id,?,char_name,age + 1,char_status,isMarried,marriageGlory,courtesyMod,railway.character.role,sex FROM railway.character WHERE year_id = ?;"
            let values3 = [result.insertId,request.body.year.year_id];
            console.log("HOLA HOLITA VECINITO: " + values3);

            connection.query(sql3,values3,function(error3,result3){
                if(error3){
                    console.log(error3);
                    response.send(error3);
                }else{
                    console.log("DROGAS Y MAS DROGAS");
                    console.log("______________________________________________________");
                    console.log(result.insertId);
                    console.log(result3);
                    
                    let sql4 = "SELECT * FROM railway.character WHERE house_id = ? AND year_id = ? AND railway.character.char_name = ?";

                    for (let i = 0; i < request.body.mainCharacters.length; i++){
                        console.log("VUELTA Nº " + i);
                        values4 = [request.body.mainCharacters[i].house_id,result.insertId,request.body.mainCharacters[i].char_name];
                        console.log(values4);
                        
                        connection.query(sql4,values4,function(error4,result4){
                            if(error4){
                                console.log(error4);
                                // response.send(result);
                            }else{
                                console.log(result4);
                                let sql5 = "UPDATE house SET activeChar = ? WHERE house_id = ?";
                                let values5 = [result4[0].character_id,result4[0].house_id];
                                console.log("VALUES[0] " + JSON.stringify(values5));

                                connection.query(sql5,values5,function(error5,result5){
                                    if(error4){
                                        console.log(error5);
                                        // response.send(result);
                                    }else{
                                        console.log("?????????????????????");
                                        console.log("RESULT5: " + result5);
                                    }
            
            
                                })
                            }
    
    
                        })

                       console.log("FIN VUELTA Nº " + i); 
                    }

                    //AQUI TIENES QUE HACER UN SEND
                    response.send(result);



                    // let sql4 = "SELECT house.house_id,house.activeChar, railway.character.character_id, railway.character.house_id,railway.character.year_id,railway.character.char_name,railway.character.age,railway.character.char_status,railway.character.isMarried,marriageGlory,railway.character.courtesyMod,railway.character.role,railway.character.sex FROM house INNER JOIN railway.character ON (railway.character.character_id = house.activeChar) WHERE year_id = ?";
                    //CARLOS ES POSIBLE QUE NECESITE ESTA QUERY
                    
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
    
    let values2 = [null,null,0,request.body.notes,request.body.year.yearNumber,request.body.year.campaign_id];

    console.log(values2);
    connection.query(sql2,values2,function(error2,result2){
        if(error2){
            console.log(error2);
            // response.send(result);
        }else{
            console.log(result2);
            // response.send(result);
        }
    })

//ATENCIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON
//SE HAAAAACEEEEEEEEEEEEEEEEEEEE SABEEEEEEEEEEEEEEEEEEEEEEEEEEEER
//QUE AQUIIIIIIIIII DEBEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//CREARRRSEEEEEEEEEEE LA TABLA RELACION PLAYER YEARS y ACTIVE CHARS YEAR +1
}

function getHouseAndCharacters(request,response){

    
    // console.log(request.query);
    let resultado = {"casa" : null, "personajes" : []}

    let sql = "SELECT * FROM house WHERE house_id = ?"
    let params = [request.query.house_id];

    

    connection.query(sql,params,function(error,result){
        if(error){
            console.log(error);
            // response.send(result);
        }else{
            console.log(result);
            resultado.casa = result;
            let sql2 = "SELECT * FROM railway.character WHERE house_id = ? AND year_id = ?";
            let params2 = [request.query.house_id,request.query.year_id];
            
            connection.query(sql2,params2,function(error2,result2){
                if(error){
                    console.log(error2);
                    // response.send(result);
                }else{
                    resultado.personajes=result2;
                    console.log(result2);
                    response.send(resultado);
                }
            })
        }
    })
    
}

module.exports = {getDatosCampaign,getLastYear,getYearByNumber,currentcampaignToWinterPhase,getHouseAndCharacters};