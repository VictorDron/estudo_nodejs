const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo");
});
app.listen(8081, function(){
    console.log("Servidor rodando");
});