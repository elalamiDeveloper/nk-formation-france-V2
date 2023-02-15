import app from './app.js';
import connect from './data/connect.js';

import {
  importFormationData,
  deleteFormationData,
} from './data/import-formations.js';

import { importOpcoData, deleteOpcoData } from './data/import-opcos.js';

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connect();
  if (process.argv[2] === '--importFormationData') importFormationData();
  if (process.argv[2] === '--deleteFormationData') deleteFormationData();
  if (process.argv[2] === '--importOpcoData') importOpcoData();
  if (process.argv[2] === '--deleteOpcoData') deleteOpcoData();
  app.listen(port, () => {
    console.log(`App running in port ${port}...`);
  });
};

startServer();
