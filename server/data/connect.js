import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const databaseUrl = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(databaseUrl);
    console.log('DataBase Connected...');
  } catch (err) {
    alert("We can't connect to the database");
  }
};

export default connect;
