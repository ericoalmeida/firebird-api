import Customer from '../entities/Customer';

export interface ICustomerRepository {
  findAll(): Promise<Customer[]>;
  findById(id: string): Promise<Customer[]>;
  findByEmail(email: string): Promise<Customer[]>;

  create(customer: Customer): Promise<void>;
  update(customer: Customer): Promise<void>;
  delete(id: string): Promise<void>;
}
