import { Request, Response } from 'express';
import { CreateCustomerService } from '../services/CreateCustomerService';
import { DeleteCustomerService } from '../services/DeleteCustomerService';
import { FindAllCustomersService } from '../services/FindAllCustomersService';
import { FindCustomerService } from '../services/FindCustomerService';
import { UpdateCustomerService } from '../services/UpdateCustomerService';

class CustomersController {
  constructor(
    private findAllCustomersService: FindAllCustomersService,
    private createCustomerService: CreateCustomerService,
    private findCustomerService: FindCustomerService,
    private updateCustomerService: UpdateCustomerService,
    private deleteCustomerService: DeleteCustomerService,
  ) {}

  public async index(request: Request, response: Response): Promise<Response> {
    const customers = await this.findAllCustomersService.execute();

    return response.json(customers);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    try {
      await this.createCustomerService.execute({ name, email });

      return response.status(201).send();
    } catch (error) {
      return response.send(error);
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const customer = await this.findCustomerService.execute(id);

      return response.json(customer);
    } catch (error) {
      return response.status(400).send(error);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    try {
      await this.updateCustomerService.execute(id, { name, email });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteCustomerService.execute(id);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error);
    }
  }
}

export { CustomersController };
