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
    var outOfBoxObjects = scene.children.filter(function (_ref) {
      var position = _ref.position;
      return position.x > _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] || position.x < _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] || position.y > _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"] || position.y < _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"];
    });

    if (outOfBoxObjects.length) {
      console.log(outOfBoxObjects);
    }
  }

  function render() {
    handleOutOfBox();
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layoutRef: layoutRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibGF5b3V0UmVmIiwidXNlUmVmIiwiY2FtZXJhIiwic2NlbmUiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiZ3JvdXAiLCJvYmplY3RzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxheW91dCIsImluaXRpYWxpemVDYW1lcmEiLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImJhY2tncm91bmQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiTEFZT1VUX1dJRFRIIiwiaGVpZ2h0IiwiTEFZT1VUX0hFSUdIVCIsImluaXRpYWxpemVMYXlvdXRPYmplY3QiLCJnZW9tZXRyeSIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJyYW5kb20iLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIkRyYWdDb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJoYW5kbGVPdXRPZkJveCIsIm91dE9mQm94T2JqZWN0cyIsImNoaWxkcmVuIiwiZmlsdGVyIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMs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dGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZmMTgwMjU3MGI0NjE1MzdjNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCB7XHJcbiAgTEFZT1VUX0hFSUdIVCxcclxuICBMQVlPVVRfV0lEVEgsXHJcbiAgQkFDS0dST1VORF9DT0xPUixcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsYXlvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xyXG4gIGxldCBjb250cm9scywgZ3JvdXA7XHJcbiAgY29uc3Qgb2JqZWN0cyA9IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhbWVyYSgpIHtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgNTAsXHJcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAxLFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKEJBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NTA1MDUwKSk7XHJcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYsIDEuNSk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwLCAyMDAwKTtcclxuICAgIGxpZ2h0LmFuZ2xlID0gTWF0aC5QSTtcclxuXHJcbiAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDQwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IExBWU9VVF9XSURUSDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IExBWU9VVF9IRUlHSFQ7XHJcblxyXG4gICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKSB7XHJcbiAgICBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEyMCwgMTIwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMDY5NWMgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi54ID0gTWF0aC5yYW5kb20oKSAqIDEwMDAgLSA1MDA7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi55ID0gTWF0aC5yYW5kb20oKSAqIDYwMCAtIDMwMDtcclxuXHJcbiAgICAgIHNjZW5lLmFkZChvYmplY3QpO1xyXG4gICAgICBvYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXQoKSB7XHJcbiAgICBpbml0aWFsaXplQ2FtZXJhKCk7XHJcbiAgICBpbml0aWFsaXplTGF5b3V0T2JqZWN0KCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShMQVlPVVRfV0lEVEgsIExBWU9VVF9IRUlHSFQpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xyXG5cclxuICAgIGxheW91dFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPdXRPZkJveCgpIHtcclxuICAgIGNvbnN0IG91dE9mQm94T2JqZWN0cyA9IHNjZW5lLmNoaWxkcmVuLmZpbHRlcihcclxuICAgICAgKHsgcG9zaXRpb24gfSkgPT5cclxuICAgICAgICBwb3NpdGlvbi54ID4gTEFZT1VUX1dJRFRIIHx8XHJcbiAgICAgICAgcG9zaXRpb24ueCA8IExBWU9VVF9XSURUSCB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPiBMQVlPVVRfSEVJR0hUIHx8XHJcbiAgICAgICAgcG9zaXRpb24ueSA8IExBWU9VVF9XSURUSFxyXG4gICAgKTtcclxuICAgIGlmKG91dE9mQm94T2JqZWN0cy5sZW5ndGgpe1xyXG4gICAgICBjb25zb2xlLmxvZyhvdXRPZkJveE9iamVjdHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==