/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/homepage/BoardPreview.tsx":
/*!**************************************************!*\
  !*** ./src/components/homepage/BoardPreview.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/martinbalke/coding/trello-clone/src/components/homepage/BoardPreview.tsx\";\n\n\n\n\n\n\nconst BoardPreview = ({\n  backgroundImage,\n  title,\n  favorite\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    bgPosition: \"center\",\n    bgSize: \"cover\",\n    p: \"2\",\n    m: \"2\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: \"/sampleBackground.jpeg\",\n      alt: \"me\",\n      width: \"100%\",\n      height: \"100%\",\n      posi: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      fontSize: \"l\",\n      fontWeight: \"700\",\n      color: \"white\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n      \"aria-label\": \"favorite board\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {\n        fill: favorite ? 'yellow' : 'none'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }, undefined);\n};\n\n_c = BoardPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9hcmRQcmV2aWV3LnRzeD9iYzlhIl0sIm5hbWVzIjpbIkJvYXJkUHJldmlldyIsImJhY2tncm91bmRJbWFnZSIsInRpdGxlIiwiZmF2b3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUNDLGlCQUFEO0FBQWtCQyxPQUFsQjtBQUF5QkM7QUFBekIsQ0FBRCxLQUErQztBQUNsRSxzQkFDQSw4REFBQyxtREFBRDtBQUFNLGNBQVUsRUFBQyxRQUFqQjtBQUEwQixVQUFNLEVBQUMsT0FBakM7QUFBeUMsS0FBQyxFQUFDLEdBQTNDO0FBQStDLEtBQUMsRUFBQyxHQUFqRDtBQUFBLDRCQUNDLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFDLHdCQUFYO0FBQW9DLFNBQUcsRUFBQyxJQUF4QztBQUE2QyxXQUFLLEVBQUMsTUFBbkQ7QUFBMEQsWUFBTSxFQUFDLE1BQWpFO0FBQXdFLFVBQUk7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLDhEQUFDLG1EQUFEO0FBQU0sY0FBUSxFQUFDLEdBQWY7QUFBbUIsZ0JBQVUsRUFBQyxLQUE5QjtBQUFvQyxXQUFLLEVBQUMsT0FBMUM7QUFBQSxnQkFDRUQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELGVBS0MsOERBQUMseURBQUQ7QUFDQyxvQkFBVyxnQkFEWjtBQUVDLGNBQVEsZUFBRSw4REFBQyxzREFBRDtBQUFVLFlBQUksRUFBRUMsUUFBUSxHQUFHLFFBQUgsR0FBYztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQVlELENBYkQ7O0tBQU1ILFk7QUFlTiwrREFBZUEsWUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL0JvYXJkUHJldmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IEZsZXgsIFRleHQsIH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vLi4vdHlwZXMvYm9hcmRSZWxhdGVkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5cbmNvbnN0IEJvYXJkUHJldmlldyA9ICh7YmFja2dyb3VuZEltYWdlLCB0aXRsZSwgZmF2b3JpdGV9OiBCb2FyZCkgPT4ge1xuICByZXR1cm4gKFxuXHRcdDxGbGV4IGJnUG9zaXRpb249J2NlbnRlcicgYmdTaXplPSdjb3ZlcicgcD0nMicgbT0nMic+XG5cdFx0XHQ8SW1hZ2Ugc3JjPScvc2FtcGxlQmFja2dyb3VuZC5qcGVnJyBhbHQ9J21lJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBwb3NpIC8+XG5cdFx0XHQ8VGV4dCBmb250U2l6ZT0nbCcgZm9udFdlaWdodD0nNzAwJyBjb2xvcj0nd2hpdGUnPlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRhcmlhLWxhYmVsPSdmYXZvcml0ZSBib2FyZCdcblx0XHRcdFx0Y2hpbGRyZW49ezxTdGFySWNvbiBmaWxsPXtmYXZvcml0ZSA/ICd5ZWxsb3cnIDogJ25vbmUnfSAvPn1cblx0XHRcdC8+XG5cdFx0PC9GbGV4PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRQcmV2aWV3OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/homepage/BoardPreview.tsx\n");

/***/ })

});