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

module.exports = "<div fxLayoutAlign=\"space-between center\"\r\n  style=\"place-content: center space-between; align-items: center; flex-direction: row; box-sizing: border-box; display: flex;\">\r\n  <h3>\r\n    🔐 Web Authentication\r\n  </h3>\r\n  <a mat-button class=\"github\" href=\"https://github.com/willianbraga/AngularWebAuth\" target=\"_blank\">\r\n    <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg\" />\r\n    GitHub\r\n  </a>\r\n</div>\r\n<mat-card class=\"not-available\" *ngIf=\"!webAuthnAvailable\">\r\n  🚫 Oops! Desculpe, Web Authentication API não disponivel em seu navegador. Tente novamente no Chrome.\r\n</mat-card>\r\n<div class=\"forms\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"10px\"\r\n  style=\"flex-flow: row wrap; box-sizing: border-box; display: flex; place-content: flex-start space-between; align-items: flex-start;\">\r\n  <mat-card class=\"mat-card\" fxFlex=\"noshrink\" style=\"flex: 1 0 auto; box-sizing: border-box; margin-bottom: 10px;\">\r\n    <h4 style=\"text-align: center;\">Cadastrar</h4>\r\n    <div class=\"signup\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n      style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: center; height: 150px;\">\r\n      <mat-form-field\r\n        class=\"mat-form-field ng-tns-c3-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\"\r\n          class=\"mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid\">\r\n      </mat-form-field>\r\n      <mat-form-field\r\n        class=\"mat-form-field ng-tns-c3-1 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n      </mat-form-field>\r\n      <div class=\"fingerprint\" *ngIf=\"webAuthnAvailable\">\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" (click)=\"signup()\">CADASTRAR</button>\r\n    </div>\r\n  </mat-card>\r\n  <mat-card class=\"mat-card\" fxFlex=\"noshrink\" style=\"flex: 1 0 auto; box-sizing: border-box;\">\r\n    <h4 style=\"text-align: center;\">Autenticar</h4>\r\n    <div class=\"signin\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n      style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: center; height: 150px;\">\r\n      <mat-form-field\r\n        class=\"mat-form-field ng-tns-c3-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\">\r\n      </mat-form-field>\r\n      <mat-form-field\r\n        class=\"mat-form-field ng-tns-c3-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-valid mat-form-field-should-float\">\r\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" (click)=\"signin()\">AUTENTICAR - <mat-icon>fingerprint</mat-icon>\r\n      </button>\r\n    </div>\r\n  </mat-card>\r\n  <div style=\"width: 100%;\">\r\n    <h3 style=\"text-align: center;\">Área Admin - Usuários e senhas.</h3>\r\n    <mat-card class=\"user\" *ngFor=\"let user of users\" fxLayoutAlign=\"space-between center\"\r\n      style=\"place-content: center space-between; align-items: center; flex-direction: row; box-sizing: border-box; display: flex;\">\r\n      <div class=\"email\">{{ user.email }} - {{user.password}}</div>\r\n      <button mat-button *ngIf=\"user.credentials.length\" (click)=\"webAuthSignin()\" color=\"primary\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n      </button>\r\n      <button mat-button (click)=\"updateUser(user.email)\" color=\"warn\">\r\n        <mat-icon inline>create</mat-icon>\r\n      </button>\r\n      <button mat-button (click)=\"removeUser(user.email)\" color=\"warn\">\r\n        <mat-icon inline>delete</mat-icon>\r\n      </button>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-components/pagina-inicial/pagina-inicial.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-components/pagina-inicial/pagina-inicial.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; padding: 20px;\">\r\n  <h1>Área logada</h1>\r\n  <div>\r\n    <button mat-raised-button color=\"primary\" (click)=\"logout()\">\r\n      Logout\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-components/shared/dialog/dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-components/shared/dialog/dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2 mat-dialog-title>{{data?.titulo}}</h2>\n  <button mat-icon-button [mat-dialog-close]=\"false\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n\n<div mat-dialog-content>\n  <p>{{data?.mensagem}}</p>\n</div>\n\n<div mat-dialog-actions [align]=\"'end'\">\n  <button mat-raised-button [mat-dialog-close]=\"false\">\n    {{data?.cancelar}}\n  </button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">\n    {{data?.confirmar}}\n  </button>\n</div>"

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
/* harmony import */ var _secutiry_authorized_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secutiry/authorized-security */ "./src/app/secutiry/authorized-security.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-components/login/login.component */ "./src/app/custom-components/login/login.component.ts");
/* harmony import */ var _custom_components_pagina_inicial_pagina_inicial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-components/pagina-inicial/pagina-inicial.component */ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.ts");






