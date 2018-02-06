webpackJsonp([0],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage_es2015_storage__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__principal_principal_principal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navParams, navCtrl, googlePlus, storageProvider, storage) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.storageProvider = storageProvider;
        this.storage = storage;
        this.isLoggedIn = false;
        this.listaAuth = ["123"];
        this.chaveAuth = "Auth";
        this.storage.ready().then(function () {
            _this.storage.get(_this.chaveAuth).then(function (registros) {
                if (registros) {
                    _this.listaAuth = registros;
                }
                else {
                    _this.listaAuth = ["123"];
                }
            });
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.storageProvider.login.isLoggedIn = true;
        this.storageProvider.atualizar("Auth");
        this.googlePlus.login({})
            .then(function (res) {
            _this.storageProvider.login.name = res.name;
            _this.storageProvider.login.email = res.email;
            // this.familyName = res.familyName;
            // this.givenName = res.givenName;
            // this.userId = res.userId;
            // this.imageUrl = res.imageUrl;
        })
            .then(function (res) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__principal_principal_principal__["a" /* PrincipalPage */]); })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.storageProvider.login.isLoggedIn = false;
        this.storageProvider.atualizar("Auth");
        this.googlePlus.logout()
            .then(function (res) {
            _this.storageProvider.login.name = "";
            _this.storageProvider.login.email = "";
        })
            .then(function (res) { return _this.navCtrl.push(LoginPage_1); })
            .catch(function (err) { return console.error(err); });
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/home/arthur/viagensMobile/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="tijuca">\n    <ion-title padding>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <img src="../assets/images/tijuca-logo.png" class="img">\n  <br>\n  <ion-item>\n    <ion-label stacked><span class="input">Usuário</span></ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked><span class="input">Senha</span></ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n  <br>\n\n  \n  <button ion-button full color="tijuca">Login</button>\n\n</ion-content>'/*ion-inline-end:"/home/arthur/viagensMobile/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__["a" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage_es2015_storage__["a" /* Storage */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(53);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from '@ionic-native/google-plus';
 *
 * constructor(private googlePlus: GooglePlus) { }
 *
 * ...
 *
 * this.googlePlus.login({})
 *   .then(res => console.log(res))
 *   .catch(err => console.error(err));
 *
 * ```
 */
var GooglePlus = (function (_super) {
    __extends(GooglePlus, _super);
    function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.login = function (options) { return; };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.trySilentLogin = function (options) { return; };
    /**
     * This will clear the OAuth2 token.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.logout = function () { return; };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.disconnect = function () { return; };
    /**
     * This will retrieve the Android signing certificate fingerprint which is required in the Google Developer Console.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.getSigningCertificateFingerprint = function () { return; };
    GooglePlus.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    GooglePlus.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "login", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "trySilentLogin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "logout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "disconnect", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "getSigningCertificateFingerprint", null);
    GooglePlus = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'GooglePlus',
            plugin: 'cordova-plugin-googleplus',
            pluginRef: 'window.plugins.googleplus',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
            install: 'ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid',
            installVariables: ['REVERSED_CLIENT_ID'],
            platforms: ['Android', 'iOS']
        })
    ], GooglePlus);
    return GooglePlus;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map