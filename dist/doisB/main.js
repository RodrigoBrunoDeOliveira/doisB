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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n\n<main>\n  <app-introduction></app-introduction>\n  <app-cards></app-cards>\n  <app-steps></app-steps>\n  <app-team></app-team>\n  <app-awards></app-awards>\n  <app-projects></app-projects>\n  <app-comments></app-comments>\n\n  <div class=\"leed-component\">\n    <app-leed-panel\n      message='LET’S WORK TOGETHER!'\n      title='GET IN TOUCH WITH OUR TEAM'\n    ></app-leed-panel>\n  </div>\n</main>\n\n<app-main-footer></app-main-footer>"

/***/ }),

/***/ "./app/app.component.scss":
/*!********************************!*\
  !*** ./app/app.component.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  overflow-x: hidden; }\n  main .leed-component {\n    padding: 50px 0; }\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cards/cards.component */ "./app/components/cards/cards.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _components_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/swiper/swiper.component */ "./app/components/swiper/swiper.component.ts");
/* harmony import */ var _components_card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card-icon/card-icon.component */ "./app/components/card-icon/card-icon.component.ts");
/* harmony import */ var _components_leed_panel_leed_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/leed-panel/leed-panel.component */ "./app/components/leed-panel/leed-panel.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/panel/panel.component */ "./app/components/panel/panel.component.ts");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "./app/components/introduction/introduction.component.ts");
/* harmony import */ var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-header/main-header.component */ "./app/components/main-header/main-header.component.ts");
/* harmony import */ var _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/steps/steps.component */ "./app/components/steps/steps.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/team/team.component */ "./app/components/team/team.component.ts");
/* harmony import */ var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/awards/awards.component */ "./app/components/awards/awards.component.ts");
/* harmony import */ var _components_cards_resume_cards_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cards-resume/cards-resume.component */ "./app/components/cards-resume/cards-resume.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/projects/projects.component */ "./app/components/projects/projects.component.ts");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/comments/comments.component */ "./app/components/comments/comments.component.ts");
/* harmony import */ var _components_swiper_profile_swiper_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/swiper-profile/swiper-profile.component */ "./app/components/swiper-profile/swiper-profile.component.ts");
/* harmony import */ var _components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main-footer/main-footer.component */ "./app/components/main-footer/main-footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ "../node_modules/ngx-mask/fesm5/ngx-mask.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_9__["MainHeaderComponent"],
                _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"],
                _components_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"],
                _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_0__["CardsComponent"],
                _components_card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_5__["CardIconComponent"],
                _components_leed_panel_leed_panel_component__WEBPACK_IMPORTED_MODULE_6__["LeedPanelComponent"],
                _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"],
                _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_12__["AwardsComponent"],
                _components_cards_resume_cards_resume_component__WEBPACK_IMPORTED_MODULE_13__["CardsResumeComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_15__["CommentsComponent"],
                _components_swiper_profile_swiper_profile_component__WEBPACK_IMPORTED_MODULE_16__["SwiperProfileComponent"],
                _components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_17__["MainFooterComponent"]
            ],
            exports: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"].forRoot()
            ],
            providers: [_components_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/components/awards/awards.component.html":
/*!*****************************************************!*\
  !*** ./app/components/awards/awards.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"awards\">\n  <div class=\"awards-container\">\n    <div class=\"awards-header\">\n      <h3 class=\"title\">Award-winning architecture company</h3>\n      <h6 class=\"subtitle\">We deliver the best solutions</h6>\n\n      <article class=\"awards-article\">\n        <div class=\"awards-figure\">\n          <img *ngIf=\"screen === 'desktop'\" src=\"../../../assets/images/img_01.webp\">\n          <img *ngIf=\"screen === 'mobile' || screen === 'tablet'\" src=\"../../../assets/images/img_01.jpg\">\n        </div>\n      </article>\n    </div>\n\n    <div class=\"awards-body\">\n      <div class=\"awards-resume\">\n        <app-cards-resume\n          [number]=\"7\"\n          text='We have been working in the industry since 2011.'\n          title='years'\n        ></app-cards-resume>\n      </div>\n\n      <div class=\"awards-resume\">\n        <app-cards-resume\n          [number]=\"54\"\n          text='To this day, we have designed 54 residential projects.'\n          title='projects'\n        ></app-cards-resume>\n      </div>\n\n      <div class=\"awards-resume\">\n        <app-cards-resume\n          [number]=\"11\"\n          text='Spectrum has been awarded for creativity many times.'\n          title='awards'\n        ></app-cards-resume>\n      </div>\n    </div>\n\n    <div class=\"awards-footer\">\n      <a class=\"awards-button\">contact us</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./app/components/awards/awards.component.scss":
/*!*****************************************************!*\
  !*** ./app/components/awards/awards.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".awards {\n  padding: 50px 0; }\n  .awards .awards-container {\n    padding: 0 15px; }\n  .awards .awards-container .awards-article {\n      margin-top: 30px; }\n  .awards .awards-container .awards-article .awards-figure img {\n        max-width: 100%;\n        border-radius: 7px; }\n  .awards .awards-container .awards-body {\n      padding: 0 15px;\n      margin-bottom: 50px;\n      display: inline-block; }\n  .awards .awards-container .awards-body .awards-resume {\n        width: calc(100% / 2);\n        display: inherit; }\n  .awards .awards-container .awards-body .awards-resume:last-of-type {\n          margin: 0 auto;\n          display: block; }\n  .awards .awards-container .awards-footer {\n      margin-bottom: 30px; }\n  .awards .awards-container .awards-footer .awards-button {\n        color: #FFF;\n        background-color: #c4956a;\n        display: table;\n        padding: 10px 30px;\n        font-size: 12px;\n        line-height: 1.5;\n        font-weight: 700;\n        letter-spacing: -.02em;\n        text-transform: uppercase;\n        cursor: pointer;\n        margin: 0 auto; }\n"

/***/ }),

/***/ "./app/components/awards/awards.component.ts":
/*!***************************************************!*\
  !*** ./app/components/awards/awards.component.ts ***!
  \***************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/screen.service */ "./app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AwardsComponent = /** @class */ (function () {
    function AwardsComponent(screenService) {
        this.screenService = screenService;
        this.screen = this.screenService.getDevice();
    }
    AwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! ./awards.component.html */ "./app/components/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.scss */ "./app/components/awards/awards.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./app/components/card-icon/card-icon.component.html":
