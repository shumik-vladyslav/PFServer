webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-color: #563d7c;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n  background-color: #563d7c;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 124;


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(136);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    api_prefix: 'http://www.productive-families.com/',
    default_dish_img_url: 'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png',
    default_human_img_url: 'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // $('#wrapper').toggleClass('toggled')
        setTimeout(function () { return $('#wrapper').addClass('toggled'); }, 500);
        $('#wrapper').addClass('toggled');
        $('#menu-toggle').click(function (e) {
            e.preventDefault();
            $('#wrapper').toggleClass('toggled');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(263),
        styles: [__webpack_require__(190)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chef_chef_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dish_dish_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_client_client_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chef_chef_details_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dish_dish_details_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forgotpass_forgotpass_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_forgotpass_enter_email_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_client_client_datails_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_genreq_genreq_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_genreq_gen_req_details_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_navigation_navigation_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_chef_chef_component__["a" /* ChefComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dish_dish_component__["a" /* DishComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_chef_chef_details_component__["a" /* ChefDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dish_dish_details_component__["a" /* DishDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_forgotpass_forgotpass_component__["a" /* ForgotpassComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_forgotpass_enter_email_component__["a" /* EnterEmailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_client_client_datails_component__["a" /* ClientDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_genreq_genreq_component__["a" /* GenreqComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_genreq_gen_req_details_component__["a" /* GenReqDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_navigation_navigation_component__["a" /* NavigationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chef_chef_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dish_dish_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chef_chef_details_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dish_dish_details_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_forgotpass_forgotpass_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_forgotpass_enter_email_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_client_client_datails_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_genreq_genreq_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_genreq_gen_req_details_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });












var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_8__components_forgotpass_enter_email_component__["a" /* EnterEmailComponent */] },
    { path: 'newpass', component: __WEBPACK_IMPORTED_MODULE_7__components_forgotpass_forgotpass_component__["a" /* ForgotpassComponent */] },
    { path: 'chefs', component: __WEBPACK_IMPORTED_MODULE_0__components_chef_chef_component__["a" /* ChefComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'chefs/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_chef_chef_details_component__["a" /* ChefDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__["a" /* ClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'clients/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_client_client_datails_component__["a" /* ClientDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'chefs/:id/dishes', component: __WEBPACK_IMPORTED_MODULE_1__components_dish_dish_component__["a" /* DishComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'dishes/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_dish_dish_details_component__["a" /* DishDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'genreqs', component: __WEBPACK_IMPORTED_MODULE_10__components_genreq_genreq_component__["a" /* GenreqComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'genreqs/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_genreq_gen_req_details_component__["a" /* GenReqDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: 'login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(270),
        styles: [
            "\n    li.active {\n    border-left: 5px solid;\n    border-color: rgb(240, 173, 78);\n    background: rgba(0, 0, 0, 0.26);\n    }\n    "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], NavigationComponent);

/* unused harmony default export */ var _unused_webpack_default_export = NavigationComponent;
var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-color: #563d7c;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n  background-color: #563d7c;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"toggled\">\n  <!--<img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />-->\n  <app-navigation></app-navigation>\n\n  <!-- Page Content -->\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"card\">\n      <router-outlet></router-outlet>\n    </div>\n    </div>\n  </div>\n  <!-- /#page-content-wrapper -->\n</div>\n<!-- /#wrapper -->\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #CreateChef=\"ngForm\" (ngSubmit)=\"onSave(CreateChef)\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Chef</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div >\n            <input name= \"id\" ngModel hidden>\n            <input name= \"createdby\" ngModel hidden>\n            <input name= \"creation_time\" ngModel hidden>\n            <input name= \"last_modify_by\" ngModel hidden>\n            <input name= \"last_modify_time\" ngModel hidden>\n            <input name= \"password_lastmodify\" ngModel hidden>\n            <input name= \"images_iid\" ngModel hidden>\n            <input name= \"user_uid\" ngModel hidden>\n            <input name= \"usertype_id\" ngModel hidden>\n            <input name= \"image_path\" ngModel hidden>\n            <input name= \"block\" ngModel hidden>\n            <input name= \"blockreason\" ngModel hidden>\n\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <img id=\"preview\" src=\"#\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n              </div>\n            </div>\n\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Image</label>\n                <input name= \"image\" type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".png,.jpg,.webx\" ngModel>\n              </div>\n            </div>\n\n            <!--NAME-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" required  #name=\"ngModel\" ngModel>\n                <!--VALIDATION-->\n                <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!name.errors.required\">\n                    Name is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--NAME-->\n\n            <!--EMAIL-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Email</label>\n                <input type=\"text\" name=\"email\" class=\"form-control\" required ngModel #email=\"ngModel\">\n                <!--VALIDATION-->\n                <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\"\n                     pattern='^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'>\n                  <div [hidden]=\"!email.errors.required\">\n                    Email is required\n                  </div>\n                  <div [hidden]=\"!email.errors.pattern\">\n                    Format is incorrect\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--EMAIL-->\n\n            <!--IS ACTIVE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Is Active</label>\n                <input type=\"checkbox\" name=\"is_active\" ngModel>\n              </div>\n            </div>\n            <!--IS ACTIVE-->\n\n            <!--PHONE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Phone</label>\n                <input type=\"text\" name=\"phone_number\" class=\"form-control\" required ngModel #phone=\"ngModel\">\n                <!--VALIDATION-->\n                <div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!phone.errors.required\">\n                    Phone is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--PHONE-->\n\n            <!--PASSWORD-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Password</label>\n                <input type=\"text\" name=\"password\" class=\"form-control\" required ngModel #pass=\"ngModel\">\n                <!--VALIDATION-->\n                <div *ngIf=\"pass.errors && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!pass.errors.required\">\n                    Password is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--PASSWORD-->\n\n            <!--DESCRIPTION-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Description</label>\n                <input type=\"text\" name=\"description\" class=\"form-control\" ngModel>\n              </div>\n            </div>\n            <!--DESCRIPTION-->\n\n            <!--AVERAGE_RATING-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Average rating</label>\n                <input type=\"number\" name=\"average_rating\" class=\"form-control\" required ngModel #avrat=\"ngModel\">\n                <!--VALIDATION-->\n                <div *ngIf=\"avrat.errors && (avrat.dirty || avrat.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!avrat.errors.required\">\n                    Average rating is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--AVERAGE_RATING-->\n\n            <!--LAT-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Latitude</label>\n                <input type=\"number\" name=\"lat\" class=\"form-control\" required ngModel #lat=\"ngModel\">\n                <!--VALIDATION-->\n                <div *ngIf=\"lat.errors && (lat.dirty || lat.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!lat.errors.required\">\n                    Latitude rating is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--LAT-->\n\n            <!--LON-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Longitude</label>\n                <input type=\"number\" name=\"lon\" class=\"form-control\" required ngModel #lon=\"ngModel\">\n                <!--VALIDATION-->\n                <div *ngIf=\"lon.errors && (lon.dirty || lon.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!lon.errors.required\">\n                    Longitude rating is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--LON-->\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" href=\"#create-form\" data-toggle=\"modal\" class=\"btn btn-warning\" [disabled]=\"CreateChef.invalid\">Save</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewChef()\">Create Chef</button>\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-sm-8\"></div>\n  <div class=\"col-sm-4\"><input #gb type=\"text\" placeholder=\"Filter\" class=\"form-control\"></div>\n</div>\n\n<p-dataTable [value]=\"chefsList\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\">\n\n  <p-column header=\"Image\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <img id=\"preview\" [src]=\"o.image_path?o.image_path:'#'\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n    </ng-template>\n  </p-column>\n  <p-column field=\"id\" header=\"Id\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"average_rating\" header=\"Average rating\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"is_active\" header=\"Is Active\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"description\" header=\"Description\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"name\" header=\"Name\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"email\" header=\"Email\" [sortable]=\"true\"> </p-column>\n\n  <p-column header=\"Actions\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/chefs/{{o.id}}/dishes/\">Dishes</a>\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/chefs/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateChef)\">Edit</button>\n      <button *ngIf=\"!o.block\" class=\"btn btn-sm btn-danger\" href=\"#block-form\" data-toggle=\"modal\" (click)=\"blockId=o.user_uid\">Block</button>\n      <button *ngIf=\"o.block\" class=\"btn btn-sm btn-danger\" (click)=\"onUnblock(o.user_uid)\">Unblock</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id, o.user_uid)\">Delete</button>\n    </ng-template>\n  </p-column>\n</p-dataTable>\n\n<div id=\"block-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #BlockForm=\"ngForm\" (ngSubmit)=\"onBlock(blockId,BlockForm)\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Block Chef</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <!--NAME-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Block reason</label>\n                <input type=\"text\" name=\"blockreason\" class=\"form-control\" required  #reason=\"ngModel\" ngModel>\n                <!--VALIDATION-->\n                <div *ngIf=\"reason.errors && (reason.dirty || reason.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!reason.errors.required\">\n                    Name is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--NAME-->\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" href=\"#block-form\" data-toggle=\"modal\" class=\"btn btn-danger\" [disabled]=\"BlockForm.invalid\">Block</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #CreateClient=\"ngForm\" (ngSubmit)=\"onSave(CreateClient)\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Client</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <input name= \"id\" ngModel hidden>\n          <input name= \"createdby\" ngModel hidden>\n          <input name= \"creation_time\" ngModel hidden>\n          <input name= \"last_modify_by\" ngModel hidden>\n          <input name= \"last_modify_time\" ngModel hidden>\n          <input name= \"password_lastmodify\" ngModel hidden>\n          <input name= \"images_iid\" ngModel hidden>\n          <input name= \"usertype_id\" ngModel hidden>\n          <input name= \"image_path\" ngModel hidden>\n          <input name= \"block\" ngModel hidden>\n          <input name= \"blockreason\" ngModel hidden>\n\n            <div >\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <img id=\"preview\" src=\"#\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Image</label>\n                  <input name= \"image\" type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".png,.jpg,.webx\" ngModel>\n                </div>\n              </div>\n              <!--NAME-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" class=\"form-control\" required ngModel #name=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!name.errors.required\">\n                      Name is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--NAME-->\n\n              <!--EMAIL-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email</label>\n                  <input type=\"text\" name=\"email\" class=\"form-control\" required ngModel #email=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\"\n                       pattern='^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'>\n                    <div [hidden]=\"!email.errors.required\">\n                      Email is required\n                    </div>\n                    <div [hidden]=\"!email.errors.pattern\">\n                      Format is incorrect\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--EMAIL-->\n\n              <!--PHONE-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Phone</label>\n                  <input type=\"text\" name=\"phone_number\" class=\"form-control\" required ngModel #phone=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!phone.errors.required\">\n                      Phone is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--PHONE-->\n\n              <!--PASSWORD-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Password</label>\n                  <input type=\"text\" name=\"password\" class=\"form-control\" required ngModel #pass=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"pass.errors && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!pass.errors.required\">\n                      Password is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--PASSWORD-->\n\n              <!--LAT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Latitude</label>\n                  <input type=\"number\" name=\"lat\" class=\"form-control\" required ngModel #lat=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"lat.errors && (lat.dirty || lat.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!lat.errors.required\">\n                      Latitude is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--LAT-->\n\n              <!--LON-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Longitude</label>\n                  <input type=\"number\" name=\"lon\" class=\"form-control\" required ngModel #lon=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"lon.errors && (lon.dirty || lon.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!lon.errors.required\">\n                      Longitude is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--LON-->\n            </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" href=\"#create-form\" data-toggle=\"modal\" class=\"btn btn-warning\" [disabled]=\"CreateClient.invalid\">Save</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewClient(CreateClient)\">Create Client</button>\n<hr>\n<!--<table class=\"table\">-->\n  <!--<thead>-->\n  <!--<tr>-->\n    <!--<th>Image</th>-->\n    <!--<th>Id</th>-->\n    <!--<th>Name</th>-->\n    <!--<th>Email</th>-->\n    <!--<th>Phone</th>-->\n    <!--<th>Actions</th>-->\n  <!--</tr>-->\n  <!--</thead>-->\n  <!--<tbody>-->\n  <!--<tr *ngFor=\"let o of clientsList;let i=index\">-->\n    <!--<td><img id=\"preview\" [src]=\"o.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></td>-->\n    <!--<td>{{o.id}}</td>-->\n    <!--<td>{{o.name}}</td>-->\n    <!--<td>{{o.email}}</td>-->\n    <!--<td>{{o.phone_number}}</td>-->\n    <!--<td>-->\n      <!--<a class=\"btn btn-sm btn-warning\" routerLink=\"/clients/{{o.id}}/\">Details</a>-->\n      <!--<button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateClient)\">Edit</button>-->\n      <!--<button *ngIf=\"!o.block\" class=\"btn btn-sm btn-danger\" href=\"#block-form\" data-toggle=\"modal\" (click)=\"blockId=o.id\">Block</button>-->\n      <!--<button *ngIf=\"o.block\" class=\"btn btn-sm btn-danger\" (click)=\"onUnblock(o.id)\">Unblock</button>-->\n      <!--<button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>-->\n    <!--</td>-->\n  <!--</tr>-->\n  <!--</tbody>-->\n<!--</table>-->\n\n<div class=\"row\">\n  <div class=\"col-sm-8\"></div>\n  <div class=\"col-sm-4\"><input #gb type=\"text\" placeholder=\"Filter\" class=\"form-control\"></div>\n</div>\n\n<p-dataTable [value]=\"clientsList\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\">\n\n  <p-column header=\"Image\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <img id=\"preview\" [src]=\"o.image_path?o.image_path:'#'\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n    </ng-template>\n  </p-column>\n  <p-column field=\"id\" header=\"Id\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"name\" header=\"Name\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"email\" header=\"Email\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"phone_number\" header=\"Phone\" [sortable]=\"true\"> </p-column>\n  <p-column header=\"Actions\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/clients/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateClient)\">Edit</button>\n      <button *ngIf=\"!o.block\" class=\"btn btn-sm btn-danger\" href=\"#block-form\" data-toggle=\"modal\" (click)=\"blockId=o.id\">Block</button>\n      <button *ngIf=\"o.block\" class=\"btn btn-sm btn-danger\" (click)=\"onUnblock(o.id)\">Unblock</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>\n    </ng-template>\n  </p-column>\n</p-dataTable>\n\n<div id=\"block-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #BlockForm=\"ngForm\" (ngSubmit)=\"onBlock(blockId,BlockForm)\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Block Client</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <!--NAME-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Block reason</label>\n                <input type=\"text\" name=\"blockreason\" class=\"form-control\" required  #reason=\"ngModel\" ngModel>\n                <!--VALIDATION-->\n                <div *ngIf=\"reason.errors && (reason.dirty || reason.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!reason.errors.required\">\n                    Name is required\n                  </div>\n                </div>\n                <!--END_VALIDATON-->\n              </div>\n            </div>\n            <!--NAME-->\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" href=\"#block-form\" data-toggle=\"modal\" class=\"btn btn-danger\" [disabled]=\"BlockForm.invalid\">Block</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #CreateDish=\"ngForm\" (ngSubmit)=\"onSave(CreateDish)\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Dish</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <input name= \"id\" ngModel hidden>\n          <input name= \"serviceprovider_spid\" ngModel hidden>\n          <input name= \"images_iid\" ngModel hidden>\n          <input name= \"creation\" ngModel hidden>\n          <input name= \"lastmodifytime\" ngModel hidden>\n          <input name= \"image_path\" ngModel hidden>\n          <input name= \"cat_name\" ngModel hidden>\n            <div >\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <img id=\"preview\" src=\"#\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Image</label>\n                  <input name= \"image\" type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".png,.jpg,.webx\" ngModel>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" required class=\"form-control\" ngModel #name=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!name.errors.required\">\n                      Name is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Available</label>\n                  <input type=\"number\" name=\"available\" required class=\"form-control\" ngModel #avail=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"avail.errors && (avail.dirty || avail.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!avail.errors.required\">\n                      Available is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Description</label>\n                  <input type=\"text\" name=\"discription\" required class=\"form-control\" ngModel #diskr=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"diskr.errors && (diskr.dirty || diskr.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!diskr.errors.required\">\n                      Description is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Price</label>\n                  <input type=\"number\" name=\"price\"  required class=\"form-control\" ngModel #price=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"price.errors && (price.dirty || price.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!price.errors.required\">\n                      Price is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Foodcategory</label>\n                  <select name=\"foodcatrgory_fcid\" class=\"form-control\" ngModel>\n                    <option *ngFor=\"let c of foodcatObserver | async\" [ngValue]=\"c.id\">{{c.name}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" href=\"#create-form\" data-toggle=\"modal\" class=\"btn btn-warning\" [disabled]=\"CreateDish.invalid\">Save</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--END CREATE FORM-->\n\n<button class=\"btn btn-warning\" (click)=\"onNewDish(CreateDish)\">Create Dish</button>\n<!--<hr>-->\n<!--<table class=\"table\">-->\n  <!--<thead>-->\n  <!--<tr>-->\n    <!--<th>Image</th>-->\n    <!--<th>Id</th>-->\n    <!--<th>Name</th>-->\n    <!--<th>Available</th>-->\n    <!--<th>Price</th>-->\n    <!--<th>Foodcategory</th>-->\n    <!--<th>Actions</th>-->\n  <!--</tr>-->\n  <!--</thead>-->\n  <!--<tbody>-->\n  <!--<tr *ngFor=\"let o of dishesList;let i=index\">-->\n    <!--&lt;!&ndash;serverUrl+&ndash;&gt;-->\n    <!--<td><img id=\"preview\" [src]=\"o.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></td>-->\n    <!--<td>{{o.id}}</td>-->\n    <!--<td>{{o.name}}</td>-->\n    <!--<td>{{o.available}}</td>-->\n    <!--<td>{{o.price}}</td>-->\n    <!--<td>{{o.cat_name}}</td>-->\n    <!--<td>-->\n      <!--<a class=\"btn btn-sm btn-warning\" routerLink=\"/dishes/{{o.id}}/\">Details</a>-->\n      <!--<button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateDish)\">Edit</button>-->\n      <!--<button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Del</button>-->\n    <!--</td>-->\n  <!--</tr>-->\n  <!--</tbody>-->\n<!--</table>-->\n\n<div class=\"row\">\n  <div class=\"col-sm-8\"></div>\n  <div class=\"col-sm-4\"><input #gb type=\"text\" placeholder=\"Filter\" class=\"form-control\"></div>\n</div>\n\n<p-dataTable [value]=\"dishesList\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\">\n\n  <p-column header=\"Image\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <img id=\"preview\" [src]=\"o.image_path?o.image_path:'#'\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n    </ng-template>\n  </p-column>\n  <p-column field=\"id\" header=\"Id\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"name\" header=\"Name\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"available\" header=\"Available\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"price\" header=\"Price\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"cat_name\" header=\"Foodcategory\" [sortable]=\"true\"> </p-column>\n  <p-column header=\"Actions\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/dishes/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateDish)\">Edit</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Del</button>\n    </ng-template>\n  </p-column>\n</p-dataTable>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <div class=\"alert\" *ngIf=\"message\" [class.alert-success]=\"!error\" [class.alert-danger]=\"error\">\n        {{message}}\n      </div>\n      <input name=\"passw\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\">\n      <input name=\"retpassw\" type=\"password\" id=\"inputPassword1\" class=\"form-control\" placeholder=\"Retype Password\" required [(ngModel)]=\"retpassword\">\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"onChangePass()\">Save new password</button>\n    </form><!-- /form -->\n    <a routerLink=\"/login\" class=\"forgot-password\">\n      Go to login\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #CreateGenReq=\"ngForm\" (ngSubmit)=\"onSave(CreateGenReq)\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Client</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n            <div >\n              <input name= \"id\" ngModel hidden>\n              <input name= \"req_time\" ngModel hidden>\n\n              <!--Cunsomer ID-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Cunsumer</label>\n                  <select name=\"consumer_cid\" ngModel class=\"form-control\" #cunsid=\"ngModel\" required>\n                    <option *ngFor=\"let c of cunsomerObserver | async\" [ngValue]=\"c.id\">{{c.name}}</option>\n                  </select>\n                  <!--VALIDATION-->\n                  <div *ngIf=\"cunsid.errors && (cunsid.dirty || cunsid.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!cunsid.errors.required\">\n                      Cunsomer Id is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--Cunsomer ID-->\n\n              <!--DETAILS-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Details</label>\n                  <input type=\"text\" name=\"req_details\" ngModel class=\"form-control\" required #reqdet=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"reqdet.errors && (reqdet.dirty || reqdet.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!reqdet.errors.required\">\n                      Details is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--DETAILS-->\n\n              <!--SUBJECT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Subject</label>\n                  <input type=\"text\" name=\"req_subject\" ngModel class=\"form-control\" required #subj=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"subj.errors && (subj.dirty || subj.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!subj.errors.required\">\n                      Subject is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--SUBJECT-->\n\n              <!--STATUS-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Status</label>\n                  <select name=\"status\" ngModel class=\"form-control\" required #status=\"ngModel\">\n                    <option *ngFor=\"let c of statusObserver | async\" [ngValue]=\"c.id\">{{c.name}}</option>\n                  </select>\n                  <!--VALIDATION-->\n                  <div *ngIf=\"status.errors && (status.dirty || status.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!status.errors.required\">\n                      Status is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--STATUS-->\n\n              <!--LAT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Latitude</label>\n                  <input type=\"number\" name=\"lat\" ngModel class=\"form-control\" required #lat=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"lat.errors && (lat.dirty || lat.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!lat.errors.required\">\n                      Latitude is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--LAT-->\n\n              <!--LON-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Longitude</label>\n                  <input type=\"number\" name=\"lon\" ngModel class=\"form-control\" required #lon=\"ngModel\">\n                  <!--VALIDATION-->\n                  <div *ngIf=\"lon.errors && (lon.dirty || lon.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!lon.errors.required\">\n                      Longitude is required\n                    </div>\n                  </div>\n                  <!--END_VALIDATON-->\n                </div>\n              </div>\n              <!--LON-->\n            </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" href=\"#create-form\" data-toggle=\"modal\" class=\"btn btn-warning\" [disabled]=\"CreateGenReq.invalid\">Save</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewGenreq(CreateGenReq)\">Create General Request</button>\n<hr>\n\n<!--<table class=\"table\">-->\n  <!--<thead>-->\n  <!--<tr>-->\n    <!--<th>Id</th>-->\n    <!--<th>Cunsomer Id</th>-->\n    <!--<th>Request Time</th>-->\n    <!--<th>Subject</th>-->\n    <!--<th>Status</th>-->\n    <!--<th>Latitude</th>-->\n    <!--<th>Longitude</th>-->\n    <!--<th>Actions</th>-->\n  <!--</tr>-->\n  <!--</thead>-->\n  <!--<tbody>-->\n  <!--<tr *ngFor=\"let o of genReqList;let i=index\">-->\n    <!--<td>{{o.id}}</td>-->\n    <!--<td>{{o.consumer_cid}}</td>-->\n    <!--<td>{{o.req_time}}</td>-->\n    <!--<td>{{o.req_subject}}</td>-->\n    <!--<td>{{o.status}}</td>-->\n    <!--<td>{{o.lon}}</td>-->\n    <!--<td>{{o.lat}}</td>-->\n    <!--<td>-->\n      <!--<a class=\"btn btn-sm btn-warning\" routerLink=\"/genreqs/{{o.id}}/\">Details</a>-->\n      <!--<button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateGenReq)\">Edit</button>-->\n      <!--<button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>-->\n    <!--</td>-->\n  <!--</tr>-->\n  <!--</tbody>-->\n<!--</table>-->\n\n<div class=\"row\">\n  <div class=\"col-sm-8\"></div>\n  <div class=\"col-sm-4\"><input #gb type=\"text\" placeholder=\"Filter\" class=\"form-control\"></div>\n</div>\n\n<p-dataTable [value]=\"genReqList\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\">\n  <p-column field=\"id\" header=\"Id\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"consumer_cid\" header=\"Cunsomer Id\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"req_time\" header=\"Request Time\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"req_subject\" header=\"Subject\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"lon\" header=\"Latitude\" [sortable]=\"true\"> </p-column>\n  <p-column field=\"lat\" header=\"Longitude\" [sortable]=\"true\"> </p-column>\n\n  <p-column header=\"Actions\">\n    <ng-template let-o=\"rowData\" pTemplate=\"body\">\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/genreqs/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o,CreateGenReq)\">Edit</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>\n    </ng-template>\n  </p-column>\n</p-dataTable>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <div class=\"alert alert-danger\" *ngIf=\"message\">\n        {{message}}\n      </div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <input name=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"email\">\n      <input name=\"passw\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\">\n      <!--<div id=\"remember\" class=\"checkbox\">-->\n        <!--<label>-->\n          <!--<input type=\"checkbox\" value=\"remember-me\"> Remember me-->\n        <!--</label>-->\n      <!--</div>-->\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"login()\">Sign in</button>\n    </form><!-- /form -->\n    <a routerLink=\"/forgotpass\" class=\"forgot-password\">\n      Forgot the password?\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<div id=\"sidebar-wrapper\">\n\n\n\n  <ul class=\"sidebar-nav\">\n    <div>\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\"  width=\"96px\" height=\"96px\"/>\n    </div>\n    <!--<li class=\"sili class=nd\">-->\n      <!--<a href=\"#\">-->\n        <!--Productive Families-->\n      <!--</a>-->\n    <!--</li>-->\n    <li [ngClass]=\"{active: activeRoute('/chefs')}\">\n      <a routerLink=\"/chefs\"><i class=\"fa  fa-cutlery\"></i> <span class=\"nav-label\">Chefs</span></a>\n    </li>\n    <li [ngClass]=\"{active: activeRoute('/clients')}\">\n      <a routerLink=\"/clients\"><i class=\"fa fa fa-user\"></i> <span class=\"nav-label\">Clients</span></a>\n    </li>\n    <li [ngClass]=\"{active: activeRoute('/genreqs')}\">\n      <a routerLink=\"/genreqs\"><i class=\"fa  fa-envelope\"></i> <span class=\"nav-label\">General Requests</span></a>\n    </li>\n  </ul>\n</div>\n<!-- /#sidebar-wrapper -->\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('jwtoken')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChefDetailsComponent = (function () {
    function ChefDetailsComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    ChefDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "chef/" + id).map(function (resp) { return resp.json().result[0]; }).subscribe(function (obj) {
                console.log(obj);
                _this.chef = obj;
            });
        });
    };
    return ChefDetailsComponent;
}());
ChefDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-details',
        template: "\n    <th><img id=\"preview\" [src]=\"chef?.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></th>\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Block</th>\n        <td>{{chef?.block}}</td>\n      </tr>\n      <tr>\n        <th *ngIf=\"chef?.block\">Block Reason</th>\n        <td>{{chef?.blockreason}}</td>\n      </tr>\n      <tr>\n        <th>Id</th>\n        <td>{{chef?.id}}</td>\n      </tr>\n      <tr>\n        <th>User Id</th>\n        <td>{{chef?.user_uid}}</td>\n      </tr>\n      <tr>\n        <th>Average rating</th>\n        <td>{{chef?.average_rating}}</td>  \n      </tr>\n      <tr>\n        <th>Is Active</th>\n        <td>{{chef?.is_active}}</td>\n      </tr>\n      <tr>\n        <th>Description</th>\n        <td>{{chef?.description}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{chef?.name}}</td>\n      </tr>\n      <tr>\n        <th>Email</th>\n        <td>{{chef?.email}}</td>\n      </tr>\n      <tr>\n        <th>Phone number</th>\n        <td>{{chef?.phone_number}}</td>\n      </tr>\n      <tr>\n        <th>Password</th>\n        <td>{{chef?.password}}</td>\n      </tr>\n      <tr>\n        <th>Created By</th>\n        <td>{{chef?.createdby}}</td>\n      </tr>\n      <tr>\n        <th>Creation time</th>\n        <td>{{chef?.creation_time}}</td>\n      </tr>\n      <tr>\n        <th>Last modify by</th>\n        <td>{{chef?.last_modify_by}}</td>\n      </tr>\n      <tr>\n        <th>Last modify time</th>\n        <td>{{chef?.last_modify_time}}</td>\n      </tr>\n      <tr>\n        <th>Password lastmodify</th>\n        <td>{{chef?.password_lastmodify}}</td>\n      </tr>\n      <tr>\n        <th>Image iid</th>\n        <td>{{chef?.images_iid}}</td>\n      </tr>\n      <tr>\n        <th>Longitude</th>\n        <td>{{chef?.lon}}</td>\n      </tr>\n      <tr>\n        <th>Latitude</th>\n        <td>{{chef?.lat}}</td>\n      </tr>\n      <tr>\n        <th>Image Path</th>\n        <td>{{chef?.image_path}}</td>\n      </tr>\n      </tbody>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], ChefDetailsComponent);

