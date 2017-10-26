webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        // template: `<router-outlet></router-outlet>`,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_list_todo_edit_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_todo_service_client__ = __webpack_require__("../../../../../src/app/services/todo.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__todo_list_todo_edit_component__["a" /* TodoEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_12__services_todo_service_client__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_13__services_website_service_client__["a" /* WebsiteService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */





var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__["a" /* TodoComponent */] },
    { path: 'todoList', component: __WEBPACK_IMPORTED_MODULE_4__todo_list_todo_list_component__["a" /* TodoListComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"grid-container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/page/page-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Page\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editPageForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" value=\"Blog Post\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Title</label>\n                <input type=\"text\" placeholder=\"Page Title\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/page/page-list.html\" class=\"button customBtnColor\">Update Page</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/page/page-list.html\" class=\"button customBtnColor\">Delete Page</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/website/website-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Pages\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a href=\"/assets/views/page/page-new.html\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <h3>Page Name</h3>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <h3>Action</h3>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a href=\"/assets/views/widget/widget-list.html\">Blog Post</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a href=\"/assets/views/page/page-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a href=\"/assets/views/widget/widget-list.html\">Blogs</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a href=\"/assets/views/page/page-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a href=\"/assets/views/widget/widget-list.html\">Home</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a href=\"/assets/views/page/page-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a href=\"/assets/views/widget/widget-list.html\">About</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a href=\"/assets/views/page/page-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a href=\"/assets/views/widget/widget-list.html\">Contact Us</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a href=\"/assets/views/page/page-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageListComponent = (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageListComponent);

//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/page/page-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New Page\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"newPageForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Page Name\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Title</label>\n                <input type=\"text\" placeholder=\"Page Title\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/page/page-list.html\" class=\"button customBtnColor\">Add Page</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"login\">\n        <div class=\"callout\">\n          <h2>Log In</h2>\n          <hr>\n          <form method=\"post\" id=\"loginForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Username</label>\n                <input type=\"text\" placeholder=\"username\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Password</label>\n                <input type=\"password\" placeholder=\"password\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/user/profile.html\" class=\"button customBtnColor\">Login</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/user/register.html\" class=\"button customBtnColor\">Register</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"top-bar\">\n\t\t<div class=\"top-bar-left\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"/assets/views/user/login.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\tProfile\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</header>\n<div class=\"grid-container\">\n\t<div class=\"grid-x grid-padding-x\">\n\t\t<div class=\"large-12 cell\">\n\t\t\t<div class=\"stdPadding\">\n\t\t\t\t<div class=\"callout\">\n\t\t\t\t\t<form method=\"post\" id=\"profileForm\">\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"jannunzi\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t<input type=\"email\" value=\"jannunzi@gmail.com\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"Jose\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"Annunziato\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a href=\"/assets/views/user/profile.html\" class=\"button customBtnColor\">Update Profile</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a href=\"/assets/views/website/website-list.html\" class=\"button customBtnColor\">Websites</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a href=\"/assets/views/user/login.html\" class=\"button customBtnColor\">Logout</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\n</div>\n<footer>\n\t<div class=\"bottom-bar\">\n\t\t<div class=\"bottom-bar-right\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n\t<div class=\"grid-x grid-padding-x\">\n\t\t<div class=\"large-12 cell\">\n\t\t\t<div class=\"register\">\n\t\t\t\t<div class=\"callout\">\n\t\t\t\t\t<h2>Register</h2>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form method=\"post\" id=\"registerForm\">\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"username\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"password\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Verify Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"verify password\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a href=\"/assets/views/user/profile.html\" class=\"button customBtnColor\">Register</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a href=\"/assets/views/user/login.html\" class=\"button customBtnColor\">Cancel</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/website/website-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Website\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editWebsiteForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" value=\"Blogger\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\">Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003. Generally, the blogs are hosted by Google.</textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/website/website-list.html\" class=\"button customBtnColor\">Update Website</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/website/website-list.html\" class=\"button customBtnColor\">Delete Website</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteEditComponent = (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteEditComponent);

//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Websites\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a href=\"/assets/views/website/website-new.html\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <h3>Website Name</h3>\n            </div>\n            <div class=\"large-3 cell\">\n              <h3>Created On</h3>\n            </div>\n            <div class=\"large-3 cell\">\n              <h3>Created By</h3>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <h3>Action</h3>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a href=\"/assets/views/page/page-list.html\">Address Book App</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a href=\"/assets/views/website/website-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a href=\"/assets/views/page/page-list.html\">Blogger</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a href=\"/assets/views/website/website-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a href=\"/assets/views/page/page-list.html\">Blogging App</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a href=\"/assets/views/website/website-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a href=\"/assets/views/page/page-list.html\">Script Testing App</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a href=\"/assets/views/website/website-edit.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteListComponent = (function () {
    function WebsiteListComponent() {
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteListComponent);

//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/website/website-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New Website\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"newWebsiteForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Name\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\" placeholder=\"Description\"></textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/website/website-list.html\" class=\"button customBtnColor\">Add Website</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteNewComponent = (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/widget/widget-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Choose Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"/assets/views/widget/widget-heading.html\">Header</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">Label</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">HTML</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">Text Input</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">Link</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">Button</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"/assets/views/widget/widget-image.html\">Image</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"/assets/views/widget/widget-youtube.html\">Youtube</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">Data Table</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a href=\"\">Repeater</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/widget/widget-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editHeadingForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Text</label>\n                <input type=\"text\" value=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Size</label>\n                <input type=\"text\" value=\"3\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/widget/widget-list.html\" class=\"button customBtnColor\">Update Heading</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/widget/widget-list.html\" class=\"button customBtnColor\">Delete Heading</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/widget/widget-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editHeadingForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Text</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>URL</label>\n                <input type=\"text\" value=\"http://lorempixel.com/400/200/sports/1/\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Width</label>\n                <input type=\"text\" value=\"100%\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Upload</label>\n                <input type=\"file\" />\n                <div class=\"grid-x grid-padding-x\">\n                  <div class=\"large-2 medium-2 cell\">\n                    <a href=\"/assets/views/widget/widget-list.html\" class=\"button deleteBtnColor\">Upload Image</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/widget/widget-list.html\" class=\"button customBtnColor\">Update Image</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/widget/widget-list.html\" class=\"button customBtnColor\">Delete Image</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/widget/widget-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editHeadingForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Text</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>URL</label>\n                <input type=\"text\" value=\"https://www.youtube.com/watch?v=uSAQJBTO9r8\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Width</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/widget/widget-list.html\" class=\"button customBtnColor\">Update YouTube</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a href=\"/assets/views/widget/widget-list.html\" class=\"button customBtnColor\">Delete YouTube</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/page/page-list.html\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Widgets\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a href=\"/assets/views/widget/widget-choose.html\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <h1>GIZMODO</h1>\n              <div class=\"icons\">\n                <a href=\"/assets/views/widget/widget-heading.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>\n              <div class=\"icons\">\n                <a href=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p><img src=\"http://lorempixel.com/400/200/\" /></p>\n              <div class=\"icons\">\n                <a href=\"/assets/views/widget/widget-image.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p>Lorem Ipsum is simply dummy text <a href=\"\" target=\"_blank\">of the printing</a> and typesetting industry. Lorem Ipsum has been the <a href=\"\" target=\"_blank\">industry's standard dummy</a> text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n              <div class=\"icons\">\n                <a href=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>\n              <div class=\"icons\">\n                <a href=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p>\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zz3kBovtubA\" frameborder=\"0\" allowfullscreen></iframe>\n              </p>\n              <div class=\"icons\">\n                <a href=\"/assets/views/widget/widget-youtube.html\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <div class=\"icons\">\n                <a href=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a href=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a href=\"/assets/views/user/profile.html\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__ = __webpack_require__("../../../../../src/app/todo-list/todo-mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todos = __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__["a" /* TODOS */];
    }
    // findAllTodos(): Todo[] {
    TodoService.prototype.findAllTodos = function () {
        console.log('findAllTodos');
        return this.http.get('http://localhost:3100/api/todo')
            .map(function (res) {
            var data = res.json();
            return data;
        });
        // return this.todos;
    };
    TodoService.prototype.createTodo = function (todo) {
        var todoCopy = __assign({}, todo);
        this.todos.push(todoCopy);
        return this.http.post('http://localhost:3100/api/todo', todo)
            .map(function (res) {
            return res.json();
        });
    };
    TodoService.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.mock.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBSITES; });
