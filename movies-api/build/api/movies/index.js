"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _tmdbApi = require("../tmdb-api");

var _movieModel = _interopRequireDefault(require("./movieModel"));

var router = _express["default"].Router();

router.get('/', function (req, res, next) {
  _movieModel["default"].find().then(function (movies) {
    return res.status(200).send(movies);
  })["catch"](next);
});
router.get('/:id', function (req, res, next) {
  try {
    var id = parseInt(req.params.id);

    _movieModel["default"].findByMovieDBId(id).then(function (movie) {
      return res.status(200).send(movie);
    })["catch"](next);
  } catch (err) {
    console.error('The resource you requested could not be found.');
  }
}); // Add New Movie

router.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.query.action === 'create' & !req.body.id) {
              res.status(500).json({
                code: 500,
                success: false,
                msg: 'Please pass a movie id'
              });
            }

            if (req.query.action === 'create' & !req.body.title) {
              res.status(500).json({
                code: 500,
                success: false,
                msg: 'Please pass a movie name'
              });
            }

            if (!(req.query.action === 'create')) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _movieModel["default"].create(req.body)["catch"](next);

          case 5:
            res.status(201).json({
              code: 201,
              success: true,
              msg: 'Successfully added Movie.'
            });
            _context.next = 9;
            break;

          case 8:
            res.status(401).json({
              code: 401,
              msg: 'failed to add Movie'
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/:id/reviews', function (req, res, next) {
  var id = parseInt(req.params.id);
  (0, _tmdbApi.getMovieReviews)(id).then(function (reviews) {
    return res.status(200).send(reviews);
  })["catch"](function (error) {
    return next(error);
  });
});
var _default = router;
exports["default"] = _default;