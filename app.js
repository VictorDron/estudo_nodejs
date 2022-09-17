//Chamada ao Express, que é responsável por criar  o servidor e suas rotas
const express = require ("express");
const app = express();

//Chamada ao Sequelize para conectar o banco de dados mysql
const Sequelize = require ('sequelize');
const sequelize = new Sequelize (/*nome do banco*/'victor',/*Tipo de acesso*/'root',/*Senha*/'153120',{
    host: 'localhost',
    dialect: 'mysql'
});
// Chamada para conectar o body/Parse que recebe os dados do formulário
const bodyParser = require('body-parser');

// Chamada ao handlebars, que é responsável por conectar o front ao back
const handlebars = require('express-handlebars');

//Configuração do BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.set(bodyParser.json());

//Configuração do HandleBars
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine','handlebars');


//Criação de rota para renderizar o HTML.
app.get('/form',function(req,res){
    res.render('formulario');

});
//Rota para recebimento dos dados do front
app.post('/add', function(req,res){

    let nome = req.body.titulo; // Localizando e armazenando na variavel o que virá do campo nome
    let cont = req.body.conteudo;
    //Callback
    res.send('Cadastrado com sucesso' + nome + cont);
    


})

app.listen(8081, function(){
    console.log('Servido ON');
}); 