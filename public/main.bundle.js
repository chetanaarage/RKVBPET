webpackJsonp([1,5],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/validate.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(518);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/main.js.map

/***/ }),

/***/ 517:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(700),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_forgotten_password_forgotten_password_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_reset_reset_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'forgotten-password', component: __WEBPACK_IMPORTED_MODULE_14__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_16__components_reset_reset_component__["a" /* ResetComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/app.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(701),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgottenPasswordComponent = (function () {
    function ForgottenPasswordComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ForgottenPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgottenPasswordComponent.prototype.onResetLinkSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        this.authService.forgottenPasswordUser(user).subscribe(function (data) {
            console.log("data in forgotten-password", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to send  reset link', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    ForgottenPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotten-password',
            template: __webpack_require__(702),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/forgotten-password.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(703),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/home.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
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
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in successfully', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(704),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/login.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    //@ViewChild('toggle') menu_up;
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.collapse = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(705),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
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
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(706),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/profile.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(54);
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
    function RegisterComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var adress = {
            street: this.street,
            landmark: this.landmark,
            postalcode: this.postalcode,
            city: this.city,
            state: this.state
        };
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            dob: this.dob,
            address: adress,
            mobno: this.mobno,
            email: this.email,
            username: this.username,
            password: this.password
        };
        console.log("onRegisterSubmit", user);
        //Required fields
        // if(!this.validateService.validateRegister(user)){
        // 	this.flashMessage.show("Please fill in all fields",{cssClass:'alert-danger',timeout:3000});
        // 	return false;
        // }
        //Validate email
        // if(!this.validateService.validateEmail(user.email)){
        // 	this.flashMessage.show("Please enter a valid email",{cssClass:'alert-danger',timeout:3000});
        // 	return false;
        // }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Registered successfully,,!! You can login now..", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong..!!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(707),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/register.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = (function () {
    function ResetComponent(validateService, flashMessage, authService, route, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ResetComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //    this.token = params['token']; // --> Name must match wanted parameter
        //  });
        this.token = this.route.snapshot.params["token"];
    };
    ResetComponent.prototype.onResetPassword = function () {
        //  console.log(this.token);
        var _this = this;
        // console.log("access_token",resetToken);
        var user = {
            password: this.password,
            confirm: this.confirm,
            token: this.token
        };
        console.log("in reset component user", user);
        this.authService.resetPassword(user).subscribe(function (data) {
            console.log("data in reset resetPassword", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.password = "";
                _this.confirm = "";
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to change password', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/forgotten-password']);
            }
        });
    };
    ResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(708),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/reset.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
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
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log("in authenticate service register", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        console.log("in authenticate service login", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgottenPasswordUser = function (user) {
        console.log('in AuthService forgotten forgottenPassword', user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/forgottenPassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPassword = function (user) {
        console.log("in resetPassword service ", user.token);
        // let token=user.token;
        // console.log("user.token",token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        //let body = JSON.stringify(user);
        //console.log("body.token",body.token);
        return this.http.post('http://localhost:3000/reset/' + user.token, user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/happythoughts/angular-src/src/auth.service.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ".navbar {\n   background-color: transparent;\n   background: transparent;\n   border-color: transparent;\n}\n\n.navbar li { color: #000 } "

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Forgotten Password</h2>\n<p>Enter the email address you use to sign in to your Tesco.com account and we'll send you a link to reset your password.</p>\n<form (submit)=\"onResetLinkSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" \n\t\tplaceholder=\"ename@example.com\">\n\t</div>\n\t\n\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Get reset link\"/>\n</form>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "\n<body class=\"home page-template page-template-welcome page-template-welcome-php page page-id-5 page-animate fullpage-loaded fp-viewing-1\" style=\"overflow: hidden; height: 100%;\">\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img class=\"d-block img-fluid\" src=\"../images/image1.jpeg\" alt=\"Chania\">\n      <div class=\"carousel-caption\">\n        <h3>Los Angeles</h3>\n        <p>LA is always so much fun!</p>\n      </div>\n    </div>\n\n    <div class=\"item\">\n      <img class=\"d-block img-fluid\" src=\"../images/image2.jpeg\" alt=\"Chicago\">\n      <div class=\"carousel-caption\">\n        <h3>Chicago</h3>\n        <p>Thank you, Chicago!</p>\n      </div>\n    </div>\n\n    <div class=\"item\">\n      <img  class=\"d-block img-fluid\" src=\"../images/image3.jpeg\" alt=\"New York\">\n      <div class=\"carousel-caption\">\n        <h3>New York</h3>\n        <p>We love the Big Apple!</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</body>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\"> \n\t<div class=\"form-group\" >\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<a [routerLink]=\"['/forgotten-password']\">\n\t\t<span>I've forgotten my password</span>\n\t</a>\t\n\t<br/>\n\t<br/>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n<div>\n\n</div>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t\t\t<!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"  data-target=\"#navbar\" aria-expanded=\"true\" aria-controls=\"navbar\"> -->\n\t\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" href='#'>HappyThoughts</a>\n\t\t\n\t    </div>\n<div  class=\"navbar-collapse js-navbar-collapse\">\n   <ul class=\"nav navbar-nav page-menu\">\n       <li class=\"dropdown\">\n           <a href=\"#\" id=\"menu-toggle\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" \n           aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"toggle()\">Programs <span>\n                   <!-- <i class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></i> -->\n                   <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n          </span></a>\n\t    \n\t\t<ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n\t\t  <li><a href=\"#\">Education</a></li>\n                  <li><a href=\"#\">Skill Development</a></li>\n                  <li><a href=\"#\">Health Care</a></li>\n\t\t  <li><a href=\"#\">Sports</a></li>\n\t\t</ul>\n\t</li>\n\t<li class=\"dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Community Participation\n\t     <span>\n                  <!--  <i class=\"icon icon-up-arrow up-arrow\" aria-hidden=\"true\"></i> -->\n                   <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n              </span></a>\n\t\t<ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n\t\t  <li><a href=\"#\">Post a Problem</a></li>\n                  <li><a href=\"#\">Share your Queries</a></li>\n                  <li><a href=\"#\">List post views</a></li>\n\t\t  <li><a href=\"#\">List Success Stories</a></li>\n\t\t</ul>\n\t</li>\n\t<li class=\"dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About Us\n\t     <span class=\"pull-right\">\n                   <!-- <i class=\"icon icon-up-arrow up-arrow\" aria-hidden=\"true\"></i> -->\n                  <i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i>\n              </span></a>\n\t\t<ul class=\"dropdown-menu\" style=\"display: none;  padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;\">\n\t\t  <li><a href=\"#\">Profile</a></li>\n                  <li><a href=\"#\">Vision</a></li>\n                  <li><a href=\"#\">Mission</a></li>\n\t\t  <li><a href=\"#\">Objectives</a></li>\n\t\t</ul>\n\t</li>\n\n     </ul>\n     <ul class=\"nav navbar-nav navbar-right\">\n              <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\">Profile </a></li>\n      \t\t\t<li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/login']\">Login </a></li>\n              <li class=\"dropdown\"><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> Contact Us \n              \t<i class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></i></a>\n              \t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t  <li>9765679076</li>\n\t\t\t          <li>abc@gmail.com</li>\n\t\t\t                  \n\t\t\t\t\t</ul>\n       \n          \t   </li>\n      \t\t\t<li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register </a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout </a></li>\n        \n </ul>\n </div>\n\n                \n\n\n\n                        \n\n\n\n\t   \n\n<!-- \n<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Brand/Logo</a>\n  <button class=\"navbar-toggler\" (click)=\"collapse=!collapse\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" (click)=\"collapse=true\" [hidden]=\"collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n      \t\t\n\n      \t\n      \n \t</div>\n </nav>\n\n \n <!-- <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse\" aria-expanded=\"false\" style=\"height: 1px;\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a href=\"#\">Home</a></li>\n              <li><a href=\"#\">About</a></li>\n              <li><a href=\"#\">Contact</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li class=\"dropdown-header\">Nav header</li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li><a href=\"#\">One more separated link</a></li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"./\">Default <span class=\"sr-only\">(current)</span></a></li>\n              <li><a href=\"../navbar-static-top/\">Static top</a></li>\n              <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\n            </ul>\n          </div>\n        </div>\n      </nav> -->\n\n\n\n   "

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"> Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\"> Email : {{user.email}}</li>\n\n\t</ul>\n</div>"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\t<div class=\"well\"> -->\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>First Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Last Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Date of Birth</label>\n\t\t<input type=\"date\" [(ngModel)]=\"dob\" name=\"dob\" class=\"form-control\">\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>Address</label>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Street</label>\n\t\t<input type=\"text\" [(ngModel)]=\"street\" name=\"street\" class=\"form-control\">\n\t\t<label>Landmark</label>\n\t\t<input type=\"text\" [(ngModel)]=\"landmark\" name=\"landmark\" class=\"form-control\">\n\t\t<label>Postal Code</label>\n\t\t<input type=\"text\" [(ngModel)]=\"postalcode\" name=\"postalcode\" class=\"form-control\">\n\t\t<label>City</label>\n\t\t<input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\">\n\t\t<label>State</label>\n\t\t<input type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"form-control\">\n\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Mobile No</label>\n\t\t<input type=\"number\" [(ngModel)]=\"mobno\" name=\"mobno\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>UserName</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t\n\t\n\t\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\t<a href=\"/\" class=\"btn btn-default\"> Cancel</a>\n\t\n</form>\n<!-- </div>\n</div> -->\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Reset Password</h2>\n<form (submit)=\"onResetPassword()\"> \n\t<div class=\"form-group\">\n\t\t<label>New Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" \n\t\tplaceholder=\"New Password\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Confirm Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"confirm\" name=\"confirm\" class=\"form-control\" \n\t\tplaceholder=\"Confirm Password\">\n\t</div>\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Update Password\"/>\n</form>"

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[753]);
//# sourceMappingURL=main.bundle.map