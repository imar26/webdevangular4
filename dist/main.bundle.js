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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_new_widget_new_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_new_widget_header_new_widget_header_new_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_new_widget_image_new_widget_image_new_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_new_widget_youtube_new_widget_youtube_new_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HomeComponent } from './components/home/home.component';
// import { TestComponent } from './components/test/test.component';



// import {TestService} from './services/test.service.client';
// import { TodoComponent } from './todo/todo.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { TodoEditComponent } from './todo-list/todo-edit.component';
// import {TodoService} from './services/todo.service.client';
// import {WebsiteService} from './services/website.service.client';



















// Services




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
            // HomeComponent,
            // TestComponent,
            // TodoComponent,
            // TodoListComponent,
            // TodoEditComponent,
            __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_new_widget_new_component__["a" /* WidgetNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_new_widget_header_new_widget_header_new_component__["a" /* WidgetHeaderNewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_new_widget_image_new_widget_image_new_component__["a" /* WidgetImageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_new_widget_youtube_new_widget_youtube_new_component__["a" /* WidgetYoutubeNewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_25__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_new_widget_new_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });

// import {TestComponent} from './components/test/test.component';
// import {TodoComponent} from './todo/todo.component';
// import {TodoListComponent} from './todo-list/todo-list.component';
// User Components



// Website Components



// Page Components



// Widget Components




var APP_ROUTES = [
    // {path: '', component : HomeComponent},
    // {path: 'todo', component : TodoComponent},
    // {path: 'todoList', component : TodoListComponent},
    // {path: 'test', component: TestComponent}
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/choose', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new/:widgetType', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_new_widget_new_component__["a" /* WidgetNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Page\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editPageForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" value=\"Blog Post\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Title</label>\n                <input type=\"text\" placeholder=\"Page Title\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page\" class=\"button customBtnColor\">Update Page</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page\" class=\"button customBtnColor\">Delete Page</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Pages\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page/new\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <h3>Page Name</h3>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <h3>Action</h3>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget\">Blog Post</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123/page/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget\">Blogs</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123/page/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget\">Home</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123/page/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget\">About</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123/page/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget\">Contact Us</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123/page/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New Page\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"newPageForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Page Name\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Title</label>\n                <input type=\"text\" placeholder=\"Page Title\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page\" class=\"button customBtnColor\">Add Page</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <h1>Welcome to MEAN Stack Web Development - Angular 4</h1>\n      <div class=\"login\">\n        <div class=\"callout\">\n          <h2>Log In</h2>\n          <hr>\n          <div *ngIf=\"errorFlag\">\n            {{errorMessage}}\n          </div>\n          <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell field\">\n                <label>Username</label>\n                <input type=\"text\" placeholder=\"username\" ngModel name=\"username\" required #username=\"ngModel\" />\n                <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell field\">\n                <label>Password</label>\n                <input type=\"password\" placeholder=\"password\" ngModel name=\"password\" required #password=\"ngModel\" />\n                <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <button type=\"submit\" class=\"button customBtnColor\" [disabled]=\"!f.valid\">Login</button>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/register\" class=\"button customBtnColor\">Register</a>\n              </div>\n            </div>\n          </form>\n          <div *ngIf=\"notFoundFlag\">\n            {{userNotFound}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = "Invalid username or password";
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user/' + user._id]);
        }
        else {
            this.notFoundFlag = true;
            this.userNotFound = "User not found.";
        }
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
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

module.exports = "<header>\n\t<div class=\"top-bar profile\">\n\t\t<div class=\"top-bar-left\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<li>\n\t\t\t\t\tProfile\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</header>\n<div class=\"grid-container\">\n\t<div class=\"grid-x grid-padding-x\">\n\t\t<div class=\"large-12 cell\">\n\t\t\t<div class=\"stdPadding\">\n\t\t\t\t<div class=\"callout\">\n\t\t\t\t\t<form method=\"post\" id=\"profileForm\">\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"jannunzi\" [(ngModel)]=\"user.username\" name=\"username\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t<input type=\"email\" value=\"jannunzi@gmail.com\" [(ngModel)]=\"user.email\" name=\"email\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"Jose\" [(ngModel)]=\"user.firstName\" name=\"firstName\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell\">\n\t\t\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"Annunziato\" [(ngModel)]=\"user.lastName\" name=\"lastName\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a (click)=\"updateUser(user)\" class=\"button customBtnColor\">Update Profile</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a (click)=\"goToWebsites()\" class=\"button customBtnColor\">Websites</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/login\" class=\"button customBtnColor\">Logout</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<div *ngIf=\"successFlag\">\n\t\t\t\t\t\t{{success}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\n</div>\n<footer>\n\t<div class=\"bottom-bar\">\n\t\t<div class=\"bottom-bar-right\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<li>\n\t\t\t\t\t<a (click)=\"goToProfile()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        console.log(this.user);
    };
    ProfileComponent.prototype.updateUser = function (user) {
        var updateUser = this.userService.updateUser(user._id, user);
        if (updateUser) {
            this.successFlag = true;
            this.success = "Profile updated successfully.";
        }
    };
    ProfileComponent.prototype.goToWebsites = function () {
        this.router.navigate(['/user/' + this.userId + '/website/']);
    };
    ProfileComponent.prototype.goToProfile = function () {
        this.router.navigate(['/user/' + this.userId]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
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

module.exports = "<div class=\"grid-container\">\n\t<div class=\"grid-x grid-padding-x\">\n\t\t<div class=\"large-12 cell\">\n\t\t\t<div class=\"register\">\n\t\t\t\t<div class=\"callout\">\n\t\t\t\t\t<h2>Register</h2>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div *ngIf=\"errorFlag\">{{errorMessage}}</div>\n\t\t\t\t\t<div *ngIf=\"usernameFlag\">{{usernameExists}}</div>\n\t\t\t\t\t<form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell field\">\n\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"username\" name=\"username\" ngModel #username=\"ngModel\" required />\n\t\t\t\t\t\t\t\t<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell field\">\n\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"password\" name=\"password\" ngModel #password=\"ngModel\" required />\n\t\t\t\t\t\t\t\t<span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-12 cell field\">\n\t\t\t\t\t\t\t\t<label>Verify Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"verify password\" name=\"verifypassword\" ngModel #verifypassword=\"ngModel\" required />\n\t\t\t\t\t\t\t\t<span class=\"help-block\" *ngIf=\"!verifypassword.valid && verifypassword.touched\">Please enter verifypassword!</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"grid-x grid-padding-x\">\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"button customBtnColor\" [disabled]=\"!f.valid\">Register</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"large-2 medium-2 cell\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/login\" class=\"button customBtnColor\">Cancel</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorMessage = "Passwords do not match";
        this.usernameExists = "Username already exists.";
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifypassword = this.registerForm.value.verifypassword;
        if (this.password === this.verifypassword) {
            this.user['username'] = this.username;
            this.user['password'] = this.password;
            var userExists = this.userService.findUserByUsername(this.username);
            if (userExists) {
                this.usernameFlag = true;
            }
            else {
                var user = this.userService.createUser(this.user);
                if (user) {
                    this.router.navigate(['/user/' + user._id]);
                }
            }
        }
        else {
            this.errorFlag = true;
        }
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Website\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editWebsiteForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" value=\"Blogger\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\">Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003. Generally, the blogs are hosted by Google.</textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website\" class=\"button customBtnColor\">Update Website</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website\" class=\"button customBtnColor\">Delete Website</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Websites\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a routerLink=\"/user/123/website/new\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <h3>Website Name</h3>\n            </div>\n            <div class=\"large-3 cell\">\n              <h3>Created On</h3>\n            </div>\n            <div class=\"large-3 cell\">\n              <h3>Created By</h3>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <h3>Action</h3>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a routerLink=\"/user/123/website/123/page\">Address Book App</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a routerLink=\"/user/123/website/123/page\">Blogger</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a routerLink=\"/user/123/website/123/page\">Blogging App</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <p><a routerLink=\"/user/123/website/123/page\">Script Testing App</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>1/2/2017</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>Aadesh Randeria</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a routerLink=\"/user/123/website/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New Website\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"newWebsiteForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Name\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\" placeholder=\"Description\"></textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website\" class=\"button customBtnColor\">Add Website</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page/123/widget\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Choose Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget/new/header\">Header</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">Label</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">HTML</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">Text Input</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">Link</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">Button</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget/new/image\">Image</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/123/website/123/page/123/widget/new/youtube\">Youtube</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">Data Table</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"\">Repeater</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page/123/widget\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editHeadingForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Text</label>\n                <input type=\"text\" value=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Size</label>\n                <input type=\"text\" value=\"3\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button customBtnColor\">Update Heading</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button customBtnColor\">Delete Heading</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page/123/widget\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editHeadingForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Text</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>URL</label>\n                <input type=\"text\" value=\"http://lorempixel.com/400/200/sports/1/\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Width</label>\n                <input type=\"text\" value=\"100%\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Upload</label>\n                <input type=\"file\" />\n                <div class=\"grid-x grid-padding-x\">\n                  <div class=\"large-2 medium-2 cell\">\n                    <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button deleteBtnColor\">Upload Image</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button customBtnColor\">Update Image</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button customBtnColor\">Delete Image</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page/123/widget\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editHeadingForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Text</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>URL</label>\n                <input type=\"text\" value=\"https://www.youtube.com/watch?v=uSAQJBTO9r8\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Width</label>\n                <input type=\"text\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button customBtnColor\">Update YouTube</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button customBtnColor\">Delete YouTube</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Widgets\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a routerLink=\"/user/123/website/123/page/123/widget/choose\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <h1>GIZMODO</h1>\n              <div class=\"icons\">\n                <a routerLink=\"/user/123/website/123/page/123/widget/123\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>\n              <div class=\"icons\">\n                <a routerLink=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p><img src=\"http://lorempixel.com/400/200/\" /></p>\n              <div class=\"icons\">\n                <a routerLink=\"/user/123/website/123/page/123/widget/234\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p>Lorem Ipsum is simply dummy text <a routerLink=\"\" target=\"_blank\">of the printing</a> and typesetting industry. Lorem Ipsum has been the <a routerLink=\"\" target=\"_blank\">industry's standard dummy</a> text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n              <div class=\"icons\">\n                <a routerLink=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>\n              <div class=\"icons\">\n                <a routerLink=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p>\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zz3kBovtubA\" frameborder=\"0\" allowfullscreen></iframe>\n              </p>\n              <div class=\"icons\">\n                <a routerLink=\"/user/123/website/123/page/123/widget/345\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <div class=\"icons\">\n                <a routerLink=\"\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/123\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

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

/***/ "../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-header-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderNewComponent = (function () {
    function WidgetHeaderNewComponent() {
    }
    WidgetHeaderNewComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderNewComponent;
}());
WidgetHeaderNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderNewComponent);

