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
    layoutRef.current.appendChild(renderer.domElement);
    controls = new _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__["DragControls"]([].concat(objects), camera, renderer.domElement);
    controls.addEventListener("drag", render);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJsYXlvdXRSZWYiLCJ1c2VSZWYiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwiY29udHJvbHMiLCJncm91cCIsIm9iamVjdHMiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplTGF5b3V0IiwiaW5pdGlhbGl6ZUNhbWVyYSIsIlRIUkVFIiwicG9zaXRpb24iLCJ6IiwiYmFja2dyb3VuZCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJhZGQiLCJsaWdodCIsInNldCIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJtYXBTaXplIiwid2lkdGgiLCJMQVlPVVRfV0lEVEgiLCJoZWlnaHQiLCJMQVlPVVRfSEVJR0hUIiwiaW5pdGlhbGl6ZUxheW91dE9iamVjdCIsImdlb21ldHJ5IiwiQk9YX1dJRFRIIiwiQk9YX0hFSUdIVCIsImkiLCJvYmplY3QiLCJjb2xvciIsIngiLCJ5IiwicHVzaCIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJpc091dE9mQm94IiwibWF0ZXJpYWwiLCJSRURfREFSS0VOX0NPTE9SIiwiVEVBTF9EQVJLRU5fQ09MT1IiLCJfb2JqZWN0cyIsIl9jYW1lcmEiLCJfZG9tRWxlbWVudCIsIl9wbGFuZSIsIlBsYW5lIiwiX3JheWNhc3RlciIsIlJheWNhc3RlciIsIl9tb3VzZSIsIlZlY3RvcjIiLCJfb2Zmc2V0IiwiVmVjdG9yMyIsIl9pbnRlcnNlY3Rpb24iLCJfd29ybGRQb3NpdGlvbiIsIl9pbnZlcnNlTWF0cml4IiwiTWF0cml4NCIsIl9pbnRlcnNlY3Rpb25zIiwiX3NlbGVjdGVkIiwiX2hvdmVyZWQiLCJzY29wZSIsImFjdGl2YXRlIiwib25Qb2ludGVyTW92ZSIsIm9uUG9pbnRlckRvd24iLCJvblBvaW50ZXJDYW5jZWwiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJkZWFjdGl2YXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiY3Vyc29yIiwiZGlzcG9zZSIsImdldE9iamVjdHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlclR5cGUiLCJvbk1vdXNlTW92ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJzZXRGcm9tQ2FtZXJhIiwicmF5IiwiaW50ZXJzZWN0UGxhbmUiLCJjb3B5Iiwic3ViIiwiYXBwbHlNYXRyaXg0IiwiZGlzcGF0Y2hFdmVudCIsImxlbmd0aCIsImludGVyc2VjdE9iamVjdHMiLCJzZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludCIsImdldFdvcmxkRGlyZWN0aW9uIiwibm9ybWFsIiwic2V0RnJvbU1hdHJpeFBvc2l0aW9uIiwibWF0cml4V29ybGQiLCJvbk1vdXNlRG93biIsInRyYW5zZm9ybUdyb3VwIiwicGFyZW50IiwiaW52ZXJ0Iiwib25Nb3VzZUNhbmNlbCIsImNoYW5nZWRUb3VjaGVzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiRXZlbnREaXNwYXRjaGVyIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxJQUFN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TixDQUFxQjtBQUFFakUsWUFBSSxFQUFFLFdBQVI7QUFBcUJYLGNBQU0sRUFBRTRDO0FBQTdCLE9BQXJCO0FBRUE7QUFHRDs7QUFFRCxXQUFTUyxVQUFULENBQXFCTyxLQUFyQixFQUE2QjtBQUU1QkEsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFFBQUtqQixTQUFMLEVBQWlCO0FBRWhCRSxXQUFLLENBQUM4QixhQUFOLENBQXFCO0FBQUVqRSxZQUFJLEVBQUUsU0FBUjtBQUFtQlgsY0FBTSxFQUFFNEM7QUFBM0IsT0FBckI7QUFFQUEsZUFBUyxHQUFHLElBQVo7QUFFQTs7QUFFRGQsZUFBVyxDQUFDMEIsS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsTUFBM0I7QUFFQTs7QUFFRFYsVUFBUSxHQW5Tc0QsQ0FxUzlEOztBQUVBLE9BQUtyQyxPQUFMLEdBQWUsSUFBZjtBQUNBLE9BQUsyRSxjQUFMLEdBQXNCLEtBQXRCO0FBRUEsT0FBS3RDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS08sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLSSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLENBL1NEOztLQUFJNUMsWTtBQWlUSkEsWUFBWSxDQUFDMkUsU0FBYixHQUF5QkMsTUFBTSxDQUFDQyxNQUFQLENBQWVDLHFEQUFlLENBQUNILFNBQS9CLENBQXpCO0FBQ0EzRSxZQUFZLENBQUMyRSxTQUFiLENBQXVCSSxXQUF2QixHQUFxQy9FLFlBQXJDO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmUyMDIxOWRhZjlkYmIyNmFjMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xyXG5pbXBvcnQge1xyXG4gIExBWU9VVF9IRUlHSFQsXHJcbiAgTEFZT1VUX1dJRFRILFxyXG4gIEJPWF9XSURUSCxcclxuICBCT1hfSEVJR0hULFxyXG4gIEJBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8sXHJcbiAgVEVBTF9EQVJLRU5fQ09MT1IsXHJcbiAgUkVEX0RBUktFTl9DT0xPUixcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBEcmFnQ29udHJvbHMgfSBmcm9tIFwiLi4vc2hhcmVkL0NvbnRyb2wvRHJhZ0NvbnRyb2xzXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsYXlvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xyXG4gIGxldCBjb250cm9scywgZ3JvdXA7XHJcbiAgY29uc3Qgb2JqZWN0cyA9IFtdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhbWVyYSgpIHtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1MCwgMSwgMSwgNTAwMCk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoQkFDS0dST1VORF9DT0xPUik7XHJcblxyXG4gICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg1MDUwNTApKTtcclxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgMS41KTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCA1MDAsIDIwMDApO1xyXG4gICAgbGlnaHQuYW5nbGUgPSBNYXRoLlBJO1xyXG5cclxuICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgbGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMTAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gNDAwMDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gTEFZT1VUX1dJRFRIO1xyXG4gICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gTEFZT1VUX0hFSUdIVDtcclxuXHJcbiAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpIHtcclxuICAgIGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShCT1hfV0lEVEgsIEJPWF9IRUlHSFQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMDY5NWMgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi54ID0gMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSAwO1xyXG5cclxuICAgICAgc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUxheW91dCgpIHtcclxuICAgIGluaXRpYWxpemVDYW1lcmEoKTtcclxuICAgIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoTEFZT1VUX1dJRFRILCBMQVlPVVRfSEVJR0hUKTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xyXG4gICAgbGF5b3V0UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scyA9IG5ldyBEcmFnQ29udHJvbHMoWy4uLm9iamVjdHNdLCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdcIiwgcmVuZGVyKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlT3V0T2ZCb3goKSB7XHJcbiAgICBzY2VuZS5jaGlsZHJlbiA9IHNjZW5lLmNoaWxkcmVuLm1hcCgob2JqZWN0RGV0YWlsKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IG9iamVjdERldGFpbDtcclxuICAgICAgb2JqZWN0RGV0YWlsLnR5cGUgPT09IFwiTWVzaFwiICYmIGNvbnNvbGUubG9nKHBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgY29uc3QgaXNPdXRPZkJveDogYm9vbGVhbiA9XHJcbiAgICAgICAgcG9zaXRpb24ueCA+IChMQVlPVVRfV0lEVEggLSBCT1hfV0lEVEggKiAxLjUpIC8gMiB8fFxyXG4gICAgICAgIHBvc2l0aW9uLnggPCAtKExBWU9VVF9XSURUSCAtIEJPWF9XSURUSCAqIDEuNSkgLyAyIHx8XHJcbiAgICAgICAgcG9zaXRpb24ueSA+IExBWU9VVF9IRUlHSFQgLyAyIHx8XHJcbiAgICAgICAgcG9zaXRpb24ueSA8IC1MQVlPVVRfSEVJR0hUIC8gMjtcclxuXHJcbiAgICAgIGlmIChpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihSRURfREFSS0VOX0NPTE9SKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWlzT3V0T2ZCb3ggJiYgb2JqZWN0RGV0YWlsLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgb2JqZWN0RGV0YWlsLm1hdGVyaWFsLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKFRFQUxfREFSS0VOX0NPTE9SKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb2JqZWN0RGV0YWlsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBoYW5kbGVPdXRPZkJveCgpO1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIb21lIGxheW91dFJlZj17bGF5b3V0UmVmfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQge1xyXG5cdEV2ZW50RGlzcGF0Y2hlcixcclxuXHRNYXRyaXg0LFxyXG5cdFBsYW5lLFxyXG5cdFJheWNhc3RlcixcclxuXHRWZWN0b3IyLFxyXG5cdFZlY3RvcjNcclxufSBmcm9tICd0aHJlZSc7XHJcblxyXG52YXIgRHJhZ0NvbnRyb2xzID0gZnVuY3Rpb24gKCBfb2JqZWN0cywgX2NhbWVyYSwgX2RvbUVsZW1lbnQgKSB7XHJcblxyXG5cdHZhciBfcGxhbmUgPSBuZXcgUGxhbmUoKTtcclxuXHR2YXIgX3JheWNhc3RlciA9IG5ldyBSYXljYXN0ZXIoKTtcclxuXHJcblx0dmFyIF9tb3VzZSA9IG5ldyBWZWN0b3IyKCk7XHJcblx0dmFyIF9vZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xyXG5cdHZhciBfaW50ZXJzZWN0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuXHR2YXIgX3dvcmxkUG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xyXG5cdHZhciBfaW52ZXJzZU1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XHJcblx0dmFyIF9pbnRlcnNlY3Rpb25zID0gW107XHJcblxyXG5cdHZhciBfc2VsZWN0ZWQgPSBudWxsLCBfaG92ZXJlZCA9IG51bGw7XHJcblxyXG5cdC8vXHJcblxyXG5cdHZhciBzY29wZSA9IHRoaXM7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xyXG5cclxuXHRcdF9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlckNhbmNlbCwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybGVhdmUnLCBvblBvaW50ZXJDYW5jZWwsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcclxuXHJcblx0XHRfZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJDYW5jZWwsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxlYXZlJywgb25Qb2ludGVyQ2FuY2VsLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xyXG5cclxuXHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICcnO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcblxyXG5cdFx0ZGVhY3RpdmF0ZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldE9iamVjdHMoKSB7XHJcblxyXG5cdFx0cmV0dXJuIF9vYmplY3RzO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c3dpdGNoICggZXZlbnQucG9pbnRlclR5cGUgKSB7XHJcblxyXG5cdFx0XHRjYXNlICdtb3VzZSc6XHJcblx0XHRcdGNhc2UgJ3Blbic6XHJcblx0XHRcdFx0b25Nb3VzZU1vdmUoIGV2ZW50ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLyBUT0RPIHRvdWNoXHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcclxuXHJcblx0XHR2YXIgcmVjdCA9IF9kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdF9tb3VzZS54ID0gKCAoIGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgKSAvIHJlY3Qud2lkdGggKSAqIDIgLSAxO1xyXG5cdFx0X21vdXNlLnkgPSAtICggKCBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgKSAvIHJlY3QuaGVpZ2h0ICkgKiAyICsgMTtcclxuXHJcblx0XHRfcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIF9tb3VzZSwgX2NhbWVyYSApO1xyXG5cclxuXHRcdGlmICggX3NlbGVjdGVkICYmIHNjb3BlLmVuYWJsZWQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIF9yYXljYXN0ZXIucmF5LmludGVyc2VjdFBsYW5lKCBfcGxhbmUsIF9pbnRlcnNlY3Rpb24gKSApIHtcclxuXHJcblx0XHRcdFx0X3NlbGVjdGVkLnBvc2l0aW9uLmNvcHkoIF9pbnRlcnNlY3Rpb24uc3ViKCBfb2Zmc2V0ICkuYXBwbHlNYXRyaXg0KCBfaW52ZXJzZU1hdHJpeCApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkcmFnJywgb2JqZWN0OiBfc2VsZWN0ZWQgfSApO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRfaW50ZXJzZWN0aW9ucy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdF9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggX21vdXNlLCBfY2FtZXJhICk7XHJcblx0XHRfcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIF9vYmplY3RzLCB0cnVlLCBfaW50ZXJzZWN0aW9ucyApO1xyXG5cclxuXHRcdGlmICggX2ludGVyc2VjdGlvbnMubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRcdHZhciBvYmplY3QgPSBfaW50ZXJzZWN0aW9uc1sgMCBdLm9iamVjdDtcclxuXHJcblx0XHRcdF9wbGFuZS5zZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludCggX2NhbWVyYS5nZXRXb3JsZERpcmVjdGlvbiggX3BsYW5lLm5vcm1hbCApLCBfd29ybGRQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIG9iamVjdC5tYXRyaXhXb3JsZCApICk7XHJcblxyXG5cdFx0XHRpZiAoIF9ob3ZlcmVkICE9PSBvYmplY3QgKSB7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyb24nLCBvYmplY3Q6IG9iamVjdCB9ICk7XHJcblxyXG5cdFx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHRcdFx0XHRfaG92ZXJlZCA9IG9iamVjdDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0aWYgKCBfaG92ZXJlZCAhPT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXJvZmYnLCBvYmplY3Q6IF9ob3ZlcmVkIH0gKTtcclxuXHJcblx0XHRcdFx0X2RvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2F1dG8nO1xyXG5cdFx0XHRcdF9ob3ZlcmVkID0gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Qb2ludGVyRG93biggZXZlbnQgKSB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzd2l0Y2ggKCBldmVudC5wb2ludGVyVHlwZSApIHtcclxuXHJcblx0XHRcdGNhc2UgJ21vdXNlJzpcclxuXHRcdFx0Y2FzZSAncGVuJzpcclxuXHRcdFx0XHRvbk1vdXNlRG93biggZXZlbnQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdC8vIFRPRE8gdG91Y2hcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0X2ludGVyc2VjdGlvbnMubGVuZ3RoID0gMDtcclxuXHJcblx0XHRfcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIF9tb3VzZSwgX2NhbWVyYSApO1xyXG5cdFx0X3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBfb2JqZWN0cywgdHJ1ZSwgX2ludGVyc2VjdGlvbnMgKTtcclxuXHJcblx0XHRpZiAoIF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRfc2VsZWN0ZWQgPSAoIHNjb3BlLnRyYW5zZm9ybUdyb3VwID09PSB0cnVlICkgPyBfb2JqZWN0c1sgMCBdIDogX2ludGVyc2VjdGlvbnNbIDAgXS5vYmplY3Q7XHJcblxyXG5cdFx0XHRpZiAoIF9yYXljYXN0ZXIucmF5LmludGVyc2VjdFBsYW5lKCBfcGxhbmUsIF9pbnRlcnNlY3Rpb24gKSApIHtcclxuXHJcblx0XHRcdFx0X2ludmVyc2VNYXRyaXguY29weSggX3NlbGVjdGVkLnBhcmVudC5tYXRyaXhXb3JsZCApLmludmVydCgpO1xyXG5cdFx0XHRcdF9vZmZzZXQuY29weSggX2ludGVyc2VjdGlvbiApLnN1YiggX3dvcmxkUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCBfc2VsZWN0ZWQubWF0cml4V29ybGQgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X2RvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZ3N0YXJ0Jywgb2JqZWN0OiBfc2VsZWN0ZWQgfSApO1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Qb2ludGVyQ2FuY2VsKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHN3aXRjaCAoIGV2ZW50LnBvaW50ZXJUeXBlICkge1xyXG5cclxuXHRcdFx0Y2FzZSAnbW91c2UnOlxyXG5cdFx0XHRjYXNlICdwZW4nOlxyXG5cdFx0XHRcdG9uTW91c2VDYW5jZWwoIGV2ZW50ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLyBUT0RPIHRvdWNoXHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VDYW5jZWwoIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKCBfc2VsZWN0ZWQgKSB7XHJcblxyXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkcmFnZW5kJywgb2JqZWN0OiBfc2VsZWN0ZWQgfSApO1xyXG5cclxuXHRcdFx0X3NlbGVjdGVkID0gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0X2RvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gX2hvdmVyZWQgPyAncG9pbnRlcicgOiAnYXV0byc7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRldmVudCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWyAwIF07XHJcblxyXG5cdFx0dmFyIHJlY3QgPSBfZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRfbW91c2UueCA9ICggKCBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0ICkgLyByZWN0LndpZHRoICkgKiAyIC0gMTtcclxuXHRcdF9tb3VzZS55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wICkgLyByZWN0LmhlaWdodCApICogMiArIDE7XHJcblxyXG5cdFx0X3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBfbW91c2UsIF9jYW1lcmEgKTtcclxuXHJcblx0XHRpZiAoIF9zZWxlY3RlZCAmJiBzY29wZS5lbmFibGVkICkge1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9zZWxlY3RlZC5wb3NpdGlvbi5jb3B5KCBfaW50ZXJzZWN0aW9uLnN1YiggX29mZnNldCApLmFwcGx5TWF0cml4NCggX2ludmVyc2VNYXRyaXggKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZycsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1sgMCBdO1xyXG5cclxuXHRcdHZhciByZWN0ID0gX2RvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0X21vdXNlLnggPSAoICggZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCApIC8gcmVjdC53aWR0aCApICogMiAtIDE7XHJcblx0XHRfbW91c2UueSA9IC0gKCAoIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCApIC8gcmVjdC5oZWlnaHQgKSAqIDIgKyAxO1xyXG5cclxuXHRcdF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0X3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBfbW91c2UsIF9jYW1lcmEgKTtcclxuXHRcdCBfcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIF9vYmplY3RzLCB0cnVlLCBfaW50ZXJzZWN0aW9ucyApO1xyXG5cclxuXHRcdGlmICggX2ludGVyc2VjdGlvbnMubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRcdF9zZWxlY3RlZCA9ICggc2NvcGUudHJhbnNmb3JtR3JvdXAgPT09IHRydWUgKSA/IF9vYmplY3RzWyAwIF0gOiBfaW50ZXJzZWN0aW9uc1sgMCBdLm9iamVjdDtcclxuXHJcblx0XHRcdF9wbGFuZS5zZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludCggX2NhbWVyYS5nZXRXb3JsZERpcmVjdGlvbiggX3BsYW5lLm5vcm1hbCApLCBfd29ybGRQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIF9zZWxlY3RlZC5tYXRyaXhXb3JsZCApICk7XHJcblxyXG5cdFx0XHRpZiAoIF9yYXljYXN0ZXIucmF5LmludGVyc2VjdFBsYW5lKCBfcGxhbmUsIF9pbnRlcnNlY3Rpb24gKSApIHtcclxuXHJcblx0XHRcdFx0X2ludmVyc2VNYXRyaXguY29weSggX3NlbGVjdGVkLnBhcmVudC5tYXRyaXhXb3JsZCApLmludmVydCgpO1xyXG5cdFx0XHRcdF9vZmZzZXQuY29weSggX2ludGVyc2VjdGlvbiApLnN1YiggX3dvcmxkUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCBfc2VsZWN0ZWQubWF0cml4V29ybGQgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X2RvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZ3N0YXJ0Jywgb2JqZWN0OiBfc2VsZWN0ZWQgfSApO1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoIF9zZWxlY3RlZCApIHtcclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWdlbmQnLCBvYmplY3Q6IF9zZWxlY3RlZCB9ICk7XHJcblxyXG5cdFx0XHRfc2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRfZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnYXV0byc7XHJcblxyXG5cdH1cclxuXHJcblx0YWN0aXZhdGUoKTtcclxuXHJcblx0Ly8gQVBJXHJcblxyXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0dGhpcy50cmFuc2Zvcm1Hcm91cCA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmFjdGl2YXRlID0gYWN0aXZhdGU7XHJcblx0dGhpcy5kZWFjdGl2YXRlID0gZGVhY3RpdmF0ZTtcclxuXHR0aGlzLmRpc3Bvc2UgPSBkaXNwb3NlO1xyXG5cdHRoaXMuZ2V0T2JqZWN0cyA9IGdldE9iamVjdHM7XHJcblxyXG59O1xyXG5cclxuRHJhZ0NvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcclxuRHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERyYWdDb250cm9scztcclxuXHJcbmV4cG9ydCB7IERyYWdDb250cm9scyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9