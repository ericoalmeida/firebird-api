import { Request, Response } from 'express';
import FindAllCustomersService from '../services/findAllCustomers.service';

class CustomersController {
  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllCustomers = new FindAllCustomersService();

    const customers = await findAllCustomers.execute();

    return response.json(customers);
  }
}

export default CustomersController;