var _a, _b;
//# sourceMappingURL=chef-details.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChefComponent = (function () {
    function ChefComponent(http) {
        this.http = http;
        this.defaultChefData = {
            user_uid: 0,
            average_rating: 0,
            is_active: true,
            description: '',
            name: '',
            email: '',
            phone_number: '',
            password: '',
            createdby: 0,
            creation_time: '',
            last_modify_by: 0,
            last_modify_time: '',
            password_lastmodify: '',
            images_iid: 0,
            lon: 0,
            lat: 0
        };
        this.editMode = false;
        this.model = this.defaultChefData;
        this.chefsObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef').map(function (resp) { return resp.json().result; });
        this.imageObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'utils/image').map(function (resp) { return resp.json().result; });
    }
    // chefs: ChefData[] = [
    //   {
    //     id: 0,
    //     user_uid: 2,
    //     average_rating: 6.7,
    //     is_active: false,
    //     description: 'opaopaop'
    //   },
    //   {
    //     id: 1,
    //     user_uid: 2,
    //     average_rating: 6.7,
    //     is_active: false,
    //     description: 'opaopaop'
    //   }
    // ];
    ChefComponent.prototype.resetModel = function () {
        this.model = {
            user_uid: 0,
            average_rating: 0,
            is_active: true,
            description: '',
            name: '',
            email: '',
            phone_number: '',
            password: '',
            createdby: 0,
            creation_time: '',
            last_modify_by: 0,
            last_modify_time: '',
            password_lastmodify: '',
            images_iid: 0,
            lon: 0,
            lat: 0
        };
    };
    ChefComponent.prototype.ngOnInit = function () {
        // this.chefsObserver.subscribe(
        //   (res) => console.log('result', res)
        // );
        // $('.table').footable();
        this.updateChefsList();
    };
    ChefComponent.prototype.updateChefsList = function () {
        var _this = this;
        this.chefsObserver.take(1).subscribe(function (result) {
            _this.chefsList = result ? result.filter(function (o) { return o.id; }) : null;
            $('table').addClass('table');
        });
    };
    ChefComponent.prototype.onNewChef = function () {
        console.log('new chef');
        $('#create-form').modal('toggle');
        $('#preview').attr('src', __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].default_human_img_url);
    };
    ChefComponent.prototype.onSave = function (form) {
        var _this = this;
        console.log('on save');
        console.log('form value', form.value);
        var now = new Date().toISOString();
        form.value.last_modify_time = now;
        form.value.password_lastmodify = now;
        form.value.last_modify_by = 'ADMIN';
        form.value.createdby = 'ADMIN';
        var formData = new FormData();
        if (this.file) {
            formData.append('image', this.file, this.file.name);
        }
        var keys = Object.keys(form.value);
        keys.forEach(function (k) {
            formData.append(k, form.value[k]);
        });
        var request;
        if (!this.editMode) {
            formData.set('creation_time', new Date().toISOString());
            request = this.http.post(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef', formData);
        }
        else {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef', formData);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateChefsList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.reset();
        this.editMode = false;
    };
    ChefComponent.prototype.onDelete = function (id, userid) {
        var _this = this;
        console.log('on delete', id, userid);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + ("chef/" + id + "|" + userid)).subscribe(function (result) { console.log('ok', result); _this.updateChefsList(); }, function (err) { return console.log('err', err); });
    };
    ChefComponent.prototype.onEdit = function (chef, form) {
        console.log('on edit');
        this.editMode = true;
        chef.image = null;
        $('#create-form').modal('toggle');
        $('#preview').attr('src', chef.image_path);
        this.editMode = true;
        form.setValue(chef);
    };
    // onDishes(id) {
    //   console.log('on dishes');
    //
    // }
    ChefComponent.prototype.onBlock = function (id, form) {
        var _this = this;
        console.log('block', id, form.value);
        form.value.id = id;
        this.http.patch(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef/block', form.value).subscribe(function (result) { console.log('ok', result); _this.updateChefsList(); }, function (err) { return console.log('err', err); });
    };
    ChefComponent.prototype.onUnblock = function (id) {
        var _this = this;
        console.log('unblock');
        this.http.patch(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef/unblock', { id: id }).subscribe(function (result) { console.log('ok', result); _this.updateChefsList(); }, function (err) { return console.log('err', err); });
    };
    ChefComponent.prototype.readURL = function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var target = e.target;
            $('#preview').attr('src', target.result);
        };
        reader.readAsDataURL(file);
    };
    ChefComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            this.readURL(this.file);
        }
    };
    return ChefComponent;
}());
ChefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef',
        template: __webpack_require__(264),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChefComponent);

