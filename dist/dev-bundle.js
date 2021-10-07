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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dataRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dataRequest */ \"./src/modules/dataRequest.js\");\n/* harmony import */ var _modules_DropdownHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DropdownHandler */ \"./src/modules/DropdownHandler.js\");\n\n\n(0,_modules_dataRequest__WEBPACK_IMPORTED_MODULE_0__.dataRequest)(_modules_DropdownHandler__WEBPACK_IMPORTED_MODULE_1__.DropdownHandler, 'RU');\n\n//# sourceURL=webpack://inputCities/./src/index.js?");

/***/ }),

/***/ "./src/modules/DropdownHandler.js":
/*!****************************************!*\
  !*** ./src/modules/DropdownHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropdownHandler\": () => (/* binding */ DropdownHandler)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar makeEaseOut = function makeEaseOut(timing) {\n  return function (timeFraction) {\n    return 1 - timing(1 - timeFraction);\n  };\n},\n    square = function square(timeFraction) {\n  return Math.pow(timeFraction, 2);\n},\n    animate = function animate(_ref) {\n  var duration = _ref.duration,\n      draw = _ref.draw,\n      timing = _ref.timing;\n  var start = performance.now(),\n      requestID = requestAnimationFrame(function animate(time) {\n    var timeFraction = (time - start) / duration,\n        progress = timing(timeFraction > 1 ? 1 : timeFraction),\n        stop = draw.call(null, progress);\n\n    if (timeFraction < 1 && !stop) {\n      return requestAnimationFrame(animate);\n    } else {\n      cancelAnimationFrame(requestID);\n    }\n  });\n};\n\nvar DropdownHandler = /*#__PURE__*/function () {\n  function DropdownHandler(localData, localCountryName) {\n    var _this = this;\n\n    _classCallCheck(this, DropdownHandler);\n\n    var dropdown = document.querySelector('.dropdown');\n    dropdown.innerHTML = \"<div class=\\\"dropdown-lists\\\"></div>\";\n    dropdown.firstElementChild.style.cssText = \"\\n        overflow: hidden;\\n        position: relative;\\n      \";\n    this.data = localData;\n    this.localCountryName = localCountryName;\n    this.selectCities = document.getElementById('select-cities'), this.button = document.querySelector('.button'), this.closeButton = document.querySelector('.close-button'), this.defaultList = this.createList(dropdown.firstElementChild, 'default');\n    this.selectList = this.createList(dropdown.firstElementChild, 'select');\n    this.autocompleteList = this.createList(dropdown.firstElementChild, 'autocomplete');\n    this.defaultList.parentElement.style.cssText = \"\\n        position: relative;\\n        transform: translate(0, 0);\\n      \";\n    this.selectList.parentElement.style.cssText = \"\\n        position: absolute;\\n        transform: translate(100%, 0);\\n      \";\n    this.render(this.defaultList, 3).hidden();\n    dropdown.parentElement.addEventListener('click', function (_ref2) {\n      var target = _ref2.target;\n\n      if (!target.closest('.dropdown') && target !== _this.selectCities && target !== _this.button && target !== _this.closeButton) {\n        return;\n      }\n\n      if (target.closest('.dropdown')) {\n        if (target.closest('.dropdown-lists__total-line')) {\n          if (target.closest('.dropdown-lists__list--default')) {\n            _this.clean(_this.selectList).render(_this.selectList, 0, [_this.data.find(function (item) {\n              return item.country === target.closest('.dropdown-lists__total-line').firstElementChild.textContent;\n            })]).addToggleListsAnimation(_this.defaultList.parentElement, _this.selectList.parentElement, true, false);\n          }\n\n          if (target.closest('.dropdown-lists__list--select')) {\n            _this.addToggleListsAnimation(_this.selectList.parentElement, _this.defaultList.parentElement, false, true, _this.clean.bind(_this));\n          }\n\n          _this.selectCities.value = target.closest('.dropdown-lists__total-line').firstElementChild.textContent;\n          _this.button.href = '#';\n        }\n\n        if (target.closest('.dropdown-lists__line')) {\n          var city = _this.data.map(function (item) {\n            return item.cities.find(function (item) {\n              return item.name === target.closest('.dropdown-lists__line').firstElementChild.textContent;\n            });\n          }).filter(function (item) {\n            return item;\n          })[0];\n\n          _this.button.href = city.link;\n          _this.selectCities.value = city.name;\n        }\n\n        _this.selectCities.classList.add('no-empty');\n\n        _this.closeButton.style.display = 'block';\n      }\n\n      if (target === _this.selectCities) {\n        _this.closeButton.style.display = 'block';\n\n        _this.selectCities.classList.add('no-empty');\n\n        _this.show().clean().show(_this.selectList);\n      }\n\n      if (target === _this.button && _this.button.getAttribute('href') !== '#') {\n        _this.selectCities.value = '';\n\n        _this.hidden();\n      }\n\n      if (target === _this.closeButton) {\n        _this.selectCities.classList.remove('no-empty');\n\n        _this.selectCities.value = '';\n        _this.closeButton.style.display = '';\n        _this.button.href = '#';\n\n        _this.hidden();\n      }\n    });\n    this.selectCities.addEventListener('input', function () {\n      if (_this.selectCities.value) {\n        var list = _this.data.reduce(function (list, country) {\n          var cities = country.cities.reduce(function (list, city) {\n            var reg = new RegExp(\"^(\".concat(_this.selectCities.value.toLowerCase(), \")\"));\n\n            if (city.name.toLowerCase().match(reg)) {\n              list.push(city);\n            }\n\n            return list;\n          }, []);\n          cities ? list.push.apply(list, _toConsumableArray(cities)) : null;\n          return list;\n        }, []);\n\n        _this.selectCities.classList.add('no-empty');\n\n        _this.clean().hidden().render(_this.autocompleteList, 0, [{\n          cities: list\n        }], _this.selectCities.value).show(_this.autocompleteList);\n\n        _this.closeButton.style.display = 'block';\n      } else {\n        _this.autocompleteList.parentElement.style.display !== 'none' ? _this.clean().hidden().show(_this.defaultList) : _this.clean().hidden();\n      }\n    });\n  }\n\n  _createClass(DropdownHandler, [{\n    key: \"drawToggleLists\",\n    value: function drawToggleLists(current, next, currentWay, nextWay, action, progress) {\n      current.style.transform = \"translate(\".concat(currentWay ? '-' : '').concat(progress * 100, \"%, 0)\");\n      next.style.transform = \"translate(\".concat(nextWay ? '-' : '').concat(100 - progress * 100, \"%, 0)\");\n\n      if (action && progress === 1) {\n        action();\n      }\n    }\n  }, {\n    key: \"addToggleListsAnimation\",\n    value: function addToggleListsAnimation(current, next, currentWay, nextWay, action) {\n      animate({\n        duration: 1000,\n        timing: makeEaseOut(square),\n        draw: this.drawToggleLists.bind(null, current, next, currentWay, nextWay, action)\n      });\n    }\n  }, {\n    key: \"createList\",\n    value: function createList(dropdown, classNameMod) {\n      var list = document.createElement('div'),\n          inner = document.createElement('div');\n      list.className = \"dropdown-lists__list dropdown-lists__list--\".concat(classNameMod);\n      inner.className = \"dropdown-lists__col\";\n      return dropdown.appendChild(list).appendChild(inner);\n    }\n  }, {\n    key: \"clean\",\n    value: function clean() {\n      this.selectList.textContent = '';\n      this.autocompleteList.textContent = '';\n      return this;\n    }\n  }, {\n    key: \"hidden\",\n    value: function hidden(list) {\n      if (list) {\n        list.parentElement.style.display = 'none';\n        return this;\n      }\n\n      this.defaultList.parentElement.style.display = 'none';\n      this.selectList.parentElement.style.display = 'none';\n      this.autocompleteList.parentElement.style.display = 'none';\n      return this;\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultList;\n      list.parentElement.style.display = 'block';\n      return this;\n    }\n  }, {\n    key: \"render\",\n    value: function render(list, countCities) {\n      var _this2 = this;\n\n      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;\n      var inputValue = arguments.length > 3 ? arguments[3] : undefined;\n      data.sort(function (a, b) {\n        return a.country === b.country ? 0 : a.country > b.country || b.country === _this2.localCountryName ? 1 : -1;\n      }).forEach(function (item) {\n        var cities = item.cities.sort(function (a, b) {\n          return +a.count === +b.count ? 0 : +a.count < +b.count ? 1 : -1;\n        }).reduce(function (citiesList, city, index) {\n          return citiesList += countCities && index >= countCities ? '' : \" <div class=\\\"dropdown-lists__line\\\">\\n                  <div class=\\\"dropdown-lists__city\\\">\".concat(inputValue ? city.name.replace(inputValue, '<b>$&</b>') : city.name, \"</div>\\n                  <div class=\\\"dropdown-lists__count\\\">\").concat(city.count, \"</div>\\n                </div>\");\n        }, ''),\n            country = item.country ? \" <div class=\\\"dropdown-lists__total-line\\\">\\n                <div class=\\\"dropdown-lists__country\\\">\".concat(item.country, \"</div>\\n                <div class=\\\"dropdown-lists__count\\\">\").concat(item.count, \"</div>\\n              </div>\") : '',\n            block = \" <div class=\\\"dropdown-lists__countryBlock\\\">\\n                \".concat(country, \"\\n                \").concat(cities ? cities : '<div class=\"dropdown-lists__line\">Ничего не найдено...</div>', \"\\n              </div>\");\n        list.innerHTML += block;\n      });\n      return this;\n    }\n  }]);\n\n  return DropdownHandler;\n}();\n\n//# sourceURL=webpack://inputCities/./src/modules/DropdownHandler.js?");

/***/ }),

