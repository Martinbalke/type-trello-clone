/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/homepage/BoardPreviewContainer.tsx":
/*!***********************************************************!*\
  !*** ./src/components/homepage/BoardPreviewContainer.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardPreview */ \"./src/components/homepage/BoardPreview.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/martinbalke/coding/trello-clone/src/components/homepage/BoardPreviewContainer.tsx\";\n\n\n\n\nconst BoardPreviewContainer = ({\n  heading,\n  boards,\n  icon\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    flexDirection: \"column\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n          children: [icon, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n            children: heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 6\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n          children: boards.map(board => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardPreview__WEBPACK_IMPORTED_MODULE_2__.default, {\n            title: board.title,\n            favorite: board.favorite,\n            backgroundImage: board.backgroundImage\n          }, board.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 9\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 6\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, undefined);\n};\n\n_c = BoardPreviewContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardPreviewContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPreviewContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9hcmRQcmV2aWV3Q29udGFpbmVyLnRzeD8xYTk0Il0sIm5hbWVzIjpbIkJvYXJkUHJldmlld0NvbnRhaW5lciIsImhlYWRpbmciLCJib2FyZHMiLCJpY29uIiwibWFwIiwiYm9hcmQiLCJ0aXRsZSIsImZhdm9yaXRlIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVFBLE1BQU1BLHFCQUFxQixHQUFHLENBQUM7QUFBRUMsU0FBRjtBQUFXQyxRQUFYO0FBQW1CQztBQUFuQixDQUFELEtBQXNDO0FBQ25FLHNCQUNDLDhEQUFDLG1EQUFEO0FBQU0saUJBQWEsRUFBQyxRQUFwQjtBQUFBLDRCQUNDLDhEQUFDLG1EQUFEO0FBQUEsNkJBQ0MsOERBQUMsa0RBQUQ7QUFBQSxnQ0FDQyw4REFBQyxtREFBRDtBQUFBLHFCQUNDQSxJQURELGVBRUEsOERBQUMsc0RBQUQ7QUFBQSxzQkFBVUY7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUtDLDhEQUFDLG1EQUFEO0FBQUEsb0JBQ0VDLE1BQU0sQ0FBQ0UsR0FBUCxDQUNDQyxLQUFELGlCQUNDLDhEQUFDLGtEQUFEO0FBQWdDLGlCQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBN0M7QUFBb0Qsb0JBQVEsRUFBRUQsS0FBSyxDQUFDRSxRQUFwRTtBQUE4RSwyQkFBZSxFQUFHRixLQUFLLENBQUNHO0FBQXRHLGFBQW1CSCxLQUFLLENBQUNDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFnQkMsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFvQkEsQ0FyQkQ7O0tBQU1OLHFCO0FBdUJOLCtEQUFlQSxxQkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL0JvYXJkUHJldmlld0NvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi8uLi90eXBlcy9ib2FyZFJlbGF0ZWQnO1xuaW1wb3J0IEJvYXJkUHJldmlldyBmcm9tICcuL0JvYXJkUHJldmlldyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGhlYWRpbmc6IHN0cmluZztcblx0aWNvbjogSlNYLkVsZW1lbnQ7XG5cdGJvYXJkczogQXJyYXk8Qm9hcmQ+O1xufVxuXG5jb25zdCBCb2FyZFByZXZpZXdDb250YWluZXIgPSAoeyBoZWFkaW5nLCBib2FyZHMsIGljb24gfTogUHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8RmxleCBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nPlxuXHRcdFx0PEZsZXg+XG5cdFx0XHRcdDxCb3g+XG5cdFx0XHRcdFx0PEZsZXg+XG5cdFx0XHRcdFx0e2ljb259XG5cdFx0XHRcdFx0PEhlYWRpbmc+e2hlYWRpbmd9PC9IZWFkaW5nPlxuXHRcdFx0XHRcdDwvRmxleD5cblx0XHRcdFx0XHQ8RmxleD5cblx0XHRcdFx0XHRcdHtib2FyZHMubWFwKFxuXHRcdFx0XHRcdFx0XHQoYm9hcmQ6IEJvYXJkKTogSlNYLkVsZW1lbnQgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxCb2FyZFByZXZpZXcga2V5PXtib2FyZC50aXRsZX0gdGl0bGU9e2JvYXJkLnRpdGxlfSBmYXZvcml0ZT17Ym9hcmQuZmF2b3JpdGV9IGJhY2tncm91bmRJbWFnZT17IGJvYXJkLmJhY2tncm91bmRJbWFnZX0vPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvRmxleD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0XHQ8RmxleD48L0ZsZXg+XG5cdFx0PC9GbGV4PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRQcmV2aWV3Q29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/homepage/BoardPreviewContainer.tsx\n");

/***/ })

});