/*!***********************************************************!*\
  !*** ./app/components/card-icon/card-icon.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"card-icon\">\n  <div>\n    <div class=\"card-icon-img\">\n      <i class=\"{{ icon }}\"></i>\n    </div>\n    <h6 class=\"card-icon-title\">\n      <!-- TODO: Fazer o deslocamento para o card de introducao -->\n      <a class=\"card-icon-title\">{{ title }}</a>\n    </h6>\n  </div>\n\n  <div class=\"card-icon-text\">\n    {{ text }}\n  </div>\n</article>"

/***/ }),

/***/ "./app/components/card-icon/card-icon.component.scss":
/*!***********************************************************!*\
  !*** ./app/components/card-icon/card-icon.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-icon .card-icon-img {\n  font-size: 50px;\n  text-align: center;\n  margin-bottom: 12px; }\n\n.card-icon .card-icon-title {\n  font-weight: 700;\n  font-size: 15px;\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: -0.02em;\n  color: #000;\n  margin: 0 0 12px 0;\n  text-align: center; }\n\n.card-icon .card-icon-title:hover {\n    position: relative;\n    -webkit-transform: translateY(5px);\n            transform: translateY(5px);\n    will-change: transform;\n    transition: all .3s ease; }\n\n.card-icon .card-icon-title a:after {\n    position: absolute;\n    content: '';\n    bottom: -4px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-top: 1px solid;\n    transition: inherit; }\n\n.card-icon .card-icon-text {\n  text-align: center;\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 13px;\n  line-height: 1.6;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  color: rgba(0, 0, 0, 0.7);\n  background-color: #FFF;\n  -webkit-text-size-adjust: none;\n  -webkit-font-smoothing: subpixel-antialiased; }\n"

/***/ }),

/***/ "./app/components/card-icon/card-icon.component.ts":
/*!*********************************************************!*\
  !*** ./app/components/card-icon/card-icon.component.ts ***!
  \*********************************************************/
/*! exports provided: CardIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardIconComponent", function() { return CardIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardIconComponent = /** @class */ (function () {
    function CardIconComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardIconComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardIconComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardIconComponent.prototype, "title", void 0);
    CardIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-icon',
            template: __webpack_require__(/*! ./card-icon.component.html */ "./app/components/card-icon/card-icon.component.html"),
            styles: [__webpack_require__(/*! ./card-icon.component.scss */ "./app/components/card-icon/card-icon.component.scss")]
        })
    ], CardIconComponent);
    return CardIconComponent;
}());



/***/ }),

/***/ "./app/components/cards-resume/cards-resume.component.html":
/*!*****************************************************************!*\
  !*** ./app/components/cards-resume/cards-resume.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"cards-resume\">\n  <div class=\"cards-resume-header\">\n    <div class=\"resume-header-number\">\n      <span>{{ number }}</span>\n    </div>\n    <h6 class=\"cards-resume-title\">{{ title }}</h6>\n  </div>\n\n  <div class=\"cards-resume-text\">{{ text }}</div>\n</article>\n"

/***/ }),

/***/ "./app/components/cards-resume/cards-resume.component.scss":
/*!*****************************************************************!*\
  !*** ./app/components/cards-resume/cards-resume.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-resume {\n  padding: 0 15px;\n  margin-bottom: 30px;\n  text-align: center; }\n  .cards-resume .cards-resume-header {\n    text-transform: uppercase;\n    font-weight: 700; }\n  .cards-resume .cards-resume-header .resume-header-number {\n      font-size: 32px; }\n  .cards-resume .cards-resume-header .cards-resume-title {\n      color: #000; }\n  .cards-resume .cards-resume-header .cards-resume-title:after {\n        display: block;\n        content: '';\n        margin-left: auto;\n        margin-right: auto;\n        width: 18px;\n        height: 4px;\n        margin-top: 6px;\n        background: #c4956a; }\n  .cards-resume .cards-resume-text {\n    margin-top: 10px;\n    font-size: 13px;\n    line-height: 1.6;\n    font-weight: 400;\n    letter-spacing: -.02em;\n    color: rgba(0, 0, 0, 0.7);\n    -webkit-font-smoothing: subpixel-antialiased; }\n"

/***/ }),

/***/ "./app/components/cards-resume/cards-resume.component.ts":
/*!***************************************************************!*\
  !*** ./app/components/cards-resume/cards-resume.component.ts ***!
  \***************************************************************/
/*! exports provided: CardsResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsResumeComponent", function() { return CardsResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsResumeComponent = /** @class */ (function () {
    function CardsResumeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardsResumeComponent.prototype, "number", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardsResumeComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardsResumeComponent.prototype, "title", void 0);
    CardsResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-resume',
            template: __webpack_require__(/*! ./cards-resume.component.html */ "./app/components/cards-resume/cards-resume.component.html"),
            styles: [__webpack_require__(/*! ./cards-resume.component.scss */ "./app/components/cards-resume/cards-resume.component.scss")]
        })
    ], CardsResumeComponent);
    return CardsResumeComponent;
}());



/***/ }),

/***/ "./app/components/cards/cards.component.html":
/*!***************************************************!*\
  !*** ./app/components/cards/cards.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cards\">\n  <div class=\"cards-blocks\">\n    <app-card-icon\n      icon='far fa-building'\n      text='We provide high-quality architecture services.'\n      title='Architecture'\n    ></app-card-icon>\n  </div>\n\n  <div class=\"cards-blocks\">\n    <app-card-icon\n      icon='fas fa-pen-nib'\n      text='We provide high-quality architecture services.'\n      title='Architecture'\n    ></app-card-icon>\n  </div>\n\n  <div class=\"cards-blocks\">\n    <app-card-icon\n      icon='far fa-lightbulb'\n      text='We provide high-quality architecture services.'\n      title='Architecture'\n    ></app-card-icon>\n  </div>\n\n  <div class=\"cards-panel\">\n    <app-leed-panel\n      message='WE WILL CONTACT YOU WITHIN 24 HOURS'\n      title='FIND OUT THE PRICE OF YOUR HOME'\n    ></app-leed-panel>\n  </div>\n</section>"

/***/ }),

/***/ "./app/components/cards/cards.component.scss":
/*!***************************************************!*\
  !*** ./app/components/cards/cards.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  padding: 50px 0; }\n  .cards .cards-blocks {\n    margin-bottom: 40px; }\n  .cards .cards-panel {\n    margin-bottom: 50px; }\n"

/***/ }),

/***/ "./app/components/cards/cards.component.ts":
/*!*************************************************!*\
  !*** ./app/components/cards/cards.component.ts ***!
  \*************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./app/components/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./app/components/cards/cards.component.scss")]
        })
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./app/components/comments/comments.component.html":
/*!*********************************************************!*\
  !*** ./app/components/comments/comments.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"comments\">\n  <div class=\"comments-container\">\n    <app-swiper-profile\n      [swiper]=\"swiper\"\n    ></app-swiper-profile>\n  </div>\n</section>"

/***/ }),

