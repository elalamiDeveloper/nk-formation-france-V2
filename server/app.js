import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
dotenv.config();

import { createRequestTime } from './middlewares/index.js';
import {
  formationsRouter,
  contactsRouter,
  opcosRouter,
  visitsRouter,
} from './routes/index.js';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(createRequestTime);

// ROUTES
app.use('/api/v1/formations', formationsRouter);
app.use('/api/v1/contacts', contactsRouter);
app.use('/api/v1/opcos', opcosRouter);
app.use('/api/v1/visits', visitsRouter);

export default app;
