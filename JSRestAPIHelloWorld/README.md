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
* Create en empty javadcript file (i.e. RestHelloWorld.js)

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
```


then just open a browser on <http://localhost:8081>