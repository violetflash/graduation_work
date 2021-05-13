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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menuWrapper = document.querySelector('.popup-menu'),\n      menu = menuWrapper.querySelector('.popup-dialog-menu'); //Блокировка прокрутки при открытом меню\n  //TODO избавиться от скачка при появлении скроллбара\n\n  var translate3d = 'translate3d(645px, 0, 0)';\n\n  if (document.documentElement.clientWidth < 576) {\n    menu.style.transform = 'translate3d(0, 100%, 0)';\n    translate3d = 'translate3d(0, 100%, 0)';\n  }\n\n  var openMenu = function openMenu() {\n    menuWrapper.style.visibility = 'visible';\n    menu.style.transform = 'translate3d(0, 0, 0)';\n    menu.style.visibility = 'visible';\n    document.body.classList.add('js-locked');\n  };\n\n  var closeMenu = function closeMenu() {\n    menuWrapper.style.visibility = 'hidden';\n    menu.style.transform = translate3d;\n    menu.style.visibility = 'hidden';\n    document.body.classList.remove('js-locked');\n  };\n\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.closest('.menu')) {\n      openMenu();\n      return;\n    } //исключаем само меню и <a> внутри него\n\n\n    if (target.closest('.close-menu') || target.closest('.popup-menu-main a')) {\n      closeMenu();\n      return;\n    }\n\n    target = target.closest('.popup-dialog-menu'); // если клик не по меню\n\n    if (!target) {\n      closeMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d889fef71c8e407ac7fd")
/******/ })();
/******/ 
/******/ }
);