/* unused harmony default export */ var _unused_webpack_default_export = ChefComponent;
var _a;
//# sourceMappingURL=chef.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = (function () {
    function ClientDetailsComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "client/" + id).map(function (resp) { return resp.json().result[0]; }).subscribe(function (obj) {
                console.log(obj);
                _this.client = obj;
            });
        });
    };
    return ClientDetailsComponent;
}());
ClientDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dish-details',
        template: "\n    <th><img id=\"preview\" [src]=\"client?.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></th>\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Block</th>\n        <td>{{client?.block}}</td>\n      </tr>\n      <tr>\n        <th *ngIf=\"client?.block\">Block Reason</th>\n        <td>{{client?.blockreason}}</td>\n      </tr>\n      <tr>\n        <th>Id</th>\n        <td>{{client?.id}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{client?.name}}</td>\n      </tr>\n      <tr>\n        <th>Email</th>\n        <td>{{client?.email}}</td>\n      </tr>\n      <tr>\n        <th>Phone</th>\n        <td>{{client?.phone_number}}</td>\n      </tr>\n      <tr>\n        <th>Password</th>\n        <td>{{client?.password}}</td>\n      </tr>\n      <tr>\n        <th>Created By</th>\n        <td>{{client?.createdby}}</td>\n      </tr>\n      <tr>\n        <th>Creation time</th>\n        <td>{{client?.creation_time}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify By</th>\n        <td>{{client?.last_modify_by}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify Time</th>\n        <td>{{client?.last_modify_time}}</td>\n      </tr>\n      <tr>\n        <th>Password Last Modify</th>\n        <td>{{client?.password_lastmodify}}</td>\n      </tr>\n      <tr>\n        <th>Images Url</th>\n        <td>{{client?.image_path}}</td>\n      </tr>\n      <tr>\n        <th>Longitude</th>\n        <td>{{client?.lon}}</td>\n      </tr>\n      <tr>\n        <th>Latitude</th>\n        <td>{{client?.lat}}</td>\n      </tr>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], ClientDetailsComponent);

