const connect = require('../db_connection');

module.exports = (journalists, cb) => {
  const { fullname, email, password } = journalists;
  const sql = 'INSERT INTO journalists (fullname,email,password) Values ($1, $2, $3)';
  const values = [fullname, email, password];
  return connect.query(sql, values, (error, res) => {
    if (error) cb(error);
    cb(null, 'add journalist is done');
  });
};
