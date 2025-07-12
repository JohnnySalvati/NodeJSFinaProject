import { Router } from 'express'
import productController from '../controllers/product.controllers.js'

const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.get);
router.post('/create/', productController.create);
router.delete('/:id', productController.del);

export default router

