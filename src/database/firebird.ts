import nodeFirebird, {
  ConnectionPool,
  Database,
  Transaction,
} from 'node-firebird';
import databaseOptions from '@src/settings/database';

class Firebird {
  private connection: ConnectionPool;

  constructor() {
    this.connection = nodeFirebird.pool(5, databaseOptions);
  }

  private async databaseConnection(): Promise<Database> {
    const dbConn: Database = await new Promise((reject, resolve) => {
      this.connection.get((err, db) => {
        if (err) {
          reject(err);
        }

        resolve(db);
      });
    });

    return dbConn;
  }

  private async databaseTransaction(
    activeConnection: Database,
  ): Promise<Transaction> {
    const dbTrans: Transaction = await new Promise((reject, resolve) => {
      activeConnection.transaction(
        nodeFirebird.ISOLATION_READ_COMMITED,
        (err, transaction) => {
          if (err) {
            reject(err);
          } else {
            resolve(transaction);
          }
        },
      );
    });

    return dbTrans;
  }

  public async query(sqlInstruction: string, sqlParams: any[]) {
    const datab = await this.databaseConnection();

    const queryResult = await new Promise((reject, resolve) => {
      datab.query(sqlInstruction, sqlParams, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }

        datab.detach();
      });
    });

    return queryResult;
  }

  public async execute(sqlInstruction: string, sqlParams: any[]) {
    const datab = await this.databaseConnection();
    const databTrans = await this.databaseTransaction(datab);

    const queryResult = await new Promise((reject, resolve) => {
      databTrans.query(sqlInstruction, sqlParams, (err, result) => {
        if (err) {
          reject(err);
          databTrans.rollback();
        } else {
          databTrans.commit(err => {
            if (err) {
              reject(err);
              databTrans.rollback();
            } else {
              resolve('Done');
              datab.detach();
            }
          });
        }
      });
    });

    return queryResult;
  }
}

export default Firebird;
