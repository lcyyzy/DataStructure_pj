var express = require('express');
var router = express.Router();

var atob       = require('atob');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lcyyzy',
  database : 'lcypj'
});

connection.connect();

/* GET users listing. */
router.get('/:query', function(req, res, next) {
  var q = atob(req.param('query'));
  connection.query(q, function(err, rows, fields) {
  	if (err) throw err;
	  res.send(rows);
  });
});

module.exports = router;
