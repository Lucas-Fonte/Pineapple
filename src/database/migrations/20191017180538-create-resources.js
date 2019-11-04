module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('resources', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            resource_field: {
                type: Sequelize.STRING,
                allowNull: false
            },
            resource_tool: {
                type: Sequelize.STRING,
                allowNull: false
            },
            resource_cost: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            task_able_resource: {
                type: Sequelize.BOOLEAN,
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
        return queryInterface.dropTable('resources');
    }
};