/***/ "./app/components/comments/comments.component.scss":
/*!*********************************************************!*\
  !*** ./app/components/comments/comments.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments {\n  background-color: #282828;\n  padding: 50px 0; }\n  .comments .comments-container {\n    padding: 0 15px; }\n"

/***/ }),

/***/ "./app/components/comments/comments.component.ts":
/*!*******************************************************!*\
  !*** ./app/components/comments/comments.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_swiper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/swiper.service */ "./app/services/swiper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(swiperService) {
        this.swiperService = swiperService;
        this.swiper = [
            {
                active: true,
                img: 'img_01',
                swiperData: {
                    name: 'KATE WILLIAMS',
                    office: 'Entrepreneur',
                    text: 'I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.'
                }
            }, {
                active: false,
                img: 'img_02',
                swiperData: {
                    name: 'ANN LEE',
                    office: 'Freelancer',
                    text: 'I was looking for top-notch creativity and quality service and I found what I needed in your team. You took all my ideas and demands into consideration and made a great project.'
                }
            }, {
                active: false,
                img: 'img_03',
                swiperData: {
                    name: 'SAM MCMILLAN',
                    office: 'Manager',
                    text: 'I selected Spectrum because of their architects’ rigorous design background and education. They exceeded my expectations and did a great a job on extending and redesigning my house.'
                }
            }
        ];
        this.swiper = this.swiperService.chooseImgage(this.swiper);
    }
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./app/components/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./app/components/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_swiper_service__WEBPACK_IMPORTED_MODULE_1__["SwiperService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./app/components/introduction/introduction.component.html":
/*!*****************************************************************!*\
  !*** ./app/components/introduction/introduction.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Falta listas de fundo -->\n<section class=\"introduction\">\n  <div class=\"introduction-contant\">\n    <div class=\"introduction-container\">\n      <article class=\"introduction-article\">\n        <div class=\"introduction-title\">\n          arquiterura\n          <br>& interiores\n        </div>\n        <h6 class=\"introduction-subtitle\">\n          fazer de um traço\n          <br>a projeção dos\n          <br>seus sonhos\n        </h6>\n\n        <div class=\"introduction-contact\">\n          <!-- TODO: falta animacao do botao -->\n          <a class=\"introduction-button\">\n            fale conosco\n          </a>\n        </div>\n      </article>\n    </div>\n\n    <div class=\"introduction-contro-panel\">\n      <div class=\"introduction-swiper\">\n        <!-- TODO: Alinhar arrows -->\n        <div class=\"introduction-swiper-left\" (click)=\"backImg()\">\n          <i class=\"fas fa-arrow-left\"></i>\n        </div>\n        <div class=\"introduction-swiper-right\" (click)=\"nextImg()\">\n          <i class=\"fas fa-arrow-right\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-swiper\n    [swiper]=\"swiper\"\n  ></app-swiper>\n</section>\n"

/***/ }),

/***/ "./app/components/introduction/introduction.component.scss":
/*!*****************************************************************!*\
  !*** ./app/components/introduction/introduction.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introduction .introduction-contant {\n  background-color: #242424; }\n  .introduction .introduction-contant .introduction-container {\n    padding: 30px 15px; }\n  .introduction .introduction-contant .introduction-container .introduction-article {\n      text-transform: uppercase;\n      text-align: center;\n      font-weight: 700; }\n  .introduction .introduction-contant .introduction-container .introduction-article .introduction-title {\n        font-size: 30px;\n        line-height: 1.16667;\n        text-transform: uppercase;\n        letter-spacing: -.02em;\n        white-space: nowrap;\n        color: #FFF; }\n  .introduction .introduction-contant .introduction-container .introduction-article .introduction-subtitle {\n        color: #c4956a;\n        margin-top: 20px;\n        font-size: 15px; }\n  .introduction .introduction-contant .introduction-container .introduction-article .introduction-contact {\n        margin-top: 20px; }\n  .introduction .introduction-contant .introduction-container .introduction-article .introduction-contact .introduction-button {\n          padding: 10px 30px;\n          font-size: 12px;\n          line-height: 1.5;\n          border: 1px solid #c4956a;\n          font-weight: 700;\n          letter-spacing: -.02em;\n          cursor: pointer;\n          transition: 250ms all ease-in-out;\n          color: #FFF; }\n  .introduction .introduction-contant .introduction-contro-panel {\n    padding: 10px 15px;\n    width: 100%;\n    height: 48px; }\n  .introduction .introduction-contant .introduction-contro-panel .introduction-swiper {\n      display: flex;\n      margin: auto;\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content; }\n  .introduction .introduction-contant .introduction-contro-panel .introduction-swiper .introduction-swiper-left, .introduction .introduction-contant .introduction-contro-panel .introduction-swiper .introduction-swiper-right {\n        border: 2px solid rgba(255, 255, 255, 0.4);\n        border-radius: 50%;\n        width: 48px;\n        height: 48px;\n        font-size: 22px;\n        line-height: 44px;\n        color: #FFF;\n        will-change: transform;\n        transition: all .2s ease-in-out;\n        cursor: pointer;\n        z-index: 10;\n        text-align: center; }\n  .introduction .introduction-contant .introduction-contro-panel .introduction-swiper .introduction-swiper-left:hover, .introduction .introduction-contant .introduction-contro-panel .introduction-swiper .introduction-swiper-right:hover {\n          color: rgba(255, 255, 255, 0.4); }\n  .introduction .introduction-contant .introduction-contro-panel .introduction-swiper .introduction-swiper-right {\n        margin-left: 7px; }\n"

/***/ }),

