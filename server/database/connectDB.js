import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { URL } from 'url';

const __dirname = decodeURI(new URL('.', import.meta.url).pathname);
dotenv.config({ path: `${__dirname}/../.env` });

const DB = process.env.DATABASE_CONNECTION.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(DB);
    console.log('DB connection successful!');
  } catch (err) {
    console.log(err.message);
  }
};

export default connect;
