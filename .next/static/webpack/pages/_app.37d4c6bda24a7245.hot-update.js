"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ProductGrid.tsx":
/*!************************************!*\
  !*** ./components/ProductGrid.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductGrid = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), collection = ref[0], setCollection = ref[1];\n    _builder_io_react__WEBPACK_IMPORTED_MODULE_1__.builder.init(\"f5329e4d268247c0a0f00e29aa17c788\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _builder_io_react__WEBPACK_IMPORTED_MODULE_1__.builder.get(\"fabric-shoes\").promise().then(function(param) {\n            var data = param.data;\n            // Do something with the data\n            setCollection(data);\n        });\n    }, []);\n    if (collection) {\n        console.log(collection);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        style: {\n            \"color\": props.color,\n            \"fontFamily\": \"sans-serif\"\n        },\n        children: props.title\n    }, void 0, false, {\n        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/components/ProductGrid.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductGrid, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = ProductGrid;\n_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ProductGrid, {\n    name: \"ProductGrid\",\n    inputs: [\n        {\n            name: \"title\",\n            type: \"text\",\n            defaultValue: \"I am a heading!\",\n            required: true\n        },\n        {\n            name: \"color\",\n            type: \"color\",\n            defaultValue: \"#AC7EF4\"\n        }, \n    ]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductGrid);\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBcUQ7QUFDSjs7QUFJakQsSUFBTUssV0FBVyxHQUFHLFNBQUNDLEtBQXdDLEVBQUs7O0lBR2hFLElBQW9DSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDSSxVQUFVLEdBQW1CSixHQUFXLEdBQTlCLEVBQUVLLGFBQWEsR0FBSUwsR0FBVyxHQUFmO0lBR2hDRiwyREFBWSxDQUFDLGtDQUFrQyxDQUFDO0lBQ2hERyxnREFBUyxDQUFDLFdBQU07UUFFZEgsMERBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQ1UsT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxnQkFBYztnQkFBWEMsSUFBSSxTQUFKQSxJQUFJO1lBQ2hELDZCQUE2QjtZQUM3QkwsYUFBYSxDQUFDSyxJQUFJLENBQUM7U0FDcEIsQ0FBQztLQUVILEVBQUMsRUFBRSxDQUFDO0lBRVAsSUFBR04sVUFBVSxFQUFDO1FBQ2RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixVQUFVLENBQUMsQ0FBQztLQUN2QjtJQU1DLHFCQUNFLDhEQUFDUyxJQUFFO1FBQUNDLEtBQUssRUFBRTtZQUNQLE9BQU8sRUFBRVgsS0FBSyxDQUFDWSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxZQUFZO1NBQzdCO2tCQUNJWixLQUFLLENBQUNhLEtBQUs7Ozs7O2FBQ1gsQ0FDTjtDQUNGO0dBaENLZCxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFrQ2pCTCx3RUFBeUIsQ0FBQ0ssV0FBVyxFQUFFO0lBQ3JDZ0IsSUFBSSxFQUFFLGFBQWE7SUFDbkJDLE1BQU0sRUFBRTtRQUNOO1lBQ0VELElBQUksRUFBRSxPQUFPO1lBQ2JFLElBQUksRUFBRSxNQUFNO1lBQ1pDLFlBQVksRUFBRSxpQkFBaUI7WUFDL0JDLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7UUFDRDtZQUNFSixJQUFJLEVBQUUsT0FBTztZQUNiRSxJQUFJLEVBQUUsT0FBTztZQUNiQyxZQUFZLEVBQUUsU0FBUztTQUN4QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsK0RBQWVuQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0R3JpZC50c3g/ODQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyLCBidWlsZGVyIH0gZnJvbSBcIkBidWlsZGVyLmlvL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cblxuXG5jb25zdCBQcm9kdWN0R3JpZCA9IChwcm9wczogeyB0aXRsZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyB9KSA9PiB7XG4gIFxuICBcbiAgY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25dID0gdXNlU3RhdGUoMCk7XG5cblxuICBidWlsZGVyLmluaXQoJ2Y1MzI5ZTRkMjY4MjQ3YzBhMGYwMGUyOWFhMTdjNzg4JylcbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGJ1aWxkZXIuZ2V0KCdmYWJyaWMtc2hvZXMnKS5wcm9taXNlKCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhXG4gICAgICBzZXRDb2xsZWN0aW9uKGRhdGEpXG4gICAgfSlcbiAgXG4gIH0sW10pXG5cbmlmKGNvbGxlY3Rpb24pe1xuY29uc29sZS5sb2coY29sbGVjdGlvbik7XG59XG4gIFxuICBcbiAgXG4gIFxuICBcbiAgcmV0dXJuKFxuICAgIDxoMSBzdHlsZT17e1xuICAgICAgICAnY29sb3InOiBwcm9wcy5jb2xvcixcbiAgICAgICAgJ2ZvbnRGYW1pbHknOiAnc2Fucy1zZXJpZicsXG4gICAgfX0+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICA8L2gxPlxuICApXG59XG5cbkJ1aWxkZXIucmVnaXN0ZXJDb21wb25lbnQoUHJvZHVjdEdyaWQsIHtcbiAgbmFtZTogXCJQcm9kdWN0R3JpZFwiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ0kgYW0gYSBoZWFkaW5nIScsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29sb3JcIixcbiAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogJyNBQzdFRjQnLFxuICAgIH0sXG4gIF0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQ7Il0sIm5hbWVzIjpbIkJ1aWxkZXIiLCJidWlsZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2R1Y3RHcmlkIiwicHJvcHMiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsImluaXQiLCJnZXQiLCJwcm9taXNlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJzdHlsZSIsImNvbG9yIiwidGl0bGUiLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hbWUiLCJpbnB1dHMiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductGrid.tsx\n"));

/***/ })

});