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
      object.position.x = 0; //Math.random() * 1000 - 500;

      object.position.y = 0; //Math.random() * 600 - 300;

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
    var objects = scene.children.filter(function (_ref) {
      var position = _ref.position;
      return position.x > (_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] + _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"]) / 2 || position.x < -(_constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] + _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"]) / 2;
    });

    if (objects.length) {
      console.log(objects);
    } else {
      console.log(objects);
    }
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
      lineNumber: 109,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Hello", JSON.stringify(outOfBoxObjects)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJvdXRPZkJveE9iamVjdHMiLCJzZXRPdXRPZkJveE9iamVjdHMiLCJsYXlvdXRSZWYiLCJ1c2VSZWYiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwiY29udHJvbHMiLCJncm91cCIsIm9iamVjdHMiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplTGF5b3V0IiwiaW5pdGlhbGl6ZUNhbWVyYSIsIlRIUkVFIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwiYmFja2dyb3VuZCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJMQVlPVVRfV0lEVEgiLCJoZWlnaHQiLCJMQVlPVVRfSEVJR0hUIiwiaW5pdGlhbGl6ZUxheW91dE9iamVjdCIsImdlb21ldHJ5IiwiQk9YX1dJRFRIIiwiQk9YX0hFSUdIVCIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsImZpbHRlciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUN5QkMsc0RBQVEsQ0FBQyxFQUFELENBRGpDO0FBQUEsTUFDZEMsZUFEYztBQUFBLE1BQ0dDLGtCQURIOztBQUVyQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQUlDLE1BQUosRUFBWUMsS0FBWixFQUFtQkMsUUFBbkI7QUFDQSxNQUFJQyxRQUFKLEVBQWNDLEtBQWQ7QUFDQSxNQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLG9CQUFnQjtBQUNqQixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFdBQVNDLGdCQUFULEdBQTRCO0FBQzFCUixVQUFNLEdBQUcsSUFBSVMsdURBQUosQ0FDUCxFQURPLEVBRVBDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkQsTUFBTSxDQUFDRSxXQUZwQixFQUdQLENBSE8sRUFJUCxJQUpPLENBQVQ7QUFNQVosVUFBTSxDQUFDYSxRQUFQLENBQWdCQyxDQUFoQixHQUFvQixJQUFwQjtBQUVBYixTQUFLLEdBQUcsSUFBSVEsMkNBQUosRUFBUjtBQUNBUixTQUFLLENBQUNjLFVBQU4sR0FBbUIsSUFBSU4sMkNBQUosQ0FBZ0JPLGtFQUFoQixDQUFuQjtBQUVBZixTQUFLLENBQUNnQixHQUFOLENBQVUsSUFBSVIsa0RBQUosQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBLFFBQU1TLEtBQUssR0FBRyxJQUFJVCwrQ0FBSixDQUFvQixRQUFwQixFQUE4QixHQUE5QixDQUFkO0FBQ0FTLFNBQUssQ0FBQ0wsUUFBTixDQUFlTSxHQUFmLENBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLElBQTNCO0FBQ0FELFNBQUssQ0FBQ0UsS0FBTixHQUFjQyxJQUFJLENBQUNDLEVBQW5CO0FBRUFKLFNBQUssQ0FBQ0ssVUFBTixHQUFtQixJQUFuQjtBQUNBTCxTQUFLLENBQUNNLE1BQU4sQ0FBYXhCLE1BQWIsQ0FBb0J5QixJQUFwQixHQUEyQixJQUEzQjtBQUNBUCxTQUFLLENBQUNNLE1BQU4sQ0FBYXhCLE1BQWIsQ0FBb0IwQixHQUFwQixHQUEwQixJQUExQjtBQUNBUixTQUFLLENBQUNNLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkMsS0FBckIsR0FBNkJDLDhEQUE3QjtBQUNBWCxTQUFLLENBQUNNLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkcsTUFBckIsR0FBOEJDLCtEQUE5QjtBQUVBOUIsU0FBSyxDQUFDZ0IsR0FBTixDQUFVQyxLQUFWO0FBQ0Q7O0FBRUQsV0FBU2Msc0JBQVQsR0FBa0M7QUFDaEM1QixTQUFLLEdBQUcsSUFBSUssMkNBQUosRUFBUjtBQUNBUixTQUFLLENBQUNnQixHQUFOLENBQVViLEtBQVY7QUFFQSxRQUFNNkIsUUFBUSxHQUFHLElBQUl4QixtREFBSixDQUF3QnlCLDJEQUF4QixFQUFtQ0MsNERBQW5DLENBQWpCOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixVQUFNQyxNQUFNLEdBQUcsSUFBSTVCLDBDQUFKLENBQ2J3QixRQURhLEVBRWIsSUFBSXhCLHlEQUFKLENBQThCO0FBQUU2QixhQUFLLEVBQUU7QUFBVCxPQUE5QixDQUZhLENBQWY7QUFLQUQsWUFBTSxDQUFDeEIsUUFBUCxDQUFnQjBCLENBQWhCLEdBQW9CLENBQXBCLENBTjBCLENBTUg7O0FBQ3ZCRixZQUFNLENBQUN4QixRQUFQLENBQWdCMkIsQ0FBaEIsR0FBb0IsQ0FBcEIsQ0FQMEIsQ0FPSDs7QUFFdkJ2QyxXQUFLLENBQUNnQixHQUFOLENBQVVvQixNQUFWO0FBQ0FoQyxhQUFPLENBQUNvQyxJQUFSLENBQWFKLE1BQWI7QUFDRDtBQUNGOztBQUVELFdBQVM5QixnQkFBVCxHQUE0QjtBQUMxQkMsb0JBQWdCO0FBQ2hCd0IsMEJBQXNCO0FBRXRCOUIsWUFBUSxHQUFHLElBQUlPLG1EQUFKLENBQXdCO0FBQUVpQyxlQUFTLEVBQUU7QUFBYixLQUF4QixDQUFYO0FBQ0F4QyxZQUFRLENBQUN5QyxhQUFULENBQXVCQyw0RUFBdkI7QUFDQTFDLFlBQVEsQ0FBQzJDLE9BQVQsQ0FBaUJoQiw4REFBakIsRUFBK0JFLCtEQUEvQjtBQUVBN0IsWUFBUSxDQUFDNEMsU0FBVCxDQUFtQkMsT0FBbkIsR0FBNkIsSUFBN0I7QUFDQTdDLFlBQVEsQ0FBQzRDLFNBQVQsQ0FBbUJFLElBQW5CLEdBQTBCdkMsa0RBQTFCO0FBRUFYLGFBQVMsQ0FBQ21ELE9BQVYsQ0FBa0JDLFdBQWxCLENBQThCaEQsUUFBUSxDQUFDaUQsVUFBdkM7QUFFQWhELFlBQVEsR0FBRyxJQUFJaUQseUVBQUosV0FBcUIvQyxPQUFyQixHQUErQkwsTUFBL0IsRUFBdUNFLFFBQVEsQ0FBQ2lELFVBQWhELENBQVg7QUFDQWhELFlBQVEsQ0FBQ2tELGdCQUFULENBQTBCLE1BQTFCLEVBQWtDQyxNQUFsQztBQUNBQSxVQUFNO0FBQ1A7O0FBRUQsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QixRQUFNbEQsT0FBTyxHQUFHSixLQUFLLENBQUN1RCxRQUFOLENBQWVDLE1BQWYsQ0FDZDtBQUFBLFVBQUc1QyxRQUFILFFBQUdBLFFBQUg7QUFBQSxhQUNFQSxRQUFRLENBQUMwQixDQUFULEdBQWEsQ0FBQ1YsOERBQVksR0FBR0ssMkRBQWhCLElBQTZCLENBQTFDLElBQ0FyQixRQUFRLENBQUMwQixDQUFULEdBQWEsRUFBRVYsOERBQVksR0FBR0ssMkRBQWpCLElBQThCLENBRjdDO0FBQUEsS0FEYyxDQUFoQjs7QUFLQSxRQUFJN0IsT0FBTyxDQUFDcUQsTUFBWixFQUFvQjtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVl2RCxPQUFaO0FBQ0QsS0FGRCxNQUVLO0FBQ0hzRCxhQUFPLENBQUNDLEdBQVIsQ0FBWXZELE9BQVo7QUFDRDtBQUNGOztBQUVELFdBQVNpRCxNQUFULEdBQWtCO0FBQ2hCQyxrQkFBYztBQUNkckQsWUFBUSxDQUFDb0QsTUFBVCxDQUFnQnJELEtBQWhCLEVBQXVCRCxNQUF2QjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxlQUFTLEVBQUVGO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsMEJBQVcrRCxJQUFJLENBQUNDLFNBQUwsQ0FBZWxFLGVBQWYsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBTUQsQ0FuR0Q7O0dBQU1GLFE7O0tBQUFBLFE7QUFxR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEwYjAzMDc2MTI0M2NmOTBmMDJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBMQVlPVVRfSEVJR0hULFxyXG4gIExBWU9VVF9XSURUSCxcclxuICBCT1hfV0lEVEgsXHJcbiAgQk9YX0hFSUdIVCxcclxuICBCQUNLR1JPVU5EX0NPTE9SLFxyXG4gIEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IERyYWdDb250cm9scyB9IGZyb20gXCIuLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHNcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvdXRPZkJveE9iamVjdHMsIHNldE91dE9mQm94T2JqZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbGF5b3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcclxuICBsZXQgY29udHJvbHMsIGdyb3VwO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVMYXlvdXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVDYW1lcmEoKSB7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgIDUwLFxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgMSxcclxuICAgICAgNTAwMFxyXG4gICAgKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihCQUNLR1JPVU5EX0NPTE9SKTtcclxuXHJcbiAgICBzY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDUwNTA1MCkpO1xyXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmLCAxLjUpO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMCwgMjAwMCk7XHJcbiAgICBsaWdodC5hbmdsZSA9IE1hdGguUEk7XHJcblxyXG4gICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxMDAwO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSA0MDAwO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBMQVlPVVRfV0lEVEg7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSBMQVlPVVRfSEVJR0hUO1xyXG5cclxuICAgIHNjZW5lLmFkZChsaWdodCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0T2JqZWN0KCkge1xyXG4gICAgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgIHNjZW5lLmFkZChncm91cCk7XHJcblxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShCT1hfV0lEVEgsIEJPWF9IRUlHSFQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4MDA2OTVjIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IDA7IC8vTWF0aC5yYW5kb20oKSAqIDEwMDAgLSA1MDA7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi55ID0gMDsgLy9NYXRoLnJhbmRvbSgpICogNjAwIC0gMzAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKExBWU9VVF9XSURUSCwgTEFZT1VUX0hFSUdIVCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcblxyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgY29udHJvbHMgPSBuZXcgRHJhZ0NvbnRyb2xzKFsuLi5vYmplY3RzXSwgY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHJlbmRlcik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dE9mQm94KCkge1xyXG4gICAgY29uc3Qgb2JqZWN0cyA9IHNjZW5lLmNoaWxkcmVuLmZpbHRlcihcclxuICAgICAgKHsgcG9zaXRpb24gfSkgPT5cclxuICAgICAgICBwb3NpdGlvbi54ID4gKExBWU9VVF9XSURUSCArIEJPWF9XSURUSCkgLyAyIHx8XHJcbiAgICAgICAgcG9zaXRpb24ueCA8IC0oTEFZT1VUX1dJRFRIICsgQk9YX1dJRFRIKSAvIDJcclxuICAgICk7XHJcbiAgICBpZiAob2JqZWN0cy5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0cyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0cylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGhhbmRsZU91dE9mQm94KCk7XHJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhvbWUgbGF5b3V0UmVmPXtsYXlvdXRSZWZ9IC8+XHJcbiAgICAgIDxkaXY+SGVsbG97SlNPTi5zdHJpbmdpZnkob3V0T2ZCb3hPYmplY3RzKX08L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==