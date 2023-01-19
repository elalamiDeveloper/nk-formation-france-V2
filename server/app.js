import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use('/api/v1/', (req, res, next) =>
  console.log(
    res.status(200).json({ status: 'success', data: { message: 'OK' } })
  )
);

export default app;
