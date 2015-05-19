'use strict';
var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 1337;
var app = express();

app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/public'));

app.get('*',function(req,res){
	res.sendFile(__dirname+'public/index.html');
});

app.listen(port);
