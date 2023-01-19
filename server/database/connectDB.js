import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

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
