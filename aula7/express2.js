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
//Rotas dinamicas
app.get("/ola/:nome/:cargo", function(req,res){
    res.send(req.params.cargo);
})


app.listen(8081, function(){
    console.log("Servidor rodando");
});

