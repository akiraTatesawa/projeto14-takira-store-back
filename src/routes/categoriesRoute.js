import { Router } from 'express';

import { insertCategories } from '../controllers/categoriesController.js';

const router = Router();

router.post('/', insertCategories);

export default router;
