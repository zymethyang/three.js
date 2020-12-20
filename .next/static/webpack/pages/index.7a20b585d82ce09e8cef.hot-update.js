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
/* harmony import */ var _constants_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/layout */ "./constants/layout.ts");
/* harmony import */ var _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Control/DragControls */ "./shared/Control/DragControls/index.js");


var _jsxFileName = "C:\\Users\\Tri Nguyen\\Desktop\\project\\fly-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomePage = function HomePage() {
  _s();

  var layoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var camera, scene, renderer;
  var controls, group;
  var objects = [];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    initializeLayout();
  }, []);

  function initializeCamera() {
    camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 1000;
    scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
    scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_COLOR"]);
    scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x505050));
    var light = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    light.angle = Math.PI;
    light.castShadow = true;
    light.shadow.camera.near = 1000;
  }

  function initializeLayout() {
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"];
    light.shadow.mapSize.height = _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"];
    scene.add(light);
    group = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
    scene.add(group);
    var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](120, 120);

    for (var i = 0; i < 15; i++) {
      var object = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0x00695c
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
    renderer.setSize(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"]);
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
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiTEFZT1VUX1dJRFRIIiwiaGVpZ2h0IiwiTEFZT1VUX0hFSUdIVCIsImdlb21ldHJ5IiwiaSIsIm9iamVjdCIsImNvbG9yIiwieCIsInJhbmRvbSIsInkiLCJwdXNoIiwiYW50aWFsaWFzIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiRHJhZ0NvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQUlDLE1BQUosRUFBWUMsS0FBWixFQUFtQkMsUUFBbkI7QUFDQSxNQUFJQyxRQUFKLEVBQWNDLEtBQWQ7QUFDQSxNQUFNQyxPQUFPLEdBQUcsRUFBaEI7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QUMrQyxVQUF2QztBQUVBOUMsWUFBUSxHQUFHLElBQUkrQyx5RUFBSixXQUFxQjdDLE9BQXJCLEdBQStCTCxNQUEvQixFQUF1Q0UsUUFBUSxDQUFDK0MsVUFBaEQsQ0FBWDtBQUNBOUMsWUFBUSxDQUFDZ0QsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0NDLE1BQWxDO0FBQ0FBLFVBQU07QUFDUDs7QUFFRCxXQUFTQSxNQUFULEdBQWtCO0FBQ2hCbEQsWUFBUSxDQUFDa0QsTUFBVCxDQUFnQm5ELEtBQWhCLEVBQXVCRCxNQUF2QjtBQUNEOztBQUVELHNCQUFPLHFFQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFFRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQTVFRDs7R0FBTUQsUTs7S0FBQUEsUTtBQThFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2EyMGI1ODVkODJjZTA5ZThjZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCB7XHJcbiAgTEFZT1VUX0hFSUdIVCxcclxuICBMQVlPVVRfV0lEVEgsXHJcbiAgQkFDS0dST1VORF9DT0xPUixcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsYXlvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xyXG4gIGxldCBjb250cm9scywgZ3JvdXA7XHJcbiAgY29uc3Qgb2JqZWN0cyA9IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhbWVyYSgpe1xyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICA1MCxcclxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIDEsXHJcbiAgICAgIDUwMDBcclxuICAgICk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoQkFDS0dST1VORF9DT0xPUik7XHJcblxyXG4gICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg1MDUwNTApKTtcclxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgMS41KTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCA1MDAsIDIwMDApO1xyXG4gICAgbGlnaHQuYW5nbGUgPSBNYXRoLlBJO1xyXG5cclxuICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTAwMDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXQoKSB7XHJcbiAgICBcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gNDAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gTEFZT1VUX1dJRFRIO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gTEFZT1VUX0hFSUdIVDtcclxuXHJcbiAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG5cclxuICAgIGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTIwLCAxMjApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDAwNjk1YyB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnggPSBNYXRoLnJhbmRvbSgpICogMTAwMCAtIDUwMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSBNYXRoLnJhbmRvbSgpICogNjAwIC0gMzAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoTEFZT1VUX1dJRFRILCBMQVlPVVRfSEVJR0hUKTtcclxuXHJcbiAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICByZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNoYWRvd01hcDtcclxuXHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICBjb250cm9scyA9IG5ldyBEcmFnQ29udHJvbHMoWy4uLm9iamVjdHNdLCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgcmVuZGVyKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxIb21lIGxheW91dFJlZj17bGF5b3V0UmVmfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9