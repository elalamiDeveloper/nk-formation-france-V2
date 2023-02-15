import url from 'url';
import fs from 'fs';

import Formation from '../models/Formation.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const formations = JSON.parse(
  fs.readFileSync(`${__dirname}json/formations-simple.json`, 'utf-8')
);

const importFormationData = async () => {
  try {
    await Formation.create(formations);
    console.log('Data successfully loaded!...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteFormationData = async () => {
  try {
    await Formation.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

export { importFormationData, deleteFormationData };
