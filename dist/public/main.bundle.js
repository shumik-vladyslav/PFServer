webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 112;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(126);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(187),
        styles: [__webpack_require__(181)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chef_chef_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dish_dish_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_client_client_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chef_chef_details_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dish_dish_details_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forgotpass_forgotpass_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_forgotpass_enter_email_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_client_client_datails_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_genreq_genreq_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_genreq_gen_req_details_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_navigation_navigation_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_topnavbar_topnavbar_component__ = __webpack_require__(125);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
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
            __WEBPACK_IMPORTED_MODULE_20__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_topnavbar_topnavbar_component__["a" /* TopNavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chef_chef_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dish_dish_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chef_chef_details_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dish_dish_details_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_forgotpass_forgotpass_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_forgotpass_enter_email_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_client_client_datails_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_genreq_genreq_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_genreq_gen_req_details_component__ = __webpack_require__(78);
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__(194),
        styles: [
            "\n    li.active {\n    border-left: 5px solid;\n    border-color: rgb(240, 173, 78);\n    background: rgba(0, 0, 0, 0.26);\n    }\n    "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopNavbarComponent = (function () {
    function TopNavbarComponent() {
    }
    TopNavbarComponent.prototype.toggleNavigation = function () {
        jQuery('body').toggleClass('mini-navbar');
        this.smoothlyMenu();
    };
    TopNavbarComponent.prototype.smoothlyMenu = function () {
        if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            jQuery('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(function () {
                jQuery('#side-menu').fadeIn(400);
            }, 200);
        }
        else if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('#side-menu').hide();
            setTimeout(function () {
                jQuery('#side-menu').fadeIn(400);
            }, 100);
        }
        else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            jQuery('#side-menu').removeAttr('style');
        }
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-topnavbar',
        template: __webpack_require__(195)
    })
], TopNavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 126:
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

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-color: #563d7c;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n  background-color: #563d7c;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"toggled\">\n  <!--<img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />-->\n  <app-navigation></app-navigation>\n\n  <!-- Page Content -->\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"card\">\n      <router-outlet></router-outlet>\n    </div>\n    </div>\n  </div>\n  <!-- /#page-content-wrapper -->\n</div>\n<!-- /#wrapper -->\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Chef</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <form class=\"form-edit\" #CreateChef>\n          <div >\n\n            <!--NAME-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Name</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--NAME-->\n\n            <!--EMAIL-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Email</label>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--EMAIL-->\n\n            <!--IS ACTIVE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Is Active</label>\n                <input type=\"checkbox\" name=\"is-active\" [(ngModel)]=\"model.is_active\" required>\n              </div>\n            </div>\n            <!--IS ACTIVE-->\n\n            <!--PHONE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Phone</label>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"model.phone_number\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--PHONE-->\n\n            <!--PASSWORD-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Password</label>\n                <input type=\"text\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--PASSWORD-->\n\n            <!--DESCRIPTION-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Description</label>\n                <input type=\"text\" name=\"description\" [(ngModel)]=\"model.description\" class=\"form-control\">\n              </div>\n            </div>\n            <!--DESCRIPTION-->\n\n            <!--AVERAGE_RATING-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Average rating</label>\n                <input type=\"number\" name=\"average-rating\" [(ngModel)]=\"model.average_rating\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--AVERAGE_RATING-->\n\n            <!--LAT-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Latitude</label>\n                <input type=\"text\" name=\"lat\" [(ngModel)]=\"model.lat\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--LAT-->\n\n            <!--LON-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Longitude</label>\n                <input type=\"text\" name=\"lon\" [(ngModel)]=\"model.lon\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--LON-->\n\n            <!--IMAGE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Image</label>\n                <select name=\"status\" [(ngModel)]=\"model.images_iid\" class=\"form-control\">\n                  <option *ngFor=\"let c of imageObserver | async\" [ngValue]=\"c.id\">{{c.path}}</option>\n                </select>\n                <!--<input type=\"text\" name=\"text\" [(ngModel)]=\"model.images_iid\" class=\"form-control\" required>-->\n              </div>\n            </div>\n            <!--IMAGE-->\n          </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a data-toggle=\"modal\" class=\"btn btn-warning\" href=\"#create-form\" (click)=\"onSave(CreateChef)\">Save</a>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewChef()\">Create Chef</button>\n<hr>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Id</th>\n      <!--<th>User uid</th>-->\n      <th>Average rating</th>\n      <th>Is Active</th>\n      <th>Description</th>\n      <th>Name</th>\n      <th>Email</th>\n      <!--<th>Phone</th>-->\n      <!--<th>Password</th>-->\n      <!--<th>CreatedBy</th>-->\n      <!--<th>Creation</th>-->\n      <!--<th>Last modify by</th>-->\n      <!--<th>Last modify</th>-->\n      <!--<th>Password last modify</th>-->\n      <!--<th>Image Url</th>-->\n      <!--<th>Lon</th>-->\n      <!--<th>Lat</th>-->\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let o of chefsList;let i=index\">\n      <td>{{o.id}}</td>\n      <!--<td>{{o.user_uid}}</td>-->\n      <td>{{o.average_rating}}</td>\n      <td>{{o.is_active}}</td>\n      <td>{{o.description}}</td>\n      <td>{{o.name}}</td>\n      <td>{{o.email}}</td>\n      <!--<td>{{o.phone_number}}</td>-->\n      <!--<td>{{o.password}}</td>-->\n      <!--<td>{{o.createdby}}</td>-->\n      <!--<td>{{o.creation_time}}</td>-->\n      <!--<td>{{o.last_modify_by}}</td>-->\n      <!--<td>{{o.last_modify_time}}</td>-->\n      <!--<td>{{o.password_lastmodify}}</td>-->\n      <!--<td>{{o.images_iid}}</td>-->\n      <!--<td>{{o.lon}}</td>-->\n      <!--<td>{{o.lat}}</td>-->\n      <td>\n        <a class=\"btn btn-sm btn-warning\" (click)=\"onDishes(o.id)\" routerLink=\"/chefs/{{o.id}}/dishes/\">Dishes</a>\n        <a class=\"btn btn-sm btn-warning\" routerLink=\"/chefs/{{o.id}}/\">Details</a>\n        <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n        <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id, o.user_uid)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Client</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <form class=\"form-edit\" #CreateChef>\n            <div >\n\n              <!--NAME-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--NAME-->\n\n              <!--EMAIL-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email</label>\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--EMAIL-->\n\n              <!--PHONE-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Phone</label>\n                  <input type=\"text\" name=\"phone\" [(ngModel)]=\"model.phone_number\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--PHONE-->\n\n              <!--PASSWORD-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Password</label>\n                  <input type=\"text\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--PASSWORD-->\n\n              <!--LAT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Latitude</label>\n                  <input type=\"text\" name=\"text\" [(ngModel)]=\"model.lat\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--LAT-->\n\n              <!--LON-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Longitude</label>\n                  <input type=\"text\" name=\"text\" [(ngModel)]=\"model.lon\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--LON-->\n\n              <!--IMAGE-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Image</label>\n                  <select name=\"iamage\" [(ngModel)]=\"model.images_iid\" class=\"form-control\">\n                    <option *ngFor=\"let c of imageObserver | async\" [ngValue]=\"c.id\">{{c.path}}</option>\n                  </select>\n                  <!--<input type=\"text\" name=\"text\" [(ngModel)]=\"model.images_iid\" class=\"form-control\" required>-->\n                </div>\n              </div>\n              <!--IMAGE-->\n\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a data-toggle=\"modal\" class=\"btn btn-warning\" href=\"#create-form\" (click)=\"onSave(CreateChef)\">Save</a>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewClient()\">Create Client</button>\n<hr>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Email</th>\n    <th>Phone</th>\n    <th>Password</th>\n    <!--<th>CreatedBy</th>-->\n    <!--<th>Creation</th>-->\n    <!--<th>Last modify by</th>-->\n    <!--<th>Last modify</th>-->\n    <!--<th>Password last modify</th>-->\n    <!--<th>Image Url</th>-->\n    <!--<th>Lon</th>-->\n    <!--<th>Lat</th>-->\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let o of clientsList;let i=index\">\n    <td>{{o.id}}</td>\n    <td>{{o.name}}</td>\n    <td>{{o.email}}</td>\n    <td>{{o.phone_number}}</td>\n    <td>{{o.password}}</td>\n    <!--<td>{{o.createdby}}</td>-->\n    <!--<td>{{o.creation_time}}</td>-->\n    <!--<td>{{o.last_modify_by}}</td>-->\n    <!--<td>{{o.last_modify_time}}</td>-->\n    <!--<td>{{o.password_lastmodify}}</td>-->\n    <!--<td>{{o.images_iid}}</td>-->\n    <!--<td>{{o.lon}}</td>-->\n    <!--<td>{{o.lat}}</td>-->\n    <td>\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/clients/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-edit\" enctype=\"multipart/form-data\" #CreateDish=\"ngForm\" (ngSubmit)=\"onSave(CreateDish)\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Dish</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n            <div >\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <img id=\"preview\" src=\"#\" alt=\"preview image\" width=\"96\" height=\"96\"/>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Image</label>\n                  <input name= \"image\" type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".png,.jpg,.webx\" ngModel>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" required class=\"form-control\" ngModel>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Available</label>\n                  <input type=\"number\" name=\"available\" required class=\"form-control\" ngModel>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Description</label>\n                  <input type=\"text\" name=\"discription\" required class=\"form-control\" ngModel>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Price</label>\n                  <input type=\"number\" name=\"price\"  required class=\"form-control\" ngModel>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Foodcategory</label>\n                  <select name=\"foodcatrgory_fcid\" class=\"form-control\" ngModel>\n                    <option *ngFor=\"let c of foodcatObserver | async\" [ngValue]=\"c.id\">{{c.name}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" href=\"#create-form\" data-toggle=\"modal\" class=\"btn btn-warning\" >Save1</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--END CREATE FORM-->\n\n<button class=\"btn btn-warning\" (click)=\"onNewDish()\">Create Dish</button>\n<hr>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Image</th>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Available</th>\n    <!--<th>Creation</th>-->\n    <!--<th>Last Modify</th>-->\n    <!--<th>Description</th>-->\n    <th>Price</th>\n    <th>Foodcategory</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let o of dishesList;let i=index\">\n    <td><img id=\"preview\" [src]=\"serverUrl+o.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></td>\n    <td>{{o.id}}</td>\n    <td>{{o.name}}</td>\n    <td>{{o.available}}</td>\n    <!--<td>{{o.action}}</td>-->\n    <!--<td>{{o.creation}}</td>-->\n    <!--<td>{{o.lastmodifytime}}</td>-->\n    <!--<td>{{o.discription}}</td>-->\n    <td>{{o.price}}</td>\n    <td>{{o.cat_name}}</td>\n    <td>\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/dishes/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Del</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <div class=\"alert\" *ngIf=\"message\" [class.alert-success]=\"!error\" [class.alert-danger]=\"error\">\n        {{message}}\n      </div>\n      <input name=\"passw\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\">\n      <input name=\"retpassw\" type=\"password\" id=\"inputPassword1\" class=\"form-control\" placeholder=\"Retype Password\" required [(ngModel)]=\"retpassword\">\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"onChangePass()\">Save new password</button>\n    </form><!-- /form -->\n    <a routerLink=\"/login\" class=\"forgot-password\">\n      Go to login\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Client</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <form class=\"form-edit\" #CreateGenReq>\n            <div >\n\n              <!--Cunsomer ID-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Cunsomer Id</label>\n                  <select name=\"consumer_cid\" [(ngModel)]=\"model.consumer_cid\" class=\"form-control\">\n                    <option *ngFor=\"let c of cunsomerObserver | async\" [ngValue]=\"c.id\">{{c.name}}</option>\n                  </select>\n                  <!--<input type=\"number\" name=\"consumer_cid\" [(ngModel)]=\"model.consumer_cid\" class=\"form-control\" required>-->\n                </div>\n              </div>\n              <!--Cunsomer ID-->\n\n              <!--DETAILS-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Details</label>\n                  <input type=\"text\" name=\"req_details\" [(ngModel)]=\"model.req_details\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--DETAILS-->\n\n              <!--SUBJECT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Subject</label>\n                  <input type=\"text\" name=\"req_subject\" [(ngModel)]=\"model.req_subject\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--SUBJECT-->\n\n              <!--STATUS-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Status</label>\n                  <select name=\"status\" [(ngModel)]=\"model.status\" class=\"form-control\">\n                    <option *ngFor=\"let c of statusObserver | async\" [ngValue]=\"c.id\">{{c.name}}</option>\n                  </select>\n                  <!--<input type=\"text\" name=\"req_subject\" [(ngModel)]=\"\" class=\"form-control\" required>-->\n                </div>\n              </div>\n              <!--STATUS-->\n\n              <!--LAT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Latitude</label>\n                  <input type=\"number\" name=\"lat\" [(ngModel)]=\"model.lat\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--LAT-->\n\n              <!--LON-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Longitude</label>\n                  <input type=\"number\" name=\"lon\" [(ngModel)]=\"model.lon\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--LON-->\n\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a data-toggle=\"modal\" class=\"btn btn-warning\" href=\"#create-form\" (click)=\"onSave(CreateGenReq)\">Save</a>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewGenreq()\">Create General Request</button>\n<hr>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Cunsomer Id</th>\n    <th>Request Time</th>\n    <!--<th>Details</th>-->\n    <th>Subject</th>\n    <th>Status</th>\n    <th>Latitude</th>\n    <th>Longitude</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let o of genReqList;let i=index\">\n    <td>{{o.id}}</td>\n    <td>{{o.consumer_cid}}</td>\n    <td>{{o.req_time}}</td>\n    <!--<td>{{o.req_details}}</td>-->\n    <td>{{o.req_subject}}</td>\n    <td>{{o.status}}</td>\n    <td>{{o.lon}}</td>\n    <td>{{o.lat}}</td>\n    <td>\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/genreqs/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form class=\"form-signin\">\n      <div class=\"alert alert-danger\" *ngIf=\"message\">\n        {{message}}\n      </div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <input name=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"email\">\n      <input name=\"passw\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\">\n      <!--<div id=\"remember\" class=\"checkbox\">-->\n        <!--<label>-->\n          <!--<input type=\"checkbox\" value=\"remember-me\"> Remember me-->\n        <!--</label>-->\n      <!--</div>-->\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"login()\">Sign in</button>\n    </form><!-- /form -->\n    <a routerLink=\"/forgotpass\" class=\"forgot-password\">\n      Forgot the password?\n    </a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<div id=\"sidebar-wrapper\">\n\n\n\n  <ul class=\"sidebar-nav\">\n    <div>\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\"  width=\"96px\" height=\"96px\"/>\n    </div>\n    <!--<li class=\"sili class=nd\">-->\n      <!--<a href=\"#\">-->\n        <!--Productive Families-->\n      <!--</a>-->\n    <!--</li>-->\n    <li [ngClass]=\"{active: activeRoute('/chefs')}\">\n      <a routerLink=\"/chefs\"><i class=\"fa  fa-cutlery\"></i> <span class=\"nav-label\">Chefs</span></a>\n    </li>\n    <li [ngClass]=\"{active: activeRoute('/clients')}\">\n      <a routerLink=\"/clients\"><i class=\"fa fa fa-user\"></i> <span class=\"nav-label\">Clients</span></a>\n    </li>\n    <li [ngClass]=\"{active: activeRoute('/genreqs')}\">\n      <a routerLink=\"/genreqs\"><i class=\"fa  fa-envelope\"></i> <span class=\"nav-label\">General Requests</span></a>\n    </li>\n  </ul>\n</div>\n<!-- /#sidebar-wrapper -->\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chef-details',
        template: "\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Id</th>\n        <td>{{chef?.id}}</td>\n      </tr>\n      <tr>\n        <th>User Id</th>\n        <td>{{chef?.user_uid}}</td>\n      </tr>\n      <tr>\n        <th>Average rating</th>\n        <td>{{chef?.average_rating}}</td>  \n      </tr>\n      <tr>\n        <th>Is Active</th>\n        <td>{{chef?.is_active}}</td>\n      </tr>\n      <tr>\n        <th>Description</th>\n        <td>{{chef?.description}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{chef?.name}}</td>\n      </tr>\n      <tr>\n        <th>Email</th>\n        <td>{{chef?.email}}</td>\n      </tr>\n      <tr>\n        <th>Phone number</th>\n        <td>{{chef?.phone_number}}</td>\n      </tr>\n      <tr>\n        <th>Password</th>\n        <td>{{chef?.password}}</td>\n      </tr>\n      <tr>\n        <th>Created By</th>\n        <td>{{chef?.createdby}}</td>\n      </tr>\n      <tr>\n        <th>Creation time</th>\n        <td>{{chef?.creation_time}}</td>\n      </tr>\n      <tr>\n        <th>Last modify by</th>\n        <td>{{chef?.last_modify_by}}</td>\n      </tr>\n      <tr>\n        <th>Last modify time</th>\n        <td>{{chef?.last_modify_time}}</td>\n      </tr>\n      <tr>\n        <th>Password lastmodify</th>\n        <td>{{chef?.password_lastmodify}}</td>\n      </tr>\n      <tr>\n        <th>Image iid</th>\n        <td>{{chef?.images_iid}}</td>\n      </tr>\n      <tr>\n        <th>Longitude</th>\n        <td>{{chef?.lon}}</td>\n      </tr>\n      <tr>\n        <th>Latitude</th>\n        <td>{{chef?.lat}}</td>\n      </tr>\n      <tr>\n        <th>Image Path</th>\n        <td>{{chef?.image_path}}</td>\n      </tr>\n      </tbody>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ChefDetailsComponent);

var _a, _b;
//# sourceMappingURL=chef-details.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take__ = __webpack_require__(202);
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
        this.updateChefsList();
    };
    ChefComponent.prototype.updateChefsList = function () {
        var _this = this;
        this.chefsObserver.take(1).subscribe(function (result) {
            // console.log(response);
            // const json = response.json();
            console.log('updateChefsList', result);
            _this.chefsList = result ? result.filter(function (o) { return o.id; }) : null;
            // if (!json.err) {
            //   this.chefsList = json.result;
            // }
        });
    };
    ChefComponent.prototype.onNewChef = function () {
        console.log('new chef');
        $('#create-form').modal('toggle');
    };
    ChefComponent.prototype.onSave = function (form) {
        var _this = this;
        console.log('on save');
        console.log(this.model);
        this.model.last_modify_time = new Date().toISOString();
        this.model.password_lastmodify = new Date().toISOString();
        var request = this.http.post(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef', this.model);
        if (this.editMode) {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef', this.model);
        }
        else {
            this.model.creation_time = new Date().toISOString();
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
    ChefComponent.prototype.onEdit = function (chef) {
        this.editMode = true;
        console.log('on edit');
        this.model = chef;
        $('#create-form').modal('toggle');
    };
    ChefComponent.prototype.onDishes = function (id) {
        console.log('on dishes');
    };
    return ChefComponent;
}());
ChefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chef',
        template: __webpack_require__(188),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChefComponent);

var _a;
//# sourceMappingURL=chef.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dish-details',
        template: "\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Id</th>\n        <td>{{client?.id}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{client?.name}}</td>\n      </tr>\n      <tr>\n        <th>Email</th>\n        <td>{{client?.email}}</td>\n      </tr>\n      <tr>\n        <th>Phone</th>\n        <td>{{client?.phone_number}}</td>\n      </tr>\n      <tr>\n        <th>Password</th>\n        <td>{{client?.password}}</td>\n      </tr>\n      <tr>\n        <th>Created By</th>\n        <td>{{client?.createdby}}</td>\n      </tr>\n      <tr>\n        <th>Creation time</th>\n        <td>{{client?.creation_time}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify By</th>\n        <td>{{client?.last_modify_by}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify Time</th>\n        <td>{{client?.last_modify_time}}</td>\n      </tr>\n      <tr>\n        <th>Password Last Modify</th>\n        <td>{{client?.password_lastmodify}}</td>\n      </tr>\n      <tr>\n        <th>Images Url</th>\n        <td>{{client?.image_path}}</td>\n      </tr>\n      <tr>\n        <th>Longitude</th>\n        <td>{{client?.lon}}</td>\n      </tr>\n      <tr>\n        <th>Latitude</th>\n        <td>{{client?.lat}}</td>\n      </tr>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ClientDetailsComponent);

var _a, _b;
//# sourceMappingURL=client-datails.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
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
        this.imageObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'utils/image').map(function (resp) { return resp.json().result; });
    }
    ClientComponent.prototype.resetModel = function () {
        this.model = {
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
            lat: 0,
        };
    };
    ClientComponent.prototype.ngOnInit = function () {
        this.updateClientsList();
        this.resetModel();
    };
    ClientComponent.prototype.updateClientsList = function () {
        var _this = this;
        this.clientObserver.take(1).subscribe(function (result) {
            _this.clientsList = result;
        });
    };
    ClientComponent.prototype.onNewClient = function () {
        console.log('new chef');
        $('#create-form').modal('toggle');
    };
    // todo save client
    ClientComponent.prototype.onSave = function (form) {
        var _this = this;
        console.log(this.model);
        var request = this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/', this.model);
        if (this.editMode) {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/', this.model);
            this.model.last_modify_time = new Date().toISOString();
        }
        else {
            this.model.creation_time = new Date().toISOString();
            this.model.password_lastmodify = new Date().toISOString();
            this.model.last_modify_time = new Date().toISOString();
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateClientsList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.reset();
        this.editMode = false;
    };
    ClientComponent.prototype.onEdit = function (client) {
        this.editMode = true;
        console.log('on edit');
        this.model = client;
        $('#create-form').modal('toggle');
    };
    ClientComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('on delete', id);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* config */].api_prefix + 'client/' + id).subscribe(function (result) { console.log('ok', result); _this.updateClientsList(); }, function (err) { return console.log('err', err); });
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-client',
        template: __webpack_require__(189),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClientComponent);

