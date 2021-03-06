"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _movies = _interopRequireDefault(require("./api/movies"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("./db");

var _users = _interopRequireDefault(require("./api/users"));

var _people = _interopRequireDefault(require("./api/people"));

var _genres = _interopRequireDefault(require("./api/genres"));

var _tvShows = _interopRequireDefault(require("./api/tvShows"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _authenticate = _interopRequireDefault(require("./authenticate"));

var _seedData = require("./seedData");

var _loglevel = _interopRequireDefault(require("loglevel"));

_dotenv["default"].config();

var errHandler = function errHandler(err, req, res, next) {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send("Something went wrong!");
  }

  res.status(500).send("Hey!! You caught the error \uD83D\uDC4D\uD83D\uDC4D, ".concat(err.stack, " "));
};

var app = (0, _express["default"])();
var port = process.env.PORT;

if (process.env.SEED_DB) {
  (0, _seedData.loadUsers)();
  (0, _seedData.loadMovies)();
  (0, _seedData.loadPeople)();
  (0, _seedData.loadTvShows)();
}

if (process.env.NODE_ENV === 'test') {
  _loglevel["default"].setLevel('warn');
} else {
  _loglevel["default"].setLevel('info');
}

app.use((0, _expressSession["default"])({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
app.use(_express["default"]["static"]('public'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
app.use('/api/users', _users["default"]);
app.use('/api/genres', _genres["default"]);
app.use(_authenticate["default"].initialize());
app.use('/api/movies', _authenticate["default"].authenticate('jwt', {
  session: false
}), _movies["default"]);
app.use('/api/tvShows', _authenticate["default"].authenticate('jwt', {
  session: false
}), _tvShows["default"]);
app.use('/api/people', _authenticate["default"].authenticate('jwt', {
  session: false
}), _people["default"]);
app.use(errHandler);
var server = app.listen(port, function () {
  _loglevel["default"].info("Server running at ".concat(port));
});
module.exports = server;