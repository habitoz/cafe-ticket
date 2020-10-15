import OrderController from '../controllers/order_controller';
import PaymentController from '../controllers/Payment_controller';
import express from 'express'
const router=express.Router();
 
  // ORDER ROUTES
  router.get(`/order`, OrderController.getAll);
  router.get(`/order/:id`, OrderController.get);
  router.post(`/order`, OrderController.insert)
  router.put(`/order/:id`, OrderController.update);
  router.delete(`/order/:id`, OrderController.delete);

  // PAYMENT ROUTES
  router.get(`/payment`, PaymentController.getAll);
  router.get(`/payment/:id`, PaymentController.get);
  router.post(`/payment`, PaymentController.insert)
  router.put(`/payment/:id`, PaymentController.update);
  router.delete(`/payment/:id`, PaymentController.delete);


export default router;
