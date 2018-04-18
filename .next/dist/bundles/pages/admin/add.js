module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CARTOON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return US; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ASIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LATEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return THAI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return IMDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADVENTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BIOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COMEDY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CRIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DOCUMENTARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DRAMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FANTASY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FILM_NOIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return HORROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MUSICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return MYSTERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ROMANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SCI_FI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return THRILLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return WAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return WESTRN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return NONE_TYPE; });
//หมวดหมู่
var GROUP = 'หมวดหมู่';
var CARTOON = 'หนังการ์ตูน';
var US = 'หนังฝรั่ง';
var ASIAN = 'หนังเอเชีย';
var EPISODE = 'หนังภาคต่อ';
var LATEST = 'หนังออกใหม่';
var THAI = 'หนังไทย';
var IMDB = 'IMDB';

//ประเภท
var TYPE = 'ประเภท';
var ACTION = 'Action บู๊';
var ADVENTURE = 'Adventure ผจญภัย';
var ANIMATION = 'Animation การ์ตูน';
var BIOGRAPHY = 'Biography ชีวิตจริง';
var COMEDY = 'Comedy ตลก';
var CRIME = 'Crime อาชญากรรม';
var DOCUMENTARY = 'Documentary สารคดี';
var DRAMA = 'Drama ชีวิต';
var FAMILY = 'Family ครอบครัว';
var FANTASY = 'Fantasy เทพนิยาย';
var FILM_NOIR = 'Film-Noir ด้านมืดของสังคม';
var HISTORY = 'History ประวัติศาสตร์';
var HORROR = 'Horror สยองขวัญ';
var MUSICAL = 'Musical เพลง';
var MYSTERY = 'Mystery ลึกลับซ่อนเงื่อน';
var ROMANCE = 'Romance โรแมนติก';
var SCI_FI = 'Sci-Fi วิทยาศาสตร์';
var SPORT = 'Sport กีฬา';
var THRILLER = 'Thriller ระทึกขวัญ';
var WAR = 'War สงคราม';
var WESTRN = 'Western คาวบอยตะวันตก';
var NONE_TYPE = 'ไม่มีหมวดหมู่';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SREACH_TYPE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SREACH_TYPE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SREACH_TYPE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SREACH_GROUP_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SREACH_GROUP_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SREACH_GROUP_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return fetchMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return createMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sreachTypeMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sreachGroupMovie; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FETCH_MOVIE = 'alex/FETCH_MOVIE';
var FETCH_MOVIE_SUCCESS = 'alex/FETCH_MOVIE_SUCCESS';
var FETCH_MOVIE_FAILED = 'alex/FETCH_MOVIE_FAILED';
var DELETE_MOVIE = 'alex/DELETE_MOVIE';
var DELETE_MOVIE_SUCCESS = 'alex/DELETE_MOVIE_SUCCESS';
var DELETE_MOVIE_FAILED = 'alex/DELETE_MOVIE_FAILED';
var CREATE_MOVIE = 'alex/CREATE_MOVIE';
var CREATE_MOVIE_SUCCESS = 'alex/CREATE_MOVIE_SUCCESS';
var CREATE_MOVIE_FAILED = 'alex/CREATE_MOVIE_FAILED';
var SREACH_TYPE_MOVIE = 'alex/SREACH_TYPE_MOVIE';
var SREACH_TYPE_MOVIE_SUCCESS = 'alex/SREACH_TYPE_MOVIE_SUCCESS';
var SREACH_TYPE_MOVIE_FAILED = 'alex/SREACH_TYPE_MOVIE_FAILED';
var SREACH_GROUP_MOVIE = 'alex/SREACH_GROUP_MOVIE';
var SREACH_GROUP_MOVIE_SUCCESS = 'alex/SREACH_GROUP_MOVIE_SUCCESS';
var SREACH_GROUP_MOVIE_FAILED = 'alex/SREACH_GROUP_MOVIE_FAILED';

var fetchMovie = function fetchMovie() {
  return {
    type: FETCH_MOVIE
  };
};

var deleteMovie = function deleteMovie(id) {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};

var createMovie = function createMovie(json) {
  return {
    type: CREATE_MOVIE,
    payload: json
  };
};

