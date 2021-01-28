/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!************************************************!*\
  !*** ./public/category/js/addPositionInCat.js ***!
  \************************************************/
eval("// const addPositionInCat = () => {\r\n    const addPositionBtn = document.getElementById('addPosition');\r\n    const elementBefore = document.getElementById('input-field');\r\n    const allPosition = document.getElementById('allPosition');\r\n\r\n    \r\n    const template = `\r\n        \r\n        <input placeholder=\"Название новой позиции\" id=\"position\" name=\"position\" type=\"text\" class=\"validate newInput\">\r\n\r\n        <input placeholder=\"Введите цену\" id=\"price\" name=\"price\" type=\"text\" class=\"validate newInput\" required min=\"1\">\r\n        <span class=\"helper-text\" data-error=\"Введите цену\">Введите цену</span>\r\n    `;\r\n    addPositionBtn.addEventListener('click', (event) => {\r\n        \r\n\r\n        event.preventDefault();\r\n        let newDiv = document.createElement(\"div\");\r\n        newDiv.classList.add('input-field');\r\n        newDiv.innerHTML = template;\r\n        allPosition.insertBefore(newDiv, elementBefore);\r\n    });\r\n// };\r\n\n\n//# sourceURL=webpack://accounting-app/./public/category/js/addPositionInCat.js?");
/******/ })()
;