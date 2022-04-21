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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoItem.module.css */ \"./components/Todos/TodoItem/TodoItem.module.css\");\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_todos_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/todos-context */ \"./store/todos-context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/DeleteOutline */ \"./node_modules/@mui/icons-material/DeleteOutline.js\");\n/* harmony import */ var _mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/EditOutlined */ \"./node_modules/@mui/icons-material/EditOutlined.js\");\n/* harmony import */ var _ui_AlertDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/AlertDialog */ \"./components/ui/AlertDialog.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodoItem = function(param) {\n    var item1 = param.item;\n    _s();\n    var todosCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_todos_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var deleteItem = function(id) {\n        console.log(id, \"<- to be removed\");\n        todosCtx.removeTodo(id);\n        todosCtx.setAlertOpen(false);\n    };\n    var updateItem = function(item) {\n        router.push(\"/update\");\n        todosCtx.setIsCreate(false);\n        todosCtx.setCurrentItem(item);\n    };\n    var deleteItemHandler = function(id) {\n        console.log(id, \"<- to be removed\");\n        todosCtx.setAlertOpen(true);\n    };\n    var closeAlertHandler = function() {\n        todosCtx.setAlertOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                direction: \"column\",\n                justifyContent: \"space-between\",\n                alignItems: \"flex-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_head),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                variant: \"h6\",\n                                sx: {\n                                    fontWeight: \"500\",\n                                    fontFamily: \"Open Sans\"\n                                },\n                                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_title),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_category),\n                                        style: {\n                                            backgroundColor: \"rgb(\".concat(item1.color, \")\")\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    item1.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_body),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        item1.description,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        container: true,\n                        direction: \"row\",\n                        justifyContent: \"flex-end\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                \"aria-label\": \"edit\",\n                                size: \"small\",\n                                onClick: function() {\n                                    return updateItem(item1);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_EditOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                \"aria-label\": \"delete\",\n                                size: \"small\",\n                                onClick: function() {\n                                    return deleteItemHandler(item1.id);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_AlertDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: todosCtx.isAlertOpen,\n                closeHandler: closeAlertHandler,\n                actionHandler: function() {\n                    return deleteItem(todosCtx.idItemToRemove);\n                },\n                title: \"Delete Task\",\n                message: \"Are you sure you want to delete this task?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\components\\\\Todos\\\\TodoItem\\\\TodoItem.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this);\n};\n_s(TodoItem, \"O1Dkf1EcdPUYk9LideSzs50Be2c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TodoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9zL1RvZG9JdGVtL1RvZG9JdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNZO0FBQ3JCO0FBQ0c7QUFDYztBQUNGO0FBQ0E7QUFDWjtBQUNxQjtBQUNIO0FBQ1Q7QUFDUDs7QUFFeEMsSUFBTVksUUFBUSxHQUFHLGdCQUFjO1FBQVhDLEtBQUksU0FBSkEsSUFBSTs7SUFDcEIsSUFBTUMsUUFBUSxHQUFHWixpREFBVSxDQUFDRCw0REFBWSxDQUFDO0lBQ3pDLElBQU1jLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUUxQixJQUFNSyxVQUFVLEdBQUcsU0FBQ0MsRUFBRSxFQUFLO1FBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbkNILFFBQVEsQ0FBQ00sVUFBVSxDQUFDSCxFQUFFLENBQUMsQ0FBQztRQUN4QkgsUUFBUSxDQUFDTyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7SUFFRCxJQUFNQyxVQUFVLEdBQUcsU0FBQ1QsSUFBSSxFQUFLO1FBQ3pCRSxNQUFNLENBQUNRLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QlQsUUFBUSxDQUFDVSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUJWLFFBQVEsQ0FBQ1csY0FBYyxDQUFDWixJQUFJLENBQUMsQ0FBQztLQUNqQztJQUVELElBQU1hLGlCQUFpQixHQUFHLFNBQUNULEVBQUUsRUFBSztRQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEVBQUUsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25DSCxRQUFRLENBQUNPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQU1NLGlCQUFpQixHQUFHLFdBQU07UUFDNUJiLFFBQVEsQ0FBQ08sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0lBRUQscUJBQ0ksOERBQUNsQiwwREFBSTtRQUFDeUIsU0FBUyxFQUFFNUIsa0VBQVk7OzBCQUN6Qiw4REFBQ08sMERBQUk7Z0JBQUN1QixTQUFTO2dCQUFDQyxTQUFTLEVBQUMsUUFBUTtnQkFBQ0MsY0FBYyxFQUFDLGVBQWU7Z0JBQUNDLFVBQVUsRUFBQyxZQUFZOztrQ0FDckYsOERBQUM3QixpRUFBVzt3QkFBQ3dCLFNBQVMsRUFBRTVCLHVFQUFpQjs7MENBQ3JDLDhEQUFDSyxnRUFBVTtnQ0FBQzhCLE9BQU8sRUFBQyxJQUFJO2dDQUFDQyxFQUFFLEVBQUU7b0NBQUNDLFVBQVUsRUFBRSxLQUFLO29DQUFFQyxVQUFVLEVBQUUsV0FBVztpQ0FBQztnQ0FBRVYsU0FBUyxFQUFFNUIsd0VBQWtCOztrREFDcEcsOERBQUN3QyxLQUFHO3dDQUFDWixTQUFTLEVBQUU1QiwyRUFBcUI7d0NBQUUwQyxLQUFLLEVBQUU7NENBQUVDLGVBQWUsRUFBRSxNQUFLLENBQWEsTUFBQyxDQUFaOUIsS0FBSSxDQUFDK0IsS0FBSyxFQUFDLEdBQUMsQ0FBQzt5Q0FBRTs7Ozs7NkNBQVE7b0NBQzlGL0IsS0FBSSxDQUFDZ0MsS0FBSzs7Ozs7O3FDQUNGOzBDQUNiLDhEQUFDTCxLQUFHO2dDQUFDWixTQUFTLEVBQUU1Qix1RUFBaUI7MENBQzdCLDRFQUFDK0MsR0FBQzs7d0NBQUVsQyxLQUFJLENBQUNtQyxXQUFXO3dDQUFDLEdBQUM7Ozs7Ozt5Q0FBSTs7Ozs7cUNBQ3hCOzs7Ozs7NkJBRUk7a0NBQ2QsOERBQUN6QywwREFBSTt3QkFBQ3VCLFNBQVM7d0JBQUNDLFNBQVMsRUFBQyxLQUFLO3dCQUFDQyxjQUFjLEVBQUMsVUFBVTt3QkFBQ0MsVUFBVSxFQUFDLFFBQVE7OzBDQUN6RSw4REFBQzNCLGlFQUFVO2dDQUFDMkMsWUFBVSxFQUFDLE1BQU07Z0NBQUNDLElBQUksRUFBQyxPQUFPO2dDQUFDQyxPQUFPLEVBQUU7MkNBQU03QixVQUFVLENBQUNULEtBQUksQ0FBQztpQ0FBQTswQ0FDdEUsNEVBQUNKLHlFQUFROzs7O3lDQUFHOzs7OztxQ0FDSDswQ0FDYiw4REFBQ0gsaUVBQVU7Z0NBQUMyQyxZQUFVLEVBQUMsUUFBUTtnQ0FBQ0MsSUFBSSxFQUFDLE9BQU87Z0NBQUNDLE9BQU8sRUFBRTsyQ0FBTXpCLGlCQUFpQixDQUFDYixLQUFJLENBQUNJLEVBQUUsQ0FBQztpQ0FBQTswQ0FDbEYsNEVBQUNULDBFQUFVOzs7O3lDQUFHOzs7OztxQ0FDTDs7Ozs7OzZCQUNWOzs7Ozs7cUJBQ0o7MEJBQ1AsOERBQUNFLHVEQUFXO2dCQUNSMEMsSUFBSSxFQUFFdEMsUUFBUSxDQUFDdUMsV0FBVztnQkFDMUJDLFlBQVksRUFBRTNCLGlCQUFpQjtnQkFDL0I0QixhQUFhLEVBQUU7MkJBQU12QyxVQUFVLENBQUNGLFFBQVEsQ0FBQzBDLGNBQWMsQ0FBQztpQkFBQTtnQkFDeERYLEtBQUssRUFBRSxhQUFhO2dCQUNwQlksT0FBTyxFQUFFLDRDQUE0Qzs7Ozs7cUJBQ3ZEOzs7Ozs7YUFDQyxDQUVUO0NBRUw7R0ExREs3QyxRQUFROztRQUVLRCxrREFBUzs7O0FBRnRCQyxLQUFBQSxRQUFRO0FBNERkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2Rvcy9Ub2RvSXRlbS9Ub2RvSXRlbS5qcz9iYTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vVG9kb0l0ZW0ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBUb2Rvc0NvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvdG9kb3MtY29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGVPdXRsaW5lJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdE91dGxpbmVkJztcclxuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4uLy4uL3VpL0FsZXJ0RGlhbG9nJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgVG9kb0l0ZW0gPSAoeyBpdGVtIH0pID0+IHtcclxuICAgIGNvbnN0IHRvZG9zQ3R4ID0gdXNlQ29udGV4dChUb2Rvc0NvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLCc8LSB0byBiZSByZW1vdmVkJyk7XHJcbiAgICAgICAgdG9kb3NDdHgucmVtb3ZlVG9kbyhpZCk7XHJcbiAgICAgICAgdG9kb3NDdHguc2V0QWxlcnRPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3VwZGF0ZScpO1xyXG4gICAgICAgIHRvZG9zQ3R4LnNldElzQ3JlYXRlKGZhbHNlKTtcclxuICAgICAgICB0b2Rvc0N0eC5zZXRDdXJyZW50SXRlbShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVJdGVtSGFuZGxlciA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLCc8LSB0byBiZSByZW1vdmVkJyk7XHJcbiAgICAgICAgdG9kb3NDdHguc2V0QWxlcnRPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQWxlcnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRvZG9zQ3R4LnNldEFsZXJ0T3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkX2hlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7Zm9udFdlaWdodDogJzUwMCcsIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRfdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkX2NhdGVnb3J5fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGByZ2IoJHtpdGVtLmNvbG9yfSlgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZF9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImVkaXRcIiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVJdGVtKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJkZWxldGVcIiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtSGFuZGxlcihpdGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxBbGVydERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgb3Blbj17dG9kb3NDdHguaXNBbGVydE9wZW59XHJcbiAgICAgICAgICAgICAgICBjbG9zZUhhbmRsZXI9e2Nsb3NlQWxlcnRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uSGFuZGxlcj17KCkgPT4gZGVsZXRlSXRlbSh0b2Rvc0N0eC5pZEl0ZW1Ub1JlbW92ZSl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17J0RlbGV0ZSBUYXNrJ31cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9eydBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz8nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07Il0sIm5hbWVzIjpbImNsYXNzZXMiLCJUb2Rvc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVHlwb2dyYXBoeSIsIkljb25CdXR0b24iLCJHcmlkIiwiRGVsZXRlSWNvbiIsIkVkaXRJY29uIiwiQWxlcnREaWFsb2ciLCJ1c2VSb3V0ZXIiLCJUb2RvSXRlbSIsIml0ZW0iLCJ0b2Rvc0N0eCIsInJvdXRlciIsImRlbGV0ZUl0ZW0iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVUb2RvIiwic2V0QWxlcnRPcGVuIiwidXBkYXRlSXRlbSIsInB1c2giLCJzZXRJc0NyZWF0ZSIsInNldEN1cnJlbnRJdGVtIiwiZGVsZXRlSXRlbUhhbmRsZXIiLCJjbG9zZUFsZXJ0SGFuZGxlciIsImNsYXNzTmFtZSIsImNhcmQiLCJjb250YWluZXIiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjYXJkX2hlYWQiLCJ2YXJpYW50Iiwic3giLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNhcmRfdGl0bGUiLCJkaXYiLCJjYXJkX2NhdGVnb3J5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRpdGxlIiwiY2FyZF9ib2R5IiwicCIsImRlc2NyaXB0aW9uIiwiYXJpYS1sYWJlbCIsInNpemUiLCJvbkNsaWNrIiwib3BlbiIsImlzQWxlcnRPcGVuIiwiY2xvc2VIYW5kbGVyIiwiYWN0aW9uSGFuZGxlciIsImlkSXRlbVRvUmVtb3ZlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Todos/TodoItem/TodoItem.js\n");

/***/ })

});