var express = require('express');
var router = express.Router();

router.get('/movies', function(req, res, next) {
  res.render('movies/index');
});

router.get('/movies/new', function(req, res, next) {
  res.render('movies/new');
});

router.post('/movies', function(req, res, next) {
  res.redirect('/movies', req.body)
});



module.exports = router;
