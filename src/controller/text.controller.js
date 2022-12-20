
const { response, request } = require("express");
const connection = require("../database")


function getTextPhase1(request, response) // funciona 
{
   let sql;
    if (request.query.id == null)
        /* sql = "SELECT * FROM text"; */

        sql = "SELECT * FROM text WHERE text_id=1";

    connection.query(sql, function (err, result) 
   {
       if (err) 
          console.log(err);
        else 
      {
           response.send(result);
       }
    })
}

function getTextPhase2(request, response) // funciona 
{
   let sql;
    if (request.query.id == null)
        /* sql = "SELECT * FROM text"; */

        sql = "SELECT * FROM text WHERE text_id=2";

    connection.query(sql, function (err, result) 
   {
       if (err) 
          console.log(err);
        else 
      {
           response.send(result);
       }
    })
}

function getTextPhase8(request, response) // funciona 
{
   let sql;
    if (request.query.id == null)
        /* sql = "SELECT * FROM text"; */

        sql = "SELECT * FROM text WHERE text_id=3";

    connection.query(sql, function (err, result) 
   {
       if (err) 
          console.log(err);
        else 
      {
           response.send(result);
       }
    })
}

function getTextPhase9a(request, response) // funciona 
{
   let sql;
    if (request.query.id == null)
        /* sql = "SELECT * FROM text"; */

        sql = "SELECT * FROM text WHERE text_id=4";

    connection.query(sql, function (err, result) 
   {
       if (err) 
          console.log(err);
        else 
      {
           response.send(result);
       }
    })
}

function getTextPhase9b(request, response) // funciona 
{
   let sql;
    if (request.query.id == null)
        /* sql = "SELECT * FROM text"; */

        sql = "SELECT * FROM text WHERE text_id=5";

    connection.query(sql, function (err, result) 
   {
       if (err) 
          console.log(err);
        else 
      {
           response.send(result);
       }
    })
}

 module.exports = {getTextPhase1, getTextPhase2, getTextPhase8, getTextPhase9a, getTextPhase9b};