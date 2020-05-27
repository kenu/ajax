var express = require('express');
var router = express.Router();

// var sameSite = { sameSite: 'none', secure: true };
var sameSite = {};

router.all('/server', function (req, res, next) {
  var randomNumber = Math.random().toString();
  randomNumber = randomNumber.substring(2, randomNumber.length);
  var method = req.method.substring(0, 2);
  const cookieName = method + '-' + randomNumber.substring(0, 3);
  res.cookie(cookieName, randomNumber, { maxAge: 900000, httpOnly: true, ...sameSite });
  console.log('cookie created successfully');
  res.json({ cookie: `cookie ${cookieName}` });
});

router.get('/get', function (req, res, next) {
  var cookies = req.cookies;
  console.log('cookie exists', cookies);
  res.json({ cookies: cookies });
});

module.exports = router;
