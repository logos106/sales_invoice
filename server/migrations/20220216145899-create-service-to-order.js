'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('servicetoorders', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      price: {
        allowNull: false,
        defaultValue: 1000,
        type: Sequelize.FLOAT,
      },
      description: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('servicetoorders');
  },
};
