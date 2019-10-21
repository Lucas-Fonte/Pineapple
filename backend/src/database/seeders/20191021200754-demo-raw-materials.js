module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'raw_materials',
      [
        {
          raw_material: 'CHAPA',
          raw_material_core: 'PLASTICO',
          raw_material_core_cost: 20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          raw_material: 'CADERNO',
          raw_material_core: 'SEM CORE DEFINIDO',
          raw_material_core_cost: 0,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          raw_material: 'MIOLO',
          raw_material_core: 'PAPEL',
          raw_material_core_cost: 14,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('raw_materials', null, {});
  }
};
