import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ options: true }));

export default routes;
