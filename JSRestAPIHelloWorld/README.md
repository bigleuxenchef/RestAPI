Disclaimer

I am interested in testing technologies and the best way is to do it yourself and experiment. Just do what others did already is a way to learn. This is why I posting what I have done by myself without any pretending to invent or teach anything to anyone.

Happy to share with anyone, happy anyone takes a copy, but I would recommend not to use any of this material as it is more for personal experiment than to achieve anything special other than learning.



# JSRESTAPIHelloWorld

##Prerequisite

* Eclipse Neon
* Eclipse plug-in : NodeJS, GIT, JEE
* node.js and express.js

Note : as a aficionado of eclipse, my version is particulary well setup from CDT, Docket, GIT/Github, Spring, JEE, Angular, Scala, Tomcat.

###Interesting links

<https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm>

<https://expressjs.com/>

##Introduction

* Create an empty javascript project
* Create an empty javascript file (i.e. RestHelloWorld.js)

###`JSRestSimplestHelloWorld.js`

First Program, let's call it the `JSRestSimplestHelloWorld.js`

This program when executed returns ''Hello World'' and the number of time the request was made

```javascript
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
```



Second Program, will highlight how to manage several request and paths, let's call it `JSRestAPIHelloWorld.js`


```javascript

var express = require('express');
var pathToRegexp = require('path-to-regexp')

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
```


Then just open a browser on <http://localhost:8081>