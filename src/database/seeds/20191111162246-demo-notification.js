module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'notifications',
            [
                {
                    notification: 'O produto X foi cadastrado',
                    seen: false,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('notifications', null, {});
    }
};
