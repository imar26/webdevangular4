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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_new_widget_html_new_widget_html_new_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-html-new/widget-html-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_new_widget_youtube_new_widget_youtube_new_component__["a" /* WidgetYoutubeNewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_new_widget_html_new_widget_html_new_component__["a" /* WidgetHtmlNewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_27__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_28__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_29__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_30__services_widget_service_client__["a" /* WidgetService */]],
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Page\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editPageForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Blog Post\" [(ngModel)]=\"page.name\" name=\"name\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\" [(ngModel)]=\"page.description\" name=\"description\"></textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a (click)=\"update(page)\" class=\"button customBtnColor\">Update Page</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a (click)=\"delete(page._id)\" class=\"button customBtnColor\">Delete Page</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageEditComponent(router, activatedRoute, pageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
        this.page = this.pageService.findPageById(this.pageId);
    };
    PageEditComponent.prototype.update = function (page) {
        var updatePage = this.pageService.updatePage(this.pageId, page);
        if (updatePage) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/']);
        }
    };
    PageEditComponent.prototype.delete = function (pageId) {
        var deletedPage = this.pageService.deletePage(pageId);
        if (deletedPage) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/']);
        }
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Pages\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-8 cell\">\n              <h3>Page Name</h3>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <h3>Action</h3>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\" *ngFor=\"let page of pages\">\n            <div class=\"large-8 cell\">\n              <p><a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a></p>\n            </div>\n            <div class=\"large-4 cell clearfix text-right\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageListComponent(activatedRoute, pageService) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
        this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New Page\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form (ngSubmit)=\"createPage()\" #f=\"ngForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell field\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Page Name\" name=\"name\" ngModel #name=\"ngModel\" required />\n                <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">Please enter name!</span>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\" placeholder=\"Description\" name=\"description\" ngModel #description=\"ngModel\"></textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <button type=\"submit\" [disabled]=\"!f.valid\" class=\"button customBtnColor\">Add Page</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageNewComponent(activatedRoute, pageService, router) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.router = router;
        this.page = {};
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
    };
    PageNewComponent.prototype.createPage = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        this.page['name'] = this.name;
        this.page['description'] = this.description;
        var page = this.pageService.createPage(this.websiteId, this.page);
        if (page) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/']);
        }
    };
    return PageNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageForm", void 0);
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit Website\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <form method=\"post\" id=\"editWebsiteForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Blogger\" [(ngModel)]=\"website.name\" name=\"name\" />\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\" [(ngModel)]=\"website.description\" name=\"description\"></textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <a (click)=\"update(website)\" class=\"button customBtnColor\">Update Website</a>\n              </div>\n              <div class=\"large-2 medium-2 cell\">\n                <a (click)=\"delete(website._id)\" class=\"button customBtnColor\">Delete Website</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
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
    function WebsiteEditComponent(activatedRoute, websiteService, router) {
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
        this.website = this.websiteService.findWebsiteById(this.websiteId);
    };
    WebsiteEditComponent.prototype.update = function (website) {
        var updateWebsite = this.websiteService.updateWebsite(this.websiteId, website);
        if (updateWebsite) {
            this.router.navigate(['/user/' + this.userId + '/website/']);
        }
    };
    WebsiteEditComponent.prototype.delete = function (websiteId) {
        var deletedWebsite = this.websiteService.deleteWebsite(websiteId);
        if (deletedWebsite) {
            this.router.navigate(['/user/' + this.userId + '/website/']);
        }
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Websites\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/new\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-3 cell\">\n              <h3>Website Name</h3>\n            </div>\n            <div class=\"large-3 cell\">\n              <h3>Created On</h3>\n            </div>\n            <div class=\"large-3 cell\">\n              <h3>Created By</h3>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <h3>Action</h3>\n            </div>\n          </div>\n          <div class=\"grid-x grid-padding-x\" *ngFor=\"let website of websites\">\n            <div class=\"large-3 cell\">\n              <p><a routerLink=\"/user/{{website.developerId}}/website/{{website._id}}/page\">{{website.name}}</a></p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>{{website.createdOn | date:'shortDate'}}</p>\n            </div>\n            <div class=\"large-3 cell\">\n              <p>{{user.firstName}} {{user.lastName}}</p>\n            </div>\n            <div class=\"large-3 cell clearfix text-right\">\n              <a routerLink=\"/user/{{website.developerId}}/website/{{website._id}}\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function WebsiteListComponent(websiteService, activatedRoute, userService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        if (this.websites) {
            this.user = this.userService.findUserById(this.userId);
        }
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New Website\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <form (ngSubmit)=\"createWebsite()\" #f=\"ngForm\">\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell field\">\n                <label>Name</label>\n                <input type=\"text\" placeholder=\"Name\" name=\"name\" ngModel required #name=\"ngModel\" />\n                <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">Please enter name!</span>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell\">\n                <label>Description</label>\n                <textarea rows=\"3\" placeholder=\"Description\" name=\"description\" ngModel #description=\"ngModel\"></textarea>\n              </div>\n            </div>\n            <div class=\"grid-x grid-padding-x\">\n              <div class=\"large-2 medium-2 cell\">\n                <button type=\"submit\" class=\"button customBtnColor\" [disabled]=\"!f.valid\">Add Website</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function WebsiteNewComponent(activatedRoute, websiteService, router) {
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
        this.website = {};
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.errorMsg = "Website could not be created successfully.";
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        this.website['name'] = this.name;
        this.website['description'] = this.description;
        var website = this.websiteService.createWebsite(this.userId, this.website);
        if (website) {
            this.router.navigate(['/user/' + this.userId + '/website/']);
        }
        else {
            this.errorFlag = true;
        }
    };
    return WebsiteNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Choose Widget\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div class=\"grid-x grid-padding-x\">\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/header\">Header</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/html\">HTML</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/image\">Image</a></p>\n            </div>\n            <div class=\"large-12 cell widgets\">\n              <p><a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/youtube\">Youtube</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function WidgetChooserComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], WidgetChooserComponent);

