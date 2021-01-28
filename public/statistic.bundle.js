/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./public/statistic/app.js ***!
  \*********************************/
eval("const sumCategory = () => {\r\n    const priceOfPositions = document.querySelectorAll('.price');\r\n    const amountOfPositions = document.querySelectorAll('.amount');\r\n    const sumOfPositionsTd = document.querySelectorAll('.sumOfPosition');\r\n    const sumOfMoney = document.querySelector('.sumOfMoney');\r\n\r\n\r\n    let sumPerDayCategory = 0;\r\n    for(let i = 0; i < priceOfPositions.length; i++) {\r\n        let sumOfPosition = \r\n            priceOfPositions[i].innerHTML * amountOfPositions[i].innerHTML;\r\n        sumOfPositionsTd[i].innerHTML = sumOfPosition;\r\n        sumPerDayCategory += sumOfPosition;\r\n        \r\n    };\r\n    sumOfMoney.innerHTML = sumPerDayCategory;\r\n};\r\n\r\nsumCategory();\n\n//# sourceURL=webpack://accounting-app/./public/statistic/app.js?");
/******/ })()
;