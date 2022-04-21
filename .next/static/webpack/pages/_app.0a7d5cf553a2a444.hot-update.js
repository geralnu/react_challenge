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

/***/ "./store/reducers/TodosReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/TodosReducer.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodosReducer\": function() { return /* binding */ TodosReducer; },\n/* harmony export */   \"defaultState\": function() { return /* binding */ defaultState; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar defaultState = {\n    items: [\n        {\n            id: \"11111\",\n            title: \"Cena\",\n            description: \"recuerda comprar cena para celebrar\",\n            date: \"2022-04-17\",\n            color: \"201, 134, 64\"\n        },\n        {\n            id: \"u2\",\n            title: \"Cita\",\n            description: \"llamar a la agencia \",\n            date: \"2022-04-17\",\n            color: \"96, 191, 151\"\n        }, \n    ],\n    // formIsShown: false,\n    currentItem: {\n        id: new Date().getTime(),\n        title: \"\",\n        description: \"\",\n        color: \"\",\n        date: null\n    },\n    isCreate: true,\n    isAlertOpen: false,\n    idItemToRemove: null\n};\nvar ACTIONS = {\n    ADD: function(state, action) {\n        var updatedItems = _toConsumableArray(state.items).concat([\n            action.item\n        ]);\n        return _objectSpread({}, state, {\n            items: updatedItems\n        });\n    }\n};\nvar TodosReducer = function(state, action) {\n    /*if (action.type === \"ADD\") {\r\n        const updatedItems = [...state.items, action.item];\r\n        state = { ...state, items: updatedItems };\r\n        return state;\r\n    }*/ if (action.type === \"REMOVE\") {\n        console.log(action.id, \"<-in remove\");\n        var updatedItems = state.items.filter(function(item) {\n            return item.id !== action.id;\n        });\n        state = _objectSpread({}, state, {\n            items: updatedItems\n        });\n        return state;\n    }\n    if (action.type === \"UPDATE\") {\n        var updatedItems1 = state.items.map(function(item) {\n            return item.id === action.id ? action.item : item;\n        });\n        state = _objectSpread({}, state, {\n            items: updatedItems1\n        });\n        return state;\n    }\n    if (action.type === \"TOGGLE_MODAL\") {\n        state = _objectSpread({}, state, {\n            formIsShown: action.isShown\n        });\n        return state;\n    }\n    if (action.type === \"TOGGLE_ALERT\") {\n        state = _objectSpread({}, state, {\n            isAlertOpen: action.isOpen\n        });\n        return state;\n    }\n    if (action.type === \"SET_ITEM\") {\n        state = _objectSpread({}, state, {\n            currentItem: action.item\n        });\n        return state;\n    }\n    if (action.type === \"CREATE_OPERATION\") {\n        state = _objectSpread({}, state, {\n            isCreate: action.isCreate\n        });\n        return state;\n    }\n    return ACTIONS[action.type](state, action) || defaultState;\n// return defaultState;\n};\n_c = TodosReducer;\nvar _c;\n$RefreshReg$(_c, \"TodosReducer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9Ub2Rvc1JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7SUFDeEJDLEtBQUssRUFBRTtRQUNIO1lBQ0lDLEVBQUUsRUFBRSxPQUFPO1lBQ1hDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbERDLElBQUksRUFBRSxZQUFZO1lBQ2xCQyxLQUFLLEVBQUUsY0FBYztTQUN4QjtRQUNEO1lBQ0lKLEVBQUUsRUFBRSxJQUFJO1lBQ1JDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkNDLElBQUksRUFBRSxZQUFZO1lBQ2xCQyxLQUFLLEVBQUUsY0FBYztTQUN4QjtLQUNKO0lBQ0Qsc0JBQXNCO0lBQ3RCQyxXQUFXLEVBQUU7UUFDVEwsRUFBRSxFQUFFLElBQUlNLElBQUksRUFBRSxDQUFDQyxPQUFPLEVBQUU7UUFDeEJOLEtBQUssRUFBRSxFQUFFO1FBQ1RDLFdBQVcsRUFBRSxFQUFFO1FBQ2ZFLEtBQUssRUFBRSxFQUFFO1FBQ1RELElBQUksRUFBRSxJQUFJO0tBQ2I7SUFDREssUUFBUSxFQUFFLElBQUk7SUFDZEMsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLGNBQWMsRUFBRSxJQUFJO0NBQ3ZCLENBQUM7QUFFRixJQUFNQyxPQUFPLEdBQUc7SUFDWkMsR0FBRyxFQUFFLFNBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFLO1FBQ3BCLElBQU1DLFlBQVksR0FBRyxtQkFBSUYsS0FBSyxDQUFDZCxLQUFLLENBQVhjLFFBQUo7WUFBaUJDLE1BQU0sQ0FBQ0UsSUFBSTtTQUFDO1FBQ2xELE9BQU8sa0JBQUtILEtBQUs7WUFBRWQsS0FBSyxFQUFFZ0IsWUFBWTtVQUFFLENBQUM7S0FDM0M7Q0FHTDtBQUVNLElBQU1FLFlBQVksR0FBRyxTQUFDSixLQUFLLEVBQUVDLE1BQU0sRUFBSztJQUUzQztRQU1JSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sTUFBTSxDQUFDZCxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdEMsSUFBTWUsWUFBWSxHQUFHRixLQUFLLENBQUNkLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQzttQkFBVUw7U0FBcUIsQ0FBQztRQUN4RUgsS0FBSyxHQUFHLGtCQUFLQSxLQUFLO1lBQUVkLEtBQUssRUFBRWdCLFlBQVk7VUFBRSxDQUFDO1FBQzFDO0tBQ0g7SUFDRCxJQUFJRCxNQUFNLENBQUNJLElBQUksS0FBSztRQUNoQjttQkFBNkM7O1FBQzdDTCxLQUFLLEdBQUcsa0JBQUtBO1lBQU9kLEtBQUssRUFBRWdCLGFBQVk7VUFBRSxDQUFDO1FBQzFDO0tBQ0g7SUFDRCxJQUFJRCxNQUFNLENBQUNJLElBQUksS0FBSztRQUNoQkw7WUFBb0JVOztRQUNwQixPQUFPVixLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJQyxNQUFNLENBQUNJLElBQUksS0FBSyxjQUFjO1FBQzlCTDtZQUFvQko7O1FBQ3BCLE9BQU9JLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUlDLE1BQU0sQ0FBQ0ksSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUM1Qkw7WUFBb0JSOztRQUNwQixPQUFPUSxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJQyxNQUFNLENBQUNJLElBQUksS0FBSztRQUNoQkw7WUFBb0JMLFFBQVE7O1FBQzVCLE9BQU9LLEtBQUssQ0FBQztLQUNoQjtJQUVELE9BQU9GLE9BQU8sQ0FBQ0csTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQ0wsS0FBSztBQUVsQztDQUNGLENBQUM7QUF0Q1dJLEtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL1RvZG9zUmVkdWNlci5qcz85MmMyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiMTExMTFcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ2VuYVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJyZWN1ZXJkYSBjb21wcmFyIGNlbmEgcGFyYSBjZWxlYnJhclwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMjItMDQtMTdcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiMjAxLCAxMzQsIDY0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwidTJcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ2l0YVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsbGFtYXIgYSBsYSBhZ2VuY2lhIFwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMjItMDQtMTdcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiOTYsIDE5MSwgMTUxXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyBmb3JtSXNTaG93bjogZmFsc2UsXHJcbiAgICBjdXJyZW50SXRlbToge1xyXG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGNvbG9yOiAnJyxcclxuICAgICAgICBkYXRlOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGlzQ3JlYXRlOiB0cnVlLFxyXG4gICAgaXNBbGVydE9wZW46IGZhbHNlLFxyXG4gICAgaWRJdGVtVG9SZW1vdmU6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IEFDVElPTlMgPSB7XHJcbiAgICBBREQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24uaXRlbV07XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiB1cGRhdGVkSXRlbXMgfTtcclxuICAgICB9LFxyXG4gICAgLy8gUkVNT1ZFOiAoKSA9PiB7IH0sXHJcbiAgICAvLyBVUERBVEU6ICgpID0+IHsgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb3NSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgLyppZiAoYWN0aW9uLnR5cGUgPT09IFwiQUREXCIpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5pdGVtXTtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGl0ZW1zOiB1cGRhdGVkSXRlbXMgfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9Ki9cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJSRU1PVkVcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5pZCwgJzwtaW4gcmVtb3ZlJyk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uaWQpO1xyXG4gICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgaXRlbXM6IHVwZGF0ZWRJdGVtcyB9O1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJVUERBVEVcIikge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IHN0YXRlLml0ZW1zLm1hcChpdGVtID0+IChpdGVtLmlkID09PSBhY3Rpb24uaWQpID8gYWN0aW9uLml0ZW0gOiBpdGVtKTtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGl0ZW1zOiB1cGRhdGVkSXRlbXMgfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiVE9HR0xFX01PREFMXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGZvcm1Jc1Nob3duOiBhY3Rpb24uaXNTaG93biB9O1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RPR0dMRV9BTEVSVCcpIHtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGlzQWxlcnRPcGVuOiBhY3Rpb24uaXNPcGVuIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU0VUX0lURU0nKSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBjdXJyZW50SXRlbTogYWN0aW9uLml0ZW0gfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJDUkVBVEVfT1BFUkFUSU9OXCIpIHtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGlzQ3JlYXRlOiBhY3Rpb24uaXNDcmVhdGUgfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBBQ1RJT05TW2FjdGlvbi50eXBlXShzdGF0ZSwgYWN0aW9uKSB8fCBkZWZhdWx0U3RhdGU7XHJcblxyXG4gICAvLyByZXR1cm4gZGVmYXVsdFN0YXRlO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiZGVmYXVsdFN0YXRlIiwiaXRlbXMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiY29sb3IiLCJjdXJyZW50SXRlbSIsIkRhdGUiLCJnZXRUaW1lIiwiaXNDcmVhdGUiLCJpc0FsZXJ0T3BlbiIsImlkSXRlbVRvUmVtb3ZlIiwiQUNUSU9OUyIsIkFERCIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlZEl0ZW1zIiwiaXRlbSIsIlRvZG9zUmVkdWNlciIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwibWFwIiwiZm9ybUlzU2hvd24iLCJpc1Nob3duIiwiaXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/TodosReducer.js\n");

/***/ })

});