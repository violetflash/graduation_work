/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menuWrapper = document.querySelector('.popup-menu'),\n      menu = menuWrapper.querySelector('.popup-dialog-menu');\n\n  var openMenu = function openMenu() {\n    menuWrapper.style.visibility = 'visible'; // const styles = window.getComputedStyle(menu).transform;\n\n    menu.style.transform = 'translate3d(0, 0, 0)';\n  };\n\n  var closeMenu = function closeMenu() {\n    menuWrapper.style.visibility = 'hidden';\n  };\n\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.closest('.menu')) {\n      openMenu();\n    } else {\n      //исключаем само меню и li внутри него\n      if (target.closest('.menu') && target.hasAttribute('href') && target !== menu) {\n        closeMenu();\n      }\n\n      target = target.closest('.menu'); //если клик не по меню\n\n      if (!target) {\n        menuWrapper.style.visibility = 'hidden';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7f50dbf5ae69a548f328")
/******/ })();
/******/ 
/******/ }
);