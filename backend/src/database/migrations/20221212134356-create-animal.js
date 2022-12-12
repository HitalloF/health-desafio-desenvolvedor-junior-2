'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
   return queryInterface.createTable('animais', {
    id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idade: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
    ,
    tipo: {
      type: Sequelize.STRING,
      allowNull: false
    }
    ,
    raca: {
      type: Sequelize.STRING,
      allowNull: true
    },
    dono_nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dono_telefone: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    });
     
  },

  down (queryInterface, Sequelize) {
return queryInterface.dropTable('animais');
    
  }
};