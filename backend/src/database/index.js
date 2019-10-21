import Sequelize from 'sequelize';

import Task from '../app/models/Task';
import Raw_Material from '../app/models/Raw_Material';
import Resource from '../app/models/Resource';

import databaseConfig from '../config/database';

const models = [Raw_Material, Resource, Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
