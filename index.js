const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app= express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");
});



app.listen( 3000,function(){
  console.log("Server started on port 3000");
});
