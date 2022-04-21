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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodosReducer\": function() { return /* binding */ TodosReducer; },\n/* harmony export */   \"defaultState\": function() { return /* binding */ defaultState; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar defaultState = {\n    items: [\n        {\n            id: \"11111\",\n            title: \"Cena\",\n            description: \"recuerda comprar cena para celebrar\",\n            date: \"2022-04-17\",\n            color: \"201, 134, 64\"\n        },\n        {\n            id: \"u2\",\n            title: \"Cita\",\n            description: \"llamar a la agencia \",\n            date: \"2022-04-17\",\n            color: \"96, 191, 151\"\n        }, \n    ],\n    // formIsShown: false,\n    currentItem: {\n        id: new Date().getTime(),\n        title: \"\",\n        description: \"\",\n        color: \"\",\n        date: null\n    },\n    isCreate: true,\n    isAlertOpen: false,\n    idItemToRemove: \"\"\n};\n// const ACTIONS = {\n//     ADD: () => { },\n//     REMOVE: () => { },\n//     UPDATE: () => { }\n// }\nvar TodosReducer = function(state, action) {\n    if (action.type === \"ADD\") {\n        var updatedItems = _toConsumableArray(state.items).concat([\n            action.item\n        ]);\n        state = _objectSpread({}, state, {\n            items: updatedItems\n        });\n        return state;\n    }\n    if (action.type === \"REMOVE\") {\n        console.log(action.id, \"<-in remove\");\n        var updatedItems1 = state.items.filter(function(item) {\n            return item.id !== action.id;\n        });\n        state = _objectSpread({}, state, {\n            items: updatedItems1\n        });\n        return state;\n    }\n    if (action.type === \"UPDATE\") {\n        var updatedItems2 = state.items.map(function(item) {\n            return item.id === action.id ? action.item : item;\n        });\n        state = _objectSpread({}, state, {\n            items: updatedItems2\n        });\n        return state;\n    }\n    if (action.type === \"TOGGLE_MODAL\") {\n        state = _objectSpread({}, state, {\n            formIsShown: action.isShown\n        });\n        return state;\n    }\n    if (action.type === \"TOGGLE_ALERT\") {\n        state = _objectSpread({}, state, {\n            isAlertOpen: action.isOpen\n        });\n        return state;\n    }\n    if (action.type === \"SET_ITEM\") {\n        state = _objectSpread({}, state, {\n            currentItem: action.item\n        });\n        return state;\n    }\n    if (action.type === \"CREATE_OPERATION\") {\n        state = _objectSpread({}, state, {\n            isCreate: action.isCreate\n        });\n        return state;\n    }\n    // const result = ACTIONS[action.type]() || defaultState;\n    return defaultState;\n};\n_c = TodosReducer;\nvar _c;\n$RefreshReg$(_c, \"TodosReducer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztZQUFFSCxXQUFXLEVBQUVJLE1BQU0sQ0FBQ1UsTUFBTTtVQUFFLENBQUM7UUFDakQsT0FBT1gsS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSUMsTUFBTSxDQUFDQyxJQUFJLEtBQUssVUFBVSxFQUFFO1FBQzVCRixLQUFLLEdBQUcsa0JBQUtBLEtBQUs7WUFBRVAsV0FBVyxFQUFFUSxNQUFNLENBQUNHLElBQUk7VUFBRTtRQUM5QyxPQUFPSixLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJQyxNQUFNLENBQUNDLElBQUksS0FBSyxrQkFBa0IsRUFBRTtRQUNwQ0YsS0FBSyxHQUFHLGtCQUFLQSxLQUFLO1lBQUVKLFFBQVEsRUFBRUssTUFBTSxDQUFDTCxRQUFRO1VBQUUsQ0FBQztRQUNoRCxPQUFPSSxLQUFLLENBQUM7S0FDaEI7SUFDRCx5REFBeUQ7SUFFekQsT0FBT2QsWUFBWSxDQUFDO0NBQ3ZCLENBQUM7QUFwQ1dhLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvVG9kb3NSZWR1Y2VyLmpzPzkyYzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCIxMTExMVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDZW5hXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInJlY3VlcmRhIGNvbXByYXIgY2VuYSBwYXJhIGNlbGVicmFyXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMjAyMi0wNC0xN1wiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIyMDEsIDEzNCwgNjRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJ1MlwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDaXRhXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImxsYW1hciBhIGxhIGFnZW5jaWEgXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMjAyMi0wNC0xN1wiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCI5NiwgMTkxLCAxNTFcIixcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIC8vIGZvcm1Jc1Nob3duOiBmYWxzZSxcclxuICAgIGN1cnJlbnRJdGVtOiB7XHJcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgY29sb3I6ICcnLFxyXG4gICAgICAgIGRhdGU6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgaXNDcmVhdGU6IHRydWUsXHJcbiAgICBpc0FsZXJ0T3BlbjogZmFsc2UsXHJcbiAgICBpZEl0ZW1Ub1JlbW92ZTogJydcclxufTtcclxuXHJcbi8vIGNvbnN0IEFDVElPTlMgPSB7XHJcbi8vICAgICBBREQ6ICgpID0+IHsgfSxcclxuLy8gICAgIFJFTU9WRTogKCkgPT4geyB9LFxyXG4vLyAgICAgVVBEQVRFOiAoKSA9PiB7IH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9zUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiQUREXCIpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5pdGVtXTtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGl0ZW1zOiB1cGRhdGVkSXRlbXMgfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uaWQsICc8LWluIHJlbW92ZScpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IHN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKTtcclxuICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGl0ZW1zOiB1cGRhdGVkSXRlbXMgfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiVVBEQVRFXCIpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBzdGF0ZS5pdGVtcy5tYXAoaXRlbSA9PiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSA/IGFjdGlvbi5pdGVtIDogaXRlbSk7XHJcbiAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBpdGVtczogdXBkYXRlZEl0ZW1zIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcIlRPR0dMRV9NT0RBTFwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBmb3JtSXNTaG93bjogYWN0aW9uLmlzU2hvd24gfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUT0dHTEVfQUxFUlQnKSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBpc0FsZXJ0T3BlbjogYWN0aW9uLmlzT3BlbiB9O1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NFVF9JVEVNJykge1xyXG4gICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgY3VycmVudEl0ZW06IGFjdGlvbi5pdGVtIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiQ1JFQVRFX09QRVJBVElPTlwiKSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBpc0NyZWF0ZTogYWN0aW9uLmlzQ3JlYXRlIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gQUNUSU9OU1thY3Rpb24udHlwZV0oKSB8fCBkZWZhdWx0U3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcclxufTtcclxuIl0sIm5hbWVzIjpbImRlZmF1bHRTdGF0ZSIsIml0ZW1zIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImNvbG9yIiwiY3VycmVudEl0ZW0iLCJEYXRlIiwiZ2V0VGltZSIsImlzQ3JlYXRlIiwiaXNBbGVydE9wZW4iLCJpZEl0ZW1Ub1JlbW92ZSIsIlRvZG9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVwZGF0ZWRJdGVtcyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwibWFwIiwiZm9ybUlzU2hvd24iLCJpc1Nob3duIiwiaXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/TodosReducer.js\n");

/***/ })

});