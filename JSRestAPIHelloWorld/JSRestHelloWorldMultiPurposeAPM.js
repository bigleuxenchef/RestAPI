/**
 * . * Rumi 2017
 */


//Add this to the VERY top of the first file loaded in your app





//integrate node js and APM from elastic

var apm = require('elastic-apm-node').start({ // Set required app name (allowed characters: a-z, A-Z, 0-9, -, _, and space) 
	appName: 'JSHelloWorldMultiPurpose', // Use if APM Server requires a token
	serviceName: 'SJSHelloWorldMultiPurpose',
	secretToken: '', // Set custom APM Server URL (default: http://localhost:8200) 
	serverUrl: 'http://mbp15.local:8200' })
	var spanwrap = function(F,p1,p2){
	var span = apm.startSpan('Get /')

	if (span) span.end()

}

var prettyjson = require('prettyjson');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var fs = require('fs');
var CallCount = 0
var Counter = 0; // count number of request
//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


var log4js = require('log4js');
log4js.configure({
	appenders: { console: { type: 'console' }, JSHelloWorldMultiPurpose: { type: 'file', filename: 'JSHelloWorldMultiPurpose.log' } },
	categories: { default: { appenders: ['JSHelloWorldMultiPurpose', 'console'], level: 'error' } }
});
var logger = log4js.getLogger('JSHelloWorldMultiPurpose');
logger.level = 'info'


	logger.info("Hello World app listening at http://localhost:3000");
logger.trace(`This platform is ${process.platform} - Architecture :  ${process.arch}`)
logger.debug("Environment : \n" + JSON.stringify(process.env, null, 2))

//for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));


//for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
	var span = apm.startSpan('Get /')
	Counter = Counter + 1;
	CallCount = CallCount + 1;
	var message = 'hello world : ' + Counter;
	logger.info(`[${CallCount}][${req.ip}=>]GET/ incremented number : ` + message)
	res.send(message);
	if (span) span.end()

});

app.get('/count', function (req, res) {
	CallCount = CallCount + 1;

	var message = 'GET hello world : ' + Counter;
	logger.info(`[${CallCount}][${req.ip}=>]GET/count : received body`, req.body, ' return message :', message)
	res.send(message);
});


app.post('/count', function (req, res, next) {
	CallCount = CallCount + 1;
	//	example :curl -i -X POST http://localhost:3000/count?counter=1
	var message = '{ \"POST hello world\" : ' + Counter + '}';

	if (req.query.hasOwnProperty('counter')) {
		if (isNaN(Number(req.query.counter))) {
			var message = 'Attempt to reset counter with NaN : ' + Counter;
			logger.info(message)

		}
		else {
			logger.info('Set counter to new value ' + Number(req.query.counter) + ' instead of ' + Counter)
			Counter = Number(req.query.counter)
		}

	}
	logger.info(`[${CallCount}][${req.ip}=>]POST/count : req.query` + JSON.stringify(req.query))
	logger.trace(`[${CallCount}][${req.ip}=>]POST/count : Request.body`, req.body)

	res.send(message);

});

app.get('/form', function (req, res) {
	logger.info(`[${req.ip}=>]` + req.route.path + " | Load html file : " + __dirname + '/public/form.html');
	res.sendFile(__dirname + '/public/form.html');

	logger.debug(req.route.path, res);
});


app.get('/CallGet', function (req, res) {
	var span = apm.startSpan('CallGet JSON.stringify')

	logger.info(`[${req.ip}=>]` + req.route.path + " - " + JSON.stringify(req.query,null,4));
	if (span) span.end()

	// Prepare output in JSON format
	var span = apm.startSpan('CallGet Prepare Output')

	response = {
			first_name: req.query.first_name,
			last_name: req.query.last_name
	};
	if (span) span.end()
	var span = apm.startSpan('CallGet JSON.stringify and send response')
	res.end(JSON.stringify(response));
	if (span) span.end()

	logger.debug(req.route.path, res);

})

app.post('/CallPost', urlencodedParser, function (req, res) {
	logger.info(`[${req.ip}|=>]` + req.route.path + "| Body (json) : " + JSON.stringify(req.body,null, 4));


	// Prepare output in JSON format
	response = {
			first_name: req.body.first_name,
			last_name: req.body.last_name
	};
	res.end(JSON.stringify(response));

	logger.debug(req.route.path, req, res);

})

app.post('/CallPostJson', urlencodedParser, function (req, res) {
	logger.info(`[${req.ip}|=>]` + req.route.path + "| Body (json) : " + JSON.stringify(req.body,null, 4));


	// Prepare output in JSON format
	response = {
		message: "this is great!",
	};
	res.end(JSON.stringify(response));

	logger.debug(req.route.path, req, res);

})

var download = function (url, dest, cb) {
	var file = fs.createWriteStream(dest);
	var request = http.get(url, function (response) {
		response.pipe(file);
		file.on('finish', function () {
			file.close(cb);  // close() is async, call cb after close completes.
		});
	}).on('error', function (err) { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the
		// result)
		if (cb) cb(err.message);
	});
};




app.get('/Download:file(*)', function (req, res, next) { // this routes all types of file
	logger.info(`[${req.ip}|=>]` + req.route.path + "| Body : " + JSON.stringify(req.body));

	var path = require('path');

	var file = req.params.file;

	var path = path.resolve(".") + '/uploads/' + file;

	path = './public/w3logo.jpeg'
		sleep(300).then(() => {
			res.download(path)}); // magic of download function

});


app.listen(3000);