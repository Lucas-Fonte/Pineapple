module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'products',
            [
                {
                    product: 'Melancia',
                    product_detail: 'vermelha',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('products', null, {});
    }
};
