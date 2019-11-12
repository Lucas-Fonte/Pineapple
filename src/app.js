import './bootstrap';

import path from 'path';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(
            express.static(path.join(__dirname, '..', 'client', 'build'))
        );
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
