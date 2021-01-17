"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopularTvShows = exports.getPopularPeople = exports.getPerson = exports.getMovieReviews = exports.getGenres = exports.getMovie = exports.getMovies = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var getMovies = function getMovies() {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.TMDB_KEY, "&language=en-US&include_adult=false&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getMovies = getMovies;

var getMovie = function getMovie(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=").concat(process.env.TMDB_KEY)).then(function (res) {
    return res.json();
  });
};

exports.getMovie = getMovie;

var getGenres = function getGenres() {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(process.env.TMDB_KEY, "&language=en-US")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.genres;
  });
};

exports.getGenres = getGenres;

var getMovieReviews = function getMovieReviews(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/reviews?api_key=").concat(process.env.TMDB_KEY)).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getMovieReviews = getMovieReviews;

var getPerson = function getPerson(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/person/".concat(id, "?api_key=ac30d257ab5fd18bd93513cf9e6e27b9&language=en-US")).then(function (res) {
    return res.json();
  });
};

exports.getPerson = getPerson;

var getPopularPeople = function getPopularPeople() {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/person/popular?api_key=".concat(process.env.TMDB_KEY, "&language=en-US&include_adult=false&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getPopularPeople = getPopularPeople;

var getPopularTvShows = function getPopularTvShows() {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/tv/popular?api_key=".concat(process.env.TMDB_KEY, "&language=en-US&include_adult=false&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getPopularTvShows = getPopularTvShows;