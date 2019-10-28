import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        task_owner: Sequelize.STRING,
        product: Sequelize.STRING,
        product_detail: Sequelize.STRING,
        task_action: Sequelize.STRING,
        task_start: Sequelize.DATE,
        task_end: Sequelize.DATE,
        task_resource: Sequelize.INTEGER,
        task_result: Sequelize.STRING,
        task_input: Sequelize.INTEGER,
        task_loss: Sequelize.INTEGER,
        task_output: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Resource, {
      foreignKey: 'resource_id',
      as: 'resource'
    });
    this.belongsTo(models.Material, {
      foreignKey: 'material_id',
      as: 'material'
    });
  }
}

export default Task;
