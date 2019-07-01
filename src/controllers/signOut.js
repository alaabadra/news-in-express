const { verify } = require('jsonwebtoken');
const { parse } = require('cookie');

exports.signout = (req, res) => {
  const jwt = parse(req.headers.cookie).jwt;
  res.cookie('jwt', jwt, {
    maxAge: 0,
  }, {
    httpOnly: false,
  });
  res.redirect('/');
};
