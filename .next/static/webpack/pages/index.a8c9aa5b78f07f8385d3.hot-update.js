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
      var isOutOfBox = position.x > 405 || position.x < -405 || position.y > 405 || position.y < -405;
      console.log(position);

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
      lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIkxBWU9VVF9XSURUSCIsIkxBWU9VVF9IRUlHSFQiLCJwb3NpdGlvbiIsInoiLCJiYWNrZ3JvdW5kIiwiQkFDS0dST1VORF9DT0xPUiIsImFkZCIsImxpZ2h0Iiwic2V0IiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJjYXN0U2hhZG93Iiwic2hhZG93IiwibmVhciIsImZhciIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsIkJPWF9XSURUSCIsIkJPWF9IRUlHSFQiLCJpIiwib2JqZWN0IiwiY29sb3IiLCJ4IiwieSIsInB1c2giLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8iLCJzZXRTaXplIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiRHJhZ0NvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImhhbmRsZU91dE9mQm94IiwiY2hpbGRyZW4iLCJtYXAiLCJvYmplY3REZXRhaWwiLCJpc091dE9mQm94IiwiY29uc29sZSIsImxvZyIsIm1hdGVyaWFsIiwiUkVEX0RBUktFTl9DT0xPUiIsIlRFQUxfREFSS0VOX0NPTE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtB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QUNELEtBakJnQixDQUFqQjtBQWtCRDs7QUFFRCxXQUFTSixNQUFULEdBQWtCO0FBQ2hCQyxrQkFBYztBQUNkbEQsWUFBUSxDQUFDaUQsTUFBVCxDQUFnQmxELEtBQWhCLEVBQXVCRCxNQUF2QjtBQUNEOztBQUVELHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxlQUFTLEVBQUVGO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBdEdEOztHQUFNRCxROztLQUFBQSxRO0FBd0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOGM5YWE1Yjc4ZjA3ZjgzODVkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCB7XHJcbiAgTEFZT1VUX0hFSUdIVCxcclxuICBMQVlPVVRfV0lEVEgsXHJcbiAgQk9YX1dJRFRILFxyXG4gIEJPWF9IRUlHSFQsXHJcbiAgQkFDS0dST1VORF9DT0xPUixcclxuICBFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyxcclxuICBURUFMX0RBUktFTl9DT0xPUixcclxuICBSRURfREFSS0VOX0NPTE9SLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IERyYWdDb250cm9scyB9IGZyb20gXCIuLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHNcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxheW91dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbiAgbGV0IGNvbnRyb2xzLCBncm91cDtcclxuICBjb25zdCBvYmplY3RzID0gW107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplTGF5b3V0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplQ2FtZXJhKCkge1xyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICA1MCxcclxuICAgICAgMSxcclxuICAgICAgTEFZT1VUX1dJRFRIIC8gTEFZT1VUX0hFSUdIVCxcclxuICAgICAgNTAwMFxyXG4gICAgKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihCQUNLR1JPVU5EX0NPTE9SKTtcclxuXHJcbiAgICBzY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDUwNTA1MCkpO1xyXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmLCAxLjUpO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMCwgMjAwMCk7XHJcbiAgICBsaWdodC5hbmdsZSA9IE1hdGguUEk7XHJcblxyXG4gICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxMDAwO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSA0MDAwO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBMQVlPVVRfV0lEVEg7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSBMQVlPVVRfSEVJR0hUO1xyXG5cclxuICAgIHNjZW5lLmFkZChsaWdodCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0T2JqZWN0KCkge1xyXG4gICAgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgIHNjZW5lLmFkZChncm91cCk7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KEJPWF9XSURUSCwgQk9YX0hFSUdIVCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDAwNjk1YyB9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnggPSAwO1xyXG4gICAgICBvYmplY3QucG9zaXRpb24ueSA9IDA7XHJcblxyXG4gICAgICBzY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0KCkge1xyXG4gICAgaW5pdGlhbGl6ZUNhbWVyYSgpO1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8pO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShMQVlPVVRfV0lEVEgsIExBWU9VVF9IRUlHSFQpO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPdXRPZkJveCgpIHtcclxuICAgIHNjZW5lLmNoaWxkcmVuID0gc2NlbmUuY2hpbGRyZW4ubWFwKChvYmplY3REZXRhaWwpID0+IHtcclxuICAgICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgICBjb25zdCBpc091dE9mQm94OiBib29sZWFuID1cclxuICAgICAgICBwb3NpdGlvbi54ID4gNDA1IHx8XHJcbiAgICAgICAgcG9zaXRpb24ueCA8IC00MDUgfHxcclxuICAgICAgICBwb3NpdGlvbi55ID4gNDA1IHx8XHJcbiAgICAgICAgcG9zaXRpb24ueSA8IC00MDU7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==