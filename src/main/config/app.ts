import express from 'express';
import setupMiddllewares from './middllewares';

const app = express();
setupMiddllewares(app);
export default app;