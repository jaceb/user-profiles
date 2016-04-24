var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js')
var userCtrl = require('./userCtrl.js')

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({secret: config.sessionSecret}));


app.post('/api.login', userCtrl.login);

var port = 4040;
app.listen(port, function(req, res, next){
console.log("easy listening on port " + port +": the breeze.")
});

var corsOptions = {
origin: 'http://localhost:4040'
};
