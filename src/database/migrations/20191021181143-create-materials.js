module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materials', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      raw_material: {
        type: Sequelize.STRING,
        allowNull: false
      },
      raw_material_core: {
        type: Sequelize.STRING,
        allowNull: false
      },
      raw_material_core_cost: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('materials');
  }
};
