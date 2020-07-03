var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoute = require('./routes/appRoute');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanDb');
var bodyParse = require('body-parser');
const bodyParser = require('body-parser');
const {
    urlencoded
} = require('body-parser');

app.use('/', appRoute);
app.use(bodyParser, urlencoded({
    extended: true
}));
app.use(bodyParser.json());



http.createServer(app).listen(port);
console.log("Backend is running on port:-", port)