module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/home.module.scss":
/*!******************************************!*\
  !*** ./components/Home/home.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "home_container__16Y7Y",
	"label": "home_label__1D9dp"
};


/***/ }),

/***/ "./components/Home/index.tsx":
/*!***********************************!*\
  !*** ./components/Home/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.scss */ "./components/Home/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Tri Nguyen\\Desktop\\project\\fly-project\\components\\Home\\index.tsx";


const HomeLayout = props => {
  const {
    layoutRef
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: layoutRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
      children: "Hangar Door Line - Do not Put Airplanes Past Line"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLayout);

/***/ }),

/***/ "./constants/layout.ts":
/*!*****************************!*\
  !*** ./constants/layout.ts ***!
  \*****************************/
/*! exports provided: LAYOUT_WIDTH, LAYOUT_HEIGHT, BOX_WIDTH, BOX_HEIGHT, EXPORT_DEFAULT_PIXEL_RATIO, BACKGROUND_COLOR, TEAL_DARKEN_COLOR, RED_DARKEN_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_WIDTH", function() { return LAYOUT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_HEIGHT", function() { return LAYOUT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_WIDTH", function() { return BOX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_HEIGHT", function() { return BOX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORT_DEFAULT_PIXEL_RATIO", function() { return EXPORT_DEFAULT_PIXEL_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_COLOR", function() { return BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAL_DARKEN_COLOR", function() { return TEAL_DARKEN_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_DARKEN_COLOR", function() { return RED_DARKEN_COLOR; });
const LAYOUT_WIDTH = 1024;
const LAYOUT_HEIGHT = 728;
const BOX_WIDTH = 120;
const BOX_HEIGHT = 120;
const EXPORT_DEFAULT_PIXEL_RATIO = 1;
const BACKGROUND_COLOR = 0xf0f0f0;
const TEAL_DARKEN_COLOR = 0x00695c;
const RED_DARKEN_COLOR = 0xc62828;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home/index.tsx");
/* harmony import */ var _constants_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/layout */ "./constants/layout.ts");
/* harmony import */ var _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Control/DragControls */ "./shared/Control/DragControls/index.js");


var _jsxFileName = "C:\\Users\\Tri Nguyen\\Desktop\\project\\fly-project\\pages\\index.tsx";