var _a, _b;
//# sourceMappingURL=client-datails.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientComponent = (function () {
    function ClientComponent(http) {
        this.http = http;
        this.clientObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client').map(function (resp) { return resp.json().result; });
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.updateClientsList();
    };
    ClientComponent.prototype.updateClientsList = function () {
        var _this = this;
        this.clientObserver.take(1).subscribe(function (result) {
            _this.clientsList = result;
            $('table').addClass('table');
        });
    };
    ClientComponent.prototype.onNewClient = function (form) {
        form.resetForm();
        $('#preview').attr('src', __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].default_human_img_url);
        $('#create-form').modal('toggle');
    };
    ClientComponent.prototype.onSave = function (form) {
        var _this = this;
        var model = form.value;
        model.last_modify_time = new Date().toISOString();
        var formData = new FormData();
        var keys = Object.keys(form.value);
        console.log('keys', keys);
        keys.forEach(function (k) {
            formData.append(k, form.value[k]);
        });
        if (this.file) {
            formData.append('image', this.file, this.file.name);
        }
        var request;
        if (!this.editMode) {
            formData.append('creation', new Date().toISOString());
            request = this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/', formData);
        }
        else {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/', formData);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateClientsList(); }, function (err) { return console.log('err', err); });
        form.reset();
        this.editMode = false;
    };
    ClientComponent.prototype.onEdit = function (client, form) {
        this.editMode = true;
        // this.model = client;
        client.image = null;
        form.setValue(client);
        $('#preview').attr('src', client.image_path);
        $('#create-form').modal('toggle');
    };
    ClientComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/' + id).subscribe(function (result) { console.log('ok', result); _this.updateClientsList(); }, function (err) { return console.log('err', err); });
    };
    ClientComponent.prototype.onBlock = function (id, form) {
        var _this = this;
        console.log('block', id, form.value);
        form.value.id = id;
        this.http.patch(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/block', form.value).subscribe(function (result) { console.log('ok', result); _this.updateClientsList(); }, function (err) { return console.log('err', err); });
    };
    ClientComponent.prototype.onUnblock = function (id) {
        var _this = this;
        console.log('unblock');
        this.http.patch(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/unblock', { id: id }).subscribe(function (result) { console.log('ok', result); _this.updateClientsList(); }, function (err) { return console.log('err', err); });
    };
    ClientComponent.prototype.readURL = function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var target = e.target;
            $('#preview').attr('src', target.result);
        };
        reader.readAsDataURL(file);
    };
    ClientComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            this.readURL(this.file);
        }
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client',
        template: __webpack_require__(265),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClientComponent);

