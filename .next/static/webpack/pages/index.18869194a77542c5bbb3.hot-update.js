/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/homepage/HomePage.tsx":
/*!**********************************************!*\
  !*** ./src/components/homepage/HomePage.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardPreviewContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardPreviewContainer */ \"./src/components/homepage/BoardPreviewContainer.tsx\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ \"./src/components/homepage/SideBar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/martinbalke/coding/trello-clone/src/components/homepage/HomePage.tsx\";\n\n\n\n\n\nconst sampleBoards = [{\n  title: 'Some board',\n  favorite: true\n}, {\n  title: 'Some board 2',\n  favorite: false\n}];\n\nconst HomePage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n    my: \"10\",\n    mx: \"24\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardPreviewContainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.TimeIcon, {\n        h: \"40px\",\n        w: \"30px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 37\n      }, undefined),\n      heading: \"Recenty Viewed\",\n      boards: sampleBoards\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, undefined);\n};\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvSG9tZVBhZ2UudHN4PzdmYWUiXSwibmFtZXMiOlsic2FtcGxlQm9hcmRzIiwidGl0bGUiLCJmYXZvcml0ZSIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUEsTUFBTUEsWUFBMEIsR0FBRyxDQUNsQztBQUNDQyxPQUFLLEVBQUUsWUFEUjtBQUVDQyxVQUFRLEVBQUU7QUFGWCxDQURrQyxFQUtsQztBQUNDRCxPQUFLLEVBQUUsY0FEUjtBQUVDQyxVQUFRLEVBQUU7QUFGWCxDQUxrQyxDQUFuQzs7QUFXQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixzQkFDQSw4REFBQyxtREFBRDtBQUFNLE1BQUUsRUFBQyxJQUFUO0FBQWMsTUFBRSxFQUFDLElBQWpCO0FBQUEsNEJBQ0MsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVJLDhEQUFDLDJEQUFEO0FBQXdCLFVBQUksZUFBRSw4REFBQyxzREFBRDtBQUFVLFNBQUMsRUFBQyxNQUFaO0FBQW1CLFNBQUMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE5QjtBQUE4RCxhQUFPLEVBQUMsZ0JBQXRFO0FBQXVGLFlBQU0sRUFBRUg7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQU1ELENBUEQ7O0tBQU1HLFE7QUFTTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL0hvbWVQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBUaW1lSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vLi4vdHlwZXMvYm9hcmQnO1xuaW1wb3J0IEJvYXJkUHJldmlld0NvbnRhaW5lciBmcm9tICcuL0JvYXJkUHJldmlld0NvbnRhaW5lcic7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL1NpZGVCYXInO1xuXG5jb25zdCBzYW1wbGVCb2FyZHM6IEFycmF5PEJvYXJkPiA9IFtcblx0e1xuXHRcdHRpdGxlOiAnU29tZSBib2FyZCcsXG5cdFx0ZmF2b3JpdGU6IHRydWUsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1NvbWUgYm9hcmQgMicsXG5cdFx0ZmF2b3JpdGU6IGZhbHNlLFxuXHR9LFxuXTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cdFx0PEZsZXggbXk9JzEwJyBteD0nMjQnPlxuXHRcdFx0PFNpZGVCYXIvPlxuICAgICAgPEJvYXJkUHJldmlld0NvbnRhaW5lciAgaWNvbj17PFRpbWVJY29uIGg9JzQwcHgnIHc9JzMwcHgnIC8+fSBoZWFkaW5nPSdSZWNlbnR5IFZpZXdlZCcgYm9hcmRzPXtzYW1wbGVCb2FyZHMgfS8+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/homepage/HomePage.tsx\n");

/***/ })

});