/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_db_cities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/db_cities */ \"./src/modules/db_cities.js\");\n/* harmony import */ var _modules_DropdownHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DropdownHandler */ \"./src/modules/DropdownHandler.js\");\n\n\nvar local = 'RU',\n    localData = _modules_db_cities__WEBPACK_IMPORTED_MODULE_0__[\"default\"][local],\n    localCountryName = {\n  RU: 'Россия',\n  EN: 'United Kingdom',\n  DE: 'Deutschland'\n}[local];\nnew _modules_DropdownHandler__WEBPACK_IMPORTED_MODULE_1__.DropdownHandler(localData, localCountryName);\n\n//# sourceURL=webpack://inputCities/./src/index.js?");

/***/ }),

/***/ "./src/modules/DropdownHandler.js":
/*!****************************************!*\
  !*** ./src/modules/DropdownHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropdownHandler\": () => (/* binding */ DropdownHandler)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DropdownHandler = /*#__PURE__*/function () {\n  function DropdownHandler(localData, localCountryName) {\n    var _this = this;\n\n    _classCallCheck(this, DropdownHandler);\n\n    var dropdown = document.querySelector('.dropdown');\n    dropdown.innerHTML = \"<div class=\\\"dropdown-lists\\\"></div>\";\n    this.data = localData;\n    this.localCountryName = localCountryName;\n    this.selectCities = document.getElementById('select-cities'), this.button = document.querySelector('.button'), this.closeButton = document.querySelector('.close-button'), this.defaultList = this.createList(dropdown.firstElementChild, 'default');\n    this.selectList = this.createList(dropdown.firstElementChild, 'select');\n    this.autocompleteList = this.createList(dropdown.firstElementChild, 'autocomplete');\n    this.render(this.defaultList, 3).hidden();\n    dropdown.parentElement.addEventListener('click', function (_ref) {\n      var target = _ref.target;\n\n      if (!target.closest('.dropdown') && target !== _this.selectCities && target !== _this.button && _this.closeButton) {\n        return;\n      }\n\n      if (target.closest('.dropdown')) {\n        if (target.closest('.dropdown-lists__total-line')) {\n          if (target.closest('.dropdown-lists__list--default')) {\n            _this.hidden().clean(_this.selectList).render(_this.selectList, 0, [_this.data.find(function (item) {\n              return item.country === target.closest('.dropdown-lists__total-line').firstElementChild.textContent;\n            })]).show(_this.selectList);\n          }\n\n          if (target.closest('.dropdown-lists__list--select')) {\n            _this.clean().hidden().show(_this.defaultList);\n          }\n\n          _this.selectCities.value = target.closest('.dropdown-lists__total-line').firstElementChild.textContent;\n          _this.button.href = '#';\n        }\n\n        if (target.closest('.dropdown-lists__line')) {\n          var city = _this.data.map(function (item) {\n            return item.cities.find(function (item) {\n              return item.name === target.closest('.dropdown-lists__line').firstElementChild.textContent;\n            });\n          }).filter(function (item) {\n            return item;\n          })[0];\n\n          _this.button.href = city.link;\n          _this.selectCities.value = city.name;\n        }\n\n        _this.selectCities.classList.add('no-empty');\n\n        _this.closeButton.style.display = 'block';\n      }\n\n      if (target === _this.selectCities) {\n        _this.selectCities.classList.add('no-empty');\n\n        _this.show();\n      }\n\n      if (target === _this.button && _this.button.getAttribute('href') !== '#') {\n        _this.selectCities.value = '';\n\n        _this.hidden();\n      }\n\n      if (target === _this.closeButton) {\n        _this.selectCities.classList.remove('no-empty');\n\n        _this.selectCities.value = '';\n        _this.closeButton.style.display = '';\n        _this.button.href = '#';\n\n        _this.hidden();\n      }\n    });\n    this.selectCities.addEventListener('input', function () {\n      if (_this.selectCities.value) {\n        var list = _this.data.reduce(function (list, country) {\n          var cities = country.cities.reduce(function (list, city) {\n            var reg = new RegExp(\"^(\".concat(_this.selectCities.value.toLowerCase(), \")\"));\n\n            if (city.name.toLowerCase().match(reg)) {\n              list.push(city);\n            }\n\n            return list;\n          }, []);\n          cities ? list.push.apply(list, _toConsumableArray(cities)) : null;\n          return list;\n        }, []);\n\n        _this.selectCities.classList.add('no-empty');\n\n        _this.clean().hidden().render(_this.autocompleteList, 0, [{\n          cities: list\n        }]).show(_this.autocompleteList);\n\n        _this.closeButton.style.display = 'block';\n      } else {\n        console.log(_this.autocompleteList.parentElement.style.display);\n        _this.autocompleteList.parentElement.style.display !== 'none' ? _this.clean().hidden().show(_this.defaultList) : _this.clean().hidden();\n      }\n    });\n  }\n\n  _createClass(DropdownHandler, [{\n    key: \"createList\",\n    value: function createList(dropdown, classNameMod) {\n      var list = document.createElement('div'),\n          inner = document.createElement('div');\n      list.className = \"dropdown-lists__list dropdown-lists__list--\".concat(classNameMod);\n      inner.className = \"dropdown-lists__col\";\n      return dropdown.appendChild(list).appendChild(inner);\n    }\n  }, {\n    key: \"clean\",\n    value: function clean() {\n      this.selectList.textContent = '';\n      this.autocompleteList.textContent = '';\n      return this;\n    }\n  }, {\n    key: \"hidden\",\n    value: function hidden(list) {\n      if (list) {\n        list.parentElement.style.display = 'none';\n        return this;\n      }\n\n      this.defaultList.parentElement.style.display = 'none';\n      this.selectList.parentElement.style.display = 'none';\n      this.autocompleteList.parentElement.style.display = 'none';\n      return this;\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultList;\n      list.parentElement.style.display = 'block';\n      return this;\n    }\n  }, {\n    key: \"render\",\n    value: function render(list, countCities) {\n      var _this2 = this;\n\n      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;\n      data.sort(function (a, b) {\n        return a.country === b.country ? 0 : a.country > b.country || b.country === _this2.localCountryName ? 1 : -1;\n      }).forEach(function (item) {\n        var cities = item.cities.sort(function (a, b) {\n          return +a.count === +b.count ? 0 : +a.count < +b.count ? 1 : -1;\n        }).reduce(function (citiesList, city, index) {\n          return citiesList += countCities && index >= countCities ? '' : \" <div class=\\\"dropdown-lists__line\\\">\\n                  <div class=\\\"dropdown-lists__city\\\">\".concat(city.name, \"</div>\\n                  <div class=\\\"dropdown-lists__count\\\">\").concat(city.count, \"</div>\\n                </div>\");\n        }, ''),\n            country = item.country ? \" <div class=\\\"dropdown-lists__total-line\\\">\\n                <div class=\\\"dropdown-lists__country\\\">\".concat(item.country, \"</div>\\n                <div class=\\\"dropdown-lists__count\\\">\").concat(item.count, \"</div>\\n              </div>\") : '',\n            block = \" <div class=\\\"dropdown-lists__countryBlock\\\">\\n                \".concat(country, \"\\n                \").concat(cities ? cities : '<div class=\"dropdown-lists__line\">Ничего не найдено...</div>', \"\\n              </div>\");\n        list.innerHTML += block;\n      });\n      return this;\n    }\n  }]);\n\n  return DropdownHandler;\n}();\n\n//# sourceURL=webpack://inputCities/./src/modules/DropdownHandler.js?");

/***/ }),

