import express from 'express'
import AdminRoutes from '../src/routes/admin_route'
import CashierRoutes from '../src/routes/cashier_route'
import ClerckRoutes from '../src/routes/clerck_route'
import AuthRoutes from '../src/routes/auth_route'

const router=express.Router();
export default (app) => {
     app.use('/api/admin',AdminRoutes); 
     app.use('/api/cashier',CashierRoutes);
     app.use('/api/clerck',ClerckRoutes);
     app.use('/api/auth',AuthRoutes);
};
 