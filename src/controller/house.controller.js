const connection = require("../database")
const {House} = require("../models/house.model");

//POST -> /createhouse
function postHouse(request,response){

    // console.log(request.body);

    let newHouse = new House (request.body.house_name,null,request.body.holding_name,request.body.familyCharacteristic,request.body.shield,request.body.economyLevels,null);


    let sql = "INSERT INTO house (house_name,holding_name,familyCharacteristic,shield,economyLevels)" + "VALUES (?,?,?,?,?);";

    let params = [request.body.house_name,request.body.holding_name,request.body.familyCharacteristic,request.body.shield,request.body.economyLevels]

    // console.log("DATOS: " + JSON.stringify(newHouse));

    connection.query(sql,params, function(error,result){
        if(error){
            // console.log(error);
            response.send(result);
        }else{
            // console.log(result);
            response.send(result);
        }
    })

}

function getHouse(request,response){

    let sql = "SELECT * FROM house WHERE house_id = ?"
    let params = [request.query.house_id];
    // console.log(request.query);

    connection.query(sql,params,function(error,result){

        if(error){
            // console.log(error);
            response.send(result);
        }else{
            // console.log(result);
            response.send(result);
        }
    })
}


//Put -> /createhouse
function putHouse(request,response){

    // console.log(request.body);

    if(request.body.house_name == ""){
        request.body.house_name = null;
    }
    if(request.body.activeChar == ""){
        request.body.activeChar = null;
    }
    if(request.body.holding_name == ""){
        request.body.holding_name = null;
    }
    if(request.body.familyCharacteristic == ""){
        request.body.familyCharacteristic = null;
    }
    if(request.body.shield == ""){
        request.body.shield = null;
    }
    if(request.body.house_id != null){


        let params = [request.body.house_name,request.body.activeChar,request.body.holding_name,request.body.familyCharacteristic,request.body.shield,request.body.economyLevels,request.body.house_id]

        let sql = "UPDATE house SET house_name = COALESCE(?,house_name),activeChar = COALESCE(?,activeChar), holding_name = COALESCE(?,holding_name),familyCharacteristic = COALESCE(?,familyCharacteristic),shield = COALESCE(?,shield), economyLevels = COALESCE(?,economyLevels) WHERE house_id = ?";

        connection.query(sql,params, function(error,result){
            if(error){
                // console.log(error);
                response.send(error);
            }else{
                // console.log(result);
                response.send(result);
            }
        })

    }else{

        // console.log("No se reconoce el id de campaña");
    }
}


function deleteHouse(request,response){

    let house_id = request.body.house_id;
    
    
        // console.log(request.body);//
        let sql = "DELETE FROM railway.house WHERE house_id = '" + house_id + "'";
        // console.log(sql); 
        connection.query(sql, (err, result) =>
        {
            if (err) 
                console.log(err);
            else 
            {
                // console.log(result);
                response.send(result);
            }
        })
    }



module.exports = {postHouse,putHouse,deleteHouse,getHouse}    