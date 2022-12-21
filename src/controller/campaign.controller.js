// const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
const {Campaign} = require("../models/campaign.model")



//GET -> /campaign crea campaña
function getCampaigns (request,response){
//hay que usar params?
    let userId = request.query.user_id;

    let sql= "SELECT * FROM railway.campaign WHERE user_id = '" + userId + "'";
    
    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else
        {
            console.log(result);

            if(result)
            response.send(result);

            else{response.send("-1")}
        }
    })
}

//DELETE -> Elimina una campaña
function deleteCampaign(request,response){

let campaign_Id = request.body.campaign_id;


    console.log(request.body);//
    let sql = "DELETE FROM railway.campaign WHERE campaign_id = '" + campaign_Id + "'";
    console.log(sql); 
    connection.query(sql, (err, result) =>
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log(result);
            response.send(result);
        }
    })
}



// //POST -> /campaign crea campaña
// function postCampaign(request,response){
//     console.log(request.body);
//     let sql = "INSERT INTO user (nombre,apellidos,correo,foto,password)" +
//                 "VALUES ('"+request.body.nombre +"', '"+
//                             request.body.apellidos + "', '"+
//                             request.body.correo + "', '"+
//                             request.body.url + "', '"+
//                             request.body.password + "')";
//     console.log(sql);

//     connection.query(sql, (err,result) =>{
//         if(err){console.log(err);}//si hay error, imprímelo
//         else//de lo contrario
//         {
//             console.log(result);//imprime el resultado

//             if(result)//resultID hace referencia a un objeto de POST. Aquí dice Si hay ID, manda la respuesta?
//             response.send(result);
//             // {response.send(String(result.insertId))}
//             else{response.send("-1")}
//         }
//     })
// }




module.exports = {getCampaigns,deleteCampaign}