module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('projects', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            product_owner: {
                type: Sequelize.STRING,
                allowNull: false
            },
            product: {
                type: Sequelize.STRING,
                allowNull: false
            },
            product_detail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            product_quantity: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable('projects');
    }
};