/***/ "./app/components/introduction/introduction.component.ts":
/*!***************************************************************!*\
  !*** ./app/components/introduction/introduction.component.ts ***!
  \***************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_swiper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/swiper.service */ "./app/services/swiper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent(swiperService) {
        this.swiperService = swiperService;
        this.swiper = [
            { active: true, img: 'img_01' },
            { active: false, img: 'img_02' },
            { active: false, img: 'img_03' },
        ];
        this.swiper = this.swiperService.chooseImgage(this.swiper);
    }
    IntroductionComponent.prototype.backImg = function () {
        for (var i = 0; this.swiper.length >= i; i++) {
            if (this.swiper[i].active) {
                if (i - 1 >= 0) {
                    this.swiper[i - 1].active = true;
                    this.swiper[i].active = false;
                    return;
                }
                else {
                    this.swiper[this.swiper.length - 1].active = true;
                    this.swiper[i].active = false;
                    return;
                }
            }
            ;
        }
    };
    IntroductionComponent.prototype.nextImg = function () {
        for (var i = 0; this.swiper.length >= i; i++) {
            if (this.swiper[i].active) {
                if (this.swiper[i + 1]) {
                    this.swiper[i + 1].active = true;
                    this.swiper[i].active = false;
                    return;
                }
                else if (!this.swiper[i + 1]) {
                    this.swiper[0].active = true;
                    this.swiper[i].active = false;
                    return;
                }
            }
            ;
        }
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./app/components/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./app/components/introduction/introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_swiper_service__WEBPACK_IMPORTED_MODULE_1__["SwiperService"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./app/components/leed-panel/leed-panel.component.html":
/*!*************************************************************!*\
  !*** ./app/components/leed-panel/leed-panel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leed-panel\">\n  <h3 class=\"leed-panel-title\">{{ title }}</h3>\n\n  <h6 class=\"leed-panel-message\">{{ message }}</h6>\n\n  <div class=\"leed-panel-submit\">\n    <form class=\"submit-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <!-- TODO: ajustar posicionamento dos elementos -->\n      <div class=\"submit-form-name\">\n        <!-- TODO: Ajustar para a label sair no focus do input e quando tiver conteudo -->\n        <label for=\"name\">Nome</label>\n        <!-- TODO: ajustar estilo da fonte interna do input -->\n        <!-- TODO: corrir border-bottom -->\n        <input type=\"text\" formControlName=\"name\" [ngClass]=\"invalidField('name')\">\n        <span class=\"error-message\" [ngClass]=\"invalidField('name')\">Campo obrigatório</span>\n      </div>\n\n      <div class=\"submit-form-email\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"text\" formControlName=\"email\" [ngClass]=\"invalidField('email')\">\n        <span class=\"error-message\" [ngClass]=\"invalidField('email')\">Email invalido</span>\n      </div>\n\n      <div class=\"submit-form-phone\">\n        <label for=\"phone\">Phone</label>\n        <input id=\"phone\" type=\"text\" formControlName=\"phone\" mask=\"(00) 00009-0000\" [ngClass]=\"invalidField('phone')\">\n        <span class=\"error-message\" [ngClass]=\"invalidField('phone')\">Campo obrigatório</span>\n      </div>\n\n      <div class=\"submit-form-button\">\n        <!-- TODO: criar evento de submit -->\n        <button type=\"submit\">submit</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./app/components/leed-panel/leed-panel.component.scss":
/*!*************************************************************!*\
  !*** ./app/components/leed-panel/leed-panel.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.leed-panel {\n  padding: 0 15px; }\n.leed-panel .leed-panel-title {\n    font-size: 24px;\n    line-height: 1.4;\n    color: #000;\n    font-weight: 700;\n    font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n    text-transform: uppercase;\n    letter-spacing: -.02em; }\n.leed-panel .leed-panel-message {\n    color: #c4956a;\n    font-size: 15px;\n    line-height: 1.46667;\n    margin-top: 12px; }\n.leed-panel .leed-panel-submit {\n    padding: 20px;\n    background: #282828;\n    border-radius: 7px; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-name label, .leed-panel .leed-panel-submit .submit-form .submit-form-email label, .leed-panel .leed-panel-submit .submit-form .submit-form-phone label {\n      color: #FFF;\n      font-size: 15px;\n      font-weight: 500;\n      line-height: 24px;\n      letter-spacing: -.02em;\n      pointer-events: none;\n      position: relative;\n      top: 40px; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-name input, .leed-panel .leed-panel-submit .submit-form .submit-form-email input, .leed-panel .leed-panel-submit .submit-form .submit-form-phone input {\n      width: 100%;\n      padding: 9px 0;\n      font-size: 15px;\n      font-weight: 500;\n      line-height: 24px;\n      letter-spacing: -.02em;\n      border: 0 solid rgba(0, 0, 0, 0.1);\n      border-bottom-width: 1px;\n      background-color: transparent; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-name input:focus ˜ input, .leed-panel .leed-panel-submit .submit-form .submit-form-email input:focus ˜ input, .leed-panel .leed-panel-submit .submit-form .submit-form-phone input:focus ˜ input {\n        visibility: hidden; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-name input.invalid, .leed-panel .leed-panel-submit .submit-form .submit-form-email input.invalid, .leed-panel .leed-panel-submit .submit-form .submit-form-phone input.invalid {\n        border-color: #f5543f; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-name .error-message, .leed-panel .leed-panel-submit .submit-form .submit-form-email .error-message, .leed-panel .leed-panel-submit .submit-form .submit-form-phone .error-message {\n      z-index: 11;\n      margin-top: 2px;\n      font-size: 9px;\n      font-weight: 400;\n      line-height: 12px;\n      letter-spacing: 0;\n      color: #f5543f;\n      transition: .3s;\n      text-align: end;\n      visibility: hidden;\n      display: block; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-name .error-message.invalid, .leed-panel .leed-panel-submit .submit-form .submit-form-email .error-message.invalid, .leed-panel .leed-panel-submit .submit-form .submit-form-phone .error-message.invalid {\n        visibility: visible; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-button {\n      width: 100%;\n      margin-top: 30px; }\n.leed-panel .leed-panel-submit .submit-form .submit-form-button button {\n        color: #FFF;\n        background-color: #c4956a;\n        border-color: #c4956a;\n        border: none;\n        padding: 10px 30px;\n        font-size: 12px;\n        line-height: 1.5;\n        font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n        font-weight: 700;\n        letter-spacing: -.02em;\n        text-transform: uppercase;\n        cursor: pointer; }\n"

/***/ }),

/***/ "./app/components/leed-panel/leed-panel.component.ts":
/*!***********************************************************!*\
  !*** ./app/components/leed-panel/leed-panel.component.ts ***!
  \***********************************************************/
/*! exports provided: LeedPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeedPanelComponent", function() { return LeedPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeedPanelComponent = /** @class */ (function () {
    function LeedPanelComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submittedForm = false;
    }
    LeedPanelComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LeedPanelComponent.prototype.invalidField = function (field) {
        if (!this.form.get(field).valid && this.submittedForm)
            return 'invalid';
    };
    LeedPanelComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.form);
        this.submittedForm = true;
    };
    LeedPanelComponent.prototype.resetForm = function () {
        this.form.reset();
        this.submittedForm = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LeedPanelComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LeedPanelComponent.prototype, "title", void 0);
    LeedPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leed-panel',
            template: __webpack_require__(/*! ./leed-panel.component.html */ "./app/components/leed-panel/leed-panel.component.html"),
            styles: [__webpack_require__(/*! ./leed-panel.component.scss */ "./app/components/leed-panel/leed-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LeedPanelComponent);
    return LeedPanelComponent;
}());



