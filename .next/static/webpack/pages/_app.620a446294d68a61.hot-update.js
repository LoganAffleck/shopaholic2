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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductGrid = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), products = ref[0], setProducts = ref[1];\n    _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.init(\"f5329e4d268247c0a0f00e29aa17c788\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var result;\n                return C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"\".concat(props.collection.toLowerCase(), \"-shoes\"));\n                        case 2:\n                            result = _ctx.sent;\n                            return _ctx.abrupt(\"return\", result);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getData().then(function(value) {\n            var result = value;\n            var shortenedData = result.map(function(entry) {\n                return entry.data;\n            });\n            setProducts(shortenedData);\n        });\n    }, [\n        props.collection\n    ]);\n    var limitedProducts = [];\n    for(var i = 0; i < props.max; i++){}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"productGrid\",\n        children: products.map(function(product) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"productItem\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: product.image,\n                        width: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 14\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        id: \"shopButton\",\n                        children: \"Shop Now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductGrid, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ProductGrid;\n_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ProductGrid, {\n    name: \"ProductGrid\",\n    inputs: [\n        {\n            name: \"collection\",\n            type: \"text\",\n            defaultValue: \"Fabric\",\n            required: true,\n            enum: [\n                \"Fabric\",\n                \"Marble\",\n                \"Matte\"\n            ]\n        },\n        {\n            name: \"max\",\n            type: \"number\",\n            defaultValue: 4\n        }\n    ]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductGrid);\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUFxRDtBQUNKOztBQUlqRCxJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsS0FBMkMsRUFBSzs7O0lBR25FLElBQWdDSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDSSxRQUFRLEdBQWlCSixHQUFZLEdBQTdCLEVBQUVLLFdBQVcsR0FBSUwsR0FBWSxHQUFoQjtJQUc1QkYsMkRBQVksQ0FBQyxrQ0FBa0MsQ0FBQztJQUVoREcsZ0RBQVMsQ0FBRSxXQUFNO1FBR2YsSUFBTU0sT0FBTzt1QkFBRyw2UEFBVztvQkFDckJDLE1BQU07Ozs7O21DQUFTViw2REFBYyxDQUFDLEVBQUMsQ0FBaUMsTUFBTSxDQUFyQ0ssS0FBSyxDQUFDTyxVQUFVLENBQUNDLFdBQVcsRUFBRSxFQUFDLFFBQU0sQ0FBQyxDQUFDOzs0QkFBeEVILE1BQU0sWUFBa0U7eURBQ3JFQSxNQUFNOzs7Ozs7YUFDZDs0QkFIS0QsT0FBTzs7O1dBR1o7UUFFREEsT0FBTyxFQUFFLENBQUNLLElBQUksQ0FBQyxTQUFDQyxLQUFLLEVBQUc7WUFDdEIsSUFBSUwsTUFBTSxHQUFHSyxLQUFLO1lBQ2xCLElBQUlDLGFBQWEsR0FBR04sTUFBTSxDQUFDTyxHQUFHLENBQUNDLFNBQUFBLEtBQUs7dUJBQUlBLEtBQUssQ0FBQ0MsSUFBSTthQUFBLENBQUM7WUFDbkRaLFdBQVcsQ0FBQ1MsYUFBYSxDQUFDO1NBQUMsQ0FBQyxDQUFDO0tBSWhDLEVBQUM7UUFBQ1gsS0FBSyxDQUFDTyxVQUFVO0tBQUMsQ0FBQztJQUVyQixJQUFJUSxlQUFlLEdBQUUsRUFBRTtJQUV2QixJQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2hCLEtBQUssQ0FBQ2lCLEdBQUcsRUFBRUQsQ0FBQyxFQUFFLENBQUMsRUFFakM7SUFJRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxFQUFFLEVBQUMsYUFBYTtrQkFDbkJsQixRQUFRLENBQUNXLEdBQUcsQ0FBQyxTQUFDUSxPQUFPLEVBQUk7WUFDekIscUJBQ0UsOERBQUNGLEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxhQUFhOztrQ0FDbkIsOERBQUNFLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUYsT0FBTyxDQUFDRyxLQUFLO3dCQUFFQyxLQUFLLEVBQUMsTUFBTTs7Ozs7OEJBQU87a0NBQzVDLDhEQUFDQyxHQUFDO2tDQUFDLDRFQUFDQyxRQUFNO3NDQUFFTixPQUFPLENBQUNPLEtBQUs7Ozs7O2tDQUFVOzs7Ozs4QkFBSTtrQ0FDdkMsOERBQUNGLEdBQUM7OzRCQUFDLEdBQUM7NEJBQUNMLE9BQU8sQ0FBQ1EsS0FBSzs7Ozs7OzhCQUFLO2tDQUN2Qiw4REFBQ0MsUUFBTTt3QkFBQ1YsRUFBRSxFQUFDLFlBQVk7a0NBQUMsVUFBUTs7Ozs7OEJBQVM7Ozs7OztzQkFDckMsQ0FDUDtTQUNELENBQUM7Ozs7O2FBQ0csQ0FDUDtDQUNGO0dBL0NLcEIsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBaURqQkwsd0VBQXlCLENBQUNLLFdBQVcsRUFBRTtJQUNyQ2dDLElBQUksRUFBRSxhQUFhO0lBQ25CQyxNQUFNLEVBQUU7UUFDTjtZQUNFRCxJQUFJLEVBQUUsWUFBWTtZQUNsQkUsSUFBSSxFQUFFLE1BQU07WUFDWkMsWUFBWSxFQUFFLFFBQVE7WUFDdEJDLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLElBQUksRUFBRTtnQkFBQyxRQUFRO2dCQUFFLFFBQVE7Z0JBQUUsT0FBTzthQUFDO1NBQ3BDO1FBQ0Q7WUFDRUwsSUFBSSxFQUFFLEtBQUs7WUFDWEUsSUFBSSxFQUFFLFFBQVE7WUFDZEMsWUFBWSxFQUFFLENBQUM7U0FDaEI7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUlILCtEQUFlbkMsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEdyaWQudHN4Pzg0NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVpbGRlciwgYnVpbGRlciB9IGZyb20gXCJAYnVpbGRlci5pby9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFzeW5jUHJvcHMgfSBmcm9tICdAYnVpbGRlci5pby91dGlscyc7XHJcblxyXG5cclxuY29uc3QgUHJvZHVjdEdyaWQgPSAocHJvcHM6IHsgY29sbGVjdGlvbjogc3RyaW5nOyBtYXg6IG51bWJlcjsgfSkgPT4ge1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgYnVpbGRlci5pbml0KCdmNTMyOWU0ZDI2ODI0N2MwYTBmMDBlMjlhYTE3Yzc4OCcpXHJcblxyXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+e1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYnVpbGRlci5nZXRBbGwoYCR7cHJvcHMuY29sbGVjdGlvbi50b0xvd2VyQ2FzZSgpfS1zaG9lc2ApO1xyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IFxyXG5cclxuICAgIGdldERhdGEoKS50aGVuKCh2YWx1ZSk9PntcclxuICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICBsZXQgc2hvcnRlbmVkRGF0YSA9IHJlc3VsdC5tYXAoZW50cnkgPT4gZW50cnkuZGF0YSlcclxuICAgICAgc2V0UHJvZHVjdHMoc2hvcnRlbmVkRGF0YSl9KTtcclxuICAgIFxyXG5cclxuXHJcbiAgfSxbcHJvcHMuY29sbGVjdGlvbl0pXHJcblxyXG4gIGxldCBsaW1pdGVkUHJvZHVjdHM9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvcHMubWF4OyBpKyspe1xyXG5cclxuICB9XHJcblxyXG4gICAgXHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBpZD0ncHJvZHVjdEdyaWQnPlxyXG4gICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4ge1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD0ncHJvZHVjdEl0ZW0nPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHdpZHRoPScxMDAlJz48L2ltZz5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+e3Byb2R1Y3QudGl0bGV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgPHA+JHtwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzaG9wQnV0dG9uXCI+U2hvcCBOb3c8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5CdWlsZGVyLnJlZ2lzdGVyQ29tcG9uZW50KFByb2R1Y3RHcmlkLCB7XHJcbiAgbmFtZTogXCJQcm9kdWN0R3JpZFwiLFxyXG4gIGlucHV0czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvbGxlY3Rpb25cIixcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ0ZhYnJpYycsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBlbnVtOiBbJ0ZhYnJpYycsICdNYXJibGUnLCAnTWF0dGUnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJtYXhcIixcclxuICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgZGVmYXVsdFZhbHVlOiA0LFxyXG4gICAgfVxyXG4gIF0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZDsiXSwibmFtZXMiOlsiQnVpbGRlciIsImJ1aWxkZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvZHVjdEdyaWQiLCJwcm9wcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJpbml0IiwiZ2V0RGF0YSIsInJlc3VsdCIsImdldEFsbCIsImNvbGxlY3Rpb24iLCJ0b0xvd2VyQ2FzZSIsInRoZW4iLCJ2YWx1ZSIsInNob3J0ZW5lZERhdGEiLCJtYXAiLCJlbnRyeSIsImRhdGEiLCJsaW1pdGVkUHJvZHVjdHMiLCJpIiwibWF4IiwiZGl2IiwiaWQiLCJwcm9kdWN0IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsInAiLCJzdHJvbmciLCJ0aXRsZSIsInByaWNlIiwiYnV0dG9uIiwicmVnaXN0ZXJDb21wb25lbnQiLCJuYW1lIiwiaW5wdXRzIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsInJlcXVpcmVkIiwiZW51bSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductGrid.tsx\n"));

/***/ })

});