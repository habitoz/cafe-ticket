
import express from 'express'
import UserController from '../../src/controllers/user_controller';

const router=express.Router();
  //AUTH ROUTES
  router.post(`/login`, UserController.login);

export default router;
