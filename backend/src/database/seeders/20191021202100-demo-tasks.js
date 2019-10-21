module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'tasks',
      [
        {
          task_owner: 'CONFETTI',
          product: 'AGENDA',
          product_detail: 'CLASSICA',
          task_action: 'CORTAR',
          resource_id: 1,
          task_start: '2019-11-01 10:00:00',
          task_end: '2019-11-01 11:00:00',
          task_resource: 1,
          raw_material_id: 1,
          task_result: 'CAPA',
          task_input: 10,
          task_loss: 0,
          task_output: 40,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};
