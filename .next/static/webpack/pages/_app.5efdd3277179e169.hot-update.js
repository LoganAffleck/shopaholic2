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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductGrid = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), products = ref[0], setProducts = ref[1];\n    _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.init(\"f5329e4d268247c0a0f00e29aa17c788\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var result;\n                return C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"\".concat(props.collection.toLowerCase(), \"-shoes\"));\n                        case 2:\n                            result = _ctx.sent;\n                            return _ctx.abrupt(\"return\", result);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getData().then(function(value) {\n            var result = value;\n            var shortenedData = result.map(function(entry) {\n                return entry.data;\n            });\n            setProducts(shortenedData);\n        });\n    }, [\n        props.collection\n    ]);\n    if (products.length) {\n        console.log(products[0].title);\n        console.log(\"Was the products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"productGrid\",\n        children: products.map(function(product) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"productItem\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: product.image,\n                        width: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 14\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        id: \"shopButton\",\n                        children: \"Shop Now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductGrid, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ProductGrid;\n_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ProductGrid, {\n    name: \"ProductGrid\",\n    inputs: [\n        {\n            name: \"collection\",\n            type: \"text\",\n            defaultValue: \"Fabric\",\n            required: true,\n            enum: [\n                \"Fabric\",\n                \"Marble\",\n                \"Matte\"\n            ]\n        }, \n    ]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductGrid);\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUFxRDtBQUNKOztBQUlqRCxJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsS0FBNkMsRUFBSzs7O0lBR3JFLElBQWdDSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDSSxRQUFRLEdBQWlCSixHQUFZLEdBQTdCLEVBQUVLLFdBQVcsR0FBSUwsR0FBWSxHQUFoQjtJQUc1QkYsMkRBQVksQ0FBQyxrQ0FBa0MsQ0FBQztJQUVoREcsZ0RBQVMsQ0FBRSxXQUFNO1FBR2YsSUFBTU0sT0FBTzt1QkFBRyw2UEFBVztvQkFDckJDLE1BQU07Ozs7O21DQUFTViw2REFBYyxDQUFDLEVBQUMsQ0FBaUMsTUFBTSxDQUFyQ0ssS0FBSyxDQUFDTyxVQUFVLENBQUNDLFdBQVcsRUFBRSxFQUFDLFFBQU0sQ0FBQyxDQUFDOzs0QkFBeEVILE1BQU0sWUFBa0U7eURBQ3JFQSxNQUFNOzs7Ozs7YUFDZDs0QkFIS0QsT0FBTzs7O1dBR1o7UUFFREEsT0FBTyxFQUFFLENBQUNLLElBQUksQ0FBQyxTQUFDQyxLQUFLLEVBQUc7WUFDdEIsSUFBSUwsTUFBTSxHQUFHSyxLQUFLO1lBQ2xCLElBQUlDLGFBQWEsR0FBR04sTUFBTSxDQUFDTyxHQUFHLENBQUNDLFNBQUFBLEtBQUs7dUJBQUlBLEtBQUssQ0FBQ0MsSUFBSTthQUFBLENBQUM7WUFDbkRaLFdBQVcsQ0FBQ1MsYUFBYSxDQUFDO1NBQUMsQ0FBQyxDQUFDO0tBSWhDLEVBQUM7UUFBQ1gsS0FBSyxDQUFDTyxVQUFVO0tBQUMsQ0FBQztJQUVyQixJQUFHTixRQUFRLENBQUNjLE1BQU0sRUFBQztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNpQixLQUFLLENBQUMsQ0FBQztRQUMvQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FDOUI7SUFHRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxFQUFFLEVBQUMsYUFBYTtrQkFDbkJuQixRQUFRLENBQUNXLEdBQUcsQ0FBQyxTQUFDUyxPQUFPLEVBQUk7WUFDekIscUJBQ0UsOERBQUNGLEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxhQUFhOztrQ0FDbkIsOERBQUNFLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUYsT0FBTyxDQUFDRyxLQUFLO3dCQUFFQyxLQUFLLEVBQUMsTUFBTTs7Ozs7OEJBQU87a0NBQzVDLDhEQUFDQyxHQUFDO2tDQUFDLDRFQUFDQyxRQUFNO3NDQUFFTixPQUFPLENBQUNILEtBQUs7Ozs7O2tDQUFVOzs7Ozs4QkFBSTtrQ0FDdkMsOERBQUNRLEdBQUM7OzRCQUFDLEdBQUM7NEJBQUNMLE9BQU8sQ0FBQ08sS0FBSzs7Ozs7OzhCQUFLO2tDQUN2Qiw4REFBQ0MsUUFBTTt3QkFBQ1QsRUFBRSxFQUFDLFlBQVk7a0NBQUMsVUFBUTs7Ozs7OEJBQVM7Ozs7OztzQkFDckMsQ0FDUDtTQUNELENBQUM7Ozs7O2FBQ0csQ0FDUDtDQUNGO0dBN0NLckIsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBK0NqQkwsd0VBQXlCLENBQUNLLFdBQVcsRUFBRTtJQUNyQ2dDLElBQUksRUFBRSxhQUFhO0lBQ25CQyxNQUFNLEVBQUU7UUFDTjtZQUNFRCxJQUFJLEVBQUUsWUFBWTtZQUNsQkUsSUFBSSxFQUFFLE1BQU07WUFDWkMsWUFBWSxFQUFFLFFBQVE7WUFDdEJDLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLElBQUksRUFBRTtnQkFBQyxRQUFRO2dCQUFFLFFBQVE7Z0JBQUUsT0FBTzthQUFDO1NBQ3BDO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFJSCwrREFBZXJDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeD84NDU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIsIGJ1aWxkZXIgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRBc3luY1Byb3BzIH0gZnJvbSAnQGJ1aWxkZXIuaW8vdXRpbHMnO1xyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RHcmlkID0gKHByb3BzOiB7IGNvbGxlY3Rpb246IHN0cmluZzsgY29sb3I6IHN0cmluZzsgfSkgPT4ge1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgYnVpbGRlci5pbml0KCdmNTMyOWU0ZDI2ODI0N2MwYTBmMDBlMjlhYTE3Yzc4OCcpXHJcblxyXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+e1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYnVpbGRlci5nZXRBbGwoYCR7cHJvcHMuY29sbGVjdGlvbi50b0xvd2VyQ2FzZSgpfS1zaG9lc2ApO1xyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IFxyXG5cclxuICAgIGdldERhdGEoKS50aGVuKCh2YWx1ZSk9PntcclxuICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICBsZXQgc2hvcnRlbmVkRGF0YSA9IHJlc3VsdC5tYXAoZW50cnkgPT4gZW50cnkuZGF0YSlcclxuICAgICAgc2V0UHJvZHVjdHMoc2hvcnRlbmVkRGF0YSl9KTtcclxuICAgIFxyXG5cclxuXHJcbiAgfSxbcHJvcHMuY29sbGVjdGlvbl0pXHJcblxyXG4gIGlmKHByb2R1Y3RzLmxlbmd0aCl7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHNbMF0udGl0bGUpO1xyXG4gIGNvbnNvbGUubG9nKFwiV2FzIHRoZSBwcm9kdWN0c1wiKVxyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxkaXYgaWQ9J3Byb2R1Y3RHcmlkJz5cclxuICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KT0+IHtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9J3Byb2R1Y3RJdGVtJz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB3aWR0aD0nMTAwJSc+PC9pbWc+XHJcbiAgICAgICAgICA8cD48c3Ryb25nPntwcm9kdWN0LnRpdGxlfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgIDxwPiR7cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2hvcEJ1dHRvblwiPlNob3AgTm93PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChQcm9kdWN0R3JpZCwge1xyXG4gIG5hbWU6IFwiUHJvZHVjdEdyaWRcIixcclxuICBpbnB1dHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb2xsZWN0aW9uXCIsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6ICdGYWJyaWMnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgZW51bTogWydGYWJyaWMnLCAnTWFyYmxlJywgJ01hdHRlJ11cclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RHcmlkOyJdLCJuYW1lcyI6WyJCdWlsZGVyIiwiYnVpbGRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9kdWN0R3JpZCIsInByb3BzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImluaXQiLCJnZXREYXRhIiwicmVzdWx0IiwiZ2V0QWxsIiwiY29sbGVjdGlvbiIsInRvTG93ZXJDYXNlIiwidGhlbiIsInZhbHVlIiwic2hvcnRlbmVkRGF0YSIsIm1hcCIsImVudHJ5IiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRpdiIsImlkIiwicHJvZHVjdCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJwIiwic3Ryb25nIiwicHJpY2UiLCJidXR0b24iLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hbWUiLCJpbnB1dHMiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwicmVxdWlyZWQiLCJlbnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductGrid.tsx\n"));

/***/ })

});