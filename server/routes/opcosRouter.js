import express from 'express';

import { getAllOpcos, createOpco } from '../controllers/opcosControllers.js';

const router = express.Router();

router.route('/').get(getAllOpcos).post(createOpco);

export { router as opcosRouter };
