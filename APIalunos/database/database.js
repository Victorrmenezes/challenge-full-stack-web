//This archive receives the connection with the database MySQL ;; Editable
const Sequelize = require('sequelize');
const connection = new Sequelize('basededados','root','victor1999',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;