import express from 'express';

import {
  createFormation,
  getAllFormations,
  getFormation,
  updateFormation,
  deleteFormation,
} from '../controllers/formationController.js';

const router = express.Router();

router.route('/').get(getAllFormations).post(createFormation);
router
  .route('/:id')
  .get(getFormation)
  .patch(updateFormation)
  .delete(deleteFormation);

export { router };
