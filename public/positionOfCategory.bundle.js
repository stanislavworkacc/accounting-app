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

/***/ "./public/positionOfCategory/js/app.js":
/*!*********************************************!*\
  !*** ./public/positionOfCategory/js/app.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/menu.js */ \"./public/positionOfCategory/js/module/menu.js\");\n/* harmony import */ var _module_priceOfPositionInCat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/priceOfPositionInCat.js */ \"./public/positionOfCategory/js/module/priceOfPositionInCat.js\");\n/* harmony import */ var _module_dataFromLocal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/dataFromLocal.js */ \"./public/positionOfCategory/js/module/dataFromLocal.js\");\n/* harmony import */ var _module_eventsPositionOfCat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/eventsPositionOfCat.js */ \"./public/positionOfCategory/js/module/eventsPositionOfCat.js\");\n/* harmony import */ var _module_donePositionForDay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/donePositionForDay.js */ \"./public/positionOfCategory/js/module/donePositionForDay.js\");\n/* harmony import */ var _module_statistic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/statistic.js */ \"./public/positionOfCategory/js/module/statistic.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst sendInfoBtn = document.getElementById('sendInfo');\r\nsendInfoBtn.addEventListener('click', _module_statistic_js__WEBPACK_IMPORTED_MODULE_5__.sendStatistic);\r\n\r\nconst activationProgram = async () => {\r\n    try {\r\n        (0,_module_dataFromLocal_js__WEBPACK_IMPORTED_MODULE_2__.dataFromLocal)();\r\n        await (0,_module_priceOfPositionInCat_js__WEBPACK_IMPORTED_MODULE_1__.priceOfPositionInCat)();\r\n        (0,_module_donePositionForDay_js__WEBPACK_IMPORTED_MODULE_4__.donePositionForDay)();\r\n        (0,_module_menu_js__WEBPACK_IMPORTED_MODULE_0__.menu)();\r\n        console.log('menu')\r\n        ;(0,_module_eventsPositionOfCat_js__WEBPACK_IMPORTED_MODULE_3__.eventsPositionOfCat)();\r\n    } catch (e) {\r\n        console.log('Ошибка', e);\r\n    }\r\n};\r\n\r\nactivationProgram();\r\n\r\n\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/app.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/clearInputs.js":
/*!************************************************************!*\
  !*** ./public/positionOfCategory/js/module/clearInputs.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearInputs\": () => /* binding */ clearInputs\n/* harmony export */ });\nconst clearInputs = () => {\r\n    console.log('here')\r\n    const counterValues = document.querySelectorAll('.counter__value');\r\n    const doneCoffeeForDay = document.getElementById('doneCoffeeForToday');\r\n    const priceOfPosition = document.getElementById('priceOfPosition');\r\n\r\n    doneCoffeeForDay.innerHTML = '';\r\n    priceOfPosition.innerHTML = '';\r\n\r\n    for(let i = 0; i < counterValues.length; i++) {\r\n        counterValues.value = 0;\r\n    }\r\n}\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/clearInputs.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/dataFromLocal.js":
/*!**************************************************************!*\
  !*** ./public/positionOfCategory/js/module/dataFromLocal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataFromLocal\": () => /* binding */ dataFromLocal\n/* harmony export */ });\nconst dataFromLocal = () => {\r\n    const namePosition = document.querySelectorAll('.namePosition');\r\n    const amountPosition = document.querySelectorAll('.counter__value');\r\n\r\n    for(let i = 0; i < namePosition.length; i++) {\r\n        const element = namePosition[i].textContent;\r\n        const elemValue = localStorage.getItem(element);\r\n        amountPosition[i].value = elemValue === null ? 0 : elemValue;\r\n    };\r\n};\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/dataFromLocal.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/donePositionForDay.js":
/*!*******************************************************************!*\
  !*** ./public/positionOfCategory/js/module/donePositionForDay.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"donePositionForDay\": () => /* binding */ donePositionForDay\n/* harmony export */ });\nconst donePositionForDay = () => {\r\n    const doneInput = document.getElementById('doneCoffeeForToday');\r\n    const amountPosition = document.querySelectorAll('.counter__value');\r\n\r\n    let amount = 0;\r\n    for(let i = 0; i < amountPosition.length; i++) {\r\n        amount += Number(amountPosition[i].value);\r\n    }\r\n    doneInput.innerHTML = amount\r\n}\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/donePositionForDay.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/eventsPositionOfCat.js":
