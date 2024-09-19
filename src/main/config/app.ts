import express from 'express';
import setupMiddllewares from './middllewares';
import setupRoutes from './routes';

const app = express();
setupMiddllewares(app);
setupRoutes(app);
export default app;