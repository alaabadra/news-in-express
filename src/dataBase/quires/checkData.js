const connect = require('../db_connection.js');

const checkemail = (email, cb) => {
  query = {
    sql: 'SELECT * from journalists where email = $1',
    value: [email],
  };
  connect.query(query.sql, query.value, (error, res) => {
    if (error) cb(error);
    cb(null, res.rows);
  });
};

module.exports = checkemail;
