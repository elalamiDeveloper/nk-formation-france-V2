import { URL } from 'url';
import fs from 'fs';

import connect from './connectDB.js';
import Formation from '../models/formationModel.js';

const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

const formations = JSON.parse(
  fs.readFileSync(`${__dirname}/formations-simple.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Formation.create(formations);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Formation.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

connect();
if (process.argv[2] === '--import') importData();
if (process.argv[2] === '--delete') deleteData();