var sreachTypeMovie = function sreachTypeMovie(type) {
  return {
    type: SREACH_TYPE_MOVIE,
    payload: type
  };
};

var sreachGroupMovie = function sreachGroupMovie(group) {
  return {
    type: SREACH_GROUP_MOVIE,
    payload: group
  };
};

var initialState = {
  movieDb: [],
  error: '',
  loading: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case FETCH_MOVIE:
      return _extends({}, state, {
        movieDb: []
      });
    case FETCH_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case FETCH_MOVIE_FAILED:
    case DELETE_MOVIE:
      return _extends({}, state);
    case DELETE_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case DELETE_MOVIE_FAILED:
    case CREATE_MOVIE:
      return _extends({}, state, {
        movieDb: [],
        error: ''
      });
    case CREATE_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case CREATE_MOVIE_FAILED:
    case SREACH_TYPE_MOVIE:
      return _extends({}, state, {
        movieDb: []
      });
    case SREACH_TYPE_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case SREACH_TYPE_MOVIE_FAILED:
    case SREACH_GROUP_MOVIE:
      return _extends({}, state, {
        movieDb: []
      });
    case SREACH_GROUP_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case SREACH_GROUP_MOVIE_FAILED:
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["q"] = (reducer);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return navbarUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return navbarAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return years; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texts__ = __webpack_require__(1);


var navbarUser = [{
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["s" /* LATEST */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["d" /* ASIAN */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["C" /* US */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["k" /* EPISODE */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["f" /* CARTOON */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["r" /* IMDB */],
    link: '/'
}];

var navbarAdmin = [{
    name: 'ข้อมูลหนังทั้งหมด',
    link: '/admin/info'
}, {
    name: 'เพิ่มหนัง',
    link: '/admin/add'
}];

var types = [__WEBPACK_IMPORTED_MODULE_0__texts__["a" /* ACTION */], __WEBPACK_IMPORTED_MODULE_0__texts__["b" /* ADVENTURE */], __WEBPACK_IMPORTED_MODULE_0__texts__["c" /* ANIMATION */], __WEBPACK_IMPORTED_MODULE_0__texts__["e" /* BIOGRAPHY */], __WEBPACK_IMPORTED_MODULE_0__texts__["g" /* COMEDY */], __WEBPACK_IMPORTED_MODULE_0__texts__["h" /* CRIME */], __WEBPACK_IMPORTED_MODULE_0__texts__["i" /* DOCUMENTARY */], __WEBPACK_IMPORTED_MODULE_0__texts__["j" /* DRAMA */], __WEBPACK_IMPORTED_MODULE_0__texts__["l" /* FAMILY */], __WEBPACK_IMPORTED_MODULE_0__texts__["m" /* FANTASY */], __WEBPACK_IMPORTED_MODULE_0__texts__["n" /* FILM_NOIR */], __WEBPACK_IMPORTED_MODULE_0__texts__["p" /* HISTORY */], __WEBPACK_IMPORTED_MODULE_0__texts__["q" /* HORROR */], __WEBPACK_IMPORTED_MODULE_0__texts__["t" /* MUSICAL */], __WEBPACK_IMPORTED_MODULE_0__texts__["u" /* MYSTERY */], __WEBPACK_IMPORTED_MODULE_0__texts__["w" /* ROMANCE */], __WEBPACK_IMPORTED_MODULE_0__texts__["x" /* SCI_FI */], __WEBPACK_IMPORTED_MODULE_0__texts__["y" /* SPORT */], __WEBPACK_IMPORTED_MODULE_0__texts__["A" /* THRILLER */], __WEBPACK_IMPORTED_MODULE_0__texts__["D" /* WAR */], __WEBPACK_IMPORTED_MODULE_0__texts__["E" /* WESTRN */], __WEBPACK_IMPORTED_MODULE_0__texts__["v" /* NONE_TYPE */]];

var groups = [__WEBPACK_IMPORTED_MODULE_0__texts__["f" /* CARTOON */], __WEBPACK_IMPORTED_MODULE_0__texts__["C" /* US */], __WEBPACK_IMPORTED_MODULE_0__texts__["d" /* ASIAN */], __WEBPACK_IMPORTED_MODULE_0__texts__["k" /* EPISODE */], __WEBPACK_IMPORTED_MODULE_0__texts__["s" /* LATEST */], __WEBPACK_IMPORTED_MODULE_0__texts__["z" /* THAI */]];

var years = [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1899, 1898, 1897, 1896, 1895, 1894, 1893, 1892, 1891, 1890, 1799, 1798, 1797, 1796, 1795, 1794, 1793, 1792, 1791, 1790];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(6);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-saga"
var external__redux_saga_ = __webpack_require__(9);
var external__redux_saga__default = /*#__PURE__*/__webpack_require__.n(external__redux_saga_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(10);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./reduxModules/movie.js
var movie = __webpack_require__(2);

// CONCATENATED MODULE: ./reduxModules/index.js



/* harmony default export */ var reduxModules = (Object(external__redux_["combineReducers"])({
  movies: movie["q" /* default */]
}));
// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(11);
var effects__default = /*#__PURE__*/__webpack_require__.n(effects_);

// CONCATENATED MODULE: ./config.js
var API_SERVER = 'http://localhost:3000';
// CONCATENATED MODULE: ./utils/api.js


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var getJSON = function getJSON(url) {
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });
};

var postJSON = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(url, jsonBody) {
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(jsonBody)
            }).then(function (response) {
              return response.json();
            }).then(function (json) {
              if (json.error) {
                throw Error(json.error.message);
              }
              return json;
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function postJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var patchJSON = function patchJSON(url, jsonBody) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });
};

var deleteJSON = function deleteJSON(url) {
  var jsonBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });
};

var postLogout = function postLogout(url, json) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(json)
  });
};


