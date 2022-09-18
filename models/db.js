//Chamada ao Sequelize para conectar o banco de dados mysql
const Sequelize = require ('sequelize');
const sequelize = new Sequelize (/*nome do banco*/'postapp',/*Tipo de acesso*/'root',/*Senha*/'153120',{
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});

//Exportação para ser usado no pagina principal
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize

}