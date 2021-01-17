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

var _peopleModel = _interopRequireDefault(require("./peopleModel"));

var router = _express["default"].Router();

router.get('/', function (req, res, next) {
  _peopleModel["default"].find().then(function (people) {
    return res.status(200).send(people);
  })["catch"](next);
});
router.get('/:id', function (req, res, next) {
  try {
    var id = parseInt(req.params.id);

    _peopleModel["default"].findByPersonDBId(id).then(function (person) {
      return res.status(200).send(person);
    })["catch"](next);
  } catch (err) {
    console.error('The resource you requested could not be found.');
  }
}); // Add New Person

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
                msg: 'Please pass a person id'
              });
            }

            if (req.query.action === 'create' & !req.body.name) {
              res.status(500).json({
                code: 500,
                success: false,
                msg: 'Please pass a person name'
              });
            }

            if (!(req.query.action === 'create')) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _peopleModel["default"].create(req.body)["catch"](next);

          case 5:
            res.status(201).json({
              code: 201,
              success: true,
              msg: 'Successfully added Person.'
            });
            _context.next = 9;
            break;

          case 8:
            res.status(401).json({
              code: 401,
              msg: 'failed to add Person'
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
var _default = router;
exports["default"] = _default;