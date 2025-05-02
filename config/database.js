const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_produits', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
