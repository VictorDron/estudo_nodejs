const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo");
});

app.get("/sobre", function(req,res){
    res.send("Minha página sobre");

});

app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog");

})

app.get("/ola", function(req,res){
    res.send("Olá");
})


app.listen(8081, function(){
    console.log("Servidor rodando");
});