/* unused harmony default export */ var _unused_webpack_default_export = ClientComponent;
var _a;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishDetailsComponent = (function () {
    function DishDetailsComponent(http, route) {
        this.http = http;
        this.route = route;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix;
    }
    DishDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "dish/" + id).map(function (resp) { return resp.json().result[0]; }).subscribe(function (obj) {
                console.log(obj);
                _this.dish = obj;
            });
        });
    };
    return DishDetailsComponent;
}());
DishDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dish-details',
        template: "\n    <th><img id=\"preview\" [src]=\"dish?.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></th>\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Image Path</th>\n        <td>{{dish?.image_path}}</td>\n      </tr>\n      <tr>\n        <th>Id</th>\n        <td>{{dish?.id}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{dish?.name}}</td>\n      </tr>\n      <tr>\n        <th>Category</th>\n        <td>{{dish?.cat_name}}</td>\n      </tr>\n      <tr>\n        <th>Avalible</th>\n        <td>{{dish?.available}}</td>\n      </tr>\n      <tr>\n        <th>Creation</th>\n        <td>{{dish?.creation}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify</th>\n        <td>{{dish?.lastmodifytime}}</td>\n      </tr>\n      <tr>\n        <th>Price</th>\n        <td>{{dish?.price}}</td>\n      </tr>\n      <tr>\n        <th>Chef id</th>\n        <td>{{dish?.serviceprovider_spid}}</td>\n      </tr>\n      </tbody>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], DishDetailsComponent);

