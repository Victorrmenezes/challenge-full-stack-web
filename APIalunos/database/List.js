const Sequelize = require('sequelize');
const connection = require('./database');

const List = connection.define('studentslist',{
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false
    },
    ra: {
        type:Sequelize.STRING,
        allowNull:false
    },
    cpf: {
        type:Sequelize.STRING,
        allowNull:false
    },
});

List.sync({force:false}).then(()=>{});

module.exports = List;