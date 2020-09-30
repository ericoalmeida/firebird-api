import { Router } from 'express';
import CustomersController from './modules/customers/controllers/CustomersController';

const routes = Router();

const customersController = new CustomersController();

routes.get('/', (request, response) => response.json({ options: true }));
routes.get('/customers', customersController.findAll);

export default routes;
