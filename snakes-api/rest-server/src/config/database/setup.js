import {
  // createDatabase,
  // dropDatabase,
  createUserTable,
  dropUserTable,
  createArticleTable,
  dropArticleTable,
  createArticleBodyTable,
  dropArticleBodyTable,
  createListingTable,
  dropListingTable,
  createReviewTable,
  dropReviewTable,
  createCommentTable,
  dropCommentTable
} from '../../lib/SQL';

const setup = async () => {
  // await dropDatabase();
  // await createDatabase();
  await dropCommentTable();
  await dropReviewTable();
  await dropListingTable();
  await dropArticleBodyTable();
  await dropArticleTable();
  await dropUserTable();
  await createUserTable();
  await createArticleTable();
  await createArticleBodyTable();
  await createListingTable();
  await createReviewTable();
  await createCommentTable();
  process.exit();
};

setup();