/***/ }),

/***/ "./app/components/main-footer/main-footer.component.html":
/*!***************************************************************!*\
  !*** ./app/components/main-footer/main-footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"footer-container\">\n    <ul class=\"footer-list\">\n      <li>\n        <span>(41) 98418-6477</span>\n      </li>\n\n      <li>\n        <span>anapaula.bortolli@gmail.com</span>\n      </li>\n    </ul>\n\n    <p class=\"footer-address\">Rua Conselheiro Araújo 434, Sala 74, Centro - Curitiba</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./app/components/main-footer/main-footer.component.scss":
/*!***************************************************************!*\
  !*** ./app/components/main-footer/main-footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-footer {\n  padding: 50px 0;\n  background-color: #282828; }\n  .main-footer .footer-container {\n    padding: 0 15px;\n    font-weight: 400;\n    letter-spacing: -0.02em;\n    text-align: center; }\n  .main-footer .footer-container .footer-list {\n      margin-top: 30px;\n      color: #FFF;\n      font-size: 18px;\n      line-height: 1.4; }\n  .main-footer .footer-container .footer-address {\n      margin-top: 40px;\n      color: rgba(255, 255, 255, 0.7);\n      font-size: 13px;\n      line-height: 1.6; }\n"

/***/ }),

/***/ "./app/components/main-footer/main-footer.component.ts":
/*!*************************************************************!*\
  !*** ./app/components/main-footer/main-footer.component.ts ***!
  \*************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-footer',
            template: __webpack_require__(/*! ./main-footer.component.html */ "./app/components/main-footer/main-footer.component.html"),
            styles: [__webpack_require__(/*! ./main-footer.component.scss */ "./app/components/main-footer/main-footer.component.scss")]
        })
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./app/components/main-header/main-header.component.html":
/*!***************************************************************!*\
  !*** ./app/components/main-header/main-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: remover bordar no bottom -->\n<header class=\"main-header\">\n  <h1>DOIS B</h1>\n</header>\n"

/***/ }),

/***/ "./app/components/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./app/components/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-header {\n  background-color: #232323;\n  width: 100%;\n  height: 48px; }\n  .main-header h1 {\n    color: #FFF;\n    font-size: 30px; }\n"

/***/ }),

/***/ "./app/components/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./app/components/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    MainHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__(/*! ./main-header.component.html */ "./app/components/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./app/components/main-header/main-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./app/components/panel/panel.component.html":
/*!***************************************************!*\
  !*** ./app/components/panel/panel.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n  <h3 class=\"panel-title\">{{ title }}</h3>\n  <p class=\"panel-text\" *ngFor=\"let item of text\">{{ item }}</p>\n</div>"

/***/ }),

/***/ "./app/components/panel/panel.component.scss":
/*!***************************************************!*\
  !*** ./app/components/panel/panel.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel .panel-title {\n  color: #c4956a;\n  font-size: 24px;\n  text-transform: uppercase; }\n\n.panel .panel-text {\n  text-align: center;\n  font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n  font-size: 13px;\n  line-height: 1.6;\n  font-weight: 400;\n  letter-spacing: -.02em;\n  color: rgba(255, 255, 255, 0.5);\n  -webkit-text-size-adjust: none;\n  -webkit-font-smoothing: subpixel-antialiased;\n  text-align: left; }\n"

/***/ }),

/***/ "./app/components/panel/panel.component.ts":
/*!*************************************************!*\
  !*** ./app/components/panel/panel.component.ts ***!
  \*************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "title", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./app/components/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./app/components/panel/panel.component.scss")]
        })
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./app/components/projects/projects.component.html":
/*!*********************************************************!*\
  !*** ./app/components/projects/projects.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"projects\">\n  <div class=\"projects-container\">\n    <div class=\"projects-header\">\n      <h1>pro<span>jects</span></h1>\n      <p>Below you can take a look at our featured and recent projects that have been numerously awarded for our unique architectural approach.</p>\n    </div>\n\n    <div class=\"projects-line\"></div>\n\n    <div class=\"projects-swiper\">\n      <app-swiper\n        [swiper]=\"swiper\"\n      ></app-swiper>\n    </div>\n\n    <div class=\"projects-dots\">\n      <div *ngFor=\"let item of swiper; let i = index\" [class.active]=\"item.active\" class=\"projects-dots-point\" (click)=\"chooseSwiper(i)\"></div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./app/components/projects/projects.component.scss":
/*!*********************************************************!*\
  !*** ./app/components/projects/projects.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects {\n  background-color: #F5F5F5;\n  padding: 50px 0;\n  text-align: center; }\n  .projects .projects-container {\n    padding: 0 15px; }\n  .projects .projects-container .projects-header {\n      padding-bottom: 24px;\n      text-transform: uppercase; }\n  .projects .projects-container .projects-header h1 {\n        font-size: 32px; }\n  .projects .projects-container .projects-header h1 span {\n          font-weight: 300; }\n  .projects .projects-container .projects-header p {\n        font-size: 13px;\n        line-height: 1.6;\n        font-weight: 400;\n        letter-spacing: -.02em;\n        color: rgba(0, 0, 0, 0.7); }\n  .projects .projects-container .projects-line {\n      width: 100%;\n      border-top: 4px solid #c4956a; }\n  .projects .projects-container .projects-swiper {\n      padding: 30px 0; }\n  .projects .projects-container .projects-dots {\n      display: -webkit-inline-box; }\n  .projects .projects-container .projects-dots .projects-dots-point {\n        border: 6px solid rgba(0, 0, 0, 0.2);\n        border-radius: 50%;\n        width: 1px;\n        margin: 0 10px;\n        cursor: pointer; }\n  .projects .projects-container .projects-dots .projects-dots-point.active {\n          border-color: #c4956a; }\n"

/***/ }),

