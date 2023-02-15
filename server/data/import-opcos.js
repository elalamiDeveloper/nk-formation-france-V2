import fs from 'fs';
import url from 'url';
import Opco from '../models/Opco.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const opcos = JSON.parse(
  fs.readFileSync(`${__dirname}json/opcos-simple.json`, 'utf-8')
);

const importOpcoData = async () => {
  try {
    await Opco.create(opcos);
    console.log('Data successfully loaded!...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteOpcoData = async () => {
  try {
    await Opco.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

export { importOpcoData, deleteOpcoData };