var _a, _b;
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

module.exports = "<header>\n    <div class=\"top-bar\">\n      <div class=\"top-bar-left\">\n        <ul class=\"menu\">\n          <li>\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Edit {{widgetName}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class=\"grid-container\">\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"large-12 cell\">\n        <div class=\"stdPadding\">\n          <div class=\"callout\">\n            <div [ngSwitch]=\"widget.widgetType\">\n              <div *ngSwitchCase=\"'HEADING'\">\n                <app-widget-header></app-widget-header>\n              </div>\n              <div *ngSwitchCase=\"'HTML'\">\n                <app-widget-html></app-widget-html>\n              </div>\n              <div *ngSwitchCase=\"'IMAGE'\">\n                <app-widget-image></app-widget-image>\n              </div>\n              <div *ngSwitchCase=\"'YOUTUBE'\">\n                <app-widget-youtube></app-widget-youtube>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer>\n    <div class=\"bottom-bar\">\n      <div class=\"bottom-bar-right\">\n        <ul class=\"menu\">\n          <li>\n            <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetEditComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        if (this.widget['widgetType'] == 'HEADING') {
            this.widgetName = 'header';
        }
        else if (this.widget['widgetType'] == 'HTML') {
            this.widgetName = 'html';
        }
        else if (this.widget['widgetType'] == 'IMAGE') {
            this.widgetName = 'image';
        }
        else if (this.widget['widgetType'] == 'YOUTUBE') {
            this.widgetName = 'youtube';
        }
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
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