/***/ "./app/components/projects/projects.component.ts":
/*!*******************************************************!*\
  !*** ./app/components/projects/projects.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_swiper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/swiper.service */ "./app/services/swiper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(swiperService) {
        this.swiperService = swiperService;
        this.swiper = [
            {
                active: true,
                img: 'img_01',
                swiperData: {
                    date: 'march 15, 2018',
                    text: 'We have worked on this project for three months to completely extend and redesign the old 2-storey house.',
                    title: '3119 MULBERRY LN, NEWCASTLE, OK',
                    type: 'ARCHITECTURE'
                }
            }, {
                active: false,
                img: 'img_02',
                swiperData: {
                    date: 'JUNE 19, 2018',
                    text: 'Our team of exterior designers and architects integrated the latest innovations in this residential project.',
                    title: '4367 LIBERTY ST, IRVING, TX',
                    type: 'EXTERIOR DESIGN'
                }
            }, {
                active: false,
                img: 'img_03',
                swiperData: {
                    date: 'march 15, 2018',
                    text: 'We have worked on this project for three months to completely extend and redesign the old 2-storey house.',
                    title: '3119 MULBERRY LN, NEWCASTLE, OK',
                    type: 'ARCHITECTURE'
                }
            }
        ];
        this.swiper = this.swiperService.chooseImgage(this.swiper);
    }
    ProjectsComponent.prototype.chooseSwiper = function (index) {
        this.swiper.forEach(function (data) { data.active = false; });
        this.swiper[index].active = true;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./app/components/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_swiper_service__WEBPACK_IMPORTED_MODULE_1__["SwiperService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./app/components/steps/steps.component.html":
/*!***************************************************!*\
  !*** ./app/components/steps/steps.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: animacao -->\n<!-- TODO: linha de fundo -->\n<section class=\"steps\">\n  <div class=\"steps-container\">\n    <h6 class=\"steps-subtitle\">4 steps to a new home</h6>\n  \n    <h1 class=\"steps-title\">\n      How we Do <span>It</span>\n    </h1>\n  \n    <div [ngSwitch]=\"switchValues\">\n      <div *ngSwitchCase=\"0\">\n        <app-panel\n          [text]=\"json.costumer.text\"\n          [title]=\"json.costumer.title\"\n        ></app-panel>\n      </div>\n  \n      <div *ngSwitchCase=\"1\">\n        <app-panel\n          [text]=\"json.development.text\"\n          [title]=\"json.development.title\"\n        ></app-panel>\n      </div>\n  \n      <div *ngSwitchCase=\"2\">\n        <app-panel\n          [text]=\"json.working.text\"\n          [title]=\"json.working.title\"\n        ></app-panel>\n      </div>\n  \n      <div *ngSwitchCase=\"3\">\n        <app-panel\n          [text]=\"json.finishing.text\"\n          [title]=\"json.finishing.title\"\n        ></app-panel>\n      </div>\n    </div>\n  \n    <ul class=\"steps-list\">\n      <li *ngFor=\"let option of options; let i = index\" [class.active]=\"i === switchValues\">\n        <a class=\"steps-menu-list\" (click)=\"switchValues = i\">{{ option }}</a>\n      </li>\n    </ul>\n  \n    <div [ngSwitch]=\"switchValues\" class=\"steps-images\">\n      <div *ngSwitchCase=\"0\">\n        <img *ngIf=\"screen === 'desktop'\" src=\"../../assets/images/img_01.webp\">\n        <img *ngIf=\"screen === 'mobile' || screen === 'tablet'\" src=\"../../assets/images/img_01.jpg\">\n      </div>\n  \n      <div *ngSwitchCase=\"1\">\n        <img *ngIf=\"screen === 'desktop'\" src=\"../../assets/images/img_02.webp\">\n        <img *ngIf=\"screen === 'mobile' || screen === 'tablet'\" src=\"../../assets/images/img_02.jpg\">\n      </div>\n  \n      <div *ngSwitchCase=\"2\">\n        <img *ngIf=\"screen === 'desktop'\" src=\"../../assets/images/img_03.webp\">\n        <img *ngIf=\"screen === 'mobile' || screen === 'tablet'\" src=\"../../assets/images/img_03.jpg\">\n      </div>\n  \n      <div *ngSwitchCase=\"3\">\n        <img *ngIf=\"screen === 'desktop'\" src=\"../../assets/images/img_01.webp\">\n        <img *ngIf=\"screen === 'mobile' || screen === 'tablet'\" src=\"../../assets/images/img_01.jpg\">\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./app/components/steps/steps.component.scss":
/*!***************************************************!*\
  !*** ./app/components/steps/steps.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps {\n  background-color: #282828;\n  padding: 50px 0; }\n  .steps .steps-container {\n    padding: 0 15px; }\n  .steps .steps-container .steps-subtitle {\n      color: #c4956a;\n      margin-top: 0;\n      margin-bottom: 0;\n      font-weight: 700;\n      font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n      text-transform: uppercase;\n      letter-spacing: -.02em;\n      font-size: 15px; }\n  .steps .steps-container .steps-title {\n      color: #FFF;\n      margin-bottom: 0;\n      font-weight: 700;\n      font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n      text-transform: uppercase;\n      letter-spacing: -.02em;\n      font-size: 32px;\n      line-height: 1.16667; }\n  .steps .steps-container .steps-list {\n      list-style: none;\n      padding: 0;\n      color: rgba(255, 255, 255, 0.3);\n      counter-reset: li; }\n  .steps .steps-container .steps-list li.active {\n        color: #FFF; }\n  .steps .steps-container .steps-list li.active .steps-menu-list:before {\n          color: #c4956a; }\n  .steps .steps-container .steps-list .steps-menu-list {\n        text-indent: -32px;\n        line-height: 1.46667;\n        font-weight: 700;\n        text-transform: uppercase;\n        font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif; }\n  .steps .steps-container .steps-list .steps-menu-list:before {\n          text-align: center;\n          content: counter(li, decimal-leading-zero);\n          counter-increment: li;\n          display: inline-block;\n          width: 20px;\n          margin-right: 12px;\n          text-indent: 0;\n          transition: inherit; }\n  .steps .steps-container .steps-images {\n      margin-top: 30px; }\n  .steps .steps-container .steps-images div {\n        width: 100%; }\n  .steps .steps-container .steps-images div img {\n          max-width: 100%;\n          border-radius: 4px; }\n"

/***/ }),

