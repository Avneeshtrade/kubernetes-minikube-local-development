// config.js
const Sequelize = require('sequelize');
const config = require("../config");

var dbCredentials = config[config.env];
console.debug("hello", dbCredentials)
const sequelize = new Sequelize(dbCredentials.db.name, dbCredentials.db.username,dbCredentials.db.password, {
  dialect: 'mysql',
  host: dbCredentials.db.host,
  port: dbCredentials.db.port
});

module.exports = sequelize;
