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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar repairsTypes = function repairsTypes() {\n  var tabHeader = document.querySelector('.nav-list-repair'),\n      tabs = document.querySelectorAll('.repair-types-nav__item'),\n      tabContent = document.querySelectorAll('.repair-types-content'),\n      slider = document.querySelector('.repair-types-slider-wrap');\n  var slides;\n  var currentSlide = 0;\n\n  var hideElement = function hideElement(elem, index, activeClass) {\n    elem[index].classList.remove(activeClass);\n  };\n\n  var showElement = function showElement(elem, index, activeClass) {\n    elem[index].classList.add(activeClass);\n  };\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tabs[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tabs[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (e) {\n    var target = e.target;\n    target = target.closest('.repair-types-nav__item');\n\n    if (target) {\n      tabs.forEach(function (item, index) {\n        if (target === item) {\n          toggleTabContent(index);\n          slides = tabContent[index].querySelectorAll('.repair-types-slider__slide');\n        }\n      });\n    }\n  });\n  slider.addEventListener('click', function (event) {\n    console.log(slides.length); // event.preventDefault();\n\n    var target = event.target;\n    console.log('click');\n\n    if (target.classList.contains('slider-arrow')) {\n      console.log('hit!');\n      return;\n    } // hideElement(slides, currentSlide, '.slider-item-active');\n\n\n    if (target.id === 'repair-types-arrow_right') {\n      console.log('right');\n      currentSlide++;\n\n      if (currentSlide === slides.length) {\n        currentSlide = 0;\n      }\n    } else if (target.id === 'repair-types-arrow_left') {\n      console.log('left');\n      currentSlide--;\n\n      if (currentSlide < 0) {\n        currentSlide = slides.length - 1;\n      }\n    }\n\n    showElement(slides, currentSlide, '.slider-item-active');\n  }); // const autoPlay = () => {\n  //   hideElement(slides, currentSlide, 'd-none');\n  //\n  //   currentSlide++;\n  //   if (currentSlide === slides.length) {\n  //     currentSlide = 0;\n  //   }\n  //   showElement(slides, currentSlide, 'd-none');\n  //\n  // };\n  //\n  // const startSlide = (time = 3000) => {\n  //   interval = setInterval(autoPlay, time);\n  // };\n  //\n  // const stopSlide = () => {\n  //   clearInterval(interval);\n  // };\n  // slider.addEventListener('mouseover', (e) => {\n  //   const target = e.target;\n  //   if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n  //     stopSlide();\n  //   }\n  // });\n  // slider.addEventListener('mouseout', (e) => {\n  //   if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {\n  //     startSlide();\n  //   }\n  // });\n  // startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairsTypes);\n\n//# sourceURL=webpack://3dglo/./src/modules/repairsTypes.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("27ca64c1455a77fbf594")
/******/ })();
/******/ 
/******/ }
);