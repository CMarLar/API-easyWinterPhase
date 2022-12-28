const connection = require("../database")
const {Character} = require("../models/character.model");

//POST -> /postChar///HAY QUE MODIFICARLA PARA HACER INSERCIONES MÚLTIPLES///
function postChar(request,response){

    console.log(request.body);

    let newChar = new Character (request.body.house_id,request.body.year_id,request.body.char_name,request.body.age,request.body.char_status,request.body.isMarried,0,0,request.body.role,request.body.sex,null);

    let params = [null,request.body.house_id,request.body.year_id,request.body.char_name,request.body.age,request.body.char_status,request.body.isMarried,request.body.role,request.body.sex]

    let sql = "INSERT INTO railway.character (character_id,house_id,year_id,char_name,age,char_status,isMarried,role,sex)" + "VALUES (?,?,?,?,?,?,?,?,?);";

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

//GET - muestra todos los personajes

function getChar(request,response){

    console.log(request.body);

    let house_id = request.query.house_id;

    let sql = "SELECT * FROM railway.character WHERE house_id = '" + house_id + "'";

    connection.query(sql, (error,result) =>{
        if(error){console.log(error);}
        else
        {
            console.log(result);

            if(result)
            response.send(result);

            else{response.send("-1")}
        }
    })

}


function deleteChar(request,response){

    let character_id = request.body.character_id;
    
        console.log(request.body);//
        let sql = "DELETE FROM railway.character WHERE character_id = '" + character_id + "'";
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



module.exports = {postChar,getChar,deleteChar}    


// INSERT INTO `railway`.`character` (`house_id`, `char_name`, `age`, `char_status`, `isMarried`, `marriageGlory`, `courtesyMod`, `role`) VALUES ('74', 'Personaje de prueba', '18', b'1', b'0', '0', '0', 'Escudero');