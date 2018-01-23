/**
. * Rumi 2017
 */

 
// Add this to the VERY top of the first file loaded in your app

// integrate node js and APM from elastic
/*
var apm = require('elastic-apm-node').start({
	  // Set required app name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
	  appName: 'JSHelloWorldMultiPurpose',
	  // Use if APM Server requires a token
	  secretToken: '',
	  // Set custom APM Server URL (default: http://localhost:8200)
	  serverUrl: 'http://localhost:8200'
	})
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var fs = require('fs');
var CallCount = 0
var Counter = 0; //count number of request

//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var log4js = require('log4js');
log4js.configure({
  appenders: { console: { type: 'console' }, JSHelloWorldMultiPurpose: { type: 'file', filename: 'JSHelloWorldMultiPurpose.log' } },
  categories: { default: { appenders: ['JSHelloWorldMultiPurpose','console'], level: 'error' } }
});
var logger = log4js.getLogger('JSHelloWorldMultiPurpose');
logger.level ='trace'


logger.info("Hello World app listening at http://localhost:3000");
logger.trace(`This platform is ${process.platform} - Architecture :  ${process.arch}`)
logger.debug("Environment : \n" + JSON.stringify(process.env,null, 2))

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 



app.get('/', function(req, res){
	Counter = Counter + 1 ;
	CallCount = CallCount +1 ;
	var message = 'hello world : ' + Counter;
	logger.info(`[${CallCount}][${req.ip}=>]GET/  message with incremented number : ` + message)
  res.send(message);
  
});

app.get('/count', function(req, res){
	CallCount = CallCount +1 ;

	var message = 'hello world : ' + Counter;
	logger.info(`[${CallCount}][${req.ip}=>]GET/count : received body`,req.body, ' return message :',message)
	res.send(message);
});


//var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/count', function(req, res,next){
	CallCount = CallCount + 1 ;

		var message = '{ \"hello world\" : ' + Counter + '}';
		logger.info(`[${CallCount}][${req.ip}=>]POST/count` + JSON.stringify(req.query))
		logger.trace(`[${CallCount}][${req.ip}=>]POST/count : Request.body`, req.body )
	  res.send(message);
	
});

app.get('/form',function(req,res){
	logger.info(`[${req.ip}=>]` + req.route.path + " | Load html file : " + __dirname + '/public/form.html');
	res.sendFile(__dirname + '/public/form.html'); 

	logger.debug(req.route.path, res);
	});


app.get('/CallGet', function (req, res) {
	logger.info(`[${req.ip}=>]` + req.route.path + " - " + JSON.stringify(req.query));
	   // Prepare output in JSON format
	   response = {
	      first_name:req.query.first_name,
	      last_name:req.query.last_name
	   };
	   res.end(JSON.stringify(response));
	   logger.debug(req.route.path, res);

	})

app.post('/CallPost', urlencodedParser, function (req, res) {
	logger.info(`[${req.ip}|=>]` + req.route.path + "| Body : " + JSON.stringify(req.body));
	   // Prepare output in JSON format
	   response = {
	      first_name:req.body.first_name,
	      last_name:req.body.last_name
	   };
	   res.end(JSON.stringify(response));
	   logger.debug(req.route.path,req, res);

	})

	
var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};
	
	
	
	
app.get('/Download:file(*)', function(req, res, next){ // this routes all types of file
	logger.info(`[${req.ip}|=>]` + req.route.path + "| Body : " +JSON.stringify(req.body));

  var path=require('path');

  var file = req.params.file;

  var path = path.resolve(".")+'/uploads/'+file;
  
  path = './public/w3logo.jpeg'
	 var sleep = require('sleep');
 //sleep.sleep(10);
  res.download(path); // magic of download function

});
	
	
app.listen(3000);