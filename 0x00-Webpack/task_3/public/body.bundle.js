(self["webpackChunktask_3"] = self["webpackChunktask_3"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append('<button>Click here to get started</button>');
jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append('<p id="count"></p>');

let counter = 0;

function updateCounter() {
  counter++;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("#count").html(`${counter} clicks on the button`);
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()('button').on('click', lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(updateCounter, 500));


/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(2:7) /home/michael/alx-react/0x00-Webpack/task_3/modules/body/body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQjtBQUNHO0FBQ0E7O0FBRXZCLDZDQUFDO0FBQ0QsNkNBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkNBQUMsbUJBQW1CLFNBQVM7QUFDL0I7O0FBRUEsNkNBQUMsdUJBQXVCLHNEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza18zLy4vbW9kdWxlcy9ib2R5L2JvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2JvZHkuY3NzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4kKCdib2R5JykuYXBwZW5kKCc8YnV0dG9uPkNsaWNrIGhlcmUgdG8gZ2V0IHN0YXJ0ZWQ8L2J1dHRvbj4nKTtcbiQoJ2JvZHknKS5hcHBlbmQoJzxwIGlkPVwiY291bnRcIj48L3A+Jyk7XG5cbmxldCBjb3VudGVyID0gMDtcblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpIHtcbiAgY291bnRlcisrO1xuICAkKFwiI2NvdW50XCIpLmh0bWwoYCR7Y291bnRlcn0gY2xpY2tzIG9uIHRoZSBidXR0b25gKTtcbn1cblxuJCgnYnV0dG9uJykub24oJ2NsaWNrJywgXy5kZWJvdW5jZSh1cGRhdGVDb3VudGVyLCA1MDApKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==