//# sourceMappingURL=widget-header-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-image-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageNewComponent = (function () {
    function WidgetImageNewComponent() {
    }
    WidgetImageNewComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageNewComponent;
}());
WidgetImageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageNewComponent);

//# sourceMappingURL=widget-image-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetNewComponent = (function () {
    function WidgetNewComponent() {
    }
    WidgetNewComponent.prototype.ngOnInit = function () {
    };
    return WidgetNewComponent;
}());
WidgetNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetNewComponent);

//# sourceMappingURL=widget-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-youtube-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeNewComponent = (function () {
    function WidgetYoutubeNewComponent() {
    }
    WidgetYoutubeNewComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeNewComponent;
}());
WidgetYoutubeNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeNewComponent);

//# sourceMappingURL=widget-youtube-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// injecting service into module
var PageService = (function () {
    function PageService() {
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.random();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].description = page.description;
            }
            return this.pages[x];
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
                return true;
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "" },
            { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "" },
            { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "" },
            { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "" }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        var length = this.users.length;
        user._id = (length + 1).toString();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x].firstName = user.firstName;
                this.users[x].lastName = user.lastName;
                this.users[x].email = user.email;
                return this.users[x];
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
                return true;
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x].name = website.name;
                this.websites[x].description = website.description;
            }
            return this.websites[x];
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
                return true;
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                if (this.widgets[x].widgetType == 'HEADING') {
                    this.widgets[x].text = widget.text;
                    this.widgets[x].size = widget.size;
                    this.widgets[x].width = null;
                    this.widgets[x].url = null;
                }
                else if (this.widgets[x].widgetType == 'HTML') {
                    this.widgets[x].text = widget.text;
                }
                else if (this.widgets[x].widgetType == 'IMAGE') {
                    this.widgets[x].width = widget.width;
                    this.widgets[x].url = widget.url;
                }
                else if (this.widgets[x].widgetType == 'YOUTUBE') {
                    this.widgets[x].width = widget.width;
                    this.widgets[x].url = widget.url;
                }
            }
            return this.widgets[x];
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
                return true;
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

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