var _a;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dish-details',
        template: "\n    <th><img id=\"preview\" [src]=\"serverUrl+dish?.image_path\" alt=\"preview image\" width=\"96\" height=\"96\"/></th>\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Image Path</th>\n        <td>{{dish?.image_path}}</td>\n      </tr>\n      <tr>\n        <th>Id</th>\n        <td>{{dish?.id}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{dish?.name}}</td>\n      </tr>\n      <tr>\n        <th>Category</th>\n        <td>{{dish?.cat_name}}</td>\n      </tr>\n      <tr>\n        <th>Avalible</th>\n        <td>{{dish?.available}}</td>\n      </tr>\n      <tr>\n        <th>Creation</th>\n        <td>{{dish?.creation}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify</th>\n        <td>{{dish?.lastmodifytime}}</td>\n      </tr>\n      <tr>\n        <th>Price</th>\n        <td>{{dish?.price}}</td>\n      </tr>\n      <tr>\n        <th>Chef id</th>\n        <td>{{dish?.serviceprovider_spid}}</td>\n      </tr>\n      </tbody>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DishDetailsComponent);

var _a, _b;
//# sourceMappingURL=dish-details.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(8);
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
            console.log('updateChefsList', result);
            _this.dishesList = result;
        });
    };
    DishComponent.prototype.onNewDish = function () {
        $('#create-form').modal('toggle');
    };
    DishComponent.prototype.onSave = function (form) {
        var _this = this;
        console.log('on save');
        console.log('form value', form.value);
        console.log(this.model);
        form.value.serviceprovider_spid = this.chefId;
        form.value.lastmodifytime = new Date().toISOString();
        var formData = new FormData();
        formData.append('image', this.file, this.file.name);
        var keys = Object.keys(form.value);
        console.log('keys', keys);
        keys.forEach(function (k) {
            formData.append(k, form.value[k]);
        });
        console.log(formData);
        var request;
        if (!this.editMode) {
            this.model.creation = new Date().toISOString();
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
    DishComponent.prototype.onEdit = function (dish) {
        this.editMode = true;
        console.log('on edit', dish);
        this.model = dish;
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
            // let headers: Headers = new Headers();
            /** No need to include Content-Type in Angular 4 */
            // headers.append('Content-Type', 'multipart/form-data');
            // headers.append('Accept', 'application/json');
            // let options = new RequestOptions();
            // options.headers = headers;
            // this.http.post(`${config.api_prefix}upload`, formData)
            //   .map(res => res.json())
            //   // .catch(error => Observable.throw(error))
            //   .subscribe(
            //     data => {
            //       if (data.result) {
            //         console.log(data.result)
            //       } else if ( data.err) {
            //         console.log(data.err)
            //       }
            //     },
            //         error => console.log(error)
            //   );
        }
    };
    return DishComponent;
}());
DishComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dish',
        template: __webpack_require__(190),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]) === "function" && _c || Object])
], DishComponent);

