import { Router } from 'express'
import userController from '../controllers/user.controllers.js'

const router = Router();

router.get('/', userController.getAll);
router.get('/:name', userController.getByName);

export default router

