import { Router } from 'express'
import authController from '../controllers/authentication.controllers.js'

const router = Router();

router.post('/', authController.createJWT);

export default router

