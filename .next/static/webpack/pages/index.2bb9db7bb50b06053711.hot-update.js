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
    camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, 1, 1, 5000);
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
    var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_HEIGHT"]);

    for (var i = 0; i < 1; i++) {
      var object = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0x00695c
      }));
      object.position.x = 0;
      object.position.y = 0;
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
    renderer.setPixelRatio(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["EXPORT_DEFAULT_PIXEL_RATIO"]);
    renderer.setSize(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"]);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFShadowMap"];
    layoutRef.current.appendChild(renderer.domElement); //controls = new DragControls([...objects], camera, renderer.domElement);
    //controls.addEventListener("drag", render);

    render();
  }

  function handleOutOfBox() {
    scene.children = scene.children.map(function (objectDetail) {
      var position = objectDetail.position;
      objectDetail.type === "Mesh" && console.log(position.y);
      var isOutOfBox = position.x > (_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] - _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"] * 1.5) / 2 || position.x < -(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] - _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"] * 1.5) / 2 || position.y > _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"] / 2 || position.y < -_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"] / 2;

      if (isOutOfBox && objectDetail.material) {
        objectDetail.material.color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["RED_DARKEN_COLOR"]);
      }

      if (!isOutOfBox && objectDetail.material) {
        objectDetail.material.color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["TEAL_DARKEN_COLOR"]);
      }

      return objectDetail;
    });
  }

  function render() {
    handleOutOfBox();
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
      layoutRef: layoutRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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

/***/ }),

/***/ "./shared/Control/DragControls/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiTEFZT1VUX1dJRFRIIiwiaGVpZ2h0IiwiTEFZT1VUX0hFSUdIVCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsIkJPWF9XSURUSCIsIkJPWF9IRUlHSFQiLCJpIiwib2JqZWN0IiwiY29sb3IiLCJ4IiwieSIsInB1c2giLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8iLCJzZXRTaXplIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJpc091dE9mQm94IiwibWF0ZXJpYWwiLCJSRURfREFSS0VOX0NPTE9SIiwiVEVBTF9EQVJLRU5fQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJ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QWpCZ0IsQ0FBakI7QUFrQkQ7O0FBRUQsV0FBU0osTUFBVCxHQUFrQjtBQUNoQkMsa0JBQWM7QUFDZGhELFlBQVEsQ0FBQytDLE1BQVQsQ0FBZ0JoRCxLQUFoQixFQUF1QkQsTUFBdkI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBUyxFQUFFRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCxDQWpHRDs7R0FBTUQsUTs7S0FBQUEsUTtBQW1HU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmJiOWRiN2JiNTBiMDYwNTM3MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xyXG5pbXBvcnQge1xyXG4gIExBWU9VVF9IRUlHSFQsXHJcbiAgTEFZT1VUX1dJRFRILFxyXG4gIEJPWF9XSURUSCxcclxuICBCT1hfSEVJR0hULFxyXG4gIEJBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8sXHJcbiAgVEVBTF9EQVJLRU5fQ09MT1IsXHJcbiAgUkVEX0RBUktFTl9DT0xPUixcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsYXlvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xyXG4gIGxldCBjb250cm9scywgZ3JvdXA7XHJcbiAgY29uc3Qgb2JqZWN0cyA9IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhbWVyYSgpIHtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1MCwgMSwgMSwgNTAwMCk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoQkFDS0dST1VORF9DT0xPUik7XHJcblxyXG4gICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg1MDUwNTApKTtcclxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgMS41KTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCA1MDAsIDIwMDApO1xyXG4gICAgbGlnaHQuYW5nbGUgPSBNYXRoLlBJO1xyXG5cclxuICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gNDAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gTEFZT1VUX1dJRFRIO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gTEFZT1VUX0hFSUdIVDtcclxuXHJcbiAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpIHtcclxuICAgIGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShCT1hfV0lEVEgsIEJPWF9IRUlHSFQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMDY5NWMgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoTEFZT1VUX1dJRFRILCBMQVlPVVRfSEVJR0hUKTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAvL2NvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAvL2NvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHJlbmRlcik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dE9mQm94KCkge1xyXG4gICAgc2NlbmUuY2hpbGRyZW4gPSBzY2VuZS5jaGlsZHJlbi5tYXAoKG9iamVjdERldGFpbCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBvYmplY3REZXRhaWw7XHJcbiAgICAgIG9iamVjdERldGFpbC50eXBlID09PSBcIk1lc2hcIiAmJiBjb25zb2xlLmxvZyhwb3NpdGlvbi55KTtcclxuXHJcbiAgICAgIGNvbnN0IGlzT3V0T2ZCb3g6IGJvb2xlYW4gPVxyXG4gICAgICAgIHBvc2l0aW9uLnggPiAoTEFZT1VUX1dJRFRIIC0gQk9YX1dJRFRIICogMS41KSAvIDIgfHxcclxuICAgICAgICBwb3NpdGlvbi54IDwgLShMQVlPVVRfV0lEVEggLSBCT1hfV0lEVEggKiAxLjUpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPiBMQVlPVVRfSEVJR0hUIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPCAtTEFZT1VUX0hFSUdIVCAvIDI7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==