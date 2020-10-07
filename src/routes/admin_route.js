import AdminController from '../../src/controllers/admin_controller';
import TableController from '../../src/controllers/table_controller';
import CasherController from '../../src/controllers/cashier_controller';
import ProductController from '../../src/controllers/products_controller';
import WeitereController from '../../src/controllers/weitere_controller';
import ClerckController from '../../src/controllers/clerck_controller';
import express from 'express'
const router=express.Router();

  // ADMIN ROUTES
  router.get(`/`, AdminController.getAll);
  router.post(`/`, AdminController.insert);
  router.put(`/:id`, AdminController.update);
  router.delete(`/:id`, AdminController.delete);

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
  router.get(`/weitere`, WeitereController.getAll);
  router.post(`/weitere`, WeitereController.insert);
  router.put(`/weitere/:id`, WeitereController.update);
  router.delete(`/weitere/:id`, WeitereController.delete);

  //CASHER ROUTES
  router.get(`/casher`, CasherController.getAll);
  router.post(`/casher`, CasherController.insert);
  router.put(`/casher/:id`, CasherController.update);
  router.delete(`/casher/:id`, CasherController.delete);

  //CLERCK ROUTES
  router.get(`/casher`, ClerckController.getAll);
  router.post(`/casher`, ClerckController.insert);
  router.put(`/casher/:id`, ClerckController.update);
  router.delete(`/casher/:id`, ClerckController.delete);

export default router;
