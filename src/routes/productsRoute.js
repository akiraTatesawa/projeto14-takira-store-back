import { Router } from 'express';

import { insertProducts } from '../controllers/productsController.js';

const router = Router();

router.post('/', insertProducts);

export default router;
