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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/martinbalke/coding/trello-clone/src/components/homepage/BoardPreview.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst BoardPreview = ({\n  backgroundImage,\n  title,\n  favorite\n}) => {\n  _s();\n\n  const {\n    0: localFavorite,\n    1: setLocalFavorite\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(favorite);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    m: \"2\",\n    position: \"relative\",\n    height: \"125px\",\n    width: \"250px\",\n    borderRadius: \"5px\",\n    overflow: \"hidden\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      w: \"100%\",\n      h: \"100%\",\n      position: \"absolute\",\n      top: \"0\",\n      zIndex: \"-1\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: \"/sampleBackground.jpeg\",\n        layout: \"fill\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      fontSize: \"xl\",\n      fontWeight: \"700\",\n      color: \"white\",\n      mx: \"4\",\n      my: \"2\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n      variant: \"ghost\",\n      \"aria-label\": \"favorite board\",\n      position: \"absolute\",\n      bottom: \"0\",\n      right: \"0\",\n      color: favorite ? 'gold' : 'black',\n      _hover: {\n        bg: 'none',\n        color: localFavorite ? 'black' : 'gold'\n      } // onClick={ () => favorite = !favorite }\n      ,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(BoardPreview, \"v45obwnSnWHP5tCQ49ycx6my5Go=\");\n\n_c = BoardPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9hcmRQcmV2aWV3LnRzeD9iYzlhIl0sIm5hbWVzIjpbIkJvYXJkUHJldmlldyIsImJhY2tncm91bmRJbWFnZSIsInRpdGxlIiwiZmF2b3JpdGUiLCJsb2NhbEZhdm9yaXRlIiwic2V0TG9jYWxGYXZvcml0ZSIsInVzZVN0YXRlIiwiYmciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUMsaUJBQUY7QUFBbUJDLE9BQW5CO0FBQTBCQztBQUExQixDQUFELEtBQWlEO0FBQUE7O0FBQ3JFLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQywrQ0FBUSxDQUFDSCxRQUFELENBQWxEO0FBQ0Esc0JBQ0MsOERBQUMsbURBQUQ7QUFDQyxLQUFDLEVBQUMsR0FESDtBQUVDLFlBQVEsRUFBQyxVQUZWO0FBR0MsVUFBTSxFQUFDLE9BSFI7QUFJQyxTQUFLLEVBQUMsT0FKUDtBQUtDLGdCQUFZLEVBQUMsS0FMZDtBQU1DLFlBQVEsRUFBQyxRQU5WO0FBQUEsNEJBUUMsOERBQUMsa0RBQUQ7QUFBSyxPQUFDLEVBQUMsTUFBUDtBQUFjLE9BQUMsRUFBQyxNQUFoQjtBQUF1QixjQUFRLEVBQUMsVUFBaEM7QUFBMkMsU0FBRyxFQUFDLEdBQS9DO0FBQW1ELFlBQU0sRUFBQyxJQUExRDtBQUFBLDZCQUNDLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFDLHdCQUFYO0FBQW9DLGNBQU0sRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRCxlQVdDLDhEQUFDLG1EQUFEO0FBQU0sY0FBUSxFQUFDLElBQWY7QUFBb0IsZ0JBQVUsRUFBQyxLQUEvQjtBQUFxQyxXQUFLLEVBQUMsT0FBM0M7QUFBbUQsUUFBRSxFQUFDLEdBQXREO0FBQTBELFFBQUUsRUFBQyxHQUE3RDtBQUFBLGdCQUNFRDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEQsZUFjQyw4REFBQyx5REFBRDtBQUNDLGFBQU8sRUFBQyxPQURUO0FBRUMsb0JBQVcsZ0JBRlo7QUFHQyxjQUFRLEVBQUMsVUFIVjtBQUlDLFlBQU0sRUFBQyxHQUpSO0FBS0MsV0FBSyxFQUFDLEdBTFA7QUFNSyxXQUFLLEVBQUVDLFFBQVEsR0FBRyxNQUFILEdBQVksT0FOaEM7QUFPSyxZQUFNLEVBQUU7QUFBRUksVUFBRSxFQUFFLE1BQU47QUFBY0MsYUFBSyxFQUFFSixhQUFhLEdBQUcsT0FBSCxHQUFhO0FBQS9DLE9BUGIsQ0FRSztBQVJMO0FBU0MsY0FBUSxlQUFFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBNEJBLENBOUJEOztHQUFNSixZOztLQUFBQSxZO0FBZ0NOLCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm9hcmRQcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL2J1dHRvbic7XG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuaW1wb3J0IHsgRmxleCwgVGV4dCxCb3ggfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4uLy4uL3R5cGVzL2JvYXJkUmVsYXRlZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgQm9hcmRQcmV2aWV3ID0gKHsgYmFja2dyb3VuZEltYWdlLCB0aXRsZSwgZmF2b3JpdGUgfTogQm9hcmQpID0+IHtcblx0Y29uc3QgW2xvY2FsRmF2b3JpdGUsIHNldExvY2FsRmF2b3JpdGVdID0gdXNlU3RhdGUoZmF2b3JpdGUpO1xuXHRyZXR1cm4gKFxuXHRcdDxGbGV4XG5cdFx0XHRtPScyJ1xuXHRcdFx0cG9zaXRpb249J3JlbGF0aXZlJ1xuXHRcdFx0aGVpZ2h0PScxMjVweCdcblx0XHRcdHdpZHRoPScyNTBweCdcblx0XHRcdGJvcmRlclJhZGl1cz0nNXB4J1xuXHRcdFx0b3ZlcmZsb3c9J2hpZGRlbidcblx0XHQ+XG5cdFx0XHQ8Qm94IHc9JzEwMCUnIGg9JzEwMCUnIHBvc2l0aW9uPSdhYnNvbHV0ZScgdG9wPScwJyB6SW5kZXg9Jy0xJz5cblx0XHRcdFx0PEltYWdlIHNyYz0nL3NhbXBsZUJhY2tncm91bmQuanBlZycgbGF5b3V0PSdmaWxsJyAvPlxuXHRcdFx0PC9Cb3g+XG5cdFx0XHQ8VGV4dCBmb250U2l6ZT0neGwnIGZvbnRXZWlnaHQ9JzcwMCcgY29sb3I9J3doaXRlJyBteD0nNCcgbXk9JzInPlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcblx0XHRcdFx0YXJpYS1sYWJlbD0nZmF2b3JpdGUgYm9hcmQnXG5cdFx0XHRcdHBvc2l0aW9uPSdhYnNvbHV0ZSdcblx0XHRcdFx0Ym90dG9tPScwJ1xuXHRcdFx0XHRyaWdodD0nMCdcbiAgICAgICAgY29sb3I9e2Zhdm9yaXRlID8gJ2dvbGQnIDogJ2JsYWNrJ31cbiAgICAgICAgX2hvdmVyPXt7IGJnOiAnbm9uZScsIGNvbG9yOiBsb2NhbEZhdm9yaXRlID8gJ2JsYWNrJyA6ICdnb2xkJyB9fVxuICAgICAgICAvLyBvbkNsaWNrPXsgKCkgPT4gZmF2b3JpdGUgPSAhZmF2b3JpdGUgfVxuXHRcdFx0XHRjaGlsZHJlbj17PFN0YXJJY29uIC8+fVxuXHRcdFx0Lz5cblx0XHQ8L0ZsZXg+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZFByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/homepage/BoardPreview.tsx\n");

/***/ })

});