/***/ "./app/components/steps/steps.component.ts":
/*!*************************************************!*\
  !*** ./app/components/steps/steps.component.ts ***!
  \*************************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/screen.service */ "./app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepsComponent = /** @class */ (function () {
    function StepsComponent(screenService) {
        this.screenService = screenService;
        this.json = {
            "costumer": {
                "text": [
                    "When the project gets to its final stage, our quality control team conducts the final check of the building to make sure everything has been carried out the proper way.",
                    "Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. After everything is completed, we invite our client to assess the final result and experience the quality performance of our project."
                ],
                "title": "completing a project"
            },
            "development": {
                "text": [
                    "The next step of our cooperation lies in developing the concept of your future home. It helps us define every single factor that makes the construction process of your home successful.",
                    "Our team of designers and architects has to plan every single step of the project to make sure that the final result will meet not only your requirements but also international construction and safety standards. This is when monitoring & control begin."
                ],
                "title": "working on the concept"
            },
            "finishing": {
                "text": [
                    "When the project gets to its final stage, our quality control team conducts the final check of the building to make sure everything has been carried out the proper way.",
                    "Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. After everything is completed, we invite our client to assess the final result and experience the quality performance of our project."
                ],
                "title": "completing a project"
            },
            "working": {
                "text": [
                    "There’s no doubt that the most important and responsible part of building a home is its construction process. As we work with reliable contractors, a great result is guaranteed.",
                    "This stage is one of the most complex ones as it includes a variety of tasks that must be controlled - from preparing the construction site to installing insulation and completing drywall as well as working on exterior."
                ],
                "title": "building your home"
            }
        };
        this.options = [
            'acquaintance with the customer',
            'project concept development',
            'working on interior and exterior',
            'finishing touches for your future home'
        ];
        this.switchValues = 0;
        this.screen = this.screenService.getDevice();
    }
    StepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-steps',
            template: __webpack_require__(/*! ./steps.component.html */ "./app/components/steps/steps.component.html"),
            styles: [__webpack_require__(/*! ./steps.component.scss */ "./app/components/steps/steps.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]])
    ], StepsComponent);
    return StepsComponent;
}());



/***/ }),

/***/ "./app/components/swiper-profile/swiper-profile.component.html":
/*!*********************************************************************!*\
  !*** ./app/components/swiper-profile/swiper-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"swiper-profile\" *ngFor=\"let item of swiper\">\n  <div class=\"swiper-card\" *ngIf=\"item.active\">\n    <div class=\"swiper-card\">{{ item.swiperData.text }}</div>\n  \n    <div class=\"swiper-user\">\n      <div class=\"swiper-left\">\n        <img src=\"{{ item.img }}\">\n      </div>\n  \n      <div class=\"swiper-right\">\n        <div class=\"swiper-name\">{{ item.swiperData.name }}</div>\n        <div class=\"swiper-office\">{{ item.swiperData.office }}</div>\n      </div>\n    </div>\n  </div>\n</article>\n\n<div class=\"swiper-dots\">\n  <div  *ngFor=\"let dot of swiper; let i = index\" class=\"swiper-dot\" [class.active]=\"dot.active\" (click)=\"changeSwiper(i)\"></div>\n</div>"

/***/ }),

/***/ "./app/components/swiper-profile/swiper-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./app/components/swiper-profile/swiper-profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-profile {\n  max-width: 100%; }\n  .swiper-profile .swiper-card .swiper-card {\n    font-size: 18px;\n    line-height: 1.4;\n    font-weight: 400;\n    text-transform: none;\n    letter-spacing: -0.02em;\n    color: #FFF;\n    text-align: center; }\n  .swiper-profile .swiper-card .swiper-user {\n    display: flex; }\n  .swiper-profile .swiper-card .swiper-user .swiper-left {\n      width: 50%; }\n  .swiper-profile .swiper-card .swiper-user .swiper-left img {\n        border-radius: 20px;\n        max-width: 100%; }\n  .swiper-profile .swiper-card .swiper-user .swiper-right {\n      font-size: 13px;\n      margin: auto 0 15px 25px; }\n  .swiper-profile .swiper-card .swiper-user .swiper-right .swiper-name {\n        color: #FFF;\n        font-weight: 700;\n        text-transform: uppercase; }\n  .swiper-profile .swiper-card .swiper-user .swiper-right .swiper-office {\n        color: #c4956a;\n        margin-top: 4px;\n        line-height: 1.6;\n        font-weight: 400;\n        letter-spacing: -0.02em; }\n  .swiper-dots {\n  display: flex;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n  .swiper-dots .swiper-dot {\n    border: 6px solid rgba(255, 255, 255, 0.2);\n    cursor: pointer;\n    border-radius: 50%;\n    width: 1px;\n    margin: 0 10px; }\n  .swiper-dots .swiper-dot.active {\n      border-color: #c4956a; }\n"

/***/ }),

/***/ "./app/components/swiper-profile/swiper-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./app/components/swiper-profile/swiper-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: SwiperProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperProfileComponent", function() { return SwiperProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwiperProfileComponent = /** @class */ (function () {
    function SwiperProfileComponent() {
    }
    SwiperProfileComponent.prototype.changeSwiper = function (index) {
        this.swiper.forEach(function (data) { data.active = false; });
        this.swiper[index].active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwiperProfileComponent.prototype, "swiper", void 0);
    SwiperProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-swiper-profile',
            template: __webpack_require__(/*! ./swiper-profile.component.html */ "./app/components/swiper-profile/swiper-profile.component.html"),
            styles: [__webpack_require__(/*! ./swiper-profile.component.scss */ "./app/components/swiper-profile/swiper-profile.component.scss")]
        })
    ], SwiperProfileComponent);
    return SwiperProfileComponent;
}());



/***/ }),

/***/ "./app/components/swiper/swiper.component.html":
/*!*****************************************************!*\
  !*** ./app/components/swiper/swiper.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper\">\n  <div class=\"swiper-container\" *ngFor=\"let item of swiper\">\n    <div class=\"swiper-figure\">\n      <img src=\"{{ item.img }}\"  *ngIf=\"item.active\" class=\"swiper-image\">\n    </div>\n\n    <div *ngIf=\"item?.swiperData && item.active\" class=\"swiper-swiperData\">\n      <ul class=\"swiper-list\">\n        <li>\n          <span>{{ item.swiperData.date }}</span>\n        </li>\n        <li>\n          <span>{{ item.swiperData.type }}</span>\n        </li>\n      </ul>\n  \n      <h3 class=\"swiper-title\">{{ item.swiperData.title }}</h3>\n  \n      <p class=\"swiper-text\">{{ item.swiperData.text }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/swiper/swiper.component.scss":
/*!*****************************************************!*\
  !*** ./app/components/swiper/swiper.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper {\n  display: flex; }\n  .swiper .swiper-image {\n    max-width: 100%;\n    display: -ms-grid;\n    display: grid; }\n  .swiper .swiper-swiperData {\n    background-color: #282828;\n    padding: 15px 20px; }\n  .swiper .swiper-swiperData .swiper-list {\n      font-size: 13px;\n      line-height: 1.6;\n      font-weight: 400;\n      letter-spacing: -.02em;\n      color: #FFF;\n      display: flex;\n      text-transform: uppercase; }\n  .swiper .swiper-swiperData .swiper-list li {\n        padding: 0 17px; }\n  .swiper .swiper-swiperData .swiper-list li:last-of-type::before {\n          position: relative;\n          content: '';\n          left: -15px;\n          height: 100%;\n          border-left: 1px solid rgba(255, 255, 255, 0.2); }\n  .swiper .swiper-swiperData .swiper-title {\n      color: #c4956a;\n      margin-top: 10px;\n      font-size: 24px; }\n  .swiper .swiper-swiperData .swiper-text {\n      margin-top: 10px;\n      color: rgba(255, 255, 255, 0.5);\n      font-size: 13px; }\n"

/***/ }),