/***/ "./src/modules/dataRequest.js":
/*!************************************!*\
  !*** ./src/modules/dataRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataRequest\": () => (/* binding */ dataRequest)\n/* harmony export */ });\nvar script = function () {\n  var obj = {\n    style: '',\n    html: ''\n  };\n\n  for (var i = 1; i <= 12; i++) {\n    if (i > 1) {\n      obj.style += \" .sk-circle-bounce .sk-circle-\".concat(i, \" {\\n            transform: rotate(\").concat(30 * (i - 1), \"deg);\\n          }\\n          .sk-circle-bounce .sk-circle-\").concat(i, \":before {\\n            animation-delay: \").concat(-1.2 + (i - 1) / 10, \"s;\\n          }  \\n        \");\n    }\n\n    obj.html += \"<div class=\\\"sk-child sk-circle-\".concat(i, \"\\\"></div>\\n        \");\n  }\n\n  return obj;\n}(),\n    loadingAnimation = \"<style>\\n    .sk-circle-bounce {\\n      width: 100px;\\n      height: 100px;\\n      position: relative;\\n      margin: auto;\\n    }\\n    .sk-child {\\n      width: 100%;\\n      height: 100%;\\n      position: absolute;\\n      left: 0;\\n      top: 0;\\n    }\\n    \".concat(script.style, \"\\n    .sk-child:before {\\n      content: \\\"\\\";\\n      display: block;\\n      margin: 0 auto;\\n      width: 15%;\\n      height: 15%;\\n      background-color: #19b5fe;\\n      border-radius: 100%;\\n      animation: sk-circle-bounce-delay 1.2s infinite ease-in-out both;\\n    }\\n    @keyframes sk-circle-bounce-delay {\\n      0%,\\n      80%,\\n      100% {\\n          transform: scale(0);\\n        }\\n      40% {\\n          transform: scale(1);\\n        }\\n      }\\n    </style>\\n    <div class=\\\"sk-circle-bounce\\\">\\n      \").concat(script.html, \"\\n    </div>\"),\n    overlay = document.createElement('section');\n\nvar dataRequest = function dataRequest(Handler, local) {\n  overlay.className = 'main overlay';\n  overlay.innerHTML = loadingAnimation;\n  document.body.append(overlay);\n  return fetch('../db/db_cities.json', {\n    method: 'GET',\n    mode: 'same-origin'\n  }).then(function (response) {\n    if (response.status !== 200) {\n      throw new Error('status network not 200');\n    }\n\n    return response.json();\n  }).then(function (data) {\n    var localCountryName = {\n      RU: 'Россия',\n      EN: 'United Kingdom',\n      DE: 'Deutschland'\n    }[local];\n    new Handler(data[local], localCountryName);\n    setTimeout(function () {\n      return overlay.remove();\n    }, 750);\n  })[\"catch\"](function (error) {\n    return console.error(error);\n  });\n};\n\n//# sourceURL=webpack://inputCities/./src/modules/dataRequest.js?");

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