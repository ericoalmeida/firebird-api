import { ICustomerRepository } from '../repositories/ICustomerRepository';

export class DeleteCustomerService {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
