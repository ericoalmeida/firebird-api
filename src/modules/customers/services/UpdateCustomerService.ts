import { IUpdateCustomerDTO } from '../dtos/IUpdateCustomerDto';
import { ICustomerRepository } from '../repositories/ICustomerRepository';

export class UpdateCustomerService {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(
    id: string,
    updateCustomerDTO: IUpdateCustomerDTO,
  ): Promise<void> {
    const { name, email } = updateCustomerDTO;

    const [customer] = await this.customerRepository.findById(id);

    console.log(customer);

    const newCustomer = {
      ID: customer.ID,
      NAME: name ? name : customer.NAME,
      EMAIL: email ? email : customer.EMAIL,
    };

    await this.customerRepository.update(newCustomer);
  }
}