module.exports = "<form method=\"post\" id=\"editHeadingForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Widget Type\" disabled name=\"widgetType\" [(ngModel)]=\"widget.widgetType\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Size</label>\n      <select name=\"size\" [(ngModel)]=\"widget.size\">\n        <option [value]=\"1\" [selected]=\"widget.size == '1'\">1</option>\n        <option [value]=\"2\" [selected]=\"widget.size == '2'\">2</option>\n        <option [value]=\"3\" [selected]=\"widget.size == '3'\">3</option>\n        <option [value]=\"4\" [selected]=\"widget.size == '4'\">4</option>\n        <option [value]=\"5\" [selected]=\"widget.size == '5'\">5</option>\n        <option [value]=\"6\" [selected]=\"widget.size == '6'\">6</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"update(widget)\" class=\"button customBtnColor\">Update Heading</a>\n    </div>\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"delete(widget._id)\" class=\"button customBtnColor\">Delete Heading</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetHeaderComponent(router, widgetService, activatedRoute) {
        this.router = router;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetHeaderComponent.prototype.update = function (widget) {
        var updateWidget = this.widgetService.updateWidget(this.widgetId, widget);
        if (updateWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    WidgetHeaderComponent.prototype.delete = function (widgetId) {
        var deletedWidget = this.widgetService.deleteWidget(widgetId);
        if (deletedWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"post\" id=\"editHtmlForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Widget Type\" disabled name=\"widgetType\" [(ngModel)]=\"widget.widgetType\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"update(widget)\" class=\"button customBtnColor\">Update Html</a>\n    </div>\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"delete(widget._id)\" class=\"button customBtnColor\">Delete Html</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(router, widgetService, activatedRoute) {
        this.router = router;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetHtmlComponent.prototype.update = function (widget) {
        var updateWidget = this.widgetService.updateWidget(this.widgetId, widget);
        if (updateWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    WidgetHtmlComponent.prototype.delete = function (widgetId) {
        var deletedWidget = this.widgetService.deleteWidget(widgetId);
        if (deletedWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

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

module.exports = "<form method=\"post\" id=\"editImageForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Widget Type\" disabled name=\"widgetType\" [(ngModel)]=\"widget.widgetType\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>URL</label>\n      <input type=\"text\" placeholder=\"URL\" name=\"url\" [(ngModel)]=\"widget.url\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Width</label>\n      <select name=\"width\" [(ngModel)]=\"widget.width\">\n        <option [value]=\"20\" [selected]=\"widget.width == '20'\">20%</option>\n        <option [value]=\"40\" [selected]=\"widget.width == '40'\">40%</option>\n        <option [value]=\"60\" [selected]=\"widget.width == '60'\">60%</option>\n        <option [value]=\"80\" [selected]=\"widget.width == '80'\">80%</option>\n        <option [value]=\"100\" [selected]=\"widget.width == '100'\">100%</option>\n      </select>\n    </div>\n  </div>\n  <!-- <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Upload</label>\n      <input type=\"file\" />\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"large-2 medium-2 cell\">\n          <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button deleteBtnColor\">Upload Image</a>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"update(widget)\" class=\"button customBtnColor\">Update Image</a>\n    </div>\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"delete(widget._id)\" class=\"button customBtnColor\">Delete Image</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetImageComponent(router, widgetService, activatedRoute) {
        this.router = router;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetImageComponent.prototype.update = function (widget) {
        var updateWidget = this.widgetService.updateWidget(this.widgetId, widget);
        if (updateWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    WidgetImageComponent.prototype.delete = function (widgetId) {
        var deletedWidget = this.widgetService.deleteWidget(widgetId);
        if (deletedWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
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

module.exports = "<form method=\"post\" id=\"editYoutubeForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Widget Type\" disabled name=\"widgetType\" [(ngModel)]=\"widget.widgetType\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>URL</label>\n      <input type=\"text\" placeholder=\"URL\" name=\"url\" [(ngModel)]=\"widget.url\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Width</label>\n      <select name=\"width\" [(ngModel)]=\"widget.width\">\n        <option [value]=\"20\" [selected]=\"widget.width == '20'\">20%</option>\n        <option [value]=\"40\" [selected]=\"widget.width == '40'\">40%</option>\n        <option [value]=\"60\" [selected]=\"widget.width == '60'\">60%</option>\n        <option [value]=\"80\" [selected]=\"widget.width == '80'\">80%</option>\n        <option [value]=\"100\" [selected]=\"widget.width == '100'\">100%</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"update(widget)\" class=\"button customBtnColor\">Update Image</a>\n    </div>\n    <div class=\"large-2 medium-2 cell\">\n      <a (click)=\"delete(widget._id)\" class=\"button customBtnColor\">Delete Image</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetYoutubeComponent(router, widgetService, activatedRoute) {
        this.router = router;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetYoutubeComponent.prototype.update = function (widget) {
        var updateWidget = this.widgetService.updateWidget(this.widgetId, widget);
        if (updateWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    WidgetYoutubeComponent.prototype.delete = function (widgetId) {
        var deletedWidget = this.widgetService.deleteWidget(widgetId);
        if (deletedWidget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.widgetId + '/page/' + this.pageId + '/widget']);
        }
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> Widgets\n        </li>\n      </ul>\n    </div>\n    <div class=\"top-bar-right\">\n      <ul class=\"menu text-right\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/choose\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div *ngFor=\"let widget of widgets\">\n            <div [ngSwitch]=\"widget.widgetType\" class=\"grid-x grid-padding-x\">\n              <div class=\"large-12 cell widgets\" *ngSwitchCase=\"'HEADING'\">\n                <h1>{{widget.text}}</h1>\n                <div class=\"icons\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                  <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n              <div class=\"large-12 cell widgets\" *ngSwitchCase=\"'HTML'\">\n                <div [innerHTML]=\"widget.text\"></div>\n                <div class=\"icons\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                  <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n              <div class=\"large-12 cell widgets\" *ngSwitchCase=\"'IMAGE'\">\n                <p><img [src]=\"widget.url\" [style.width.%]=\"widget.width\" /></p>\n                <div class=\"icons\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                  <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n              <div class=\"large-12 cell widgets\" *ngSwitchCase=\"'YOUTUBE'\">\n                <p>\n                  <iframe [style.width.%]=\"widget.width\" height=\"450\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\" frameborder=\"0\" allowfullscreen></iframe>\n                </p>\n                <div class=\"icons\">\n                  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n                  <a routerLink=\"\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    function WidgetListComponent(activatedRoute, router, widgetService, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
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

module.exports = "<form (ngSubmit)=\"createHeader()\" #f=\"ngForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell field\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Widget Type\" disabled name=\"widgetType\" value=\"{{widgetName}}\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" ngModel name=\"text\" #text=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Size</label>\n      <select ngModel name=\"size\" #size=\"ngModel\">\n        <option [ngValue]=\"1\">1</option>\n        <option [ngValue]=\"2\">2</option>\n        <option [ngValue]=\"3\">3</option>\n        <option [ngValue]=\"4\">4</option>\n        <option [ngValue]=\"5\">5</option>\n        <option [ngValue]=\"6\">6</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <button type=\"submit\" [disabled]=\"!f.valid\" class=\"button customBtnColor\">Add Header</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetHeaderNewComponent(router, activatedRoute, widgetService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = {};
    }
    WidgetHeaderNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetType = params['widgetType'];
        });
        if (this.widgetType == 'header') {
            this.widgetName = 'HEADING';
        }
        else if (this.widgetType == 'html') {
            this.widgetName = 'HTML';
        }
        else if (this.widgetType == 'image') {
            this.widgetName = 'IMAGE';
        }
        else if (this.widgetType == 'youtube') {
            this.widgetName = 'YOUTUBE';
        }
    };
    WidgetHeaderNewComponent.prototype.createHeader = function () {
        this.text = this.headerForm.value.text;
        this.size = this.headerForm.value.size;
        this.widget['widgetType'] = this.widgetName;
        this.widget['text'] = this.text;
        this.widget['size'] = this.size;
        this.widget['width'] = null;
        this.widget['url'] = null;
        var widget = this.widgetService.createWidget(this.pageId, this.widget);
        if (widget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/']);
        }
    };
    return WidgetHeaderNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetHeaderNewComponent.prototype, "headerForm", void 0);
WidgetHeaderNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-header-new/widget-header-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object])
], WidgetHeaderNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-header-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-html-new/widget-html-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-html-new/widget-html-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createHtml()\" #f=\"ngForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell field\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Name\" disabled name=\"widgetType\" value=\"{{widgetName}}\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" ngModel name=\"text\" #text=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <button type=\"submit\" [disabled]=\"!f.valid\" class=\"button customBtnColor\">Add Html</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-html-new/widget-html-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlNewComponent = (function () {
    function WidgetHtmlNewComponent(router, activatedRoute, widgetService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = {};
    }
    WidgetHtmlNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetType = params['widgetType'];
        });
        if (this.widgetType == 'header') {
            this.widgetName = 'HEADING';
        }
        else if (this.widgetType == 'html') {
            this.widgetName = 'HTML';
        }
        else if (this.widgetType == 'image') {
            this.widgetName = 'IMAGE';
        }
        else if (this.widgetType == 'youtube') {
            this.widgetName = 'YOUTUBE';
        }
    };
    WidgetHtmlNewComponent.prototype.createHtml = function () {
        this.text = this.htmlForm.value.text;
        this.widget['widgetType'] = this.widgetName;
        this.widget['text'] = this.text;
        this.widget['size'] = null;
        this.widget['width'] = null;
        this.widget['url'] = null;
        var widget = this.widgetService.createWidget(this.pageId, this.widget);
        if (widget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/']);
        }
    };
    return WidgetHtmlNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetHtmlNewComponent.prototype, "htmlForm", void 0);
WidgetHtmlNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-html-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-html-new/widget-html-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-html-new/widget-html-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object])
], WidgetHtmlNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html-new.component.js.map

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

