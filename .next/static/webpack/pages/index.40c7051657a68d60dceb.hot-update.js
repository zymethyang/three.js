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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiTEFZT1VUX1dJRFRIIiwiaGVpZ2h0IiwiTEFZT1VUX0hFSUdIVCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsIkJPWF9XSURUSCIsIkJPWF9IRUlHSFQiLCJpIiwib2JqZWN0IiwiY29sb3IiLCJ4IiwieSIsInB1c2giLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8iLCJzZXRTaXplIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiRHJhZ0NvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImhhbmRsZU91dE9mQm94IiwiY2hpbGRyZW4iLCJtYXAiLCJvYmplY3REZXRhaWwiLCJpc091dE9mQm94IiwibWF0ZXJpYWwiLCJSRURfREFSS0VOX0NPTE9SIiwiVEVBTF9EQVJLRU5fQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxJQUFNQSxRQUFRLEdB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QWVELFlBQVksQ0FBQ0UsUUFBaEMsRUFBMEM7QUFDeENGLG9CQUFZLENBQUNFLFFBQWIsQ0FBc0J0QixLQUF0QixHQUE4QixJQUFJN0IsMkNBQUosQ0FBZ0JxRCxtRUFBaEIsQ0FBOUI7QUFDRDs7QUFDRCxhQUFPSixZQUFQO0FBQ0QsS0FmZ0IsQ0FBakI7QUFnQkQ7O0FBRUQsV0FBU0osTUFBVCxHQUFrQjtBQUNoQkMsa0JBQWM7QUFDZHJELFlBQVEsQ0FBQ29ELE1BQVQsQ0FBZ0JyRCxLQUFoQixFQUF1QkQsTUFBdkI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBUyxFQUFFRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCxDQXBHRDs7R0FBTUQsUTs7S0FBQUEsUTtBQXNHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBjNzA1MTY1N2E2OGQ2MGRjZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xyXG5pbXBvcnQge1xyXG4gIExBWU9VVF9IRUlHSFQsXHJcbiAgTEFZT1VUX1dJRFRILFxyXG4gIEJPWF9XSURUSCxcclxuICBCT1hfSEVJR0hULFxyXG4gIEJBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8sXHJcbiAgVEVBTF9EQVJLRU5fQ09MT1IsXHJcbiAgUkVEX0RBUktFTl9DT0xPUixcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsYXlvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xyXG4gIGxldCBjb250cm9scywgZ3JvdXA7XHJcbiAgY29uc3Qgb2JqZWN0cyA9IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhbWVyYSgpIHtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgNTAsXHJcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAxLFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKEJBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NTA1MDUwKSk7XHJcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYsIDEuNSk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwLCAyMDAwKTtcclxuICAgIGxpZ2h0LmFuZ2xlID0gTWF0aC5QSTtcclxuXHJcbiAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDQwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IExBWU9VVF9XSURUSDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IExBWU9VVF9IRUlHSFQ7XHJcblxyXG4gICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKSB7XHJcbiAgICBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQk9YX1dJRFRILCBCT1hfSEVJR0hUKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4MDA2OTVjIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IDA7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi55ID0gMDtcclxuXHJcbiAgICAgIHNjZW5lLmFkZChvYmplY3QpO1xyXG4gICAgICBvYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXQoKSB7XHJcbiAgICBpbml0aWFsaXplQ2FtZXJhKCk7XHJcbiAgICBpbml0aWFsaXplTGF5b3V0T2JqZWN0KCk7XHJcbiAgICBcclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8pO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShMQVlPVVRfV0lEVEgsIExBWU9VVF9IRUlHSFQpO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPdXRPZkJveCgpIHtcclxuICAgIHNjZW5lLmNoaWxkcmVuID0gc2NlbmUuY2hpbGRyZW4ubWFwKChvYmplY3REZXRhaWwpID0+IHtcclxuICAgICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgICBjb25zdCBpc091dE9mQm94OiBib29sZWFuID1cclxuICAgICAgICBwb3NpdGlvbi54ID4gKExBWU9VVF9XSURUSCArIEJPWF9XSURUSCkgLyAyIHx8XHJcbiAgICAgICAgcG9zaXRpb24ueCA8IC0oTEFZT1VUX1dJRFRIICsgQk9YX1dJRFRIKSAvIDIgfHxcclxuICAgICAgICBwb3NpdGlvbi55ID4gKExBWU9VVF9IRUlHSFQgKyBCT1hfSEVJR0hUKSAvIDIgfHxcclxuICAgICAgICBwb3NpdGlvbi55IDwgLShMQVlPVVRfSEVJR0hUICsgQk9YX0hFSUdIVCkgLyAyO1xyXG5cclxuICAgICAgaWYgKGlzT3V0T2ZCb3ggJiYgb2JqZWN0RGV0YWlsLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgb2JqZWN0RGV0YWlsLm1hdGVyaWFsLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKFJFRF9EQVJLRU5fQ09MT1IpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoVEVBTF9EQVJLRU5fQ09MT1IpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvYmplY3REZXRhaWw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGhhbmRsZU91dE9mQm94KCk7XHJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhvbWUgbGF5b3V0UmVmPXtsYXlvdXRSZWZ9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=