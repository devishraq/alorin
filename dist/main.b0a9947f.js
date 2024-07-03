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
})({"../dist/src/core/reactivity/createComputation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentComputation = exports.createComputation = void 0;
var currentComputation = exports.currentComputation = null,
  createComputation = exports.createComputation = function createComputation(computation) {
    var executeComputation = function executeComputation() {
      exports.currentComputation = currentComputation = executeComputation, computation(), exports.currentComputation = currentComputation = null;
    };
    executeComputation();
  };
},{}],"../dist/src/core/reactivity/createSignal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createComputation = require("./createComputation.js");
var _default = exports.default = function _default(initialValue) {
  var value = initialValue,
    subscribers = new Set(),
    notifySubscribers = function notifySubscribers() {
      subscribers.forEach(function (subscriber) {
        return subscriber();
      });
    },
    getValue = function getValue() {
      return _createComputation.currentComputation && subscribers.add(_createComputation.currentComputation), value;
    };
  return getValue.isSignal = !0, [getValue, function (newValue) {
    value !== newValue && (value = "function" == typeof newValue ? newValue(value) : newValue, notifySubscribers());
  }];
};
},{"./createComputation.js":"../dist/src/core/reactivity/createComputation.js"}],"../dist/src/core/reactivity/createEffect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createComputation = require("./createComputation");
var _default = exports.default = function _default(effect) {
  (0, _createComputation.createComputation)(effect);
};
},{"./createComputation":"../dist/src/core/reactivity/createComputation.js"}],"../dist/src/core/reactivity/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createEffect", {
  enumerable: true,
  get: function () {
    return _createEffect.default;
  }
});
Object.defineProperty(exports, "createSignal", {
  enumerable: true,
  get: function () {
    return _createSignal.default;
  }
});
var _createSignal = _interopRequireDefault(require("./createSignal"));
var _createEffect = _interopRequireDefault(require("./createEffect"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./createSignal":"../dist/src/core/reactivity/createSignal.js","./createEffect":"../dist/src/core/reactivity/createEffect.js"}],"../dist/src/core/dom/createElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = void 0;
var _dom = require("../dom");
var _reactivity = require("../reactivity");
var element, childNode;
var fragment = document.createDocumentFragment();
var createElement = exports.createElement = function createElement(tag, props) {
  var _props = props || {};
  for (var _len = arguments.length, childrens = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childrens[_key - 2] = arguments[_key];
  }
  return "function" == typeof tag ? element = tag.apply(void 0, [_props].concat(childrens)) : (element = document.createElement(tag), propsHandler(_props)), processChildrens(childrens), element.appendChild(fragment), element;
};
var propsHandler = function propsHandler(elementProps1) {
    null != elementProps1 && propsAttributeHandler(elementProps1), propsEventsHandler(elementProps1);
  },
  propsAttributeHandler = function propsAttributeHandler(elementProps1) {
    for (var attribute in elementProps1) "style" == attribute ? propsStyleHandler(elementProps1) : "children" === attribute || element.setAttribute(attribute, elementProps1[attribute]);
  },
  propsStyleHandler = function propsStyleHandler(elementProps1) {
    "string" == typeof elementProps1.style ? element.style.cssText = elementProps1.style : Object.assign(element.style, elementProps1.style);
  },
  propsEventsHandler = function propsEventsHandler(elementProps1) {
    (0, _dom.createEvent)(elementProps1, element);
  },
  processChildrens = function processChildrens(childrens) {
    childrens.forEach(function (node) {
      if (Array.isArray(node)) processChildOfChildrens(node);else if (null == node) return;else if (node instanceof Node) fragment.appendChild(node);else if ("function" == typeof node) node.isSignal ? signalHandler(node) : fragment.appendChild(node(elementProps));else {
        if (void 0 === node) return;
        childNode = document.createTextNode(node), fragment.appendChild(childNode);
      }
    });
  },
  processChildOfChildrens = function processChildOfChildrens(child) {
    child.forEach(function (child) {
      if (child instanceof Node) fragment.appendChild(child);else if ("function" == typeof child) {
        var childElement = child(elementProps);
        childElement instanceof Node && fragment.appendChild(childElement);
      } else childNode = document.createTextNode(child), fragment.appendChild(childNode);
    });
  },
  signalHandler = function signalHandler(node) {
    var textNode = document.createTextNode("");
    (0, _reactivity.createEffect)(function () {
      var value = node();
      textNode.nodeValue = value;
    }), fragment.appendChild(textNode);
  };
},{"../dom":"../dist/src/core/dom/index.js","../reactivity":"../dist/src/core/reactivity/index.js"}],"../dist/src/core/dom/wrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = void 0;
var wrapper = exports.wrapper = function wrapper() {
  return document.createDocumentFragment();
};
},{}],"../dist/src/core/dom/createEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var createEvent = exports.createEvent = function createEvent(props, element) {
  var isEventProp = function isEventProp(key) {
    return key.startsWith("on");
  };
  Object.entries(props).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];
    return isEventProp(key);
  }).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      callbackHandler = _ref4[1];
    element.addEventListener(key.slice(2).toLowerCase(), callbackHandler);
  });
};
},{}],"../dist/src/core/dom/index.js":[function(require,module,exports) {
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
var _createElement = require("./createElement");
var _wrapper = require("./wrapper");
var _createEvent = require("./createEvent");
},{"./createElement":"../dist/src/core/dom/createElement.js","./wrapper":"../dist/src/core/dom/wrapper.js","./createEvent":"../dist/src/core/dom/createEvent.js"}],"../node_modules/nanoid/url-alphabet/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlAlphabet = void 0;
var urlAlphabet = exports.urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
},{}],"../node_modules/nanoid/index.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.nanoid = exports.customRandom = exports.customAlphabet = void 0;
Object.defineProperty(exports, "urlAlphabet", {
  enumerable: true,
  get: function () {
    return _index.urlAlphabet;
  }
});
var _index = require("./url-alphabet/index.js");
var random = exports.random = function random(bytes) {
  return crypto.getRandomValues(new Uint8Array(bytes));
};
var customRandom = exports.customRandom = function customRandom(alphabet, defaultSize, getRandom) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  var step = -~(1.6 * mask * defaultSize / alphabet.length);
  return function () {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
    var id = '';
    while (true) {
      var bytes = getRandom(step);
      var j = step;
      while (j--) {
        id += alphabet[bytes[j] & mask] || '';
        if (id.length === size) return id;
      }
    }
  };
};
var customAlphabet = exports.customAlphabet = function customAlphabet(alphabet) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  return customRandom(alphabet, size, random);
};
var nanoid = exports.nanoid = function nanoid() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
  var id = '';
  var bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    id += _index.urlAlphabet[bytes[size] & 63];
  }
  return id;
};
},{"./url-alphabet/index.js":"../node_modules/nanoid/url-alphabet/index.js"}],"../dist/src/core/cssInJs/generateClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateClass = void 0;
var _nanoid = require("nanoid");
var generateClass = exports.generateClass = function generateClass(tag) {
  return "__".concat(tag, "__").concat((0, _nanoid.nanoid)(5), " ");
};
},{"nanoid":"../node_modules/nanoid/index.browser.js"}],"../dist/src/core/cssInJs/insertRule.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertRule = void 0;
var insertRule = exports.insertRule = function insertRule(className, styles) {
  var styleSheet;
  if (!(styleSheet = document.styleSheets[0])) {
    var style = document.createElement("style");
    document.head.appendChild(style), styleSheet = style.sheet;
  }
  var formattedStyles = styles.replace(/\n/g, "");
  styleSheet.insertRule(".".concat(className, " { ").concat(formattedStyles, " }"), styleSheet.cssRules.length);
};
},{}],"../dist/src/core/cssInJs/createStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyle = void 0;
var _createElement = require("./../dom/createElement");
var _generateClass = require("./generateClass");
var _insertRule = require("./insertRule");
var createStyle = exports.createStyle = function createStyle(tag) {
  return function (styles) {
    var className = (0, _generateClass.generateClass)(tag);
    return (0, _insertRule.insertRule)(className, styles.join("")), function (props) {
      var target, source;
      return (0, _createElement.createElement)(tag, (target = function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }))), ownKeys.forEach(function (key) {
            var value;
            value = source[key], key in target ? Object.defineProperty(target, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : target[key] = value;
          });
        }
        return target;
      }({}, props), source = source = {
        class: className
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : function (object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          keys.push.apply(keys, symbols);
        }
        return keys;
      }(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      }), target));
    };
  };
};
},{"./../dom/createElement":"../dist/src/core/dom/createElement.js","./generateClass":"../dist/src/core/cssInJs/generateClass.js","./insertRule":"../dist/src/core/cssInJs/insertRule.js"}],"../dist/src/core/cssInJs/index.js":[function(require,module,exports) {
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
var _createStyle = require("./createStyle");
},{"./createStyle":"../dist/src/core/cssInJs/createStyle.js"}],"../dist/src/core/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    return _cssInJs.createStyle;
  }
});
exports.olka = void 0;
var _olka = _interopRequireWildcard(require("./dom"));
exports.olka = _olka;
var _cssInJs = require("./cssInJs");
var _reactivity = require("./reactivity");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
},{"./dom":"../dist/src/core/dom/index.js","./cssInJs":"../dist/src/core/cssInJs/index.js","./reactivity":"../dist/src/core/reactivity/index.js"}],"../dist/src/test/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("../core");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = exports.default = function _default() {
  var _createSignal = (0, _core.createSignal)(""),
    _createSignal2 = _slicedToArray(_createSignal, 2),
    text = _createSignal2[0],
    setText = _createSignal2[1];
  return (0, _core.createEffect)(function () {
    console.log("Text:", text());
  }), _core.olka.createElement("div", null, _core.olka.createElement("h1", null, text), _core.olka.createElement("input", {
    type: "text",
    onInput: function onInput(e) {
      return setText(e.target.value);
    }
  }));
};
},{"../core":"../dist/src/core/index.js"}],"../dist/src/main.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./test/App"));
var _core = require("./core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.querySelector("#root").appendChild(_core.olka.createElement(_App.default, null));
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49861" + '/');
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