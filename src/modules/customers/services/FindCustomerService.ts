import Customer from '../entities/Customer';
import { ICustomerRepository } from '../repositories/ICustomerRepository';

export class FindCustomerService {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(id: string): Promise<Customer> {
    const [customer] = await this.customerRepository.findById(id);

    return customer;
  }
}
