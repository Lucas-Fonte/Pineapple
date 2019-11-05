import { Router } from 'express';
import path from 'path';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/api/products', ProductController.index);
routes.post('/api/products', ProductController.store);

export default routes;
