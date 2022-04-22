var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cross Domain' });
});

router.get('/cookie-set', function(req, res, next) {
  res.render('cookie-set', { title: 'Ajax Cookie' });
});

router.get('/cookie-get', function(req, res, next) {
  res.render('cookie-get', { title: 'Get Cookie' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/cross', function(req, res, next) {
  res.render('cross');
});

module.exports = router;
