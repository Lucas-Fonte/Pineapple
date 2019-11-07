import { Router } from 'express';
import path from 'path';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/api/users', UserController.store);
routes.post('/api/sessions', SessionController.store);
routes.get('/api/products', ProductController.index);

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

routes.use(authMiddleware);

routes.post('/api/products', ProductController.store);
routes.put('/api/products', ProductController.update);
routes.delete('/api/products', ProductController.delete);



export default routes;
