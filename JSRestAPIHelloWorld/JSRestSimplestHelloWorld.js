/**
 * 
 */

var express = require('express');
var app = express();
var count = 0; //count number of request
console.log("Example app listening at http://localhost:3000");


app.get('/', function(req, res){
	count = count + 1 ;
	var message = 'hello world : ' + count;
  res.send(message);
  
});



app.listen(3000);