"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/LayoutContent.js":
/*!********************************************!*\
  !*** ./components/layout/LayoutContent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Add */ \"./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _Todos_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todos/TodoList/TodoList */ \"./components/Todos/TodoList/TodoList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_todos_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/todos-context */ \"./store/todos-context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LayoutContent = function() {\n    _s();\n    var todosCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_todos_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var navigateToForm = function() {\n        router.push(\"/create\");\n        todosCtx.setIsCreate(true);\n    // todosCtx.setFormIsShown(true);\n    };\n    // const hideModalForm = () => {\n    //   todosCtx.setFormIsShown(false);\n    //   todosCtx.setCurrentItem({});\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                container: true,\n                direction: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        noWrap: true,\n                        component: \"div\",\n                        sx: {\n                            margin: \"2rem 0 0 0\",\n                            color: \"#B3BCC4\",\n                            fontSize: \"14px\"\n                        },\n                        children: \"Manage your tasks!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"h5\",\n                        noWrap: true,\n                        component: \"div\",\n                        sx: {\n                            fontWeight: 600,\n                            color: \"#313136\",\n                            margin: \"0 0 0.313rem\",\n                            fontFamily: \"Open Sans\"\n                        },\n                        children: \"My Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                container: true,\n                direction: \"column\",\n                justifyContent: \"center\",\n                alignItems: \"flex-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    variant: \"contained\",\n                    startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, void 0, void 0),\n                    className: \"addButton\",\n                    onClick: function() {\n                        return navigateToForm();\n                    },\n                    children: \"Add Task\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Todos_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\layout\\\\LayoutContent.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(LayoutContent, \"O1Dkf1EcdPUYk9LideSzs50Be2c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LayoutContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutContent);\nvar _c;\n$RefreshReg$(_c, \"LayoutContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRDb250ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQThDO0FBQ0o7QUFDTTtBQUNWO0FBQ1k7QUFDQTtBQUNoQjtBQUNtQjtBQUNiOztBQUV4QyxJQUFNUyxhQUFhLEdBQUcsV0FBTTs7SUFDMUIsSUFBTUMsUUFBUSxHQUFHSixpREFBVSxDQUFDQyw0REFBWSxDQUFDO0lBQ3pDLElBQU1JLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQixJQUFNSSxjQUFjLEdBQUcsV0FBTTtRQUMzQkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkJILFFBQVEsQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLGlDQUFpQztLQUNsQztJQUVELGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLElBQUk7SUFFSixxQkFDRSw4REFBQ1osK0RBQVM7OzBCQUNSLDhEQUFDQywwREFBSTtnQkFBQ1ksU0FBUztnQkFBQ0MsU0FBUyxFQUFDLFFBQVE7O2tDQUNoQyw4REFBQ1osZ0VBQVU7d0JBQUNhLE1BQU07d0JBQUNDLFNBQVMsRUFBQyxLQUFLO3dCQUFDQyxFQUFFLEVBQUU7NEJBQUVDLE1BQU0sRUFBRSxZQUFZOzRCQUFFQyxLQUFLLEVBQUUsU0FBUzs0QkFBRUMsUUFBUSxFQUFFLE1BQU07eUJBQUM7a0NBQUUsb0JBRXBHOzs7Ozs2QkFBYTtrQ0FDYiw4REFBQ2xCLGdFQUFVO3dCQUNUbUIsT0FBTyxFQUFDLElBQUk7d0JBQ1pOLE1BQU07d0JBQ05DLFNBQVMsRUFBQyxLQUFLO3dCQUNmQyxFQUFFLEVBQUU7NEJBQ0ZLLFVBQVUsRUFBRSxHQUFHOzRCQUNmSCxLQUFLLEVBQUUsU0FBUzs0QkFDaEJELE1BQU0sRUFBRSxjQUFjOzRCQUN0QkssVUFBVSxFQUFFLFdBQVc7eUJBQ3hCO2tDQUNGLFVBRUQ7Ozs7OzZCQUFhOzs7Ozs7cUJBQ1I7MEJBQ1AsOERBQUN0QiwwREFBSTtnQkFBQ1ksU0FBUztnQkFBQ0MsU0FBUyxFQUFDLFFBQVE7Z0JBQUNVLGNBQWMsRUFBQyxRQUFRO2dCQUFDQyxVQUFVLEVBQUMsVUFBVTswQkFDOUUsNEVBQUMxQiw0REFBTTtvQkFBQ3NCLE9BQU8sRUFBQyxXQUFXO29CQUFDSyxTQUFTLGdCQUFFLDhEQUFDNUIsK0RBQU8sb0NBQUc7b0JBQ2hENkIsU0FBUyxFQUFDLFdBQVc7b0JBQ3JCQyxPQUFPLEVBQUU7K0JBQU1sQixjQUFjLEVBQUU7cUJBQUE7OEJBQUUsVUFBUTs7Ozs7eUJBQVM7Ozs7O3FCQUMvQzswQkFDUCw4REFBQ1AsZ0VBQVE7Ozs7cUJBQUc7Ozs7OzthQUNGLENBQ1o7Q0FDSDtHQTNDS0ksYUFBYTs7UUFFRkQsa0RBQVM7OztBQUZwQkMsS0FBQUEsYUFBYTtBQTZDbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRDb250ZW50LmpzP2I0NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi4vVG9kb3MvVG9kb0xpc3QvVG9kb0xpc3RcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2Rvc0NvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL3RvZG9zLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTGF5b3V0Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCB0b2Rvc0N0eCA9IHVzZUNvbnRleHQoVG9kb3NDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGVUb0Zvcm0gPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2NyZWF0ZScpO1xyXG4gICAgdG9kb3NDdHguc2V0SXNDcmVhdGUodHJ1ZSk7XHJcbiAgICAvLyB0b2Rvc0N0eC5zZXRGb3JtSXNTaG93bih0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGhpZGVNb2RhbEZvcm0gPSAoKSA9PiB7XHJcbiAgLy8gICB0b2Rvc0N0eC5zZXRGb3JtSXNTaG93bihmYWxzZSk7XHJcbiAgLy8gICB0b2Rvc0N0eC5zZXRDdXJyZW50SXRlbSh7fSk7XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBtYXJnaW46ICcycmVtIDAgMCAwJywgY29sb3I6ICcjQjNCQ0M0JywgZm9udFNpemU6ICcxNHB4J319PlxyXG4gICAgICAgICAgTWFuYWdlIHlvdXIgdGFza3MhXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMzMTMxMzYnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIDAgMC4zMTNyZW0nLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnT3BlbiBTYW5zJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBNeSBUYXNrc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdhZGRCdXR0b24nXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvRm9ybSgpfT5BZGQgVGFzazwvQnV0dG9uPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxUb2RvTGlzdCAvPlxyXG4gICAgPC9Db250YWluZXI+IFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dENvbnRlbnQ7Il0sIm5hbWVzIjpbIkFkZEljb24iLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlRvZG9MaXN0IiwidXNlQ29udGV4dCIsIlRvZG9zQ29udGV4dCIsInVzZVJvdXRlciIsIkxheW91dENvbnRlbnQiLCJ0b2Rvc0N0eCIsInJvdXRlciIsIm5hdmlnYXRlVG9Gb3JtIiwicHVzaCIsInNldElzQ3JlYXRlIiwiY29udGFpbmVyIiwiZGlyZWN0aW9uIiwibm9XcmFwIiwiY29tcG9uZW50Iiwic3giLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwic3RhcnRJY29uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/LayoutContent.js\n");

/***/ })

});