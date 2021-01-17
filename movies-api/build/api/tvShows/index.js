"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _tvShowModel = _interopRequireDefault(require("./tvShowModel"));

var router = _express["default"].Router();

router.get('/', function (req, res, next) {
  _tvShowModel["default"].find().then(function (tvShows) {
    return res.status(200).send(tvShows);
  })["catch"](next);
});
router.get('/:id', function (req, res, next) {
  try {
    var id = parseInt(req.params.id);

    _tvShowModel["default"].findByTvShowDBId(id).then(function (tvShow) {
      return res.status(200).send(tvShow);
    })["catch"](next);
  } catch (err) {
    console.error('The resource you requested could not be found.');
  }
}); // Add New Tv Show

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
                msg: 'Please pass a tvShow id'
              });
            }

            if (req.query.action === 'create' & !req.body.name) {
              res.status(500).json({
                code: 500,
                success: false,
                msg: 'Please pass a tvShow name'
              });
            }

            if (!(req.query.action === 'create')) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _tvShowModel["default"].create(req.body)["catch"](next);

          case 5:
            res.status(201).json({
              code: 201,
              success: true,
              msg: 'Successfully added TvShow.'
            });
            _context.next = 9;
            break;

          case 8:
            res.status(401).json({
              code: 401,
              msg: 'failed to add tvshow'
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
/*
router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });
*/

var _default = router;
exports["default"] = _default;