// CONCATENATED MODULE: ./sagas/movieSagas.js


var _marked = /*#__PURE__*/regenerator__default.a.mark(fetchMovie),
    _marked2 = /*#__PURE__*/regenerator__default.a.mark(deleteMovie),
    _marked3 = /*#__PURE__*/regenerator__default.a.mark(createMovie),
    _marked4 = /*#__PURE__*/regenerator__default.a.mark(sreachTypeMovie),
    _marked5 = /*#__PURE__*/regenerator__default.a.mark(sreachGroupMovie),
    _marked6 = /*#__PURE__*/regenerator__default.a.mark(watchMovieSagas);





// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function fetchMovie(action) {
  var json;
  return regenerator__default.a.wrap(function fetchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["call"])(getJSON, API_SERVER + '/api/movies/');

        case 3:
          json = _context.sent;
          _context.next = 6;
          return Object(effects_["put"])({
            type: movie["i" /* FETCH_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return Object(effects_["put"])({
            type: movie["h" /* FETCH_MOVIE_FAILED */],
            message: _context.t0.message
          });

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function deleteMovie(action) {
  var json;
  return regenerator__default.a.wrap(function deleteMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(effects_["call"])(getJSON, API_SERVER + '/api/movies/delete/' + action.payload);

        case 3:
          json = _context2.sent;
          _context2.next = 6;
          return Object(effects_["put"])({
            type: movie["f" /* DELETE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return Object(effects_["put"])({
            type: movie["e" /* DELETE_MOVIE_FAILED */],
            message: _context2.t0.message
          });

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}

function createMovie(action) {
  var json;
  return regenerator__default.a.wrap(function createMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(effects_["call"])(postJSON, API_SERVER + '/api/movies/create', action.payload);

        case 3:
          json = _context3.sent;
          _context3.next = 6;
          return Object(effects_["put"])({
            type: movie["c" /* CREATE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return Object(effects_["put"])({
            type: movie["b" /* CREATE_MOVIE_FAILED */],
            message: _context3.t0.message
          });

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 8]]);
}

function sreachTypeMovie(action) {
  var json;
  return regenerator__default.a.wrap(function sreachTypeMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(effects_["call"])(getJSON, API_SERVER + '/api/movies/sreach/type/' + action.payload);

        case 3:
          json = _context4.sent;
          _context4.next = 6;
          return Object(effects_["put"])({
            type: movie["o" /* SREACH_TYPE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return Object(effects_["put"])({
            type: movie["n" /* SREACH_TYPE_MOVIE_FAILED */],
            message: _context4.t0.message
          });

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 8]]);
}

