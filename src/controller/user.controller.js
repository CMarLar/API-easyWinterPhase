const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
// const {Student} = require("../classes/studentClass")//ESTO NO ES NECESARIO 


//INSERT INTO `railway`.`user` (`password`, `email`, `avatar`) VALUES ('Password123', 'carlos@carlos.com', 'hola');


//POST -> /register Añade usuarios a la base de datos (base de datos en sql es un array)
function postUser(request,response){
    console.log(request.body);
    let sql = "INSERT INTO user (nombre,apellidos,correo,foto,password)" +
                "VALUES ('"+request.body.nombre +"', '"+
                            request.body.apellidos + "', '"+
                            request.body.correo + "', '"+
                            request.body.url + "', '"+
                            request.body.password + "')";
    console.log(sql);

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}//si hay error, imprímelo
        else//de lo contrario
        {
            console.log(result);//imprime el resultado

            if(result)//resultID hace referencia a un objeto de POST. Aquí dice Si hay ID, manda la respuesta?
            response.send(result);
            // {response.send(String(result.insertId))}
            else{response.send("-1")}
        }
    })
}


// //POST -> /login/ Comprueba que existe un usuario con los datos (correo, contraseña) en caso correcto se debe retornar todos los datos de la tabla usuario menos la contraseña, en caso contrario notificar que los datos son incorrectos.

// function login(request,response){
//     console.log(request.body);
//     let sql = "SELECT id_usuario,nombre,apellidos,correo,foto FROM usuario WHERE password = '" + request.body.password + "' AND correo = '" + request.body.correo + "' "
//                 console.log(sql);

//     connection.query(sql, (err,result) =>{
//         if(err){console.log(err);}
//         else
//         {
//             console.log(result);

//             if(result)
//             response.send(result);

//             else{response.send("-1")}
//         }
//     })
// }

// //GET “/libros?id_usuario=Pepe”. Devuelve todos los libros almacenados en la BBDD de un usuario.
// function getBooks(request,response){
//     let id = request.query.id_usuario;
//     console.log(id);
//     let sql= "SELECT * FROM libro WHERE id_usuario = '" + id + "'"

//         connection.query(sql, (err,result) =>{
//         if(err){console.log(err);}
//         else
//         {
//             console.log(result);

//             if(result)
//             response.send(result);

//             else{response.send("-1")}
//         }
//     })
// }

// //GET “/libros?id_usuario=Pepe&id_libro=10”. Devuelve los datos del libro cuyo id corresponda con el de la BBDD y sea del usuario especificado por su id_usuario.

// function getOneBook(request,response){
//     let user_id = request.query.id_usuario;
//     let book_id = request.query.id_libro;
//     console.log("Usuario: " + user_id + ", Libro: " + book_id);
//     let sql= "SELECT usuario.id_usuario,libro.id_libro,libro.titulo,libro.tipo,libro.autor,libro.precio,libro.foto FROM appbooks.usuario JOIN libro ON (usuario.id_usuario = libro.id_usuario) WHERE usuario.id_usuario = '" + user_id + "' AND libro.id_libro = '" + book_id + "'"

//         connection.query(sql, (err,result) =>{
//         if(err){console.log(err);}
//         else
//         {
//             console.log(result);

//             if(result)
//             response.send(result);

//             else{response.send("-1")}
//         }
//     })
// }
// //PUT “/libros”. Actualiza la información de un libro de la BBDD.
// function modifyBooks(request,response){
//     console.log(request.body);
//     // const body = Object.keys(request.body);
//     // body.forEach(e => {
//     //     if(!e){
//     //     delete request.body[e]
//     // }
//     // });

//     //CÓDIGO PARA EVITAR CAMPOS VACÍOS -> condicional ternario
//     let params=[
//         request.body.id_usuario,
//                 request.body.titulo ? request.body.titulo : undefined,
//                 request.body.autor ?  request.body.autor : undefined,
//                 request.body.precio ? request.body.precio : undefined,
//                 request.body.foto ? request.body.foto : undefined,
//                 request.body.id_libro
//             ];

//     let sql = "UPDATE libro SET id_usuario = COALESCE(?, id_usuario) , "
//     +"titulo = COALESCE(?, titulo) , "
//     +"autor = COALESCE(?, autor) , " 
//     +"precio = COALESCE(?, precio) , " 
//     +"foto = COALESCE(?, foto) WHERE id_libro = ?";

//     console.log(sql); 
//     connection.query(sql, params,(err, result)=> 
//     {
//         if (err) 
//             console.log(err);
//         else 
//         {
//             response.send(result);
//         }
//     })
// }


// // POST -> Añade un nuevo libro a la BBDD asociado a un usuario.

// function addNewBook(request,response){
//     console.log(request.body);
//     let sql = "INSERT INTO libro (id_usuario,titulo,tipo,autor,precio,foto)" +
//                 "VALUES ('"+request.body.id_usuario +"', '"+
//                             request.body.titulo + "', '"+
//                             request.body.tipo + "', '"+
//                             request.body.autor + "', '"+
//                             request.body.precio + "', '"+
//                             request.body.foto + "')";
//     console.log(sql);

//     connection.query(sql, (err,result) =>{
//         if(err){console.log(err);}
//         else
//         {
//             console.log(result);

//             if(result)
//             response.send(result);

//             else{response.send("-1")}
//         }
//     })
// }


// //DELETE -> Elimina el libro de la BBDD..
// function deleteBook(request,response){
// let id = request.body.id_libro
//     console.log(request.body);//
//     let sql = "DELETE FROM libro WHERE id_libro = '" + id + "'";
//     console.log(sql); 
//     connection.query(sql, (err, result) =>
//     {
//         if (err) 
//             console.log(err);
//         else 
//         {
//             response.send(result);
//         }
//     })
// }




module.exports = {postUser}