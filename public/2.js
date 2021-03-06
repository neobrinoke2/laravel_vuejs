webpackJsonp([2],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(12)
/* template */
var __vue_template__ = __webpack_require__(13)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\User\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06f6a890", Component.options)
  } else {
    hotAPI.reload("data-v-06f6a890", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			users: [],
			user: null,
			api: null
		};
	},

	methods: {
		showUser: function showUser(user) {
			var _this = this;

			if (this.user == null || this.user.id != user.id) {
				// check if user is defined and if he is the same as previous
				this.api.get({ id: user.id }).then(function (response) {
					_this.user = response.data;
				}, function (response) {
					_this.user = {
						name: 'Impossible de trouver l\'utilisateur'
					};
				}).then(function () {
					$('#user_modal').modal('show');
				});
			} else {
				$('#user_modal').modal('show');
			}
		}
	},
	mounted: function mounted() {
		var _this2 = this;

		this.api = this.$resource('users/{id}', {}, {}, {
			before: function before() {
				_this2.$parent.loading = true;
			},
			after: function after() {
				_this2.$parent.loading = false;
			}
		});

		this.api.query().then(function (response) {
			_this2.users = response.data;
		});
	}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "ui celled table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.users, function(user) {
          return _c("tr", { key: user.id }, [
            _c("td", [_vm._v(_vm._s(user.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.email))]),
            _vm._v(" "),
            _c("td", { staticClass: "collapsing" }, [
              _c(
                "button",
                {
                  staticClass: "ui button teal",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showUser(user)
                    }
                  }
                },
                [_vm._v("Détails")]
              )
            ])
          ])
        })
      )
    ]),
    _vm._v(" "),
    _vm.user
      ? _c("div", { staticClass: "ui modal", attrs: { id: "user_modal" } }, [
          _c("i", { staticClass: "close icon" }),
          _vm._v(" "),
          _c("div", { staticClass: "header" }, [_vm._v(_vm._s(_vm.user.name))]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2)
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nom")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image content" }, [
      _c("div", { staticClass: "description" }, [
        _c("div", { staticClass: "ui header" }, [
          _vm._v("We've auto-chosen a profile image for you.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "actions" }, [
      _c("div", { staticClass: "ui black deny button" }, [_vm._v("Nope")]),
      _vm._v(" "),
      _c("div", { staticClass: "ui positive right labeled icon button" }, [
        _vm._v("Yep, that's me"),
        _c("i", { staticClass: "checkmark icon" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06f6a890", module.exports)
  }
}

/***/ })
]);