var _a, _b;
//# sourceMappingURL=dish-details.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DishComponent = (function () {
    function DishComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.imageObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + 'utils/image').map(function (resp) { return resp.json().result; });
        this.foodcatObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + 'utils/foodcatrgory').map(function (resp) { return resp.json().result; });
        this.editMode = false;
        this.chefId = -1;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix;
    }
    DishComponent.prototype.resetModel = function () {
        this.model = {
            serviceprovider_spid: this.chefId,
            images_iid: 0,
            name: '',
            available: 1,
            creation: '',
            lastmodifytime: '',
            discription: '',
            price: 0,
            foodcatrgory_fcid: 0,
            image_path: ''
        };
    };
    DishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetModel();
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            _this.chefId = id;
            _this.dishesObservablse = _this.http.get(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "chef/" + id + "/dish").map(function (resp) { return resp.json().result; });
            _this.updateDishesList();
        });
    };
    DishComponent.prototype.updateDishesList = function () {
        var _this = this;
        this.dishesObservablse.take(1).subscribe(function (result) {
            _this.dishesList = result;
            $('table').addClass('table');
        });
    };
    DishComponent.prototype.onNewDish = function (form) {
        $('#preview').attr('src', __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].default_dish_img_url);
        $('#create-form').modal('toggle');
        form.resetForm();
    };
    DishComponent.prototype.onSave = function (form) {
        var _this = this;
        console.log('on save');
        console.log('form value', form.value);
        console.log(this.model);
        form.value.serviceprovider_spid = this.chefId;
        form.value.lastmodifytime = new Date().toISOString();
        var formData = new FormData();
        if (this.file) {
            formData.append('image', this.file, this.file.name);
        }
        var keys = Object.keys(form.value);
        keys.forEach(function (k) {
            formData.append(k, form.value[k]);
        });
        var request;
        if (!this.editMode) {
            formData.set('creation', new Date().toISOString());
            request = this.http.post(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "chef/" + this.chefId + "/dish", formData);
        }
        else {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "chef/" + this.chefId + "/dish", formData);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateDishesList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.reset();
        this.editMode = false;
    };
    DishComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('on delete', id);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "dish/" + id).subscribe(function (result) { console.log('ok', result); _this.updateDishesList(); }, function (err) { return console.log('err', err); });
    };
    DishComponent.prototype.onEdit = function (dish, form) {
        this.editMode = true;
        console.log('on edit', dish);
        // this.model = dish;
        dish.image = null;
        form.setValue(dish);
        $('#preview').attr('src', dish.image_path);
        $('#create-form').modal('toggle');
    };
    DishComponent.prototype.readURL = function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var target = e.target;
            $('#preview').attr('src', target.result);
        };
        reader.readAsDataURL(file);
    };
    DishComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            this.readURL(this.file);
        }
    };
    return DishComponent;
}());
DishComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dish',
        template: __webpack_require__(266),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]) === "function" && _c || Object])
], DishComponent);

