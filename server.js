var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var expressApp = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb+srv://Ananya:zSuogqdHcyv3N2SL@cluster0.8ggxkgw.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log("Not able to connect 1");
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

expressApp.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'ejs');

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.use(express.static(__dirname + '/views'));

var index = require('./routes/index');
expressApp.use('/', index);

// catch 404 and forward to error handler
expressApp.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last expressApp.use callback
expressApp.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


const myPort = process.env.PORT || 3000;
expressApp.listen(myPort, function () {
  console.log('Server is started on http://127.0.0.1:' + myPort);
});
