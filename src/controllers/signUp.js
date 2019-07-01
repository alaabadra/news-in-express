const add = require('./../controllers/addUser');

exports.get = (req, res) => {
  res.render('signUp');
};

exports.post = (req, res) => {
  const newUser = {
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  };
  add.add(newUser, (err, result) => {
    if (err) {
      res.send('<h1>Server Error</h1>');
    } else {
      res.redirect('/signIn');
    }
  });
};
