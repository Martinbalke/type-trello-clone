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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ \"./src/store/index.tsx\");\n/* harmony import */ var _BoardPreviewContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardPreviewContainer */ \"./src/components/homepage/BoardPreviewContainer.tsx\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideBar */ \"./src/components/homepage/SideBar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/martinbalke/coding/trello-clone/src/components/homepage/HomePage.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst sampleBoards = [{\n  title: 'Some board',\n  favorite: true\n}, {\n  title: 'Some board 2',\n  favorite: false\n}];\n\nconst HomePage = () => {\n  _s();\n\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store__WEBPACK_IMPORTED_MODULE_3__.default);\n  const {\n    boards\n  } = store;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n    my: \"10\",\n    mx: \"24\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardPreviewContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.TimeIcon, {\n        h: \"40px\",\n        w: \"30px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, undefined),\n      heading: \"Recenty Viewed\",\n      boards: boards\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(HomePage, \"Wl1jJrZzTCxjtMcqth/dX4wg3Uo=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(HomePage));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvSG9tZVBhZ2UudHN4PzdmYWUiXSwibmFtZXMiOlsic2FtcGxlQm9hcmRzIiwidGl0bGUiLCJmYXZvcml0ZSIsIkhvbWVQYWdlIiwic3RvcmUiLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJib2FyZHMiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFlBQTBCLEdBQUcsQ0FDbEM7QUFDQ0MsT0FBSyxFQUFFLFlBRFI7QUFFQ0MsVUFBUSxFQUFFO0FBRlgsQ0FEa0MsRUFLbEM7QUFDQ0QsT0FBSyxFQUFFLGNBRFI7QUFFQ0MsVUFBUSxFQUFFO0FBRlgsQ0FMa0MsQ0FBbkM7O0FBV0EsTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDdEIsUUFBTUMsS0FBSyxHQUFHQyxpREFBVSxDQUFDQywyQ0FBRCxDQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFhSCxLQUFuQjtBQUVBLHNCQUNDLDhEQUFDLG1EQUFEO0FBQU0sTUFBRSxFQUFDLElBQVQ7QUFBYyxNQUFFLEVBQUMsSUFBakI7QUFBQSw0QkFDQyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMsOERBQUMsMkRBQUQ7QUFDQyxVQUFJLGVBQUUsOERBQUMsc0RBQUQ7QUFBVSxTQUFDLEVBQUMsTUFBWjtBQUFtQixTQUFDLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUDtBQUVDLGFBQU8sRUFBQyxnQkFGVDtBQUdDLFlBQU0sRUFBRUc7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBVUEsQ0FkRDs7R0FBTUosUTs7S0FBQUEsUTtBQWdCTiwrREFBZSxNQUFBSyx5REFBUSxDQUFDTCxRQUFELENBQXZCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvSG9tZVBhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IEZsZXggfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vLi4vdHlwZXMvYm9hcmQnO1xuaW1wb3J0IEJvYXJkUHJldmlld0NvbnRhaW5lciBmcm9tICcuL0JvYXJkUHJldmlld0NvbnRhaW5lcic7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL1NpZGVCYXInO1xuXG5jb25zdCBzYW1wbGVCb2FyZHM6IEFycmF5PEJvYXJkPiA9IFtcblx0e1xuXHRcdHRpdGxlOiAnU29tZSBib2FyZCcsXG5cdFx0ZmF2b3JpdGU6IHRydWUsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1NvbWUgYm9hcmQgMicsXG5cdFx0ZmF2b3JpdGU6IGZhbHNlLFxuXHR9LFxuXTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHN0b3JlID0gdXNlQ29udGV4dChTdG9yZSk7XG5cdGNvbnN0IHsgYm9hcmRzIH0gPSBzdG9yZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGbGV4IG15PScxMCcgbXg9JzI0Jz5cblx0XHRcdDxTaWRlQmFyIC8+XG5cdFx0XHQ8Qm9hcmRQcmV2aWV3Q29udGFpbmVyXG5cdFx0XHRcdGljb249ezxUaW1lSWNvbiBoPSc0MHB4JyB3PSczMHB4JyAvPn1cblx0XHRcdFx0aGVhZGluZz0nUmVjZW50eSBWaWV3ZWQnXG5cdFx0XHRcdGJvYXJkcz17Ym9hcmRzfVxuXHRcdFx0Lz5cblx0XHQ8L0ZsZXg+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihIb21lUGFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/homepage/HomePage.tsx\n");

/***/ })

});