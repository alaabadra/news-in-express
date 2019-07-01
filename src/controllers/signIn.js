
const { parse } = require('cookie');

exports.sign = (req, res) => {
  const { jwt } = parse(req.headers.cookie);
  if (req.headers.cookie && req.headers.cookie.includes(jwt)) {
    res.redirect('/');
  } else {
    res.render('signIn');
  }
};
