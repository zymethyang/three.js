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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      outOfBoxObjects = _useState[0],
      setOutOfBoxObjects = _useState[1];

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
      layoutRef: layoutRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Hello", JSON.stringify(outOfBoxObjects)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJvdXRPZkJveE9iamVjdHMiLCJzZXRPdXRPZkJveE9iamVjdHMiLCJsYXlvdXRSZWYiLCJ1c2VSZWYiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwiY29udHJvbHMiLCJncm91cCIsIm9iamVjdHMiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplTGF5b3V0IiwiaW5pdGlhbGl6ZUNhbWVyYSIsIlRIUkVFIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwiYmFja2dyb3VuZCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJMQVlPVVRfV0lEVEgiLCJoZWlnaHQiLCJMQVlPVVRfSEVJR0hUIiwiaW5pdGlhbGl6ZUxheW91dE9iamVjdCIsImdlb21ldHJ5IiwiQk9YX1dJRFRIIiwiQk9YX0hFSUdIVCIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJyYW5kb20iLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImlzT3V0T2ZCb3giLCJtYXRlcmlhbCIsIlJFRF9EQVJLRU5fQ09MT1IiLCJURUFMX0RBUktFTl9DT0xPUiIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFw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QUdBdEIsUUFBUSxDQUFDNEIsQ0FBVCxHQUFhLEVBQUVWLCtEQUFhLEdBQUdJLDREQUFsQixJQUFnQyxDQUovQzs7QUFNQSxVQUFJeUIsVUFBVSxJQUFJRCxZQUFZLENBQUNFLFFBQS9CLEVBQXlDO0FBQ3ZDRixvQkFBWSxDQUFDRSxRQUFiLENBQXNCdkIsS0FBdEIsR0FBOEIsSUFBSTdCLDJDQUFKLENBQWdCcUQsa0VBQWhCLENBQTlCO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDRixVQUFELElBQWVELFlBQVksQ0FBQ0UsUUFBaEMsRUFBMEM7QUFDeENGLG9CQUFZLENBQUNFLFFBQWIsQ0FBc0J2QixLQUF0QixHQUE4QixJQUFJN0IsMkNBQUosQ0FBZ0JzRCxtRUFBaEIsQ0FBOUI7QUFDRDs7QUFDRCxhQUFPSixZQUFQO0FBQ0QsS0FmZ0IsQ0FBakI7QUFnQkQ7O0FBRUQsV0FBU0osTUFBVCxHQUFrQjtBQUNoQkMsa0JBQWM7QUFDZHRELFlBQVEsQ0FBQ3FELE1BQVQsQ0FBZ0J0RCxLQUFoQixFQUF1QkQsTUFBdkI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBUyxFQUFFRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDBCQUFXa0UsSUFBSSxDQUFDQyxTQUFMLENBQWVyRSxlQUFmLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQU1ELENBekdEOztHQUFNRixROztLQUFBQSxRO0FBMkdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YTNkZWVjYjdhNDUyNGJhNWMyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCB7XHJcbiAgTEFZT1VUX0hFSUdIVCxcclxuICBMQVlPVVRfV0lEVEgsXHJcbiAgQk9YX1dJRFRILFxyXG4gIEJPWF9IRUlHSFQsXHJcbiAgQkFDS0dST1VORF9DT0xPUixcclxuICBFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyxcclxuICBURUFMX0RBUktFTl9DT0xPUixcclxuICBSRURfREFSS0VOX0NPTE9SLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IERyYWdDb250cm9scyB9IGZyb20gXCIuLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHNcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvdXRPZkJveE9iamVjdHMsIHNldE91dE9mQm94T2JqZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbGF5b3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcclxuICBsZXQgY29udHJvbHMsIGdyb3VwO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVMYXlvdXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVDYW1lcmEoKSB7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgIDUwLFxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgMSxcclxuICAgICAgNTAwMFxyXG4gICAgKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihCQUNLR1JPVU5EX0NPTE9SKTtcclxuXHJcbiAgICBzY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDUwNTA1MCkpO1xyXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmLCAxLjUpO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMCwgMjAwMCk7XHJcbiAgICBsaWdodC5hbmdsZSA9IE1hdGguUEk7XHJcblxyXG4gICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxMDAwO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSA0MDAwO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBMQVlPVVRfV0lEVEg7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSBMQVlPVVRfSEVJR0hUO1xyXG5cclxuICAgIHNjZW5lLmFkZChsaWdodCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0T2JqZWN0KCkge1xyXG4gICAgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgIHNjZW5lLmFkZChncm91cCk7XHJcblxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShCT1hfV0lEVEgsIEJPWF9IRUlHSFQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4MDA2OTVjIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwIC0gNTAwO1xyXG4gICAgICBvYmplY3QucG9zaXRpb24ueSA9IE1hdGgucmFuZG9tKCkgKiA2MDAgLSAzMDA7XHJcblxyXG4gICAgICBzY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0KCkge1xyXG4gICAgaW5pdGlhbGl6ZUNhbWVyYSgpO1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoTEFZT1VUX1dJRFRILCBMQVlPVVRfSEVJR0hUKTtcclxuXHJcbiAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICByZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNoYWRvd01hcDtcclxuXHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICBjb250cm9scyA9IG5ldyBEcmFnQ29udHJvbHMoWy4uLm9iamVjdHNdLCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgcmVuZGVyKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlT3V0T2ZCb3goKSB7XHJcbiAgICBzY2VuZS5jaGlsZHJlbiA9IHNjZW5lLmNoaWxkcmVuLm1hcCgob2JqZWN0RGV0YWlsKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IG9iamVjdERldGFpbDtcclxuICAgICAgY29uc3QgaXNPdXRPZkJveDogYm9vbGVhbiA9XHJcbiAgICAgICAgcG9zaXRpb24ueCA+IChMQVlPVVRfV0lEVEggKyBCT1hfV0lEVEgpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnggPCAtKExBWU9VVF9XSURUSCArIEJPWF9XSURUSCkgLyAyIHx8XHJcbiAgICAgIHBvc2l0aW9uLnkgPiAoTEFZT1VUX0hFSUdIVCArIEJPWF9IRUlHSFQpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPCAtKExBWU9VVF9IRUlHSFQgKyBCT1hfSEVJR0hUKSAvIDI7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgICAgPGRpdj5IZWxsb3tKU09OLnN0cmluZ2lmeShvdXRPZkJveE9iamVjdHMpfTwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9