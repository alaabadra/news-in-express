const { verify } = require('jsonwebtoken');
const { parse } = require('cookie');
const addnews = require('../dataBase/quires/addnews');

exports.add = (req, res) => {
  const { jwt } = parse(req.headers.cookie);

  verify(jwt, process.env.SECRET, (error, JWT) => {
    const jourId = JWT.id;
    const news = { title: req.body.title, description: req.body.description, field: req.body.field, jourId };
    addnews(news, (err,result) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  });
};
