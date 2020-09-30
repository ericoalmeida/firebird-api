import Firebird from '@src/database/firebird';

class CustomerRepository {
  private firebird: Firebird;

  constructor() {
    this.firebird = new Firebird();
  }

  async findAll(): Promise<any> {
    const sqlInstruction = 'Select Ctm.* FROM Customers Ctm';

    return await this.firebird.query(sqlInstruction, []);
  }
}

export default CustomerRepository;
