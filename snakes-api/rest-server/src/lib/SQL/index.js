require('dotenv').config();

import db from '../../config/database';
import { success, error } from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

// export const createDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `CREATE DATABASE ${database}`
//     );
//     success(`successfully created database ${database}`);
//   } catch (err) {
//     error(`error creating database ${err}`);
//   }
// };

// export const dropDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `DROP DATABASE IF EXISTS ${database}`
//     );
//     success(`successfully dropped database ${database}`);
//   } catch (err) {
//     error(`error dropping database ${err}`);
//   }
// };

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE users 
      (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        username VARCHAR(20) NOT NULL, 
        email VARCHAR(30) NOT NULL, 
        password VARCHAR(30) NOT NULL, 
        first VARCHAR(20) NOT NULL, 
        last VARCHAR(20) NOT NULL,
        type CHAR(1) NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
      `
    );
    success('successfully created users table');
  } 
  catch (err) {
    error(`error creating users table ${err}`);
  }
};

export const dropUserTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  }
  catch (err) {
    error(`error dropping users table ${err}`);
  }
};

export const createArticleTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE articles
      (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        image VARCHAR(50) NOT NULL,
        title VARCHAR(50) NOT NULL,
        body TEXT NOT NULL,
        user_id MEDIUMINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) 
          REFERENCES users(id)
      )
      `
    );
    success('successfully created articles table');
  }
  catch (err) {
    error(`error creating articles table ${err}`);
  }
};

export const dropArticleTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS articles`
    );
    success('successfully dropped articles table');
  }
  catch (err) {
    error(`error dropping articles table ${err}`);
  }
};

export const createArticleBodyTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE article_bodies
      (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        body TEXT,
        PRIMARY KEY (id)
      )
      `
    );
    success('successfully created article bodies table');
  }
  catch (err) {
    error(`error creating article bodies table ${err}`);
  }
};

export const dropArticleBodyTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS article_bodies`
    );
    success('successfully dropped article bodies table');
  }
  catch (err) {
    error(`error dropping article bodies table ${err}`);
  }
};

export const createListingTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE listings
      (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        title VARCHAR(30) NOT NULL,
        price VARCHAR(10) NOT NULL,
        image_one VARCHAR(50) NOT NULL,
        image_two VARCHAR(50) NOT NULL,
        iamge_three VARCHAR(50) NOT NULL,
        body TEXT NOT NULL,
        user_id MEDIUMINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id)
          REFERENCES users(id)
      )
      `
    );
    success('successfully created listings table');
  }
  catch (err) {
    error(`error creating listings table ${err}`);
  }
};

export const dropListingTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS listings`
    );
    success('successfully dropped listings table');
  }
  catch (err) {
    error(`error dropping listings table ${err}`);
  }
};

export const createReviewTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE reviews
      (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        stars VARCHAR(1) NOT NULL,
        body TEXT NOT NULL,
        reviewer_id MEDIUMINT NOT NULL,
        listing_id MEDIUMINT NOT NULL,
        article_id MEDIUMINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (reviewer_id)
          REFERENCES users(id),
        FOREIGN KEY (listing_id)
          REFERENCES listings(id),
        FOREIGN KEY (article_id)
          REFERENCES articles(id)
      )
      `
    );
    success('successfully created reviews table');
  }
  catch (err) {
    error(`error creating reviews table ${err}`);
  }
};

export const dropReviewTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS reviews`
    );
    success('successfully dropped reviews table');
  }
  catch (err) {
    error(`error dropping reviews table ${err}`);
  }
};

export const createCommentTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE comments
      (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        body TEXT NOT NULL,
        listing_id MEDIUMINT NOT NULL,
        parent_id MEDIUMINT NOT NULL,
        user_id MEDIUMINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (listing_id)
          REFERENCES listings(id),
        FOREIGN KEY (parent_id)
          REFERENCES comments(id),
        FOREIGN KEY (user_id)
          REFERENCES users(id)
      )
      `
    );
    success('successfully created comments table');
  }
  catch (err) {
    error(`error dropping comments table ${err}`);
  }
};

export const dropCommentTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS comments`
    );
    success('successfully dropped comments table');
  }
  catch (err) {
    error(`error dropping comments table ${err}`);
  }
};