import Server from './provider/Server';
import {PORT, NODE_ENV} from './config';
import express from 'express';
import cors from 'cors';
//Importar los controladores
import EstudioController from './controllers/EstudioController';

const server = new Server({
    port: PORT,
    env: NODE_ENV,
    middlewares: [
        express.json(),
        express.urlencoded({extended: true}),
        cors()
    ],
    controllers: [EstudioController.instance]
});

server.init();

