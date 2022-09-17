//Chamada ao Express, que é responsável por criar  o servidor e suas rotas
const express = require ("express");
const app = express();
//Chamada ao Sequelize para conectar o banco de dados mysql
const Sequelize = require ('sequelize');
const sequelize = new Sequelize (/*nome do banco*/'victor',/*Tipo de acesso*/'root',/*Senha*/'153120',{
    host: 'localhost',
    dialect: 'mysql'
});

// Chamada ao handlebars, que é responsável por conectar o front ao back
const handlebars = require('express-handlebars');
//Configuração do HandleBars
app.engine('handlebars,' handlebars.engine({defaultLayout}));


//Criação de rota com o método GET
app.get('/',function(req,res){

});

app.listen(8081, function(){
    console.log('Servido ON');
}); 