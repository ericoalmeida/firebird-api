import knex from 'knex';
import firebird_knx from 'firebird-knx';
import databaseOptions from '@src/settings/database';

const firebird = knex({
  client: firebird_knx,
  connection: databaseOptions,
});

export { knex, firebird };
