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
    camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, 1, _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] / _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"], 5000);
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

    for (var i = 0; i < 5; i++) {
      var object = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0x00695c
      }));
      object.position.x = (Math.random() - 0.5) * 700;
      object.position.y = (Math.random() - 0.5) * 700;
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
      var isOutOfBox = position.x > 405 || position.x < -405 || position.y > 405 || position.y < -405;

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
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIkxBWU9VVF9XSURUSCIsIkxBWU9VVF9IRUlHSFQiLCJwb3NpdGlvbiIsInoiLCJiYWNrZ3JvdW5kIiwiQkFDS0dST1VORF9DT0xPUiIsImFkZCIsImxpZ2h0Iiwic2V0IiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJjYXN0U2hhZG93Iiwic2hhZG93IiwibmVhciIsImZhciIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsIkJPWF9XSURUSCIsIkJPWF9IRUlHSFQiLCJpIiwib2JqZWN0IiwiY29sb3IiLCJ4IiwicmFuZG9tIiwieSIsInB1c2giLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8iLCJzZXRTaXplIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiRHJhZ0NvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImhhbmRsZU91dE9mQm94IiwiY2hpbGRyZW4iLCJtYXAiLCJvYmplY3REZXRhaWwiLCJpc091dE9mQm94IiwibWF0ZXJpYWwiLCJSRURfREFSS0VOX0NPTE9SIiwiVEVBTF9EQVJLRU5fQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FB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QWdCbUQsbUVBQWhCLENBQTlCO0FBQ0Q7O0FBQ0QsYUFBT0osWUFBUDtBQUNELEtBZmdCLENBQWpCO0FBZ0JEOztBQUVELFdBQVNKLE1BQVQsR0FBa0I7QUFDaEJDLGtCQUFjO0FBQ2RuRCxZQUFRLENBQUNrRCxNQUFULENBQWdCbkQsS0FBaEIsRUFBdUJELE1BQXZCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx3REFBRDtBQUFNLGVBQVMsRUFBRUY7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FwR0Q7O0dBQU1ELFE7O0tBQUFBLFE7QUFzR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1OWRkNDJiNTBkMzVhMjI4NTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBMQVlPVVRfSEVJR0hULFxyXG4gIExBWU9VVF9XSURUSCxcclxuICBCT1hfV0lEVEgsXHJcbiAgQk9YX0hFSUdIVCxcclxuICBCQUNLR1JPVU5EX0NPTE9SLFxyXG4gIEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPLFxyXG4gIFRFQUxfREFSS0VOX0NPTE9SLFxyXG4gIFJFRF9EQVJLRU5fQ09MT1IsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzIH0gZnJvbSBcIi4uL3NoYXJlZC9Db250cm9sL0RyYWdDb250cm9sc1wiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGF5b3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcclxuICBsZXQgY29udHJvbHMsIGdyb3VwO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVMYXlvdXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVDYW1lcmEoKSB7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgIDUwLFxyXG4gICAgICAxLFxyXG4gICAgICBMQVlPVVRfV0lEVEggLyBMQVlPVVRfSEVJR0hULFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKEJBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NTA1MDUwKSk7XHJcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYsIDEuNSk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwLCAyMDAwKTtcclxuICAgIGxpZ2h0LmFuZ2xlID0gTWF0aC5QSTtcclxuXHJcbiAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDQwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IExBWU9VVF9XSURUSDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IExBWU9VVF9IRUlHSFQ7XHJcblxyXG4gICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKSB7XHJcbiAgICBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQk9YX1dJRFRILCBCT1hfSEVJR0hUKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4MDA2OTVjIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDcwMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA3MDA7XHJcblxyXG4gICAgICBzY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0KCkge1xyXG4gICAgaW5pdGlhbGl6ZUNhbWVyYSgpO1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8pO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShMQVlPVVRfV0lEVEgsIExBWU9VVF9IRUlHSFQpO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPdXRPZkJveCgpIHtcclxuICAgIHNjZW5lLmNoaWxkcmVuID0gc2NlbmUuY2hpbGRyZW4ubWFwKChvYmplY3REZXRhaWwpID0+IHtcclxuICAgICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgICBjb25zdCBpc091dE9mQm94OiBib29sZWFuID1cclxuICAgICAgICBwb3NpdGlvbi54ID4gNDA1IHx8XHJcbiAgICAgICAgcG9zaXRpb24ueCA8IC00MDUgfHxcclxuICAgICAgICBwb3NpdGlvbi55ID4gNDA1IHx8XHJcbiAgICAgICAgcG9zaXRpb24ueSA8IC00MDU7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==