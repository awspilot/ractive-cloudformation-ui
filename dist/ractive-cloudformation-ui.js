(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"));
	else if(typeof define === 'function' && define.amd)
		define("ractive-cloudformation-ui", ["ractive"], factory);
	else if(typeof exports === 'object')
		exports["ractive-cloudformation-ui"] = factory(require("ractive"));
	else
		root["ractive-cloudformation-ui"] = factory(root["Ractive"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(1);

var _ractive = __webpack_require__(2);

var _ractive2 = _interopRequireDefault(_ractive);

var _hsplit = __webpack_require__(3);

var _hsplit2 = _interopRequireDefault(_hsplit);

var _cftabs = __webpack_require__(4);

var _cftabs2 = _interopRequireDefault(_cftabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ractive2.default.extend({
	template: '\n\t\t<hsplit class=\'ractive-cloudformation-ui theme-{{theme}}\'>\n\t\t\t<left style="border-right: 1px solid #b9b8b6;">\n\t\t\t\t<div style="display: block;font-size: 12px;padding-left: 10px;font-size: 18px;font-weight: 700;color: #000;line-height: 2rem;padding: 12px 35px;border-bottom: 1px solid #ddd;">\n\t\t\t\t\tCloudformation\n\t\t\t\t</div>\n\t\t\t\t<div style="position: absolute;bottom: 0px;top: 60px;left: 0px;right: 0px;">\n\t\t\t\t\t<div style="display: block;height: 30px;line-height: 30px;font-size: 13px;padding: 0px 35px;border-top: 1px solid transparent;border-left: 1px solid transparent;margin-bottom: 0px;color: #ec7211;font-weight: bold;">Stacks</div>\n\t\t\t\t\t<div style="display: block;height: 30px;line-height: 30px;font-size: 13px;padding: 0px 35px;border-top: 1px solid transparent;border-left: 1px solid transparent;margin-bottom: 0px;color: #000;">StacksSets</div>\n\t\t\t\t\t<div style="display: block;height: 30px;line-height: 30px;font-size: 13px;padding: 0px 35px;border-top: 1px solid transparent;border-left: 1px solid transparent;margin-bottom: 0px;color: #000;">Exports</div>\n\t\t\t\t</div>\n\t\t\t</left>\n\t\t\t<content  style="background-color: transparent;border: 0px;overflow-x: auto;">\n\t\t\t\t<cftabs active_id=\'stacklist\' />\n\t\t\t</content>\n\t\t</hsplit>\n\t\t',
	components: {
		hsplit: _hsplit2.default,
		cftabs: _cftabs2.default
	},

	data: function data() {
		return {};
	},

	on: {
		init: function init() {
			// var ractive=this;

			cloudformation = new AWS.CloudFormation({
				endpoint: this.get('endpoint'),
				region: this.get('region'),
				credentials: {
					accessKeyId: this.get('accessKeyId'),
					secretAccessKey: this.get('secretAccessKey')
				}
			});
		}
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>',
	isolated: false,
	data: {
		direction: 'horizontal'
	}
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stacklist = __webpack_require__(5);

var _stacklist2 = _interopRequireDefault(_stacklist);

var _ministacklist = __webpack_require__(6);

var _ministacklist2 = _interopRequireDefault(_ministacklist);

var _stackdetails = __webpack_require__(7);

var _stackdetails2 = _interopRequireDefault(_stackdetails);

var _create = __webpack_require__(14);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		stacklist: _stacklist2.default,
		ministacklist: _ministacklist2.default,
		stackdetails: _stackdetails2.default,
		stackcreate: _create2.default
	},

	template: '\n\n\t\t\t<div style="height: 30px;margin-left: 10px;line-height: 30px;font-size: 15px;">\n\t\t\t\t<a style="cursor: pointer;text-decoration: none;">Cloudformation</a> &gt;\n\t\t\t\t<a style="cursor: pointer;text-decoration: none;" on-click="@this.set(\'active_id\', \'stacklist\')">Stacks</a>\n\t\t\t\t{{#if active_id === \'stackdetails\'}}\n\t\t\t\t\t&gt; <a style="cursor: pointer;text-decoration: none;color: #999;">{{stackdetails}}</a>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\n\t\t\t{{#if active_id === "stacklist" || active_id === "stackdetails" }}\n\t\t\t<div style="position: absolute;top: 40px;left: 10px;right: 10px;bottom: 10px;">\n\t\t\t\t{{#if active_id === "stacklist"}}\n\t\t\t\t\t<div style="position: absolute;top: 0px;left: 0px;width: {{#if active_id === \'stackdetails\'}} 260px; {{else}}100%;{{/if}}; box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color: #fff">\n\t\t\t\t\t\t<stacklist />\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if active_id === \'stackdetails\'}}\n\t\t\t\t\t<div style="position: absolute;top: 0px;left: 0px;width: {{#if active_id === \'stackdetails\'}} 260px; {{else}}100%;{{/if}}; bottom: 0px;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color: #fff">\n\t\t\t\t\t\t<ministacklist active-stack="{{stackdetails}}" />\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if active_id === \'stackdetails\'}}\n\t\t\t\t\t<stackdetails stack="{{stackdetails}}" />\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{#if active_id === "stackcreate" }}\n\t\t\t<div style="position: absolute;top: 10px;left: 50px;right: 50px;bottom: 10px;">\n\t\t\t\t<stackcreate />\n\t\t\t</div>\n\t\t\t{{/if}}\n\t\t',
	data: function data() {
		return {};
	},
	active_cache: [],
	activetabcontent: function activetabcontent() {
		var ractive = this;
		ractive.active_cache.push(ractive.get('active_id'));
		ractive.findAllComponents('tabletab').map(function (tableview_c) {
			tableview_c.set('active', tableview_c.get('table.id') === ractive.get('active_id'));
		});
	},
	command: function command(component_name, param1) {

		if (component_name === 'stackdetails') this.set('stackdetails', param1);

		this.set('active_id', component_name);
	},
	oninit: function oninit() {
		var ractive = this;

		this.observe('active_id', function (newvalue, oldvalue, keypath) {
			ractive.activetabcontent();
		});

		this.on('closetab', function (e, id) {

			this.active_cache = this.active_cache.filter(function (tid) {
				return tid !== id;
			});
			this.set('tabs', this.get('tabs').filter(function (t) {
				return t.id !== id;
			}));

			if (this.get('active_id') === id) {
				// the current tab was closed
				this.set('active_id', this.active_cache.pop());
			}
			ractive.activetabcontent();
			return false;
		});
		this.on('activetab', function (e, id) {
			this.set('active_id', id);
			return false;
		});
	}
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Icons = __webpack_require__(15);

exports.default = Ractive.extend({
	components: {
		'icon-refresh': Icons['icon-refresh']
	},
	template: '\n\t\t<div style="height: 50px;padding: 10px 10px 0px 0px;background-color: #fafafa;;">\n\n\t\t\t<div style="float: right;">\n\t\t\t\t<a class="btn btn-sm btn-default" on-click="refresh"> <icon-refresh /> </a>\n\t\t\t\t<a class="btn btn-sm btn-default {{#if selection}}{{else}}disabled{{/if}}" on-click=\'delete\'> Delete </a>\n\t\t\t\t<a class="btn btn-sm btn-default disabled" on-click=\'update-stack\'> Update </a>\n\t\t\t\t<a class="btn btn-sm btn-primary" on-click="create-stack"> Create stack </a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show; border: 1px solid #eaeded;width: 100%;">\n\t\t    <thead style="background-color: #fafafa;color: #000;text-align: left;vertical-align: bottom;border-bottom: 1px solid #eaeded">\n\t\t        <tr>\n\t\t            <th style="padding: 0.5em 1em;"></th>\n\t\t            <th style="padding: 0.5em 1em;">Stack name</th>\n\t\t            <th style="padding: 0.5em 1em;">Status</th>\n\t\t            <th style="padding: 0.5em 1em;">Created time</th>\n\t\t\t\t\t<th style="padding: 0.5em 1em;">Description</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t\t\t{{#stacks}}\n\n\t\t        <tr style="{{#if selection === .StackName }}background-color: #f1faff;{{/if}}">\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;"><input type="radio" name={{selection}} value=\'{{.StackName}}\'></td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;"><a style="cursor: pointer;" on-click="gotostack">{{.StackName}}</a></td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.StackStatus}}</td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.CreationTimeFormatted}}</td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">-</td>\n\t\t        </tr>\n\t\t\t\t{{/stacks}}\n\n\t\t    </tbody>\n\t\t</table>\n\t',
	stack_list: function stack_list(cb) {
		var ractive = this;

		this.set({ stacks: [] });
		this.set('selection');
		cloudformation.listStacks({
			//  NextToken: 'STRING_VALUE',
			//  StackStatusFilter: [
			//    CREATE_IN_PROGRESS | CREATE_FAILED | CREATE_COMPLETE | ROLLBACK_IN_PROGRESS | ROLLBACK_FAILED | ROLLBACK_COMPLETE | DELETE_IN_PROGRESS | DELETE_FAILED | DELETE_COMPLETE | UPDATE_IN_PROGRESS | UPDATE_COMPLETE_CLEANUP_IN_PROGRESS | UPDATE_COMPLETE | UPDATE_ROLLBACK_IN_PROGRESS | UPDATE_ROLLBACK_FAILED | UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS | UPDATE_ROLLBACK_COMPLETE | REVIEW_IN_PROGRESS,
			//    /* more items */
			//  ]
		}, function (err, data) {

			if (err) {
				if (cb) cb(err);
				return;
			}
			ractive.set('stacks', data.StackSummaries.sort(function (a, b) {
				return new Date(a.CreationTime).getTime() > new Date(b.CreationTime).getTime() ? -1 : 1;
			}).filter(function (s) {
				return s.StackStatus !== 'DELETE_COMPLETE';
			}).sort(function (s) {
				s.CreationTimeFormatted = new Date(s.CreationTime).toISOString();
				return s;
			}));

			if (cb) cb(err, data);
		});
	},
	data: function data() {
		return {
			selection: ''
		};
	},
	on: {
		init: function init() {
			var ractive = this;
			ractive.set('columns', [null, 'Stack Name', 'Status', 'Created time']);
			ractive.set('rows', []);

			ractive.on('refresh', function () {
				ractive.stack_list();
			});

			ractive.on('create-stack', function () {
				ractive.root.findComponent('cftabs').command('stackcreate', 'Create Stack');
			});
			ractive.on('delete', function () {
				var selected = ractive.get('selection');

				if (!selected) return alert('Please select a stack to delete');

				var stackname = selected;

				if (confirm('Are you sure you want to delete stack ' + stackname)) {

					cloudformation.deleteStack({ StackName: stackname }, function (err, data) {
						if (err) alert('delete stack failed');

						setTimeout(function () {
							ractive.stack_list();
						}, 1500);
					});
				}
			});
			ractive.stack_list();
		},
		gotostack: function gotostack(e) {
			this.root.findComponent('cftabs').command('stackdetails', this.get(e.resolve() + '.StackName'));
		}
	}

});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Icons = __webpack_require__(15);

exports.default = Ractive.extend({
	components: {
		'icon-refresh': Icons['icon-refresh']
	},
	template: '\n\t\t<div style="padding: 7px;text-align: right;background-color: #fafafa;">\n\t\t\t<a class="btn btn-sm btn-default" on-click="refresh"> <icon-refresh /> </a>\n\t\t</div>\n\n\t\t{{#stacks}}\n\t\t\t<div style="height: 86px;padding: 15px 20px;border-bottom: 1px solid #eaeded;text-decoration: none;cursor: pointer;{{#if ~/[\'active-stack\'] === .StackName }}border: 1px solid #0073bb;{{/if}}" on-click="gotostack">\n\t\t\t\t<div style="color: #000;line-height: 20px;">{{.StackName}}</div>\n\t\t\t\t<div style="color: #aaa;font-size: 12px;line-height: 20px;margin-top: 5px;">{{.CreationTimeFormatted}}</div>\n\t\t\t\t<div style="color: #1d8102;font-size: 13px;">{{.StackStatus}}</div>\n\t\t\t</div>\n\t\t{{/stacks}}\n\n\t',
	data: function data() {
		return {
			stacks: []
		};
	},
	stack_list: function stack_list(cb) {
		var ractive = this;

		this.set({ stacks: [] });

		cloudformation.listStacks({
			//  NextToken: 'STRING_VALUE',
			//  StackStatusFilter: [
			//    CREATE_IN_PROGRESS | CREATE_FAILED | CREATE_COMPLETE | ROLLBACK_IN_PROGRESS | ROLLBACK_FAILED | ROLLBACK_COMPLETE | DELETE_IN_PROGRESS | DELETE_FAILED | DELETE_COMPLETE | UPDATE_IN_PROGRESS | UPDATE_COMPLETE_CLEANUP_IN_PROGRESS | UPDATE_COMPLETE | UPDATE_ROLLBACK_IN_PROGRESS | UPDATE_ROLLBACK_FAILED | UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS | UPDATE_ROLLBACK_COMPLETE | REVIEW_IN_PROGRESS,
			//    /* more items */
			//  ]
		}, function (err, data) {

			if (err) {
				if (cb) cb(err);
				return;
			}
			ractive.set('stacks', data.StackSummaries.sort(function (a, b) {
				return new Date(a.CreationTime).getTime() > new Date(b.CreationTime).getTime() ? -1 : 1;
			}).filter(function (s) {
				return s.StackStatus !== 'DELETE_COMPLETE';
			}).sort(function (s) {
				s.CreationTimeFormatted = new Date(s.CreationTime).toISOString();
				return s;
			}));

			if (cb) cb(err, data);
		});
	},
	on: {
		init: function init() {
			var ractive = this;

			ractive.on('refresh', function () {
				ractive.stack_list();
			});
			ractive.stack_list();
		},
		gotostack: function gotostack(e) {
			this.root.findComponent('cftabs').command('stackdetails', this.get(e.resolve() + '.StackName'));
		}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabs = __webpack_require__(8);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	isolated: true,
	components: {
		stackdetailtabs: _tabs2.default
	},
	template: "\n\t\t{{#if show}}\n\t\t\t<stackdetailtabs StackName=\"{{stack}}\" />\n\t\t{{/if}}\n\t",
	data: function data() {
		return {
			show: true
		};
	},
	on: {
		init: function init() {
			this.observe("stack", function (n) {
				console.log("stack changed to ", n);
				this.set({ show: false });

				var $this = this;
				setTimeout(function () {
					$this.set({ show: true });
				}, 50);
			});
		}
	}
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _template = __webpack_require__(9);

var _template2 = _interopRequireDefault(_template);

var _parameters = __webpack_require__(10);

var _parameters2 = _interopRequireDefault(_parameters);

var _resources = __webpack_require__(11);

var _resources2 = _interopRequireDefault(_resources);

var _events = __webpack_require__(12);

var _events2 = _interopRequireDefault(_events);

var _exports = __webpack_require__(13);

var _exports2 = _interopRequireDefault(_exports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		stackdetailstemplate: _template2.default,
		stackdetailsparameters: _parameters2.default,
		stackdetailsresources: _resources2.default,
		stackdetailsevents: _events2.default,
		stackdetailsexports: _exports2.default
	},
	template: '\n\t\t<div style="position: absolute;left: 270px;right:0px;top: 0px;height: 50px;">\n\t\t\t<div style="float: right;padding-top: 7px;">\n\t\t\t\t<a class="btn btn-sm btn-default" on-click=\'delete-stack\' > Delete </a>\n\t\t\t\t<a class="btn btn-sm btn-default disabled"  > Update </a>\n\t\t\t\t<a class="btn btn-sm btn-primary" on-click="create-stack"> Create Stack </a>\n\t\t\t</div>\n\t\t\t<h4 style="color: #000;">{{StackName}}</h4>\n\n\t\t</div>\n\t\t<div style="position: absolute;left: 270px;right:0px;top: 40px;bottom: 0px;">\n\t\t\t\t<tabhead style="">\n\t\t\t\t\t<tab class=\'{{#if active_id === "exports" }}active{{/if}}\' on-click=\'@this.fire("activetab", "exports")\'>Outputs</tab>\n\t\t\t\t\t<tab class=\'{{#if active_id === "resources" }}active{{/if}}\' on-click=\'@this.fire("activetab", "resources")\'>Resources</tab>\n\t\t\t\t\t<tab class=\'{{#if active_id === "events" }}active{{/if}}\' on-click=\'@this.fire("activetab", "events")\'>Events</tab>\n\t\t\t\t\t<tab class=\'{{#if active_id === "template" }}active{{/if}}\'   on-click=\'@this.fire("activetab", "template")\'>Template</tab>\n\t\t\t\t\t<tab class=\'{{#if active_id === "parameters" }}active{{/if}}\' on-click=\'@this.fire("activetab", "parameters")\'>Parameters</tab>\n\t\t\t\t</tabhead>\n\n\t\t\t\t<tabcontent style="top: 50px;">\n\t\t\t\t\t{{#if active_id === "template" }}\n\t\t\t\t\t\t<div style="position: absolute;top: 0;left: 0;right:0;bottom: 0; background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">\n\t\t\t\t\t\t\t<stackdetailstemplate StackName="{{StackName}}">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if active_id === "parameters" }}\n\t\t\t\t\t\t<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">\n\t\t\t\t\t\t\t<stackdetailsparameters StackName="{{StackName}}">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if active_id === "resources" }}\n\t\t\t\t\t\t<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">\n\t\t\t\t\t\t\t<stackdetailsresources StackName="{{StackName}}">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if active_id === "events" }}\n\t\t\t\t\t\t<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">\n\t\t\t\t\t\t\t<stackdetailsevents StackName="{{StackName}}">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if active_id === "exports" }}\n\t\t\t\t\t\t<div style="background-color:#fff;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;">\n\t\t\t\t\t\t\t<stackdetailsexports StackName="{{StackName}}">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</tabcontent>\n\t\t</div>\n\t',
	data: function data() {
		return {
			active_id: 'resources'
		};
	},

	oninit: function oninit() {
		var ractive = this;

		this.on('create-stack', function () {
			ractive.root.findComponent('cftabs').command('stackcreate', 'Create Stack');
		});
		this.on('delete-stack', function () {

			var stackname = this.get('StackName');

			if (confirm('Are you sure you want to delete stack ' + stackname)) {

				cloudformation.deleteStack({ StackName: stackname }, function (err, data) {
					if (err) alert('delete stack failed');

					setTimeout(function () {
						ractive.root.findComponent('cftabs').command('stacklist', '');
					}, 1500);
				});
			}
		});
		this.on('activetab', function (e, id) {
			this.set('active_id', id);
			return false;
		});
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
;
exports.default = Ractive.extend({
	template: '\n\t\t<div style="position: absolute;top: 0px;left:0px;right: 0px;bottom: 0px;overflow: auto;white-space: pre;font-family: monospace;padding: 15px;">\n\t\t{{TemplateBody}}\n\t\t</div>\n\t',

	oninit: function oninit() {
		var ractive = this;

		var params = {
			StackName: this.get('StackName')
			//TemplateStage: Original | Processed
		};
		cloudformation.getTemplate(params, function (err, data) {
			if (err) return alert('failed getting stack template');

			ractive.set('TemplateBody', data.TemplateBody);
		});
	}
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	components: {},
	template: '\n\t\t<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show; border: 1px solid #eaeded;width: 100%;">\n\t\t    <thead style="background-color: #fafafa;color: #000;text-align: left;vertical-align: bottom;border-bottom: 1px solid #eaeded">\n\t\t        <tr>\n\t\t            <th style="padding: 0.5em 1em;">Key</th>\n\t\t            <th style="padding: 0.5em 1em;">Value</th>\n\t\t            <th style="padding: 0.5em 1em;">Resolved value</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t\t\t{{#parameters}}\n\t\t        <tr>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ParameterKey}}</td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ParameterValue}}</td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;"></td>\n\t\t        </tr>\n\t\t\t\t{{/parameters}}\n\n\t\t    </tbody>\n\t\t</table>\n\n\t',
	oninit: function oninit() {
		var ractive = this;

		var params = {
			StackName: this.get('StackName')
			//TemplateStage: Original | Processed
		};
		cloudformation.describeStacks(params, function (err, data) {
			if (err) return alert('failed describing stack');

			console.log(data.Stacks[0]);

			ractive.set('stack', data.Stacks[0]);

			ractive.set('parameters', data.Stacks[0].Parameters);
		});
	}
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Icons = __webpack_require__(15);

exports.default = Ractive.extend({
	components: {
		'icon-refresh': Icons['icon-refresh']
	},
	template: '\n\n\n\n\t\t<div style="background-color: #fafafa;border-bottom: 1px solid #eaeded;height: 50px;padding: 7px;">\n\t\t\t<div style="float:right;">\n\t\t\t\t<a class="btn btn-sm btn-default" on-click="@this.list_resources()"> <icon-refresh /> </a>\n\t\t\t</div>\n\t\t\t<div style="font-size: 20px;line-height: 40px;">Resources</div>\n\n\t\t</div>\n\n\t\t<table style="border-collapse: collapse;border-spacing: 0; empty-cells: show;width: 100%;">\n\t\t    <thead style="background-color: #fafafa;color: #000;text-align: left;vertical-align: bottom;border-bottom: 1px solid #eaeded">\n\t\t        <tr>\n\t\t            <th style="padding: 0.5em 1em;">Logical ID</th>\n\t\t            <th style="padding: 0.5em 1em;">Phisical ID</th>\n\t\t            <th style="padding: 0.5em 1em;">Type</th>\n\t\t\t\t\t<th style="padding: 0.5em 1em;">Status</th>\n\t\t\t\t\t<th style="padding: 0.5em 1em;">Status Reason</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t\t\t{{#resources}}\n\t\t        <tr>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.LogicalResourceId}}</td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.PhysicalResourceId}}</td>\n\t\t            <td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ResourceType}}</td>\n\t\t\t\t\t<td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">{{.ResourceStatus}}</td>\n\t\t\t\t\t<td style="padding: 0.5em 1em;border-width: 0 0 1px 0;border-bottom: 1px solid #eaeded;">&nbsp;</td>\n\t\t        </tr>\n\t\t\t\t{{/resources}}\n\n\t\t    </tbody>\n\t\t</table>\n\n\t',
	list_resources: function list_resources() {
		var ractive = this;
		ractive.set('resources', []);

		var params = {
			StackName: this.get('StackName')
		};
		cloudformation.listStackResources(params, function (err, data) {
			if (err) return alert('get stack resources failed');

			ractive.set('resources', data.StackResourceSummaries);
		});
	},
	oninit: function oninit() {
		var ractive = this;

		var params = {
			StackName: this.get('StackName')
		};

		this.list_resources();
	}
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\n\t\t<div style=\"padding: 15px;\">Events Not Implemented</div>\n\t"
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\n\t\t<div style=\"padding: 15px;\">Exports Not Implemented</div>\n\t"
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;
exports.default = Ractive.extend({
	template: '\n\n\t\t\t{{#if page === \'upload\'}}\n\t\t\t\t<h3>Create Stack</h3>\n\t\t\t\t<div style="box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color:#fff;max-width: 800px;margin-bottom: 15px;">\n\n\n\t\t\t\t\t<div style="font-size: 18px;line-height: 30px;background-color: #fafafa;border-bottom: 1px solid #eaeded;padding: 15px 30px;font-weight: 700;color: #000;">Specify template</div>\n\t\t\t\t\t<div style="padding: 30px;">\n\n\t\t\t\t\t\t\t{{#if err}}\n\t\t\t\t\t\t\t\t<div class="err" style=\'color: #dc3636;background-color: #e69ca6;border: 1px solid #ec6b6b;border-radius: 3px;padding: 6px;\'>{{ err.message || "Template parse failed" }}</div>\n\t\t\t\t\t\t\t{{/if}}\n\n\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h4>Specify template</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<li>\u2705 .yaml or .json\n\t\t\t\t\t\t\t\t<li>\u2705 !Join, !Sub, !Select, !Split\n\t\t\t\t\t\t\t\t<li>\u2705 !Base64, !GetAZs, !FindInMap\n\t\t\t\t\t\t\t\t<li>\u2705 !Ref to in-template and pseudo parameters\n\t\t\t\t\t\t\t\t<li>\u274C !Ref to another resource\n\t\t\t\t\t\t\t\t<li>\u274C !ImportValue, !GetAtt !Transform, !Cidr\n\t\t\t\t\t\t\t\t<li>\u274C !If, !And, !Equals, !Not, !Or\n\t\t\t\t\t\t\t\t<li>\u2705 partially supported <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html" target="_blank">AWS::DynamoDB::Table</a>\n\t\t\t\t\t\t\t\t<li>\u2705 partially supported <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html" target="_blank">AWS::S3::Bucket</a>\n\t\t\t\t\t\t\t\t<li>\u274C all other resource types are created as decoy\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<a class="btn btn-sm btn-default"  on-click=\'upload\' >Upload Template</a>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style="max-width: 800px;">\n\t\t\t\t\t<a class="btn btn-sm btn-primary {{#if newstack.TemplateBody === null }}disabled{{/if}} pull-right" on-click="goto-parameters">Next</a>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{#if page === \'parameters\'}}\n\t\t\t\t<h3>Specify stack details</h3>\n\n\t\t\t\t<div style="box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color:#fff;max-width: 800px;margin-bottom: 15px;">\n\t\t\t\t\t<div style="font-size: 18px;line-height: 30px;background-color: #fafafa;border-bottom: 1px solid #eaeded;padding: 15px 30px;font-weight: 700;color: #000;">Stack name</div>\n\t\t\t\t\t<div style="padding: 30px;">\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div>Stack name</div>\n\t\t\t\t\t\t<input type="text" value="{{newstack.StackName}}" style="width: 100%;padding: 10px;"/>\n\t\t\t\t\t\t<small>Stack name can include letters (A-Z and a-z), numbers (0-9), and dashes (-).</small>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style="box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color:#fff;max-width: 800px;margin-bottom: 15px;">\n\t\t\t\t\t<div style="font-size: 18px;line-height: 30px;background-color: #fafafa;border-bottom: 1px solid #eaeded;padding: 15px 30px;font-weight: 700;color: #000;">Parameters</div>\n\t\t\t\t\t<div style="padding: 30px;">\n\n\n\t\t\t\t{{#newstack.Parameters}}\n\t\t\t\t<br>\n\t\t\t\t<div>{{.ParameterKey}}</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t{{#if .ParameterConstraints.AllowedValues}}\n\t\t\t\t\t\t<select value="{{.ParameterValue}}" style="width: 100%;padding: 10px;height: 37px;">\n\t\t\t\t\t\t\t{{#.ParameterConstraints.AllowedValues}}\n\t\t\t\t\t\t\t<option value="{{.}}">{{.}}</option>\n\t\t\t\t\t\t\t{{/.ParameterConstraints.AllowedValues}}\n\t\t\t\t\t\t</select>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<input type="text" value="{{.ParameterValue}}" style="width: 100%;padding: 10px;">\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t\t{{/newstack.Parameters}}\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div style="max-width: 800px;">\n\t\t\t\t\t<a class="btn btn-sm btn-primary {{#if newstack.StackName === \'\' }}disabled{{/if}} pull-right" on-click="goto-confirm">Next</a>\n\t\t\t\t</div>\n\n\t\t\t{{/if}}\n\n\n\t\t\t{{#if page === \'confirm\'}}\n\t\t\t\t<div style="position: absolute;top: 0px;left: 0px;right:0px;overflow: auto;box-shadow: 0 1px 1px 0 rgba(0,28,36,.5);border-top: 1px solid #eaeded;background-color:#fff;">\n\t\t\t\t\t<div style="padding: 30px;">\n\n\t\t\t\t\t\t<div class="err" style=\'{{#if !err}}visibility:hidden;{{/if}}color: #dc3636;background-color: #e69ca6;border: 1px solid #ec6b6b;border-radius: 3px;padding: 6px;margin-bottom: 10px;\'>{{ err.message || "Create failed" }}</div>\n\n\t\t\t\t\t\t<a class="btn btn-sm btn-primary" on-click="create">Create</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t',
	data: function data() {
		return {
			page: 'upload',
			newstack: {
				StackName: '',
				TemplateBody: null
			}

		};
	},

	pickafile: function pickafile(cb) {
		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		//element.setAttribute('accept', "text/csv");
		element.setAttribute('style', "display: none;");
		element.addEventListener('change', function (e) {

			if (element.files.length > 1) return alert('Please upload one file at a time');

			cb(null, element.files[0]);
		});

		element.click();
	},


	oninit: function oninit() {
		var ractive = this;

		ractive.on('upload', function (e) {
			ractive.set('err');
			ractive.pickafile(function (err, file) {
				console.log('selected', file);
				var reader = new FileReader();
				reader.onload = function (e) {
					ractive.set('newstack.StackName', file.name.split('.yaml').join('').split('.json').join(''));
					ractive.set('newstack.TemplateBody', reader.result);
				};
				reader.readAsBinaryString(file);
			});
		});
		ractive.on('goto-parameters', function () {

			var params = {
				TemplateBody: ractive.get('newstack.TemplateBody')
			};
			cloudformation.getTemplateSummary(params, function (err, data) {
				if (err) {
					ractive.set('err', err);
					console.log("getTemplateSummary failed", typeof err === 'undefined' ? 'undefined' : _typeof(err), JSON.stringify(err), err.message);
					return;
				}

				ractive.set('newstack.Parameters', data.Parameters.map(function (template_parameter) {
					if (template_parameter.DefaultValue) template_parameter.ParameterValue = template_parameter.DefaultValue;
					return template_parameter;
				}));
				ractive.set('newstack.ResourceTypes', data.ResourceTypes);

				//console.log(err,data)
				ractive.set('page', 'parameters');
			});
		});
		ractive.on('goto-confirm', function () {
			ractive.set('err');
			ractive.set('page', 'confirm');
		});
		ractive.on('create', function () {

			ractive.set('err');

			var params = ractive.get('newstack');
			params.Parameters = params.Parameters.map(function (p) {
				return {
					ParameterKey: p.ParameterKey,
					ParameterValue: p.ParameterValue
				};
			});
			cloudformation.createStack(params, function (err, data) {

				if (err) {
					ractive.set('err', err);
					return;
				}

				setTimeout(function () {
					ractive.root.findComponent('cftabs').command('stacklist');
				}, 1500);
			});
		});
	}
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var icon_refresh = Ractive.extend({
	template: '\n\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t viewBox="0 0 477.867 477.867" xml:space="preserve">\n\t<g>\n\t\t<g>\n\t\t\t<path d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479\n\t\t\t\tc-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933\n\t\t\t\tc0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207\n\t\t\t\tc-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4\n\t\t\t\tC426.667,7.641,419.026,0,409.6,0z"/>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696\n\t\t\t\tc-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606\n\t\t\t\tc-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4\n\t\t\t\tc0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068\n\t\t\t\tc40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>\n\t\t</g>\n\t</g>\n\t</svg>\n\t'
});

module.exports = {
	'icon-refresh': icon_refresh
};

/***/ })
/******/ ])["default"];
});