module.exports = "<form (ngSubmit)=\"createImage()\" #f=\"ngForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Widget Type</label>\n      <input type=\"text\" placeholder=\"Name\" disabled name=\"widgetType\" value=\"{{widgetName}}\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Text</label>\n      <input type=\"text\" placeholder=\"Text\" ngModel name=\"text\" #text=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>URL</label>\n      <input type=\"text\" placeholder=\"URL\" ngModel name=\"url\" #url=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Width</label>\n      <select ngModel name=\"width\" #width=\"ngModel\">\n        <option [ngValue]=\"20\">20%</option>\n        <option [ngValue]=\"40\">40%</option>\n        <option [ngValue]=\"60\">60%</option>\n        <option [ngValue]=\"80\">80%</option>\n        <option [ngValue]=\"100\">100%</option>\n      </select>\n    </div>\n  </div>\n  <!-- <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <label>Upload</label>\n      <input type=\"file\" />\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"large-2 medium-2 cell\">\n          <a routerLink=\"/user/123/website/123/page/123/widget\" class=\"button deleteBtnColor\">Upload Image</a>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <button type=\"submit\" [disabled]=\"!f.valid\" class=\"button customBtnColor\">Add Image</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetImageNewComponent(router, activatedRoute, widgetService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = {};
    }
    WidgetImageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetType = params['widgetType'];
        });
        if (this.widgetType == 'header') {
            this.widgetName = 'HEADING';
        }
        else if (this.widgetType == 'html') {
            this.widgetName = 'HTML';
        }
        else if (this.widgetType == 'image') {
            this.widgetName = 'IMAGE';
        }
        else if (this.widgetType == 'youtube') {
            this.widgetName = 'YOUTUBE';
        }
    };
    WidgetImageNewComponent.prototype.createImage = function () {
        this.text = this.imageForm.value.text;
        this.url = this.imageForm.value.url;
        this.width = this.imageForm.value.width;
        this.widget['widgetType'] = this.widgetName;
        this.widget['text'] = this.text;
        this.widget['size'] = null;
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        var widget = this.widgetService.createWidget(this.pageId, this.widget);
        if (widget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/']);
        }
    };
    return WidgetImageNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetImageNewComponent.prototype, "imageForm", void 0);
WidgetImageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-image-new/widget-image-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object])
], WidgetImageNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<header>\n  <div class=\"top-bar\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/choose\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> New {{widgetType}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n      <div class=\"stdPadding\">\n        <div class=\"callout\">\n          <div [ngSwitch]=\"widgetName\">\n            <div *ngSwitchCase=\"'HEADING'\">\n              <app-widget-header-new></app-widget-header-new>\n            </div>\n            <div *ngSwitchCase=\"'HTML'\">\n              <app-widget-html-new></app-widget-html-new>\n            </div>\n            <div *ngSwitchCase=\"'IMAGE'\">\n              <app-widget-image-new></app-widget-image-new>\n            </div>\n            <div *ngSwitchCase=\"'YOUTUBE'\">\n              <app-widget-youtube-new></app-widget-youtube-new>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"bottom-bar\">\n    <div class=\"bottom-bar-right\">\n      <ul class=\"menu\">\n        <li>\n          <a routerLink=\"/user/{{userId}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function WidgetNewComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WidgetNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetType = params['widgetType'];
        });
        if (this.widgetType == 'header') {
            this.widgetName = 'HEADING';
        }
        else if (this.widgetType == 'html') {
            this.widgetName = 'HTML';
        }
        else if (this.widgetType == 'image') {
            this.widgetName = 'IMAGE';
        }
        else if (this.widgetType == 'youtube') {
            this.widgetName = 'YOUTUBE';
        }
    };
    return WidgetNewComponent;
}());
WidgetNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetNewComponent);

