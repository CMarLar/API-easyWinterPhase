const connection = require("../database")
const {Character} = require("../models/character.model");

//POST -> /postChar///HAY QUE MODIFICARLA///
function postChar(request,response){

    console.log(request.body);

    let newChar = new Character (request.body.house_id,request.body.year,request.body.char_name,request.body.age,request.body.char_status,request.body.isMarried,0,0,request.body.role,null);

    let params = [request.body.house_id,request.body.year,request.body.char_name,request.body.age,request.body.char_status,request.body.isMarried,request.body.role]

    let sql = "INSERT INTO character (house_id,year,char_name,age,char_status,isMarried,role)" + "VALUES (?,?,?,?,?,?,?);";

    console.log("DATOS: " + JSON.stringify(newChar));

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



module.exports = {postChar}    


