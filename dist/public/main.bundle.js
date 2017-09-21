webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 104;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(116);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        $('#wrapper').toggleClass('toggled');
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
        template: __webpack_require__(175),
        styles: [__webpack_require__(171)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chef_chef_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dish_dish_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_client_client_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chef_chef_details_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dish_dish_details_component__ = __webpack_require__(71);
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
            __WEBPACK_IMPORTED_MODULE_12__components_dish_dish_details_component__["a" /* DishDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */]),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chef_chef_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dish_dish_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chef_chef_details_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dish_dish_details_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });





var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // App views
    // {path: '', component: LoginComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'orders', component: OrdersBoardComponent},
    { path: 'chefs', component: __WEBPACK_IMPORTED_MODULE_0__components_chef_chef_component__["a" /* ChefComponent */] },
    { path: 'chefs/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_chef_chef_details_component__["a" /* ChefDetailsComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__["a" /* ClientComponent */] },
    { path: 'chefs/:id/dishes', component: __WEBPACK_IMPORTED_MODULE_1__components_dish_dish_component__["a" /* DishComponent */] },
    { path: 'dishes/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_dish_dish_details_component__["a" /* DishDetailsComponent */] },
    { path: '**', redirectTo: 'login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 116:
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

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\n\nbody {\n  overflow-x: hidden;\n}\n\n#wrapper {\n  padding-left: 0;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled {\n  padding-left: 250px;\n}\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #563d7c;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n\n\n/* Sidebar Styles */\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: white;\n}\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav>.sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n\n.sidebar-nav>.sidebar-brand a {\n  color: white;\n}\n\n.sidebar-nav>.sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n\n@media(min-width:768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n  #wrapper.toggled {\n    padding-left: 250px;\n  }\n  #sidebar-wrapper {\n    width: 0;\n  }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n  }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative;\n  }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n      <li class=\"sidebar-brand\">\n        <a href=\"#\">\n          Productive Families\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"/chefs\">Chefs</a>\n      </li>\n      <li>\n        <a routerLink=\"/clients\">Clients</a>\n      </li>\n      <li>\n        <a routerLink=\"/genrequests\">General Requests</a>\n      </li>\n    </ul>\n  </div>\n  <!-- /#sidebar-wrapper -->\n\n  <!-- Page Content -->\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"card\">\n      <router-outlet></router-outlet>\n    </div>\n    </div>\n  </div>\n  <!-- /#page-content-wrapper -->\n</div>\n<!-- /#wrapper -->\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Chef</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <form class=\"form-edit\" #CreateChef>\n          <div >\n\n            <!--AVERAGE_RATING-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Average rating</label>\n                <input type=\"number\" name=\"average-rating\" [(ngModel)]=\"model.average_rating\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--AVERAGE_RATING-->\n\n            <!--IS ACTIVE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Is Active</label>\n                <input type=\"checkbox\" name=\"is-active\" [(ngModel)]=\"model.is_active\" required>\n              </div>\n            </div>\n            <!--IS ACTIVE-->\n\n            <!--DESCRIPTION-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Description</label>\n                <input type=\"text\" name=\"description\" [(ngModel)]=\"model.description\" class=\"form-control\">\n              </div>\n            </div>\n            <!--DESCRIPTION-->\n\n            <!--NAME-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Name</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--NAME-->\n\n            <!--EMAIL-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Email</label>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--EMAIL-->\n\n            <!--PHONE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Phone</label>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"model.phone_number\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--PHONE-->\n\n            <!--PASSWORD-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Password</label>\n                <input type=\"text\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--PASSWORD-->\n\n            <!--LAT-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Latitude</label>\n                <input type=\"text\" name=\"text\" [(ngModel)]=\"model.lat\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--LAT-->\n\n            <!--LON-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Longitude</label>\n                <input type=\"text\" name=\"text\" [(ngModel)]=\"model.lon\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--LON-->\n\n            <!--IMAGE-->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Image</label>\n                <input type=\"text\" name=\"text\" [(ngModel)]=\"model.images_iid\" class=\"form-control\" required>\n              </div>\n            </div>\n            <!--IMAGE-->\n          </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a data-toggle=\"modal\" class=\"btn btn-warning\" href=\"#create-form\" (click)=\"onSave(CreateChef)\">Save</a>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewChef()\">Create Chef</button>\n<hr>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Id</th>\n      <!--<th>User uid</th>-->\n      <th>Average rating</th>\n      <th>Is Active</th>\n      <th>Description</th>\n      <th>Name</th>\n      <th>Email</th>\n      <!--<th>Phone</th>-->\n      <!--<th>Password</th>-->\n      <!--<th>CreatedBy</th>-->\n      <!--<th>Creation</th>-->\n      <!--<th>Last modify by</th>-->\n      <!--<th>Last modify</th>-->\n      <!--<th>Password last modify</th>-->\n      <!--<th>Image Url</th>-->\n      <!--<th>Lon</th>-->\n      <!--<th>Lat</th>-->\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let o of chefsList;let i=index\">\n      <td>{{o.id}}</td>\n      <!--<td>{{o.user_uid}}</td>-->\n      <td>{{o.average_rating}}</td>\n      <td>{{o.is_active}}</td>\n      <td>{{o.description}}</td>\n      <td>{{o.name}}</td>\n      <td>{{o.email}}</td>\n      <!--<td>{{o.phone_number}}</td>-->\n      <!--<td>{{o.password}}</td>-->\n      <!--<td>{{o.createdby}}</td>-->\n      <!--<td>{{o.creation_time}}</td>-->\n      <!--<td>{{o.last_modify_by}}</td>-->\n      <!--<td>{{o.last_modify_time}}</td>-->\n      <!--<td>{{o.password_lastmodify}}</td>-->\n      <!--<td>{{o.images_iid}}</td>-->\n      <!--<td>{{o.lon}}</td>-->\n      <!--<td>{{o.lat}}</td>-->\n      <td>\n        <a class=\"btn btn-sm btn-warning\" (click)=\"onDishes(o.id)\" routerLink=\"/chefs/{{o.id}}/dishes/\">Dishes</a>\n        <a class=\"btn btn-sm btn-warning\" routerLink=\"/chefs/{{o.id}}/\">Details</a>\n        <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n        <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Client</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <form class=\"form-edit\" #CreateChef>\n            <div >\n\n              <!--NAME-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--NAME-->\n\n              <!--EMAIL-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email</label>\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--EMAIL-->\n\n              <!--PHONE-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Phone</label>\n                  <input type=\"text\" name=\"phone\" [(ngModel)]=\"model.phone_number\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--PHONE-->\n\n              <!--PASSWORD-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Password</label>\n                  <input type=\"text\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--PASSWORD-->\n\n              <!--LAT-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Latitude</label>\n                  <input type=\"text\" name=\"text\" [(ngModel)]=\"model.lat\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--LAT-->\n\n              <!--LON-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Longitude</label>\n                  <input type=\"text\" name=\"text\" [(ngModel)]=\"model.lon\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--LON-->\n\n              <!--IMAGE-->\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Image</label>\n                  <input type=\"text\" name=\"text\" [(ngModel)]=\"model.images_iid\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!--IMAGE-->\n\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a data-toggle=\"modal\" class=\"btn btn-warning\" href=\"#create-form\" (click)=\"onSave(CreateChef)\">Save</a>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-warning\" (click)=\"onNewClient()\">Create Client</button>\n<hr>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Email</th>\n    <th>Phone</th>\n    <th>Password</th>\n    <th>CreatedBy</th>\n    <th>Creation</th>\n    <th>Last modify by</th>\n    <th>Last modify</th>\n    <th>Password last modify</th>\n    <th>Image Url</th>\n    <th>Lon</th>\n    <th>Lat</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let o of clientsList;let i=index\">\n    <td>{{o.id}}</td>\n    <td>{{o.name}}</td>\n    <td>{{o.email}}</td>\n    <td>{{o.phone_number}}</td>\n    <td>{{o.password}}</td>\n    <td>{{o.createdby}}</td>\n    <td>{{o.creation_time}}</td>\n    <td>{{o.last_modify_by}}</td>\n    <td>{{o.last_modify_time}}</td>\n    <td>{{o.password_lastmodify}}</td>\n    <td>{{o.images_iid}}</td>\n    <td>{{o.lon}}</td>\n    <td>{{o.lat}}</td>\n    <td>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(o.id)\">Delete</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<!--create dialog-->\n<div id=\"create-form\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Dish</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <form class=\"form-edit\" #CreateDish>\n            <div >\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" [(ngModel)] = \"model.name\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Image Id</label>\n                  <input type=\"text\" name=\"images_iid\" [(ngModel)] = \"model.images_iid\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Available</label>\n                  <input type=\"text\" name=\"available\" [(ngModel)] = \"model.available\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Creation</label>\n                  <input type=\"text\" name=\"creation\" [(ngModel)] = \"model.creation\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Last Modify</label>\n                  <input type=\"text\" name=\"lastmodifytime\" [(ngModel)] = \"model.lastmodifytime\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Description</label>\n                  <input type=\"text\" name=\"discription\" [(ngModel)] = \"model.discription\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Price</label>\n                  <input type=\"number\" name=\"price\" [(ngModel)] = \"model.price\" required class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Foodcategory</label>\n                  <input type=\"text\" name=\"foodcatrgory_fcid\" [(ngModel)] = \"model.foodcatrgory_fcid\" required class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a data-toggle=\"modal\" class=\"btn btn-warning\" href=\"#create-form\" (click)=\"onSave(CreateDish)\">Save</a>\n      </div>\n    </div>\n  </div>\n</div>\n<!--END CREATE FORM-->\n\n<button class=\"btn btn-warning\" (click)=\"onNewDish()\">Create Dish</button>\n<hr>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Image Id</th>\n    <th>Available</th>\n    <th>Actions</th>\n    <th>Creation</th>\n    <th>Last Modify</th>\n    <th>Description</th>\n    <th>Price</th>\n    <th>Foodcategory</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let o of dishesList;let i=index\">\n    <td>{{o.id}}</td>\n    <td>{{o.name}}</td>\n    <td>{{o.image_path}}</td>\n    <td>{{o.available}}</td>\n    <td>{{o.action}}</td>\n    <td>{{o.creation}}</td>\n    <td>{{o.lastmodifytime}}</td>\n    <td>{{o.discription}}</td>\n    <td>{{o.price}}</td>\n    <td>{{o.foodcatrgory_fcid}}</td>\n    <td>\n      <a class=\"btn btn-sm btn-warning\" routerLink=\"/dishes/{{o.id}}/\">Details</a>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onEdit(o)\">Edit</button>\n      <button class=\"btn btn-sm btn-warning\" (click)=\"onDelete(o.id)\">Del</button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    api_prefix: 'https://p-f.herokuapp.com/'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ChefDetailsComponent);

var _a, _b;
//# sourceMappingURL=chef-details.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take__ = __webpack_require__(184);
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
            creation_time: 0,
            last_modify_by: 0,
            last_modify_time: 0,
            password_lastmodify: 0,
            images_iid: 0,
            lon: 0,
            lat: 0
        };
        this.editMode = false;
        this.model = this.defaultChefData;
        this.chefsObserver = this.http.get(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef').map(function (resp) { return resp.json().result; });
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
            creation_time: 0,
            last_modify_by: 0,
            last_modify_time: 0,
            password_lastmodify: 0,
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
            _this.chefsList = result;
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
        var request = this.http.post(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef', this.model);
        if (this.editMode) {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef', this.model);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateChefsList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.reset();
        this.editMode = false;
    };
    ChefComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('on delete', id);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* config */].api_prefix + 'chef/' + id).subscribe(function (result) { console.log('ok', result); _this.updateChefsList(); }, function (err) { return console.log('err', err); });
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
        template: __webpack_require__(176),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChefComponent);

var _a;
//# sourceMappingURL=chef.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(20);
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
    ClientComponent.prototype.resetModel = function () {
        this.model = {
            name: '',
            email: '',
            phone_number: '',
            password: '',
            createdby: 0,
            creation_time: 0,
            last_modify_by: 0,
            last_modify_time: 0,
            password_lastmodify: 0,
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
    ClientComponent.prototype.onSave = function () {
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
        template: __webpack_require__(177),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClientComponent);

var _a;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
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
        template: "\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <th>Id</th>\n        <td>{{dish?.id}}</td>\n      </tr>\n      <tr>\n        <th>Name</th>\n        <td>{{dish?.name}}</td>\n      </tr>\n      <tr>\n        <th>Category</th>\n        <td>{{dish?.cat_name}}</td>\n      </tr>\n      <tr>\n        <th>Avalible</th>\n        <td>{{dish?.available}}</td>\n      </tr>\n      <tr>\n        <th>Creation</th>\n        <td>{{dish?.creation}}</td>\n      </tr>\n      <tr>\n        <th>Image Path</th>\n        <td>{{dish?.image_path}}</td>\n      </tr>\n      <tr>\n        <th>Last Modify</th>\n        <td>{{dish?.lastmodifytime}}</td>\n      </tr>\n      <tr>\n        <th>Price</th>\n        <td>{{dish?.price}}</td>\n      </tr>\n      <tr>\n        <th>Chef id</th>\n        <td>{{dish?.serviceprovider_spid}}</td>\n      </tr>\n      </tbody>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], DishDetailsComponent);

var _a, _b;
//# sourceMappingURL=dish-details.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(20);
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
        this.editMode = false;
        this.chefId = -1;
    }
    DishComponent.prototype.resetModel = function () {
        this.model = {
            serviceprovider_spid: this.chefId,
            images_iid: 0,
            name: '',
            available: 1,
            creation: 0,
            lastmodifytime: 0,
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
        console.log(this.model);
        var request = this.http.post(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "chef/" + this.chefId + "/dish", this.model);
        if (this.editMode) {
            request = this.http.patch(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "chef/" + this.chefId + "/dish", this.model);
        }
        request.subscribe(function (result) { console.log('ok', result); _this.updateDishesList(); }, function (err) { return console.log('err', err); });
        this.resetModel();
        form.reset();
        this.editMode = false;
    };
    DishComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('on delete', id);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* config */].api_prefix + "chef/" + this.chefId + "/dish/" + id).subscribe(function (result) { console.log('ok', result); _this.updateDishesList(); }, function (err) { return console.log('err', err); });
    };
    DishComponent.prototype.onEdit = function (dish) {
        this.editMode = true;
        console.log('on edit', dish);
        this.model = dish;
        $('#create-form').modal('toggle');
    };
    return DishComponent;
}());
DishComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dish',
        template: __webpack_require__(178),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]) === "function" && _c || Object])
], DishComponent);

var _a, _b, _c;
//# sourceMappingURL=dish.component.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map