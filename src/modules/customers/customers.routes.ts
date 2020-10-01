import { Request, Response, Router } from 'express';
import { customersController } from './customers.module';

const customersRoutes = Router();

customersRoutes.get('/', (request: Request, response: Response) => {
  return customersController.index(request, response);
});

customersRoutes.get('/:id', (request: Request, response: Response) => {
  return customersController.show(request, response);
});

customersRoutes.post('/', (request: Request, response: Response) => {
  return customersController.store(request, response);
});

customersRoutes.put('/:id', (request: Request, response: Response) => {
  return customersController.update(request, response);
});

customersRoutes.delete('/:id', (request: Request, response: Response) => {
  return customersController.delete(request, response);
});

export default customersRoutes;
