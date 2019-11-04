module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tasks', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            task_owner: {
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
            resource_id: {
                type: Sequelize.INTEGER,
                references: { model: 'resources', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true
            },
            task_action: {
                type: Sequelize.STRING,
                allowNull: false
            },
            task_start: {
                type: Sequelize.DATE,
                allowNull: false
            },
            task_end: {
                type: Sequelize.DATE,
                allowNull: false
            },
            task_resource: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            material_id: {
                type: Sequelize.INTEGER,
                references: { model: 'materials', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true
            },
            task_result: {
                type: Sequelize.STRING,
                allowNull: false
            },
            task_input: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            task_loss: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            task_output: {
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
        return queryInterface.dropTable('tasks');
    }
};
