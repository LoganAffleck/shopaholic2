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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductGrid = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), products = ref[0], setProducts = ref[1];\n    _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.init(\"f5329e4d268247c0a0f00e29aa17c788\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var selectedCollection = props.Collection;\n        selectedCollection.toLowerCase();\n        //builder.get('fabric-shoes').promise().then(({ data }) => {\n        // Do something with the data\n        //setCollection(data)\n        //})\n        var getData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var result;\n                return C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"\".concat(selectedCollection, \"-shoes\"));\n                        case 2:\n                            result = _ctx.sent;\n                            return _ctx.abrupt(\"return\", result);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getData().then(function(value) {\n            var result = value;\n            var shortenedData = result.map(function(entry) {\n                return entry.data;\n            });\n            setProducts(shortenedData);\n        });\n    }, []);\n    if (products) {\n        console.log(products);\n        console.log(\"Was the products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"productGrid\",\n        children: products.map(function(product) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n                lineNumber: 47,\n                columnNumber: 32\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affle\\\\Documents\\\\GitHub\\\\shopaholic2\\\\components\\\\ProductGrid.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductGrid, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = ProductGrid;\n_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ProductGrid, {\n    name: \"ProductGrid\",\n    inputs: [\n        {\n            name: \"collection\",\n            type: \"text\",\n            defaultValue: \"Fabric\",\n            required: true,\n            enum: [\n                \"Fabric\",\n                \"Marble\",\n                \"Matte\"\n            ]\n        },\n        {\n            name: \"color\",\n            type: \"color\",\n            defaultValue: \"#AC7EF4\"\n        }, \n    ]\n});\nfunction getStaticProps() {\n    return _getStaticProps.apply(this, arguments);\n}\nfunction _getStaticProps() {\n    _getStaticProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var content;\n        return C_Users_affle_Documents_GitHub_shopaholic2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"fabric-shoes\");\n                case 2:\n                    content = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            content: content\n                        }\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getStaticProps.apply(this, arguments);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductGrid);\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFxRDtBQUNKOztBQUlqRCxJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsS0FBNkMsRUFBSzs7O0lBR3JFLElBQWdDSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXBDSSxRQUFRLEdBQWlCSixHQUFXLEdBQTVCLEVBQUVLLFdBQVcsR0FBSUwsR0FBVyxHQUFmO0lBRzVCRiwyREFBWSxDQUFDLGtDQUFrQyxDQUFDO0lBRWhERyxnREFBUyxDQUFFLFdBQU07UUFHZixJQUFJTSxrQkFBa0IsR0FBR0osS0FBSyxDQUFDSyxVQUFVO1FBQ3pDRCxrQkFBa0IsQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFFakMsNERBQTREO1FBQzFELDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDdkIsSUFBSTtRQUVKLElBQU1DLE9BQU87dUJBQUcsNlBBQVc7b0JBQ3JCQyxNQUFNOzs7OzttQ0FBU2IsNkRBQWMsQ0FBQyxFQUFDLENBQXFCLE1BQU0sQ0FBekJTLGtCQUFrQixFQUFDLFFBQU0sQ0FBQyxDQUFDOzs0QkFBNURJLE1BQU0sWUFBc0Q7eURBQ3pEQSxNQUFNOzs7Ozs7YUFDZDs0QkFIS0QsT0FBTzs7O1dBR1o7UUFFREEsT0FBTyxFQUFFLENBQUNHLElBQUksQ0FBQyxTQUFDQyxLQUFLLEVBQUc7WUFDdEIsSUFBSUgsTUFBTSxHQUFHRyxLQUFLO1lBQ2xCLElBQUlDLGFBQWEsR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUNDLFNBQUFBLEtBQUs7dUJBQUlBLEtBQUssQ0FBQ0MsSUFBSTthQUFBLENBQUM7WUFDbkRiLFdBQVcsQ0FBQ1UsYUFBYSxDQUFDO1NBQUMsQ0FBQyxDQUFDO0tBSWhDLEVBQUMsRUFBRSxDQUFDO0lBRUwsSUFBR1gsUUFBUSxFQUFDO1FBQ1plLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsUUFBUSxDQUFDLENBQUM7UUFDdEJlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQzlCO0lBR0QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGFBQWE7a0JBQ25CbEIsUUFBUSxDQUFDWSxHQUFHLENBQUMsU0FBQ08sT0FBTztpQ0FBSSw4REFBQ0YsS0FBRzs7OztzQkFBTztTQUFBLENBQUM7Ozs7O2FBQ2pDLENBQ1A7Q0FDRjtHQTVDS25CLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQThDakJMLHdFQUF5QixDQUFDSyxXQUFXLEVBQUU7SUFDckN1QixJQUFJLEVBQUUsYUFBYTtJQUNuQkMsTUFBTSxFQUFFO1FBQ047WUFDRUQsSUFBSSxFQUFFLFlBQVk7WUFDbEJFLElBQUksRUFBRSxNQUFNO1lBQ1pDLFlBQVksRUFBRSxRQUFRO1lBQ3RCQyxRQUFRLEVBQUUsSUFBSTtZQUNkQyxJQUFJLEVBQUU7Z0JBQUMsUUFBUTtnQkFBRSxRQUFRO2dCQUFFLE9BQU87YUFBQztTQUNwQztRQUNEO1lBQ0VMLElBQUksRUFBRSxPQUFPO1lBQ2JFLElBQUksRUFBRSxPQUFPO1lBQ2JDLFlBQVksRUFBRSxTQUFTO1NBQ3hCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxTQUFlRyxjQUFjO1dBQWRBLGVBQWM7Q0FHbkM7U0FIcUJBLGVBQWM7SUFBZEEsZUFBYyxHQUE3Qiw2UEFBZ0M7WUFDL0JDLE9BQU87Ozs7OzJCQUFTbEMsNkRBQWMsQ0FBQyxjQUFjLENBQUM7O29CQUE5Q2tDLE9BQU8sWUFBdUM7aURBQzdDO3dCQUFDN0IsS0FBSyxFQUFFOzRCQUFDNkIsT0FBTyxFQUFQQSxPQUFPO3lCQUFDO3FCQUFDOzs7Ozs7S0FDMUI7V0FIcUJELGVBQWM7O0FBS3BDLCtEQUFlN0IsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEdyaWQudHN4Pzg0NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVpbGRlciwgYnVpbGRlciB9IGZyb20gXCJAYnVpbGRlci5pby9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFzeW5jUHJvcHMgfSBmcm9tICdAYnVpbGRlci5pby91dGlscyc7XHJcblxyXG5cclxuY29uc3QgUHJvZHVjdEdyaWQgPSAocHJvcHM6IHsgY29sbGVjdGlvbjogc3RyaW5nOyBjb2xvcjogc3RyaW5nOyB9KSA9PiB7XHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblxyXG4gIGJ1aWxkZXIuaW5pdCgnZjUzMjllNGQyNjgyNDdjMGEwZjAwZTI5YWExN2M3ODgnKVxyXG5cclxuICB1c2VFZmZlY3QoICgpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGxldCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwcm9wcy5Db2xsZWN0aW9uO1xyXG4gICAgc2VsZWN0ZWRDb2xsZWN0aW9uLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy9idWlsZGVyLmdldCgnZmFicmljLXNob2VzJykucHJvbWlzZSgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhXHJcbiAgICAgIC8vc2V0Q29sbGVjdGlvbihkYXRhKVxyXG4gICAgLy99KVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBidWlsZGVyLmdldEFsbChgJHtzZWxlY3RlZENvbGxlY3Rpb259LXNob2VzYCk7XHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gXHJcblxyXG4gICAgZ2V0RGF0YSgpLnRoZW4oKHZhbHVlKT0+e1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgIGxldCBzaG9ydGVuZWREYXRhID0gcmVzdWx0Lm1hcChlbnRyeSA9PiBlbnRyeS5kYXRhKVxyXG4gICAgICBzZXRQcm9kdWN0cyhzaG9ydGVuZWREYXRhKX0pO1xyXG4gICAgXHJcblxyXG5cclxuICB9LFtdKVxyXG5cclxuICBpZihwcm9kdWN0cyl7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gIGNvbnNvbGUubG9nKFwiV2FzIHRoZSBwcm9kdWN0c1wiKVxyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxkaXYgaWQ9J3Byb2R1Y3RHcmlkJz5cclxuICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KT0+IDxkaXY+PC9kaXY+KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChQcm9kdWN0R3JpZCwge1xyXG4gIG5hbWU6IFwiUHJvZHVjdEdyaWRcIixcclxuICBpbnB1dHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb2xsZWN0aW9uXCIsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6ICdGYWJyaWMnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgZW51bTogWydGYWJyaWMnLCAnTWFyYmxlJywgJ01hdHRlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29sb3JcIixcclxuICAgICAgdHlwZTogXCJjb2xvclwiLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6ICcjQUM3RUY0JyxcclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGJ1aWxkZXIuZ2V0QWxsKCdmYWJyaWMtc2hvZXMnKVxyXG4gIHJldHVybiB7cHJvcHM6IHtjb250ZW50fX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQ7Il0sIm5hbWVzIjpbIkJ1aWxkZXIiLCJidWlsZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2R1Y3RHcmlkIiwicHJvcHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaW5pdCIsInNlbGVjdGVkQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImdldERhdGEiLCJyZXN1bHQiLCJnZXRBbGwiLCJ0aGVuIiwidmFsdWUiLCJzaG9ydGVuZWREYXRhIiwibWFwIiwiZW50cnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwicHJvZHVjdCIsInJlZ2lzdGVyQ29tcG9uZW50IiwibmFtZSIsImlucHV0cyIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJyZXF1aXJlZCIsImVudW0iLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductGrid.tsx\n"));

/***/ })

});