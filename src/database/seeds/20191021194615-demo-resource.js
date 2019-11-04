module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'resources',
            [
                {
                    resource_field: 'CORTE',
                    resource_tool: 'CORTE 1',
                    resource_cost: 320.5,
                    task_able_resource: true,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    resource_field: 'MONTAGEM',
                    resource_tool: 'PRE-MONTAGEM',
                    resource_cost: 200,
                    task_able_resource: true,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    resource_field: 'ALMOXARIFADO',
                    resource_tool: 'ALMOXARIFADO',
                    resource_cost: 400,
                    task_able_resource: false,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    resource_field: 'SERIGRAFIA',
                    resource_tool: 'MANUAL 1',
                    resource_cost: 450,
                    task_able_resource: true,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('resources', null, {});
    }
};
