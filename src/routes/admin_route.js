import AdminController from '../../src/controllers/admin_controller';
import TableController from '../../src/controllers/table_controller';
import UserController from '../../src/controllers/user_controller';
import ProductController from '../../src/controllers/products_controller';
import WeitereController from '../../src/controllers/weitere_controller';
import ClerckController from '../../src/controllers/clerck_controller';
import OrderController from '../controllers/order_controller';

import express from 'express'
const router=express.Router();

  // ADMIN ROUTES
  router.get(`/`, AdminController.getAll);
  router.post(`/`, AdminController.insert);
  router.put(`/:id`, AdminController.update);
  router.delete(`/:id`, AdminController.delete);

  //report Controller
  router.post(`/gross-sale-report`, OrderController.grossSale)
  router.post(`/net-sale-report`, OrderController.netSale)
  router.post(`/gross-profit-report`, OrderController.grossProfit)
  router.get('/cross-check',AdminController.crossCheck)

  //PRODUCT ROUTES
  router.get(`/product`, ProductController.getAll);
  router.post(`/product`, ProductController.insert);
  router.put(`/product/:id`, ProductController.update);
  router.delete(`/product/:id`, ProductController.delete);

  
  //TABLE ROUTES
  router.get(`/table`, TableController.getAll);
  router.post(`/table`, TableController.insert);
  router.put(`/table/:id`, TableController.update);
  router.delete(`/table/:id`, TableController.delete);

  //WEITERE ROUTES
  router.get(`/waiter`, WeitereController.getAll);
  router.post(`/waiter`, WeitereController.insert);
  router.put(`/waiter/:id`, WeitereController.update);
  router.delete(`/waiter/:id`, WeitereController.delete);

  //CASHER ROUTES
  router.get(`/user`, UserController.getAll);
  router.post(`/user`, UserController.insert);
  router.put(`/user/:id`, UserController.update);
  router.delete(`/user/:id`, UserController.delete);

  //CLERCK ROUTES
  // router.get(`/casher`, ClerckController.getAll);
  // router.post(`/casher`, ClerckController.insert);
  // router.put(`/casher/:id`, ClerckController.update);
  // router.delete(`/casher/:id`, ClerckController.delete);

export default router;
