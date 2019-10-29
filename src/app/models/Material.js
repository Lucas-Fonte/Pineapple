import Sequelize, { Model } from 'sequelize';

class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        raw_material: Sequelize.STRING,
        raw_material_core: Sequelize.STRING,
        raw_material_core_cost: Sequelize.DOUBLE
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Material;
