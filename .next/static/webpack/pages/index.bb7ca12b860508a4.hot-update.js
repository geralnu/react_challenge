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

/***/ "./components/Todos/TodoItem/TodoItem.js":
/*!***********************************************!*\
  !*** ./components/Todos/TodoItem/TodoItem.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoItem.module.css */ \"./components/Todos/TodoItem/TodoItem.module.css\");\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_todos_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/todos-context */ \"./store/todos-context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/DeleteOutline */ \"./node_modules/@mui/icons-material/DeleteOutline.js\");\n/* harmony import */ var _mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/EditOutlined */ \"./node_modules/@mui/icons-material/EditOutlined.js\");\n/* harmony import */ var _ui_AlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/AlertDialog */ \"./components/ui/AlertDialog.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodoItem = function(param) {\n    var item1 = param.item;\n    _s();\n    var todosCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_todos_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var deleteItem = function(id) {\n        todosCtx.removeTodo(id);\n        todosCtx.setAlertOpen(false);\n    };\n    var updateItem = function(item) {\n        router.push(\"/update\");\n        todosCtx.setIsCreate(false);\n        // todosCtx.setFormIsShown(true);\n        todosCtx.setCurrentItem(item);\n    };\n    var deleteItemHandler = function(id) {\n        todosCtx.setAlertOpen(true);\n    };\n    var closeAlertHandler = function() {\n        todosCtx.setAlertOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                direction: \"column\",\n                justifyContent: \"space-between\",\n                alignItems: \"flex-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_head),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                variant: \"h6\",\n                                sx: {\n                                    fontWeight: \"500\",\n                                    fontFamily: \"Open Sans\"\n                                },\n                                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_title),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_category),\n                                        style: {\n                                            backgroundColor: \"rgb(\".concat(item1.color, \")\")\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, _this),\n                                    item1.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_body),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        item1.description,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        container: true,\n                        direction: \"row\",\n                        justifyContent: \"flex-end\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                \"aria-label\": \"edit\",\n                                size: \"small\",\n                                onClick: function() {\n                                    return updateItem(item1);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                \"aria-label\": \"delete\",\n                                size: \"small\",\n                                onClick: function() {\n                                    return deleteItemHandler(item1.id);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_AlertDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: todosCtx.isAlertOpen,\n                closeHandler: closeAlertHandler,\n                actionHandler: function() {\n                    return deleteItem(item1.id);\n                },\n                title: \"Delete Task\",\n                message: \"Are you sure you want to delete this task?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(TodoItem, \"O1Dkf1EcdPUYk9LideSzs50Be2c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TodoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9zL1RvZG9JdGVtL1RvZG9JdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNZO0FBQ3JCO0FBQ0c7QUFDYztBQUNGO0FBQ0E7QUFDWjtBQUNxQjtBQUNIO0FBQ1Q7QUFDUDs7QUFFeEMsSUFBTVksUUFBUSxHQUFHLGdCQUFjO1FBQVhDLEtBQUksU0FBSkEsSUFBSTs7SUFDcEIsSUFBTUMsUUFBUSxHQUFHWixpREFBVSxDQUFDRCw0REFBWSxDQUFDO0lBQ3pDLElBQU1jLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUUxQixJQUFNSyxVQUFVLEdBQUcsU0FBQ0MsRUFBRSxFQUFLO1FBQ3ZCSCxRQUFRLENBQUNJLFVBQVUsQ0FBQ0QsRUFBRSxDQUFDLENBQUM7UUFDeEJILFFBQVEsQ0FBQ0ssWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQUNQLElBQUksRUFBSztRQUN6QkUsTUFBTSxDQUFDTSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkJQLFFBQVEsQ0FBQ1EsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLGlDQUFpQztRQUNqQ1IsUUFBUSxDQUFDUyxjQUFjLENBQUNWLElBQUksQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsSUFBTVcsaUJBQWlCLEdBQUcsU0FBQ1AsRUFBRSxFQUFLO1FBQzlCSCxRQUFRLENBQUNLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQU1NLGlCQUFpQixHQUFHLFdBQU07UUFDNUJYLFFBQVEsQ0FBQ0ssWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0lBRUQscUJBQ0ksOERBQUNoQiwwREFBSTtRQUFDdUIsU0FBUyxFQUFFMUIsa0VBQVk7OzBCQUN6Qiw4REFBQ08sMERBQUk7Z0JBQUNxQixTQUFTO2dCQUFDQyxTQUFTLEVBQUMsUUFBUTtnQkFBQ0MsY0FBYyxFQUFDLGVBQWU7Z0JBQUNDLFVBQVUsRUFBQyxZQUFZOztrQ0FDckYsOERBQUMzQixpRUFBVzt3QkFBQ3NCLFNBQVMsRUFBRTFCLHVFQUFpQjs7MENBQ3JDLDhEQUFDSyxnRUFBVTtnQ0FBQzRCLE9BQU8sRUFBQyxJQUFJO2dDQUFDQyxFQUFFLEVBQUU7b0NBQUNDLFVBQVUsRUFBRSxLQUFLO29DQUFFQyxVQUFVLEVBQUUsV0FBVztpQ0FBQztnQ0FBRVYsU0FBUyxFQUFFMUIsd0VBQWtCOztrREFDcEcsOERBQUNzQyxLQUFHO3dDQUFDWixTQUFTLEVBQUUxQiwyRUFBcUI7d0NBQUV3QyxLQUFLLEVBQUU7NENBQUVDLGVBQWUsRUFBRSxNQUFLLENBQWEsTUFBQyxDQUFaNUIsS0FBSSxDQUFDNkIsS0FBSyxFQUFDLEdBQUMsQ0FBQzt5Q0FBRTs7Ozs7NkNBQVE7b0NBQzlGN0IsS0FBSSxDQUFDOEIsS0FBSzs7Ozs7O3FDQUNGOzBDQUNiLDhEQUFDTCxLQUFHO2dDQUFDWixTQUFTLEVBQUUxQix1RUFBaUI7MENBQzdCLDRFQUFDNkMsR0FBQzs7d0NBQUVoQyxLQUFJLENBQUNpQyxXQUFXO3dDQUFDLEdBQUM7Ozs7Ozt5Q0FBSTs7Ozs7cUNBQ3hCOzs7Ozs7NkJBRUk7a0NBQ2QsOERBQUN2QywwREFBSTt3QkFBQ3FCLFNBQVM7d0JBQUNDLFNBQVMsRUFBQyxLQUFLO3dCQUFDQyxjQUFjLEVBQUMsVUFBVTt3QkFBQ0MsVUFBVSxFQUFDLFFBQVE7OzBDQUN6RSw4REFBQ3pCLGlFQUFVO2dDQUFDeUMsWUFBVSxFQUFDLE1BQU07Z0NBQUNDLElBQUksRUFBQyxPQUFPO2dDQUFDQyxPQUFPLEVBQUU7MkNBQU03QixVQUFVLENBQUNQLEtBQUksQ0FBQztpQ0FBQTswQ0FDdEUsNEVBQUNKLHlFQUFROzs7O3lDQUFHOzs7OztxQ0FDSDswQ0FDYiw4REFBQ0gsaUVBQVU7Z0NBQUN5QyxZQUFVLEVBQUMsUUFBUTtnQ0FBQ0MsSUFBSSxFQUFDLE9BQU87Z0NBQUNDLE9BQU8sRUFBRTsyQ0FBTXpCLGlCQUFpQixDQUFDWCxLQUFJLENBQUNJLEVBQUUsQ0FBQztpQ0FBQTswQ0FDbEYsNEVBQUNULDBFQUFVOzs7O3lDQUFHOzs7OztxQ0FDTDs7Ozs7OzZCQUNWOzs7Ozs7cUJBQ0o7MEJBQ1AsOERBQUNFLHVEQUFXO2dCQUNSd0MsSUFBSSxFQUFFcEMsUUFBUSxDQUFDcUMsV0FBVztnQkFDMUJDLFlBQVksRUFBRTNCLGlCQUFpQjtnQkFDL0I0QixhQUFhLEVBQUU7MkJBQU1yQyxVQUFVLENBQUNILEtBQUksQ0FBQ0ksRUFBRSxDQUFDO2lCQUFBO2dCQUN4QzBCLEtBQUssRUFBRSxhQUFhO2dCQUNwQlcsT0FBTyxFQUFFLDRDQUE0Qzs7Ozs7cUJBQ3ZEOzs7Ozs7YUFDQyxDQUVUO0NBRUw7R0F6REsxQyxRQUFROztRQUVLRCxrREFBUzs7O0FBRnRCQyxLQUFBQSxRQUFRO0FBMkRkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2Rvcy9Ub2RvSXRlbS9Ub2RvSXRlbS5qcz9iYTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vVG9kb0l0ZW0ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBUb2Rvc0NvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvdG9kb3MtY29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGVPdXRsaW5lJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdE91dGxpbmVkJztcclxuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4uLy4uL3VpL0FsZXJ0RGlhbG9nJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgVG9kb0l0ZW0gPSAoeyBpdGVtIH0pID0+IHtcclxuICAgIGNvbnN0IHRvZG9zQ3R4ID0gdXNlQ29udGV4dChUb2Rvc0NvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICAgIHRvZG9zQ3R4LnJlbW92ZVRvZG8oaWQpO1xyXG4gICAgICAgIHRvZG9zQ3R4LnNldEFsZXJ0T3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy91cGRhdGUnKTtcclxuICAgICAgICB0b2Rvc0N0eC5zZXRJc0NyZWF0ZShmYWxzZSk7XHJcbiAgICAgICAgLy8gdG9kb3NDdHguc2V0Rm9ybUlzU2hvd24odHJ1ZSk7XHJcbiAgICAgICAgdG9kb3NDdHguc2V0Q3VycmVudEl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbUhhbmRsZXIgPSAoaWQpID0+IHtcclxuICAgICAgICB0b2Rvc0N0eC5zZXRBbGVydE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VBbGVydEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdG9kb3NDdHguc2V0QWxlcnRPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRfaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3tmb250V2VpZ2h0OiAnNTAwJywgZm9udEZhbWlseTogJ09wZW4gU2Fucyd9fSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZF90aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRfY2F0ZWdvcnl9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYHJnYigke2l0ZW0uY29sb3J9KWAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiZWRpdFwiIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUl0ZW0oaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImRlbGV0ZVwiIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW1IYW5kbGVyKGl0ZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEFsZXJ0RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBvcGVuPXt0b2Rvc0N0eC5pc0FsZXJ0T3Blbn1cclxuICAgICAgICAgICAgICAgIGNsb3NlSGFuZGxlcj17Y2xvc2VBbGVydEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25IYW5kbGVyPXsoKSA9PiBkZWxldGVJdGVtKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydEZWxldGUgVGFzayd9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXsnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/J31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtOyJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiVG9kb3NDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJJY29uQnV0dG9uIiwiR3JpZCIsIkRlbGV0ZUljb24iLCJFZGl0SWNvbiIsIkFsZXJ0RGlhbG9nIiwidXNlUm91dGVyIiwiVG9kb0l0ZW0iLCJpdGVtIiwidG9kb3NDdHgiLCJyb3V0ZXIiLCJkZWxldGVJdGVtIiwiaWQiLCJyZW1vdmVUb2RvIiwic2V0QWxlcnRPcGVuIiwidXBkYXRlSXRlbSIsInB1c2giLCJzZXRJc0NyZWF0ZSIsInNldEN1cnJlbnRJdGVtIiwiZGVsZXRlSXRlbUhhbmRsZXIiLCJjbG9zZUFsZXJ0SGFuZGxlciIsImNsYXNzTmFtZSIsImNhcmQiLCJjb250YWluZXIiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjYXJkX2hlYWQiLCJ2YXJpYW50Iiwic3giLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNhcmRfdGl0bGUiLCJkaXYiLCJjYXJkX2NhdGVnb3J5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRpdGxlIiwiY2FyZF9ib2R5IiwicCIsImRlc2NyaXB0aW9uIiwiYXJpYS1sYWJlbCIsInNpemUiLCJvbkNsaWNrIiwib3BlbiIsImlzQWxlcnRPcGVuIiwiY2xvc2VIYW5kbGVyIiwiYWN0aW9uSGFuZGxlciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Todos/TodoItem/TodoItem.js\n");

/***/ })

});