/* unused harmony default export */ var _unused_webpack_default_export = DishComponent;
var _a, _b, _c;
//# sourceMappingURL=dish.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnterEmailComponent = (function () {
    function EnterEmailComponent(http, route) {
        this.http = http;
        this.route = route;
        this.error = true;
    }
    EnterEmailComponent.prototype.ngOnInit = function () {
        setTimeout(function () { return $('#wrapper').removeClass('toggled'); }, 500);
        $('#wrapper').removeClass('toggled');
    };
    EnterEmailComponent.prototype.sendEmail = function () {
        var _this = this;
        console.log('sendEmail');
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "auth/fgpassemail?email=" + this.email).map(function (res) { return res.json(); }).subscribe(function (obj) {
            console.log(obj);
            if (obj.error) {
                _this.error = true;
                _this.message = obj.error;
            }
            else if (obj.result) {
                _this.error = false;
                _this.message = obj.result;
            }
            else {
                _this.message = 'Unkown error';
            }
        });
    };
    return EnterEmailComponent;
}());
EnterEmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enter-email',
        template: "\n    <div class=\"container\">\n      <div class=\"card card-container\">\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />\n        <p id=\"profile-name\" class=\"profile-name-card\"></p>\n        <form class=\"form-signin\">\n          <div class=\"alert alert-success\" *ngIf=\"message\" [class.alert-success]=\"!error\" [class.alert-danger]=\"error\">\n            {{message}}\n          </div>\n          <input name=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" \n                 required autofocus [(ngModel)]=\"email\">\n          <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"sendEmail()\">Send</button>\n        </form><!-- /form -->\n        <a routerLink=\"/login\" class=\"forgot-password\">\n          Go to login\n        </a>\n      </div><!-- /card-container -->\n    </div><!-- /container -->\n  ",
        styles: [__webpack_require__(100)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], EnterEmailComponent);

