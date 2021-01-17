"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var PeopleSchema = new Schema({
  also_known_as: [{
    type: String
  }],
  id: {
    type: Number,
    required: true,
    unique: true
  },
  birthday: {
    type: String
  },
  adult: {
    type: Boolean
  },
  poster_path: {
    type: String
  },
  deathday: {
    type: String
  },
  name: {
    type: String
  },
  gender: {
    type: Number
  },
  biography: {
    type: String
  },
  popularity: {
    type: Number
  },
  place_of_birth: {
    type: String
  },
  profile_path: {
    type: String
  },
  imdb_id: {
    type: String
  },
  homepage: {
    type: String
  }
});

PeopleSchema.statics.findByPersonDBId = function (id) {
  return this.findOne({
    id: id
  });
};

var _default = _mongoose["default"].model('People', PeopleSchema);

exports["default"] = _default;