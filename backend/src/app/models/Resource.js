import Sequelize, { Model } from 'sequelize';

class Resource extends Model {
  static init(sequelize) {
    super.init(
      {
        resource_field: Sequelize.STRING,
        resource_tool: Sequelize.STRING,
        resource_cost: Sequelize.DOUBLE,
        task_able_resource: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Resource;
