import {
  createDatabase,
  dropDatabase,
  createUserTable,
  dropUserTable
} from '../../lib/SQL';

const setup = async () => {
  // await dropDatabase();
  // await createDatabase();
  await dropUserTable();
  await createUserTable();
  process.exit();
};

setup();