import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

import { createRequestTime } from './middlewares/index.js';
import { formationsRouter } from './routes/index.js';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(createRequestTime);

// ROUTES
app.use('/api/v1/formations', formationsRouter);

export default app;
