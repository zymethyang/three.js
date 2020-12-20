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






var HomePage = function HomePage() {
  _s();

  var container;
  var camera, scene, renderer;
  var controls, group;
  var objects = [];
  var layoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  function init() {
    //document.body.appendChild(layoutRef.current);
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
    renderer.setSize(window.innerWidth, window.innerHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiY29udGFpbmVyIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwibGF5b3V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaW5pdCIsIlRIUkVFIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwiYmFja2dyb3VuZCIsImFkZCIsImxpZ2h0Iiwic2V0IiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJjYXN0U2hhZG93Iiwic2hhZG93IiwibmVhciIsImZhciIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImdlb21ldHJ5IiwiaSIsIm9iamVjdCIsImNvbG9yIiwicmFuZG9tIiwieCIsInkiLCJwdXNoIiwiYW50aWFsaWFzIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiRHJhZ0NvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsTUFBSixFQUFZQyxLQUFaLEVBQW1CQyxRQUFuQjtBQUNBLE1BQUlDLFFBQUosRUFBY0MsS0FBZDtBQUNBLE1BQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUVBLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxRQUFJO0FBQ0wsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQSxJQUFULEdBQWdCO0FBQ2Q7QUFDQVQsVUFBTSxHQUFHLElBQUlVLHVEQUFKLENBQ1AsRUFETyxFQUVQQyxNQUFNLENBQUNDLFVBQVAsR0FBb0JELE1BQU0sQ0FBQ0UsV0FGcEIsRUFHUCxDQUhPLEVBSVAsSUFKTyxDQUFUO0FBTUFiLFVBQU0sQ0FBQ2MsUUFBUCxDQUFnQkMsQ0FBaEIsR0FBb0IsSUFBcEI7QUFFQWQsU0FBSyxHQUFHLElBQUlTLDJDQUFKLEVBQVI7QUFDQVQsU0FBSyxDQUFDZSxVQUFOLEdBQW1CLElBQUlOLDJDQUFKLENBQWdCLFFBQWhCLENBQW5CO0FBRUFULFNBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxJQUFJUCxrREFBSixDQUF1QixRQUF2QixDQUFWO0FBQ0EsUUFBTVEsS0FBSyxHQUFHLElBQUlSLCtDQUFKLENBQW9CLFFBQXBCLEVBQThCLEdBQTlCLENBQWQ7QUFDQVEsU0FBSyxDQUFDSixRQUFOLENBQWVLLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRUFBMkIsSUFBM0I7QUFDQUQsU0FBSyxDQUFDRSxLQUFOLEdBQWNDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXhCO0FBRUFKLFNBQUssQ0FBQ0ssVUFBTixHQUFtQixJQUFuQjtBQUNBTCxTQUFLLENBQUNNLE1BQU4sQ0FBYXhCLE1BQWIsQ0FBb0J5QixJQUFwQixHQUEyQixJQUEzQjtBQUNBUCxTQUFLLENBQUNNLE1BQU4sQ0FBYXhCLE1BQWIsQ0FBb0IwQixHQUFwQixHQUEwQixJQUExQjtBQUNBUixTQUFLLENBQUNNLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkMsS0FBckIsR0FBNkIsSUFBN0I7QUFDQVYsU0FBSyxDQUFDTSxNQUFOLENBQWFHLE9BQWIsQ0FBcUJFLE1BQXJCLEdBQThCLElBQTlCO0FBRUE1QixTQUFLLENBQUNnQixHQUFOLENBQVVDLEtBQVY7QUFFQWQsU0FBSyxHQUFHLElBQUlNLDJDQUFKLEVBQVI7QUFDQVQsU0FBSyxDQUFDZ0IsR0FBTixDQUFVYixLQUFWO0FBRUEsUUFBTTBCLFFBQVEsR0FBRyxJQUFJcEIsbURBQUosQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsQ0FBakI7O0FBRUEsU0FBSyxJQUFJcUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixVQUFNQyxNQUFNLEdBQUcsSUFBSXRCLDBDQUFKLENBQ2JvQixRQURhLEVBRWIsSUFBSXBCLHlEQUFKLENBQThCO0FBQUV1QixhQUFLLEVBQUVaLElBQUksQ0FBQ2EsTUFBTCxLQUFnQjtBQUF6QixPQUE5QixDQUZhLENBQWY7QUFLQUYsWUFBTSxDQUFDbEIsUUFBUCxDQUFnQnFCLENBQWhCLEdBQW9CZCxJQUFJLENBQUNhLE1BQUwsS0FBZ0IsSUFBaEIsR0FBdUIsR0FBM0M7QUFDQUYsWUFBTSxDQUFDbEIsUUFBUCxDQUFnQnNCLENBQWhCLEdBQW9CZixJQUFJLENBQUNhLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsR0FBMUM7QUFFQWpDLFdBQUssQ0FBQ2dCLEdBQU4sQ0FBVWUsTUFBVjtBQUNBM0IsYUFBTyxDQUFDZ0MsSUFBUixDQUFhTCxNQUFiO0FBQ0Q7O0FBRUQ5QixZQUFRLEdBQUcsSUFBSVEsbURBQUosQ0FBd0I7QUFBRTRCLGVBQVMsRUFBRTtBQUFiLEtBQXhCLENBQVg7QUFDQXBDLFlBQVEsQ0FBQ3FDLGFBQVQsQ0FBdUI1QixNQUFNLENBQUM2QixnQkFBOUI7QUFDQXRDLFlBQVEsQ0FBQ3VDLE9BQVQsQ0FBaUI5QixNQUFNLENBQUNDLFVBQXhCLEVBQW9DRCxNQUFNLENBQUNFLFdBQTNDO0FBRUFYLFlBQVEsQ0FBQ3dDLFNBQVQsQ0FBbUJDLE9BQW5CLEdBQTZCLElBQTdCO0FBQ0F6QyxZQUFRLENBQUN3QyxTQUFULENBQW1CRSxJQUFuQixHQUEwQmxDLGtEQUExQjtBQUVBSixhQUFTLENBQUN1QyxPQUFWLENBQWtCQyxXQUFsQixDQUE4QjVDLFFBQVEsQ0FBQzZDLFVBQXZDO0FBRUE1QyxZQUFRLEdBQUcsSUFBSTZDLHlFQUFKLFdBQXFCM0MsT0FBckIsR0FBK0JMLE1BQS9CLEVBQXVDRSxRQUFRLENBQUM2QyxVQUFoRCxDQUFYO0FBQ0E1QyxZQUFRLENBQUM4QyxnQkFBVCxDQUEwQixNQUExQixFQUFrQ0MsTUFBbEM7QUFDQUEsVUFBTTtBQUNQOztBQUVELFdBQVNBLE1BQVQsR0FBa0I7QUFDaEJoRCxZQUFRLENBQUNnRCxNQUFULENBQWdCakQsS0FBaEIsRUFBdUJELE1BQXZCO0FBQ0Q7O0FBRUQsc0JBQU8scUVBQUMsd0RBQUQ7QUFBTSxhQUFTLEVBQUVNO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBM0VEOztHQUFNUixROztLQUFBQSxRO0FBNkVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zY2Y1MGFjYjMxZjVmOGEwMzQ0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzIH0gZnJvbSBcIi4uL3NoYXJlZC9Db250cm9sL0RyYWdDb250cm9sc1wiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhaW5lcjtcclxuICBsZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbiAgbGV0IGNvbnRyb2xzLCBncm91cDtcclxuICBjb25zdCBvYmplY3RzID0gW107XHJcblxyXG4gIGNvbnN0IGxheW91dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0UmVmLmN1cnJlbnQpO1xyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICA1MCxcclxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIDEsXHJcbiAgICAgIDUwMDBcclxuICAgICk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHhmMGYwZjApO1xyXG5cclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NTA1MDUwKSk7XHJcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYsIDEuNSk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwLCAyMDAwKTtcclxuICAgIGxpZ2h0LmFuZ2xlID0gTWF0aC5QSSAvIDk7XHJcblxyXG4gICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxMDAwO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSA0MDAwO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSAxMDI0O1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMTAyNDtcclxuXHJcbiAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG5cclxuICAgIGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTIwLCAxMjApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi54ID0gTWF0aC5yYW5kb20oKSAqIDEwMDAgLSA1MDA7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi55ID0gTWF0aC5yYW5kb20oKSAqIDYwMCAtIDMwMDtcclxuXHJcbiAgICAgIHNjZW5lLmFkZChvYmplY3QpO1xyXG4gICAgICBvYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xyXG5cclxuICAgIGxheW91dFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEhvbWUgbGF5b3V0UmVmPXtsYXlvdXRSZWZ9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=