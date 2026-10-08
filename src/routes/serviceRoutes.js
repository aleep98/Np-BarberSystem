import express from 'express';
import serviceController from '../controllers/serviceController.js';

const router = express.Router();

router.get('/services', serviceController.getAllServices);
router.post('/services', serviceController.createService);

export default router;