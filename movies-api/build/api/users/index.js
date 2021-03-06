"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("./userModel"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _movieModel = _interopRequireDefault(require("../movies/movieModel"));

var router = _express["default"].Router(); // eslint-disable-line
// Get all users


router.get('/', function (req, res) {
  _userModel["default"].find().then(function (users) {
    return res.status(200).json(users);
  });
});
router.get('/:userName/favourites', function (req, res, next) {
  var userName = req.params.userName;

  _userModel["default"].findByUserName(userName).populate('favourites').then(function (user) {
    return res.status(201).json(user.favourites);
  })["catch"](next);
}); // Register OR authenticate a user

router.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var regex, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

            if (!req.body.username || !req.body.password) {
              res.status(401).json({
                success: false,
                msg: 'Please pass username and password.'
              });
            }

            if (!regex.test(req.body.password)) {
              res.status(401).json({
                success: false,
                msg: 'ensure passwords are at least 5 characters long and contain at least one number and one letter'
              });
            }

            if (!(req.query.action === 'register')) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return _userModel["default"].create(req.body)["catch"](next);

          case 6:
            res.status(201).json({
              code: 201,
              success: true,
              msg: 'Successfully created new user.'
            });
            _context.next = 15;
            break;

          case 9:
            _context.next = 11;
            return _userModel["default"].findByUserName(req.body.username)["catch"](next);

          case 11:
            user = _context.sent;

            if (user) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              code: 401,
              msg: 'Authentication failed. User not found.'
            }));

          case 14:
            user.comparePassword(req.body.password, function (err, isMatch) {
              if (isMatch && !err) {
                // if user is found and password is right create a token
                var token = _jsonwebtoken["default"].sign(user.username, process.env.SECRET); // return the information including token as JSON


                res.status(200).json({
                  success: true,
                  token: 'BEARER ' + token
                });
              } else {
                res.status(401).json({
                  code: 401,
                  msg: 'Authentication failed. Wrong password.'
                });
              }
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); // Update a user

router.put('/:id', function (req, res) {
  if (req.body._id) delete req.body._id;

  _userModel["default"].update({
    _id: req.params.id
  }, req.body, {
    upsert: false
  }).then(function (user) {
    return res.json(200, user);
  });
}); //Add a favourite. No Error Handling Yet. Can add duplicates too!

router.post('/:userName/favourites', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var newFavourite, userName, movie, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newFavourite = req.body.id;
            userName = req.params.userName;
            _context2.next = 4;
            return _movieModel["default"].findByMovieDBId(newFavourite);

          case 4:
            movie = _context2.sent;
            _context2.next = 7;
            return _userModel["default"].findByUserName(userName);

          case 7:
            user = _context2.sent;
            _context2.next = 10;
            return user.favourites.push(movie._id);

          case 10:
            _context2.next = 12;
            return user.save();

          case 12:
            res.status(201).json(user);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;