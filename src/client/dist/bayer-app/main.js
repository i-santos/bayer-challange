(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\n  [style.opacity]=\"searching ? '1' : '0'\"\n  mode=\"query\"\n></mat-progress-bar>\n\n<div class=\"container\">\n  <farmer-search-card\n    (onSearchEvent)=\"searching = true\"\n    [farmerSearchAbstractProvider]=\"myFarmerSearchProvider\"\n    (onPartnerSelectedEvent)=\"onPartnerSelectedEvent($event)\"\n  >\n  </farmer-search-card>\n  <mat-form-field\n    appearance=\"fill\"\n    class=\"full-width flex-2 autofill-form-field\"\n  >\n    <mat-label>Remetente</mat-label>\n    <input matInput readonly [(ngModel)]=\"farmer.name\" />\n  </mat-form-field>\n</div>\n<div class=\"container\">\n  <mat-form-field\n    appearance=\"fill\"\n    class=\"full-width flex-1 autofill-form-field\"\n  >\n    <mat-label>Doc #</mat-label>\n    <input matInput readonly [(ngModel)]=\"farmer.document.number\" />\n  </mat-form-field>\n  <mat-form-field\n    appearance=\"fill\"\n    class=\"full-width flex-3 autofill-form-field\"\n  >\n    <mat-label>Endereço</mat-label>\n    <input matInput readonly [(ngModel)]=\"farmer.address.address\" />\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_model_farmer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/farmer.model */ "./src/model/farmer.model.ts");
/* harmony import */ var src_services_farmer_farmer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/farmer/farmer.service */ "./src/services/farmer/farmer.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(myFarmerSearchProvider, snackBar) {
        this.myFarmerSearchProvider = myFarmerSearchProvider;
        this.snackBar = snackBar;
        this.farmer = new src_model_farmer_model__WEBPACK_IMPORTED_MODULE_3__["Farmer"]();
        this.searching = false;
    }
    AppComponent.prototype.onPartnerSelectedEvent = function (response) {
        this.searching = false;
        if (response instanceof Error) {
            this.snackBar.open(response.message, "Ok", {
                panelClass: "style-error",
                duration: 3000,
                horizontalPosition: "end",
                verticalPosition: "top",
            });
            this.farmer = new src_model_farmer_model__WEBPACK_IMPORTED_MODULE_3__["Farmer"]();
            return;
        }
        this.snackBar.open("Found", "OK", {
            panelClass: "style-success",
            duration: 5000,
            horizontalPosition: "end",
            verticalPosition: "top",
        });
        this.farmer = response;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_farmer_farmer_service__WEBPACK_IMPORTED_MODULE_4__["FarmerSearchAbstractProvider"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_services_farmer_farmer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/farmer/farmer.service */ "./src/services/farmer/farmer.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _farmer_search_card_farmer_search_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./farmer-search-card/farmer-search-card.component */ "./src/app/farmer-search-card/farmer-search-card.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _farmer_search_card_farmer_search_card_component__WEBPACK_IMPORTED_MODULE_9__["FarmerSearchCardComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            ],
            providers: [src_services_farmer_farmer_service__WEBPACK_IMPORTED_MODULE_7__["FarmerSearchAbstractProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/farmer-search-card/farmer-search-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/farmer-search-card/farmer-search-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"fill\" class=\"full-width flex-1\">\n  <mat-label>Nome ou Doc#</mat-label>\n  <input [(ngModel)]=\"termInput\" matInput />\n  <mat-icon matPrefix>search</mat-icon>\n  <button matSuffix mat-button (click)=\"onSearchClick()\">\n    <mat-icon>arrow_forward</mat-icon>\n  </button>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/farmer-search-card/farmer-search-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/farmer-search-card/farmer-search-card.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci1zZWFyY2gtY2FyZC9mYXJtZXItc2VhcmNoLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/farmer-search-card/farmer-search-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/farmer-search-card/farmer-search-card.component.ts ***!
  \********************************************************************/
/*! exports provided: FarmerSearchCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerSearchCardComponent", function() { return FarmerSearchCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_farmer_farmer_searcher_abstract_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/farmer/farmer-searcher-abstract-provider */ "./src/services/farmer/farmer-searcher-abstract-provider.ts");
/* harmony import */ var src_services_farmer_farmer_searcher_abstract_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_services_farmer_farmer_searcher_abstract_provider__WEBPACK_IMPORTED_MODULE_2__);



var FarmerSearchCardComponent = /** @class */ (function () {
    function FarmerSearchCardComponent() {
        this.onPartnerSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSearchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.termInput = "";
    }
    FarmerSearchCardComponent.prototype.ngOnInit = function () { };
    FarmerSearchCardComponent.prototype.onSearchClick = function () {
        var _this = this;
        if (this.termInput) {
            this.onSearchEvent.emit();
            this.farmerSearchAbstractProvider
                .searchFarmers({ term: this.termInput })
                .then(function (res) {
                _this.onPartnerSelectedEvent.emit(res[0]);
            })
                .catch(function (err) {
                _this.onPartnerSelectedEvent.emit(new Error((err.error && err.error.message) ||
                    "Action could not be completed"));
            });
        }
        else {
            this.onPartnerSelectedEvent.emit(new Error("Name or Doc number is required"));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_services_farmer_farmer_searcher_abstract_provider__WEBPACK_IMPORTED_MODULE_2__["FarmerSearchAbstractProvider"])
    ], FarmerSearchCardComponent.prototype, "farmerSearchAbstractProvider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FarmerSearchCardComponent.prototype, "onPartnerSelectedEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FarmerSearchCardComponent.prototype, "onSearchEvent", void 0);
    FarmerSearchCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "farmer-search-card",
            template: __webpack_require__(/*! ./farmer-search-card.component.html */ "./src/app/farmer-search-card/farmer-search-card.component.html"),
            styles: [__webpack_require__(/*! ./farmer-search-card.component.scss */ "./src/app/farmer-search-card/farmer-search-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FarmerSearchCardComponent);
    return FarmerSearchCardComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/model/address.model.ts":
/*!************************************!*\
  !*** ./src/model/address.model.ts ***!
  \************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/model/document.model.ts":
/*!*************************************!*\
  !*** ./src/model/document.model.ts ***!
  \*************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
var Document = /** @class */ (function () {
    function Document() {
    }
    return Document;
}());



/***/ }),

/***/ "./src/model/farmer.model.ts":
/*!***********************************!*\
  !*** ./src/model/farmer.model.ts ***!
  \***********************************/
/*! exports provided: Farmer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Farmer", function() { return Farmer; });
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.model */ "./src/model/address.model.ts");
/* harmony import */ var _document_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.model */ "./src/model/document.model.ts");


var Farmer = /** @class */ (function () {
    function Farmer() {
        this.document = new _document_model__WEBPACK_IMPORTED_MODULE_1__["Document"]();
        this.address = new _address_model__WEBPACK_IMPORTED_MODULE_0__["Address"]();
    }
    return Farmer;
}());



/***/ }),

/***/ "./src/services/farmer/farmer-searcher-abstract-provider.ts":
/*!******************************************************************!*\
  !*** ./src/services/farmer/farmer-searcher-abstract-provider.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/services/farmer/farmer.service.ts":
/*!***********************************************!*\
  !*** ./src/services/farmer/farmer.service.ts ***!
  \***********************************************/
/*! exports provided: FarmerSearchAbstractProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerSearchAbstractProvider", function() { return FarmerSearchAbstractProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FarmerSearchAbstractProvider = /** @class */ (function () {
    function FarmerSearchAbstractProvider(http) {
        this.http = http;
        this.farmersUrl = "/api/farmers";
    }
    FarmerSearchAbstractProvider.prototype.searchFarmers = function (params) {
        return this.http
            .get(this.farmersUrl + "/" + params.term)
            .toPromise();
    };
    FarmerSearchAbstractProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FarmerSearchAbstractProvider);
    return FarmerSearchAbstractProvider;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/igor/dados/portfolio/maxxidata/api/src/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map