function sreachGroupMovie(action) {
  var json;
  return regenerator__default.a.wrap(function sreachGroupMovie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(effects_["call"])(getJSON, API_SERVER + '/api/movies/sreach/group/' + action.payload);

        case 3:
          json = _context5.sent;
          _context5.next = 6;
          return Object(effects_["put"])({
            type: movie["l" /* SREACH_GROUP_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 12;
          return Object(effects_["put"])({
            type: movie["k" /* SREACH_GROUP_MOVIE_FAILED */],
            message: _context5.t0.message
          });

        case 12:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 8]]);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function watchMovieSagas() {
  return regenerator__default.a.wrap(function watchMovieSagas$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(effects_["takeLatest"])(movie["g" /* FETCH_MOVIE */], fetchMovie);

        case 2:
          _context6.next = 4;
          return Object(effects_["takeLatest"])(movie["d" /* DELETE_MOVIE */], deleteMovie);

        case 4:
          _context6.next = 6;
          return Object(effects_["takeLatest"])(movie["a" /* CREATE_MOVIE */], createMovie);

        case 6:
          _context6.next = 8;
          return Object(effects_["takeLatest"])(movie["m" /* SREACH_TYPE_MOVIE */], sreachTypeMovie);

        case 8:
          _context6.next = 10;
          return Object(effects_["takeLatest"])(movie["j" /* SREACH_GROUP_MOVIE */], sreachGroupMovie);

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

/* harmony default export */ var movieSagas = (watchMovieSagas);
// CONCATENATED MODULE: ./sagas/index.js


var sagas__marked = /*#__PURE__*/regenerator__default.a.mark(rootSaga);



function rootSaga() {
    return regenerator__default.a.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('[API] using movie-api');
                    _context.next = 3;
                    return [movieSagas()];

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, sagas__marked, this);
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./texts.js
var texts = __webpack_require__(1);

// EXTERNAL MODULE: ./data.js
var data = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Navbar.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var mapStateToProps = function mapStateToProps(state) {
  return {
    movies: state.movies.movieDb
  };
};

var Navbar_Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault(); // หยุดการทำงาน Submit
      var name = e.target.name.value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'hendleClick',
    value: function hendleClick(group) {
      if (group && group.name != 'ข้อมูลหนังทั้งหมด' && group.name != 'เพิ่มหนัง') {
        this.props.sreachGroupMovie(group.name);
        router__default.a.push({
          pathname: group.link,
          query: { group: group.name }
        });
      } else if (group.name === 'ข้อมูลหนังทั้งหมด' || group.name === 'เพิ่มหนัง') {
        this.props.fetchMovie();
        router__default.a.push({
          pathname: group.link
        });
      } else {
        this.props.fetchMovie();
        router__default.a.push({
          pathname: '/'
        });
      }
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(type) {
      var _this2 = this;

      var groups = [];
      type == 'user' ? groups = data["c" /* navbarUser */] : groups = data["b" /* navbarAdmin */];
      return groups.map(function (group, i) {
        return external__react__default.a.createElement(
          'li',
          { className: 'nav-item', key: i },
          external__react__default.a.createElement(
            'a',
            { className: 'nav-link', style: { cursor: 'pointer' }, onClick: _this2.hendleClick.bind(_this2, group) },
            group.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg fixed-top navbar-light bg-light' },
        external__react__default.a.createElement(
          'div',
          { className: 'container' },
          external__react__default.a.createElement(
            'a',
            { className: 'navbar-brand', style: { cursor: 'pointer' }, onClick: this.hendleClick.bind(this, '') },
            external__react__default.a.createElement('img', { src: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png', width: '30', height: '30', className: 'mr-1' }),
            '\u0E15\u0E32\u0E41\u0E09\u0E30'
          ),
          external__react__default.a.createElement(
            'button',
            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarColor03', 'aria-controls': 'navbarColor03', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
            external__react__default.a.createElement('span', { className: 'navbar-toggler-icon' })
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarColor03' },
            external__react__default.a.createElement(
              'ul',
              { className: 'navbar-nav mr-auto' },
              this.renderComponent(this.props.type)
            ),
            external__react__default.a.createElement(
              'form',
              { className: 'form-inline my-2 my-lg-0', onSubmit: function onSubmit(e) {
                  return handleSubmit(e);
                } },
              external__react__default.a.createElement('input', { className: 'form-control mr-sm-2', type: 'text', placeholder: '\u0E04\u0E49\u0E19\u0E2B\u0E32', name: 'name' }),
              external__react__default.a.createElement(
                'button',
                { className: 'btn btn-success my-2 my-sm-0', type: 'submit' },
                '\u0E04\u0E49\u0E19\u0E2B\u0E32'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(external__react__default.a.Component);

/* harmony default export */ var components_Navbar = (Object(external__react_redux_["connect"])(mapStateToProps, { fetchMovie: movie["s" /* fetchMovie */], sreachGroupMovie: movie["t" /* sreachGroupMovie */] })(Navbar_Navbar));
// EXTERNAL MODULE: ./css/style.css
var style = __webpack_require__(12);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/Layout.js
var Layout__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// create the saga middleware
var sagaMiddleware = external__redux_saga__default()();
// mount it on the Store
var store = Object(external__redux_["createStore"])(reduxModules, Object(external__redux_["applyMiddleware"])(sagaMiddleware));

var Layout_Layout = function (_Component) {
  Layout__inherits(Layout, _Component);

  function Layout() {
    Layout__classCallCheck(this, Layout);

    return Layout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  Layout__createClass(Layout, [{
    key: 'render',
    value: function render() {
      sagaMiddleware.run(rootSaga);
      return external__react__default.a.createElement(
        external__react_redux_["Provider"],
        { store: store },
        external__react__default.a.createElement(
          'div',
          null,
          external__react__default.a.createElement(
            head__default.a,
            null,
            external__react__default.a.createElement(
              'title',
              null,
              this.props.title
            ),
            external__react__default.a.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/4/darkly/bootstrap.min.css' }),
            external__react__default.a.createElement('link', { rel: 'icon', type: 'image/jpg', href: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png' }),
            external__react__default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css' })
          ),
          external__react__default.a.createElement(components_Navbar, { type: this.props.type }),
          this.props.children
        )
      );
    }
  }]);

  return Layout;
}(external__react_["Component"]);

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout.js + 6 modules
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./reduxModules/movie.js
var movie = __webpack_require__(2);

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./data.js
var data_0 = __webpack_require__(5);

// CONCATENATED MODULE: ./components/admin/add/FormMovie.js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FormMovie_FormMovie = function (_React$Component) {
    _inherits(FormMovie, _React$Component);

    function FormMovie(props) {
        _classCallCheck(this, FormMovie);

        var _this = _possibleConstructorReturn(this, (FormMovie.__proto__ || Object.getPrototypeOf(FormMovie)).call(this, props));

        _this.state = {
            name: 'Iron Man 3 มหาประลัย คนเกราะเหล็ก 3',
            imdb: '7.2',
            img: 'https://www.movie2free.com/wp-content/uploads/thumb/ironman3-230x300.jpg',
            quality: 'HD',
            sound: 'Thai+Soundtrack(FULL)',
            year: '2018',
            trailer: 'https://www.youtube.com/embed/Ke1Y3P9D0Bc',
            synopsis: 'โทนี่ สตาร์ค/ไอรอน แมน อัจฉริยะนักอุตสาหกรรมสุดเกรียน ตกอยู่ภายใต้หลุมพรางของศัตรูผู้ไม่รู้จักขอบเขตของคำว่าโหดร้าย เมื่อสตาร์คพบว่าโลกส่วนตัวของเขาได้ถูกทำลายลงด้วยเงื้อมมือของศัตรูเหล่านั้น เขาจึงออกตามล่าคนที่ต้องรับผิดชอบกับเหตุการณ์ที่เกิดขึ้นแบบพลิกแผ่นดิน ในทุกย่างก้าวของการเดินทางครั้งนี้ คือการทดสอบความเข้มแข็งของเขา เมื่อหลังชนฝา สตาร์คเอาตัวรอดมาได้โดยอุปกรณ์ต่าง ๆ ของเขาเอง สิ่งที่พึ่งพาได้ในตอนนี้ก็คือความเป็นนักประดิษฐ์และสัญชาตญาณ เพื่อจะปกป้องคนที่เขารัก เมื่อเขาลุกขึ้นสู้อีกครั้ง สตาร์คจึงได้พบกับคำตอบของคำถามที่คอยหลอกหลอนเขามาโดยตลอดว่า คนสร้างชุดเกราะหรือชุดเกราะสร้างคนกันแน่?',
            videosThai: [],
            videosEng: [],
            type: [],
            group: [],
            videoThai1: 'https://oload.site/stream/5A6qWBstfvo~1522574638~184.22.0.0~1LxhqLtd?mime=true',
            videoThai2: '',
            videoThai3: '',
            videoEng1: 'https://oload.site/stream/5A6qWBstfvo~1522574638~184.22.0.0~1LxhqLtd?mime=true',
            videoEng2: '',
            videoEng3: ''
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChangeType = _this.handleChangeType.bind(_this);
        _this.handleChangeGroup = _this.handleChangeGroup.bind(_this);
        return _this;
    }

    _createClass(FormMovie, [{
        key: 'handleChange',
        value: function handleChange(type, e) {
            var myobj = JSON.parse('{ "' + type + '":"' + e.target.value + '" }');
            this.setState(myobj);
        }
    }, {
        key: 'handleChangeType',
        value: function handleChangeType(e) {
            this.setState({
                type: [].concat(_toConsumableArray(this.state.type), [e.target.value])
            });
        }
    }, {
        key: 'handleChangeGroup',
        value: function handleChangeGroup(e) {
            this.setState({
                group: [].concat(_toConsumableArray(this.state.group), [e.target.value])
            });
        }
    }, {
        key: 'handleSubmit',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(e) {
                return regenerator__default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                if (!(this.state.videoThai1 != '')) {
                                    _context.next = 4;
                                    break;
                                }

                                _context.next = 4;
                                return this.setState({ videosThai: [].concat(_toConsumableArray(this.state.videosThai), [this.state.videoThai1]) });

                            case 4:
                                if (!(this.state.videoThai2 != '')) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 7;
                                return this.setState({ videosThai: [].concat(_toConsumableArray(this.state.videosThai), [this.state.videoThai2]) });

                            case 7:
                                if (!(this.state.videoThai3 != '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 10;
                                return this.setState({ videosThai: [].concat(_toConsumableArray(this.state.videosThai), [this.state.videoThai3]) });

                            case 10:
                                if (!(this.state.videoEng1 != '')) {
                                    _context.next = 13;
                                    break;
                                }

                                _context.next = 13;
                                return this.setState({ videosEng: [].concat(_toConsumableArray(this.state.videosEng), [this.state.videoEng1]) });

                            case 13:
                                if (!(this.state.videoEng2 != '')) {
                                    _context.next = 16;
                                    break;
                                }

                                _context.next = 16;
                                return this.setState({ videosEng: [].concat(_toConsumableArray(this.state.videosEng), [this.state.videoEng2]) });

                            case 16:
                                if (!(this.state.videoEng3 != '')) {
                                    _context.next = 19;
                                    break;
                                }

                                _context.next = 19;
                                return this.setState({ videosEng: [].concat(_toConsumableArray(this.state.videosEng), [this.state.videoEng3]) });

                            case 19:
                                if (!(this.state.type.length === 0)) {
                                    _context.next = 22;
                                    break;
                                }

                                _context.next = 22;
                                return this.setState({ type: [].concat(_toConsumableArray(this.state.type), ['ไม่มีหมวดหมู่']) });

                            case 22:
                                if (!(this.state.group.length === 0)) {
                                    _context.next = 25;
                                    break;
                                }

                                _context.next = 25;
                                return this.setState({ group: [].concat(_toConsumableArray(this.state.group), ['หนังฝรั่ง']) });

                            case 25:
                                if (confirm('Are you sure ?!')) {
                                    router__default.a.reload();
                                    this.props.data.createMovie(this.state);
                                    router__default.a.push('/admin/info');
                                }

                            case 26:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function handleSubmit(_x) {
                return _ref.apply(this, arguments);
            }

            return handleSubmit;
        }()
    }, {
        key: 'renderComponentRadioType',
        value: function renderComponentRadioType(datas) {
            var _this2 = this;

            return datas.map(function (data, index) {
                return external__react__default.a.createElement(
                    'div',
                    { className: 'col-lg-4', key: index },
                    external__react__default.a.createElement(
                        'label',
                        { className: 'form-check-label', style: { paddingLeft: '25px' } },
                        external__react__default.a.createElement('input', { type: 'radio', className: 'form-check-input', value: data, onChange: _this2.handleChangeType }),
                        data
                    )
                );
            });
        }
    }, {
        key: 'renderComponentRadioGroup',
        value: function renderComponentRadioGroup(datas) {
            var _this3 = this;

            return datas.map(function (data, index) {
                return external__react__default.a.createElement(
                    'div',
                    { className: 'col-lg-4', key: index },
                    external__react__default.a.createElement(
                        'label',
                        { className: 'form-check-label', style: { paddingLeft: '25px' } },
                        external__react__default.a.createElement('input', { type: 'radio', className: 'form-check-input', value: data, onChange: _this3.handleChangeGroup }),
                        data
                    )
                );
            });
        }
    }, {
        key: 'renderComponentYears',
        value: function renderComponentYears(datas) {
            return datas.map(function (data, index) {
                return external__react__default.a.createElement(
                    'option',
                    { key: index },
                    data
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return external__react__default.a.createElement(
                'div',
                { className: 'bs-component' },
                external__react__default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    external__react__default.a.createElement(
                        'fieldset',
                        null,
                        external__react__default.a.createElement(
                            'div',
                            { className: 'form-group' },
                            external__react__default.a.createElement(
                                'label',
                                null,
                                '* \u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E31\u0E07\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 + \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29', value: this.state.name, onChange: this.handleChange.bind(this, 'name') })
                        ),
                        external__react__default.a.createElement(
                            'div',
                            { className: 'form-group row' },
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-lg-3' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    '* IMDB'
                                ),
                                external__react__default.a.createElement('input', { type: 'number', className: 'form-control', placeholder: '\u0E04\u0E30\u0E41\u0E19\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02', min: '0', max: '10', step: '0.1', value: this.state.imdb, onChange: this.handleChange.bind(this, 'imdb') })
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-lg-3' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    '* \u0E40\u0E2A\u0E35\u0E22\u0E07'
                                ),
                                external__react__default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.sound, onChange: this.handleChange.bind(this, 'sound') },
                                    external__react__default.a.createElement(
                                        'option',
                                        null,
                                        'Thai+Soundtrack(FULL)'
                                    ),
                                    external__react__default.a.createElement(
                                        'option',
                                        null,
                                        'Thai(T)'
                                    ),
                                    external__react__default.a.createElement(
                                        'option',
                                        null,
                                        'Soundtrack(S)'
                                    )
                                )
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-lg-3' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    '* \u0E04\u0E27\u0E32\u0E21\u0E0A\u0E31\u0E14'
                                ),
                                external__react__default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.quality, onChange: this.handleChange.bind(this, 'quality') },
                                    external__react__default.a.createElement(
                                        'option',
                                        null,
                                        'HD'
                                    ),
                                    external__react__default.a.createElement(
                                        'option',
                                        null,
                                        'SD'
                                    ),
                                    external__react__default.a.createElement(
                                        'option',
                                        null,
                                        'ZM'
                                    )
                                )
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-lg-3' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    '* \u0E1B\u0E35'
                                ),
                                external__react__default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.year, onChange: this.handleChange.bind(this, 'year') },
                                    this.renderComponentYears(data_0["e" /* years */])
                                )
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-lg-6' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E'
                                ),
                                external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: 'https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg', value: this.state.img, onChange: this.handleChange.bind(this, 'img') })
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-lg-6 ' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07'
                                ),
                                external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: 'https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg', value: this.state.trailer, onChange: this.handleChange.bind(this, 'trailer') })
                            ),
                            external__react__default.a.createElement(
                                'label',
                                { className: 'col-lg-12 ' },
                                '* \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            this.renderComponentRadioType(data_0["d" /* types */]),
                            external__react__default.a.createElement(
                                'label',
                                { className: 'col-lg-12 ' },
                                '* \u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            this.renderComponentRadioGroup(data_0["a" /* groups */])
                        ),
                        external__react__default.a.createElement(
                            'div',
                            { className: 'form-group' },
                            external__react__default.a.createElement(
                                'label',
                                { htmlFor: 'exampleTextarea' },
                                '* \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E22\u0E48\u0E2D'
                            ),
                            external__react__default.a.createElement('textarea', { className: 'form-control', rows: '5', value: this.state.synopsis, onChange: this.handleChange.bind(this, 'synopsis') }),
                            external__react__default.a.createElement(
                                'label',
                                null,
                                '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E1E\u0E32\u0E01\u0E22\u0E4C\u0E44\u0E17\u0E22'
                            ),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E43\u0E2A\u0E48\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D', value: this.state.videoThai1, onChange: this.handleChange.bind(this, 'videoThai1') }),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E43\u0E2A\u0E48\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D', value: this.state.videoThai2, onChange: this.handleChange.bind(this, 'videoThai2') }),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E43\u0E2A\u0E48\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D', value: this.state.videoThai3, onChange: this.handleChange.bind(this, 'videoThai3') }),
                            external__react__default.a.createElement(
                                'label',
                                null,
                                '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E0B\u0E31\u0E1A\u0E44\u0E17\u0E22'
                            ),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E43\u0E2A\u0E48\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D', value: this.state.videoEng1, onChange: this.handleChange.bind(this, 'videoEng1') }),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E43\u0E2A\u0E48\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D', value: this.state.videoEng2, onChange: this.handleChange.bind(this, 'videoEng2') }),
                            external__react__default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E43\u0E2A\u0E48\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D', value: this.state.videoEng3, onChange: this.handleChange.bind(this, 'videoEng3') })
                        ),
                        external__react__default.a.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-success' },
                            'Submit'
                        )
                    )
                )
            );
        }
    }]);

    return FormMovie;
}(external__react__default.a.Component);

