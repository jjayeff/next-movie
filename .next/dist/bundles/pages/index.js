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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\CardList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CardList = function (_React$Component) {
    _inherits(CardList, _React$Component);

    function CardList() {
        _classCallCheck(this, CardList);

        return _possibleConstructorReturn(this, (CardList.__proto__ || Object.getPrototypeOf(CardList)).apply(this, arguments));
    }

    _createClass(CardList, [{
        key: 'renderComponent',
        value: function renderComponent(groups) {
            return groups.map(function (group, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                    { href: '/', key: i, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { className: 'list-group-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'b',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 8
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                { className: 'text-success', style: { cursor: 'pointer' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 8
                                    }
                                },
                                group
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bs-component', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card mb-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'card-header', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        this.props.head
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'ul',
                        { className: 'list-group list-group-flush', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        this.renderComponent(this.props.data)
                    )
                )
            );
        }
    }]);

    return CardList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CardList);

/***/ }),

/***/ "./components/Group.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardList__ = __webpack_require__("./components/CardList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__texts__ = __webpack_require__("./texts.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\Group.js';




var groups = [__WEBPACK_IMPORTED_MODULE_2__texts__["f" /* CARTOON */], __WEBPACK_IMPORTED_MODULE_2__texts__["D" /* US */], __WEBPACK_IMPORTED_MODULE_2__texts__["d" /* ASIAN */], __WEBPACK_IMPORTED_MODULE_2__texts__["k" /* EPISODE */], __WEBPACK_IMPORTED_MODULE_2__texts__["s" /* LATEST */], __WEBPACK_IMPORTED_MODULE_2__texts__["A" /* THAI */]];

var Group = function Group() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardList__["a" /* default */], { data: groups, head: __WEBPACK_IMPORTED_MODULE_2__texts__["o" /* GROUP */], __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Group);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_style_css__ = __webpack_require__("./css/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_style_css__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\Layout.js';





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        props.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/4/darkly/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/jpg', href: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__texts__ = __webpack_require__("./texts.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Navbar = function (_React$Component) {
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
    key: 'renderComponent',
    value: function renderComponent(groups) {
      return groups.map(function (group, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/', key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', style: { cursor: 'pointer' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              group
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var groups = [__WEBPACK_IMPORTED_MODULE_2__texts__["s" /* LATEST */], __WEBPACK_IMPORTED_MODULE_2__texts__["d" /* ASIAN */], __WEBPACK_IMPORTED_MODULE_2__texts__["D" /* US */], __WEBPACK_IMPORTED_MODULE_2__texts__["k" /* EPISODE */], __WEBPACK_IMPORTED_MODULE_2__texts__["f" /* CARTOON */], __WEBPACK_IMPORTED_MODULE_2__texts__["t" /* LIKEST */], __WEBPACK_IMPORTED_MODULE_2__texts__["r" /* IMDB */]];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg fixed-top navbar-light bg-light', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'navbar-brand', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png', width: '30', height: '30', className: 'mr-1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              }),
              '\u0E15\u0E32\u0E41\u0E09\u0E30'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarColor03', 'aria-controls': 'navbarColor03', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarColor03', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navbar-nav mr-auto', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              this.renderComponent(groups)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              { className: 'form-inline my-2 my-lg-0', onSubmit: function onSubmit(e) {
                  return handleSubmit(e);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control mr-sm-2', type: 'text', placeholder: '\u0E04\u0E49\u0E19\u0E2B\u0E32', name: 'name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'btn btn-success my-2 my-sm-0', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                '\u0E04\u0E49\u0E19\u0E2B\u0E32'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/Type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardList__ = __webpack_require__("./components/CardList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__texts__ = __webpack_require__("./texts.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\Type.js';




var types = [__WEBPACK_IMPORTED_MODULE_2__texts__["a" /* ACTION */], __WEBPACK_IMPORTED_MODULE_2__texts__["b" /* ADVENTURE */], __WEBPACK_IMPORTED_MODULE_2__texts__["c" /* ANIMATION */], __WEBPACK_IMPORTED_MODULE_2__texts__["e" /* BIOGRAPHY */], __WEBPACK_IMPORTED_MODULE_2__texts__["g" /* COMEDY */], __WEBPACK_IMPORTED_MODULE_2__texts__["h" /* CRIME */], __WEBPACK_IMPORTED_MODULE_2__texts__["i" /* DOCUMENTARY */], __WEBPACK_IMPORTED_MODULE_2__texts__["j" /* DRAMA */], __WEBPACK_IMPORTED_MODULE_2__texts__["l" /* FAMILY */], __WEBPACK_IMPORTED_MODULE_2__texts__["m" /* FANTASY */], __WEBPACK_IMPORTED_MODULE_2__texts__["n" /* FILM_NOIR */], __WEBPACK_IMPORTED_MODULE_2__texts__["p" /* HISTORY */], __WEBPACK_IMPORTED_MODULE_2__texts__["q" /* HORROR */], __WEBPACK_IMPORTED_MODULE_2__texts__["u" /* MUSICAL */], __WEBPACK_IMPORTED_MODULE_2__texts__["v" /* MYSTERY */], __WEBPACK_IMPORTED_MODULE_2__texts__["x" /* ROMANCE */], __WEBPACK_IMPORTED_MODULE_2__texts__["y" /* SCI_FI */], __WEBPACK_IMPORTED_MODULE_2__texts__["z" /* SPORT */], __WEBPACK_IMPORTED_MODULE_2__texts__["B" /* THRILLER */], __WEBPACK_IMPORTED_MODULE_2__texts__["E" /* WAR */], __WEBPACK_IMPORTED_MODULE_2__texts__["F" /* WESTRN */], __WEBPACK_IMPORTED_MODULE_2__texts__["w" /* NONE_TYPE */]];

var Type = function Type() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardList__["a" /* default */], { data: types, head: __WEBPACK_IMPORTED_MODULE_2__texts__["C" /* TYPE */], __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Type);

/***/ }),

/***/ "./components/home/CardMovie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\home\\CardMovie.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CardMovie = function (_React$Component) {
    _inherits(CardMovie, _React$Component);

    function CardMovie() {
        _classCallCheck(this, CardMovie);

        return _possibleConstructorReturn(this, (CardMovie.__proto__ || Object.getPrototypeOf(CardMovie)).apply(this, arguments));
    }

    _createClass(CardMovie, [{
        key: 'renderComponent',
        value: function renderComponent(datas) {
            return datas.map(function (data) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-3 col-md-6', key: data.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card mb-3', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'movie', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                { href: { pathname: '/movie', query: data }, replace: true, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'movie-box', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 11
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'movie-title', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 12
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 12
                                                }
                                            },
                                            data.name
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'movie-imdb', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 13
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'b',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 13
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 13
                                                    }
                                                },
                                                data.imdb
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'movie-corner movie-HD', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 14
                                            }
                                        },
                                        data.quality
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'movie-image', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 15
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: data.img, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 15
                                            }
                                        })
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'movie-footer', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 18
                                    }
                                },
                                data.footer
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                },
                this.renderComponent(this.props.data)
            );
        }
    }]);

    return CardMovie;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CardMovie);

