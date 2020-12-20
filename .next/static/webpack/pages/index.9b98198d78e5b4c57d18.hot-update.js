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
      lineNumber: 118,
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
/*!**********************************************!*\
  !*** ./shared/Control/DragControls/index.js ***!
  \**********************************************/
/*! exports provided: DragControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


var DragControls = function DragControls(_objects, _camera, _domElement) {
  var _plane = new three__WEBPACK_IMPORTED_MODULE_0__["Plane"]();

  var _raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();

  var _mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();

  var _offset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

  var _intersection = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

  var _worldPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

  var _inverseMatrix = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();

  var _intersections = [];
  var _selected = null,
      _hovered = null; //

  var scope = this;

  function activate() {
    _domElement.addEventListener('pointermove', onPointerMove, false);

    _domElement.addEventListener('pointerdown', onPointerDown, false);

    _domElement.addEventListener('pointerup', onPointerCancel, false);

    _domElement.addEventListener('pointerleave', onPointerCancel, false);

    _domElement.addEventListener('touchmove', onTouchMove, false);

    _domElement.addEventListener('touchstart', onTouchStart, false);

    _domElement.addEventListener('touchend', onTouchEnd, false);
  }

  function deactivate() {
    _domElement.removeEventListener('pointermove', onPointerMove, false);

    _domElement.removeEventListener('pointerdown', onPointerDown, false);

    _domElement.removeEventListener('pointerup', onPointerCancel, false);

    _domElement.removeEventListener('pointerleave', onPointerCancel, false);

    _domElement.removeEventListener('touchmove', onTouchMove, false);

    _domElement.removeEventListener('touchstart', onTouchStart, false);

    _domElement.removeEventListener('touchend', onTouchEnd, false);

    _domElement.style.cursor = '';
  }

  function dispose() {
    deactivate();
  }

  function getObjects() {
    return _objects;
  }

  function onPointerMove(event) {
    event.preventDefault();

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        onMouseMove(event);
        break;
      // TODO touch
    }
  }

  function onMouseMove(event) {
    var rect = _domElement.getBoundingClientRect();

    _mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, _camera);

    if (_selected && scope.enabled) {
      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {
        _selected.position.copy(_intersection.sub(_offset).applyMatrix4(_inverseMatrix));
      }

      scope.dispatchEvent({
        type: 'drag',
        object: _selected
      });
      return;
    }

    _intersections.length = 0;

    _raycaster.setFromCamera(_mouse, _camera);

    _raycaster.intersectObjects(_objects, true, _intersections);

    if (_intersections.length > 0) {
      var object = _intersections[0].object;

      _plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), _worldPosition.setFromMatrixPosition(object.matrixWorld));

      if (_hovered !== object) {
        scope.dispatchEvent({
          type: 'hoveron',
          object: object
        });
        _domElement.style.cursor = 'pointer';
        _hovered = object;
      }
    } else {
      if (_hovered !== null) {
        scope.dispatchEvent({
          type: 'hoveroff',
          object: _hovered
        });
        _domElement.style.cursor = 'auto';
        _hovered = null;
      }
    }
  }

  function onPointerDown(event) {
    event.preventDefault();

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        onMouseDown(event);
        break;
      // TODO touch
    }
  }

  function onMouseDown(event) {
    event.preventDefault();
    _intersections.length = 0;

    _raycaster.setFromCamera(_mouse, _camera);

    _raycaster.intersectObjects(_objects, true, _intersections);

    if (_intersections.length > 0) {
      _selected = scope.transformGroup === true ? _objects[0] : _intersections[0].object;

      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {
        _inverseMatrix.copy(_selected.parent.matrixWorld).invert();

        _offset.copy(_intersection).sub(_worldPosition.setFromMatrixPosition(_selected.matrixWorld));
      }

      _domElement.style.cursor = 'move';
      scope.dispatchEvent({
        type: 'dragstart',
        object: _selected
      });
    }
  }

  function onPointerCancel(event) {
    event.preventDefault();

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        onMouseCancel(event);
        break;
      // TODO touch
    }
  }

  function onMouseCancel(event) {
    event.preventDefault();

    if (_selected) {
      scope.dispatchEvent({
        type: 'dragend',
        object: _selected
      });
      _selected = null;
    }

    _domElement.style.cursor = _hovered ? 'pointer' : 'auto';
  }

  function onTouchMove(event) {
    event.preventDefault();
    event = event.changedTouches[0];

    var rect = _domElement.getBoundingClientRect();

    _mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, _camera);

    if (_selected && scope.enabled) {
      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {
        _selected.position.copy(_intersection.sub(_offset).applyMatrix4(_inverseMatrix));
      }

      scope.dispatchEvent({
        type: 'drag',
        object: _selected
      });
      return;
    }
  }

  function onTouchStart(event) {
    event.preventDefault();
    event = event.changedTouches[0];

    var rect = _domElement.getBoundingClientRect();

    _mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    _intersections.length = 0;

    _raycaster.setFromCamera(_mouse, _camera);

    _raycaster.intersectObjects(_objects, true, _intersections);

    if (_intersections.length > 0) {
      _selected = scope.transformGroup === true ? _objects[0] : _intersections[0].object;

      _plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), _worldPosition.setFromMatrixPosition(_selected.matrixWorld));

      if (_raycaster.ray.intersectPlane(_plane, _intersection)) {
        _inverseMatrix.copy(_selected.parent.matrixWorld).invert();

        _offset.copy(_intersection).sub(_worldPosition.setFromMatrixPosition(_selected.matrixWorld));
      }

      _domElement.style.cursor = 'move';
      scope.dispatchEvent({
        type: 'dragstart',
        object: _selected
      });
    }
  }

  function onTouchEnd(event) {
    event.preventDefault();

    if (_selected) {
      scope.dispatchEvent({
        type: 'dragend',
        object: _selected
      });
      _selected = null;
    }

    _domElement.style.cursor = 'auto';
  }

  activate(); // API

  this.enabled = true;
  this.transformGroup = false;
  this.activate = activate;
  this.deactivate = deactivate;
  this.dispose = dispose;
  this.getObjects = getObjects;
};

_c = DragControls;
DragControls.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"].prototype);
DragControls.prototype.constructor = DragControls;


var _c;

$RefreshReg$(_c, "DragControls");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJsYXlvdXRSZWYiLCJ1c2VSZWYiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwiY29udHJvbHMiLCJncm91cCIsIm9iamVjdHMiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplTGF5b3V0IiwiaW5pdGlhbGl6ZUNhbWVyYSIsIlRIUkVFIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwiYmFja2dyb3VuZCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJMQVlPVVRfV0lEVEgiLCJoZWlnaHQiLCJMQVlPVVRfSEVJR0hUIiwiaW5pdGlhbGl6ZUxheW91dE9iamVjdCIsImdlb21ldHJ5IiwiQk9YX1dJRFRIIiwiQk9YX0hFSUdIVCIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImlzT3V0T2ZCb3giLCJtYXRlcmlhbCIsIlJFRF9EQVJLRU5fQ09MT1IiLCJURUFMX0RBUktFTl9DT0xPUiIsIl9vYmplY3RzIiwiX2NhbWVyYSIsIl9kb21FbGVtZW50IiwiX3BsYW5lIiwiUGxhbmUiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiVmVjdG9yMiIsIl9vZmZzZXQiLCJWZWN0b3IzIiwiX2ludGVyc2VjdGlvbiIsIl93b3JsZFBvc2l0aW9uIiwiX2ludmVyc2VNYXRyaXgiLCJNYXRyaXg0IiwiX2ludGVyc2VjdGlvbnMiLCJfc2VsZWN0ZWQiLCJfaG92ZXJlZCIsInNjb3BlIiwiYWN0aXZhdGUiLCJvblBvaW50ZXJNb3ZlIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlckNhbmNlbCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsImRlYWN0aXZhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJkaXNwb3NlIiwiZ2V0T2JqZWN0cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb2ludGVyVHlwZSIsIm9uTW91c2VNb3ZlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsInNldEZyb21DYW1lcmEiLCJyYXkiLCJpbnRlcnNlY3RQbGFuZSIsImNvcHkiLCJzdWIiLCJhcHBseU1hdHJpeDQiLCJkaXNwYXRjaEV2ZW50IiwibGVuZ3RoIiwiaW50ZXJzZWN0T2JqZWN0cyIsInNldEZyb21Ob3JtYWxBbmRDb3BsYW5hclBvaW50IiwiZ2V0V29ybGREaXJlY3Rpb24iLCJub3JtYWwiLCJzZXRGcm9tTWF0cml4UG9zaXRpb24iLCJtYXRyaXhXb3JsZCIsIm9uTW91c2VEb3duIiwidHJhbnNmb3JtR3JvdXAiLCJwYXJlbnQiLCJpbnZlcnQiLCJvbk1vdXNlQ2FuY2VsIiwiY2hhbmdlZFRvdWNoZXMiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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QVI7QUFBcUJYLGNBQU0sRUFBRTBDO0FBQTdCLE9BQXJCO0FBRUE7QUFHRDs7QUFFRCxXQUFTUyxVQUFULENBQXFCTyxLQUFyQixFQUE2QjtBQUU1QkEsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFFBQUtqQixTQUFMLEVBQWlCO0FBRWhCRSxXQUFLLENBQUM4QixhQUFOLENBQXFCO0FBQUUvRCxZQUFJLEVBQUUsU0FBUjtBQUFtQlgsY0FBTSxFQUFFMEM7QUFBM0IsT0FBckI7QUFFQUEsZUFBUyxHQUFHLElBQVo7QUFFQTs7QUFFRGQsZUFBVyxDQUFDMEIsS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsTUFBM0I7QUFFQTs7QUFFRFYsVUFBUSxHQW5Tc0QsQ0FxUzlEOztBQUVBLE9BQUtuQyxPQUFMLEdBQWUsSUFBZjtBQUNBLE9BQUt5RSxjQUFMLEdBQXNCLEtBQXRCO0FBRUEsT0FBS3RDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS08sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLSSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLENBL1NEOztLQUFJMUMsWTtBQWlUSkEsWUFBWSxDQUFDeUUsU0FBYixHQUF5QkMsTUFBTSxDQUFDQyxNQUFQLENBQWVDLHFEQUFlLENBQUNILFNBQS9CLENBQXpCO0FBQ0F6RSxZQUFZLENBQUN5RSxTQUFiLENBQXVCSSxXQUF2QixHQUFxQzdFLFlBQXJDO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWI5ODE5OGQ3OGU1YjRjNTdkMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xyXG5pbXBvcnQge1xyXG4gIExBWU9VVF9IRUlHSFQsXHJcbiAgTEFZT1VUX1dJRFRILFxyXG4gIEJPWF9XSURUSCxcclxuICBCT1hfSEVJR0hULFxyXG4gIEJBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8sXHJcbiAgVEVBTF9EQVJLRU5fQ09MT1IsXHJcbiAgUkVEX0RBUktFTl9DT0xPUixcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsYXlvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xyXG4gIGxldCBjb250cm9scywgZ3JvdXA7XHJcbiAgY29uc3Qgb2JqZWN0cyA9IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhbWVyYSgpIHtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgNTAsXHJcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAxLFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKEJBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NTA1MDUwKSk7XHJcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYsIDEuNSk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwLCAyMDAwKTtcclxuICAgIGxpZ2h0LmFuZ2xlID0gTWF0aC5QSTtcclxuXHJcbiAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDQwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IExBWU9VVF9XSURUSDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IExBWU9VVF9IRUlHSFQ7XHJcblxyXG4gICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKSB7XHJcbiAgICBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KEJPWF9XSURUSCwgQk9YX0hFSUdIVCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMDY5NWMgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuICAgIFxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKExBWU9VVF9XSURUSCwgTEFZT1VUX0hFSUdIVCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcblxyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgY29udHJvbHMgPSBuZXcgRHJhZ0NvbnRyb2xzKFsuLi5vYmplY3RzXSwgY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsIHJlbmRlcik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU91dE9mQm94KCkge1xyXG4gICAgc2NlbmUuY2hpbGRyZW4gPSBzY2VuZS5jaGlsZHJlbi5tYXAoKG9iamVjdERldGFpbCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBvYmplY3REZXRhaWw7XHJcbiAgICAgIGNvbnN0IGlzT3V0T2ZCb3g6IGJvb2xlYW4gPVxyXG4gICAgICAgIHBvc2l0aW9uLnggPiAoTEFZT1VUX1dJRFRIICsgQk9YX1dJRFRIKSAvIDIgfHxcclxuICAgICAgICBwb3NpdGlvbi54IDwgLShMQVlPVVRfV0lEVEggKyBCT1hfV0lEVEgpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPiAoTEFZT1VUX0hFSUdIVCArIEJPWF9IRUlHSFQpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnkgPCAtKExBWU9VVF9IRUlHSFQgKyBCT1hfSEVJR0hUKSAvIDI7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IHtcclxuXHRFdmVudERpc3BhdGNoZXIsXHJcblx0TWF0cml4NCxcclxuXHRQbGFuZSxcclxuXHRSYXljYXN0ZXIsXHJcblx0VmVjdG9yMixcclxuXHRWZWN0b3IzXHJcbn0gZnJvbSAndGhyZWUnO1xyXG5cclxudmFyIERyYWdDb250cm9scyA9IGZ1bmN0aW9uICggX29iamVjdHMsIF9jYW1lcmEsIF9kb21FbGVtZW50ICkge1xyXG5cclxuXHR2YXIgX3BsYW5lID0gbmV3IFBsYW5lKCk7XHJcblx0dmFyIF9yYXljYXN0ZXIgPSBuZXcgUmF5Y2FzdGVyKCk7XHJcblxyXG5cdHZhciBfbW91c2UgPSBuZXcgVmVjdG9yMigpO1xyXG5cdHZhciBfb2Zmc2V0ID0gbmV3IFZlY3RvcjMoKTtcclxuXHR2YXIgX2ludGVyc2VjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcblx0dmFyIF93b3JsZFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuXHR2YXIgX2ludmVyc2VNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG5cdHZhciBfaW50ZXJzZWN0aW9ucyA9IFtdO1xyXG5cclxuXHR2YXIgX3NlbGVjdGVkID0gbnVsbCwgX2hvdmVyZWQgPSBudWxsO1xyXG5cclxuXHQvL1xyXG5cclxuXHR2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuXHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJDYW5jZWwsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxlYXZlJywgb25Qb2ludGVyQ2FuY2VsLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XHJcblxyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyQ2FuY2VsLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsZWF2ZScsIG9uUG9pbnRlckNhbmNlbCwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcclxuXHJcblx0XHRfZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnJztcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG5cclxuXHRcdGRlYWN0aXZhdGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRPYmplY3RzKCkge1xyXG5cclxuXHRcdHJldHVybiBfb2JqZWN0cztcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHN3aXRjaCAoIGV2ZW50LnBvaW50ZXJUeXBlICkge1xyXG5cclxuXHRcdFx0Y2FzZSAnbW91c2UnOlxyXG5cdFx0XHRjYXNlICdwZW4nOlxyXG5cdFx0XHRcdG9uTW91c2VNb3ZlKCBldmVudCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Ly8gVE9ETyB0b3VjaFxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcblxyXG5cdFx0dmFyIHJlY3QgPSBfZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRfbW91c2UueCA9ICggKCBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0ICkgLyByZWN0LndpZHRoICkgKiAyIC0gMTtcclxuXHRcdF9tb3VzZS55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wICkgLyByZWN0LmhlaWdodCApICogMiArIDE7XHJcblxyXG5cdFx0X3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBfbW91c2UsIF9jYW1lcmEgKTtcclxuXHJcblx0XHRpZiAoIF9zZWxlY3RlZCAmJiBzY29wZS5lbmFibGVkICkge1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9zZWxlY3RlZC5wb3NpdGlvbi5jb3B5KCBfaW50ZXJzZWN0aW9uLnN1YiggX29mZnNldCApLmFwcGx5TWF0cml4NCggX2ludmVyc2VNYXRyaXggKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZycsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0X2ludGVyc2VjdGlvbnMubGVuZ3RoID0gMDtcclxuXHJcblx0XHRfcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIF9tb3VzZSwgX2NhbWVyYSApO1xyXG5cdFx0X3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBfb2JqZWN0cywgdHJ1ZSwgX2ludGVyc2VjdGlvbnMgKTtcclxuXHJcblx0XHRpZiAoIF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHR2YXIgb2JqZWN0ID0gX2ludGVyc2VjdGlvbnNbIDAgXS5vYmplY3Q7XHJcblxyXG5cdFx0XHRfcGxhbmUuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQoIF9jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIF9wbGFuZS5ub3JtYWwgKSwgX3dvcmxkUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCBvYmplY3QubWF0cml4V29ybGQgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBfaG92ZXJlZCAhPT0gb2JqZWN0ICkge1xyXG5cclxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3Zlcm9uJywgb2JqZWN0OiBvYmplY3QgfSApO1xyXG5cclxuXHRcdFx0XHRfZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblx0XHRcdFx0X2hvdmVyZWQgPSBvYmplY3Q7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmICggX2hvdmVyZWQgIT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyb2ZmJywgb2JqZWN0OiBfaG92ZXJlZCB9ICk7XHJcblxyXG5cdFx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdhdXRvJztcclxuXHRcdFx0XHRfaG92ZXJlZCA9IG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c3dpdGNoICggZXZlbnQucG9pbnRlclR5cGUgKSB7XHJcblxyXG5cdFx0XHRjYXNlICdtb3VzZSc6XHJcblx0XHRcdGNhc2UgJ3Blbic6XHJcblx0XHRcdFx0b25Nb3VzZURvd24oIGV2ZW50ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLyBUT0RPIHRvdWNoXHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0X3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBfbW91c2UsIF9jYW1lcmEgKTtcclxuXHRcdF9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggX29iamVjdHMsIHRydWUsIF9pbnRlcnNlY3Rpb25zICk7XHJcblxyXG5cdFx0aWYgKCBfaW50ZXJzZWN0aW9ucy5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFx0X3NlbGVjdGVkID0gKCBzY29wZS50cmFuc2Zvcm1Hcm91cCA9PT0gdHJ1ZSApID8gX29iamVjdHNbIDAgXSA6IF9pbnRlcnNlY3Rpb25zWyAwIF0ub2JqZWN0O1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9pbnZlcnNlTWF0cml4LmNvcHkoIF9zZWxlY3RlZC5wYXJlbnQubWF0cml4V29ybGQgKS5pbnZlcnQoKTtcclxuXHRcdFx0XHRfb2Zmc2V0LmNvcHkoIF9pbnRlcnNlY3Rpb24gKS5zdWIoIF93b3JsZFBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggX3NlbGVjdGVkLm1hdHJpeFdvcmxkICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWdzdGFydCcsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uUG9pbnRlckNhbmNlbCggZXZlbnQgKSB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzd2l0Y2ggKCBldmVudC5wb2ludGVyVHlwZSApIHtcclxuXHJcblx0XHRcdGNhc2UgJ21vdXNlJzpcclxuXHRcdFx0Y2FzZSAncGVuJzpcclxuXHRcdFx0XHRvbk1vdXNlQ2FuY2VsKCBldmVudCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Ly8gVE9ETyB0b3VjaFxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlQ2FuY2VsKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmICggX3NlbGVjdGVkICkge1xyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZ2VuZCcsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHRcdF9zZWxlY3RlZCA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9IF9ob3ZlcmVkID8gJ3BvaW50ZXInIDogJ2F1dG8nO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1sgMCBdO1xyXG5cclxuXHRcdHZhciByZWN0ID0gX2RvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0X21vdXNlLnggPSAoICggZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCApIC8gcmVjdC53aWR0aCApICogMiAtIDE7XHJcblx0XHRfbW91c2UueSA9IC0gKCAoIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCApIC8gcmVjdC5oZWlnaHQgKSAqIDIgKyAxO1xyXG5cclxuXHRcdF9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggX21vdXNlLCBfY2FtZXJhICk7XHJcblxyXG5cdFx0aWYgKCBfc2VsZWN0ZWQgJiYgc2NvcGUuZW5hYmxlZCApIHtcclxuXHJcblx0XHRcdGlmICggX3JheWNhc3Rlci5yYXkuaW50ZXJzZWN0UGxhbmUoIF9wbGFuZSwgX2ludGVyc2VjdGlvbiApICkge1xyXG5cclxuXHRcdFx0XHRfc2VsZWN0ZWQucG9zaXRpb24uY29weSggX2ludGVyc2VjdGlvbi5zdWIoIF9vZmZzZXQgKS5hcHBseU1hdHJpeDQoIF9pbnZlcnNlTWF0cml4ICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWcnLCBvYmplY3Q6IF9zZWxlY3RlZCB9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbIDAgXTtcclxuXHJcblx0XHR2YXIgcmVjdCA9IF9kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdF9tb3VzZS54ID0gKCAoIGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgKSAvIHJlY3Qud2lkdGggKSAqIDIgLSAxO1xyXG5cdFx0X21vdXNlLnkgPSAtICggKCBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgKSAvIHJlY3QuaGVpZ2h0ICkgKiAyICsgMTtcclxuXHJcblx0XHRfaW50ZXJzZWN0aW9ucy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdF9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggX21vdXNlLCBfY2FtZXJhICk7XHJcblx0XHQgX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBfb2JqZWN0cywgdHJ1ZSwgX2ludGVyc2VjdGlvbnMgKTtcclxuXHJcblx0XHRpZiAoIF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRfc2VsZWN0ZWQgPSAoIHNjb3BlLnRyYW5zZm9ybUdyb3VwID09PSB0cnVlICkgPyBfb2JqZWN0c1sgMCBdIDogX2ludGVyc2VjdGlvbnNbIDAgXS5vYmplY3Q7XHJcblxyXG5cdFx0XHRfcGxhbmUuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQoIF9jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIF9wbGFuZS5ub3JtYWwgKSwgX3dvcmxkUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCBfc2VsZWN0ZWQubWF0cml4V29ybGQgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9pbnZlcnNlTWF0cml4LmNvcHkoIF9zZWxlY3RlZC5wYXJlbnQubWF0cml4V29ybGQgKS5pbnZlcnQoKTtcclxuXHRcdFx0XHRfb2Zmc2V0LmNvcHkoIF9pbnRlcnNlY3Rpb24gKS5zdWIoIF93b3JsZFBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggX3NlbGVjdGVkLm1hdHJpeFdvcmxkICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWdzdGFydCcsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKCBfc2VsZWN0ZWQgKSB7XHJcblxyXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkcmFnZW5kJywgb2JqZWN0OiBfc2VsZWN0ZWQgfSApO1xyXG5cclxuXHRcdFx0X3NlbGVjdGVkID0gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0X2RvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2F1dG8nO1xyXG5cclxuXHR9XHJcblxyXG5cdGFjdGl2YXRlKCk7XHJcblxyXG5cdC8vIEFQSVxyXG5cclxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdHRoaXMudHJhbnNmb3JtR3JvdXAgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xyXG5cdHRoaXMuZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XHJcblx0dGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcclxuXHR0aGlzLmdldE9iamVjdHMgPSBnZXRPYmplY3RzO1xyXG5cclxufTtcclxuXHJcbkRyYWdDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XHJcbkRyYWdDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEcmFnQ29udHJvbHM7XHJcblxyXG5leHBvcnQgeyBEcmFnQ29udHJvbHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==