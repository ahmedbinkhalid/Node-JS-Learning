const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '2380891', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;