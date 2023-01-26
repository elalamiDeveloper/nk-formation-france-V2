import express from 'express';

import { createContact } from '../controllers/contactsControllers.js';

const router = express.Router();

router.route('/').post(createContact);

export { router as contactsRouter };
