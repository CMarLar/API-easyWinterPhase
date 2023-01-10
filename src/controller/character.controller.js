const connection = require("../database")
const {Character} = require("../models/character.model");

//////////HOLA HOLA HOLA

//POST -> /Crea un personaje
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
function postCharacters(request,response){
    console.log("ENTRANDO EN NARNIA ABROCHENSE LOS CINTURONES FIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUM");
    console.log(JSON.stringify(request.body));

    let sql = "INSERT INTO railway.character (character_id,house_id,year_id,char_name,age,char_status,isMarried,marriageGlory,courtesyMod,role,sex) VALUES ?;";
    let values = [];

    for (let i = 0; i < request.body.length; i++){
        console.log("##################################################################################################################################################");
        values.push([null,request.body[i].house_id,request.body[i].year_id,request.body[i].char_name,request.body[i].age,request.body[i].char_status,request.body[i].isMarried,null,null,request.body[i].role,request.body[i].sex]);

        console.log("VALUE DE " + i + ": " + values[i]);
        console.log("##################################################################################################################################################");
    }

    console.log(values);
    
    connection.query(sql,[values],function(error,result){
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
    console.log("EL ERROR ESTA A PARTIR DE AQUI?????????????????????????????????????????????????????????????????????????");

    console.log("AQUI YA HEMOS VISTO QUE HA PASADO EL REQ.BODY");
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

/* irene */
//GET - muestra todos los personajes mayores de 15

function getChar_names(request,response){
 
    let house_id = request.query.house_id;

    let sql = "SELECT char_name FROM railway.character WHERE age > 15 AND char_status=1 AND house_id = '" + house_id + "'";

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

function getOneChar(request,response){

    let character_id = request.query.character_id;

    let sql = "SELECT * FROM railway.character WHERE character_id = '" + character_id + "'";

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

function putChar(request,response){//al hacer las pruebas en Postman tenía que poner el 1 y el 0 de char_status entre comillas

    console.log(request.body);

    if(request.body.house_id == ""){
        request.body.house_id = null;
    }
    if(request.body.year_id == ""){
        request.body.year_id = null;
    }
    if(request.body.char_name == ""){
        request.body.char_name = null;
    }
    if(request.body.age == ""){
        request.body.age = null;
    }
    if(request.body.char_status == ""){//esta guarrería es cosa de Miguel para que el p**o sql deje de pasar ceros a null
        request.body.char_status = null;
    }

    if(request.body.char_status == null){
        request.body.char_status = 0;
    }

    if(request.body.isMarried == ""){
        request.body.isMarried = null;
    }
    
    if(request.body.isMarried == null){//para que el sql deje de pasar ceros a null
        request.body.isMarried = 0;
    }

    if(request.body.mariageGlory == ""){
        request.body.mariageGlory = null;
    }

    if(request.body.mariageGlory == null){//para que el sql deje de pasar ceros a null
        request.body.mariageGlory = 0;
    }

    if(request.body.courtesyMod == ""){
        request.body.courtesyMod = null;
    }
    if(request.body.role == ""){
        request.body.role = null;
    }
    if(request.body.sex == ""){
        request.body.sex = null;
    }
    if(request.body.character_id != null){


        let params = [request.body.house_id,request.body.year_id,request.body.char_name,request.body.age,request.body.char_status,request.body.isMarried,request.body.mariageGlory,request.body.courtesyMod,request.body.role,request.body.sex,request.body.character_id]

        let sql = "UPDATE railway.character SET house_id = COALESCE(?,house_id),year_id = COALESCE(?,year_id), char_name = COALESCE(?,char_name),age = COALESCE(?,age),char_status = COALESCE(?,char_status),isMarried = COALESCE(?,isMarried),marriageGlory = COALESCE(?,marriageGlory),courtesyMod = COALESCE(?,courtesyMod),role = COALESCE(?,role),sex = COALESCE(?,sex) WHERE character_id = ?";

        connection.query(sql,params, function(error,result){
            if(error){
                console.log(error);
                response.send(error);
            }else{
                console.log(result);
                response.send(result);
            }
        })

    }else{

        console.log("No se reconoce el id de personaje");
    }

    
}

//MODIFIFCA VARIOS PERSONAJES A LA VEZ
// function putCharacters(request,response){

//     console.log(JSON.stringify(request.body));

//     let sql = "UPDATE railway.character SET house_id = COALESCE(?,house_id),year_id = COALESCE(?,year_id), char_name = COALESCE(?,char_name),age = COALESCE(?,age),char_status = COALESCE(?,char_status),isMarried = COALESCE(?,isMarried),marriageGlory = COALESCE(?,marriageGlory),courtesyMod = COALESCE(?,courtesyMod),role = COALESCE(?,role),sex = COALESCE(?,sex) WHERE character_id = ?";
//     let params = [];

//     for (let i = 0; i < request.body.characters.length; i++){

//         if(request.body.characters[i].house_id == "" || request.body.characters[i].house_id == null){
//             request.body.characters[i].house_id = null;
//         }
//         if(request.body.characters[i].year_id == "" || request.body.characters[i].year_id == null){
//             request.body.characters[i].year_id = null;
//         }
//         if(request.body.characters[i].char_name == "" || request.body.characters[i].char_name == null){
//             request.body.characters[i].char_name = null;
//         }
//         if(request.body.characters[i].age == "" || request.body.characters[i].age == null){
//             request.body.characters[i].age = null;
//         }
//         if(request.body.characters[i].char_status == "" || request.body.characters[i].char_status == null){
//             request.body.characters[i].char_status = null;
//         }
//         if(request.body.characters[i].isMarried == "" || request.body.characters[i].isMarried == null){
//             request.body.characters[i].isMarried = null;
//         }
//         if(request.body.characters[i].mariageGlory == "" || request.body.characters[i].mariageGlory == null){
//             request.body.characters[i].mariageGlory = null;
//         }
//         if(request.body.characters[i].courtesyMod == "" || request.body.characters[i].courtesyMod == null){
//             request.body.characters[i].courtesyMod = null;
//         }
//         if(request.body.characters[i].sex == "" || request.body.characters[i].sex == null){
//             request.body.characters[i].sex = null;
//         }
//         if(request.body.characters[i].character_id == "" || request.body.characters[i].character_id == null){
//             request.body.characters[i].character_id = null;
//         }



//         params.push([request.body.characters[i].house_id,request.body.characters[i].year_id,request.body.characters[i].char_name,request.body.characters[i].age,request.body.characters[i].char_status,request.body.characters[i].isMarried,request.body.characters[i].mariageGlory,request.body.characters[i].courtesyMod,request.body.characters[i].sex,request.body.characters[i].character_id]);
//     }

//     connection.query(sql,[params], function(error,result){
//         if(error){
//             console.log(error);
//             response.send(error);
//         }else{
//             console.log(result);
//             response.send(result);
//         }
//     })

// }

//DELETE - BORRA UN PERSONAJE
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

    function deleteCharByHouse(request,response){

        let house_id = request.body.house_id;
        
            console.log(request.body);//
            let sql = "DELETE FROM railway.character WHERE house_id = '" + house_id + "'";
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


        function getCharsLastYear(request,response){
            console.log("EL ERROR ESTA A PARTIR DE AQUI?????????????????????????????????????????????????????????????????????????");
        
            console.log("AQUI YA HEMOS VISTO QUE HA PASADO EL REQ.BODY");
            let house_id = request.query.house_id;
            let year_id = request.query.year_id;
        
            let sql = "SELECT * FROM railway.character WHERE house_id = '" + house_id + "' AND year_id =  '" + year_id + "'";
            
        
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
        


module.exports = {postChar,postCharacters,getChar,deleteChar,putChar,deleteCharByHouse,getOneChar,getCharsLastYear,getChar_names}    


// INSERT INTO `railway`.`character` (`house_id`, `char_name`, `age`, `char_status`, `isMarried`, `marriageGlory`, `courtesyMod`, `role`) VALUES ('74', 'Personaje de prueba', '18', b'1', b'0', '0', '0', 'Escudero');