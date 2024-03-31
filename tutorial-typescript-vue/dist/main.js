/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub */ \"./src/sub.ts\");\n\n\nnew Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n    el: \"#app\",\n    template: \"<div class=\\\"app\\\">\\n        <h1>Hello Vue.js!</h1>\\n        <my-component message=\\\"My Counter for TypeScript\\\"></my-component>\\n      </div>\",\n    components: {\n        \"my-component\": _sub__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    },\n});\n\n\n//# sourceURL=webpack://tutorial-typescript-vue/./src/main.ts?");

/***/ }),

/***/ "./src/sub.ts":
/*!********************!*\
  !*** ./src/sub.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ \"../node_modules/vue-class-component/dist/vue-class-component.esm.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nvar MyComponent = /** @class */ (function (_super) {\n    __extends(MyComponent, _super);\n    function MyComponent() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.count = 0;\n        return _this;\n    }\n    MyComponent.prototype.onClick = function () {\n        console.log(\"クリックされました\");\n        this.count = this.count + 1;\n    };\n    MyComponent = __decorate([\n        (0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            template: \" <div>\\n    <h2>{{ message }}</h2>\\n    <p>{{ count }}</p>\\n    <p>\\n      <button @click=\\\"onClick\\\">Add +1</button>\\n    </p>\\n  </div>\",\n            props: [\"message\"],\n        })\n    ], MyComponent);\n    return MyComponent;\n}(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\n\n\n//# sourceURL=webpack://tutorial-typescript-vue/./src/sub.ts?");

/***/ }),