const HomePage = () => {
  const layoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  let camera, scene, renderer;
  let controls, group;
  const objects = [];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    initializeLayout();
  }, []);

  function initializeCamera() {
    camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, 1, _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_WIDTH"] / _constants_layout__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_HEIGHT"], 5000);
    camera.position.z = 1000;
    scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
    scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_COLOR"]);
    scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x505050));
    const light = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xffffff, 1.5);
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
    const geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](_constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_WIDTH"], _constants_layout__WEBPACK_IMPORTED_MODULE_4__["BOX_HEIGHT"]);

    for (let i = 0; i < 5; i++) {
      const object = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
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
    controls = new _shared_Control_DragControls__WEBPACK_IMPORTED_MODULE_5__["DragControls"]([...objects], camera, renderer.domElement);
    controls.addEventListener("drag", render);
    render();
  }

  function handleOutOfBox() {
    scene.children = scene.children.map(objectDetail => {
      const {
        position
      } = objectDetail;
      const isOutOfBox = position.x > 405 || position.x < -405 || position.y > 405 || position.y < -405;

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
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./shared/Control/DragControls/index.js":
/*!**********************************************!*\
  !*** ./shared/Control/DragControls/index.js ***!
  \**********************************************/
/*! exports provided: DragControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


var DragControls = function (_objects, _camera, _domElement) {
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

DragControls.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"].prototype);
DragControls.prototype.constructor = DragControls;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL2hvbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvbGF5b3V0LnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvQ29udHJvbC9EcmFnQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aHJlZVwiIl0sIm5hbWVzIjpbIkhvbWVMYXlvdXQiLCJwcm9wcyIsImxheW91dFJlZiIsInN0eWxlcyIsImNvbnRhaW5lciIsImxhYmVsIiwiTEFZT1VUX1dJRFRIIiwiTEFZT1VUX0hFSUdIVCIsIkJPWF9XSURUSCIsIkJPWF9IRUlHSFQiLCJFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTyIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJURUFMX0RBUktFTl9DT0xPUiIsIlJFRF9EQVJLRU5fQ09MT1IiLCJIb21lUGFnZSIsInVzZVJlZiIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyZXIiLCJjb250cm9scyIsImdyb3VwIiwib2JqZWN0cyIsInVzZUVmZmVjdCIsImluaXRpYWxpemVMYXlvdXQiLCJpbml0aWFsaXplQ2FtZXJhIiwiVEhSRUUiLCJwb3NpdGlvbiIsInoiLCJiYWNrZ3JvdW5kIiwiYWRkIiwibGlnaHQiLCJzZXQiLCJhbmdsZSIsIk1hdGgiLCJQSSIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJuZWFyIiwiZmFyIiwibWFwU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdGlhbGl6ZUxheW91dE9iamVjdCIsImdlb21ldHJ5IiwiaSIsIm9iamVjdCIsImNvbG9yIiwieCIsInJhbmRvbSIsInkiLCJwdXNoIiwiYW50aWFsaWFzIiwic2V0UGl4ZWxSYXRpbyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJEcmFnQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiaGFuZGxlT3V0T2ZCb3giLCJjaGlsZHJlbiIsIm1hcCIsIm9iamVjdERldGFpbCIsImlzT3V0T2ZCb3giLCJtYXRlcmlhbCIsIl9vYmplY3RzIiwiX2NhbWVyYSIsIl9kb21FbGVtZW50IiwiX3BsYW5lIiwiUGxhbmUiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiVmVjdG9yMiIsIl9vZmZzZXQiLCJWZWN0b3IzIiwiX2ludGVyc2VjdGlvbiIsIl93b3JsZFBvc2l0aW9uIiwiX2ludmVyc2VNYXRyaXgiLCJNYXRyaXg0IiwiX2ludGVyc2VjdGlvbnMiLCJfc2VsZWN0ZWQiLCJfaG92ZXJlZCIsInNjb3BlIiwiYWN0aXZhdGUiLCJvblBvaW50ZXJNb3ZlIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlckNhbmNlbCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsImRlYWN0aXZhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJkaXNwb3NlIiwiZ2V0T2JqZWN0cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb2ludGVyVHlwZSIsIm9uTW91c2VNb3ZlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsInNldEZyb21DYW1lcmEiLCJyYXkiLCJpbnRlcnNlY3RQbGFuZSIsImNvcHkiLCJzdWIiLCJhcHBseU1hdHJpeDQiLCJkaXNwYXRjaEV2ZW50IiwibGVuZ3RoIiwiaW50ZXJzZWN0T2JqZWN0cyIsInNldEZyb21Ob3JtYWxBbmRDb3BsYW5hclBvaW50IiwiZ2V0V29ybGREaXJlY3Rpb24iLCJub3JtYWwiLCJzZXRGcm9tTWF0cml4UG9zaXRpb24iLCJtYXRyaXhXb3JsZCIsIm9uTW91c2VEb3duIiwidHJhbnNmb3JtR3JvdXAiLCJwYXJlbnQiLCJpbnZlcnQiLCJvbk1vdXNlQ2FuY2VsIiwiY2hhbmdlZFRvdWNoZXMiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBTUEsTUFBTUEsVUFBVSxHQUFJQyxLQUFELElBQTZCO0FBQzlDLFFBQU07QUFBRUM7QUFBRixNQUFnQkQsS0FBdEI7QUFDQSxzQkFDRTtBQUFL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Q3VFLFNBQWIsR0FBeUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFlQyxxREFBZSxDQUFDSCxTQUEvQixDQUF6QjtBQUNBdkUsWUFBWSxDQUFDdUUsU0FBYixDQUF1QkksV0FBdkIsR0FBcUMzRSxZQUFyQzs7Ozs7Ozs7Ozs7O0FDM1RBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJob21lX2NvbnRhaW5lcl9fMTZZN1lcIixcblx0XCJsYWJlbFwiOiBcImhvbWVfbGFiZWxfXzFEOWRwXCJcbn07XG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUhvbWVMYXlvdXRQcm9wcyB7XHJcbiAgbGF5b3V0UmVmOiBSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbn1cclxuXHJcbmNvbnN0IEhvbWVMYXlvdXQgPSAocHJvcHM6IElIb21lTGF5b3V0UHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxheW91dFJlZiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiByZWY9e2xheW91dFJlZn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgSGFuZ2FyIERvb3IgTGluZSAtIERvIG5vdCBQdXQgQWlycGxhbmVzIFBhc3QgTGluZVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTGF5b3V0O1xyXG4iLCJleHBvcnQgY29uc3QgTEFZT1VUX1dJRFRIOiBudW1iZXIgPSAxMDI0O1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX0hFSUdIVDogbnVtYmVyID0gNzI4O1xyXG5leHBvcnQgY29uc3QgQk9YX1dJRFRIOiBudW1iZXIgPSAxMjA7XHJcbmV4cG9ydCBjb25zdCBCT1hfSEVJR0hUOiBudW1iZXIgPSAxMjA7XHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfREVGQVVMVF9QSVhFTF9SQVRJTzogbnVtYmVyID0gMTtcclxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkRfQ09MT1I6IG51bWJlciA9IDB4ZjBmMGYwO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFQUxfREFSS0VOX0NPTE9SOiBudW1iZXIgPSAweDAwNjk1YztcclxuZXhwb3J0IGNvbnN0IFJFRF9EQVJLRU5fQ09MT1I6IG51bWJlciA9IDB4YzYyODI4O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBMQVlPVVRfSEVJR0hULFxyXG4gIExBWU9VVF9XSURUSCxcclxuICBCT1hfV0lEVEgsXHJcbiAgQk9YX0hFSUdIVCxcclxuICBCQUNLR1JPVU5EX0NPTE9SLFxyXG4gIEVYUE9SVF9ERUZBVUxUX1BJWEVMX1JBVElPLFxyXG4gIFRFQUxfREFSS0VOX0NPTE9SLFxyXG4gIFJFRF9EQVJLRU5fQ09MT1IsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzIH0gZnJvbSBcIi4uL3NoYXJlZC9Db250cm9sL0RyYWdDb250cm9sc1wiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGF5b3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcclxuICBsZXQgY29udHJvbHMsIGdyb3VwO1xyXG4gIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVMYXlvdXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVDYW1lcmEoKSB7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgIDUwLFxyXG4gICAgICAxLFxyXG4gICAgICBMQVlPVVRfV0lEVEggLyBMQVlPVVRfSEVJR0hULFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKEJBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NTA1MDUwKSk7XHJcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYsIDEuNSk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwLCAyMDAwKTtcclxuICAgIGxpZ2h0LmFuZ2xlID0gTWF0aC5QSTtcclxuXHJcbiAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDQwMDA7XHJcbiAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IExBWU9VVF9XSURUSDtcclxuICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IExBWU9VVF9IRUlHSFQ7XHJcblxyXG4gICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVMYXlvdXRPYmplY3QoKSB7XHJcbiAgICBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQk9YX1dJRFRILCBCT1hfSEVJR0hUKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4MDA2OTVjIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDcwMDtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA3MDA7XHJcblxyXG4gICAgICBzY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgb2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplTGF5b3V0KCkge1xyXG4gICAgaW5pdGlhbGl6ZUNhbWVyYSgpO1xyXG4gICAgaW5pdGlhbGl6ZUxheW91dE9iamVjdCgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oRVhQT1JUX0RFRkFVTFRfUElYRUxfUkFUSU8pO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShMQVlPVVRfV0lEVEgsIExBWU9VVF9IRUlHSFQpO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XHJcbiAgICBsYXlvdXRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzID0gbmV3IERyYWdDb250cm9scyhbLi4ub2JqZWN0c10sIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCByZW5kZXIpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPdXRPZkJveCgpIHtcclxuICAgIHNjZW5lLmNoaWxkcmVuID0gc2NlbmUuY2hpbGRyZW4ubWFwKChvYmplY3REZXRhaWwpID0+IHtcclxuICAgICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgICBjb25zdCBpc091dE9mQm94OiBib29sZWFuID1cclxuICAgICAgICBwb3NpdGlvbi54ID4gNDA1IHx8XHJcbiAgICAgICAgcG9zaXRpb24ueCA8IC00MDUgfHxcclxuICAgICAgICBwb3NpdGlvbi55ID4gNDA1IHx8XHJcbiAgICAgICAgcG9zaXRpb24ueSA8IC00MDU7XHJcblxyXG4gICAgICBpZiAoaXNPdXRPZkJveCAmJiBvYmplY3REZXRhaWwubWF0ZXJpYWwpIHtcclxuICAgICAgICBvYmplY3REZXRhaWwubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoUkVEX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc091dE9mQm94ICYmIG9iamVjdERldGFpbC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG9iamVjdERldGFpbC5tYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcihURUFMX0RBUktFTl9DT0xPUik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9iamVjdERldGFpbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaGFuZGxlT3V0T2ZCb3goKTtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZSBsYXlvdXRSZWY9e2xheW91dFJlZn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IHtcclxuXHRFdmVudERpc3BhdGNoZXIsXHJcblx0TWF0cml4NCxcclxuXHRQbGFuZSxcclxuXHRSYXljYXN0ZXIsXHJcblx0VmVjdG9yMixcclxuXHRWZWN0b3IzXHJcbn0gZnJvbSAndGhyZWUnO1xyXG5cclxudmFyIERyYWdDb250cm9scyA9IGZ1bmN0aW9uICggX29iamVjdHMsIF9jYW1lcmEsIF9kb21FbGVtZW50ICkge1xyXG5cclxuXHR2YXIgX3BsYW5lID0gbmV3IFBsYW5lKCk7XHJcblx0dmFyIF9yYXljYXN0ZXIgPSBuZXcgUmF5Y2FzdGVyKCk7XHJcblxyXG5cdHZhciBfbW91c2UgPSBuZXcgVmVjdG9yMigpO1xyXG5cdHZhciBfb2Zmc2V0ID0gbmV3IFZlY3RvcjMoKTtcclxuXHR2YXIgX2ludGVyc2VjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcblx0dmFyIF93b3JsZFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuXHR2YXIgX2ludmVyc2VNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG5cdHZhciBfaW50ZXJzZWN0aW9ucyA9IFtdO1xyXG5cclxuXHR2YXIgX3NlbGVjdGVkID0gbnVsbCwgX2hvdmVyZWQgPSBudWxsO1xyXG5cclxuXHQvL1xyXG5cclxuXHR2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuXHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJDYW5jZWwsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxlYXZlJywgb25Qb2ludGVyQ2FuY2VsLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XHJcblxyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XHJcblx0XHRfZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyQ2FuY2VsLCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsZWF2ZScsIG9uUG9pbnRlckNhbmNlbCwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcclxuXHRcdF9kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xyXG5cdFx0X2RvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcclxuXHJcblx0XHRfZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnJztcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG5cclxuXHRcdGRlYWN0aXZhdGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRPYmplY3RzKCkge1xyXG5cclxuXHRcdHJldHVybiBfb2JqZWN0cztcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHN3aXRjaCAoIGV2ZW50LnBvaW50ZXJUeXBlICkge1xyXG5cclxuXHRcdFx0Y2FzZSAnbW91c2UnOlxyXG5cdFx0XHRjYXNlICdwZW4nOlxyXG5cdFx0XHRcdG9uTW91c2VNb3ZlKCBldmVudCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Ly8gVE9ETyB0b3VjaFxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcblxyXG5cdFx0dmFyIHJlY3QgPSBfZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRfbW91c2UueCA9ICggKCBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0ICkgLyByZWN0LndpZHRoICkgKiAyIC0gMTtcclxuXHRcdF9tb3VzZS55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wICkgLyByZWN0LmhlaWdodCApICogMiArIDE7XHJcblxyXG5cdFx0X3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBfbW91c2UsIF9jYW1lcmEgKTtcclxuXHJcblx0XHRpZiAoIF9zZWxlY3RlZCAmJiBzY29wZS5lbmFibGVkICkge1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9zZWxlY3RlZC5wb3NpdGlvbi5jb3B5KCBfaW50ZXJzZWN0aW9uLnN1YiggX29mZnNldCApLmFwcGx5TWF0cml4NCggX2ludmVyc2VNYXRyaXggKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZycsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0X2ludGVyc2VjdGlvbnMubGVuZ3RoID0gMDtcclxuXHJcblx0XHRfcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIF9tb3VzZSwgX2NhbWVyYSApO1xyXG5cdFx0X3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBfb2JqZWN0cywgdHJ1ZSwgX2ludGVyc2VjdGlvbnMgKTtcclxuXHJcblx0XHRpZiAoIF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHR2YXIgb2JqZWN0ID0gX2ludGVyc2VjdGlvbnNbIDAgXS5vYmplY3Q7XHJcblxyXG5cdFx0XHRfcGxhbmUuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQoIF9jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIF9wbGFuZS5ub3JtYWwgKSwgX3dvcmxkUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCBvYmplY3QubWF0cml4V29ybGQgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBfaG92ZXJlZCAhPT0gb2JqZWN0ICkge1xyXG5cclxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3Zlcm9uJywgb2JqZWN0OiBvYmplY3QgfSApO1xyXG5cclxuXHRcdFx0XHRfZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblx0XHRcdFx0X2hvdmVyZWQgPSBvYmplY3Q7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmICggX2hvdmVyZWQgIT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyb2ZmJywgb2JqZWN0OiBfaG92ZXJlZCB9ICk7XHJcblxyXG5cdFx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdhdXRvJztcclxuXHRcdFx0XHRfaG92ZXJlZCA9IG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c3dpdGNoICggZXZlbnQucG9pbnRlclR5cGUgKSB7XHJcblxyXG5cdFx0XHRjYXNlICdtb3VzZSc6XHJcblx0XHRcdGNhc2UgJ3Blbic6XHJcblx0XHRcdFx0b25Nb3VzZURvd24oIGV2ZW50ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLyBUT0RPIHRvdWNoXHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0X3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCBfbW91c2UsIF9jYW1lcmEgKTtcclxuXHRcdF9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggX29iamVjdHMsIHRydWUsIF9pbnRlcnNlY3Rpb25zICk7XHJcblxyXG5cdFx0aWYgKCBfaW50ZXJzZWN0aW9ucy5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFx0X3NlbGVjdGVkID0gKCBzY29wZS50cmFuc2Zvcm1Hcm91cCA9PT0gdHJ1ZSApID8gX29iamVjdHNbIDAgXSA6IF9pbnRlcnNlY3Rpb25zWyAwIF0ub2JqZWN0O1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9pbnZlcnNlTWF0cml4LmNvcHkoIF9zZWxlY3RlZC5wYXJlbnQubWF0cml4V29ybGQgKS5pbnZlcnQoKTtcclxuXHRcdFx0XHRfb2Zmc2V0LmNvcHkoIF9pbnRlcnNlY3Rpb24gKS5zdWIoIF93b3JsZFBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggX3NlbGVjdGVkLm1hdHJpeFdvcmxkICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWdzdGFydCcsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uUG9pbnRlckNhbmNlbCggZXZlbnQgKSB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzd2l0Y2ggKCBldmVudC5wb2ludGVyVHlwZSApIHtcclxuXHJcblx0XHRcdGNhc2UgJ21vdXNlJzpcclxuXHRcdFx0Y2FzZSAncGVuJzpcclxuXHRcdFx0XHRvbk1vdXNlQ2FuY2VsKCBldmVudCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Ly8gVE9ETyB0b3VjaFxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlQ2FuY2VsKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmICggX3NlbGVjdGVkICkge1xyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZHJhZ2VuZCcsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHRcdF9zZWxlY3RlZCA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9IF9ob3ZlcmVkID8gJ3BvaW50ZXInIDogJ2F1dG8nO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1sgMCBdO1xyXG5cclxuXHRcdHZhciByZWN0ID0gX2RvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0X21vdXNlLnggPSAoICggZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCApIC8gcmVjdC53aWR0aCApICogMiAtIDE7XHJcblx0XHRfbW91c2UueSA9IC0gKCAoIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCApIC8gcmVjdC5oZWlnaHQgKSAqIDIgKyAxO1xyXG5cclxuXHRcdF9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggX21vdXNlLCBfY2FtZXJhICk7XHJcblxyXG5cdFx0aWYgKCBfc2VsZWN0ZWQgJiYgc2NvcGUuZW5hYmxlZCApIHtcclxuXHJcblx0XHRcdGlmICggX3JheWNhc3Rlci5yYXkuaW50ZXJzZWN0UGxhbmUoIF9wbGFuZSwgX2ludGVyc2VjdGlvbiApICkge1xyXG5cclxuXHRcdFx0XHRfc2VsZWN0ZWQucG9zaXRpb24uY29weSggX2ludGVyc2VjdGlvbi5zdWIoIF9vZmZzZXQgKS5hcHBseU1hdHJpeDQoIF9pbnZlcnNlTWF0cml4ICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWcnLCBvYmplY3Q6IF9zZWxlY3RlZCB9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbIDAgXTtcclxuXHJcblx0XHR2YXIgcmVjdCA9IF9kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdF9tb3VzZS54ID0gKCAoIGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgKSAvIHJlY3Qud2lkdGggKSAqIDIgLSAxO1xyXG5cdFx0X21vdXNlLnkgPSAtICggKCBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgKSAvIHJlY3QuaGVpZ2h0ICkgKiAyICsgMTtcclxuXHJcblx0XHRfaW50ZXJzZWN0aW9ucy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdF9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggX21vdXNlLCBfY2FtZXJhICk7XHJcblx0XHQgX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBfb2JqZWN0cywgdHJ1ZSwgX2ludGVyc2VjdGlvbnMgKTtcclxuXHJcblx0XHRpZiAoIF9pbnRlcnNlY3Rpb25zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRfc2VsZWN0ZWQgPSAoIHNjb3BlLnRyYW5zZm9ybUdyb3VwID09PSB0cnVlICkgPyBfb2JqZWN0c1sgMCBdIDogX2ludGVyc2VjdGlvbnNbIDAgXS5vYmplY3Q7XHJcblxyXG5cdFx0XHRfcGxhbmUuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQoIF9jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIF9wbGFuZS5ub3JtYWwgKSwgX3dvcmxkUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCBfc2VsZWN0ZWQubWF0cml4V29ybGQgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBfcmF5Y2FzdGVyLnJheS5pbnRlcnNlY3RQbGFuZSggX3BsYW5lLCBfaW50ZXJzZWN0aW9uICkgKSB7XHJcblxyXG5cdFx0XHRcdF9pbnZlcnNlTWF0cml4LmNvcHkoIF9zZWxlY3RlZC5wYXJlbnQubWF0cml4V29ybGQgKS5pbnZlcnQoKTtcclxuXHRcdFx0XHRfb2Zmc2V0LmNvcHkoIF9pbnRlcnNlY3Rpb24gKS5zdWIoIF93b3JsZFBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggX3NlbGVjdGVkLm1hdHJpeFdvcmxkICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF9kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2RyYWdzdGFydCcsIG9iamVjdDogX3NlbGVjdGVkIH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKCBfc2VsZWN0ZWQgKSB7XHJcblxyXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkcmFnZW5kJywgb2JqZWN0OiBfc2VsZWN0ZWQgfSApO1xyXG5cclxuXHRcdFx0X3NlbGVjdGVkID0gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0X2RvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2F1dG8nO1xyXG5cclxuXHR9XHJcblxyXG5cdGFjdGl2YXRlKCk7XHJcblxyXG5cdC8vIEFQSVxyXG5cclxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdHRoaXMudHJhbnNmb3JtR3JvdXAgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xyXG5cdHRoaXMuZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XHJcblx0dGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcclxuXHR0aGlzLmdldE9iamVjdHMgPSBnZXRPYmplY3RzO1xyXG5cclxufTtcclxuXHJcbkRyYWdDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XHJcbkRyYWdDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEcmFnQ29udHJvbHM7XHJcblxyXG5leHBvcnQgeyBEcmFnQ29udHJvbHMgfTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=