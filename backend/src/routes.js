import { Router } from 'express';

import TaskController from './app/controllers/TaskController';
import ResourceController from './app/controllers/ResourceController';
import RawMaterialController from './app/controllers/RawMaterialController';

const routes = new Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);

routes.get('/resources', ResourceController.index);
routes.post('/resources', ResourceController.store);

routes.get('/raw_materials', RawMaterialController.index);
routes.post('/raw_materials', RawMaterialController.store);

export default routes;
