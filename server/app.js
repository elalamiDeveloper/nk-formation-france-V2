import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import { createRequestTime } from './middlewares/index.js';
import { formationsRouter, contactsRouter } from './routes/index.js';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(createRequestTime);

// ROUTES
app.use('/api/v1/formations', formationsRouter);
app.use('/api/v1/contacts', contactsRouter);

export default app;
