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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardPreview */ \"./src/components/homepage/BoardPreview.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/martinbalke/coding/trello-clone/src/components/homepage/BoardPreviewContainer.tsx\";\n\n\n\n\nconst BoardPreviewContainer = ({\n  heading,\n  boards,\n  icon\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    flexDirection: \"column\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n          alignItems: \"center\",\n          children: [icon, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n            fontSize: \"xl\",\n            ml: \"2\",\n            children: heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 6\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n          children: boards.map(board => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardPreview__WEBPACK_IMPORTED_MODULE_2__.default, {\n            title: board.title,\n            favorite: board.favorite,\n            backgroundImage: board.backgroundImage\n          }, board.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 9\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 6\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, undefined);\n};\n\n_c = BoardPreviewContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardPreviewContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPreviewContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9hcmRQcmV2aWV3Q29udGFpbmVyLnRzeD8xYTk0Il0sIm5hbWVzIjpbIkJvYXJkUHJldmlld0NvbnRhaW5lciIsImhlYWRpbmciLCJib2FyZHMiLCJpY29uIiwibWFwIiwiYm9hcmQiLCJ0aXRsZSIsImZhdm9yaXRlIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVFBLE1BQU1BLHFCQUFxQixHQUFHLENBQUM7QUFBRUMsU0FBRjtBQUFXQyxRQUFYO0FBQW1CQztBQUFuQixDQUFELEtBQXNDO0FBQ25FLHNCQUNDLDhEQUFDLG1EQUFEO0FBQU0saUJBQWEsRUFBQyxRQUFwQjtBQUFBLDRCQUNDLDhEQUFDLG1EQUFEO0FBQUEsNkJBQ0MsOERBQUMsa0RBQUQ7QUFBQSxnQ0FDQyw4REFBQyxtREFBRDtBQUFNLG9CQUFVLEVBQUMsUUFBakI7QUFBQSxxQkFDQ0EsSUFERCxlQUVBLDhEQUFDLHNEQUFEO0FBQVMsb0JBQVEsRUFBQyxJQUFsQjtBQUF1QixjQUFFLEVBQUMsR0FBMUI7QUFBQSxzQkFBK0JGO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBS0MsOERBQUMsbURBQUQ7QUFBQSxvQkFDRUMsTUFBTSxDQUFDRSxHQUFQLENBQ0NDLEtBQUQsaUJBQ0MsOERBQUMsa0RBQUQ7QUFBZ0MsaUJBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUE3QztBQUFvRCxvQkFBUSxFQUFFRCxLQUFLLENBQUNFLFFBQXBFO0FBQThFLDJCQUFlLEVBQUdGLEtBQUssQ0FBQ0c7QUFBdEcsYUFBbUJILEtBQUssQ0FBQ0MsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQWdCQyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQW9CQSxDQXJCRDs7S0FBTU4scUI7QUF1Qk4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9hcmRQcmV2aWV3Q29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4uLy4uL3R5cGVzL2JvYXJkUmVsYXRlZCc7XG5pbXBvcnQgQm9hcmRQcmV2aWV3IGZyb20gJy4vQm9hcmRQcmV2aWV3JztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0aGVhZGluZzogc3RyaW5nO1xuXHRpY29uOiBKU1guRWxlbWVudDtcblx0Ym9hcmRzOiBBcnJheTxCb2FyZD47XG59XG5cbmNvbnN0IEJvYXJkUHJldmlld0NvbnRhaW5lciA9ICh7IGhlYWRpbmcsIGJvYXJkcywgaWNvbiB9OiBQcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxGbGV4IGZsZXhEaXJlY3Rpb249J2NvbHVtbic+XG5cdFx0XHQ8RmxleD5cblx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHQ8RmxleCBhbGlnbkl0ZW1zPSdjZW50ZXInPlxuXHRcdFx0XHRcdHtpY29ufVxuXHRcdFx0XHRcdDxIZWFkaW5nIGZvbnRTaXplPSd4bCcgbWw9JzInPntoZWFkaW5nfTwvSGVhZGluZz5cblx0XHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdFx0PEZsZXg+XG5cdFx0XHRcdFx0XHR7Ym9hcmRzLm1hcChcblx0XHRcdFx0XHRcdFx0KGJvYXJkOiBCb2FyZCk6IEpTWC5FbGVtZW50ID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8Qm9hcmRQcmV2aWV3IGtleT17Ym9hcmQudGl0bGV9IHRpdGxlPXtib2FyZC50aXRsZX0gZmF2b3JpdGU9e2JvYXJkLmZhdm9yaXRlfSBiYWNrZ3JvdW5kSW1hZ2U9eyBib2FyZC5iYWNrZ3JvdW5kSW1hZ2V9Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9GbGV4PlxuXHRcdFx0PEZsZXg+PC9GbGV4PlxuXHRcdDwvRmxleD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkUHJldmlld0NvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/homepage/BoardPreviewContainer.tsx\n");

/***/ })

});