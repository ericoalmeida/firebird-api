import { Router } from 'express';
import customersRoutes from './modules/customers/customers.routes';

const routes = Router();

routes.get('/', (request, response) => response.json({ ok: true }));

routes.use('/customers', customersRoutes);

export default routes;
