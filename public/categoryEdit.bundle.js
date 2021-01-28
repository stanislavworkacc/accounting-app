/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/category-edit/js/app.js":
/*!****************************************!*\
  !*** ./public/category-edit/js/app.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_dataFromServer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/dataFromServer.js */ \"./public/category-edit/js/module/dataFromServer.js\");\n/* harmony import */ var _module_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/render.js */ \"./public/category-edit/js/module/render.js\");\n\r\n\r\n\r\nconst activationEdit = () => {\r\n    (0,_module_dataFromServer_js__WEBPACK_IMPORTED_MODULE_0__.reqToData)().then(data => {\r\n        (0,_module_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(data)\r\n    })\r\n};\r\n\r\nactivationEdit();\n\n//# sourceURL=webpack://accounting-app/./public/category-edit/js/app.js?");

/***/ }),

/***/ "./public/category-edit/js/module/dataFromServer.js":
/*!**********************************************************!*\
  !*** ./public/category-edit/js/module/dataFromServer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reqToData\": () => /* binding */ reqToData\n/* harmony export */ });\nconst reqToData =  () => {\r\n    return fetch('/category/dataposition')\r\n      .then((response) =>{\r\n        return response.json()\r\n      })\r\n      .then((data) => data)\r\n  }\n\n//# sourceURL=webpack://accounting-app/./public/category-edit/js/module/dataFromServer.js?");

/***/ }),

/***/ "./public/category-edit/js/module/render.js":
/*!**************************************************!*\
  !*** ./public/category-edit/js/module/render.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"addElementInHtml\": () => /* binding */ addElementInHtml\n/* harmony export */ });\nconst allPosition = document.getElementById('allPosition');\r\nconst elementBefore = document.getElementById('input-field');\r\n//const allPosition = document.getElementById('allPosition');\r\n\r\n\r\nconst render = (data) => {\r\n    const currentUrl = window.location.href\r\n    const currentId = currentUrl.split('').slice(31, 67).join('');\r\n \r\n    for(let i = 0; i < data.length; i++) {\r\n        if(currentId === data[i].id) {\r\n            addElementInHtml(data[i].position, data[i].price)\r\n        }\r\n    }\r\n};\r\n\r\nconst addElementInHtml = (position, price) => {\r\n    for(let i = 0; i <position.length; i++) {\r\n        const template = `\r\n        <input id=\"position\" name=\"position\" type=\"text\" class=\"validate newInput\" value=\"${position[i]}\">\r\n        <label for=\"position\"></label>\r\n        <input id=\"price\" name=\"price\" type=\"text\" class=\"validate newInput\" required min=\"1\" value=\"${price[i]}\">\r\n        <span class=\"helper-text\" data-error=\"Введите цену\">Цена</span>\r\n    `;\r\n    let newDiv = document.createElement(\"div\");\r\n    newDiv.classList.add('input-field');\r\n    newDiv.innerHTML = template;\r\n\r\n    allPosition.insertBefore(newDiv, elementBefore);\r\n    }\r\n}\n\n//# sourceURL=webpack://accounting-app/./public/category-edit/js/module/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./public/category-edit/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;