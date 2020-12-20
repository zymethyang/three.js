webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Tri_Nguyen_Desktop_project_fly_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home */ "./components/Home/index.tsx");
/* harmony import */ var _constants_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/layout */ "./constants/layout.ts");
/* harmony import */ var _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Control/DragControls */ "./shared/Control/DragControls/index.js");




var _jsxFileName = "C:\\Users\\Tri Nguyen\\Desktop\\project\\fly-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Tri_Nguyen_Desktop_project_fly_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var HomePage = function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      outOfBoxObjects = _useState[0],
      setOutOfBoxObjects = _useState[1];

  var layoutRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var camera, scene, renderer;
  var controls, group;
  var objects = [];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    initializeLayout();
  }, []);

  function initializeCamera() {
    camera = new three__WEBPACK_IMPORTED_MODULE_3__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 1000;
    scene = new three__WEBPACK_IMPORTED_MODULE_3__["Scene"]();
    scene.background = new three__WEBPACK_IMPORTED_MODULE_3__["Color"](_constants_layout__WEBPACK_IMPORTED_MODULE_5__["BACKGROUND_COLOR"]);
    scene.add(new three__WEBPACK_IMPORTED_MODULE_3__["AmbientLight"](0x505050));
    var light = new three__WEBPACK_IMPORTED_MODULE_3__["SpotLight"](0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    light.angle = Math.PI;
    light.castShadow = true;
    light.shadow.camera.near = 1000;
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = _constants_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_WIDTH"];
    light.shadow.mapSize.height = _constants_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_HEIGHT"];
    scene.add(light);
  }

  function initializeLayoutObject() {
    group = new three__WEBPACK_IMPORTED_MODULE_3__["Group"]();
    scene.add(group);
    var geometry = new three__WEBPACK_IMPORTED_MODULE_3__["PlaneGeometry"](_constants_layout__WEBPACK_IMPORTED_MODULE_5__["BOX_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_5__["BOX_HEIGHT"]);

    for (var i = 0; i < 1; i++) {
      var object = new three__WEBPACK_IMPORTED_MODULE_3__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_3__["MeshLambertMaterial"]({
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
    renderer = new three__WEBPACK_IMPORTED_MODULE_3__["WebGLRenderer"]({
      antialias: true
    });
    renderer.setPixelRatio(_constants_layout__WEBPACK_IMPORTED_MODULE_5__["EXPORT_DEFAULT_PIXEL_RATIO"]);
    renderer.setSize(_constants_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_HEIGHT"]);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_3__["PCFShadowMap"];
    layoutRef.current.appendChild(renderer.domElement);
    controls = new _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_6__["DragControls"]([].concat(objects), camera, renderer.domElement);
    controls.addEventListener("drag", render);
    render();
  }

  function handleOutOfBox() {
    scene.children = scene.children.map(function (objectDetail) {
      var position = objectDetail.position;
      var isOutOfBox = position.x > (_constants_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_WIDTH"] + _constants_layout__WEBPACK_IMPORTED_MODULE_5__["BOX_WIDTH"]) / 2 || position.x < -(_constants_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_WIDTH"] + _constants_layout__WEBPACK_IMPORTED_MODULE_5__["BOX_WIDTH"]) / 2;
      if (isOutOfBox) return _objectSpread(_objectSpread({}, objectDetail), {}, {
        material: _objectSpread(_objectSpread({}, objectDetail.material), {}, {
          color: {
            r: 0,
            g: 0,
            b: 0,
            isColor: true
          }
        })
      });
      return objectDetail;
    });
  }

  function render() {
    handleOutOfBox();
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {
      layoutRef: layoutRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: ["Hello", JSON.stringify(outOfBoxObjects)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(HomePage, "htvvy43Ce9/tUch26jBq/Uxjy+k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJvdXRPZkJveE9iamVjdHMiLCJzZXRPdXRPZkJveE9iamVjdHMiLCJsYXlvdXRSZWYiLCJ1c2VSZWYiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwiY29udHJvbHMiLCJncm91cCIsIm9iamVjdHMiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplTGF5b3V0IiwiaW5pdGlhbGl6ZUNhbWVyYSIsIlRIUkVFIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwiYmFja2dyb3VuZCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJMQVlPVVRfV0lEVEgiLCJoZWlnaHQiLCJMQVlPVVRfSEVJR0hUIiwiaW5pdGlhbGl6ZUxheW91dE9iamVjdCIsImdlb21ldHJ5IiwiQk9YX1dJRFRIIiwiQk9YX0hFSUdIVCIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJyYW5kb20iLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImlzT3V0T2ZCb3giLCJtYXRlcmlhbCIsInIiLCJnIiwiYiIsImlzQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUssRUFBRTtBQUNMd0IsYUFBQyxFQUFFLENBREU7QUFFTEMsYUFBQyxFQUFFLENBRkU7QUFHTEMsYUFBQyxFQUFFLENBSEU7QUFJTEMsbUJBQU8sRUFBRTtBQUpKO0FBRkQ7QUFGVjtBQVlGLGFBQU9OLFlBQVA7QUFDRCxLQW5CZ0IsQ0FBakI7QUFvQkQ7O0FBRUQsV0FBU0osTUFBVCxHQUFrQjtBQUNoQkMsa0JBQWM7QUFDZHRELFlBQVEsQ0FBQ3FELE1BQVQsQ0FBZ0J0RCxLQUFoQixFQUF1QkQsTUFBdkI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBUyxFQUFFRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDBCQUFXb0UsSUFBSSxDQUFDQyxTQUFMLENBQWV2RSxlQUFmLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQU1ELENBN0dEOztHQUFNRixROztLQUFBQSxRO0FBK0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ODEzNTcwMDdmZjNmNDJiN2RlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCB7XHJcbiAgTEFZT1VUX0hFSUdIVCxcclxuICBMQVlPVVRfV0lEVEgsXHJcbiAgQk9YX1dJRFRILFxyXG4gIEJPWF9IRUlHSFQsXHJcbiAgQkFDS0dST1VORF9DT0xPUixcclxuICBFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbb3V0T2ZCb3hPYmplY3RzLCBzZXRPdXRPZkJveE9iamVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGxheW91dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbiAgbGV0IGNvbnRyb2xzLCBncm91cDtcclxuICBjb25zdCBvYmplY3RzID0gW107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplTGF5b3V0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplQ2FtZXJhKCkge1xyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICA1MCxcclxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIDEsXHJcbiAgICAgIDUwMDBcclxuICAgICk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoQkFDS0dST1VORF9DT0xPUik7XHJcblxyXG4gICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg1MDUwNTApKTtcclxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgMS41KTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCA1MDAsIDIwMDApO1xyXG4gICAgbGlnaHQuYW5nbGUgPSBNYXRoLlBJO1xyXG5cclxuICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gNDAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gTEFZT1VUX1dJRFRIO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gTEFZT1VUX0hFSUdIVDtcclxuXHJcbiAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpIHtcclxuICAgIGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQk9YX1dJRFRILCBCT1hfSEVJR0hUKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDAwNjk1YyB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnggPSBNYXRoLnJhbmRvbSgpICogMTAwMCAtIDUwMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSBNYXRoLnJhbmRvbSgpICogNjAwIC0gMzAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKExBWU9VVF9XSURUSCwgTEFZT1VUX0hFSUdIVCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcblxyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgY29udHJvbHMgPSBuZXcgRHJhZ0NvbnRyb2xzKFsuLi5vYmplY3RzXSwgY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHJlbmRlcik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dE9mQm94KCkge1xyXG4gICAgc2NlbmUuY2hpbGRyZW4gPSBzY2VuZS5jaGlsZHJlbi5tYXAoKG9iamVjdERldGFpbCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBvYmplY3REZXRhaWw7XHJcbiAgICAgIGNvbnN0IGlzT3V0T2ZCb3g6IGJvb2xlYW4gPVxyXG4gICAgICAgIHBvc2l0aW9uLnggPiAoTEFZT1VUX1dJRFRIICsgQk9YX1dJRFRIKSAvIDIgfHxcclxuICAgICAgICBwb3NpdGlvbi54IDwgLShMQVlPVVRfV0lEVEggKyBCT1hfV0lEVEgpIC8gMjtcclxuICAgICAgaWYgKGlzT3V0T2ZCb3gpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLm9iamVjdERldGFpbCxcclxuICAgICAgICAgIG1hdGVyaWFsOiB7XHJcbiAgICAgICAgICAgIC4uLm9iamVjdERldGFpbC5tYXRlcmlhbCxcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICByOiAwLFxyXG4gICAgICAgICAgICAgIGc6IDAsXHJcbiAgICAgICAgICAgICAgYjogMCxcclxuICAgICAgICAgICAgICBpc0NvbG9yOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICByZXR1cm4gb2JqZWN0RGV0YWlsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBoYW5kbGVPdXRPZkJveCgpO1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIb21lIGxheW91dFJlZj17bGF5b3V0UmVmfSAvPlxyXG4gICAgICA8ZGl2PkhlbGxve0pTT04uc3RyaW5naWZ5KG91dE9mQm94T2JqZWN0cyl9PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=