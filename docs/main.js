(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-components/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-components/login/login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between center\" style=\"place-content: center space-between; align-items: center; flex-direction: row; box-sizing: border-box; display: flex;\">\r\n  <h3>\r\n    🔐 Web Authentication Angular\r\n  </h3>\r\n  <a mat-button class=\"github\" href=\"https://github.com/willianbraga/AngularWebAuth\" target=\"_blank\">\r\n    <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg\" />\r\n    GitHub\r\n  </a>\r\n</div>\r\n<mat-card class=\"not-available\" *ngIf=\"!webAuthnAvailable\">\r\n  🚫 Oops! Desculpe, Web Authentication API não disponivel em seu navegador. Tente novamente no Chrome.\r\n</mat-card>\r\n<div class=\"forms\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"10px\"\r\n  style=\"flex-flow: row wrap; box-sizing: border-box; display: flex; place-content: flex-start space-between; align-items: flex-start;\">\r\n  <mat-card class=\"mat-card\" fxFlex=\"noshrink\" style=\"margin-right: 10px; flex: 1 0 auto; box-sizing: border-box;\">\r\n    <legend>Sign Up</legend>\r\n    <div class=\"signup\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n      style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: center;\">\r\n      <mat-form-field class=\"mat-form-field ng-tns-c3-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" class=\"mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"mat-form-field ng-tns-c3-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n      </mat-form-field>\r\n      <div class=\"fingerprint\" *ngIf=\"webAuthnAvailable\">\r\n        <mat-checkbox [(ngModel)]=\"useFingerprint\" matTooltip=\"Use your fingerprint for future authentications\">\r\n          <mat-icon inline>fingerprint</mat-icon>\r\n        </mat-checkbox>\r\n        <br />\r\n        <br />\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" (click)=\"signup()\">SIGN UP</button>\r\n    </div>\r\n  </mat-card>\r\n  <mat-card class=\"mat-card\" fxFlex=\"noshrink\" style=\"flex: 1 0 auto; box-sizing: border-box;\">\r\n    <legend>Sign In</legend>\r\n    <div class=\"signin\" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: center;\">\r\n      <mat-form-field class=\"mat-form-field ng-tns-c3-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"mat-form-field ng-tns-c3-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" (click)=\"signin()\">SIGN IN</button>\r\n      <div class=\"fingerprint-auth\" *ngIf=\"webAuthnAvailable\">\r\n        <div class=\"or\" fxLayoutAlign=\"center start\">Ou</div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"webAuthSignin()\" class=\"mat-raised-button mat-button-base mat-primary\">\r\n          <mat-icon>fingerprint</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<h3 style=\"text-align: center;\">Área Admin - Usuários e senhas.</h3>\r\n<mat-card class=\"user\" *ngFor=\"let user of users\" fxLayoutAlign=\"space-between center\" style=\"place-content: center space-between; align-items: center; flex-direction: row; box-sizing: border-box; display: flex;\">\r\n  <div class=\"email\">{{ user.email }} - {{user.password}}</div>\r\n  <button mat-button *ngIf=\"user.credentials.length\" (click)=\"webAuthSignin()\" color=\"primary\">\r\n    <mat-icon>fingerprint</mat-icon>\r\n  </button>\r\n  <button mat-button (click)=\"removeUser(user.email)\" color=\"warn\">\r\n    <mat-icon inline>delete</mat-icon>\r\n  </button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-components/pagina-inicial/pagina-inicial.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-components/pagina-inicial/pagina-inicial.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>pagina-inicial works!</p>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-components/login/login.component */ "./src/app/custom-components/login/login.component.ts");
/* harmony import */ var _custom_components_pagina_inicial_pagina_inicial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-components/pagina-inicial/pagina-inicial.component */ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.ts");





const routes = [
    { path: "login", component: _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], },
    {
        path: "", component: _custom_components_pagina_inicial_pagina_inicial_component__WEBPACK_IMPORTED_MODULE_4__["PaginaInicialComponent"], children: [],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup, .signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxidzAwMTJcXERlc2t0b3BcXE5vdmEgcGFzdGFcXGFuZ3VsYXJ3ZWJhdXRobi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWF2YWlsYWJsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmdpdGh1YiB7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWdudXAsIC5zaWduaW4ge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuLm9yIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIi5ub3QtYXZhaWxhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmdpdGh1YiB7XG4gIG1hcmdpbjogM3B4IDA7XG59XG4uZ2l0aHViIGltZyB7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5zaWdudXAsIC5zaWduaW4ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ub3Ige1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4udXNlciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.data) {
            console.log(this.data);
            this.router.navigateByUrl('/');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _custom_components_pagina_inicial_pagina_inicial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-components/pagina-inicial/pagina-inicial.component */ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.ts");
/* harmony import */ var _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-components/login/login.component */ "./src/app/custom-components/login/login.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _custom_components_pagina_inicial_pagina_inicial_component__WEBPACK_IMPORTED_MODULE_4__["PaginaInicialComponent"],
            _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/custom-components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/custom-components/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup,\n.signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 16px;\n  border-radius: 4px;\n}\n\n._mat-animation-noopable.mat-card {\n  transition: none;\n  animation: none;\n}\n\n.mat-card .mat-divider-horizontal {\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n\n[dir=rtl] .mat-card .mat-divider-horizontal {\n  left: auto;\n  right: 0;\n}\n\n.mat-card .mat-divider-horizontal.mat-divider-inset {\n  position: static;\n  margin: 0;\n}\n\n[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset {\n  margin-right: 0;\n}\n\n@media (-ms-high-contrast: active) {\n  .mat-card {\n    outline: solid 1px;\n  }\n}\n\n.mat-card-actions,\n.mat-card-content,\n.mat-card-subtitle {\n  display: block;\n  margin-bottom: 16px;\n}\n\n.mat-card-title {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.mat-card-actions {\n  margin-left: -8px;\n  margin-right: -8px;\n  padding: 8px 0;\n}\n\n.mat-card-actions-align-end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mat-card-image {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px -16px;\n}\n\n.mat-card-footer {\n  display: block;\n  margin: 0 -16px -16px -16px;\n}\n\n.mat-card-actions .mat-button,\n.mat-card-actions .mat-raised-button {\n  margin: 0 8px;\n}\n\n.mat-card-header {\n  display: flex;\n  flex-direction: row;\n}\n\n.mat-card-header .mat-card-title {\n  margin-bottom: 12px;\n}\n\n.mat-card-header-text {\n  margin: 0 16px;\n}\n\n.mat-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n\n.mat-card-title-group {\n  display: flex;\n  justify-content: space-between;\n}\n\n.mat-card-sm-image {\n  width: 80px;\n  height: 80px;\n}\n\n.mat-card-md-image {\n  width: 112px;\n  height: 112px;\n}\n\n.mat-card-lg-image {\n  width: 152px;\n  height: 152px;\n}\n\n.mat-card-xl-image {\n  width: 240px;\n  height: 240px;\n  margin: -8px;\n}\n\n.mat-card-title-group > .mat-card-xl-image {\n  margin: -8px 0 8px;\n}\n\n@media (max-width: 599px) {\n  .mat-card-title-group {\n    margin: 0;\n  }\n\n  .mat-card-xl-image {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n.mat-card-content > :first-child,\n.mat-card > :first-child {\n  margin-top: 0;\n}\n\n.mat-card-content > :last-child:not(.mat-card-footer),\n.mat-card > :last-child:not(.mat-card-footer) {\n  margin-bottom: 0;\n}\n\n.mat-card-image:first-child {\n  margin-top: -16px;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.mat-card > .mat-card-actions:last-child {\n  margin-bottom: -8px;\n  padding-bottom: 0;\n}\n\n.mat-card-actions .mat-button:first-child,\n.mat-card-actions .mat-raised-button:first-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mat-card-subtitle:not(:first-child),\n.mat-card-title:not(:first-child) {\n  margin-top: -4px;\n}\n\n.mat-card-header .mat-card-subtitle:not(:first-child) {\n  margin-top: -8px;\n}\n\n.mat-card > .mat-card-xl-image:first-child {\n  margin-top: -8px;\n}\n\n.mat-card > .mat-card-xl-image:last-child {\n  margin-bottom: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vQzpcXFVzZXJzXFxidzAwMTJcXERlc2t0b3BcXE5vdmEgcGFzdGFcXGFuZ3VsYXJ3ZWJhdXRobi9zcmNcXGFwcFxcY3VzdG9tLWNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTs7RUFFRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UseURBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxrQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7OztFQUdFLGNBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUE7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURJQTs7RUFFRSxhQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsU0FBQTtFQ0RGOztFRElBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUNERjtBQUNGOztBRElBOztFQUVFLGFBQUE7QUNGRjs7QURLQTs7RUFFRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7O0VBRUUsY0FBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTs7RUFFRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWF2YWlsYWJsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmdpdGh1YiB7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbnVwLFxyXG4uc2lnbmluIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweFxyXG59XHJcblxyXG4uX21hdC1hbmltYXRpb24tbm9vcGFibGUubWF0LWNhcmQge1xyXG4gIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuW2Rpcj1ydGxdIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMFxyXG59XHJcblxyXG4ubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwubWF0LWRpdmlkZXItaW5zZXQge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbltkaXI9cnRsXSAubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwubWF0LWRpdmlkZXItaW5zZXQge1xyXG4gIG1hcmdpbi1yaWdodDogMFxyXG59XHJcblxyXG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSkge1xyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBvdXRsaW5lOiBzb2xpZCAxcHhcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zLFxyXG4ubWF0LWNhcmQtY29udGVudCxcclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbiAgcGFkZGluZzogOHB4IDBcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMtYWxpZ24tZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcclxufVxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XHJcbiAgbWFyZ2luOiAwIC0xNnB4IDE2cHggLTE2cHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWZvb3RlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIC0xNnB4IC0xNnB4IC0xNnB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uLFxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIG1hcmdpbjogMCA4cHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luOiAwIDE2cHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBvYmplY3QtZml0OiBjb3ZlclxyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1zbS1pbWFnZSB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1tZC1pbWFnZSB7XHJcbiAgd2lkdGg6IDExMnB4O1xyXG4gIGhlaWdodDogMTEycHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWxnLWltYWdlIHtcclxuICB3aWR0aDogMTUycHg7XHJcbiAgaGVpZ2h0OiAxNTJweFxyXG59XHJcblxyXG4ubWF0LWNhcmQteGwtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIG1hcmdpbjogLThweFxyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUtZ3JvdXA+Lm1hdC1jYXJkLXhsLWltYWdlIHtcclxuICBtYXJnaW46IC04cHggMCA4cHhcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTk5cHgpIHtcclxuICAubWF0LWNhcmQtdGl0bGUtZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAwXHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQteGwtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50PjpmaXJzdC1jaGlsZCxcclxuLm1hdC1jYXJkPjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMFxyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3RlciksXHJcbi5tYXQtY2FyZD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xyXG4gIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLm1hdC1jYXJkLWltYWdlOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uOmZpcnN0LWNoaWxkLFxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b246Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMFxyXG59XHJcblxyXG4ubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCksXHJcbi5tYXQtY2FyZC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXRvcDogLTRweFxyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXRvcDogLThweFxyXG59XHJcblxyXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLXhsLWltYWdlOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tdG9wOiAtOHB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQteGwtaW1hZ2U6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLThweFxyXG59IiwiLm5vdC1hdmFpbGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZ2l0aHViIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cbi5naXRodWIgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLnNpZ251cCxcbi5zaWduaW4ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ub3Ige1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4udXNlciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZS5tYXQtY2FyZCB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuLm1hdC1jYXJkIC5tYXQtZGl2aWRlci1ob3Jpem9udGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwubWF0LWRpdmlkZXItaW5zZXQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXJnaW46IDA7XG59XG5cbltkaXI9cnRsXSAubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwubWF0LWRpdmlkZXItaW5zZXQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbkBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAubWF0LWNhcmQge1xuICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgfVxufVxuLm1hdC1jYXJkLWFjdGlvbnMsXG4ubWF0LWNhcmQtY29udGVudCxcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucy1hbGlnbi1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubWF0LWNhcmQtaW1hZ2Uge1xuICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gIG1hcmdpbjogMCAtMTZweCAxNnB4IC0xNnB4O1xufVxuXG4ubWF0LWNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAtMTZweCAtMTZweCAtMTZweDtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLm1hdC1jYXJkLWF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYXQtY2FyZC1zbS1pbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5tYXQtY2FyZC1tZC1pbWFnZSB7XG4gIHdpZHRoOiAxMTJweDtcbiAgaGVpZ2h0OiAxMTJweDtcbn1cblxuLm1hdC1jYXJkLWxnLWltYWdlIHtcbiAgd2lkdGg6IDE1MnB4O1xuICBoZWlnaHQ6IDE1MnB4O1xufVxuXG4ubWF0LWNhcmQteGwtaW1hZ2Uge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIG1hcmdpbjogLThweDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlLWdyb3VwID4gLm1hdC1jYXJkLXhsLWltYWdlIHtcbiAgbWFyZ2luOiAtOHB4IDAgOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1hdC1jYXJkLXRpdGxlLWdyb3VwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubWF0LWNhcmQteGwtaW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuLm1hdC1jYXJkLWNvbnRlbnQgPiA6Zmlyc3QtY2hpbGQsXG4ubWF0LWNhcmQgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubWF0LWNhcmQtY29udGVudCA+IDpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSxcbi5tYXQtY2FyZCA+IDpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYXQtY2FyZC1pbWFnZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbn1cblxuLm1hdC1jYXJkID4gLm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbjpmaXJzdC1jaGlsZCxcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSxcbi5tYXQtY2FyZC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLm1hdC1jYXJkID4gLm1hdC1jYXJkLXhsLWltYWdlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLm1hdC1jYXJkID4gLm1hdC1jYXJkLXhsLWltYWdlOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server-mock.service */ "./src/app/services/server-mock.service.ts");
/* harmony import */ var src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-authn.service */ "./src/app/services/web-authn.service.ts");




let LoginComponent = class LoginComponent {
    constructor(serverMockService, webAuthnService) {
        this.serverMockService = serverMockService;
        this.webAuthnService = webAuthnService;
        this.title = 'angular-web-authn';
        this.email = 'willian@teste.com';
        this.password = '123';
        this.useFingerprint = true;
        this.webAuthnAvailable = !!navigator.credentials && !!navigator.credentials.create;
        this.users = serverMockService.getUsers();
    }
    signup() {
        console.log('SIGNUP');
        const prevUser = this.serverMockService.getUser(this.email);
        if (prevUser) {
            alert('🚫 User already exists with this email address');
            return;
        }
        const user = this.serverMockService.addUser({ email: this.email, password: this.password, credentials: [] });
        this.users = this.serverMockService.getUsers();
        if (this.webAuthnAvailable && this.useFingerprint) {
            this.webAuthnService.webAuthnSignup(user)
                .then((credential) => {
                console.log('credentials.create RESPONSE', credential);
                const valid = this.serverMockService.registerCredential(user, credential);
                this.users = this.serverMockService.getUsers();
            }).catch((error) => {
                console.log('credentials.create ERROR', error);
            });
        }
    }
    signin() {
        console.log('[signin]');
        const user = this.serverMockService.getUsers().find(u => u.email === this.email && u.password === this.password);
        if (user) {
            alert('✅ Congrats! Authentication went fine!');
        }
        else {
            alert('🚫 Sorry :( Invalid credentials!');
        }
    }
    webAuthSignin() {
        const user = this.serverMockService.getUser(this.email);
        this.webAuthnService.webAuthnSignin(user).then((response) => {
            alert('✅ Congrats! Authentication went fine!');
            console.log('SUCCESSFULLY GOT AN ASSERTION!', response);
        }).catch((error) => {
            alert('🚫 Sorry :( Invalid credentials!');
            console.log('FAIL', error);
        });
    }
    removeUser(email) {
        this.serverMockService.removeUser(email);
        this.users = this.serverMockService.getUsers();
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"] },
    { type: src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/custom-components/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"], src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/custom-components/pagina-inicial/pagina-inicial.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup, .signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvcGFnaW5hLWluaWNpYWwvQzpcXFVzZXJzXFxidzAwMTJcXERlc2t0b3BcXE5vdmEgcGFzdGFcXGFuZ3VsYXJ3ZWJhdXRobi9zcmNcXGFwcFxcY3VzdG9tLWNvbXBvbmVudHNcXHBhZ2luYS1pbmljaWFsXFxwYWdpbmEtaW5pY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvcGFnaW5hLWluaWNpYWwvcGFnaW5hLWluaWNpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9wYWdpbmEtaW5pY2lhbC9wYWdpbmEtaW5pY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtYXZhaWxhYmxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZ2l0aHViIHtcclxuICBtYXJnaW46IDNweCAwO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZ251cCwgLnNpZ25pbiB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIG1hcmdpbjogNTBweCAwO1xyXG59XHJcblxyXG4ub3Ige1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iLCIubm90LWF2YWlsYWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5naXRodWIge1xuICBtYXJnaW46IDNweCAwO1xufVxuLmdpdGh1YiBpbWcge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uc2lnbnVwLCAuc2lnbmluIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLm9yIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLnVzZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/custom-components/pagina-inicial/pagina-inicial.component.ts ***!
  \******************************************************************************/
/*! exports provided: PaginaInicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaInicialComponent", function() { return PaginaInicialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginaInicialComponent = class PaginaInicialComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaginaInicialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagina-inicial',
        template: __webpack_require__(/*! raw-loader!./pagina-inicial.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-components/pagina-inicial/pagina-inicial.component.html"),
        styles: [__webpack_require__(/*! ./pagina-inicial.component.scss */ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaginaInicialComponent);



/***/ }),

/***/ "./src/app/services/server-mock.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/server-mock.service.ts ***!
  \*************************************************/
/*! exports provided: ServerMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMockService", function() { return ServerMockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/app/utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_3__);




let ServerMockService = class ServerMockService {
    constructor(userService) {
        this.userService = userService;
    }
    registerCredential(user, credential) {
        const authData = this.extractAuthData(credential);
        const credentialIdLength = this.getCredentialIdLength(authData);
        const credentialId = authData.slice(55, 55 + credentialIdLength);
        console.log('credentialIdLength', credentialIdLength);
        console.log('credentialId', credentialId);
        const publicKeyBytes = authData.slice(55 + credentialIdLength);
        const publicKeyObject = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["decode"](publicKeyBytes.buffer);
        console.log('publicKeyObject', publicKeyObject);
        const valid = true;
        if (valid) {
            user.credentials.push({ credentialId, publicKey: publicKeyBytes });
            this.updateUser(user);
        }
        return valid;
    }
    extractAuthData(credential) {
        // decode the clientDataJSON into a utf-8 string
        const utf8Decoder = new TextDecoder('utf-8');
        const decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);
        const clientDataObj = JSON.parse(decodedClientData);
        console.log('clientDataObj', clientDataObj);
        const decodedAttestationObj = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["decode"](credential.response.attestationObject);
        console.log('decodedAttestationObj', decodedAttestationObj);
        const { authData } = decodedAttestationObj;
        console.log('authData', authData);
        return authData;
    }
    getCredentialIdLength(authData) {
        // get the length of the credential ID
        const dataView = new DataView(new ArrayBuffer(2));
        const idLenBytes = authData.slice(53, 55);
        idLenBytes.forEach((value, index) => dataView.setUint8(index, value));
        return dataView.getUint16(0);
    }
    updateUser(user) {
        this.removeUser(user.email);
        this.addUser(user);
    }
    removeUser(email) {
        return this.userService.removeUser(email);
    }
    addUser(user) {
        user.id = '' + Math.floor(Math.random() * 10000000);
        this.userService.addUser(user);
        return user;
    }
    getChallenge() {
        return Uint8Array.from('someChallengeIsHereComOn', c => c.charCodeAt(0));
    }
    getUsers() {
        return this.userService.getUsers();
    }
    getUser(email) {
        return this.userService.getUser(email);
    }
};
ServerMockService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ServerMockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], ServerMockService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserService = class UserService {
    constructor() { }
    getUser(email) {
        return this.getUsers().find(u => u.email === email);
    }
    getUsers() {
        const usersString = localStorage.getItem('users');
        return usersString ? JSON.parse(usersString) : [];
    }
    saveUsers(users) {
        return localStorage.setItem('users', JSON.stringify(users));
    }
    addUser(user) {
        const users = [...this.getUsers(), user];
        this.saveUsers(users);
    }
    removeUser(email) {
        const filteredUsers = this.getUsers().filter(user => user.email !== email);
        this.saveUsers(filteredUsers);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserService);



/***/ }),

/***/ "./src/app/services/web-authn.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/web-authn.service.ts ***!
  \***********************************************/
/*! exports provided: WebAuthnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthnService", function() { return WebAuthnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-mock.service */ "./src/app/services/server-mock.service.ts");



let WebAuthnService = class WebAuthnService {
    constructor(serverMockService) {
        this.serverMockService = serverMockService;
    }
    webAuthnSignup(user) {
        console.log('[webAuthnSignup]');
        const publicKeyCredentialCreationOptions = {
            challenge: this.serverMockService.getChallenge(),
            rp: {
                name: 'WebAuthn Test',
            },
            user: {
                id: Uint8Array.from(user.id, c => c.charCodeAt(0)),
                name: user.email,
                displayName: user.email,
            },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
            authenticatorSelection: {
                authenticatorAttachment: 'platform'
            },
            timeout: 60000,
            attestation: 'direct'
        };
        return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions,
        });
    }
    webAuthnSignin(user) {
        const allowCredentials = user.credentials.map(c => {
            console.log(c.credentialId);
            return { type: 'public-key', id: Uint8Array.from(Object.values(c.credentialId)) };
        });
        console.log('allowCredentials', allowCredentials);
        const credentialRequestOptions = {
            challenge: this.serverMockService.getChallenge(),
            allowCredentials,
        };
        return navigator.credentials.get({
            publicKey: credentialRequestOptions
        });
    }
};
WebAuthnService.ctorParameters = () => [
    { type: _server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"] }
];
WebAuthnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"]])
], WebAuthnService);



