const connect = require('../db_connection');

const addnews = (news, cb) => {
  const { title, description, field, jourId } = news;
  const sql = 'INSERT INTO news (title,descriptions,field,jour_id) Values ($1, $2, $3,$4)';
  const values = [title, description, field, jourId];
  return connect.query(sql, values, cb);
};

module.exports = addnews;