/***/ }),

/***/ "./components/home/Left.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardMovie__ = __webpack_require__("./components/home/CardMovie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("./data.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\home\\Left.js';




var Left = function Left(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-lg-9 col-md-8 col-sm-6', __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bs-component', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card border-secondary mb-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-header', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    props.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-body', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardMovie__["a" /* default */], { data: __WEBPACK_IMPORTED_MODULE_2__data__["a" /* movie */], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-footer', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'text-center', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        'pager'
                    )
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Left);

/***/ }),

/***/ "./components/home/Right.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Group__ = __webpack_require__("./components/Group.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Type__ = __webpack_require__("./components/Type.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\home\\Right.js';





var Right = function Right() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-lg-3 col-md-4 col-sm-6', __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Group__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Type__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Right);

/***/ }),

/***/ "./components/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Left__ = __webpack_require__("./components/home/Left.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Right__ = __webpack_require__("./components/home/Right.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\components\\home\\index.js';




var Index = function Index(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', style: { paddingTop: '80px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Left__["a" /* default */], { title: props.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Right__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./css/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movie; });
var movie = [{
    id: 0,
    name: 'The Star คืนมหัศจรรย์แห่งดวงดาว',
    imdb: '5.8',
    img: 'https://www.movie2free.com/wp-content/uploads/2018/03/okok-11.jpg',
    quality: 'HD',
    footer: 'Thai+Soundtrack(T) HD 2017',
    trailer: 'https://www.youtube.com/embed/jn_EItr5xUo',
    synopsis: 'A Bad Moms Christmas คุณแม่ตัวพีคเดินหน้ากลับมากันครบทีม ไม่ว่าจะเป็น เอมี่ (มิลา คูนิส) กิกี้ (คริสเทน เบล) และ คาร์ล่า (แคธรี ฮาห์น) แต่เรื่องราวความวายป่วงของครั้งนี้จะดับเบิ้ลคูณสองขึ้นเมื่อพวกเธอต้องรับมือคิดหากลยุทธ์เหนือชั้นเพื่อต่อกรกับเหล่าคุณแม่ของตัวเองนำโดยสามนักแสดงหญิงมือเก๋าอย่าง คริสติน บาแรนสกี้ จาก Into the Woods (อิน ทู เดอะ วูดส์), เชอรีล ไฮเนส จาก The Ugly Truth (ดิ อักลี ทรูธ) และ ซูซาน ซาแรนดอน จาก The Lovely Bones (เดอะ เลิฟลี่ โบนส์) ที่ได้เดินทางมาเยี่ยมพวกเธอในช่วงคริสต์มาสพร้อมกับต้องการจะจัดงานปาร์ตี้ฉลองเทศกาลให้ได้มันส์สุดเหวี่ยงกันไปข้างหนึ่ง!'
}, {
    id: 1,
    name: 'Pokemon the Movie I Choose You! โปเกมอน เดอะ มูฟวี ฉันเลือกนาย!',
    imdb: '6.5',
    img: 'https://www.movie2free.com/wp-content/uploads/2018/03/okok-10-213x300.jpg',
    quality: 'HD',
    footer: 'Thai(C) HD 2017',
    trailer: 'https://www.youtube.com/embed/r12w4iRBLp4',
    synopsis: 'A Bad Moms Christmas คุณแม่ตัวพีคเดินหน้ากลับมากันครบทีม ไม่ว่าจะเป็น เอมี่ (มิลา คูนิส) กิกี้ (คริสเทน เบล) และ คาร์ล่า (แคธรี ฮาห์น) แต่เรื่องราวความวายป่วงของครั้งนี้จะดับเบิ้ลคูณสองขึ้นเมื่อพวกเธอต้องรับมือคิดหากลยุทธ์เหนือชั้นเพื่อต่อกรกับเหล่าคุณแม่ของตัวเองนำโดยสามนักแสดงหญิงมือเก๋าอย่าง คริสติน บาแรนสกี้ จาก Into the Woods (อิน ทู เดอะ วูดส์), เชอรีล ไฮเนส จาก The Ugly Truth (ดิ อักลี ทรูธ) และ ซูซาน ซาแรนดอน จาก The Lovely Bones (เดอะ เลิฟลี่ โบนส์) ที่ได้เดินทางมาเยี่ยมพวกเธอในช่วงคริสต์มาสพร้อมกับต้องการจะจัดงานปาร์ตี้ฉลองเทศกาลให้ได้มันส์สุดเหวี่ยงกันไปข้างหนึ่ง!'
}, {
    id: 2,
    name: 'Star Wars Episode VIII – The Last Jedi สตาร์ วอร์ส ปัจฉิมบทแห่งเจได',
    imdb: '7.9',
    img: 'https://www.movie2free.com/wp-content/uploads/2017/12/Sword-Art-Online-The-Movie-Ordinal-Scale-2017-203x300.jpeg',
    quality: 'HD',
    footer: 'Thai+Soundtrack(T) HD 2017',
    trailer: 'https://www.youtube.com/embed/Gn0WzX3OcAU',
    synopsis: 'A Bad Moms Christmas คุณแม่ตัวพีคเดินหน้ากลับมากันครบทีม ไม่ว่าจะเป็น เอมี่ (มิลา คูนิส) กิกี้ (คริสเทน เบล) และ คาร์ล่า (แคธรี ฮาห์น) แต่เรื่องราวความวายป่วงของครั้งนี้จะดับเบิ้ลคูณสองขึ้นเมื่อพวกเธอต้องรับมือคิดหากลยุทธ์เหนือชั้นเพื่อต่อกรกับเหล่าคุณแม่ของตัวเองนำโดยสามนักแสดงหญิงมือเก๋าอย่าง คริสติน บาแรนสกี้ จาก Into the Woods (อิน ทู เดอะ วูดส์), เชอรีล ไฮเนส จาก The Ugly Truth (ดิ อักลี ทรูธ) และ ซูซาน ซาแรนดอน จาก The Lovely Bones (เดอะ เลิฟลี่ โบนส์) ที่ได้เดินทางมาเยี่ยมพวกเธอในช่วงคริสต์มาสพร้อมกับต้องการจะจัดงานปาร์ตี้ฉลองเทศกาลให้ได้มันส์สุดเหวี่ยงกันไปข้างหนึ่ง!'
}, {
    id: 3,
    name: 'A Bad Moms Christmas คริสต์มาสป่วนแก๊งแม่ชวนคึก',
    imdb: '5.5',
    img: 'https://www.movie2free.com/wp-content/uploads/2018/03/okok-14-209x300.jpg',
    quality: 'HD',
    footer: 'Thai+Soundtrack(T) HD 2017',
    trailer: 'https://www.youtube.com/embed/FJdNdMOblaM',
    synopsis: 'A Bad Moms Christmas คุณแม่ตัวพีคเดินหน้ากลับมากันครบทีม ไม่ว่าจะเป็น เอมี่ (มิลา คูนิส) กิกี้ (คริสเทน เบล) และ คาร์ล่า (แคธรี ฮาห์น) แต่เรื่องราวความวายป่วงของครั้งนี้จะดับเบิ้ลคูณสองขึ้นเมื่อพวกเธอต้องรับมือคิดหากลยุทธ์เหนือชั้นเพื่อต่อกรกับเหล่าคุณแม่ของตัวเองนำโดยสามนักแสดงหญิงมือเก๋าอย่าง คริสติน บาแรนสกี้ จาก Into the Woods (อิน ทู เดอะ วูดส์), เชอรีล ไฮเนส จาก The Ugly Truth (ดิ อักลี ทรูธ) และ ซูซาน ซาแรนดอน จาก The Lovely Bones (เดอะ เลิฟลี่ โบนส์) ที่ได้เดินทางมาเยี่ยมพวกเธอในช่วงคริสต์มาสพร้อมกับต้องการจะจัดงานปาร์ตี้ฉลองเทศกาลให้ได้มันส์สุดเหวี่ยงกันไปข้างหนึ่ง!'
}, {
    id: 4,
    name: 'Kodomo tsukai จับเด็กไปเป็นผี',
    imdb: '4.6',
    img: 'https://www.movie2free.com/wp-content/uploads/2018/03/okok-12-214x300.jpg',
    quality: 'HD',
    footer: 'Thai(C) HD 2017',
    trailer: 'https://www.youtube.com/embed/Qy7Umd5Johw',
    synopsis: 'A Bad Moms Christmas คุณแม่ตัวพีคเดินหน้ากลับมากันครบทีม ไม่ว่าจะเป็น เอมี่ (มิลา คูนิส) กิกี้ (คริสเทน เบล) และ คาร์ล่า (แคธรี ฮาห์น) แต่เรื่องราวความวายป่วงของครั้งนี้จะดับเบิ้ลคูณสองขึ้นเมื่อพวกเธอต้องรับมือคิดหากลยุทธ์เหนือชั้นเพื่อต่อกรกับเหล่าคุณแม่ของตัวเองนำโดยสามนักแสดงหญิงมือเก๋าอย่าง คริสติน บาแรนสกี้ จาก Into the Woods (อิน ทู เดอะ วูดส์), เชอรีล ไฮเนส จาก The Ugly Truth (ดิ อักลี ทรูธ) และ ซูซาน ซาแรนดอน จาก The Lovely Bones (เดอะ เลิฟลี่ โบนส์) ที่ได้เดินทางมาเยี่ยมพวกเธอในช่วงคริสต์มาสพร้อมกับต้องการจะจัดงานปาร์ตี้ฉลองเทศกาลให้ได้มันส์สุดเหวี่ยงกันไปข้างหนึ่ง!'
}];

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home__ = __webpack_require__("./components/home/index.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\next-movie\\movie-core\\pages\\index.js';




var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
    { title: '\u0E14\u0E39\u0E2B\u0E19\u0E31\u0E07\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E1F\u0E23\u0E35 \u0E01\u0E31\u0E19 \u0E15\u0E32\u0E41\u0E09\u0E30', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_home__["a" /* default */], { title: '\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 - \u0E14\u0E39\u0E2B\u0E19\u0E31\u0E07\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E1F\u0E23\u0E35 \u0E01\u0E31\u0E19 \u0E15\u0E32\u0E41\u0E09\u0E30', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./texts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CARTOON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return US; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ASIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LATEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return THAI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return IMDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LIKEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return TYPE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return MUSICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MYSTERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ROMANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SCI_FI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return THRILLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return WAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return WESTRN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return NONE_TYPE; });
//หมวดหมู่
var GROUP = 'หมวดหมู่';
var CARTOON = 'หนังการ์ตูน';
var US = 'หนังฝรั่ง';
var ASIAN = 'หนังเอเชีย';
var EPISODE = 'หนังภาคต่อ';
var LATEST = 'หนังออกใหม่';
var THAI = 'หนังไทย';
var IMDB = 'IMDB';
var LIKEST = 'คนชอบมากที่สุด';

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map