//Chamada ao Express, que é responsável por criar  o servidor e suas rotas
const express = require ("express");
const app = express();


// Chamada para conectar o body/Parse que recebe os dados do formulário
const bodyParser = require('body-parser');

// Chamada ao handlebars, que é responsável por conectar o front ao back
const handlebars = require('express-handlebars');

//Trazendo o arquivo para a munipulção do db
const Post = require('./models/Post');

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

    //Recebimento e armazenamento
    let nome = req.body.titulo; // Localizando e armazenando na variavel o que virá do campo nome
    let cont = req.body.conteudo;
    
    //Chamda da função para registrar os dados na table do db postapp
    Post.create({

        titulo: nome,
        conteudo: cont
        
    }).then(function(){
        res.send('post criado com sucesso');
    }).catch(function(){
        res.send('Erro ao criar post');
    })
    
})

app.listen(8081, function(){
    console.log('Servido ON');
}); 