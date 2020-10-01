import { firebird } from '@src/database/firebird';
import Customer from '../../entities/Customer';
import { ICustomerRepository } from '../ICustomerRepository';

class FirebirdCustomerRepository implements ICustomerRepository {
  async findAll(): Promise<Customer[]> {
    return await firebird.select('*').from('customers');
  }
  async findById(id: string): Promise<Customer[]> {
    console.log(`id: ${id}`);
    return await firebird
      .where('id', id)
      .select('*')
      .from<Customer>('customers');
  }

  async findByEmail(email: string): Promise<Customer[]> {
    return await firebird
      .where('email', email)
      .select('*')
      .from<Customer>('customers');
  }

  async create(customer: Customer): Promise<void> {
    await firebird.insert(customer).into('customers');
  }

  async update(customer: Customer): Promise<void> {
    const { ID, NAME, EMAIL } = customer;

    await firebird('customers').update({ NAME, EMAIL }).where({ ID });
  }

  async delete(id: string): Promise<void> {
    await firebird('customers').where('ID', id).del();
  }
}

export default FirebirdCustomerRepository;
