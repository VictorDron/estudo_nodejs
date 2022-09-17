const db = require ('./db');

const Post = db.sequelize.define ('postagens',{

    titulo: {
        type: db.Sequelize.TEXT
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }

}); 

/*Parametro para criação
Post.sync({force:true})*/

//Exportação para usar esse model em outros arquivos
module.exports = Post;
