import AppErrors from '@src/errors/AppErrors';
import { ICustomerRepository } from '../repositories/ICustomerRepository';

export class DeleteCustomerService {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(id: string): Promise<void> {
    const [customer] = await this.customerRepository.findById(id);

    if (!customer) {
      throw new AppErrors('Customer not found', 400);
    }

    await this.customerRepository.delete(id);
  }
}
