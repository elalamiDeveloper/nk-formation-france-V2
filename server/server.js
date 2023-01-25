import app from './app.js';
import connect from './data/connect.js';
import { importData, deleteData } from './data/import-database.js';

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connect();
  if (process.argv[2] === '--import') importData();
  if (process.argv[2] === '--delete') deleteData();
  app.listen(port, () => {
    console.log(`App running in port ${port}...`);
  });
};

startServer();
