import Customer from '../entities/Customer';
import { ICustomerRepository } from '../repositories/ICustomerRepository';

export class FindAllCustomersService {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute(): Promise<Customer[]> {
    const customers = await this.customersRepository.findAll();

    return customers;
  }
}
