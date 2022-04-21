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

/***/ "./store/TodosProvider.js":
/*!********************************!*\
  !*** ./store/TodosProvider.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todos_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-context */ \"./store/todos-context.js\");\n/* harmony import */ var _reducers_TodosReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/TodosReducer */ \"./store/reducers/TodosReducer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodosProvider = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducers_TodosReducer__WEBPACK_IMPORTED_MODULE_2__.TodosReducer, _reducers_TodosReducer__WEBPACK_IMPORTED_MODULE_2__.defaultState), todoState = ref[0], dispatchTodoAction = ref[1];\n    var todosContext = {\n        items: todoState.items,\n        totalItems: todoState.totalItems,\n        currentItem: todoState.currentItem,\n        isCreate: todoState.isCreate,\n        isAlertOpen: todoState.isAlertOpen,\n        idItemToRemove: todoState.idItemToRemove,\n        addTodo: function(item) {\n            return dispatchTodoAction({\n                type: \"ADD\",\n                item: item\n            });\n        },\n        removeTodo: function(id) {\n            return dispatchTodoAction({\n                type: \"REMOVE\",\n                id: id\n            });\n        },\n        updateTodo: function(id, item) {\n            return dispatchTodoAction({\n                type: \"UPDATE\",\n                id: id,\n                item: item\n            });\n        },\n        setAlertOpen: function(isOpen) {\n            return dispatchTodoAction({\n                type: \"TOGGLE_ALERT\",\n                isOpen: isOpen\n            });\n        },\n        setCurrentItem: function(item) {\n            return dispatchTodoAction({\n                type: \"SET_ITEM\",\n                item: item\n            });\n        },\n        setIsCreate: function(isCreate) {\n            return dispatchTodoAction({\n                type: \"CREATE_OPERATION\",\n                isCreate: isCreate\n            });\n        },\n        setIdToRemove: function(itemId) {\n            return dispatchTodoAction({\n                type: \"SET_ITEM_TO_REMOVE\",\n                itemId: itemId\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todos_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n        value: todosContext,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\geraldine.nunezl\\\\Documents\\\\cursos\\\\todo_list_challenge\\\\store\\\\TodosProvider.js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, _this);\n};\n_s(TodosProvider, \"LnuT4xb7RouFOW/djclxVOCMaV4=\");\n_c = TodosProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodosProvider);\nvar _c;\n$RefreshReg$(_c, \"TodosProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9Ub2Rvc1Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDMEI7QUFDbEM7O0FBRW5DLElBQU1JLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLElBQXdDRixHQUFzQyxHQUF0Q0EsaURBQVUsQ0FBQ0YsZ0VBQVksRUFBRUMsZ0VBQVksQ0FBQyxFQUxsRixTQUtvQixHQUF3QkMsR0FBc0MsR0FBOUQsRUFMcEIsa0JBS3dDLEdBQUlBLEdBQXNDLEdBQTFDO0lBRXBDLElBQU1LLFlBQVksR0FBRztRQUNqQkMsS0FBSyxFQUFFSCxTQUFTLENBQUNHLEtBQUs7UUFDdEJDLFVBQVUsRUFBRUosU0FBUyxDQUFDSSxVQUFVO1FBQ2hDQyxXQUFXLEVBQUVMLFNBQVMsQ0FBQ0ssV0FBVztRQUNsQ0MsUUFBUSxFQUFFTixTQUFTLENBQUNNLFFBQVE7UUFDNUJDLFdBQVcsRUFBRVAsU0FBUyxDQUFDTyxXQUFXO1FBQ2xDQyxjQUFjLEVBQUVSLFNBQVMsQ0FBQ1EsY0FBYztRQUN4Q0MsT0FBTyxFQUFFQyxTQUFBQSxJQUFJO21CQUFJVCxrQkFBa0IsQ0FBQztnQkFBRVUsSUFBSSxFQUFFLEtBQUs7Z0JBQUVELElBQUksRUFBSkEsSUFBSTthQUFFLENBQUM7U0FBQTtRQUMxREUsVUFBVSxFQUFFQyxTQUFBQSxFQUFFO21CQUFJWixrQkFBa0IsQ0FBQztnQkFBRVUsSUFBSSxFQUFFLFFBQVE7Z0JBQUVFLEVBQUUsRUFBRkEsRUFBRTthQUFFLENBQUM7U0FBQTtRQUM1REMsVUFBVSxFQUFFLFNBQUNELEVBQUUsRUFBRUgsSUFBSTttQkFBS1Qsa0JBQWtCLENBQUM7Z0JBQUVVLElBQUksRUFBRSxRQUFRO2dCQUFFRSxFQUFFLEVBQUZBLEVBQUU7Z0JBQUVILElBQUksRUFBSkEsSUFBSTthQUFFLENBQUM7U0FBQTtRQUMxRUssWUFBWSxFQUFFQyxTQUFBQSxNQUFNO21CQUFJZixrQkFBa0IsQ0FBQztnQkFBRVUsSUFBSSxFQUFFLGNBQWM7Z0JBQUVLLE1BQU0sRUFBTkEsTUFBTTthQUFFLENBQUM7U0FBQTtRQUM1RUMsY0FBYyxFQUFFLFNBQUNQLElBQUk7bUJBQUtULGtCQUFrQixDQUFDO2dCQUFFVSxJQUFJLEVBQUUsVUFBVTtnQkFBRUQsSUFBSSxFQUFKQSxJQUFJO2FBQUUsQ0FBQztTQUFBO1FBQ3hFUSxXQUFXLEVBQUUsU0FBQ1osUUFBUTttQkFBS0wsa0JBQWtCLENBQUM7Z0JBQUVVLElBQUksRUFBRSxrQkFBa0I7Z0JBQUVMLFFBQVEsRUFBUkEsUUFBUTthQUFFLENBQUM7U0FBQTtRQUNyRmEsYUFBYSxFQUFFLFNBQUNDLE1BQU07bUJBQUtuQixrQkFBa0IsQ0FBQztnQkFBRVUsSUFBSSxFQUFFLG9CQUFvQjtnQkFBRVMsTUFBTSxFQUFOQSxNQUFNO2FBQUMsQ0FBQztTQUFBO0tBQ3ZGO0lBRUQscUJBQU8sOERBQUMxQiwrREFBcUI7UUFBQzRCLEtBQUssRUFBRXBCLFlBQVk7a0JBQzVDSCxLQUFLLENBQUN3QixRQUFROzs7OzthQUNLO0NBQzNCO0dBdEJLekIsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBd0JuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL1RvZG9zUHJvdmlkZXIuanM/ZWQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kb3NDb250ZXh0IGZyb20gXCIuL3RvZG9zLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgVG9kb3NSZWR1Y2VyLCBkZWZhdWx0U3RhdGUgfSBmcm9tIFwiLi9yZWR1Y2Vycy9Ub2Rvc1JlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVG9kb3NQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3RvZG9TdGF0ZSwgZGlzcGF0Y2hUb2RvQWN0aW9uXSA9IHVzZVJlZHVjZXIoVG9kb3NSZWR1Y2VyLCBkZWZhdWx0U3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9zQ29udGV4dCA9IHtcclxuICAgICAgICBpdGVtczogdG9kb1N0YXRlLml0ZW1zLFxyXG4gICAgICAgIHRvdGFsSXRlbXM6IHRvZG9TdGF0ZS50b3RhbEl0ZW1zLFxyXG4gICAgICAgIGN1cnJlbnRJdGVtOiB0b2RvU3RhdGUuY3VycmVudEl0ZW0sXHJcbiAgICAgICAgaXNDcmVhdGU6IHRvZG9TdGF0ZS5pc0NyZWF0ZSxcclxuICAgICAgICBpc0FsZXJ0T3BlbjogdG9kb1N0YXRlLmlzQWxlcnRPcGVuLFxyXG4gICAgICAgIGlkSXRlbVRvUmVtb3ZlOiB0b2RvU3RhdGUuaWRJdGVtVG9SZW1vdmUsXHJcbiAgICAgICAgYWRkVG9kbzogaXRlbSA9PiBkaXNwYXRjaFRvZG9BY3Rpb24oeyB0eXBlOiAnQUREJywgaXRlbSB9KSxcclxuICAgICAgICByZW1vdmVUb2RvOiBpZCA9PiBkaXNwYXRjaFRvZG9BY3Rpb24oeyB0eXBlOiAnUkVNT1ZFJywgaWQgfSksXHJcbiAgICAgICAgdXBkYXRlVG9kbzogKGlkLCBpdGVtKSA9PiBkaXNwYXRjaFRvZG9BY3Rpb24oeyB0eXBlOiAnVVBEQVRFJywgaWQsIGl0ZW0gfSksXHJcbiAgICAgICAgc2V0QWxlcnRPcGVuOiBpc09wZW4gPT4gZGlzcGF0Y2hUb2RvQWN0aW9uKHsgdHlwZTogJ1RPR0dMRV9BTEVSVCcsIGlzT3BlbiB9KSxcclxuICAgICAgICBzZXRDdXJyZW50SXRlbTogKGl0ZW0pID0+IGRpc3BhdGNoVG9kb0FjdGlvbih7IHR5cGU6ICdTRVRfSVRFTScsIGl0ZW0gfSksXHJcbiAgICAgICAgc2V0SXNDcmVhdGU6IChpc0NyZWF0ZSkgPT4gZGlzcGF0Y2hUb2RvQWN0aW9uKHsgdHlwZTogJ0NSRUFURV9PUEVSQVRJT04nLCBpc0NyZWF0ZSB9KSxcclxuICAgICAgICBzZXRJZFRvUmVtb3ZlOiAoaXRlbUlkKSA9PiBkaXNwYXRjaFRvZG9BY3Rpb24oeyB0eXBlOiAnU0VUX0lURU1fVE9fUkVNT1ZFJywgaXRlbUlkfSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIDxUb2Rvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RvZG9zQ29udGV4dH0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Ub2Rvc0NvbnRleHQuUHJvdmlkZXI+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2Rvc1Byb3ZpZGVyO1xyXG5cclxuIl0sIm5hbWVzIjpbIlRvZG9zQ29udGV4dCIsIlRvZG9zUmVkdWNlciIsImRlZmF1bHRTdGF0ZSIsInVzZVJlZHVjZXIiLCJUb2Rvc1Byb3ZpZGVyIiwicHJvcHMiLCJ0b2RvU3RhdGUiLCJkaXNwYXRjaFRvZG9BY3Rpb24iLCJ0b2Rvc0NvbnRleHQiLCJpdGVtcyIsInRvdGFsSXRlbXMiLCJjdXJyZW50SXRlbSIsImlzQ3JlYXRlIiwiaXNBbGVydE9wZW4iLCJpZEl0ZW1Ub1JlbW92ZSIsImFkZFRvZG8iLCJpdGVtIiwidHlwZSIsInJlbW92ZVRvZG8iLCJpZCIsInVwZGF0ZVRvZG8iLCJzZXRBbGVydE9wZW4iLCJpc09wZW4iLCJzZXRDdXJyZW50SXRlbSIsInNldElzQ3JlYXRlIiwic2V0SWRUb1JlbW92ZSIsIml0ZW1JZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/TodosProvider.js\n");

/***/ })

});