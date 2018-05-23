delete process.env['DEBUG_FD'];
/* project base path */
var path = require('path');
/* server */
var express = require('express');

var app = express();
app.use('/', express.static(__dirname + '/app'));
console.log('Start server...');
var port = 8082;
app.listen(port);