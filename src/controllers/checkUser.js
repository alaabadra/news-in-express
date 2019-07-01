const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const checkemail = require('./../dataBase/quires/checkData');

exports.checkuser = (req, res) => {
  const { email, password } = req.body;
  checkemail(email, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, resAuth) => {
        if (error) throw new Error('error in comparing password');
        if (resAuth) {
          const payload = {
            id: result[0].id,
            fullname: result[0].fullname,
          };

          const jwt = sign(payload, process.env.SECRET);
          res.cookie('jwt', jwt, { maxAge: 1000 * 60 * 60 * 24 * 1 }, { httpOnly: true });
          res.redirect('/');
        } else {
          res.redirect('/signIn');
        }
      });
    } else {
      res.redirect('/signIn');
    }
  });
};
