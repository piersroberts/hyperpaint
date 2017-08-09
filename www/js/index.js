/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _hyperapp = __webpack_require__(1);

var Cell = function Cell(props, children) {
	var style = {
		backgroundColor: props.colour,
		border: 'solid 0.5px'
	};

	var handleClick = function handleClick(e) {
		if (e.buttons) {
			props.paint(props.index);
		}
	};

	return (0, _hyperapp.h)('div', { onmouseenter: handleClick, onmousedown: handleClick, style: style });
};

var Grid = function Grid(props, children) {
	var style = {
		cursor: 'crosshair',
		border: 'solid 1px',
		display: 'inline-grid',
		gridTemplateColumns: 'repeat(' + props.columns + ', 10px)',
		gridTemplateRows: 'repeat(' + props.rows + ', 10px)'
	};
	var cells = props.cells.map(function (cell, i) {
		return (0, _hyperapp.h)(Cell, { index: i, colour: cell.colour, paint: props.paint });
	});
	return (0, _hyperapp.h)(
		'div',
		{ style: style },
		cells
	);
};

var Paint = function Paint(props) {
	return (0, _hyperapp.h)('div', {
		style: {
			border: 'solid 0.5px',
			width: '2em',
			height: '2em',
			display: 'inlineBlock',
			backgroundColor: props.colour
		},
		onclick: function onclick() {
			return props.setPaintColour(props.colour);
		}
	});
};

var Palette = function Palette(props) {
	return (0, _hyperapp.h)(
		'div',
		null,
		(0, _hyperapp.h)(Paint, { setPaintColour: props.setPaintColour, colour: 'red' }),
		(0, _hyperapp.h)(Paint, { setPaintColour: props.setPaintColour, colour: 'green' }),
		(0, _hyperapp.h)(Paint, { setPaintColour: props.setPaintColour, colour: 'yellow' }),
		(0, _hyperapp.h)(Paint, { setPaintColour: props.setPaintColour, colour: 'blue' }),
		(0, _hyperapp.h)(Paint, { setPaintColour: props.setPaintColour, colour: 'black' }),
		(0, _hyperapp.h)(Paint, { setPaintColour: props.setPaintColour, colour: 'white' })
	);
};

