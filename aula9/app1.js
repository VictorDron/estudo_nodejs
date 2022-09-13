const express = require ("express");
const app = express();

app.get("/", function(){
    res.sendFile(__dirname + "/Github/estudo_nodejs/aula9/index.html");
});


app.listen(8081, function(){
    console.log("Servidor rodando");
});