var WEBSITES = [
    { _id: '123', name: 'Facebook', description: 'description 123' },
    { _id: '234', name: 'Twitter', description: 'description 234' },
    { _id: '345', name: 'Wikipedia', description: 'description 345' }
];
//# sourceMappingURL=website.mock.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__website_mock_client__ = __webpack_require__("../../../../../src/app/services/website.mock.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });

var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = __WEBPACK_IMPORTED_MODULE_0__website_mock_client__["a" /* WEBSITES */];
    }
    WebsiteService.prototype.findAllWebsites = function () {
        return this.websites;
    };
    return WebsiteService;
}());

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Edit Todo</h2>\r\n<label for=\"title\">Title</label>\r\n<input [(ngModel)]=\"todo.title\"\r\n       class=\"form-control\"\r\n       id=\"title\">\r\n<br/>\r\n<label for=\"description\">\r\n  Description</label>\r\n<textarea [(ngModel)]=\"todo.description\"\r\n          class=\"form-control\"\r\n          id=\"description\"></textarea>\r\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo2__ = __webpack_require__("../../../../../src/app/todo-list/todo2.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = (function () {
    function TodoEditComponent() {
    }
    return TodoEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */]) === "function" && _a || Object)
], TodoEditComponent.prototype, "todo", void 0);
TodoEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo-edit',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-edit.component.html")
    })
], TodoEditComponent);

