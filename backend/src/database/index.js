import Sequelize from 'sequelize';

import Project from '../app/models/Project';
import Task from '../app/models/Task';
import Material from '../app/models/Material';
import Resource from '../app/models/Resource';

import databaseConfig from '../config/database';

const models = [Project, Material, Resource, Task];

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