/*!********************************************************************!*\
  !*** ./public/positionOfCategory/js/module/eventsPositionOfCat.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventsPositionOfCat\": () => /* binding */ eventsPositionOfCat\n/* harmony export */ });\n/* harmony import */ var _priceForDayCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priceForDayCategory.js */ \"./public/positionOfCategory/js/module/priceForDayCategory.js\");\n/* harmony import */ var _dataFromLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataFromLocal.js */ \"./public/positionOfCategory/js/module/dataFromLocal.js\");\n/* harmony import */ var _clearInputs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearInputs.js */ \"./public/positionOfCategory/js/module/clearInputs.js\");\n/* harmony import */ var _donePositionForDay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donePositionForDay.js */ \"./public/positionOfCategory/js/module/donePositionForDay.js\");\n\r\n\r\n\r\n\r\n\r\nconst element = document.querySelector('.table');\r\nconst resetBtn = document.getElementById('resetAll');\r\n\r\nelement.addEventListener('click', (event) => {\r\n    const target = event.target;\r\n    eventsPositionOfCat(target);\r\n});\r\n\r\nresetBtn.addEventListener('click', () => {\r\n    localStorage.clear();\r\n    (0,_clearInputs_js__WEBPACK_IMPORTED_MODULE_2__.clearInputs)();\r\n});\r\n\r\nconst eventsPositionOfCat = (td) => {\r\n    if(td === undefined) {\r\n        return;\r\n    };\r\n\r\n    if(td.dataset.add === 'add') {\r\n        let namePosition = td.parentNode.childNodes[1].innerHTML;\r\n        let direction = td.dataset.add;\r\n        let inputValue = td.parentNode.childNodes[5].children[0].value;\r\n        let amountHTML = td.parentNode.children[2].childNodes[1]\r\n        amountHTML.value = Number(amountHTML.value) + 1;\r\n        localStorage.setItem(namePosition, amountHTML.value);\r\n\r\n        (0,_priceForDayCategory_js__WEBPACK_IMPORTED_MODULE_0__.priceForDayCategory)(namePosition, direction, inputValue);\r\n        (0,_dataFromLocal_js__WEBPACK_IMPORTED_MODULE_1__.dataFromLocal)();\r\n        (0,_donePositionForDay_js__WEBPACK_IMPORTED_MODULE_3__.donePositionForDay)()\r\n    }\r\n    if(td.dataset.add === 'delete') {\r\n        let namePosition = td.parentNode.childNodes[1].innerHTML;\r\n        let direction = td.dataset.add;\r\n        let inputValue = td.parentNode.childNodes[5].children[0].value;\r\n        let amountHTML = td.parentNode.children[2].childNodes[1];\r\n        amountHTML.value = amountHTML.value <= -1 ? 0 : Number(amountHTML.value) - 1;\r\n\r\n        localStorage.setItem(namePosition, amountHTML.value);\r\n        (0,_priceForDayCategory_js__WEBPACK_IMPORTED_MODULE_0__.priceForDayCategory)(namePosition, direction, inputValue);\r\n        (0,_dataFromLocal_js__WEBPACK_IMPORTED_MODULE_1__.dataFromLocal)();\r\n        (0,_donePositionForDay_js__WEBPACK_IMPORTED_MODULE_3__.donePositionForDay)();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/eventsPositionOfCat.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/menu.js":
/*!*****************************************************!*\
  !*** ./public/positionOfCategory/js/module/menu.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.getElementById('sidebar');\r\n    menuBtn.addEventListener('click', openMenu);\r\n    \r\n    function openMenu() {\r\n        menuBtn.classList.toggle('active');\r\n    };\r\n    console.log('hete')\r\n};\r\n\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/menu.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/positionData.js":
/*!*************************************************************!*\
  !*** ./public/positionOfCategory/js/module/positionData.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"positionData\": () => /* binding */ positionData\n/* harmony export */ });\n/* harmony import */ var _reqToData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reqToData.js */ \"./public/positionOfCategory/js/module/reqToData.js\");\n\r\n\r\nconst positionData = async () => {\r\n    const data = await (0,_reqToData_js__WEBPACK_IMPORTED_MODULE_0__.reqToData)();\r\n    const currentUrl = window.location.href\r\n    const currentId = currentUrl.split('').slice(31, 67).join('');\r\n\r\n    for(let i = 0; i < data.length; i++) {\r\n        if(currentId === data[i].id) {\r\n            console.log('FROM currentPositionOfCategory', data[i].price);\r\n            return [data[i].price, data[i].position];\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/positionData.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/priceForDayCategory.js":
