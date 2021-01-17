"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUsers = loadUsers;
exports.loadMovies = loadMovies;
exports.loadPeople = loadPeople;
exports.loadTvShows = loadTvShows;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userModel = _interopRequireDefault(require("../api/users/userModel"));

var _movieModel = _interopRequireDefault(require("../api/movies/movieModel"));

var _peopleModel = _interopRequireDefault(require("../api/people/peopleModel"));

var _tvShowModel = _interopRequireDefault(require("../api/tvShows/tvShowModel"));

var _movies = require("./movies.js");

var _people = require("./people.js");

var _tvShows = require("./tvShows.js");

var users = [{
  'username': 'user1',
  'password': 'test1'
}, {
  'username': 'user2',
  'password': 'test2'
}];

function loadUsers() {
  return _loadUsers.apply(this, arguments);
} // deletes all movies documents in collection and inserts test data


function _loadUsers() {
  _loadUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('load user Data');
            _context.prev = 1;
            _context.next = 4;
            return _userModel["default"].deleteMany();

          case 4:
            _context.next = 6;
            return users.forEach(function (user) {
              return _userModel["default"].create(user);
            });

          case 6:
            console.info("".concat(users.length, " users were successfully stored."));
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error("failed to Load user Data: ".concat(_context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _loadUsers.apply(this, arguments);
}

function loadMovies() {
  return _loadMovies.apply(this, arguments);
} // deletes all people documents in collection and inserts test data


function _loadMovies() {
  _loadMovies = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('load movie data');
            console.log(_movies.movies.length);
            _context2.prev = 2;
            _context2.next = 5;
            return _movieModel["default"].deleteMany();

          case 5:
            _context2.next = 7;
            return _movieModel["default"].collection.insertMany(_movies.movies);

          case 7:
            console.info("".concat(_movies.movies.length, " Movies were successfully stored."));
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            console.error("failed to Load movie Data: ".concat(_context2.t0));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));
  return _loadMovies.apply(this, arguments);
}

function loadPeople() {
  return _loadPeople.apply(this, arguments);
} // deletes all people documents in collection and inserts test data


function _loadPeople() {
  _loadPeople = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('load people data');
            console.log(_people.people.length);
            _context3.prev = 2;
            _context3.next = 5;
            return _peopleModel["default"].deleteMany();

          case 5:
            _context3.next = 7;
            return _peopleModel["default"].collection.insertMany(_people.people);

          case 7:
            ;
            console.info("".concat(_people.people.length, " People were successfully stored."));
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            console.error("failed to Load people Data: ".concat(_context3.t0));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return _loadPeople.apply(this, arguments);
}

function loadTvShows() {
  return _loadTvShows.apply(this, arguments);
}

function _loadTvShows() {
  _loadTvShows = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('load TvShow data');
            console.log(_tvShows.tvShows.length);
            _context4.prev = 2;
            _context4.next = 5;
            return _tvShowModel["default"].deleteMany();

          case 5:
            _context4.next = 7;
            return _tvShowModel["default"].collection.insertMany(_tvShows.tvShows);

          case 7:
            ;
            console.info("".concat(_tvShows.tvShows.length, " TvShows were successfully stored."));
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](2);
            console.error("failed to Load TvShows Data: ".concat(_context4.t0));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 11]]);
  }));
  return _loadTvShows.apply(this, arguments);
}