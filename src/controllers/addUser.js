const bcrypt = require('bcryptjs');
const addJournalist = require('./../dataBase/quires/addJournalist');

const hashFunction = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) cb(err);
    bcrypt.hash(password, salt, cb);
  });
};
exports.add = (object, cb) => {
  hashFunction(object.password, (err, res) => {
    object.password = res;
    addJournalist(object, cb);
  });
};