/***/ "./src/modules/db_cities.js":
/*!**********************************!*\
  !*** ./src/modules/db_cities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data = {\n  \"RU\": [{\n    \"country\": \"Россия\",\n    \"count\": \"144500000\",\n    \"cities\": [{\n      \"name\": \"Рязань\",\n      \"count\": \"538962\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C\"\n    }, {\n      \"name\": \"Москва\",\n      \"count\": \"12615882\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0\"\n    }, {\n      \"name\": \"Санкт-Петербург\",\n      \"count\": \"5383968\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Краснодар\",\n      \"count\": \"918145\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80\"\n    }, {\n      \"name\": \"Екатеринбург\",\n      \"count\": \"1484456\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Ростов-на-Дону\",\n      \"count\": \"1130305\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83\"\n    }, {\n      \"name\": \"Воронеж\",\n      \"count\": \"1054537\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6\"\n    }]\n  }, {\n    \"country\": \"Германия\",\n    \"count\": 82175684,\n    \"cities\": [{\n      \"name\": \"Берлин\",\n      \"count\": \"3613495\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD\"\n    }, {\n      \"name\": \"Мюнхен\",\n      \"count\": \"1456039\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD\"\n    }, {\n      \"name\": \"Франкфурт-на-Майне\",\n      \"count\": \"736414\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5\"\n    }, {\n      \"name\": \"Кёльн\",\n      \"count\": \"1080394\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD\"\n    }]\n  }, {\n    \"country\": \"Англия\",\n    \"count\": 53012456,\n    \"cities\": [{\n      \"name\": \"Лондон\",\n      \"count\": \" 8869898\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD\"\n    }, {\n      \"name\": \"Манчестер\",\n      \"count\": \"545500\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80\"\n    }, {\n      \"name\": \"Эдинбург\",\n      \"count\": \"488100\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Бристоль\",\n      \"count\": \"567111\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C\"\n    }]\n  }],\n  \"EN\": [{\n    \"country\": \"Russia\",\n    \"count\": \"144500000\",\n    \"cities\": [{\n      \"name\": \"Ryazan\",\n      \"count\": \"538962\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C\"\n    }, {\n      \"name\": \"Moscow\",\n      \"count\": \"12615882\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0\"\n    }, {\n      \"name\": \"St Petersburg\",\n      \"count\": \"5383968\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Krasnodar\",\n      \"count\": \"918145\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80\"\n    }, {\n      \"name\": \"Yekaterinburg\",\n      \"count\": \"1484456\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Rostov-on-Don\",\n      \"count\": \"1130305\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83\"\n    }, {\n      \"name\": \"Voronezh\",\n      \"count\": \"1054537\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6\"\n    }]\n  }, {\n    \"country\": \"Germany\",\n    \"count\": 82175684,\n    \"cities\": [{\n      \"name\": \"Berlin\",\n      \"count\": \"3613495\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD\"\n    }, {\n      \"name\": \"Munich\",\n      \"count\": \"1456039\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD\"\n    }, {\n      \"name\": \"frankfurt\",\n      \"count\": \"736414\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5\"\n    }, {\n      \"name\": \"Cologne\",\n      \"count\": \"1080394\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD\"\n    }]\n  }, {\n    \"country\": \"United Kingdom\",\n    \"count\": 53012456,\n    \"cities\": [{\n      \"name\": \"London\",\n      \"count\": \" 8869898\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD\"\n    }, {\n      \"name\": \"Manchester\",\n      \"count\": \"545500\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80\"\n    }, {\n      \"name\": \"Edinburgh\",\n      \"count\": \"488100\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Bristol\",\n      \"count\": \"567111\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C\"\n    }]\n  }],\n  \"DE\": [{\n    \"country\": \"Russland\",\n    \"count\": \"144500000\",\n    \"cities\": [{\n      \"name\": \"Ryazan\",\n      \"count\": \"538962\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C\"\n    }, {\n      \"name\": \"Moskau\",\n      \"count\": \"12615882\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0\"\n    }, {\n      \"name\": \"Saint Petersburg\",\n      \"count\": \"5383968\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Krasnodar\",\n      \"count\": \"918145\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80\"\n    }, {\n      \"name\": \"Jekaterinburg\",\n      \"count\": \"1484456\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Rostow\",\n      \"count\": \"1130305\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83\"\n    }, {\n      \"name\": \"Woronesch\",\n      \"count\": \"1054537\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6\"\n    }]\n  }, {\n    \"country\": \"Deutschland\",\n    \"count\": 82175684,\n    \"cities\": [{\n      \"name\": \"Berlin\",\n      \"count\": \"3613495\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD\"\n    }, {\n      \"name\": \"München\",\n      \"count\": \"1456039\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD\"\n    }, {\n      \"name\": \"Frankfurt\",\n      \"count\": \"736414\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5\"\n    }, {\n      \"name\": \"Köln\",\n      \"count\": \"1080394\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD\"\n    }]\n  }, {\n    \"country\": \"England\",\n    \"count\": 53012456,\n    \"cities\": [{\n      \"name\": \"London\",\n      \"count\": \" 8869898\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD\"\n    }, {\n      \"name\": \"Manchester\",\n      \"count\": \"545500\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80\"\n    }, {\n      \"name\": \"Edinburgh\",\n      \"count\": \"488100\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3\"\n    }, {\n      \"name\": \"Bristol\",\n      \"count\": \"567111\",\n      \"link\": \"https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C\"\n    }]\n  }]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://inputCities/./src/modules/db_cities.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;