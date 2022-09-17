//Chamada ao Express
const express = require ("express");
const app = express();
//Chamada ao Sequelize para conectar o banco de dados mysql
const Sequelize = require ('sequelize');
const sequelize = new Sequelize (/*nome do banco*/'victor',/*Tipo de acesso*/'root',/*Senha*/'153120',{
    host: 'localhost',
    dialect: 'mysql'
})



app.get('/',function(req,res){

});

app.listen(8081, function(){
    console.log('Servido ON');
}); 