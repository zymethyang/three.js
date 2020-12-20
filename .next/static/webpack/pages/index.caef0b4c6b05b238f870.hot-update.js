webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Control/DragControls */ "./shared/Control/DragControls/index.js");


var _jsxFileName = "C:\\Users\\Tri Nguyen\\Desktop\\project\\fly-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var LAYOUT_WIDTH = 1024;
var LAYOUT_HEIGHT = 768;

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
    renderer.setSize(1024, 768);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFShadowMap"];
    layoutRef.current.appendChild(renderer.domElement);
    controls = new _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_4__["DragControls"]([].concat(objects), camera, renderer.domElement);
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
    lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxBWU9VVF9XSURUSCIsIkxBWU9VVF9IRUlHSFQiLCJIb21lUGFnZSIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyZXIiLCJjb250cm9scyIsImdyb3VwIiwib2JqZWN0cyIsImxheW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImluaXQiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJnZW9tZXRyeSIsImkiLCJvYmplY3QiLCJjb2xvciIsInJhbmRvbSIsIngiLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIkRyYWdDb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBb0IsR0FBRyxJQUE3QjtBQUNBLElBQU1DLGFBQXFCLEdBQUcsR0FBOUI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFJQyxNQUFKLEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CO0FBQ0EsTUFBSUMsUUFBSixFQUFjQyxLQUFkO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7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QyxZQUFRLEdBQUcsSUFBSTZDLHlFQUFKLFdBQXFCM0MsT0FBckIsR0FBK0JMLE1BQS9CLEVBQXVDRSxRQUFRLENBQUM2QyxVQUFoRCxDQUFYO0FBQ0E1QyxZQUFRLENBQUM4QyxnQkFBVCxDQUEwQixNQUExQixFQUFrQ0MsTUFBbEM7QUFDQUEsVUFBTTtBQUNQOztBQUVELFdBQVNBLE1BQVQsR0FBa0I7QUFDaEJoRCxZQUFRLENBQUNnRCxNQUFULENBQWdCakQsS0FBaEIsRUFBdUJELE1BQXZCO0FBQ0Q7O0FBRUQsc0JBQU8scUVBQUMsd0RBQUQ7QUFBTSxhQUFTLEVBQUVNO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBekVEOztHQUFNUCxROztLQUFBQSxRO0FBMkVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYWVmMGI0YzZiMDViMjM4Zjg3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzIH0gZnJvbSBcIi4uL3NoYXJlZC9Db250cm9sL0RyYWdDb250cm9sc1wiO1xyXG5cclxuY29uc3QgTEFZT1VUX1dJRFRIOiBudW1iZXIgPSAxMDI0O1xyXG5jb25zdCBMQVlPVVRfSEVJR0hUOiBudW1iZXIgPSA3Njg7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBsZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbiAgbGV0IGNvbnRyb2xzLCBncm91cDtcclxuICBjb25zdCBvYmplY3RzID0gW107XHJcblxyXG4gIGNvbnN0IGxheW91dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgIDUwLFxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgMSxcclxuICAgICAgNTAwMFxyXG4gICAgKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweGYwZjBmMCk7XHJcblxyXG4gICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg1MDUwNTApKTtcclxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgMS41KTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCA1MDAsIDIwMDApO1xyXG4gICAgbGlnaHQuYW5nbGUgPSBNYXRoLlBJIC8gOTtcclxuXHJcbiAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDQwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IDEwMjQ7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAxMDI0O1xyXG5cclxuICAgIHNjZW5lLmFkZChsaWdodCk7XHJcblxyXG4gICAgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgIHNjZW5lLmFkZChncm91cCk7XHJcblxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxMjAsIDEyMCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZiB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnggPSBNYXRoLnJhbmRvbSgpICogMTAwMCAtIDUwMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSBNYXRoLnJhbmRvbSgpICogNjAwIC0gMzAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoMTAyNCwgNzY4KTtcclxuXHJcbiAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICByZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNoYWRvd01hcDtcclxuXHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICBjb250cm9scyA9IG5ldyBEcmFnQ29udHJvbHMoWy4uLm9iamVjdHNdLCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgcmVuZGVyKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxIb21lIGxheW91dFJlZj17bGF5b3V0UmVmfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9