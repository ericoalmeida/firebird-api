import { resolve } from 'path';

const databaseOptions = {
  host: 'localhost',
  port: 3050,
  database: resolve(__dirname, '..', '..', 'database', 'database.fdb'),
  user: 'SYSDBA',
  password: 'masterkey',
  lowercase_keys: false,
  role: null,
  pageSize: 4096,
};

export default databaseOptions;
