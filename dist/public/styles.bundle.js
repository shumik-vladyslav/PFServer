webpackJsonp([2,4],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(311)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\nhtml, body, material-app, md-sidenav-container, .my-content {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n/*Navigation*/\n.nav > li > a {\n  color: $nav-text-color;\n  font-weight: 600;\n  padding: 14px 20px 14px 25px;\n}\n\n.nav.navbar-right > li > a {\n  color: #999c9e;\n}\n\n.nav > li.active > a {\n  color: #ffffff;\n}\n\n.navbar-default .nav > li > a:hover, .navbar-default .nav > li > a:focus {\n  background-color: darken($nav-bg, 3%);\n  color: white;\n}\n\n.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n  background: #fff;\n}\n\n.nav.navbar-top-links > li > a:hover, .nav.navbar-top-links > li > a:focus {\n  background-color: transparent;\n}\n\n.nav > li > a i {\n  margin-right: 6px;\n}\n\n.navbar {\n  border: 0;\n}\n\n.navbar-default {\n  background-color: transparent;\n  border-color: $nav-bg;\n}\n\n.navbar-top-links li {\n  display: inline-block;\n}\n\n.navbar-top-links li:last-child {\n  margin-right: 40px;\n}\n\n.body-small .navbar-top-links li:last-child {\n  margin-right: 0;\n}\n\n.navbar-top-links li a {\n  padding: 20px 10px;\n  min-height: 50px;\n}\n\n.dropdown-menu {\n  border: medium none;\n  border-radius: 3px;\n  box-shadow: 0 0 3px rgba(86, 96, 117, 0.7);\n  display: none;\n  float: left;\n  font-size: 12px;\n  left: 0;\n  list-style: none outside none;\n  padding: 0;\n  position: absolute;\n  text-shadow: none;\n  top: 100%;\n  z-index: 1000;\n}\n\n.dropdown-menu > li > a {\n  border-radius: 3px;\n  color: inherit;\n  line-height: 25px;\n  margin: 4px;\n  text-align: left;\n  font-weight: normal;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:focus,\n.dropdown-menu > .active > a:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: $navy;\n  outline: 0;\n}\n\n.dropdown-menu > li > a.font-bold {\n  font-weight: 600;\n}\n\n.navbar-top-links .dropdown-menu li {\n  display: block;\n}\n\n.navbar-top-links .dropdown-menu li:last-child {\n  margin-right: 0;\n}\n\n.navbar-top-links .dropdown-menu li a {\n  padding: 3px 20px;\n  min-height: 0;\n}\n\n.navbar-top-links .dropdown-menu li a div {\n  white-space: normal;\n}\n\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n  width: 310px;\n  min-width: 0;\n}\n\n.navbar-top-links .dropdown-messages {\n  margin-left: 5px;\n}\n\n.navbar-top-links .dropdown-tasks {\n  margin-left: -59px;\n}\n\n.navbar-top-links .dropdown-alerts {\n  margin-left: -123px;\n}\n\n.navbar-top-links .dropdown-user {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-messages, .dropdown-alerts {\n  padding: 10px 10px 10px 10px;\n}\n\n.dropdown-messages li a, .dropdown-alerts li a {\n  font-size: 12px;\n}\n\n.dropdown-messages li em, .dropdown-alerts li em {\n  font-size: 10px;\n}\n\n.nav.navbar-top-links .dropdown-alerts a {\n  font-size: 12px;\n}\n\n.nav-header {\n  padding: 33px 25px;\n  background-color: $nav-bg;\n  background-image: $nav-profile-pattern;\n\n}\n\n.pace-done .nav-header {\n  transition: all 0.4s;\n}\n\nul.nav-second-level {\n  background: darken($nav-bg, 3%);\n}\n\n.nav > li.active {\n  border-left: 4px solid darken($navy, 2%);\n  background: darken($nav-bg, 3%);\n}\n\n.nav.nav-second-level > li.active {\n  border: none;\n}\n\n.nav.nav-second-level.collapse[style] {\n  height: auto !important;\n}\n\n.nav-header a {\n  color: #DFE4ED;\n}\n\n.nav-header .text-muted {\n  color: #8095a8;\n}\n\n.minimalize-styl-2 {\n  padding: 4px 12px;\n  margin: 14px 5px 5px 20px;\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-form-custom {\n  float: left;\n  height: 50px;\n  padding: 0;\n  width: 200px;\n  display: block;\n}\n\n.navbar-form-custom .form-group {\n  margin-bottom: 0;\n}\n\n.nav.navbar-top-links a {\n  font-size: 14px;\n}\n\n.navbar-form-custom .form-control {\n  background: none repeat scroll 0 0 rgba(0, 0, 0, 0);\n  border: medium none;\n  font-size: 14px;\n  height: 60px;\n  margin: 0;\n  z-index: 2000;\n}\n\n.count-info .label {\n  line-height: 12px;\n  padding: 2px 5px;\n  position: absolute;\n  right: 6px;\n  top: 12px;\n}\n\n.arrow {\n  float: right;\n}\n\n.fa.arrow:before {\n  content: \"\\F104\";\n}\n\n.active > a > .fa.arrow:before {\n  content: \"\\F107\";\n}\n\n.nav-second-level li,\n.nav-third-level li {\n  border-bottom: none !important;\n}\n\n.nav-second-level li a {\n  padding: 7px 10px 7px 10px;\n  padding-left: 52px;\n}\n\n.nav-third-level li a {\n  padding-left: 62px;\n}\n\n.nav-second-level li:last-child {\n  margin-bottom: 10px;\n}\n\nbody:not(.fixed-sidebar):not(.canvas-menu).mini-navbar .nav li:hover > .nav-second-level,\n.mini-navbar .nav li:focus > .nav-second-level {\n  display: block;\n  border-radius: 0 2px 2px 0;\n  min-width: 140px;\n  height: auto;\n}\n\nbody.mini-navbar .navbar-default .nav > li > .nav-second-level li a {\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.fixed-nav .slimScrollDiv #side-menu {\n  padding-bottom: 60px;\n}\n\n.mini-navbar .nav-second-level li a {\n  padding: 10px 10px 10px 15px;\n}\n\n.mini-navbar .nav .nav-second-level {\n  position: absolute;\n  left: 70px;\n  top: 0;\n  background-color: $nav-bg;\n  padding: 10px 10px 10px 10px;\n  font-size: 12px;\n}\n\n.canvas-menu.mini-navbar .nav-second-level {\n  background: darken($nav-bg, 3%);\n}\n\n.mini-navbar li.active .nav-second-level {\n  left: 65px\n}\n\n.navbar-default .special_link a {\n  background: $navy;\n  color: white;\n}\n\n.navbar-default .special_link a:hover {\n  background: #17987e !important;\n  color: white;\n}\n\n.navbar-default .special_link a span.label {\n  background: #fff;\n  color: $navy;\n}\n\n.navbar-default .landing_link a {\n  background: lighten($navy, 3%);\n  color: white;\n}\n\n.navbar-default .landing_link a:hover {\n  background: $navy !important;\n  color: white;\n}\n\n.navbar-default .landing_link a span.label {\n  background: #fff;\n  color: lighten($navy, 3%);\n}\n\n.logo-element {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n  color: white;\n  display: none;\n  padding: 18px 0;\n}\n\n.pace-done .navbar-static-side, .pace-done .nav-header, .pace-done li.active, .pace-done #page-wrapper, .pace-done .footer {\n  transition: all 0.4s;\n}\n\n.navbar-fixed-top {\n  background: #fff;\n  transition-duration: 0.4s;\n  border-bottom: 1px solid #e7eaec !important;\n  z-index: 2030;\n}\n\n.navbar-fixed-top, .navbar-static-top {\n  background: $gray;\n}\n\n.fixed-nav #wrapper {\n  margin-top: 0;\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  background: none;\n  border-color: #DDDDDD #DDDDDD rgba(0, 0, 0, 0);\n  border-bottom: $gray;\n  -o-border-image: none;\n     border-image: none;\n  border-style: solid;\n  border-width: 1px;\n  color: #555555;\n  cursor: default;\n}\n\n.nav.nav-tabs li {\n  background: none;\n  border: none;\n}\n\nbody.fixed-nav #wrapper .navbar-static-side,\nbody.fixed-nav #wrapper #page-wrapper {\n  margin-top: 60px;\n}\n\nbody.top-navigation.fixed-nav #wrapper #page-wrapper {\n  margin-top: 0;\n}\n\nbody.fixed-nav.fixed-nav-basic .navbar-fixed-top {\n  left: 220px;\n}\n\nbody.fixed-nav.fixed-nav-basic.mini-navbar .navbar-fixed-top {\n  left: 70px;\n}\n\nbody.fixed-nav.fixed-nav-basic.fixed-sidebar.mini-navbar .navbar-fixed-top {\n  left: 0;\n}\n\nbody.fixed-nav.fixed-nav-basic #wrapper .navbar-static-side {\n  margin-top: 0;\n}\n\nbody.fixed-nav.fixed-nav-basic.body-small .navbar-fixed-top {\n  left: 0;\n}\n\nbody.fixed-nav.fixed-nav-basic.fixed-sidebar.mini-navbar.body-small .navbar-fixed-top {\n  left: 220px;\n}\n\n.fixed-nav .minimalize-styl-2 {\n  margin: 14px 5px 5px 15px;\n}\n\n.body-small .navbar-fixed-top {\n  margin-left: 0;\n}\n\nbody.mini-navbar .navbar-static-side {\n  width: 70px;\n}\n\nbody.mini-navbar .profile-element, body.mini-navbar .nav-label, body.mini-navbar .navbar-default .nav li a span {\n  display: none;\n}\n\nbody.canvas-menu .profile-element {\n  display: block;\n}\n\nbody:not(.fixed-sidebar):not(.canvas-menu).mini-navbar .nav-second-level {\n  display: none;\n}\n\nbody.mini-navbar .navbar-default .nav > li > a {\n  font-size: 16px;\n}\n\nbody.mini-navbar .logo-element {\n  display: block;\n}\n\nbody.canvas-menu .logo-element {\n  display: none;\n}\n\nbody.mini-navbar .nav-header {\n  padding: 0;\n  background-color: $navy;\n}\n\nbody.canvas-menu .nav-header {\n  padding: 33px 25px;\n}\n\nbody.mini-navbar #page-wrapper {\n  margin: 0 0 0 70px;\n}\n\nbody.fixed-sidebar.mini-navbar .footer,\nbody.canvas-menu.mini-navbar .footer {\n  margin: 0 0 0 0 !important;\n}\n\nbody.canvas-menu.mini-navbar #page-wrapper,\nbody.canvas-menu.mini-navbar .footer {\n  margin: 0 0 0 0;\n}\n\nbody.fixed-sidebar .navbar-static-side,\nbody.canvas-menu .navbar-static-side {\n  position: fixed;\n  width: $sidebar-width;\n  z-index: 2001;\n  height: 100%;\n}\n\nbody.fixed-sidebar.mini-navbar .navbar-static-side {\n  width: 0;\n}\n\nbody.fixed-sidebar.mini-navbar #page-wrapper {\n  margin: 0 0 0 0;\n}\n\nbody.body-small.fixed-sidebar.mini-navbar #page-wrapper {\n  margin: 0 0 0 $sidebar-width;\n}\n\nbody.body-small.fixed-sidebar.mini-navbar .navbar-static-side {\n  width: $sidebar-width;\n}\n\n.fixed-sidebar.mini-navbar .nav li:focus > .nav-second-level,\n.canvas-menu.mini-navbar .nav li:focus > .nav-second-level {\n  display: block;\n  height: auto;\n}\n\nbody.fixed-sidebar.mini-navbar .navbar-default .nav > li > .nav-second-level li a {\n  font-size: 12px;\n  border-radius: 3px;\n}\n\nbody.canvas-menu.mini-navbar .navbar-default .nav > li > .nav-second-level li a {\n  font-size: 13px;\n  border-radius: 3px;\n}\n\n.fixed-sidebar.mini-navbar .nav-second-level li a,\n.canvas-menu.mini-navbar .nav-second-level li a {\n  padding: 10px 10px 10px 15px;\n}\n\n.fixed-sidebar.mini-navbar .nav-second-level,\n.canvas-menu.mini-navbar .nav-second-level {\n  position: relative;\n  padding: 0;\n  font-size: 13px;\n}\n\n.fixed-sidebar.mini-navbar li.active .nav-second-level,\n.canvas-menu.mini-navbar li.active .nav-second-level {\n  left: 0\n}\n\nbody.fixed-sidebar.mini-navbar .navbar-default .nav > li > a,\nbody.canvas-menu.mini-navbar .navbar-default .nav > li > a {\n  font-size: 13px;\n}\n\nbody.fixed-sidebar.mini-navbar .nav-label,\nbody.fixed-sidebar.mini-navbar .navbar-default .nav li a span,\nbody.canvas-menu.mini-navbar .nav-label,\nbody.canvas-menu.mini-navbar .navbar-default .nav li a span {\n  display: inline;\n}\n\nbody.canvas-menu.mini-navbar .navbar-default .nav li .profile-element a span {\n  display: block;\n}\n\n.canvas-menu.mini-navbar .nav-second-level li a,\n.fixed-sidebar.mini-navbar .nav-second-level li a {\n  padding: 7px 10px 7px 52px\n}\n\n.fixed-sidebar.mini-navbar .nav-second-level,\n.canvas-menu.mini-navbar .nav-second-level {\n  left: 0\n}\n\nbody.canvas-menu nav.navbar-static-side {\n  z-index: 2001;\n  background: #2f4050;\n  height: 100%;\n  position: fixed;\n  display: none;\n}\n\nbody.canvas-menu.mini-navbar nav.navbar-static-side {\n  display: block;\n  width: 220px;\n}\n/*Navigation*/\n\n/*TopNavBar*/\n.top-navigation #page-wrapper {\n  margin-left: 0;\n}\n\n.top-navigation .navbar-nav .dropdown-menu > .active > a {\n  background: white;\n  color: $navy;\n  font-weight: bold;\n}\n\n.white-bg .navbar-fixed-top, .white-bg .navbar-static-top {\n  background: #fff;\n}\n\n.top-navigation .navbar {\n  margin-bottom: 0;\n}\n\n.top-navigation .nav > li > a {\n  padding: 15px 20px;\n  color: #676a6c;\n}\n\n.top-navigation .nav > li a:hover, .top-navigation .nav > li a:focus {\n  background: #fff;\n  color: $navy;\n}\n\n.top-navigation .navbar .nav > li.active {\n  background: #fff;\n  border: none;\n}\n\n.top-navigation .nav > li.active > a {\n  color: $navy;\n}\n\n.top-navigation .navbar-right {\n  margin-right: 10px;\n}\n\n.top-navigation .navbar-nav .dropdown-menu {\n  box-shadow: none;\n  border: 1px solid #e7eaec;\n}\n\n.top-navigation .dropdown-menu > li > a {\n  margin: 0;\n  padding: 7px 20px;\n}\n\n.navbar .dropdown-menu {\n  margin-top: 0;\n}\n\n.top-navigation .navbar-brand {\n  background: $navy;\n  color: #fff;\n  padding: 15px 25px;\n}\n\n.top-navigation .navbar-top-links li:last-child {\n  margin-right: 0;\n}\n\n.top-navigation.mini-navbar #page-wrapper,\n.top-navigation.body-small.fixed-sidebar.mini-navbar #page-wrapper,\n.mini-navbar .top-navigation #page-wrapper,\n.body-small.fixed-sidebar.mini-navbar .top-navigation #page-wrapper,\n.canvas-menu #page-wrapper {\n  margin: 0;\n}\n\n.top-navigation.fixed-nav #wrapper, .fixed-nav #wrapper.top-navigation {\n  margin-top: 50px;\n}\n\n.top-navigation .footer.fixed {\n  margin-left: 0 !important;\n}\n\n.top-navigation .wrapper.wrapper-content {\n  padding: 40px;\n}\n\n.top-navigation.body-small .wrapper.wrapper-content, .body-small .top-navigation .wrapper.wrapper-content {\n  padding: 40px 0 40px 0;\n}\n\n.navbar-toggle {\n  background-color: $navy;\n  color: #fff;\n  padding: 6px 12px;\n  font-size: 14px;\n}\n\n.top-navigation .navbar-nav .open .dropdown-menu > li > a, .top-navigation .navbar-nav .open .dropdown-menu .dropdown-header {\n  padding: 10px 15px 10px 20px;\n}\n\n@media (max-width: 768px) {\n  .top-navigation .navbar-header {\n    display: block;\n    float: none;\n  }\n}\n\n.menu-visible-lg, .menu-visible-md {\n  display: none !important;\n}\n\n@media (min-width: 1200px) {\n  .menu-visible-lg {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .menu-visible-md {\n    display: block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .menu-visible-md {\n    display: block !important;\n  }\n\n  .menu-visible-lg {\n    display: block !important;\n  }\n}\n/*TopNavBAR*/\n\n\n/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\n\nbody {\n  overflow-x: hidden;\n}\n\n#wrapper {\n  padding-left: 0;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled {\n  padding-left: 250px;\n}\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 220px;\n  width: 0;\n  height: 100%;\n  margin-left: -220px;\n  overflow-y: auto;\n  background: #563d7c;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 220px;\n}\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -220px;\n}\n\n\n/* Sidebar Styles */\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 220px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: white;\n}\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav>.sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n\n.sidebar-nav>.sidebar-brand a {\n  color: white;\n}\n\n.sidebar-nav>.sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n\n@media(min-width:768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n  #wrapper.toggled {\n    padding-left: 250px;\n  }\n  #sidebar-wrapper {\n    width: 0;\n  }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 220px;\n  }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative;\n  }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n  }\n}\n\n/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\n\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n/*\n * Card component\n */\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 10px auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ })

},[315]);
//# sourceMappingURL=styles.bundle.js.map