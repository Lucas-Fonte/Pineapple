import { Router } from 'express';
import path from 'path';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/api/users', UserController.store);
routes.post('/api/sessions', SessionController.store);

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

routes.put('/api/users', UserController.update);

routes.get('/api/products', ProductController.index);
routes.post('/api/products', ProductController.store);

routes.use(authMiddleware);

export default routes;
