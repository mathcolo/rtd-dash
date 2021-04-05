webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/LineGrid/sorting.ts":
/*!********************************************!*\
  !*** ./src/components/LineGrid/sorting.ts ***!
  \********************************************/
/*! exports provided: sortFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortFunctions\", function() { return sortFunctions; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nvar colorLines = [\"red\", \"green\", \"blue\", \"orange\", \"silver\"];\nvar keyBusRoutes = new Set([1, 15, 22, 23, 28, 32, 39, 57, 66, 71, 73, 77, 111, 116, 117].map(String));\n\nvar kind = function kind(line) {\n  if (colorLines.includes(line.lineKind)) {\n    return 0;\n  } else if (line.lineKind === \"regional-rail\") {\n    return 2;\n  } else if (line.routeIds.some(function (rid) {\n    return keyBusRoutes.includes(rid);\n  })) {\n    return 1;\n  }\n\n  return 1000 + Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(line.routeIds.map(function (x) {\n    return parseInt(x);\n  })));\n};\n\nvar isCancelled = function isCancelled(r) {\n  return r.serviceRegimes.current.weekday.cancelled;\n};\n\nvar lowestServiceFraction = function lowestServiceFraction(r) {\n  return r.serviceFraction;\n};\n\nvar highestServiceFraction = function highestServiceFraction(r) {\n  return -r.serviceFraction;\n};\n\nvar lowestTotalTrips = function lowestTotalTrips(r) {\n  return r.totalTrips;\n};\n\nvar highestTotalTrips = function highestTotalTrips(r) {\n  return -r.totalTrips;\n};\n\nvar highestRidershipFraction = function highestRidershipFraction(r) {\n  var ridershipHistory = r.ridershipHistory;\n\n  if (ridershipHistory && !isCancelled(r)) {\n    return ridershipHistory[0] / ridershipHistory[ridershipHistory.length - 1];\n  }\n\n  return Infinity;\n};\n\nvar lowestRidershipFraction = function lowestRidershipFraction(r) {\n  var ridershipHistory = r.ridershipHistory;\n\n  if (ridershipHistory && !isCancelled(r)) {\n    return -highestRidershipFraction(r);\n  }\n\n  return Infinity;\n};\n\nvar lowestTotalRidership = function lowestTotalRidership(r) {\n  var ridershipHistory = r.ridershipHistory;\n\n  if (ridershipHistory && !isCancelled(r)) {\n    return ridershipHistory[ridershipHistory.length - 1];\n  }\n\n  return Infinity;\n};\n\nvar highestTotalRidership = function highestTotalRidership(r) {\n  var ridershipHistory = r.ridershipHistory;\n\n  if (ridershipHistory && !isCancelled(r)) {\n    return -lowestTotalRidership(r);\n  }\n\n  return Infinity;\n};\n\nvar sortFunctions = {\n  kind: kind,\n  lowestServiceFraction: lowestServiceFraction,\n  highestServiceFraction: highestServiceFraction,\n  lowestTotalTrips: lowestTotalTrips,\n  highestTotalTrips: highestTotalTrips,\n  lowestRidershipFraction: lowestRidershipFraction,\n  highestRidershipFraction: highestRidershipFraction,\n  lowestTotalRidership: lowestTotalRidership,\n  highestTotalRidership: highestTotalRidership\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lR3JpZC9zb3J0aW5nLnRzPzc0ZjEiXSwibmFtZXMiOlsiY29sb3JMaW5lcyIsImtleUJ1c1JvdXRlcyIsIlNldCIsIm1hcCIsIlN0cmluZyIsImtpbmQiLCJsaW5lIiwiaW5jbHVkZXMiLCJsaW5lS2luZCIsInJvdXRlSWRzIiwic29tZSIsInJpZCIsIk1hdGgiLCJtaW4iLCJ4IiwicGFyc2VJbnQiLCJpc0NhbmNlbGxlZCIsInIiLCJzZXJ2aWNlUmVnaW1lcyIsImN1cnJlbnQiLCJ3ZWVrZGF5IiwiY2FuY2VsbGVkIiwibG93ZXN0U2VydmljZUZyYWN0aW9uIiwic2VydmljZUZyYWN0aW9uIiwiaGlnaGVzdFNlcnZpY2VGcmFjdGlvbiIsImxvd2VzdFRvdGFsVHJpcHMiLCJ0b3RhbFRyaXBzIiwiaGlnaGVzdFRvdGFsVHJpcHMiLCJoaWdoZXN0UmlkZXJzaGlwRnJhY3Rpb24iLCJyaWRlcnNoaXBIaXN0b3J5IiwibGVuZ3RoIiwiSW5maW5pdHkiLCJsb3dlc3RSaWRlcnNoaXBGcmFjdGlvbiIsImxvd2VzdFRvdGFsUmlkZXJzaGlwIiwiaGlnaGVzdFRvdGFsUmlkZXJzaGlwIiwic29ydEZ1bmN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLFFBQW5DLENBQW5CO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLElBQUlDLEdBQUosQ0FDakIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEdBQWhELEVBQXFELEdBQXJELEVBQTBELEdBQTFELEVBQStEQyxHQUEvRCxDQUFtRUMsTUFB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QXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDakIsQ0FBRCxFQUFpQjtBQUFBLE1BQ25DWSxnQkFEbUMsR0FDZFosQ0FEYyxDQUNuQ1ksZ0JBRG1DOztBQUUzQyxNQUFJQSxnQkFBZ0IsSUFBSSxDQUFDYixXQUFXLENBQUNDLENBQUQsQ0FBcEMsRUFBeUM7QUFDckMsV0FBTyxDQUFDZ0Isb0JBQW9CLENBQUNoQixDQUFELENBQTVCO0FBQ0g7O0FBQ0QsU0FBT2MsUUFBUDtBQUNILENBTkQ7O0FBUU8sSUFBTUksYUFBYSxHQUFHO0FBQ3pCOUIsTUFBSSxFQUFKQSxJQUR5QjtBQUV6QmlCLHVCQUFxQixFQUFyQkEscUJBRnlCO0FBR3pCRSx3QkFBc0IsRUFBdEJBLHNCQUh5QjtBQUl6QkMsa0JBQWdCLEVBQWhCQSxnQkFKeUI7QUFLekJFLG1CQUFpQixFQUFqQkEsaUJBTHlCO0FBTXpCSyx5QkFBdUIsRUFBdkJBLHVCQU55QjtBQU96QkosMEJBQXdCLEVBQXhCQSx3QkFQeUI7QUFRekJLLHNCQUFvQixFQUFwQkEsb0JBUnlCO0FBU3pCQyx1QkFBcUIsRUFBckJBO0FBVHlCLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGluZUdyaWQvc29ydGluZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVEYXRhIH0gZnJvbSBcInR5cGVzXCI7XG5cbmNvbnN0IGNvbG9yTGluZXMgPSBbXCJyZWRcIiwgXCJncmVlblwiLCBcImJsdWVcIiwgXCJvcmFuZ2VcIiwgXCJzaWx2ZXJcIl07XG5jb25zdCBrZXlCdXNSb3V0ZXMgPSBuZXcgU2V0KFxuICAgIFsxLCAxNSwgMjIsIDIzLCAyOCwgMzIsIDM5LCA1NywgNjYsIDcxLCA3MywgNzcsIDExMSwgMTE2LCAxMTddLm1hcChTdHJpbmcpXG4pO1xuXG5jb25zdCBraW5kID0gKGxpbmU6IExpbmVEYXRhKSA9PiB7XG4gICAgaWYgKGNvbG9yTGluZXMuaW5jbHVkZXMobGluZS5saW5lS2luZCkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChsaW5lLmxpbmVLaW5kID09PSBcInJlZ2lvbmFsLXJhaWxcIikge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2UgaWYgKGxpbmUucm91dGVJZHMuc29tZSgocmlkKSA9PiBrZXlCdXNSb3V0ZXMuaW5jbHVkZXMocmlkKSkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAxMDAwICsgTWF0aC5taW4oLi4ubGluZS5yb3V0ZUlkcy5tYXAoKHgpID0+IHBhcnNlSW50KHgpKSk7XG59O1xuXG5jb25zdCBpc0NhbmNlbGxlZCA9IChyOiBMaW5lRGF0YSkgPT4gci5zZXJ2aWNlUmVnaW1lcy5jdXJyZW50LndlZWtkYXkuY2FuY2VsbGVkO1xuXG5jb25zdCBsb3dlc3RTZXJ2aWNlRnJhY3Rpb24gPSAocjogTGluZURhdGEpID0+IHIuc2VydmljZUZyYWN0aW9uO1xuY29uc3QgaGlnaGVzdFNlcnZpY2VGcmFjdGlvbiA9IChyOiBMaW5lRGF0YSkgPT4gLXIuc2VydmljZUZyYWN0aW9uO1xuXG5jb25zdCBsb3dlc3RUb3RhbFRyaXBzID0gKHI6IExpbmVEYXRhKSA9PiByLnRvdGFsVHJpcHM7XG5jb25zdCBoaWdoZXN0VG90YWxUcmlwcyA9IChyOiBMaW5lRGF0YSkgPT4gLXIudG90YWxUcmlwcztcblxuY29uc3QgaGlnaGVzdFJpZGVyc2hpcEZyYWN0aW9uID0gKHI6IExpbmVEYXRhKSA9PiB7XG4gICAgY29uc3QgeyByaWRlcnNoaXBIaXN0b3J5IH0gPSByO1xuICAgIGlmIChyaWRlcnNoaXBIaXN0b3J5ICYmICFpc0NhbmNlbGxlZChyKSkge1xuICAgICAgICByZXR1cm4gcmlkZXJzaGlwSGlzdG9yeVswXSAvIHJpZGVyc2hpcEhpc3RvcnlbcmlkZXJzaGlwSGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIEluZmluaXR5O1xufTtcblxuY29uc3QgbG93ZXN0UmlkZXJzaGlwRnJhY3Rpb24gPSAocjogTGluZURhdGEpID0+IHtcbiAgICBjb25zdCB7IHJpZGVyc2hpcEhpc3RvcnkgfSA9IHI7XG4gICAgaWYgKHJpZGVyc2hpcEhpc3RvcnkgJiYgIWlzQ2FuY2VsbGVkKHIpKSB7XG4gICAgICAgIHJldHVybiAtaGlnaGVzdFJpZGVyc2hpcEZyYWN0aW9uKHIpO1xuICAgIH1cbiAgICByZXR1cm4gSW5maW5pdHk7XG59O1xuXG5jb25zdCBsb3dlc3RUb3RhbFJpZGVyc2hpcCA9IChyOiBMaW5lRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgcmlkZXJzaGlwSGlzdG9yeSB9ID0gcjtcbiAgICBpZiAocmlkZXJzaGlwSGlzdG9yeSAmJiAhaXNDYW5jZWxsZWQocikpIHtcbiAgICAgICAgcmV0dXJuIHJpZGVyc2hpcEhpc3RvcnlbcmlkZXJzaGlwSGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIEluZmluaXR5O1xufTtcblxuY29uc3QgaGlnaGVzdFRvdGFsUmlkZXJzaGlwID0gKHI6IExpbmVEYXRhKSA9PiB7XG4gICAgY29uc3QgeyByaWRlcnNoaXBIaXN0b3J5IH0gPSByO1xuICAgIGlmIChyaWRlcnNoaXBIaXN0b3J5ICYmICFpc0NhbmNlbGxlZChyKSkge1xuICAgICAgICByZXR1cm4gLWxvd2VzdFRvdGFsUmlkZXJzaGlwKHIpO1xuICAgIH1cbiAgICByZXR1cm4gSW5maW5pdHk7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydEZ1bmN0aW9ucyA9IHtcbiAgICBraW5kLFxuICAgIGxvd2VzdFNlcnZpY2VGcmFjdGlvbixcbiAgICBoaWdoZXN0U2VydmljZUZyYWN0aW9uLFxuICAgIGxvd2VzdFRvdGFsVHJpcHMsXG4gICAgaGlnaGVzdFRvdGFsVHJpcHMsXG4gICAgbG93ZXN0UmlkZXJzaGlwRnJhY3Rpb24sXG4gICAgaGlnaGVzdFJpZGVyc2hpcEZyYWN0aW9uLFxuICAgIGxvd2VzdFRvdGFsUmlkZXJzaGlwLFxuICAgIGhpZ2hlc3RUb3RhbFJpZGVyc2hpcCxcbn07XG5cbmV4cG9ydCB0eXBlIFNvcnRGbiA9IChyOiBMaW5lRGF0YSkgPT4gbnVtYmVyO1xuZXhwb3J0IHR5cGUgU29ydCA9IGtleW9mIHR5cGVvZiBzb3J0RnVuY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LineGrid/sorting.ts\n");

/***/ })

})