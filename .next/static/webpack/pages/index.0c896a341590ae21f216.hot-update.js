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
    var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"]);

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
    layoutRef.current.appendChild(renderer.domElement);
    controls = new _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__["DragControls"]([].concat(objects), camera, renderer.domElement);
    controls.addEventListener("drag", render);
    render();
  }

  function handleOutOfBox() {
    scene.children = scene.children.map(function (objectDetail) {
      var position = objectDetail.position;
      var isOutOfBox = position.x > (_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] + _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"]) / 2 || position.x < -(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] + _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"]) / 2 || position.y > (_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"] + _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_HEIGHT"]) / 2 || position.y < -(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"] + _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_HEIGHT"]) / 2;

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
      lineNumber: 116,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiTEFZT1VUX1dJRFRIIiwiaGVpZ2h0IiwiTEFZT1VUX0hFSUdIVCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsIkJPWF9XSURUSCIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImlzT3V0T2ZCb3giLCJCT1hfSEVJR0hUIiwibWF0ZXJpYWwiLCJSRURfREFSS0VOX0NPTE9SIiwiVEVBTF9EQVJLRU5fQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxJQUFNQSxRQUFRLEdB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RCxZQUFZLENBQUNHLFFBQWhDLEVBQTBDO0FBQ3hDSCxvQkFBWSxDQUFDRyxRQUFiLENBQXNCdkIsS0FBdEIsR0FBOEIsSUFBSTVCLDJDQUFKLENBQWdCcUQsbUVBQWhCLENBQTlCO0FBQ0Q7O0FBQ0QsYUFBT0wsWUFBUDtBQUNELEtBZmdCLENBQWpCO0FBZ0JEOztBQUVELFdBQVNKLE1BQVQsR0FBa0I7QUFDaEJDLGtCQUFjO0FBQ2RwRCxZQUFRLENBQUNtRCxNQUFULENBQWdCcEQsS0FBaEIsRUFBdUJELE1BQXZCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx3REFBRDtBQUFNLGVBQVMsRUFBRUY7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0F2R0Q7O0dBQU1ELFE7O0tBQUFBLFE7QUF5R1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjODk2YTM0MTU5MGFlMjFmMjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBMQVlPVVRfSEVJR0hULFxyXG4gIExBWU9VVF9XSURUSCxcclxuICBCT1hfV0lEVEgsXHJcbiAgQk9YX0hFSUdIVCxcclxuICBCQUNLR1JPVU5EX0NPTE9SLFxyXG4gIEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPLFxyXG4gIFRFQUxfREFSS0VOX0NPTE9SLFxyXG4gIFJFRF9EQVJLRU5fQ09MT1IsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzIH0gZnJvbSBcIi4uL3NoYXJlZC9Db250cm9sL0RyYWdDb250cm9sc1wiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGF5b3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcclxuICBsZXQgY29udHJvbHMsIGdyb3VwO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVMYXlvdXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVDYW1lcmEoKSB7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgIDUwLFxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgMSxcclxuICAgICAgNTAwMFxyXG4gICAgKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihCQUNLR1JPVU5EX0NPTE9SKTtcclxuXHJcbiAgICBzY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDUwNTA1MCkpO1xyXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmLCAxLjUpO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMCwgMjAwMCk7XHJcbiAgICBsaWdodC5hbmdsZSA9IE1hdGguUEk7XHJcblxyXG4gICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxMDAwO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSA0MDAwO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBMQVlPVVRfV0lEVEg7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSBMQVlPVVRfSEVJR0hUO1xyXG5cclxuICAgIHNjZW5lLmFkZChsaWdodCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0T2JqZWN0KCkge1xyXG4gICAgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgIHNjZW5lLmFkZChncm91cCk7XHJcblxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShCT1hfV0lEVEgsIEJPWF9XSURUSCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMDY5NWMgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKExBWU9VVF9XSURUSCwgTEFZT1VUX0hFSUdIVCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcblxyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgY29udHJvbHMgPSBuZXcgRHJhZ0NvbnRyb2xzKFsuLi5vYmplY3RzXSwgY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHJlbmRlcik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dE9mQm94KCkge1xyXG4gICAgc2NlbmUuY2hpbGRyZW4gPSBzY2VuZS5jaGlsZHJlbi5tYXAoKG9iamVjdERldGFpbCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBvYmplY3REZXRhaWw7XHJcbiAgICAgIGNvbnN0IGlzT3V0T2ZCb3g6IGJvb2xlYW4gPVxyXG4gICAgICAgIHBvc2l0aW9uLnggPiAoTEFZT1VUX1dJRFRIICsgQk9YX1dJRFRIKSAvIDIgfHxcclxuICAgICAgICBwb3NpdGlvbi54IDwgLShMQVlPVVRfV0lEVEggKyBCT1hfV0lEVEgpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPiAoTEFZT1VUX0hFSUdIVCArIEJPWF9IRUlHSFQpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPCAtKExBWU9VVF9IRUlHSFQgKyBCT1hfSEVJR0hUKSAvIDI7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==