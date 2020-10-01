import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDto';
import Customer from '../entities/Customer';
import { ICustomerRepository } from '../repositories/ICustomerRepository';

export class CreateCustomerService {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute(createUserDTO: ICreateCustomerDTO): Promise<void> {
    const { name, email } = createUserDTO;

    const customer = new Customer({ NAME: name, EMAIL: email });

    await this.customersRepository.create(customer);
  }
}
