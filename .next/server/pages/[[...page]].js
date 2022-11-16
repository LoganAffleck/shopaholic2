"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[[...page]]";
exports.ids = ["pages/[[...page]]"];
exports.modules = {

/***/ "./pages/[[...page]].tsx":
/*!*******************************!*\
  !*** ./pages/[[...page]].tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @builder.io/react */ \"@builder.io/react\");\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _builder_io_widgets_dist_lib_builder_widgets_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @builder.io/widgets/dist/lib/builder-widgets-async */ \"@builder.io/widgets/dist/lib/builder-widgets-async\");\n/* harmony import */ var _builder_io_widgets_dist_lib_builder_widgets_async__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_builder_io_widgets_dist_lib_builder_widgets_async__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content\n\nasync function getStaticProps({ params  }) {\n    const page = await _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.get(\"page\", {\n        userAttributes: {\n            urlPath: \"/\" + (params?.page?.join(\"/\") || \"\")\n        }\n    }).toPromise() || null;\n    return {\n        props: {\n            page\n        },\n        // Next.js will attempt to re-generate the page:\n        // - When a request comes in\n        // - At most once every 5 seconds\n        revalidate: 5\n    };\n}\nasync function getStaticPaths() {\n    const pages = await _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"page\", {\n        options: {\n            noTargeting: true\n        },\n        omit: \"data.blocks\"\n    });\n    return {\n        paths: pages.map((page)=>`${page.data?.url}`),\n        fallback: true\n    };\n}\nfunction Page({ page  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const isPreviewingInBuilder = (0,_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.useIsPreviewing)();\n    const show404 = !page && !isPreviewingInBuilder;\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    !page && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"noindex\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            show404 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {\n                statusCode: 404\n            }, void 0, false, {\n                fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.BuilderComponent, {\n                model: \"page\",\n                content: page\n            }, void 0, false, {\n                fileName: \"/Users/logan/Desktop/Dev/shopaholic2/pages/[[...page]].tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bWy4uLnBhZ2VdXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDdUM7QUFDdUM7QUFDckM7QUFDYjtBQUM1QixpSEFBaUg7QUFDdEQ7QUFFcEQsZUFBZU0sY0FBYyxDQUFDLEVBQ25DQyxNQUFNLEdBQ29DLEVBQUU7SUFDNUMsTUFBTUMsSUFBSSxHQUNSLE1BQU9OLDBEQUNELENBQUMsTUFBTSxFQUFFO1FBQ1hRLGNBQWMsRUFBRTtZQUNkQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUNKLE1BQU0sRUFBRUMsSUFBSSxFQUFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9DO0tBQ0YsQ0FBQyxDQUNEQyxTQUFTLEVBQUUsSUFBSyxJQUFJO0lBRXpCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xOLElBQUk7U0FDTDtRQUNELGdEQUFnRDtRQUNoRCw0QkFBNEI7UUFDNUIsaUNBQWlDO1FBQ2pDTyxVQUFVLEVBQUUsQ0FBQztLQUNkO0NBQ0Y7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDckMsTUFBTUMsS0FBSyxHQUFHLE1BQU1mLDZEQUFjLENBQUMsTUFBTSxFQUFFO1FBQ3pDaUIsT0FBTyxFQUFFO1lBQUVDLFdBQVcsRUFBRSxJQUFJO1NBQUU7UUFDOUJDLElBQUksRUFBRSxhQUFhO0tBQ3BCLENBQUM7SUFFRixPQUFPO1FBQ0xDLEtBQUssRUFBRUwsS0FBSyxDQUFDTSxHQUFHLENBQUMsQ0FBQ2YsSUFBSSxHQUFLLENBQUMsRUFBRUEsSUFBSSxDQUFDZ0IsSUFBSSxFQUFFQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0Y7QUFFYyxTQUFTQyxJQUFJLENBQUMsRUFDM0JuQixJQUFJLEdBQzJDLEVBQUU7SUFDakQsTUFBTW9CLE1BQU0sR0FBRzVCLHNEQUFTLEVBQUU7SUFDMUIsTUFBTTZCLHFCQUFxQixHQUFHMUIsa0VBQWUsRUFBRTtJQUMvQyxNQUFNMkIsT0FBTyxHQUFHLENBQUN0QixJQUFJLElBQUksQ0FBQ3FCLHFCQUFxQjtJQUUvQyxJQUFJRCxNQUFNLENBQUNHLFVBQVUsRUFBRTtRQUNyQixxQkFBTyw4REFBQ0MsSUFBRTtzQkFBQyxZQUFVOzs7OztnQkFBSztLQUMzQjtJQUVELHFCQUNFOzswQkFDRSw4REFBQzNCLGtEQUFJOztrQ0FDSCw4REFBQzRCLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMscUNBQXFDOzs7Ozs0QkFBRztrQ0FDdEUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxZQUFZO3dCQUFDQyxJQUFJLEVBQUMsOEJBQThCOzs7Ozs0QkFBRTtrQ0FDNUQsOERBQUNGLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxZQUFZO3dCQUFDQyxJQUFJLEVBQUMsMkJBQTJCOzs7Ozs0QkFBRTtrQ0FDekQsOERBQUNGLE1BQUk7d0JBQUNFLElBQUksRUFBQyw0RUFBNEU7d0JBQUNELEdBQUcsRUFBQyxZQUFZOzs7Ozs0QkFBUTtvQkFDL0csQ0FBQzdCLElBQUksa0JBQUksOERBQUN5QixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsT0FBTyxFQUFDLFNBQVM7Ozs7OzRCQUFHOzs7Ozs7b0JBQzdDO1lBQ05MLE9BQU8saUJBQ04sOERBQUMxQixtREFBZ0I7Z0JBQUNtQyxVQUFVLEVBQUUsR0FBRzs7Ozs7b0JBQUksaUJBRXJDLDhEQUFDdEMsK0RBQWdCO2dCQUFDdUMsS0FBSyxFQUFDLE1BQU07Z0JBQUNMLE9BQU8sRUFBRTNCLElBQUk7Ozs7O29CQUFJOztvQkFFakQsQ0FDSjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWJ1aWxkZXItaW8tbGFuZGluZy1wYWdlLy4vcGFnZXMvW1suLi5wYWdlXV0udHN4PzAyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQnVpbGRlckNvbXBvbmVudCwgYnVpbGRlciwgdXNlSXNQcmV2aWV3aW5nIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgRGVmYXVsdEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gbG9hZGluZyB3aWRnZXRzIGR5bmFtaWNhbGx5IHRvIHJlZHVjZSBidW5kbGUgc2l6ZSwgd2lsbCBvbmx5IGJlIGluY2x1ZGVkIGluIGJ1bmRsZSB3aGVuIGlzIHVzZWQgaW4gdGhlIGNvbnRlbnRcbmltcG9ydCAnQGJ1aWxkZXIuaW8vd2lkZ2V0cy9kaXN0L2xpYi9idWlsZGVyLXdpZGdldHMtYXN5bmMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7XG4gIHBhcmFtcyxcbn06IEdldFN0YXRpY1Byb3BzQ29udGV4dDx7IHBhZ2U6IHN0cmluZ1tdIH0+KSB7XG4gIGNvbnN0IHBhZ2UgPVxuICAgIChhd2FpdCBidWlsZGVyXG4gICAgICAuZ2V0KCdwYWdlJywge1xuICAgICAgICB1c2VyQXR0cmlidXRlczoge1xuICAgICAgICAgIHVybFBhdGg6ICcvJyArIChwYXJhbXM/LnBhZ2U/LmpvaW4oJy8nKSB8fCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRvUHJvbWlzZSgpKSB8fCBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGFnZSxcbiAgICB9LFxuICAgIC8vIE5leHQuanMgd2lsbCBhdHRlbXB0IHRvIHJlLWdlbmVyYXRlIHRoZSBwYWdlOlxuICAgIC8vIC0gV2hlbiBhIHJlcXVlc3QgY29tZXMgaW5cbiAgICAvLyAtIEF0IG1vc3Qgb25jZSBldmVyeSA1IHNlY29uZHNcbiAgICByZXZhbGlkYXRlOiA1LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBidWlsZGVyLmdldEFsbCgncGFnZScsIHtcbiAgICBvcHRpb25zOiB7IG5vVGFyZ2V0aW5nOiB0cnVlIH0sXG4gICAgb21pdDogJ2RhdGEuYmxvY2tzJyxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYWdlcy5tYXAoKHBhZ2UpID0+IGAke3BhZ2UuZGF0YT8udXJsfWApLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe1xuICBwYWdlLFxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBpc1ByZXZpZXdpbmdJbkJ1aWxkZXIgPSB1c2VJc1ByZXZpZXdpbmcoKVxuICBjb25zdCBzaG93NDA0ID0gIXBhZ2UgJiYgIWlzUHJldmlld2luZ0luQnVpbGRlclxuXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIHshcGFnZSAmJiA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPn1cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtzaG93NDA0ID8gKFxuICAgICAgICA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnVpbGRlckNvbXBvbmVudCBtb2RlbD1cInBhZ2VcIiBjb250ZW50PXtwYWdlfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJ1aWxkZXJDb21wb25lbnQiLCJidWlsZGVyIiwidXNlSXNQcmV2aWV3aW5nIiwiRGVmYXVsdEVycm9yUGFnZSIsIkhlYWQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBhZ2UiLCJnZXQiLCJ1c2VyQXR0cmlidXRlcyIsInVybFBhdGgiLCJqb2luIiwidG9Qcm9taXNlIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYWdlcyIsImdldEFsbCIsIm9wdGlvbnMiLCJub1RhcmdldGluZyIsIm9taXQiLCJwYXRocyIsIm1hcCIsImRhdGEiLCJ1cmwiLCJmYWxsYmFjayIsIlBhZ2UiLCJyb3V0ZXIiLCJpc1ByZXZpZXdpbmdJbkJ1aWxkZXIiLCJzaG93NDA0IiwiaXNGYWxsYmFjayIsImgxIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzdGF0dXNDb2RlIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[[...page]].tsx\n");

/***/ }),

/***/ "@builder.io/react":
/*!************************************!*\
  !*** external "@builder.io/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@builder.io/react");

/***/ }),

/***/ "@builder.io/widgets/dist/lib/builder-widgets-async":
/*!*********************************************************************!*\
  !*** external "@builder.io/widgets/dist/lib/builder-widgets-async" ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = require("@builder.io/widgets/dist/lib/builder-widgets-async");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[[...page]].tsx"));
module.exports = __webpack_exports__;

})();