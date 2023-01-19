import express from 'express';

const router = express.Router();

router.route('/').get(getAllFormations);

export { router };
