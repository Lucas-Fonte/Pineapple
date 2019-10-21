import Sequelize from 'sequelize';

import Task from '../app/models/Task';
import RawMaterial from '../app/models/RawMaterial';
import Resource from '../app/models/Resource';

import databaseConfig from '../config/database';

const models = [RawMaterial, Resource, Task];

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
