const { parse } = require('cookie');
const showData = require('../dataBase/quires/getData');

exports.get = (req, res) => {
  const { jwt } = parse(req.headers.cookie);

  if (req.headers.cookie && req.headers.cookie.includes(jwt)) {
    showData((error, results) => {
      if (error) {
        res.render('error');
      } else {
        res.render('homeAuth', { results: results.rows });
      }
    });
  } else {
    showData((error, results) => {
      if (error) {
        res.render('error');
      } else {
        res.render('home', { results: results.rows });
      }
    });
  }
};
