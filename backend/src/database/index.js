const Sequelize = require('sequelize');
const configDB = require('../config/database');
const Model = require('../models/Models')
const connection = new Sequelize(configDB);

Model.init(connection)

module.exports = connection