var _a, _b;
//# sourceMappingURL=enter-email.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpassComponent = (function () {
    function ForgotpassComponent(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.error = true;
    }
    ForgotpassComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        setTimeout(function () { return $('#wrapper').removeClass('toggled'); }, 500);
        $('#wrapper').removeClass('toggled');
    };
    ForgotpassComponent.prototype.onChangePass = function () {
        var _this = this;
        console.log('on change password');
        if (this.password !== this.retpassword) {
            this.message = 'Passwords not match';
        }
        else {
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "auth/updpass", { pass: this.password, retpass: this.retpassword, key: this.key }).subscribe(function (resp) {
                console.log(resp.json());
                if (resp.json().error) {
                    _this.error = true;
                    _this.message = resp.json().error;
                }
                else if (resp.json().result) {
                    _this.error = false;
                    _this.message = resp.json().result;
                    // this.router.navigate(['/login']);
                }
                else {
                    _this.message = 'Unkown error';
                }
            });
        }
    };
    return ForgotpassComponent;
}());
ForgotpassComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgotpass',
        template: __webpack_require__(267),
        styles: [__webpack_require__(100)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], ForgotpassComponent);

var _a, _b, _c;
//# sourceMappingURL=forgotpass.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenReqDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenReqDetailsComponent = (function () {
    function GenReqDetailsComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    GenReqDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "genreq/" + id).map(function (resp) { return resp.json().result[0]; }).subscribe(function (obj) {
                console.log(obj);
                _this.genreq = obj;
            });
        });
    };
    return GenReqDetailsComponent;
}());
GenReqDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dish-details',
        template: "\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Id</th>\n        <td>{{genreq?.id}}</td>\n      </tr>\n      <tr>\n        <th>Cunsomer Id</th>\n        <td>{{genreq?.consumer_cid}}</td>\n      </tr>\n      <tr>\n        <th>Request Time</th>\n        <td>{{genreq?.req_time}}</td>\n      </tr>\n      <tr>\n        <th>Request Details</th>\n        <td>{{genreq?.req_details}}</td>\n      </tr>\n      <tr>\n        <th>Subject</th>\n        <td>{{genreq?.req_subject}}</td>\n      </tr>\n      <tr>\n        <th>Status</th>\n        <td>{{genreq?.status}}</td>\n      </tr>\n      <tr>\n        <th>Longitude</th>\n        <td>{{genreq?.lon}}</td>\n      </tr>\n      <tr>\n        <th>Latitude</th>\n        <td>{{genreq?.lat}}</td>\n      </tr>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], GenReqDetailsComponent);

var _a, _b;
//# sourceMappingURL=gen-req-details.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreqComponent = (function () {
    function GenreqComponent(http) {
        this.http = http;
        this.genReqObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'genreq').map(function (resp) { return resp.json().result; });
        this.cunsomerObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'utils/consumer').map(function (resp) { return resp.json().result; });
        this.statusObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'utils/status').map(function (resp) { return resp.json().result; });
    }
    GenreqComponent.prototype.resetModel = function () {
        this.model = {
            consumer_cid: 0,
            req_time: '',
            req_details: '',
            req_subject: '',
            status: 0,
            lon: 0,
            lat: 0
        };
    };
    GenreqComponent.prototype.updateGenReqList = function () {
        var _this = this;
        this.genReqObserver.take(1).subscribe(function (result) {
            _this.genReqList = result;
            $('table').addClass('table');
        });
    };
    GenreqComponent.prototype.ngOnInit = function () {
        this.updateGenReqList();
        this.resetModel();
    };
    GenreqComponent.prototype.onNewGenreq = function (form) {
        form.resetForm();
        console.log('new genreq');
        $('#create-form').modal('toggle');
    };
    GenreqComponent.prototype.onSave = function (form) {
        var _this = this;
        this.model = form.value;
        this.model.req_time = new Date().toISOString();
        var request = this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'genreq', this.model);
        if (this.editMode) {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'genreq', this.model);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateGenReqList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.resetForm();
        this.editMode = false;
    };
    GenreqComponent.prototype.onEdit = function (genreq, form) {
        this.editMode = true;
        form.setValue(genreq);
        $('#create-form').modal('toggle');
    };
    GenreqComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('on delete', id);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'genreq/' + id).subscribe(function (result) { console.log('ok', result); _this.updateGenReqList(); }, function (err) { return console.log('err', err); });
    };
    return GenreqComponent;
}());
GenreqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-genreq',
        template: __webpack_require__(268),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GenreqComponent);

/* unused harmony default export */ var _unused_webpack_default_export = GenreqComponent;
var _a;
//# sourceMappingURL=genreq.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        setTimeout(function () { return $('#wrapper').removeClass('toggled'); }, 500);
        $('#wrapper').removeClass('toggled');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.email, this.password);
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + "auth/", { email: this.email, pass: this.password }).subscribe(function (resp) {
            console.log(resp.json());
            if (resp.json().error) {
                _this.error = true;
                _this.message = resp.json().error;
            }
            else if (resp.json().token) {
                localStorage.setItem('jwtoken', resp.json().token);
                $('#wrapper').addClass('toggled');
                _this.router.navigate(['/chefs']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(269),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
], LoginComponent);

/* unused harmony default export */ var _unused_webpack_default_export = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ })

},[313]);
//# sourceMappingURL=main.bundle.js.map