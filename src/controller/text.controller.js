

const connection = require("../database")


  function getTextPhases(request, response) // funciona 
 {
    let sql;
     if (request.query.id == null)
         sql = "SELECT * FROM text";
    else
         sql = "SELECT * FROM text WHERE text_id="  + request.query.id ;

     connection.query(sql, function (error, result) 
    {
        if (error) 
           console.log(error);
         else 
       {
            response.send(result);
        }
     })
}


 module.exports = {getTextPhases};