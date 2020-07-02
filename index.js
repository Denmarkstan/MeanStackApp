var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoute = require('./routes/appRoute');
app.use('/', appRoute)



http.createServer(app).listen(port);
console.log("Backend is running on port:-", port)