var _a;
//# sourceMappingURL=todo-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-5\">\r\n      <h1>Todo List</h1>\r\n      <div class=\"input-group\">\r\n        <input placeholder=\"Todo Title\"\r\n               [(ngModel)]=\"newTodo.title\"\r\n               class=\"form-control\">\r\n        <span class=\"input-group-btn\">\r\n    <button (click)=\"onAddTodo(newTodo)\"\r\n            class=\"btn btn-default\">\r\n       Add\r\n    </button>\r\n  </span>\r\n      </div>\r\n\r\n      <ul class=\"list-group\">\r\n        <li *ngFor=\"let todo of todos; let i = index\"\r\n            [class.selected]=\"todo === selectedTodo\"\r\n            class=\"list-group-item\">\r\n          {{todo.title}}\r\n          <a class=\"pull-right\"\r\n             (click)=\"onSelectTodo(todo)\">\r\n        <span class=\"glyphicon glyphicon-cog\">\r\n        </span>\r\n          </a>\r\n          <a class=\"pull-right\"\r\n             (click)=\"onDeleteTodo(i)\">\r\n        <span class=\"glyphicon\r\n           glyphicon-remove\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-7\">\r\n      <app-todo-edit [todo]=\"selectedTodo\"\r\n                     *ngIf=\"selectedTodo\">\r\n      </app-todo-edit>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo2__ = __webpack_require__("../../../../../src/app/todo-list/todo2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__ = __webpack_require__("../../../../../src/app/services/todo.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo2__["a" /* Todo */]();
    }
    TodoListComponent.prototype.onSelectTodo = function (todo) {
        this.selectedTodo = todo;
    };
    TodoListComponent.prototype.onAddTodo = function (todo) {
        var _this = this;
        this.todoService.createTodo(todo)
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoListComponent.prototype.onDeleteTodo = function (index) {
        this.todoService.deleteTodo(index);
    };
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todos = this.todoService.findAllTodos();
        this.todoService.findAllTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo-list',
        styles: [
            ".selected {\n     background-color: lightblue;\n   }"
        ],
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service_client__["a" /* TodoService */]) === "function" && _a || Object])
], TodoListComponent);

var _a;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TODOS; });
var TODOS = [
    { title: 'Pickup milk', description: 'Skim milk' },
    { title: 'Pickup kids', description: 'From school' },
    { title: 'Finish homework', description: 'Math' }
];
//# sourceMappingURL=todo-mock.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());

//# sourceMappingURL=todo2.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"title\"/>\r\n<br/>\r\n<textarea [(ngModel)]=\"description\"></textarea>\r\n<br/>\r\n<button (click)=\"addTodo()\">Add</button>\r\n\r\n<ul>\r\n  <li *ngFor=\"let todo of todos\">\r\n    {{todo.title}}\r\n    <span (click)=\"deleteTodo(todo)\">X</span>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo/todo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent() {
        this.todos = [];
        this.addTodo = function () {
            var todo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](this.title, this.description);
            this.todos.push(todo);
        };
        this.deleteTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        };
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);

//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(title, description) {
        this.title = title;
        this.description = description;
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map