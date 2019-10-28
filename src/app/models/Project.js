import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        product_owner: Sequelize.STRING,
        product: Sequelize.STRING,
        product_detail: Sequelize.STRING,
        product_quantity: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Project;
