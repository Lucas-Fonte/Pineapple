import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';
import ResourceController from './app/controllers/ResourceController';
import MaterialController from './app/controllers/MaterialController';

const routes = new Router();

routes.get('/api/tasks', TaskController.index);
routes.post('/api/tasks', TaskController.store);

routes.get('/api/resources', ResourceController.index);
routes.post('/api/resources', ResourceController.store);

routes.get('/api/materials', MaterialController.index);
routes.post('/materials', MaterialController.store);

routes.get('/api/projects', ProjectController.index);
routes.post('/api/projects', ProjectController.store);

export default routes;