/***/ "../node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!***************************************************************************!*\
  !*** ../node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDecorator: function() { return /* binding */ createDecorator; },\n/* harmony export */   mixins: function() { return /* binding */ mixins; }\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/**\n  * vue-class-component v7.2.6\n  * (c) 2015-present Evan You\n  * @license MIT\n  */\n\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n    return arr2;\n  }\n}\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\n// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills\n// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.\n// Without this check consumers will encounter hard to track down runtime errors.\nfunction reflectionIsSupported() {\n  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;\n}\nfunction copyReflectionMetadata(to, from) {\n  forwardMetadata(to, from);\n  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {\n    forwardMetadata(to.prototype, from.prototype, key);\n  });\n  Object.getOwnPropertyNames(from).forEach(function (key) {\n    forwardMetadata(to, from, key);\n  });\n}\n\nfunction forwardMetadata(to, from, propertyKey) {\n  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);\n  metaKeys.forEach(function (metaKey) {\n    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);\n\n    if (propertyKey) {\n      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);\n    } else {\n      Reflect.defineMetadata(metaKey, metadata, to);\n    }\n  });\n}\n\nvar fakeArray = {\n  __proto__: []\n};\nvar hasProto = fakeArray instanceof Array;\nfunction createDecorator(factory) {\n  return function (target, key, index) {\n    var Ctor = typeof target === 'function' ? target : target.constructor;\n\n    if (!Ctor.__decorators__) {\n      Ctor.__decorators__ = [];\n    }\n\n    if (typeof index !== 'number') {\n      index = undefined;\n    }\n\n    Ctor.__decorators__.push(function (options) {\n      return factory(options, key, index);\n    });\n  };\n}\nfunction mixins() {\n  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {\n    Ctors[_key] = arguments[_key];\n  }\n\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n    mixins: Ctors\n  });\n}\nfunction isPrimitive(value) {\n  var type = _typeof(value);\n\n  return value == null || type !== 'object' && type !== 'function';\n}\nfunction warn(message) {\n  if (typeof console !== 'undefined') {\n    console.warn('[vue-class-component] ' + message);\n  }\n}\n\nfunction collectDataFromConstructor(vm, Component) {\n  // override _init to prevent to init as Vue instance\n  var originalInit = Component.prototype._init;\n\n  Component.prototype._init = function () {\n    var _this = this;\n\n    // proxy to actual vm\n    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)\n\n    if (vm.$options.props) {\n      for (var key in vm.$options.props) {\n        if (!vm.hasOwnProperty(key)) {\n          keys.push(key);\n        }\n      }\n    }\n\n    keys.forEach(function (key) {\n      Object.defineProperty(_this, key, {\n        get: function get() {\n          return vm[key];\n        },\n        set: function set(value) {\n          vm[key] = value;\n        },\n        configurable: true\n      });\n    });\n  }; // should be acquired class property values\n\n\n  var data = new Component(); // restore original _init to avoid memory leak (#209)\n\n  Component.prototype._init = originalInit; // create plain data object\n\n  var plainData = {};\n  Object.keys(data).forEach(function (key) {\n    if (data[key] !== undefined) {\n      plainData[key] = data[key];\n    }\n  });\n\n  if (true) {\n    if (!(Component.prototype instanceof Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) && Object.keys(plainData).length > 0) {\n      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');\n    }\n  }\n\n  return plainData;\n}\n\nvar $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6\n];\nfunction componentFactory(Component) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  options.name = options.name || Component._componentTag || Component.name; // prototype props.\n\n  var proto = Component.prototype;\n  Object.getOwnPropertyNames(proto).forEach(function (key) {\n    if (key === 'constructor') {\n      return;\n    } // hooks\n\n\n    if ($internalHooks.indexOf(key) > -1) {\n      options[key] = proto[key];\n      return;\n    }\n\n    var descriptor = Object.getOwnPropertyDescriptor(proto, key);\n\n    if (descriptor.value !== void 0) {\n      // methods\n      if (typeof descriptor.value === 'function') {\n        (options.methods || (options.methods = {}))[key] = descriptor.value;\n      } else {\n        // typescript decorated data\n        (options.mixins || (options.mixins = [])).push({\n          data: function data() {\n            return _defineProperty({}, key, descriptor.value);\n          }\n        });\n      }\n    } else if (descriptor.get || descriptor.set) {\n      // computed properties\n      (options.computed || (options.computed = {}))[key] = {\n        get: descriptor.get,\n        set: descriptor.set\n      };\n    }\n  });\n  (options.mixins || (options.mixins = [])).push({\n    data: function data() {\n      return collectDataFromConstructor(this, Component);\n    }\n  }); // decorate options\n\n  var decorators = Component.__decorators__;\n\n  if (decorators) {\n    decorators.forEach(function (fn) {\n      return fn(options);\n    });\n    delete Component.__decorators__;\n  } // find super\n\n\n  var superProto = Object.getPrototypeOf(Component.prototype);\n  var Super = superProto instanceof Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) ? superProto.constructor : Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n  var Extended = Super.extend(options);\n  forwardStaticMembers(Extended, Component, Super);\n\n  if (reflectionIsSupported()) {\n    copyReflectionMetadata(Extended, Component);\n  }\n\n  return Extended;\n}\nvar reservedPropertyNames = [// Unique id\n'cid', // Super Vue constructor\n'super', // Component options that will be used by the component\n'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets\n'component', 'directive', 'filter'];\nvar shouldIgnore = {\n  prototype: true,\n  arguments: true,\n  callee: true,\n  caller: true\n};\n\nfunction forwardStaticMembers(Extended, Original, Super) {\n  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable\n  Object.getOwnPropertyNames(Original).forEach(function (key) {\n    // Skip the properties that should not be overwritten\n    if (shouldIgnore[key]) {\n      return;\n    } // Some browsers does not allow reconfigure built-in properties\n\n\n    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);\n\n    if (extendedDescriptor && !extendedDescriptor.configurable) {\n      return;\n    }\n\n    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),\n    // the sub class properties may be inherited properties from the super class in TypeScript.\n    // We need to exclude such properties to prevent to overwrite\n    // the component options object which stored on the extended constructor (See #192).\n    // If the value is a referenced value (object or function),\n    // we can check equality of them and exclude it if they have the same reference.\n    // If it is a primitive value, it will be forwarded for safety.\n\n    if (!hasProto) {\n      // Only `cid` is explicitly exluded from property forwarding\n      // because we cannot detect whether it is a inherited property or not\n      // on the no `__proto__` environment even though the property is reserved.\n      if (key === 'cid') {\n        return;\n      }\n\n      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);\n\n      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {\n        return;\n      }\n    } // Warn if the users manually declare reserved properties\n\n\n    if ( true && reservedPropertyNames.indexOf(key) >= 0) {\n      warn(\"Static property name '\".concat(key, \"' declared on class '\").concat(Original.name, \"' \") + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');\n    }\n\n    Object.defineProperty(Extended, key, descriptor);\n  });\n}\n\nfunction Component(options) {\n  if (typeof options === 'function') {\n    return componentFactory(options);\n  }\n\n  return function (Component) {\n    return componentFactory(Component, options);\n  };\n}\n\nComponent.registerHooks = function registerHooks(keys) {\n  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n\n\n//# sourceURL=webpack://tutorial-typescript-vue/../node_modules/vue-class-component/dist/vue-class-component.esm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;