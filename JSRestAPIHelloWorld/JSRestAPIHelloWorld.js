/**
 * http://usejsdoc.org/
 * 
 * 
 * 
 */


var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/testconsole',function(req,res)
		{   console.log('Test'); res.send('consolelog done ...');
});


var server = app.listen(8081, 'localhost', function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});
