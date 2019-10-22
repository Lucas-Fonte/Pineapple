import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';
import ResourceController from './app/controllers/ResourceController';
import MaterialController from './app/controllers/MaterialController';

const routes = new Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);

routes.get('/resources', ResourceController.index);
routes.post('/resources', ResourceController.store);

routes.get('/materials', MaterialController.index);
routes.post('/materials', MaterialController.store);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);

export default routes;
