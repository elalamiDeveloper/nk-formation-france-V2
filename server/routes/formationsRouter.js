import express from 'express';

import {
  getAllFormations,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
} from '../controllers/formationsControllers.js';

const router = express.Router();

router.route('/').get(getAllFormations).post(createFormation);
router
  .route('/:id')
  .get(getFormationById)
  .patch(updateFormation)
  .delete(deleteFormation);

export { router as formationsRouter };