const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _custom_components_pagina_inicial_pagina_inicial_component__WEBPACK_IMPORTED_MODULE_5__["PaginaInicialComponent"],
        canActivate: [_secutiry_authorized_security__WEBPACK_IMPORTED_MODULE_1__["AuthorizedSecurity"]]
    },
    {
        path: 'login',
        component: _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup, .signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BlclxcUHJvamVjdHNcXFN0dWR5XFxhbmd1bGFyXFxhbmd1bGFyLXdlYi1hdXRlbnRpY2F0aW9uL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtYXZhaWxhYmxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZ2l0aHViIHtcclxuICBtYXJnaW46IDNweCAwO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZ251cCwgLnNpZ25pbiB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIG1hcmdpbjogNTBweCAwO1xyXG59XHJcblxyXG4ub3Ige1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuIiwiLm5vdC1hdmFpbGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZ2l0aHViIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cbi5naXRodWIgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLnNpZ251cCwgLnNpZ25pbiB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5vciB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi51c2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"

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


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _secutiry_authorized_security__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./secutiry/authorized-security */ "./src/app/secutiry/authorized-security.ts");
/* harmony import */ var _custom_components_shared_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-components/shared/dialog/dialog.module */ "./src/app/custom-components/shared/dialog/dialog.module.ts");



















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
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _custom_components_shared_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        ],
        providers: [
            _secutiry_authorized_security__WEBPACK_IMPORTED_MODULE_17__["AuthorizedSecurity"]
        ],
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

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup,\n.signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 16px;\n  border-radius: 4px;\n}\n\n._mat-animation-noopable.mat-card {\n  transition: none;\n  animation: none;\n}\n\n.mat-card .mat-divider-horizontal {\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n\n[dir=rtl] .mat-card .mat-divider-horizontal {\n  left: auto;\n  right: 0;\n}\n\n.mat-card .mat-divider-horizontal.mat-divider-inset {\n  position: static;\n  margin: 0;\n}\n\n[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset {\n  margin-right: 0;\n}\n\n@media (-ms-high-contrast: active) {\n  .mat-card {\n    outline: solid 1px;\n  }\n}\n\n.mat-card-actions,\n.mat-card-content,\n.mat-card-subtitle {\n  display: block;\n  margin-bottom: 16px;\n}\n\n.mat-card-title {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.mat-card-actions {\n  margin-left: -8px;\n  margin-right: -8px;\n  padding: 8px 0;\n}\n\n.mat-card-actions-align-end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mat-card-image {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px -16px;\n}\n\n.mat-card-footer {\n  display: block;\n  margin: 0 -16px -16px -16px;\n}\n\n.mat-card-actions .mat-button,\n.mat-card-actions .mat-raised-button {\n  margin: 0 8px;\n}\n\n.mat-card-header {\n  display: flex;\n  flex-direction: row;\n}\n\n.mat-card-header .mat-card-title {\n  margin-bottom: 12px;\n}\n\n.mat-card-header-text {\n  margin: 0 16px;\n}\n\n.mat-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n\n.mat-card-title-group {\n  display: flex;\n  justify-content: space-between;\n}\n\n.mat-card-sm-image {\n  width: 80px;\n  height: 80px;\n}\n\n.mat-card-md-image {\n  width: 112px;\n  height: 112px;\n}\n\n.mat-card-lg-image {\n  width: 152px;\n  height: 152px;\n}\n\n.mat-card-xl-image {\n  width: 240px;\n  height: 240px;\n  margin: -8px;\n}\n\n.mat-card-title-group > .mat-card-xl-image {\n  margin: -8px 0 8px;\n}\n\n@media (max-width: 599px) {\n  .mat-card-title-group {\n    margin: 0;\n  }\n\n  .mat-card-xl-image {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n.mat-card-content > :first-child,\n.mat-card > :first-child {\n  margin-top: 0;\n}\n\n.mat-card-content > :last-child:not(.mat-card-footer),\n.mat-card > :last-child:not(.mat-card-footer) {\n  margin-bottom: 0;\n}\n\n.mat-card-image:first-child {\n  margin-top: -16px;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.mat-card > .mat-card-actions:last-child {\n  margin-bottom: -8px;\n  padding-bottom: 0;\n}\n\n.mat-card-actions .mat-button:first-child,\n.mat-card-actions .mat-raised-button:first-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mat-card-subtitle:not(:first-child),\n.mat-card-title:not(:first-child) {\n  margin-top: -4px;\n}\n\n.mat-card-header .mat-card-subtitle:not(:first-child) {\n  margin-top: -8px;\n}\n\n.mat-card > .mat-card-xl-image:first-child {\n  margin-top: -8px;\n}\n\n.mat-card > .mat-card-xl-image:last-child {\n  margin-bottom: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vRDpcXERldmVsb3BlclxcUHJvamVjdHNcXFN0dWR5XFxhbmd1bGFyXFxhbmd1bGFyLXdlYi1hdXRlbnRpY2F0aW9uL3NyY1xcYXBwXFxjdXN0b20tY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxnQkFBQTtBQ0NKOztBREdBOztFQUVFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSx5REFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLGtCQUFBO0VDQUY7QUFDRjs7QURHQTs7O0VBR0UsY0FBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLHdCQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBOztFQUVFLGFBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxTQUFBO0VDREY7O0VESUE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ0RGO0FBQ0Y7O0FESUE7O0VBRUUsYUFBQTtBQ0ZGOztBREtBOztFQUVFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBOztFQUVFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtYXZhaWxhYmxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZ2l0aHViIHtcclxuICBtYXJnaW46IDNweCAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWdudXAsXHJcbi5zaWduaW4ge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuLm9yIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4XHJcbn1cclxuXHJcbi5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZS5tYXQtY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxuICBhbmltYXRpb246IG5vbmVcclxufVxyXG5cclxuLm1hdC1jYXJkIC5tYXQtZGl2aWRlci1ob3Jpem9udGFsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5bZGlyPXJ0bF0gLm1hdC1jYXJkIC5tYXQtZGl2aWRlci1ob3Jpem9udGFsIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAwXHJcbn1cclxuXHJcbi5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbC5tYXQtZGl2aWRlci1pbnNldCB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICBtYXJnaW46IDBcclxufVxyXG5cclxuW2Rpcj1ydGxdIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbC5tYXQtZGl2aWRlci1pbnNldCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwXHJcbn1cclxuXHJcbkBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKSB7XHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIG91dGxpbmU6IHNvbGlkIDFweFxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMsXHJcbi5tYXQtY2FyZC1jb250ZW50LFxyXG4ubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHhcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA4cHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLThweDtcclxuICBwYWRkaW5nOiA4cHggMFxyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucy1hbGlnbi1lbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcclxuICBtYXJnaW46IDAgLTE2cHggMTZweCAtMTZweFxyXG59XHJcblxyXG4ubWF0LWNhcmQtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgLTE2cHggLTE2cHggLTE2cHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sXHJcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDhweFxyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHhcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICBtYXJnaW46IDAgMTZweFxyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyXHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxufVxyXG5cclxuLm1hdC1jYXJkLXNtLWltYWdlIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHhcclxufVxyXG5cclxuLm1hdC1jYXJkLW1kLWltYWdlIHtcclxuICB3aWR0aDogMTEycHg7XHJcbiAgaGVpZ2h0OiAxMTJweFxyXG59XHJcblxyXG4ubWF0LWNhcmQtbGctaW1hZ2Uge1xyXG4gIHdpZHRoOiAxNTJweDtcclxuICBoZWlnaHQ6IDE1MnB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC14bC1pbWFnZSB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgbWFyZ2luOiAtOHB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZS1ncm91cD4ubWF0LWNhcmQteGwtaW1hZ2Uge1xyXG4gIG1hcmdpbjogLThweCAwIDhweFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1OTlweCkge1xyXG4gIC5tYXQtY2FyZC10aXRsZS1ncm91cCB7XHJcbiAgICBtYXJnaW46IDBcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC14bC1pbWFnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMFxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQ+OmZpcnN0LWNoaWxkLFxyXG4ubWF0LWNhcmQ+OmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tdG9wOiAwXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSxcclxuLm1hdC1jYXJkPjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2U6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXRcclxufVxyXG5cclxuLm1hdC1jYXJkPi5tYXQtY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b246Zmlyc3QtY2hpbGQsXHJcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSxcclxuLm1hdC1jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tdG9wOiAtNHB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tdG9wOiAtOHB4XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQteGwtaW1hZ2U6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IC04cHhcclxufVxyXG5cclxuLm1hdC1jYXJkPi5tYXQtY2FyZC14bC1pbWFnZTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAtOHB4XHJcbn0iLCIubm90LWF2YWlsYWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5naXRodWIge1xuICBtYXJnaW46IDNweCAwO1xufVxuLmdpdGh1YiBpbWcge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uc2lnbnVwLFxuLnNpZ25pbiB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5vciB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi51c2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWF0LWNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlLm1hdC1jYXJkIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG4ubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1jYXJkIC5tYXQtZGl2aWRlci1ob3Jpem9udGFsIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbi5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbC5tYXQtZGl2aWRlci1pbnNldCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbjogMDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbC5tYXQtZGl2aWRlci1pbnNldCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgb3V0bGluZTogc29saWQgMXB4O1xuICB9XG59XG4ubWF0LWNhcmQtYWN0aW9ucyxcbi5tYXQtY2FyZC1jb250ZW50LFxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zLWFsaWduLWVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgbWFyZ2luOiAwIC0xNnB4IDE2cHggLTE2cHg7XG59XG5cbi5tYXQtY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIC0xNnB4IC0xNnB4IC0xNnB4O1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbixcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4ubWF0LWNhcmQtYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tYXQtY2FyZC10aXRsZS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1hdC1jYXJkLXNtLWltYWdlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1hdC1jYXJkLW1kLWltYWdlIHtcbiAgd2lkdGg6IDExMnB4O1xuICBoZWlnaHQ6IDExMnB4O1xufVxuXG4ubWF0LWNhcmQtbGctaW1hZ2Uge1xuICB3aWR0aDogMTUycHg7XG4gIGhlaWdodDogMTUycHg7XG59XG5cbi5tYXQtY2FyZC14bC1pbWFnZSB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgbWFyZ2luOiAtOHB4O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUtZ3JvdXAgPiAubWF0LWNhcmQteGwtaW1hZ2Uge1xuICBtYXJnaW46IC04cHggMCA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAubWF0LWNhcmQtdGl0bGUtZ3JvdXAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tYXQtY2FyZC14bC1pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4ubWF0LWNhcmQtY29udGVudCA+IDpmaXJzdC1jaGlsZCxcbi5tYXQtY2FyZCA+IDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50ID4gOmxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpLFxuLm1hdC1jYXJkID4gOmxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1hdC1jYXJkLWltYWdlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xufVxuXG4ubWF0LWNhcmQgPiAubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uOmZpcnN0LWNoaWxkLFxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLm1hdC1jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4ubWF0LWNhcmQgPiAubWF0LWNhcmQteGwtaW1hZ2U6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4ubWF0LWNhcmQgPiAubWF0LWNhcmQteGwtaW1hZ2U6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_server_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server-mock.service */ "./src/app/services/server-mock.service.ts");
/* harmony import */ var src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/web-authn.service */ "./src/app/services/web-authn.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let LoginComponent = class LoginComponent {
    constructor(serverMockService, webAuthnService, dialog, route) {
        this.serverMockService = serverMockService;
        this.webAuthnService = webAuthnService;
        this.dialog = dialog;
        this.route = route;
        this.title = 'angular-web-authn';
        this.email = '';
        this.password = '';
        this.useFingerprint = false;
        this.webAuthnAvailable = !!navigator.credentials && !!navigator.credentials.create;
        this.users = serverMockService.getUsers();
    }
    signup() {
        console.log('Cadastro');
        if (this.email === '' || this.password === '') {
            this.dialog
                .confirmDialog({
                titulo: 'Atenção!',
                mensagem: 'Usuário e/ou senha inválidos.',
                confirmar: 'Ok'
            })
                .subscribe((resposta) => {
                if (resposta) {
                    return;
                }
            });
            return;
        }
        const prevUser = this.serverMockService.getUser(this.email);
        if (prevUser) {
            this.dialog
                .confirmDialog({
                titulo: 'Atenção!',
                mensagem: 'Usuário já existe em nossa base.',
                confirmar: 'Ok'
            })
                .subscribe((resposta) => {
                if (resposta) {
                    return;
                }
            });
        }
        else {
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
    }
    signin() {
        console.log('Login');
        if (this.email === '') {
            this.dialog
                .confirmDialog({
                titulo: 'Atenção!',
                mensagem: 'Usuário e/ou senha inválidos.',
                confirmar: 'Ok'
            })
                .subscribe((resposta) => {
                if (resposta) {
                    return;
                }
            });
            return;
        }
        else {
            this.webAuthSignin();
        }
    }
    webAuthSignin() {
        const user = this.serverMockService.getUser(this.email);
        this.webAuthnService.webAuthnSignin(user).then((response) => {
            alert('✅ Congrats! Authentication went fine!');
            console.log('SUCCESSFULLY GOT AN ASSERTION!', response);
        }).catch((error) => {
            console.log('Autenticacao por dispositivo falhou: ', error);
            const user = this.serverMockService.getUsers().find(u => u.email === this.email && u.password === this.password);
            if (user) {
                user.token = '' + Math.floor(Math.random() * 100000000);
                localStorage.setItem('user.logged', JSON.stringify(user));
                this.dialog
                    .confirmDialog({
                    titulo: ' ✅ Autenticação efetuada com sucesso!',
                    mensagem: 'Deseja vincular seu login ao dispositivo?',
                    confirmar: 'Sim',
                    cancelar: 'Não'
                })
                    .subscribe((resposta) => {
                    if (resposta) {
                        this.webAuthnService.webAuthnSignup(user)
                            .then((credential) => {
                            console.log('Credenciais criadas com sucesso', credential);
                            const valid = this.serverMockService.registerCredential(user, credential);
                            this.users = this.serverMockService.getUsers();
                            this.route.navigate(['home']);
                        }).catch((error) => {
                            console.log('Credenciais erro: ', error);
                        });
                    }
                    else {
                        this.route.navigate(['home']);
                    }
                });
            }
            else {
                alert('🚫 Sorry :( Invalid credentials!');
            }
        });
    }
    removeUser(email) {
        this.dialog.confirmDialog({
            titulo: 'Remover usuário',
            mensagem: 'Deseja realmente remover o usuário ' + email + '?',
            confirmar: 'Sim',
            cancelar: 'Não',
        }).subscribe((resposta) => {
            if (resposta) {
                this.serverMockService.removeUser(email);
                this.users = this.serverMockService.getUsers();
            }
        });
    }
    updateUser(email) {
        let user = this.serverMockService.getUser(email);
        user.password = '111';
        this.serverMockService.updateUser(user);
        this.users = this.serverMockService.getUsers();
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_server_mock_service__WEBPACK_IMPORTED_MODULE_3__["ServerMockService"] },
    { type: src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_4__["WebAuthnService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/custom-components/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_server_mock_service__WEBPACK_IMPORTED_MODULE_3__["ServerMockService"], src_app_services_web_authn_service__WEBPACK_IMPORTED_MODULE_4__["WebAuthnService"], src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/custom-components/pagina-inicial/pagina-inicial.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup, .signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvcGFnaW5hLWluaWNpYWwvRDpcXERldmVsb3BlclxcUHJvamVjdHNcXFN0dWR5XFxhbmd1bGFyXFxhbmd1bGFyLXdlYi1hdXRlbnRpY2F0aW9uL3NyY1xcYXBwXFxjdXN0b20tY29tcG9uZW50c1xccGFnaW5hLWluaWNpYWxcXHBhZ2luYS1pbmljaWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9wYWdpbmEtaW5pY2lhbC9wYWdpbmEtaW5pY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL3BhZ2luYS1pbmljaWFsL3BhZ2luYS1pbmljaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1hdmFpbGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5naXRodWIge1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbnVwLCAuc2lnbmluIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufSIsIi5ub3QtYXZhaWxhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmdpdGh1YiB7XG4gIG1hcmdpbjogM3B4IDA7XG59XG4uZ2l0aHViIGltZyB7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5zaWdudXAsIC5zaWduaW4ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ub3Ige1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4udXNlciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PaginaInicialComponent = class PaginaInicialComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('user.logged');
        this.route.navigate(['login']);
    }
};
PaginaInicialComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PaginaInicialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagina-inicial',
        template: __webpack_require__(/*! raw-loader!./pagina-inicial.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-components/pagina-inicial/pagina-inicial.component.html"),
        styles: [__webpack_require__(/*! ./pagina-inicial.component.scss */ "./src/app/custom-components/pagina-inicial/pagina-inicial.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PaginaInicialComponent);



/***/ }),

/***/ "./src/app/custom-components/shared/dialog/dialog.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/custom-components/shared/dialog/dialog.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.header > h2 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvc2hhcmVkL2RpYWxvZy9EOlxcRGV2ZWxvcGVyXFxQcm9qZWN0c1xcU3R1ZHlcXGFuZ3VsYXJcXGFuZ3VsYXItd2ViLWF1dGVudGljYXRpb24vc3JjXFxhcHBcXGN1c3RvbS1jb21wb25lbnRzXFxzaGFyZWRcXGRpYWxvZ1xcZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9zaGFyZWQvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL3NoYXJlZC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uaGVhZGVyPmgyIHtcclxuICBtYXJnaW46IDA7XHJcbn0iLCIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaGVhZGVyID4gaDIge1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/custom-components/shared/dialog/dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/custom-components/shared/dialog/dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DialogComponent = class DialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
DialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-components/shared/dialog/dialog.component.html"),
        styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/custom-components/shared/dialog/dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], DialogComponent);



/***/ }),

/***/ "./src/app/custom-components/shared/dialog/dialog.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/custom-components/shared/dialog/dialog.module.ts ***!
  \******************************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.component */ "./src/app/custom-components/shared/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");













let DialogModule = class DialogModule {
};
DialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        ],
        declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]],
        exports: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]],
        entryComponents: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]]
    })
], DialogModule);



