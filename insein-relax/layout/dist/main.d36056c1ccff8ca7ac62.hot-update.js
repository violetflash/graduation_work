/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/togglePhone.js":
/*!************************************!*\
  !*** ./src/modules/togglePhone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePhone = function togglePhone() {\n  var mainPhone = document.querySelector('.header-contacts__phone-number-wrap'),\n      hiddenPhone = document.querySelector('.header-contacts__phone-number-accord a');\n  document.addEventListener('click', function (e) {\n    var target = e.target; //Phone show/hide\n\n    if (target.closest('.header-contacts__arrow')) {\n      target = document.querySelector('.header-contacts__arrow');\n      var moveAmount = mainPhone.scrollHeight;\n      var panel = target.previousElementSibling.querySelector('.header-contacts__phone-number-accord');\n\n      if (target.classList.contains('js-opened')) {\n        target.style.transform = 'scale(1.2)';\n        panel.style.transform = \"translateY(0)\";\n        hiddenPhone.style.opacity = 0;\n        target.classList.remove('js-opened');\n        return;\n      }\n\n      target.classList.add('js-opened');\n      target.style.transform = 'scale(-1.2)';\n      panel.style.transform = \"translateY(\".concat(moveAmount, \"px)\");\n      hiddenPhone.style.opacity = 1;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePhone);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePhone.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ff6d4f1712bc3cc92d6")
/******/ })();
/******/ 
/******/ }
);