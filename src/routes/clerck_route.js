import ClerckController from '../controllers/clerck_controller';
import express from 'express'
const router=express.Router();

  // POST ROUTES
  router.get(`/`, ClerckController.getAll);
  router.post(`/`, ClerckController.insert)
  router.put(`/:id`, ClerckController.update);
  router.delete(`/:id`, ClerckController.delete);

export default router;
