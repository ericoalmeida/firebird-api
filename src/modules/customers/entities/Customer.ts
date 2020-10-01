import { uuid } from 'uuidv4';

class Customer {
  public readonly ID: string;
  public NAME: string;
  public EMAIL: string;

  constructor(props: Omit<Customer, 'ID'>, ID?: string) {
    Object.assign(this, props);

    if (!ID) {
      this.ID = uuid();
    }
  }
}

export default Customer;
