import OrderController from '../controllers/order_controller';
import express from 'express'
const router=express.Router();

  // ORDER ROUTES
  router.get(`/order`, OrderController.getAll);
  router.post(`/order`, OrderController.insert)
  router.put(`/order/:id`, OrderController.update);
  router.delete(`/order/:id`, OrderController.delete);


export default router;