var _a;
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

module.exports = "<form (ngSubmit)=\"createYoutube()\" #f=\"ngForm\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n        <label>Widget Type</label>\n        <input type=\"text\" placeholder=\"Name\" disabled name=\"widgetType\" value=\"{{widgetName}}\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n        <label>Text</label>\n        <input type=\"text\" placeholder=\"Text\" ngModel name=\"text\" #text=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n        <label>URL</label>\n        <input type=\"text\" placeholder=\"URL\" ngModel name=\"url\" #url=\"ngModel\" />\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-12 cell\">\n        <label>Width</label>\n        <select ngModel name=\"width\" #width=\"ngModel\">\n          <option [ngValue]=\"20\">20%</option>\n          <option [ngValue]=\"40\">40%</option>\n          <option [ngValue]=\"60\">60%</option>\n          <option [ngValue]=\"80\">80%</option>\n          <option [ngValue]=\"100\">100%</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"large-2 medium-2 cell\">\n      <button type=\"submit\" [disabled]=\"!f.valid\" class=\"button customBtnColor\">Add Youtube</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetYoutubeNewComponent(router, activatedRoute, widgetService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = {};
    }
    WidgetYoutubeNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetType = params['widgetType'];
        });
        if (this.widgetType == 'header') {
            this.widgetName = 'HEADING';
        }
        else if (this.widgetType == 'html') {
            this.widgetName = 'HTML';
        }
        else if (this.widgetType == 'image') {
            this.widgetName = 'IMAGE';
        }
        else if (this.widgetType == 'youtube') {
            this.widgetName = 'YOUTUBE';
        }
    };
    WidgetYoutubeNewComponent.prototype.createYoutube = function () {
        this.text = this.youtubeForm.value.text;
        this.url = this.youtubeForm.value.url;
        this.width = this.youtubeForm.value.width;
        this.widget['widgetType'] = this.widgetName;
        this.widget['text'] = this.text;
        this.widget['size'] = null;
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        var widget = this.widgetService.createWidget(this.pageId, this.widget);
        if (widget) {
            this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/']);
        }
    };
    return WidgetYoutubeNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetYoutubeNewComponent.prototype, "youtubeForm", void 0);
WidgetYoutubeNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube-new',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-youtube-new/widget-youtube-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object])
], WidgetYoutubeNewComponent);

var _a, _b, _c, _d;
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
        this.pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var length = this.pages.length;
        page._id = (length + 1).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var pagesList = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pagesList.push(this.pages[x]);
            }
        }
        return pagesList;
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
        this.websites = [
            { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
            { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
            { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
            { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
            { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
            { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem", "createdOn": "1/2/2017" }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var length = this.websites.length;
        website._id = (length + 1).toString();
        website.developerId = userId;
        website.createdOn = Date.now();
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var listWebsites = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                listWebsites.push(this.websites[x]);
            }
        }
        return listWebsites;
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
                return this.websites[x];
            }
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
        this.widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": "2", "text": "GIZMODO", "width": null, "url": null },
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": "4", "text": "Lorem ipsum", "width": null, "url": null },
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100", "url": "http://lorempixel.com/400/200/", "size": null, "text": null },
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum - <a>CLick here</a></p>", "width": null, "url": null, "size": null },
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": "4", "text": "Lorem ipsum", "width": null, "url": null },
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100", "url": "https://www.youtube.com/embed/AM2Ivdi9c4E", "size": null, "text": null },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>", "width": null, "url": null, "size": null }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var length = this.widgets.length;
        widget._id = (length + 1).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var widgetList = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                widgetList.push(this.widgets[x]);
            }
        }
        return widgetList;
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
                    this.widgets[x].size = null;
                    this.widgets[x].width = null;
                    this.widgets[x].url = null;
                }
                else if (this.widgets[x].widgetType == 'IMAGE') {
                    this.widgets[x].width = widget.width;
                    this.widgets[x].url = widget.url;
                    this.widgets[x].text = widget.text;
                    this.widgets[x].size = null;
                }
                else if (this.widgets[x].widgetType == 'YOUTUBE') {
                    this.widgets[x].width = widget.width;
                    this.widgets[x].url = widget.url;
                    this.widgets[x].text = widget.text;
                    this.widgets[x].size = null;
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