/*!********************************************************************!*\
  !*** ./public/positionOfCategory/js/module/priceForDayCategory.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"priceForDayCategory\": () => /* binding */ priceForDayCategory\n/* harmony export */ });\n/* harmony import */ var _reqToData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reqToData.js */ \"./public/positionOfCategory/js/module/reqToData.js\");\n\r\n\r\nconst priceForDayCategory = (namePosition, direction) => {\r\n    const currentUrl = window.location.href;\r\n    const currentId = currentUrl.split('').slice(31, 67).join('');\r\n    const dayPriceCategory = document.getElementById('priceOfPosition');\r\n\r\n    (0,_reqToData_js__WEBPACK_IMPORTED_MODULE_0__.reqToData)()\r\n        .then(data => {\r\n            data.forEach(category => { \r\n                if(category.id === currentId && direction === 'add') {\r\n                    const idx = category.position.indexOf(namePosition);\r\n                    const pricePosition = category.price[idx]; //string\r\n                    const currentValueHTML = dayPriceCategory.innerHTML;\r\n\r\n                    dayPriceCategory.innerHTML =  Number(pricePosition) + Number(currentValueHTML)\r\n                } else if(category.id === currentId && direction === 'delete') {\r\n                    const idx = category.position.indexOf(namePosition);\r\n                    const pricePosition = Number(category.price[idx]);\r\n                    const currentValueHTML = dayPriceCategory.innerHTML;\r\n\r\n                    const valueMinus = currentValueHTML - pricePosition;\r\n                    dayPriceCategory.innerHTML -= valueMinus <= 0 ? 0 : pricePosition;\r\n                }\r\n            })\r\n        })\r\n    \r\n}\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/priceForDayCategory.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/priceOfPositionInCat.js":
/*!*********************************************************************!*\
  !*** ./public/positionOfCategory/js/module/priceOfPositionInCat.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"priceOfPositionInCat\": () => /* binding */ priceOfPositionInCat\n/* harmony export */ });\n/* harmony import */ var _positionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionData.js */ \"./public/positionOfCategory/js/module/positionData.js\");\n\r\n\r\n\r\nconst priceOfPositionInCat =  async () => {\r\n    const priceOfPositionHTML = document.querySelectorAll('.price');\r\n    const priceOfPositionData = await (0,_positionData_js__WEBPACK_IMPORTED_MODULE_0__.positionData)();\r\n\r\n    for(let i = 0; i < priceOfPositionHTML.length; i++) {\r\n        priceOfPositionHTML[i].innerHTML = String(priceOfPositionData[0][i])\r\n    }\r\n};\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/priceOfPositionInCat.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/reqToData.js":
/*!**********************************************************!*\
  !*** ./public/positionOfCategory/js/module/reqToData.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reqToData\": () => /* binding */ reqToData\n/* harmony export */ });\nconst reqToData = () => {\r\n  return fetch('/category/dataposition')\r\n    .then((response) =>{\r\n      return response.json()\r\n    })\r\n    .then((data) => data)\r\n};\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/reqToData.js?");

/***/ }),

/***/ "./public/positionOfCategory/js/module/statistic.js":
/*!**********************************************************!*\
  !*** ./public/positionOfCategory/js/module/statistic.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendStatistic\": () => /* binding */ sendStatistic\n/* harmony export */ });\nconst sendStatistic = () => {\r\n    const name = document.querySelectorAll('.namePosition');\r\n    const price = document.querySelectorAll('.price');\r\n    const amount = document.querySelectorAll('.counter__value');\r\n\r\n    let data = []\r\n\r\n    for(let i = 0; i < name.length; i++) {\r\n\r\n        data.push(\r\n            {\r\n                name: name[i].innerHTML,\r\n                amount: amount[i].value,\r\n                price: price[i].innerHTML\r\n            }\r\n        )\r\n    }\r\n\r\n    let xhr = new XMLHttpRequest();\r\n    let url = 'http://localhost:3200/statistic';\r\n    xhr.open('POST', url, true);\r\n    xhr.setRequestHeader(\"Content-Type\", \"application/json\");\r\n    xhr.send(JSON.stringify(data));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://accounting-app/./public/positionOfCategory/js/module/statistic.js?");

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
/******/ 	__webpack_require__("./public/positionOfCategory/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;