import express from 'express';

import {
  getAllFormations,
  createFormation,
} from '../controllers/formationController.js';

const router = express.Router();

router.route('/').get(getAllFormations).post(createFormation);

export { router };