/***/ }),

/***/ "./src/app/secutiry/authorized-security.ts":
/*!*************************************************!*\
  !*** ./src/app/secutiry/authorized-security.ts ***!
  \*************************************************/
/*! exports provided: AuthorizedSecurity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedSecurity", function() { return AuthorizedSecurity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utils_security_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/security-utils */ "./src/app/utils/security-utils.ts");




let AuthorizedSecurity = class AuthorizedSecurity {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const user = _utils_security_utils__WEBPACK_IMPORTED_MODULE_3__["SecurityUtil"].get();
        if (!user || !user.token) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AuthorizedSecurity.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthorizedSecurity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthorizedSecurity);



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _custom_components_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/shared/dialog/dialog.component */ "./src/app/custom-components/shared/dialog/dialog.component.ts");




let DialogService = class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirmDialog(data) {
        return this.dialog
            .open(_custom_components_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            data,
            width: '400px',
            disableClose: true,
        })
            .afterClosed();
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], DialogService);



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
        let someRandomCodeFromTheServer = Math.floor(Math.random() * 10000000).toString();
        return Uint8Array.from(someRandomCodeFromTheServer, c => c.charCodeAt(0));
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
                name: 'Willian Braga WebAuthn'
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
        alert(JSON.stringify(user));
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

/***/ "./src/app/utils/security-utils.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/security-utils.ts ***!
  \*****************************************/
/*! exports provided: SecurityUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityUtil", function() { return SecurityUtil; });
/* harmony import */ var _services_server_mock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/server-mock.service */ "./src/app/services/server-mock.service.ts");

class SecurityUtil {
    constructor(serverMockService) {
        this.serverMockService = serverMockService;
    }
    static get() {
        const data = localStorage.getItem('user.logged');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    }
}
SecurityUtil.ctorParameters = () => [
    { type: _services_server_mock_service__WEBPACK_IMPORTED_MODULE_0__["ServerMockService"] }
];


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

module.exports = __webpack_require__(/*! D:\Developer\Projects\Study\angular\angular-web-autentication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map