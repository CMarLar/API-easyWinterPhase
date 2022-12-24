const connection = require("../database");//importa la conexión con la base de datos
const { House } = require('../models/house.model');

function deleteHouse(request,response){

    console.log(request.body);

    let sql = "DELETE FROM house WHERE house_id = ?";
    let params = [request.body.house_id];

    //TERMINAR TRABAJO A PARTIR DE AQUI
    connection.query(sql,params, function(error,result){
            if(error){
                console.log(error);
                response.send(error);
            }else{
                console.log(result);
                response.send(result);
            }
        })
}

module.exports = {deleteHouse}