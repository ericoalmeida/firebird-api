import { CustomersController } from './controllers/CustomersController';
import FirebirdCustomersRepository from './repositories/Implementations/FirebirdCustomersRepository';
import { FindAllCustomersService } from './services/FindAllCustomersService';
import { CreateCustomerService } from './services/CreateCustomerService';
import { FindCustomerService } from './services/FindCustomerService';
import { DeleteCustomerService } from './services/DeleteCustomerService';
import { UpdateCustomerService } from './services/UpdateCustomerService';

const firebirdCustomersRepository = new FirebirdCustomersRepository();
const findAllCustomers = new FindAllCustomersService(
  firebirdCustomersRepository,
);

const createCustomer = new CreateCustomerService(firebirdCustomersRepository);
const findCustomer = new FindCustomerService(firebirdCustomersRepository);
const deleteCustomer = new DeleteCustomerService(firebirdCustomersRepository);
const updateCustomer = new UpdateCustomerService(firebirdCustomersRepository);

const customersController = new CustomersController(
  findAllCustomers,
  createCustomer,
  findCustomer,
  updateCustomer,
  deleteCustomer,
);

export { findAllCustomers, customersController };
