import { Router } from 'express';

import TaskController from './app/controllers/TaskController';
import ResourceController from './app/controllers/ResourceController';
import Raw_MaterialController from './app/controllers/Raw_MaterialController';

const routes = new Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);

routes.get('/resources', ResourceController.index);
routes.post('/resources', ResourceController.store);

routes.get('/raw_materials', Raw_MaterialController.index);
routes.post('/raw_materials', Raw_MaterialController.store);

export default routes;
