var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cookie-test', function(req, res, next) {
  res.render('cookie-test', { title: 'Ajax Cookie' });
});

router.get('/cookie-get', function(req, res, next) {
  res.render('cookie-get', { title: 'Express' });
});

module.exports = router;
