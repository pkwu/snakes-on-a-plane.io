export const signUpHelper = ({ username, email, password, first, last, type }) => {
  return `
    INSERT into users (username, email, password, first, last, type)
    VALUES ('${username}', '${email}', '${password}', '${first.replace(/'/g, "''")}', '${last}', '${type}');
  `;
};

export const loginHelper = ({ username }) => {
  return `
    SELECT id, username, email, password, first, last, type
    FROM users
    WHERE username='${username}'
  `;
};

export const insertHelper = (table) => {
  return `
    SELECT * from ${table} where id=last_insert_id();
    `;
};