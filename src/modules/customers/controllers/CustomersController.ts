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

    await this.createCustomerService.execute({ name, email });

    return response.status(201).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const customer = await this.findCustomerService.execute(id);

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    await this.updateCustomerService.execute(id, { name, email });

    return response.status(201).send();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteCustomerService.execute(id);

    return response.status(201).send();
  }
}

export { CustomersController };
