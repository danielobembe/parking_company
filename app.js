var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/locations.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/locations.html'));
});

app.get('/services.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/services.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node application is listening on port ',
  app.get('port'));
});
