/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/repairsTypes.js":
/*!*************************************!*\
  !*** ./src/modules/repairsTypes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar repairsTypes = function repairsTypes() {\n  var tabHeader = document.querySelector('.nav-list-repair'),\n      tabs = document.querySelectorAll('.repair-types-nav__item'),\n      tabContent = document.querySelectorAll('.repair-types-slide');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tabs[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tabs[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (e) {\n    var target = e.target;\n    target = target.closest('.repair-types-nav__item');\n\n    if (target) {\n      tabs.forEach(function (item, index) {\n        if (target === item) {\n          toggleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairsTypes);\n\n//# sourceURL=webpack://3dglo/./src/modules/repairsTypes.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c5ad84d80c1d6d5b407")
/******/ })();
/******/ 
/******/ }
);