/***/ "./app/components/swiper/swiper.component.ts":
/*!***************************************************!*\
  !*** ./app/components/swiper/swiper.component.ts ***!
  \***************************************************/
/*! exports provided: SwiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// TODO: falta fazer trocar a imagem a cada 3s
var SwiperComponent = /** @class */ (function () {
    function SwiperComponent() {
    }
    SwiperComponent.prototype.nextImg = function () {
        for (var i = 0; this.swiper.length >= i; i++) {
            if (this.swiper[i].active) {
                if (this.swiper[i + 1]) {
                    this.swiper[i + 1].active = true;
                    this.swiper[i].active = false;
                    return;
                }
                else if (!this.swiper[i + 1]) {
                    this.swiper[0].active = true;
                    this.swiper[i].active = false;
                    return;
                }
            }
            ;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwiperComponent.prototype, "swiper", void 0);
    SwiperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-swiper',
            template: __webpack_require__(/*! ./swiper.component.html */ "./app/components/swiper/swiper.component.html"),
            styles: [__webpack_require__(/*! ./swiper.component.scss */ "./app/components/swiper/swiper.component.scss")]
        })
    ], SwiperComponent);
    return SwiperComponent;
}());



/***/ }),

/***/ "./app/components/team/team.component.html":
/*!*************************************************!*\
  !*** ./app/components/team/team.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"team\">\n  <div class=\"team-container\">\n    <h3 class=\"team-title\">our team</h3>\n    <h6 class=\"team-subtitle\">people begind our success</h6>\n\n    <article class=\"team-article\">\n      <div class=\"team-figure\">\n        <img *ngIf=\"screen === 'desktop'\" class=\"team-figure\" src=\"../../../assets/images/ana.webp\">\n        <img *ngIf=\"screen === 'mobile' || screen === 'tablet'\" class=\"team-figure\" src=\"../../../assets/images/ana.jpg\">\n      </div>\n\n      <div class=\"team-body\">\n        <h5>Ana Paulo Bortolli</h5>\n      </div>\n\n      <div class=\"team-footer\">\n        <div class=\"team-status\">Lead Interior Designer</div>\n\n        <div class=\"team-name\">\n          <span>Ana Paula</span>\n        </div>\n      </div>\n    </article>\n  </div>\n</section>\n"

/***/ }),

/***/ "./app/components/team/team.component.scss":
/*!*************************************************!*\
  !*** ./app/components/team/team.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team {\n  padding: 50px 0;\n  background-color: #F5F5F5; }\n  .team .team-container {\n    padding: 0 15px; }\n  .team .team-container .team-title, .team .team-container .team-subtitle {\n      font-weight: 700;\n      font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n      text-transform: uppercase;\n      letter-spacing: -.02em;\n      margin: 0;\n      text-align: center; }\n  .team .team-container .team-title {\n      color: #000;\n      font-size: 24px; }\n  .team .team-container .team-subtitle {\n      color: #c4956a;\n      font-size: 15px;\n      margin-top: 12px; }\n  .team .team-container .team-article {\n      margin-top: 30px; }\n  .team .team-container .team-article .team-figure {\n        display: -ms-grid;\n        display: grid; }\n  .team .team-container .team-article .team-figure img {\n          max-width: 100%; }\n  .team .team-container .team-article .team-body {\n        background-color: #FFF;\n        padding: 6px 15px 4px; }\n  .team .team-container .team-article .team-body h5 {\n          margin: 0;\n          font-weight: 700;\n          font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n          text-transform: uppercase;\n          letter-spacing: -.02em;\n          color: #000;\n          font-size: 16px; }\n  .team .team-container .team-article .team-footer .team-status {\n        font-weight: 500;\n        color: #c4956a;\n        font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n        font-size: 13px;\n        line-height: 1.6;\n        letter-spacing: -.02em;\n        -webkit-font-smoothing: subpixel-antialiased; }\n  .team .team-container .team-article .team-footer .team-name {\n        font-weight: 700;\n        font-family: montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;\n        text-transform: uppercase;\n        letter-spacing: -.02em;\n        font-size: 32px;\n        line-height: 1;\n        color: rgba(40, 40, 40, 0.05); }\n  .team .team-container .team-article .team-footer .team-name span:after {\n          display: inline-block;\n          content: '';\n          height: 0;\n          width: 20%;\n          border-top: 1px solid #000;\n          position: relative;\n          top: -10px;\n          right: 57%; }\n"

/***/ }),

/***/ "./app/components/team/team.component.ts":
/*!***********************************************!*\
  !*** ./app/components/team/team.component.ts ***!
  \***********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/screen.service */ "./app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent(screenService) {
        this.screenService = screenService;
        this.screen = this.screenService.getDevice();
    }
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./app/components/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./app/services/screen.service.ts":
/*!****************************************!*\
  !*** ./app/services/screen.service.ts ***!
  \****************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ScreenService = /** @class */ (function () {
    function ScreenService() {
    }
    ScreenService.prototype.getDevice = function () {
        var size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (767 >= size) {
            return 'mobile';
        }
        else if (size >= 768 && 1023 >= size) {
            return 'tablet';
        }
        else {
            return 'desktop';
        }
    };
    ScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ScreenService);
    return ScreenService;
}());



/***/ }),

/***/ "./app/services/swiper.service.ts":
/*!****************************************!*\
  !*** ./app/services/swiper.service.ts ***!
  \****************************************/
/*! exports provided: SwiperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperService", function() { return SwiperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen.service */ "./app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwiperService = /** @class */ (function () {
    function SwiperService(screenService) {
        this.screenService = screenService;
    }
    SwiperService.prototype.chooseImgage = function (swiper) {
        var device = this.screenService.getDevice();
        swiper.forEach(function (data) {
            if (device === 'mobile' || device === 'tablet') {
                data.img = '../../../assets/images/' + data.img + '.jpg';
            }
            else {
                data.img = '../../../assets/images/' + data.img + '.webp';
            }
        });
        return swiper;
    };
    SwiperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]])
    ], SwiperService);
    return SwiperService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Rodrigo/Workspace/doisB/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map