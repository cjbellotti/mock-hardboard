// in sublime
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

var data = '{ "data" : "AAAAA" }';

app.post('/test-hardboard', function (req, res) {
 res.send(data);
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});