(0, _hyperapp.app)({
	state: {
		rows: 32,
		columns: 32,
		cells: [],
		penColour: 'green',
		paperColour: 'white'
	},
	actions: {
		paint: function paint(state, actions, index) {
			var newState = _extends({}, state);
			newState.cells[index].colour = state.penColour;
			return newState;
		},
		setPaintColour: function setPaintColour(state, actions, penColour) {
			return _extends({}, state, { penColour: penColour });
		},
		clear: function clear(state) {
			var cells = [];
			for (var i = 0; i < state.rows * state.columns; i++) {
				cells.push({
					colour: state.paperColour
				});
			}
			return _extends({}, state, { cells: cells });
		}
	},

	view: function view(state, actions) {
		return (0, _hyperapp.h)(
			'div',
			null,
			(0, _hyperapp.h)(Grid, { paint: function paint(i) {
					actions.paint(i);
				}, cells: state.cells, rows: state.rows, columns: state.columns }),
			(0, _hyperapp.h)(Palette, { setPaintColour: function setPaintColour(paintColour) {
					actions.setPaintColour(paintColour);
				} }),
			(0, _hyperapp.h)(
				'button',
				{ onclick: actions.clear },
				'Clear'
			)
		);
	}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__h__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_1__app__["a"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h;
function h(tag, data) {
  var node
  var stack = []
  var children = []

  for (var i = arguments.length; i-- > 2; ) {
    stack[stack.length] = arguments[i]
  }

  while (stack.length) {
    if (Array.isArray((node = stack.pop()))) {
      for (var i = node.length; i--; ) {
        stack[stack.length] = node[i]
      }
    } else if (node != null && node !== true && node !== false) {
      if (typeof node === "number") {
        node = node + ""
      }
      children[children.length] = node
    }
  }

  return typeof tag === "string"
    ? {
        tag: tag,
        data: data || {},
        children: children
      }
    : tag(data, children)
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = app;
function app(app) {
  var state = {}
  var actions = {}
  var events = {}
  var mixins = []
  var view = app.view
  var root = app.root || document.body
  var node
  var element
  var locked = false
  var loaded = false

  for (var i = -1; i < mixins.length; i++) {
    var mixin = mixins[i] ? mixins[i](emit) : app

    Object.keys(mixin.events || []).map(function(key) {
      events[key] = (events[key] || []).concat(mixin.events[key])
    })

    if (mixin.state != null) {
      state = merge(state, mixin.state)
    }

    mixins = mixins.concat(mixin.mixins || [])

    initialize(actions, mixin.actions)
  }

  node = hydrate((element = root.querySelector("[data-ssr]")), [].map)

  repaint(emit("init"))

  return emit

  function repaint() {
    if (!locked) {
      requestAnimationFrame(render, (locked = !locked))
    }
  }

  function hydrate(element, map) {
    return element == null
      ? element
      : {
          tag: element.tagName,
          data: {},
          children: map.call(element.childNodes, function(element) {
            hydrate(element, map)
          })
        }
  }

  function render() {
    element = patch(
      root,
      element,
      node,
      (node = emit("render", view)(state, actions))
    )

    locked = !locked

    if (!loaded) {
      emit("loaded", (loaded = true))
    }
  }

  function initialize(namespace, children, lastName) {
    Object.keys(children || []).map(function(key) {
      var action = children[key]
      var name = lastName ? lastName + "." + key : key

      if (typeof action === "function") {
        namespace[key] = function(data) {
          var result = action(
            state,
            actions,
            emit("action", {
              name: name,
              data: data
            }).data
          )

          if (result != null && result.then == null) {
            repaint((state = merge(state, emit("update", result))))
          }

          return result
        }
      } else {
        initialize(namespace[key] || (namespace[key] = {}), action, name)
      }
    })
  }

  function emit(name, data) {
    return (events[name] || []).map(function(cb) {
      var result = cb(state, actions, data)
      if (result != null) {
        data = result
      }
    }), data
  }

  function merge(a, b) {
    if (typeof b !== "object") {
      return b
    }

    var obj = {}

    for (var i in a) {
      obj[i] = a[i]
    }

    for (var i in b) {
      obj[i] = b[i]
    }

    return obj
  }

  function getKey(node) {
    if (node && (node = node.data)) {
      return node.key
    }
  }

  function createElement(node, isSVG) {
    if (typeof node === "string") {
      var element = document.createTextNode(node)
    } else {
      var element = (isSVG = isSVG || node.tag === "svg")
        ? document.createElementNS("http://www.w3.org/2000/svg", node.tag)
        : document.createElement(node.tag)

      for (var i = 0; i < node.children.length; ) {
        element.appendChild(createElement(node.children[i++], isSVG))
      }

      for (var i in node.data) {
        if (i === "oncreate") {
          node.data[i](element)
        } else if (i === "oninsert") {
          setTimeout(node.data[i], 0, element)
        } else {
          setElementData(element, i, node.data[i])
        }
      }
    }

    return element
  }

  function setElementData(element, name, value, oldValue) {
    if (
      name === "key" ||
      name === "oncreate" ||
      name === "oninsert" ||
      name === "onupdate" ||
      name === "onremove"
    ) {
      return name
    } else if (name === "style") {
      for (var i in merge(oldValue, (value = value || {}))) {
        element.style[i] = value[i] || ""
      }
    } else {
      try {
        element[name] = value
      } catch (_) {}

      if (typeof value !== "function") {
        if (value) {
          element.setAttribute(name, value)
        } else {
          element.removeAttribute(name)
        }
      }
    }
  }

  function updateElementData(element, oldData, data, cb) {
    for (var name in merge(oldData, data)) {
      var value = data[name]
      var oldValue = oldData[name]

      if (
        value !== oldValue &&
        value !== element[name] &&
        setElementData(element, name, value, oldValue) == null
      ) {
        cb = data.onupdate
      }
    }

    if (cb != null) {
      cb(element)
    }
  }

  function removeElement(parent, element, data) {
    if (data && data.onremove) {
      data.onremove(element)
    } else {
      parent.removeChild(element)
    }
  }

  function patch(parent, element, oldNode, node, isSVG, lastElement) {
    if (oldNode == null) {
      element = parent.insertBefore(createElement(node, isSVG), element)
    } else if (node.tag != null && node.tag === oldNode.tag) {
      updateElementData(element, oldNode.data, node.data)

      isSVG = isSVG || node.tag === "svg"

      var len = node.children.length
      var oldLen = oldNode.children.length
      var reusableChildren = {}
      var oldElements = []
      var newKeys = {}

      for (var i = 0; i < oldLen; i++) {
        var oldElement = element.childNodes[i]
        oldElements[i] = oldElement

        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)

        if (null != oldKey) {
          reusableChildren[oldKey] = [oldElement, oldChild]
        }
      }

      var i = 0
      var j = 0

      while (j < len) {
        var oldElement = oldElements[i]
        var oldChild = oldNode.children[i]
        var newChild = node.children[j]

        var oldKey = getKey(oldChild)
        if (newKeys[oldKey]) {
          i++
          continue
        }

        var newKey = getKey(newChild)

        var reusableChild = reusableChildren[newKey] || []

        if (null == newKey) {
          if (null == oldKey) {
            patch(element, oldElement, oldChild, newChild, isSVG)
            j++
          }
          i++
        } else {
          if (oldKey === newKey) {
            patch(element, reusableChild[0], reusableChild[1], newChild, isSVG)
            i++
          } else if (reusableChild[0]) {
            element.insertBefore(reusableChild[0], oldElement)
            patch(element, reusableChild[0], reusableChild[1], newChild, isSVG)
          } else {
            patch(element, oldElement, null, newChild, isSVG)
          }

          j++
          newKeys[newKey] = newChild
        }
      }

      while (i < oldLen) {
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)
        if (null == oldKey) {
          removeElement(element, oldElements[i], oldChild.data)
        }
        i++
      }

      for (var i in reusableChildren) {
        var reusableChild = reusableChildren[i]
        var reusableNode = reusableChild[1]
        if (!newKeys[reusableNode.data.key]) {
          removeElement(element, reusableChild[0], reusableNode.data)
        }
      }
    } else if (
      (lastElement = element) != null &&
      node !== oldNode &&
      node !== element.nodeValue
    ) {
      parent.replaceChild((element = createElement(node, isSVG)), lastElement)
    }

    return element
  }
}


/***/ })
/******/ ]);