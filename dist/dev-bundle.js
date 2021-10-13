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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_drawOlympicRing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/drawOlympicRing */ \"./src/modules/drawOlympicRing.js\");\n\n\nvar canvas = document.getElementById('canvas'),\n    ctx = canvas.getContext('2d'),\n    color = document.getElementById('color'),\n    weight = document.getElementById('weight'),\n    setFullScreenCanvas = function setFullScreenCanvas() {\n  canvas.setAttribute('width', window.innerWidth - 8);\n  canvas.setAttribute('height', window.innerHeight - 108);\n  (0,_modules_drawOlympicRing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ctx);\n};\n\nsetFullScreenCanvas();\nwindow.addEventListener('resize', setFullScreenCanvas);\ncolor.addEventListener('change', function () {\n  return ctx.strokeStyle = color.value;\n});\nweight.addEventListener('input', function () {\n  ctx.lineWidth = weight.value;\n  document.querySelector('label[for=weight]').textContent = weight.value;\n});\ncanvas.addEventListener('mousemove', function (event) {\n  var x = event.offsetX,\n      y = event.offsetY,\n      dx = x - event.movementX,\n      dy = y - event.movementY;\n\n  if (event.buttons > 0) {\n    console.log(x, dx, y, dy);\n    ctx.beginPath();\n    ctx.moveTo(x, y);\n    ctx.lineTo(dx, dy);\n    ctx.stroke();\n    ctx.closePath();\n  }\n});\n\n//# sourceURL=webpack://3dGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/drawOlympicRing.js":
/*!****************************************!*\
  !*** ./src/modules/drawOlympicRing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar drawOlympicRing = function drawOlympicRing(ctx) {\n  var centerX = window.innerWidth / 2 - 263;\n  ctx.strokeStyle = '#0884c2';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 110, 110, 60, 0.25 * Math.PI, 1.25 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#fbb031';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 182, 182, 60, 1.75 * Math.PI, 0.75 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#000000';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 254, 110, 60, 0.25 * Math.PI, 1.25 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#fbb031';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 182, 182, 60, 0.75 * Math.PI, 1.75 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#0884c2';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 110, 110, 60, 1.25 * Math.PI, 0.25 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#ed334e';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 398, 110, 60, 0.75 * Math.PI, 1.75 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#1c8b3b';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 326, 182, 60, 1.25 * Math.PI, 2.25 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#000000';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 254, 110, 60, 1.25 * Math.PI, 0.25 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#1c8b3b';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 326, 182, 60, 2.25 * Math.PI, 1.25 * Math.PI);\n  ctx.stroke();\n  ctx.strokeStyle = '#ed334e';\n  ctx.lineWidth = 10;\n  ctx.beginPath();\n  ctx.arc(centerX + 398, 110, 60, 1.75 * Math.PI, 0.75 * Math.PI);\n  ctx.stroke();\n  ctx.lineWidth = 1;\n  ctx.strokeStyle = '#000000';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawOlympicRing);\n\n//# sourceURL=webpack://3dGlo/./src/modules/drawOlympicRing.js?");

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