/* harmony default export */ var add_FormMovie = (FormMovie_FormMovie);
// CONCATENATED MODULE: ./components/admin/add/Add.js



var Add_Add = function Add(props) {
    return external__react__default.a.createElement(
        'div',
        { className: 'col-lg-9 col-md-9 col-sm-9 center container' },
        external__react__default.a.createElement(
            'div',
            { className: 'bs-component' },
            external__react__default.a.createElement(
                'div',
                { className: 'card border-secondary mb-3' },
                external__react__default.a.createElement(
                    'div',
                    { className: 'card-header' },
                    props.title
                ),
                external__react__default.a.createElement(
                    'div',
                    { className: 'card-body' },
                    external__react__default.a.createElement(
                        'div',
                        { className: 'container center' },
                        external__react__default.a.createElement(add_FormMovie, { data: props.data })
                    )
                ),
                external__react__default.a.createElement('div', { className: 'card-footer' })
            )
        )
    );
};

/* harmony default export */ var add_Add = (Add_Add);
// CONCATENATED MODULE: ./components/admin/add/index.js
var add__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function add__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function add__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var mapStateToProps = function mapStateToProps(state) {
    return {
        loading: state.movies.loading
    };
};

var add_Index = function (_Component) {
    add__inherits(Index, _Component);

    function Index() {
        add__classCallCheck(this, Index);

        return add__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    add__createClass(Index, [{
        key: 'render',
        value: function render() {
            return external__react__default.a.createElement(
                'div',
                { className: 'container', style: { paddingTop: '80px' } },
                external__react__default.a.createElement(
                    'div',
                    { className: 'row' },
                    external__react__default.a.createElement(add_Add, { title: this.props.title, data: this.props })
                )
            );
        }
    }]);

    return Index;
}(external__react_["Component"]);

/* harmony default export */ var add = (Object(external__react_redux_["connect"])(mapStateToProps, { createMovie: movie["p" /* createMovie */] })(add_Index));
// CONCATENATED MODULE: ./pages/admin/add.js




var admin_add_Index = function Index(props) {
  return external__react__default.a.createElement(
    Layout["a" /* default */],
    { title: '\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 - \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E19\u0E31\u0E07', type: 'admin' },
    external__react__default.a.createElement(add, { title: '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E19\u0E31\u0E07' })
  );
};

/* harmony default export */ var admin_add = __webpack_exports__["default"] = (admin_add_Index);

/***/ })
/******/ ]);