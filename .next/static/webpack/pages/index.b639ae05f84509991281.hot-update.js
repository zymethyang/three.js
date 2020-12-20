webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/layout.ts":
/*!*****************************!*\
  !*** ./constants/layout.ts ***!
  \*****************************/
/*! exports provided: LAYOUT_WIDTH, LAYOUT_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_WIDTH", function() { return LAYOUT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_HEIGHT", function() { return LAYOUT_HEIGHT; });
var LAYOUT_WIDTH = 1024;
var LAYOUT_HEIGHT = 728;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home/index.tsx");
/* harmony import */ var _constants_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/layout */ "./constants/layout.ts");
/* harmony import */ var _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Control/DragControls */ "./shared/Control/DragControls/index.js");


var _jsxFileName = "C:\\Users\\Tri Nguyen\\Desktop\\project\\fly-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomePage = function HomePage() {
  _s();

  var camera, scene, renderer;
  var controls, group;
  var objects = [];
  var layoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  function init() {
    camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 1000;
    scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
    scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xf0f0f0);
    scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x505050));
    var light = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    light.angle = Math.PI / 9;
    light.castShadow = true;
    light.shadow.camera.near = 1000;
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add(light);
    group = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
    scene.add(group);
    var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](120, 120);

    for (var i = 0; i < 15; i++) {
      var object = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: Math.random() * 0xffffff
      }));
      object.position.x = Math.random() * 1000 - 500;
      object.position.y = Math.random() * 600 - 300;
      scene.add(object);
      objects.push(object);
    }

    renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(LAYOUT_WIDTH, LAYOUT_HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFShadowMap"];
    layoutRef.current.appendChild(renderer.domElement);
    controls = new _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__["DragControls"]([].concat(objects), camera, renderer.domElement);
    controls.addEventListener("drag", render);
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutRef: layoutRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 10
  }, _this);
};

