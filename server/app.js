import express, { json } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import { router as formationRouter } from './routes/formationRoutes.js';

const app = express();

app.use(json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/formations', formationRouter);

export default app;
