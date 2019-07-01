const express = require('express');

const router = express.Router();
const home = require('./home');
const checkUser = require('./checkUser');
const signIn = require('./signIn');
const signOut = require('./signOut');
const signUp = require('./signUp');
const error = require('./error');
const auth = require('./isCookie');
const news = require('./addNews');

router.get('/', home.get);
router.get('/signIn', signIn.sign);
router.post('/signin', checkUser.checkuser);
router.get('/signOut', signOut.signout);

router.get('/signUp', signUp.get);
router.post('/signUp', signUp.post);
router.use(auth.auth);
router.post('/addnews', news.add);
router.use(error.notfound);
router.use(error.serverError);

module.exports = router;
