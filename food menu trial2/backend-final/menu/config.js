const Sequelize = require('sequelize');
const config = new Sequelize("menu" , "root" , "Bigovitch1984@" , {dialect:'mysql'});

module.exports = config;