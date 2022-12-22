const connection = require("../database");
const {User} = require("../models/user.model");


//postRegister-- SE AÑADE UN NUEVO USUARIO EN LA BBDD

function postRegister(request,response){

    console.log(request.body);
    console.log();

    let newUsuario = new User(request.body.password,request.body.email,request.body.avatar,request.body.username);
    let sql = "INSERT INTO user (password,email,avatar,username) VALUES (?,?,?,?)";
    console.log("DATOS: " + JSON.stringify(newUsuario));
    let params = [newUsuario.password,newUsuario.email,newUsuario.avatar,newUsuario.username];
    

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

//postLogin-- SE BUSCA UN USUARIO CON EL CORREO Y LA CONTRASEÑA INDICADAS

function postLogin(request,response){

    console.log(request.body);
    let sql = "SELECT user_id,password,email,avatar,username FROM user WHERE email = ? AND password = ?";
    let params = [request.body.email,request.body.password];
    console.log("PARAMS: " + params);

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

//putUser-- SE MODIFICA UN USUARIO EN FUNCION DEL ID PROPORCIONADO

function putUser(request,response){

    console.log(request.body);

    if(request.body.password == ""){
        request.body.password = null;
    }
    if(request.body.email == ""){
        request.body.email = null;
    }
    if(request.body.avatar == ""){
        request.body.avatar = null;
    }
    if(request.body.username == ""){
        request.body.username = null;
    }

    if(request.body.user_id != null){

        let sql = "UPDATE user SET password = COALESCE(?,password), email = COALESCE(?,email), avatar = COALESCE(?,avatar), username = COALESCE(?,username) WHERE user_id = ?";
        let params = [request.body.password,request.body.email,request.body.avatar,request.body.username,request.body.user_id];

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

        console.log("NO SE HA INTRODUCIDO NINGUN ID DE USUARIO");
    }

    
}


module.exports = {postRegister,postLogin,putUser}