/***/ }),

/***/ "./src/app/utils/utils.js":
/*!********************************!*\
  !*** ./src/app/utils/utils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Patrick Gansterer <paroga@paroga.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function (global, undefined) {
  "use strict";
  var POW_2_24 = 5.960464477539063e-8,
    POW_2_32 = 4294967296,
    POW_2_53 = 9007199254740992;

  function encode(value) {
    var data = new ArrayBuffer(256);
    var dataView = new DataView(data);
    var lastLength;
    var offset = 0;

    function prepareWrite(length) {
      var newByteLength = data.byteLength;
      var requiredLength = offset + length;
      while (newByteLength < requiredLength)
        newByteLength <<= 1;
      if (newByteLength !== data.byteLength) {
        var oldDataView = dataView;
        data = new ArrayBuffer(newByteLength);
        dataView = new DataView(data);
        var uint32count = (offset + 3) >> 2;
        for (var i = 0; i < uint32count; ++i)
          dataView.setUint32(i << 2, oldDataView.getUint32(i << 2));
      }

      lastLength = length;
      return dataView;
    }

    function commitWrite() {
      offset += lastLength;
    }

    function writeFloat64(value) {
      commitWrite(prepareWrite(8).setFloat64(offset, value));
    }

    function writeUint8(value) {
      commitWrite(prepareWrite(1).setUint8(offset, value));
    }

    function writeUint8Array(value) {
      var dataView = prepareWrite(value.length);
      for (var i = 0; i < value.length; ++i)
        dataView.setUint8(offset + i, value[i]);
      commitWrite();
    }

    function writeUint16(value) {
      commitWrite(prepareWrite(2).setUint16(offset, value));
    }

    function writeUint32(value) {
      commitWrite(prepareWrite(4).setUint32(offset, value));
    }

    function writeUint64(value) {
      var low = value % POW_2_32;
      var high = (value - low) / POW_2_32;
      var dataView = prepareWrite(8);
      dataView.setUint32(offset, high);
      dataView.setUint32(offset + 4, low);
      commitWrite();
    }

    function writeTypeAndLength(type, length) {
      if (length < 24) {
        writeUint8(type << 5 | length);
      } else if (length < 0x100) {
        writeUint8(type << 5 | 24);
        writeUint8(length);
      } else if (length < 0x10000) {
        writeUint8(type << 5 | 25);
        writeUint16(length);
      } else if (length < 0x100000000) {
        writeUint8(type << 5 | 26);
        writeUint32(length);
      } else {
        writeUint8(type << 5 | 27);
        writeUint64(length);
      }
    }

    function encodeItem(value) {
      var i;

      if (value === false)
        return writeUint8(0xf4);
      if (value === true)
        return writeUint8(0xf5);
      if (value === null)
        return writeUint8(0xf6);
      if (value === undefined)
        return writeUint8(0xf7);

      switch (typeof value) {
        case "number":
          if (Math.floor(value) === value) {
            if (0 <= value && value <= POW_2_53)
              return writeTypeAndLength(0, value);
            if (-POW_2_53 <= value && value < 0)
              return writeTypeAndLength(1, -(value + 1));
          }
          writeUint8(0xfb);
          return writeFloat64(value);

        case "string":
          var utf8data = [];
          for (i = 0; i < value.length; ++i) {
            var charCode = value.charCodeAt(i);
            if (charCode < 0x80) {
              utf8data.push(charCode);
            } else if (charCode < 0x800) {
              utf8data.push(0xc0 | charCode >> 6);
              utf8data.push(0x80 | charCode & 0x3f);
            } else if (charCode < 0xd800) {
              utf8data.push(0xe0 | charCode >> 12);
              utf8data.push(0x80 | (charCode >> 6) & 0x3f);
              utf8data.push(0x80 | charCode & 0x3f);
            } else {
              charCode = (charCode & 0x3ff) << 10;
              charCode |= value.charCodeAt(++i) & 0x3ff;
              charCode += 0x10000;

              utf8data.push(0xf0 | charCode >> 18);
              utf8data.push(0x80 | (charCode >> 12) & 0x3f);
              utf8data.push(0x80 | (charCode >> 6) & 0x3f);
              utf8data.push(0x80 | charCode & 0x3f);
            }
          }

          writeTypeAndLength(3, utf8data.length);
          return writeUint8Array(utf8data);

        default:
          var length;
          if (Array.isArray(value)) {
            length = value.length;
            writeTypeAndLength(4, length);
            for (i = 0; i < length; ++i)
              encodeItem(value[i]);
          } else if (value instanceof Uint8Array) {
            writeTypeAndLength(2, value.length);
            writeUint8Array(value);
          } else {
            var keys = Object.keys(value);
            length = keys.length;
            writeTypeAndLength(5, length);
            for (i = 0; i < length; ++i) {
              var key = keys[i];
              encodeItem(key);
              encodeItem(value[key]);
            }
          }
      }
    }

    encodeItem(value);

    if ("slice" in data)
      return data.slice(0, offset);

    var ret = new ArrayBuffer(offset);
    var retView = new DataView(ret);
    for (var i = 0; i < offset; ++i)
      retView.setUint8(i, dataView.getUint8(i));
    return ret;
  }

  function decode(data, tagger, simpleValue) {
    var dataView = new DataView(data);
    var offset = 0;

    if (typeof tagger !== "function")
      tagger = function (value) {
        return value;
      };
    if (typeof simpleValue !== "function")
      simpleValue = function () {
        return undefined;
      };

    function commitRead(length, value) {
      offset += length;
      return value;
    }

    function readArrayBuffer(length) {
      return commitRead(length, new Uint8Array(data, offset, length));
    }

    function readFloat16() {
      var tempArrayBuffer = new ArrayBuffer(4);
      var tempDataView = new DataView(tempArrayBuffer);
      var value = readUint16();

      var sign = value & 0x8000;
      var exponent = value & 0x7c00;
      var fraction = value & 0x03ff;

      if (exponent === 0x7c00)
        exponent = 0xff << 10;
      else if (exponent !== 0)
        exponent += (127 - 15) << 10;
      else if (fraction !== 0)
        return (sign ? -1 : 1) * fraction * POW_2_24;

      tempDataView.setUint32(0, sign << 16 | exponent << 13 | fraction << 13);
      return tempDataView.getFloat32(0);
    }

    function readFloat32() {
      return commitRead(4, dataView.getFloat32(offset));
    }

    function readFloat64() {
      return commitRead(8, dataView.getFloat64(offset));
    }

    function readUint8() {
      return commitRead(1, dataView.getUint8(offset));
    }

    function readUint16() {
      return commitRead(2, dataView.getUint16(offset));
    }

    function readUint32() {
      return commitRead(4, dataView.getUint32(offset));
    }

    function readUint64() {
      return readUint32() * POW_2_32 + readUint32();
    }

    function readBreak() {
      if (dataView.getUint8(offset) !== 0xff)
        return false;
      offset += 1;
      return true;
    }

    function readLength(additionalInformation) {
      if (additionalInformation < 24)
        return additionalInformation;
      if (additionalInformation === 24)
        return readUint8();
      if (additionalInformation === 25)
        return readUint16();
      if (additionalInformation === 26)
        return readUint32();
      if (additionalInformation === 27)
        return readUint64();
      if (additionalInformation === 31)
        return -1;
      throw "Invalid length encoding";
    }

    function readIndefiniteStringLength(majorType) {
      var initialByte = readUint8();
      if (initialByte === 0xff)
        return -1;
      var length = readLength(initialByte & 0x1f);
      if (length < 0 || (initialByte >> 5) !== majorType)
        throw "Invalid indefinite length element";
      return length;
    }

    function appendUtf16Data(utf16data, length) {
      for (var i = 0; i < length; ++i) {
        var value = readUint8();
        if (value & 0x80) {
          if (value < 0xe0) {
            value = (value & 0x1f) << 6 |
              (readUint8() & 0x3f);
            length -= 1;
          } else if (value < 0xf0) {
            value = (value & 0x0f) << 12 |
              (readUint8() & 0x3f) << 6 |
              (readUint8() & 0x3f);
            length -= 2;
          } else {
            value = (value & 0x0f) << 18 |
              (readUint8() & 0x3f) << 12 |
              (readUint8() & 0x3f) << 6 |
              (readUint8() & 0x3f);
            length -= 3;
          }
        }

        if (value < 0x10000) {
          utf16data.push(value);
        } else {
          value -= 0x10000;
          utf16data.push(0xd800 | (value >> 10));
          utf16data.push(0xdc00 | (value & 0x3ff));
        }
      }
    }

    function decodeItem() {
      var initialByte = readUint8();
      var majorType = initialByte >> 5;
      var additionalInformation = initialByte & 0x1f;
      var i;
      var length;

      if (majorType === 7) {
        switch (additionalInformation) {
          case 25:
            return readFloat16();
          case 26:
            return readFloat32();
          case 27:
            return readFloat64();
        }
      }

      length = readLength(additionalInformation);
      if (length < 0 && (majorType < 2 || 6 < majorType))
        throw "Invalid length";

      switch (majorType) {
        case 0:
          return length;
        case 1:
          return -1 - length;
        case 2:
          if (length < 0) {
            var elements = [];
            var fullArrayLength = 0;
            while ((length = readIndefiniteStringLength(majorType)) >= 0) {
              fullArrayLength += length;
              elements.push(readArrayBuffer(length));
            }
            var fullArray = new Uint8Array(fullArrayLength);
            var fullArrayOffset = 0;
            for (i = 0; i < elements.length; ++i) {
              fullArray.set(elements[i], fullArrayOffset);
              fullArrayOffset += elements[i].length;
            }
            return fullArray;
          }
          return readArrayBuffer(length);
        case 3:
          var utf16data = [];
          if (length < 0) {
            while ((length = readIndefiniteStringLength(majorType)) >= 0)
              appendUtf16Data(utf16data, length);
          } else
            appendUtf16Data(utf16data, length);
          return String.fromCharCode.apply(null, utf16data);
        case 4:
          var retArray;
          if (length < 0) {
            retArray = [];
            while (!readBreak())
              retArray.push(decodeItem());
          } else {
            retArray = new Array(length);
            for (i = 0; i < length; ++i)
              retArray[i] = decodeItem();
          }
          return retArray;
        case 5:
          var retObject = {};
          for (i = 0; i < length || length < 0 && !readBreak(); ++i) {
            var key = decodeItem();
            retObject[key] = decodeItem();
          }
          return retObject;
        case 6:
          return tagger(decodeItem(), length);
        case 7:
          switch (length) {
            case 20:
              return false;
            case 21:
              return true;
            case 22:
              return null;
            case 23:
              return undefined;
            default:
              return simpleValue(length);
          }
      }
    }

    var ret = decodeItem();
    if (offset !== data.byteLength)
      throw "Remaining bytes";
    return ret;
  }

  var obj = {
    encode: encode,
    decode: decode
  };

  if (true)
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (obj),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}

})(this);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bw0012\Desktop\Nova pasta\angularwebauthn\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map