_s(HomePage, "UdUlD6HaKxJDKe5M0nIy/qKy3gs=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2xheW91dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxBWU9VVF9XSURUSCIsIkxBWU9VVF9IRUlHSFQiLCJIb21lUGFnZSIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyZXIiLCJjb250cm9scyIsImdyb3VwIiwib2JqZWN0cyIsImxheW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImluaXQiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJnZW9tZXRyeSIsImkiLCJvYmplY3QiLCJjb2xvciIsInJhbmRvbSIsIngiLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIkRyYWdDb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxZQUFvQixHQUFHLElBQTdCO0FBQ0EsSUFBTUMsYUFBcUIsR0FBRyxHQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQUlDLE1BQUosRUFBWUMsS0FBWixFQUFtQkMsUUFBbkI7QUFDQSxNQUFJQyxRQUFKLEVBQWNDLEtBQWQ7QUFDQSxNQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsUUFBSTtBQUNMLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0EsSUFBVCxHQUFnQjtBQUNkVCxVQUFNLEdBQUcsSUFBSVUsdURBQUosQ0FDUCxFQURPLEVBRVBDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkQsTUFBTSxDQUFDRSxXQUZwQixFQUdQLENBSE8sRUFJUCxJQUpPLENBQVQ7QUFNQWIsVUFBTSxDQUFDYyxRQUFQLENBQWdCQyxDQUFoQixHQUFvQixJQUFwQjtBQUVBZCxTQUFLLEdBQUcsSUFBSVMsMkNBQUosRUFBUjtBQUNBVCxTQUFLLENBQUNlLFVBQU4sR0FBbUIsSUFBSU4sMkNBQUosQ0FBZ0IsUUFBaEIsQ0FBbkI7QUFFQVQsU0FBSyxDQUFDZ0IsR0FBTixDQUFVLElBQUlQLGtEQUFKLENBQXVCLFFBQXZCLENBQVY7QUFDQSxRQUFNUSxLQUFLLEdBQUcsSUFBSVIsK0NBQUosQ0FBb0IsUUFBcEIsRUFBOEIsR0FBOUIsQ0FBZDtBQUNBUSxTQUFLLENBQUNKLFFBQU4sQ0FBZUssR0FBZixDQUFtQixDQUFuQixFQUFzQixHQUF0QixFQUEyQixJQUEzQjtBQUNBRCxTQUFLLENBQUNFLEtBQU4sR0FBY0MsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBeEI7QUFFQUosU0FBSyxDQUFDSyxVQUFOLEdBQW1CLElBQW5CO0FBQ0FMLFNBQUssQ0FBQ00sTUFBTixDQUFheEIsTUFBYixDQUFvQnlCLElBQXBCLEdBQTJCLElBQTNCO0FBQ0FQLFNBQUssQ0FBQ00sTUFBTixDQUFheEIsTUFBYixDQUFvQjBCLEdBQXBCLEdBQTBCLElBQTFCO0FBQ0FSLFNBQUssQ0FBQ00sTUFBTixDQUFhRyxPQUFiLENBQXFCQyxLQUFyQixHQUE2QixJQUE3QjtBQUNBVixTQUFLLENBQUNNLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkUsTUFBckIsR0FBOEIsSUFBOUI7QUFFQTVCLFNBQUssQ0FBQ2dCLEdBQU4sQ0FBVUMsS0FBVjtBQUVBZCxTQUFLLEdBQUcsSUFBSU0sMkNBQUosRUFBUjtBQUNBVCxTQUFLLENBQUNnQixHQUFOLENBQVViLEtBQVY7QUFFQSxRQUFNMEIsUUFBUSxHQUFHLElBQUlwQixtREFBSixDQUF3QixHQUF4QixFQUE2QixHQUE3QixDQUFqQjs7QUFFQSxTQUFLLElBQUlxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLFVBQU1DLE1BQU0sR0FBRyxJQUFJdEIsMENBQUosQ0FDYm9CLFFBRGEsRUFFYixJQUFJcEIseURBQUosQ0FBOEI7QUFBRXVCLGFBQUssRUFBRVosSUFBSSxDQUFDYSxNQUFMLEtBQWdCO0FBQXpCLE9BQTlCLENBRmEsQ0FBZjtBQUtBRixZQUFNLENBQUNsQixRQUFQLENBQWdCcUIsQ0FBaEIsR0FBb0JkLElBQUksQ0FBQ2EsTUFBTCxLQUFnQixJQUFoQixHQUF1QixHQUEzQztBQUNBRixZQUFNLENBQUNsQixRQUFQLENBQWdCc0IsQ0FBaEIsR0FBb0JmLElBQUksQ0FBQ2EsTUFBTCxLQUFnQixHQUFoQixHQUFzQixHQUExQztBQUVBakMsV0FBSyxDQUFDZ0IsR0FBTixDQUFVZSxNQUFWO0FBQ0EzQixhQUFPLENBQUNnQyxJQUFSLENBQWFMLE1BQWI7QUFDRDs7QUFFRDlCLFlBQVEsR0FBRyxJQUFJUSxtREFBSixDQUF3QjtBQUFFNEIsZUFBUyxFQUFFO0FBQWIsS0FBeEIsQ0FBWDtBQUNBcEMsWUFBUSxDQUFDcUMsYUFBVCxDQUF1QjVCLE1BQU0sQ0FBQzZCLGdCQUE5QjtBQUNBdEMsWUFBUSxDQUFDdUMsT0FBVCxDQUFpQjVDLFlBQWpCLEVBQStCQyxhQUEvQjtBQUVBSSxZQUFRLENBQUN3QyxTQUFULENBQW1CQyxPQUFuQixHQUE2QixJQUE3QjtBQUNBekMsWUFBUSxDQUFDd0MsU0FBVCxDQUFtQkUsSUFBbkIsR0FBMEJsQyxrREFBMUI7QUFFQUosYUFBUyxDQUFDdUMsT0FBVixDQUFrQkMsV0FBbEIsQ0FBOEI1QyxRQUFRLENBQUM2QyxVQUF2QztBQUVBNUMsWUFBUSxHQUFHLElBQUk2Qyx5RUFBSixXQUFxQjNDLE9BQXJCLEdBQStCTCxNQUEvQixFQUF1Q0UsUUFBUSxDQUFDNkMsVUFBaEQsQ0FBWDtBQUNBNUMsWUFBUSxDQUFDOEMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0NDLE1BQWxDO0FBQ0FBLFVBQU07QUFDUDs7QUFFRCxXQUFTQSxNQUFULEdBQWtCO0FBQ2hCaEQsWUFBUSxDQUFDZ0QsTUFBVCxDQUFnQmpELEtBQWhCLEVBQXVCRCxNQUF2QjtBQUNEOztBQUVELHNCQUFPLHFFQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFFTTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXpFRDs7R0FBTVAsUTs7S0FBQUEsUTtBQTJFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjYzOWFlMDVmODQ1MDk5OTEyODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMQVlPVVRfV0lEVEg6IG51bWJlciA9IDEwMjQ7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfSEVJR0hUOiBudW1iZXIgPSA3Mjg7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCB7fSBmcm9tICcuLi9jb25zdGFudHMvbGF5b3V0JztcclxuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzIH0gZnJvbSBcIi4uL3NoYXJlZC9Db250cm9sL0RyYWdDb250cm9sc1wiO1xyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcclxuICBsZXQgY29udHJvbHMsIGdyb3VwO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuXHJcbiAgY29uc3QgbGF5b3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgNTAsXHJcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAxLFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4ZjBmMGYwKTtcclxuXHJcbiAgICBzY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDUwNTA1MCkpO1xyXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmLCAxLjUpO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMCwgMjAwMCk7XHJcbiAgICBsaWdodC5hbmdsZSA9IE1hdGguUEkgLyA5O1xyXG5cclxuICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gNDAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gMTAyNDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDEwMjQ7XHJcblxyXG4gICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuXHJcbiAgICBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEyMCwgMTIwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwIC0gNTAwO1xyXG4gICAgICBvYmplY3QucG9zaXRpb24ueSA9IE1hdGgucmFuZG9tKCkgKiA2MDAgLSAzMDA7XHJcblxyXG4gICAgICBzY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShMQVlPVVRfV0lEVEgsIExBWU9VVF9IRUlHSFQpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xyXG5cclxuICAgIGxheW91dFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEhvbWUgbGF5b3V0UmVmPXtsYXlvdXRSZWZ9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=