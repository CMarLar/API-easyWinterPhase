// const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
const {Campaign} = require("../models/campaign.model")



//GET -> /campaign crea campaña
function getCampaigns (request,response){
//hay que usar params?
    let userId = request.query.user_id;

    let sql= "SELECT * FROM railway.campaign WHERE user_id = '" + userId + "'";
    
    connection.query(sql, (error,result) =>{
        if(error){console.log(error);}
        else
        {
            // console.log(result);

            if(result)
            response.send(result);

            else{response.send("-1")}
        }
    })
}

//DELETE -> Elimina una campaña
function deleteCampaign(request,response){

let campaign_Id = request.body.campaign_id;

    // console.log(request.body);//

    let sql = "DELETE FROM railway.campaign WHERE campaign_id = '" + campaign_Id + "'";
    // console.log(sql); 
    connection.query(sql, (error, result) =>
    {
        if (error) 
            console.log(error);
        else 
        {
            // console.log(result);
            response.send(result);
        }
    })
}


//POST -> /campaign crea campaña
function postCampaign(request,response){
    // console.log(request.body);
    let sql = "INSERT INTO campaign (campaign_name,user_id)" +
                "VALUES ('"+request.body.campaign_name +"', '"+
                            request.body.user_id + "')";
    // console.log(sql);

    connection.query(sql, (error,result) =>{
        if(error){console.log(error);}
        else
        {
            // console.log(result);

            if(result)
            response.send(result);
            
            else{response.send("-1")}
        }
    })
}

//PUT -> /campaign modifica campaña
function putCampaign(request,response){

    // console.log(request.body);

    if(request.body.campaign_name == ""){
        request.body.campaign_name = null;
    }
    if(request.body.user_id == ""){
        request.body.user_id = null;
    }
    if(request.body.campaign_id != null){
        
        let params = [request.body.campaign_name,request.body.user_id,request.body.campaign_id];

        let sql = "UPDATE campaign SET campaign_name = COALESCE(?,campaign_name), user_id = COALESCE(?,user_id) WHERE campaign_id = ?";


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




module.exports = {getCampaigns,deleteCampaign,postCampaign,putCampaign}