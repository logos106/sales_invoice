'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'chairtoorders',
      'orderId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'salesorders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    await queryInterface.addColumn(
      'chairtoorders', 
      'stockId', 
      {
        type: Sequelize.UUID,
        references: {
          model: 'chairstocks', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'chairtoorders',
      'orderId'
    );
    await queryInterface.removeColumn(
      'chairtoorders',
      'stockId'
    );
  }
};
