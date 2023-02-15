import express from 'express';

import { getAllOpcos } from '../controllers/opcosControllers.js';

const router = express.Router();

router.route('/').get(getAllOpcos);

export { router as opcosRouter };
