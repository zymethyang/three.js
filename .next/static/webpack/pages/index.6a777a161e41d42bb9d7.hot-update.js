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
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"];
    light.shadow.mapSize.height = _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"];
    scene.add(light);
  }

  function initializeLayoutObject() {
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
  }

  function initializeLayout() {
    initializeCamera();
    initializeLayoutObject();
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

  function handleOutOfBox() {
    var outOfBoxObject = scene.children.filter(function (_ref) {
      var position = _ref.position;
      return position.x > _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] || position.x < _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"];
    });
    console.log(scene);
  }

  function render() {
    handleOutOfBox();
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutRef: layoutRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiTEFZT1VUX1dJRFRIIiwiaGVpZ2h0IiwiTEFZT1VUX0hFSUdIVCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJyYW5kb20iLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIkRyYWdDb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJoYW5kbGVPdXRPZkJveCIsIm91dE9mQm94T2JqZWN0IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhC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L0I7QUFFQTdCLFlBQVEsQ0FBQzJDLFNBQVQsQ0FBbUJDLE9BQW5CLEdBQTZCLElBQTdCO0FBQ0E1QyxZQUFRLENBQUMyQyxTQUFULENBQW1CRSxJQUFuQixHQUEwQnRDLGtEQUExQjtBQUVBWCxhQUFTLENBQUNrRCxPQUFWLENBQWtCQyxXQUFsQixDQUE4Qi9DLFFBQVEsQ0FBQ2dELFVBQXZDO0FBRUEvQyxZQUFRLEdBQUcsSUFBSWdELHlFQUFKLFdBQXFCOUMsT0FBckIsR0FBK0JMLE1BQS9CLEVBQXVDRSxRQUFRLENBQUNnRCxVQUFoRCxDQUFYO0FBQ0EvQyxZQUFRLENBQUNpRCxnQkFBVCxDQUEwQixNQUExQixFQUFrQ0MsTUFBbEM7QUFDQUEsVUFBTTtBQUNQOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDeEIsUUFBTUMsY0FBYyxHQUFHdEQsS0FBSyxDQUFDdUQsUUFBTixDQUFlQyxNQUFmLENBQ3JCO0FBQUEsVUFBRzVDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLGFBQWtCQSxRQUFRLENBQUN3QixDQUFULEdBQWFSLDhEQUFiLElBQTZCaEIsUUFBUSxDQUFDd0IsQ0FBVCxHQUFhUiw4REFBNUQ7QUFBQSxLQURxQixDQUF2QjtBQUdBNkIsV0FBTyxDQUFDQyxHQUFSLENBQVkxRCxLQUFaO0FBQ0Q7O0FBRUQsV0FBU29ELE1BQVQsR0FBa0I7QUFDaEJDLGtCQUFjO0FBQ2RwRCxZQUFRLENBQUNtRCxNQUFULENBQWdCcEQsS0FBaEIsRUFBdUJELE1BQXZCO0FBQ0Q7O0FBRUQsc0JBQU8scUVBQUMsd0RBQUQ7QUFBTSxhQUFTLEVBQUVGO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBdkZEOztHQUFNRCxROztLQUFBQSxRO0FBeUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YTc3N2ExNjFlNDFkNDJiYjlkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBMQVlPVVRfSEVJR0hULFxyXG4gIExBWU9VVF9XSURUSCxcclxuICBCQUNLR1JPVU5EX0NPTE9SLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IERyYWdDb250cm9scyB9IGZyb20gXCIuLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHNcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxheW91dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbiAgbGV0IGNvbnRyb2xzLCBncm91cDtcclxuICBjb25zdCBvYmplY3RzID0gW107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplTGF5b3V0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplQ2FtZXJhKCkge1xyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICA1MCxcclxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIDEsXHJcbiAgICAgIDUwMDBcclxuICAgICk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoQkFDS0dST1VORF9DT0xPUik7XHJcblxyXG4gICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg1MDUwNTApKTtcclxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgMS41KTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCA1MDAsIDIwMDApO1xyXG4gICAgbGlnaHQuYW5nbGUgPSBNYXRoLlBJO1xyXG5cclxuICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gNDAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gTEFZT1VUX1dJRFRIO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gTEFZT1VUX0hFSUdIVDtcclxuXHJcbiAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpIHtcclxuICAgIGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTIwLCAxMjApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDAwNjk1YyB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnggPSBNYXRoLnJhbmRvbSgpICogMTAwMCAtIDUwMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSBNYXRoLnJhbmRvbSgpICogNjAwIC0gMzAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKExBWU9VVF9XSURUSCwgTEFZT1VUX0hFSUdIVCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcblxyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgY29udHJvbHMgPSBuZXcgRHJhZ0NvbnRyb2xzKFsuLi5vYmplY3RzXSwgY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHJlbmRlcik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dE9mQm94KCkge1xyXG4gICAgY29uc3Qgb3V0T2ZCb3hPYmplY3QgPSBzY2VuZS5jaGlsZHJlbi5maWx0ZXIoXHJcbiAgICAgICh7IHBvc2l0aW9uIH0pID0+IHBvc2l0aW9uLnggPiBMQVlPVVRfV0lEVEggfHwgcG9zaXRpb24ueCA8IExBWU9VVF9XSURUSFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHNjZW5lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGhhbmRsZU91dE9mQm94KCk7XHJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEhvbWUgbGF5b3V0UmVmPXtsYXlvdXRSZWZ9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=