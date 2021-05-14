/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/tooltipHandler.js":
/*!***************************************!*\
  !*** ./src/modules/tooltipHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//TODO z index\nvar tooltipHandler = function tooltipHandler() {\n  var formulaSection = document.getElementById('formula');\n  formulaSection.addEventListener('mouseover', function (e) {\n    var target = e.target;\n\n    if (target.closest('.formula-item')) {\n      target = target.closest('.formula-item');\n      var itemHeight = target.clientHeight;\n      var tooltip = target.querySelector('.formula-item-popup'); // console.log(tooltip.getBoundingClientRect().top)\n\n      var tooltipHeight = tooltip.clientHeight; // const tooltipBottom = window.innerHeight - tooltip.getBoundingClientRect().top - tooltip.offsetHeight;\n      // const distanceBetween = tooltipBottom - target.getBoundingClientRect().top;\n\n      var distance = itemHeight + tooltipHeight + 20;\n\n      if (target.getBoundingClientRect().top < tooltipHeight + 20) {\n        target.classList.add('js-inversed');\n        target.closest('.row').style.zIndex = 1;\n        tooltip.style.transform = \"translateY(\".concat(distance, \"px)\");\n      } else {\n        target.closest('.row').style.zIndex = 'initial';\n        target.classList.remove('js-inversed');\n        tooltip.style.transform = \"translateY(0)\";\n      }\n\n      target.classList.add('active-item');\n    }\n  });\n  formulaSection.addEventListener('mouseout', function (e) {\n    var target = e.target;\n\n    if (target.closest('.formula-item')) {\n      target = target.closest('.formula-item');\n      target.classList.remove('active-item');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipHandler);\n\n//# sourceURL=webpack://3dglo/./src/modules/tooltipHandler.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b20248b1fc0a8242051e")
/******/ })();
/******/ 
/******/ }
);