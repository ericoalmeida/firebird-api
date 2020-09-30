import CustomerRepository from '../repositories/customer.repository';

class FindAllCustomersService {
  private customersRepository: CustomerRepository;

  constructor() {
    this.customersRepository = new CustomerRepository();
  }

  async execute(): Promise<any> {
    const customers = await this.customersRepository.findAll();

    return customers;
  }
}

export default FindAllCustomersService;
