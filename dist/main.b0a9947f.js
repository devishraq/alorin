// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../dist/src/core/dom/element/props/props-handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "propsHandler", {
  enumerable: !0,
  get: function get() {
    return propsHandler;
  }
});
var _ = require("."),
  propsHandler = function propsHandler(elementProps, element) {
    elementProps && (0, _.attributeHandler)(elementProps, element);
  };
},{".":"../dist/src/core/dom/element/props/index.js"}],"../dist/src/utils/checkers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStr = exports.isSVG = exports.isObj = exports.isNode = exports.isNUB = exports.isFunc = exports.isArr = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isArr = exports.isArr = function isArr(a) {
  return Array.isArray(a);
};
var isNUB = exports.isNUB = function isNUB(h) {
  return null == h || !1 === h || !0 === h;
};
var isNode = exports.isNode = function isNode(n) {
  return n instanceof Node;
};
var isSVG = exports.isSVG = function isSVG(s) {
  return s instanceof SVGElement;
};
var isFunc = exports.isFunc = function isFunc(f) {
  return "function" == typeof f;
};
var isStr = exports.isStr = function isStr(s) {
  return "string" == typeof s;
};
var isObj = exports.isObj = function isObj(n) {
  return "object" == _typeof(n);
};
},{}],"../dist/src/core/dom/element/props/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "booleanAttributeBits", {
  enumerable: !0,
  get: function get() {
    return booleanAttributeBits;
  }
});
var booleanAttributeBits = {
  allowfullscreen: 1,
  async: 2,
  autofocus: 4,
  autoplay: 8,
  checked: 16,
  controls: 32,
  default: 64,
  defer: 128,
  disabled: 256,
  formnovalidate: 512,
  hidden: 1024,
  ismap: 2048,
  itemscope: 4096,
  loop: 8192,
  multiple: 16384,
  muted: 32768,
  nomodule: 65536,
  novalidate: 131072,
  open: 262144,
  playsinline: 524288,
  readonly: 1048576,
  required: 2097152,
  reversed: 4194304,
  selected: 8388608,
  truespeed: 16777216
};
},{}],"../dist/src/utils/creators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newTextNode = exports.newElement = exports.newDFrag = exports.childAppender = void 0;
var d = document;
var newDFrag = exports.newDFrag = function newDFrag() {
  return d.createDocumentFragment();
};
var newTextNode = exports.newTextNode = function newTextNode(s) {
  return d.createTextNode(s);
};
var newElement = exports.newElement = function newElement(t) {
  return d.createElement(t);
};
var childAppender = exports.childAppender = function childAppender(p, c) {
  return p.appendChild(c);
};
},{}],"../dist/src/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "childAppender", {
  enumerable: true,
  get: function () {
    return _creators.childAppender;
  }
});
Object.defineProperty(exports, "isArr", {
  enumerable: true,
  get: function () {
    return _checkers.isArr;
  }
});
Object.defineProperty(exports, "isFunc", {
  enumerable: true,
  get: function () {
    return _checkers.isFunc;
  }
});
Object.defineProperty(exports, "isNUB", {
  enumerable: true,
  get: function () {
    return _checkers.isNUB;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function () {
    return _checkers.isNode;
  }
});
Object.defineProperty(exports, "isObj", {
  enumerable: true,
  get: function () {
    return _checkers.isObj;
  }
});
Object.defineProperty(exports, "isStr", {
  enumerable: true,
  get: function () {
    return _checkers.isStr;
  }
});
Object.defineProperty(exports, "newDFrag", {
  enumerable: true,
  get: function () {
    return _creators.newDFrag;
  }
});
Object.defineProperty(exports, "newElement", {
  enumerable: true,
  get: function () {
    return _creators.newElement;
  }
});
Object.defineProperty(exports, "newTextNode", {
  enumerable: true,
  get: function () {
    return _creators.newTextNode;
  }
});
var _checkers = require("./checkers");
var _creators = require("./creators");
},{"./checkers":"../dist/src/utils/checkers.js","./creators":"../dist/src/utils/creators.js"}],"../dist/src/utils/loopers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Array.prototype.For = function (callback) {
  for (var i = 0, l = this.length; i < l; i++) callback(this[i], i, this);
};
var _default = exports.default = {};
},{}],"../dist/src/core/dom/event/create-event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = void 0;
var _utils = require("../../../utils");
require("../../../utils/loopers");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var createEvent = exports.createEvent = function createEvent(props, element) {
  var isNativeEvent = function isNativeEvent(key) {
      return "on".concat(key) in HTMLElement.prototype;
    },
    adv = function adv(eN, cB) {
      return element.addEventListener(eN, cB);
    };
  Object.entries(props).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];
    return key.startsWith("on");
  }).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      cB = _ref4[1];
    var eN = key.slice(2).toLowerCase();
    isNativeEvent(eN) && ((0, _utils.isArr)(cB) ? cB.For(function (callback) {
      return adv(eN, callback);
    }) : adv(eN, cB));
  });
};
},{"../../../utils":"../dist/src/utils/index.js","../../../utils/loopers":"../dist/src/utils/loopers.js"}],"../dist/src/core/dom/event/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createEvent", {
  enumerable: true,
  get: function () {
    return _createEvent.createEvent;
  }
});
var _createEvent = require("./create-event");
},{"./create-event":"../dist/src/core/dom/event/create-event.js"}],"../dist/src/core/dom/element/props/attribute-handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "attributeHandler", {
  enumerable: !0,
  get: function get() {
    return attributeHandler;
  }
});
var _checkers = require("../../../../utils/checkers"),
  _ = require("./"),
  _constants = require("./constants"),
  _event = require("../../event"),
  attributeHandler = function attributeHandler(elementProps, element) {
    var isBooleanAttribute = function isBooleanAttribute(attr) {
        return !!_constants.booleanAttributeBits[attr];
      },
      setAttr = function setAttr(aT, vL) {
        return element.setAttribute(aT, vL);
      },
      rmAttr = function rmAttr(aT) {
        return element.removeAttribute(aT);
      };
    for (var attribute in elementProps) switch (!0) {
      case (0, _checkers.isNUB)(attribute) || "children" === attribute:
        break;
      case attribute.startsWith("on"):
        (0, _event.createEvent)(elementProps, element);
        break;
      case "style" === attribute:
        (0, _.styleHandler)(elementProps, element);
        break;
      case "className" === attribute:
        setAttr("class", elementProps[attribute]);
        break;
      case isBooleanAttribute(attribute):
        elementProps[attribute] ? setAttr(attribute, elementProps[attribute]) : rmAttr(attribute);
        break;
      default:
        setAttr(attribute, elementProps[attribute]);
    }
  };
},{"../../../../utils/checkers":"../dist/src/utils/checkers.js","./":"../dist/src/core/dom/element/props/index.js","./constants":"../dist/src/core/dom/element/props/constants.js","../../event":"../dist/src/core/dom/event/index.js"}],"../dist/src/core/dom/element/props/style-handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "styleHandler", {
  enumerable: !0,
  get: function get() {
    return styleHandler;
  }
});
var _checkers = require("../../../../utils/checkers"),
  styleHandler = function styleHandler(elementProps, element) {
    var elemStyle = element.style,
      elemePropStyle = elementProps.style;
    (0, _checkers.isStr)(elemePropStyle) ? elemStyle.cssText = elemePropStyle : Object.assign(elemStyle, elemePropStyle), console.log(elemStyle, elemePropStyle);
  };
},{"../../../../utils/checkers":"../dist/src/utils/checkers.js"}],"../dist/src/core/dom/element/props/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), function (target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: !0,
    get: all[name]
  });
}(exports, {
  attributeHandler: function attributeHandler() {
    return _attributehandler.attributeHandler;
  },
  propsHandler: function propsHandler() {
    return _propshandler.propsHandler;
  },
  styleHandler: function styleHandler() {
    return _stylehandler.styleHandler;
  }
});
var _propshandler = require("./props-handler"),
  _attributehandler = require("./attribute-handler"),
  _stylehandler = require("./style-handler");
},{"./props-handler":"../dist/src/core/dom/element/props/props-handler.js","./attribute-handler":"../dist/src/core/dom/element/props/attribute-handler.js","./style-handler":"../dist/src/core/dom/element/props/style-handler.js"}],"../dist/src/core/reactivity/signal/signal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComputed = createComputed;
exports.createEffect = createEffect;
exports.createSignal = createSignal;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var currentEffect = null;
function createSignal(initialValue) {
  var value = initialValue,
    _deps = new Set(),
    notify = function notify() {
      var _iterator = _createForOfIteratorHelper(_deps),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dep = _step.value;
          dep();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
  function get() {
    return currentEffect && _deps.add(currentEffect), value;
  }
  return get.isSignal = !0, [get, function (newValue) {
    value !== newValue && (value = newValue, notify());
  }];
}
function createEffect(fn) {
  var effect = function effect() {
    currentEffect = effect, fn(), currentEffect = null;
  };
  effect();
}
function createComputed(fn) {
  return "fd";
}
},{}],"../dist/src/core/reactivity/signal/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createComputed", {
  enumerable: true,
  get: function () {
    return _signal.createComputed;
  }
});
Object.defineProperty(exports, "createEffect", {
  enumerable: true,
  get: function () {
    return _signal.createEffect;
  }
});
Object.defineProperty(exports, "createSignal", {
  enumerable: true,
  get: function () {
    return _signal.createSignal;
  }
});
var _signal = require("./signal");
},{"./signal":"../dist/src/core/reactivity/signal/signal.js"}],"../dist/src/core/dom/signal/signal-handler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signalHandler = void 0;
var _utils = require("../../../utils");
var _signal = require("../../reactivity/signal");
var signalHandler = exports.signalHandler = function signalHandler(node, fragment) {
  var textNode = (0, _utils.newTextNode)("");
  (0, _signal.createEffect)(function () {
    var value = node();
    textNode.textContent = String(value);
  }), fragment.appendChild(textNode);
};
},{"../../../utils":"../dist/src/utils/index.js","../../reactivity/signal":"../dist/src/core/reactivity/signal/index.js"}],"../dist/src/core/dom/signal/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "signalHandler", {
  enumerable: true,
  get: function () {
    return _signalHandler.signalHandler;
  }
});
var _signalHandler = require("./signal-handler");
},{"./signal-handler":"../dist/src/core/dom/signal/signal-handler.js"}],"../dist/src/core/dom/element/childrens/children-processor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "processChildrens", {
  enumerable: !0,
  get: function get() {
    return processChildrens;
  }
});
var _signal = require("../../signal"),
  _ = require("./"),
  _utils = require("../../../../utils"),
  processChildrens = function processChildrens(childrens, fragment) {
    childrens.forEach(function (node) {
      var childToAppend = null;
      switch (!0) {
        case (0, _utils.isNUB)(node):
          return;
        case (0, _utils.isArr)(node):
          (0, _.processNestedChildren)(node, fragment);
          break;
        case (0, _utils.isNode)(node):
          childToAppend = node;
          break;
        case (0, _utils.isFunc)(node):
          childToAppend = node.isSignal ? (0, _signal.signalHandler)(node, fragment) : node(), console.log("me");
          break;
        default:
          childToAppend = (0, _utils.newTextNode)(node);
      }
      childToAppend && (0, _utils.childAppender)(fragment, childToAppend);
    });
  };
},{"../../signal":"../dist/src/core/dom/signal/index.js","./":"../dist/src/core/dom/element/childrens/index.js","../../../../utils":"../dist/src/utils/index.js"}],"../dist/src/core/dom/element/childrens/nested-children-processor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "processNestedChildren", {
  enumerable: !0,
  get: function get() {
    return processNestedChildren;
  }
});
var _utils = require("../../../../utils");
require("../../../../utils/loopers");
var processNestedChildren = function processNestedChildren(child, fragment) {
  child.forEach(function (node) {
    var childToAppend = null;
    !(0, _utils.isNUB)(node) && ((0, _utils.isNode)(node) && (childToAppend = node), childToAppend && (0, _utils.childAppender)(fragment, childToAppend));
  });
};
},{"../../../../utils":"../dist/src/utils/index.js","../../../../utils/loopers":"../dist/src/utils/loopers.js"}],"../dist/src/core/dom/element/childrens/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "processChildrens", {
  enumerable: true,
  get: function () {
    return _childrenProcessor.processChildrens;
  }
});
Object.defineProperty(exports, "processNestedChildren", {
  enumerable: true,
  get: function () {
    return _nestedChildrenProcessor.processNestedChildren;
  }
});
var _childrenProcessor = require("./children-processor");
var _nestedChildrenProcessor = require("./nested-children-processor");
},{"./children-processor":"../dist/src/core/dom/element/childrens/children-processor.js","./nested-children-processor":"../dist/src/core/dom/element/childrens/nested-children-processor.js"}],"../dist/src/core/dom/element/create-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "createElement", {
  enumerable: !0,
  get: function get() {
    return createElement;
  }
});
var _props = require("./props"),
  _childrens = require("./childrens"),
  _utils = require("../../../utils"),
  createElement = function createElement(tag, props) {
    var _props1 = props || {},
      fragment = (0, _utils.newDFrag)(),
      element;
    for (var _len = arguments.length, childrens = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childrens[_key - 2] = arguments[_key];
    }
    return (0, _utils.isFunc)(tag) ? element = tag.apply(void 0, [_props1].concat(childrens)) : (element = (0, _utils.newElement)(tag), (0, _props.propsHandler)(_props1, element)), (0, _childrens.processChildrens)(childrens, fragment), element && (0, _utils.childAppender)(element, fragment), element;
  };
},{"./props":"../dist/src/core/dom/element/props/index.js","./childrens":"../dist/src/core/dom/element/childrens/index.js","../../../utils":"../dist/src/utils/index.js"}],"../dist/src/core/dom/wrapper/wrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = void 0;
var _utils = require("../../../utils");
var wrapper = exports.wrapper = function wrapper() {
  return (0, _utils.newDFrag)();
};
},{"../../../utils":"../dist/src/utils/index.js"}],"../dist/src/core/dom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _createElement.createElement;
  }
});
Object.defineProperty(exports, "createEvent", {
  enumerable: true,
  get: function () {
    return _createEvent.createEvent;
  }
});
Object.defineProperty(exports, "wrapper", {
  enumerable: true,
  get: function () {
    return _wrapper.wrapper;
  }
});
var _createElement = require("./element/create-element");
var _wrapper = require("./wrapper/wrapper");
var _createEvent = require("./event/create-event");
},{"./element/create-element":"../dist/src/core/dom/element/create-element.js","./wrapper/wrapper":"../dist/src/core/dom/wrapper/wrapper.js","./event/create-event":"../dist/src/core/dom/event/create-event.js"}],"../dist/src/core/render/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;
var render = exports.render = function render(element) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  for (; container.firstChild;) container.removeChild(container.firstChild);
  container.appendChild(element);
};
},{}],"../dist/src/core/render/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _render.render;
  }
});
var _render = require("./render");
},{"./render":"../dist/src/core/render/render.js"}],"../dist/src/core/dynamic-style/insert-rule.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertRule = void 0;
var _utils = require("../../utils");
var insertRule = exports.insertRule = function insertRule(className, styles) {
  var styleSheet = document.styleSheets[0];
  if (!styleSheet) {
    var style = (0, _utils.newElement)("style");
    (0, _utils.childAppender)(document.head, style), styleSheet = style.sheet;
  }
  var formattedStyles = styles.replace(/\n/g, "");
  styleSheet.insertRule(".".concat(className, " { ").concat(formattedStyles, " }"), styleSheet.cssRules.length);
};
},{"../../utils":"../dist/src/utils/index.js"}],"../dist/src/utils/random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ranNum = ranNum;
function ranNum(length) {
  if (length <= 0) return 0;
  var timestamp = Date.now().toString(),
    timestampLength = timestamp.length;
  if (length <= timestampLength) return parseInt(timestamp.slice(0, length), 10);
  var randomPartLength = length - timestampLength,
    digits = Array(randomPartLength);
  for (var i = 0; i < randomPartLength; i++) digits[i] = Math.floor(10 * Math.random());
  var result = timestamp + digits.join("");
  return length > 16 ? result.slice(0, length) : parseInt(result.slice(0, length), 10);
}
},{}],"../dist/src/core/dynamic-style/create-style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyle = void 0;
var _dom = require("../dom");
var _insertRule = require("./insert-rule");
var _random = require("../../utils/random");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var createStyle = exports.createStyle = function createStyle(tag) {
  return function (styles) {
    var cN = "$__".concat(tag, "__").concat(_random.ranNum);
    return (0, _insertRule.insertRule)(cN, styles.join("")), function (props) {
      return (0, _dom.createElement)(tag, _objectSpread(_objectSpread({}, props), {}, {
        class: cN
      }));
    };
  };
};
},{"../dom":"../dist/src/core/dom/index.js","./insert-rule":"../dist/src/core/dynamic-style/insert-rule.js","../../utils/random":"../dist/src/utils/random.js"}],"../dist/src/core/dynamic-style/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createStyle", {
  enumerable: true,
  get: function () {
    return _createStyle.createStyle;
  }
});
var _createStyle = require("./create-style");
},{"./create-style":"../dist/src/core/dynamic-style/create-style.js"}],"../dist/src/core/reactivity/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createComputed", {
  enumerable: true,
  get: function () {
    return _signal.createComputed;
  }
});
Object.defineProperty(exports, "createEffect", {
  enumerable: true,
  get: function () {
    return _signal.createEffect;
  }
});
Object.defineProperty(exports, "createSignal", {
  enumerable: true,
  get: function () {
    return _signal.createSignal;
  }
});
var _signal = require("./signal");
},{"./signal":"../dist/src/core/reactivity/signal/index.js"}],"../dist/src/core/widget/Display/Display.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Display = void 0;
var _ = require("../..");
var Display = exports.Display = function Display(props) {
  var _props$condition = props.condition,
    condition = _props$condition === void 0 ? !0 : _props$condition,
    _props$delay = props.delay,
    delay = _props$delay === void 0 ? 0 : _props$delay,
    _props$children = props.children,
    children = _props$children === void 0 ? null : _props$children,
    _props$fallback = props.fallback,
    fallback = _props$fallback === void 0 ? null : _props$fallback,
    _props$onShow = props.onShow,
    onShow = _props$onShow === void 0 ? function () {} : _props$onShow,
    _props$onHide = props.onHide,
    onHide = _props$onHide === void 0 ? function () {} : _props$onHide;
  if (condition && delay) setTimeout(function () {
    return onShow(), _.alorin.createElement(_.alorin.wrapper, null, children);
  }, delay);else {
    if (condition && !delay) return onShow(), _.alorin.createElement(_.alorin.wrapper, null, children);
    onHide();
  }
  return fallback;
};
},{"../..":"../dist/src/core/index.js"}],"../dist/src/core/widget/Display/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Display", {
  enumerable: true,
  get: function () {
    return _Display.Display;
  }
});
var _Display = require("./Display");
},{"./Display":"../dist/src/core/widget/Display/Display.js"}],"../dist/src/core/widget/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Display", {
  enumerable: true,
  get: function () {
    return _index.Display;
  }
});
var _index = require("./Display/index");
},{"./Display/index":"../dist/src/core/widget/Display/index.js"}],"../dist/src/core/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Display", {
  enumerable: true,
  get: function () {
    return _widget.Display;
  }
});
exports.alorin = void 0;
Object.defineProperty(exports, "createEffect", {
  enumerable: true,
  get: function () {
    return _reactivity.createEffect;
  }
});
Object.defineProperty(exports, "createSignal", {
  enumerable: true,
  get: function () {
    return _reactivity.createSignal;
  }
});
Object.defineProperty(exports, "createStyle", {
  enumerable: true,
  get: function () {
    return _dynamicStyle.createStyle;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _render.render;
  }
});
var _alorin = _interopRequireWildcard(require("./dom"));
exports.alorin = _alorin;
var _render = require("./render");
var _dynamicStyle = require("./dynamic-style");
var _reactivity = require("./reactivity");
var _widget = require("./widget");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
},{"./dom":"../dist/src/core/dom/index.js","./render":"../dist/src/core/render/index.js","./dynamic-style":"../dist/src/core/dynamic-style/index.js","./reactivity":"../dist/src/core/reactivity/index.js","./widget":"../dist/src/core/widget/index.js"}],"../dist/src/test/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), Object.defineProperty(exports, "default", {
  enumerable: !0,
  get: function get() {
    return _default;
  }
});
var _core = require("../core"),
  _default = function _default() {
    return _core.alorin.createElement("div", null, _core.alorin.createElement("p", null, "Helldjfkvmkdjfvo!"));
  };
},{"../core":"../dist/src/core/index.js"}],"../dist/src/main.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./test/App"));
var _core = require("./core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _core.render)(_core.alorin.createElement(_App.default, null));
},{"./test/App":"../dist/src/test/App.js","./core":"../dist/src/core/index.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52590" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../dist/src/main.js"], null)
//# sourceMappingURL=/main.b0a9947f.js.map