var _a, _b, _c;
//# sourceMappingURL=dish.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-enter-email',
        template: "\n    <div class=\"container\">\n      <div class=\"card card-container\">\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/logo.jpg\" />\n        <p id=\"profile-name\" class=\"profile-name-card\"></p>\n        <form class=\"form-signin\">\n          <div class=\"alert alert-success\" *ngIf=\"message\" [class.alert-success]=\"!error\" [class.alert-danger]=\"error\">\n            {{message}}\n          </div>\n          <input name=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" \n                 required autofocus [(ngModel)]=\"email\">\n          <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"sendEmail()\">Send</button>\n        </form><!-- /form -->\n        <a routerLink=\"/login\" class=\"forgot-password\">\n          Go to login\n        </a>\n      </div><!-- /card-container -->\n    </div><!-- /container -->\n  ",
        styles: [__webpack_require__(93)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EnterEmailComponent);

var _a, _b;
//# sourceMappingURL=enter-email.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-forgotpass',
        template: __webpack_require__(191),
        styles: [__webpack_require__(93)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ForgotpassComponent);

var _a, _b, _c;
//# sourceMappingURL=forgotpass.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dish-details',
        template: "\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Id</th>\n        <td>{{genreq?.id}}</td>\n      </tr>\n      <tr>\n        <th>Cunsomer Id</th>\n        <td>{{genreq?.consumer_cid}}</td>\n      </tr>\n      <tr>\n        <th>Request Time</th>\n        <td>{{genreq?.req_time}}</td>\n      </tr>\n      <tr>\n        <th>Request Details</th>\n        <td>{{genreq?.req_details}}</td>\n      </tr>\n      <tr>\n        <th>Subject</th>\n        <td>{{genreq?.req_subject}}</td>\n      </tr>\n      <tr>\n        <th>Status</th>\n        <td>{{genreq?.status}}</td>\n      </tr>\n      <tr>\n        <th>Longitude</th>\n        <td>{{genreq?.lon}}</td>\n      </tr>\n      <tr>\n        <th>Latitude</th>\n        <td>{{genreq?.lat}}</td>\n      </tr>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], GenReqDetailsComponent);

var _a, _b;
//# sourceMappingURL=gen-req-details.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
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
        });
    };
    GenreqComponent.prototype.ngOnInit = function () {
        this.updateGenReqList();
        this.resetModel();
    };
    GenreqComponent.prototype.onNewGenreq = function () {
        console.log('new genreq');
        $('#create-form').modal('toggle');
    };
    GenreqComponent.prototype.onSave = function (form) {
        var _this = this;
        this.model.req_time = new Date().toISOString();
        var request = this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'genreq', this.model);
        if (this.editMode) {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* config */].api_prefix + 'genreq', this.model);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateGenReqList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.reset();
        this.editMode = false;
    };
    GenreqComponent.prototype.onEdit = function (genreq) {
        this.editMode = true;
        console.log('on edit');
        this.model = genreq;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-genreq',
        template: __webpack_require__(192),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GenreqComponent);

var _a;
//# sourceMappingURL=genreq.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    api_prefix: 'https://p-f.herokuapp.com/'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(193),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-color: #563d7c;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n  background-color: #563d7c;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

},[238]);
//# sourceMappingURL=main.bundle.js.map