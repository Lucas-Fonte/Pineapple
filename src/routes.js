import { Router } from 'express';
import path from 'path';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';
import ResourceController from './app/controllers/ResourceController';
import MaterialController from './app/controllers/MaterialController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

routes.get('/api/tasks', TaskController.index);
routes.post('/api/tasks', TaskController.store);

routes.get('/api/resources', ResourceController.index);
routes.post('/api/resources', ResourceController.store);

routes.get('/api/materials', MaterialController.index);
routes.post('/materials', MaterialController.store);

routes.get('/api/projects', ProjectController.index);
routes.post('/api/projects', ProjectController.store);

export default routes;
