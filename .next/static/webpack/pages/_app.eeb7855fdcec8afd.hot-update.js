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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductGrid\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), collection = ref[0], setCollection = ref[1];\n_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.builder.init(\"f5329e4d268247c0a0f00e29aa17c788\");\n(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    _builder_io_react__WEBPACK_IMPORTED_MODULE_1__.builder.get(\"fabric-shoes\").promise().then(function(param) {\n        var data = param.data;\n        // Do something with the data\n        setCollection(data);\n    });\n}, []);\nif (collection) {\n    console.log(collection);\n}\nvar ProductGrid = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        style: {\n            \"color\": props.color,\n            \"fontFamily\": \"sans-serif\"\n        },\n        children: props.title\n    }, void 0, false, {\n        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/components/ProductGrid.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProductGrid;\n_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ProductGrid, {\n    name: \"ProductGrid\",\n    inputs: [\n        {\n            name: \"title\",\n            type: \"text\",\n            defaultValue: \"I am a heading!\",\n            required: true\n        },\n        {\n            name: \"color\",\n            type: \"color\",\n            defaultValue: \"#AC7EF4\"\n        }, \n    ]\n});\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBcUQ7QUFDSjtBQUVqRCxJQUFvQ0csR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUF4Q0UsVUFBVSxHQUFtQkYsR0FBVyxHQUE5QixFQUFFRyxhQUFhLEdBQUlILEdBQVcsR0FBZjtBQUdoQ0YsMkRBQVksQ0FBQyxrQ0FBa0MsQ0FBQztBQUNoREcsZ0RBQVMsQ0FBQyxXQUFNO0lBRWRILDBEQUFXLENBQUMsY0FBYyxDQUFDLENBQUNRLE9BQU8sRUFBRSxDQUFDQyxJQUFJLENBQUMsZ0JBQWM7WUFBWEMsSUFBSSxTQUFKQSxJQUFJO1FBQ2hELDZCQUE2QjtRQUM3QkwsYUFBYSxDQUFDSyxJQUFJLENBQUM7S0FDcEIsQ0FBQztDQUVILEVBQUMsRUFBRSxDQUFDO0FBRUwsSUFBR04sVUFBVSxFQUFDO0lBQ2RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixVQUFVLENBQUMsQ0FBQztDQUN2QjtBQUVNLElBQU1TLFdBQVcsR0FBRyxTQUFDQyxLQUF3QyxFQUFLO0lBQ3ZFLHFCQUNFLDhEQUFDQyxJQUFFO1FBQUNDLEtBQUssRUFBRTtZQUNQLE9BQU8sRUFBRUYsS0FBSyxDQUFDRyxLQUFLO1lBQ3BCLFlBQVksRUFBRSxZQUFZO1NBQzdCO2tCQUNJSCxLQUFLLENBQUNJLEtBQUs7Ozs7O2FBQ1gsQ0FDTjtDQUNGO0FBVFlMLEtBQUFBLFdBQVc7QUFXeEJkLHdFQUF5QixDQUFDYyxXQUFXLEVBQUU7SUFDckNPLElBQUksRUFBRSxhQUFhO0lBQ25CQyxNQUFNLEVBQUU7UUFDTjtZQUNFRCxJQUFJLEVBQUUsT0FBTztZQUNiRSxJQUFJLEVBQUUsTUFBTTtZQUNaQyxZQUFZLEVBQUUsaUJBQWlCO1lBQy9CQyxRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0Q7WUFDRUosSUFBSSxFQUFFLE9BQU87WUFDYkUsSUFBSSxFQUFFLE9BQU87WUFDYkMsWUFBWSxFQUFFLFNBQVM7U0FDeEI7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeD84NDU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIsIGJ1aWxkZXIgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25dID0gdXNlU3RhdGUoMClcblxuXG5idWlsZGVyLmluaXQoJ2Y1MzI5ZTRkMjY4MjQ3YzBhMGYwMGUyOWFhMTdjNzg4JylcbnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgYnVpbGRlci5nZXQoJ2ZhYnJpYy1zaG9lcycpLnByb21pc2UoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhXG4gICAgc2V0Q29sbGVjdGlvbihkYXRhKVxuICB9KVxuICBcbn0sW10pXG5cbmlmKGNvbGxlY3Rpb24pe1xuY29uc29sZS5sb2coY29sbGVjdGlvbik7XG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0R3JpZCA9IChwcm9wczogeyB0aXRsZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyB9KSA9PiB7XG4gIHJldHVybihcbiAgICA8aDEgc3R5bGU9e3tcbiAgICAgICAgJ2NvbG9yJzogcHJvcHMuY29sb3IsXG4gICAgICAgICdmb250RmFtaWx5JzogJ3NhbnMtc2VyaWYnLFxuICAgIH19PlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgPC9oMT5cbiAgKVxufVxuXG5CdWlsZGVyLnJlZ2lzdGVyQ29tcG9uZW50KFByb2R1Y3RHcmlkLCB7XG4gIG5hbWU6IFwiUHJvZHVjdEdyaWRcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICdJIGFtIGEgaGVhZGluZyEnLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNvbG9yXCIsXG4gICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcjQUM3RUY0JyxcbiAgICB9LFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiQnVpbGRlciIsImJ1aWxkZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJpbml0IiwiZ2V0IiwicHJvbWlzZSIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlByb2R1Y3RHcmlkIiwicHJvcHMiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJ0aXRsZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwibmFtZSIsImlucHV0cyIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductGrid.tsx\n"));

/***/ })

});