import express from 'express';

import { createVisit } from '../controllers/visitsControllers.js';

const router = express.Router();

router.route('/').post(createVisit);

export { router as visitsRouter };
