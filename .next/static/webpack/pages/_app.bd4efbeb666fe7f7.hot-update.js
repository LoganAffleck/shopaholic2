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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductGrid = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), products = ref[0], setproducts = ref[1];\n    _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.init(\"f5329e4d268247c0a0f00e29aa17c788\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(props);\n        //builder.get('fabric-shoes').promise().then(({ data }) => {\n        // Do something with the data\n        //setCollection(data)\n        //})\n        var getData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var result;\n                return C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"\".concat(selectedCollection, \"-shoes\"));\n                        case 2:\n                            result = _ctx.sent;\n                            return _ctx.abrupt(\"return\", result);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getData().then(function(value) {\n            var result = value;\n            var shortenedData = result.map(function(entry) {\n                return entry.data;\n            });\n            setproducts(shortenedData);\n        });\n    }, []);\n    if (products) {\n        console.log(products);\n        console.log(\"Was the products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        style: {\n            \"color\": props.color,\n            \"fontFamily\": \"sans-serif\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductGrid, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = ProductGrid;\n_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ProductGrid, {\n    name: \"ProductGrid\",\n    inputs: [\n        {\n            name: \"Collection\",\n            type: \"text\",\n            defaultValue: \"Fabric\",\n            required: true,\n            enum: [\n                \"Fabric\",\n                \"Marble\",\n                \"Matte\"\n            ]\n        },\n        {\n            name: \"color\",\n            type: \"color\",\n            defaultValue: \"#AC7EF4\"\n        },\n        {\n            name: \"cheese\"\n        }\n    ]\n});\nfunction getStaticProps() {\n    return _getStaticProps.apply(this, arguments);\n}\nfunction _getStaticProps() {\n    _getStaticProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var content;\n        return C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"fabric-shoes\");\n                case 2:\n                    content = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            content: content\n                        }\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getStaticProps.apply(this, arguments);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductGrid);\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFxRDtBQUNKOztBQUlqRCxJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsS0FBNkMsRUFBSzs7SUFHckUsSUFBZ0NILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBcENJLFFBQVEsR0FBaUJKLEdBQVcsR0FBNUIsRUFBRUssV0FBVyxHQUFJTCxHQUFXLEdBQWY7SUFHNUJGLDJEQUFZLENBQUMsa0NBQWtDLENBQUM7SUFFaERHLGdEQUFTLENBQUUsV0FBTTtRQUdmTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7UUFFbkIsNERBQTREO1FBQzFELDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDdkIsSUFBSTtRQUVKLElBQU1NLE9BQU87dUJBQUcsNlBBQVc7b0JBQ3JCQyxNQUFNOzs7OzttQ0FBU1osNkRBQWMsQ0FBQyxFQUFDLENBQXFCLE1BQU0sQ0FBekJjLGtCQUFrQixFQUFDLFFBQU0sQ0FBQyxDQUFDOzs0QkFBNURGLE1BQU0sWUFBc0Q7eURBQ3pEQSxNQUFNOzs7Ozs7YUFDZDs0QkFIS0QsT0FBTzs7O1dBR1o7UUFFREEsT0FBTyxFQUFFLENBQUNJLElBQUksQ0FBQyxTQUFDQyxLQUFLLEVBQUc7WUFDdEIsSUFBSUosTUFBTSxHQUFHSSxLQUFLO1lBQ2xCLElBQUlDLGFBQWEsR0FBR0wsTUFBTSxDQUFDTSxHQUFHLENBQUNDLFNBQUFBLEtBQUs7dUJBQUlBLEtBQUssQ0FBQ0MsSUFBSTthQUFBLENBQUM7WUFDbkRiLFdBQVcsQ0FBQ1UsYUFBYSxDQUFDO1NBQUMsQ0FBQyxDQUFDO0tBSWhDLEVBQUMsRUFBRSxDQUFDO0lBRUwsSUFBR1gsUUFBUSxFQUFDO1FBQ1pHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixRQUFRLENBQUMsQ0FBQztRQUN0QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FDOUI7SUFHRCxxQkFDRSw4REFBQ1csSUFBRTtRQUFDQyxLQUFLLEVBQUU7WUFDUCxPQUFPLEVBQUVqQixLQUFLLENBQUNrQixLQUFLO1lBQ3BCLFlBQVksRUFBRSxZQUFZO1NBQzdCOzs7OzthQUVJLENBQ047Q0FDRjtHQTlDS25CLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWdEakJMLHdFQUF5QixDQUFDSyxXQUFXLEVBQUU7SUFDckNxQixJQUFJLEVBQUUsYUFBYTtJQUNuQkMsTUFBTSxFQUFFO1FBQ047WUFDRUQsSUFBSSxFQUFFLFlBQVk7WUFDbEJFLElBQUksRUFBRSxNQUFNO1lBQ1pDLFlBQVksRUFBRSxRQUFRO1lBQ3RCQyxRQUFRLEVBQUUsSUFBSTtZQUNkQyxJQUFJLEVBQUU7Z0JBQUMsUUFBUTtnQkFBRSxRQUFRO2dCQUFFLE9BQU87YUFBQztTQUNwQztRQUNEO1lBQ0VMLElBQUksRUFBRSxPQUFPO1lBQ2JFLElBQUksRUFBRSxPQUFPO1lBQ2JDLFlBQVksRUFBRSxTQUFTO1NBQ3hCO1FBQ0Q7WUFDRUgsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUksU0FBZU0sY0FBYztXQUFkQSxlQUFjO0NBR25DO1NBSHFCQSxlQUFjO0lBQWRBLGVBQWMsR0FBN0IsNlBBQWdDO1lBQy9CQyxPQUFPOzs7OzsyQkFBU2hDLDZEQUFjLENBQUMsY0FBYyxDQUFDOztvQkFBOUNnQyxPQUFPLFlBQXVDO2lEQUM3Qzt3QkFBQzNCLEtBQUssRUFBRTs0QkFBQzJCLE9BQU8sRUFBUEEsT0FBTzt5QkFBQztxQkFBQzs7Ozs7O0tBQzFCO1dBSHFCRCxlQUFjOztBQUtwQywrREFBZTNCLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeD84NDU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIsIGJ1aWxkZXIgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRBc3luY1Byb3BzIH0gZnJvbSAnQGJ1aWxkZXIuaW8vdXRpbHMnO1xyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RHcmlkID0gKHByb3BzOiB7IGNvbGxlY3Rpb246IHN0cmluZzsgY29sb3I6IHN0cmluZzsgfSkgPT4ge1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0cHJvZHVjdHNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cclxuICBidWlsZGVyLmluaXQoJ2Y1MzI5ZTRkMjY4MjQ3YzBhMGYwMGUyOWFhMTdjNzg4JylcclxuXHJcbiAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gICAgLy9idWlsZGVyLmdldCgnZmFicmljLXNob2VzJykucHJvbWlzZSgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhXHJcbiAgICAgIC8vc2V0Q29sbGVjdGlvbihkYXRhKVxyXG4gICAgLy99KVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBidWlsZGVyLmdldEFsbChgJHtzZWxlY3RlZENvbGxlY3Rpb259LXNob2VzYCk7XHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gXHJcblxyXG4gICAgZ2V0RGF0YSgpLnRoZW4oKHZhbHVlKT0+e1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgIGxldCBzaG9ydGVuZWREYXRhID0gcmVzdWx0Lm1hcChlbnRyeSA9PiBlbnRyeS5kYXRhKVxyXG4gICAgICBzZXRwcm9kdWN0cyhzaG9ydGVuZWREYXRhKX0pO1xyXG4gICAgXHJcblxyXG5cclxuICB9LFtdKVxyXG5cclxuICBpZihwcm9kdWN0cyl7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gIGNvbnNvbGUubG9nKFwiV2FzIHRoZSBwcm9kdWN0c1wiKVxyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxoMSBzdHlsZT17e1xyXG4gICAgICAgICdjb2xvcic6IHByb3BzLmNvbG9yLFxyXG4gICAgICAgICdmb250RmFtaWx5JzogJ3NhbnMtc2VyaWYnLFxyXG4gICAgfX0+XHJcbiAgICAgICAgXHJcbiAgICA8L2gxPlxyXG4gIClcclxufVxyXG5cclxuQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChQcm9kdWN0R3JpZCwge1xyXG4gIG5hbWU6IFwiUHJvZHVjdEdyaWRcIixcclxuICBpbnB1dHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDb2xsZWN0aW9uXCIsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6ICdGYWJyaWMnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgZW51bTogWydGYWJyaWMnLCAnTWFyYmxlJywgJ01hdHRlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29sb3JcIixcclxuICAgICAgdHlwZTogXCJjb2xvclwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6ICcjQUM3RUY0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY2hlZXNlXCJcclxuICAgIH1cclxuICBdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgYnVpbGRlci5nZXRBbGwoJ2ZhYnJpYy1zaG9lcycpXHJcbiAgcmV0dXJuIHtwcm9wczoge2NvbnRlbnR9fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZDsiXSwibmFtZXMiOlsiQnVpbGRlciIsImJ1aWxkZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvZHVjdEdyaWQiLCJwcm9wcyIsInByb2R1Y3RzIiwic2V0cHJvZHVjdHMiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJyZXN1bHQiLCJnZXRBbGwiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJ0aGVuIiwidmFsdWUiLCJzaG9ydGVuZWREYXRhIiwibWFwIiwiZW50cnkiLCJkYXRhIiwiaDEiLCJzdHlsZSIsImNvbG9yIiwicmVnaXN0ZXJDb21wb25lbnQiLCJuYW1lIiwiaW5wdXRzIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsInJlcXVpcmVkIiwiZW51bSIsImdldFN0YXRpY1Byb3BzIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductGrid.tsx\n"));

/***/ })

});