import http from 'http';
import express from 'express';
import './config/logging';
import { loggingHandler } from './config/middleware/loggingHandler';
import { corsHandler } from './config/middleware/corsHandler';
import { routeNotFound } from './config/middleware/routeNotFound';
import { SERVER, SERVER_HOSTNAME, SERVER_PORT } from './config/config';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

import mangaRouter from './routes/index';

export const Main = () => {
    logging.info('............................................');
    logging.info('Initializing API');
    logging.info('............................................');
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.info('............................................');
    logging.info('Logging and Configuration');
    logging.info('............................................');
    application.use(loggingHandler);
    application.use(corsHandler);
    application.use('/manga', mangaRouter);
    logging.info('............................................');
    logging.info('Define Controller Routing');
    logging.info('............................................');
    application.get('main/healthcheck', (req, res, next) => {
        return res.status(200).json({ hello: 'world!' });
    });

    logging.info('............................................');
    logging.info('Define Controller Routing');
    logging.info('............................................');
    application.use(routeNotFound);

    logging.info('............................................');
    logging.info('Starting Server');
    logging.info('............................................');
    httpServer = http.createServer(application);
    httpServer.listen(SERVER.SERVER_PORT, () => {
        logging.info('............................................');
        logging.info('Server Started: ' + SERVER_HOSTNAME + ':' + SERVER_PORT);
        logging.info('............................................');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
Main();
