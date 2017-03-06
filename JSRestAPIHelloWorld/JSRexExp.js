
var express = require('express');
var pathToRegexp = require('path-to-regexp')

var app = express();

app.get('/', function (req, res, next) {
   res.send('Hello World');
});


app.get(/.*fly$/, function (req, res, next) {
	  res.send('pattern /.*fly$/');
	  next();
	});

app.get(/ab(cd)?e/, function (req, res, next) {
	res.send(req.params);
	next();
	});


//this route will print log whatever the request
app.post(/.*/,function (req, res, next) {
	console.log(req);
	});

var server = app.listen(8081, 'localhost', function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});


