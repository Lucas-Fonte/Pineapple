module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          product_owner: 'CONFETTI',
          product: 'AGENDA',
          product_detail: 'CLASSICA',
          product_quantity: 1000,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('projects', null, {});
  }
};
