const express = require("express");
const app = express;
const Sequelize = require('sequelize');

const sequelize = new Sequelize ('victor','root','153120',{
    host: "localhost",
    dialect: "mysql"
})

sequilize.authenticate().then(function(){
    console.log('Conectado');
}).catch(function(erro){
    console.log('Falha ao se conectar' + erro);

})