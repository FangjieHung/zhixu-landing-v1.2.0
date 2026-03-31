"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ 20112:
/*!************************************************!*\
  !*** ./apps/web/src/app/app-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_layout */ 382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages



const routes = [{
  path: '',
  children: [{
    path: '',
    component: _modules_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultContainerComponent,
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "apps_web_src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 33419)).then(m => m.HomeModule)
    }, {
      path: 'about',
      loadChildren: () => __webpack_require__.e(/*! import() */ "apps_web_src_app_modules_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about/about.module */ 29659)).then(m => m.AboutModule)
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }]
  }]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
        initialNavigation: 'enabledBlocking',
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        onSameUrlNavigation: 'reload'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 84846:
/*!*******************************************!*\
  !*** ./apps/web/src/app/app.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 16567);



class AppComponent {
  constructor() {
    //
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 1,
      consts: [["bdColor", "rgba(0, 0, 0, 0.6)", 3, "fullScreen"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "ngx-spinner", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 23489:
/*!****************************************!*\
  !*** ./apps/web/src/app/app.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   playerFact: () => (/* binding */ playerFact)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 74150);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 84846);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 20112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 77209);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 50706);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ 27453);
/* harmony import */ var _core_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/+states */ 871);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/shared */ 76777);









// Third party packages

// Custom packages




function playerFact() {
  return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 54007, 23));
}
const THIRD_MODULES = [ngx_lottie__WEBPACK_IMPORTED_MODULE_5__.LottieModule.forRoot({
  player: playerFact
})];
const CUSTOM_MODULES = [_core_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _core_states__WEBPACK_IMPORTED_MODULE_3__.StatesModule];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [_core_shared__WEBPACK_IMPORTED_MODULE_4__.AppEnvHelper.getValueProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment), {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _core_shared__WEBPACK_IMPORTED_MODULE_4__.HttpRequestInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _core_shared__WEBPACK_IMPORTED_MODULE_4__.HttpResponseInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _core_shared__WEBPACK_IMPORTED_MODULE_4__.JWTAuthInterceptor,
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID,
        useValue: 'zh-Hant'
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, THIRD_MODULES, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_5__.LottieModule, _core_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _core_states__WEBPACK_IMPORTED_MODULE_3__.StatesModule]
  });
})();

/***/ }),

/***/ 382:
/*!***************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent),
/* harmony export */   LayoutModule: () => (/* reexport safe */ _layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule)
/* harmony export */ });
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.module */ 82306);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 18737);



/***/ }),

/***/ 82306:
/*!***********************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/layout.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 43889);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 18737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);


// Custom packages



const CUSTOM_MODULES = [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule];
const CUSTOM_COMPONENTS = [_pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent, _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent];
class LayoutModule {
  static {
    this.ɵfac = function LayoutModule_Factory(t) {
      return new (t || LayoutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, CUSTOM_MODULES]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_pages__WEBPACK_IMPORTED_MODULE_1__.DefaultContainerComponent, _pages__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 21579:
/*!*************************************************************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/default-container/default-container.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* binding */ DefaultContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _shared_services_logo_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/logo-state.service */ 51303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 54591);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 85409);
/* harmony import */ var _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ 72203);
/* eslint-disable @typescript-eslint/no-explicit-any */





// Custom packages












const _c0 = ["snav"];
function DefaultContainerComponent_ng_container_8_div_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_ng_container_8_div_1_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.closeNavbarMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r14.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r14.label, " ");
  }
}
function DefaultContainerComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_ng_container_8_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.toggleNavbarMenu(menu_r9.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 31)(4, "web-glass-bg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DefaultContainerComponent_ng_container_8_div_1_a_5_Template, 2, 2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r10.activeMenu === menu_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menu_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r10.activeMenu === menu_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", menu_r9.children);
  }
}
function DefaultContainerComponent_ng_container_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menu_r9.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", menu_r9.label, " ");
  }
}
function DefaultContainerComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DefaultContainerComponent_ng_container_8_div_1_Template, 6, 6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DefaultContainerComponent_ng_container_8_ng_template_2_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menu_r9.children)("ngIfElse", _r11);
  }
}
function DefaultContainerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u8A3B\u518A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u767B\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DefaultContainerComponent_div_12_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_div_12_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r23.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r23.label, " ");
  }
}
function DefaultContainerComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37)(1, "div", 29)(2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_div_12_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.toggleSingleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_div_12_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.closeNavbarMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "web-glass-bg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DefaultContainerComponent_div_12_a_7_Template, 2, 2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_div_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.appAuthApiServ.signout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u767B\u51FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.isMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((ctx_r2.currUserInfo == null ? null : ctx_r2.currUserInfo.name) || "-").charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r2.isMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.accountMenu);
  }
}
function DefaultContainerComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DefaultContainerComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "menu_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DefaultContainerComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_a_22_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u6703\u54E1\u767B\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DefaultContainerComponent_div_23_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_div_23_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r33.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r33.label, " ");
  }
}
function DefaultContainerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DefaultContainerComponent_div_23_a_1_Template, 2, 2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_div_23_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      ctx_r36.appAuthApiServ.signout();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " \u767B\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.accountMenu);
  }
}
function DefaultContainerComponent_a_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_a_25_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menu_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menu_r38.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", menu_r38.label, " ");
  }
}
class DefaultContainerComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_1__.BBDBaseComponent {
  constructor(logoStateService, injector) {
    super(injector);
    this.logoStateService = logoStateService;
    this.injector = injector;
    this.currentUrl = '';
    this.activeMenu = null;
    this.isMenuOpen = false;
    this._appStoreApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_3__.AppStoreApiServ);
    this._route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this._seoServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_3__.SEOServ);
    this.response = null;
    this.navList = [{
      label: '關於本會',
      children: [{
        label: '組織章程',
        link: '/about/charter'
      }, {
        label: '理監事名單',
        link: '/about/supervisor'
      }, {
        label: '委員會組織',
        link: '/about/committee'
      }]
    }, {
      label: '最新消息',
      link: '/news/list'
    }, {
      label: '學術活動',
      link: '/campaign/list'
    }];
    this.accountMenu = [
    // { label: '我的課程', link: '/' },
    {
      label: '個人資料',
      link: '/account/profile'
    }, {
      label: '重設密碼',
      link: '/account/password'
    }];
    this.isLogoLarge$ = this.logoStateService.isLargeLogo$;
  }
  ngOnInit() {
    this.doDataInit();
    if (this.appAuthApiServ.hasAccessToken) {
      this.storeServ.getCurrAuthUserCache();
    }
    this._seoServ.updateMetaTags();
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe(() => {
      const currRoute = this.getDeepestChildRoute(this._route);
      const seoData = currRoute.snapshot.data;
      if (seoData) {
        this._seoServ.updateMetaTags(seoData['title'], seoData['url'], seoData['image'], seoData['description']);
      } else {
        this._seoServ.updateMetaTags();
      }
    });
  }
  getDeepestChildRoute(route) {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }
  doDataInit() {
    this._appStoreApiServ.getAppObjectStoreValueByCode(_core_models__WEBPACK_IMPORTED_MODULE_2__.AppObjectStoreCodes.學會聯絡方式設定檔).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.response = res;
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    });
  }
  onDocumentClick(event) {
    const target = event.target;
    const clickedInsideMenu = target.closest('.menu-wrap');
    if (!clickedInsideMenu) {
      this.activeMenu = null;
    }
  }
  toggleSideMenu() {
    this.snav.toggle();
  }
  toggleNavbarMenu(label) {
    this.activeMenu = this.activeMenu === label ? null : label;
  }
  closeNavbarMenu() {
    this.activeMenu = null;
  }
  toggleSingleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  static {
    this.ɵfac = function DefaultContainerComponent_Factory(t) {
      return new (t || DefaultContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_logo_state_service__WEBPACK_IMPORTED_MODULE_0__.LogoStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DefaultContainerComponent,
      selectors: [["web-default-container"]],
      viewQuery: function DefaultContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.snav = _t.first);
        }
      },
      hostBindings: function DefaultContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 33,
      vars: 12,
      consts: [[1, "nav-bar"], ["id", "logoImg"], ["routerLink", "/"], ["src", "assets/shared/img/logo/mark.png", "alt", "logo"], [1, "ml-auto", "mt-3", "flex", "items-center", "space-x-4"], [1, "container-hover", "hidden", "lg:block"], [1, "flex", "items-center"], [4, "ngFor", "ngForOf"], [1, "container-hover"], [1, "flex", "items-center", "px-1"], ["class", "items-center hidden lg:flex", 4, "ngIf"], ["class", "hidden items-center lg:flex", 4, "ngIf"], [1, "lg:hidden"], [1, "h-10", "w-11", 3, "click"], ["class", "material-symbols-rounded", 4, "ngIf"], ["hasBackdrop", "false"], ["mode", "over", "position", "end", 1, "sidenav-container"], ["snav", ""], [1, "sidemenu-inner"], [1, "sidenav-list"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "floating-bg"], ["src", "/assets/image/illustration/sphere-001.webp", "alt", "", 1, "sphere-01"], ["src", "/assets/image/illustration/sphere-002.webp", "alt", "", 1, "sphere-02"], [1, "main-container"], ["class", "menu-wrap", 4, "ngIf", "ngIfElse"], ["singleLink", ""], [1, "menu-wrap"], ["mat-button", "", 1, "nav-link", 3, "click"], [1, "menu-list"], [3, "routerLink", "click"], ["mat-button", "", 1, "nav-link", 3, "routerLink"], [1, "items-center", "hidden", "lg:flex"], ["mat-button", "", "routerLink", "/auth/signup", 1, "nav-link"], ["mat-button", "", "routerLink", "/auth/signin", 1, "nav-link"], [1, "hidden", "items-center", "lg:flex"], [1, "avatar-btn", "nav-links", 3, "click"], [1, "user"], [1, "menu-list", 3, "click"], [3, "click"], [1, "material-symbols-rounded", "pr-2"], [1, "material-symbols-rounded"], ["routerLink", "/auth/signin"]],
      template: function DefaultContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "web-glass-bg", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DefaultContainerComponent_ng_container_8_Template, 4, 2, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "web-glass-bg", 8)(10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DefaultContainerComponent_div_11_Template, 7, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DefaultContainerComponent_div_12_Template, 12, 6, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DefaultContainerComponent_Template_button_click_14_listener() {
            return ctx.toggleSideMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DefaultContainerComponent_span_15_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, DefaultContainerComponent_span_16_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-sidenav-container", 15)(18, "mat-sidenav", 16, 17)(20, "div", 18)(21, "mat-nav-list", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, DefaultContainerComponent_a_22_Template, 3, 0, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DefaultContainerComponent_div_23_Template, 5, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-nav-list", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, DefaultContainerComponent_a_25_Template, 2, 2, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-sidenav-content")(27, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "img", 24)(29, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "web-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("img-scaleLarge", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 10, ctx.isLogoLarge$));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.navList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isSignin);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSignin);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(_r5 == null ? null : _r5.opened));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r5 == null ? null : _r5.opened);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isSignin);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSignin);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.navList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatNavList, _shared_components_glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_4__.GlassBgComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.nav-link[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.avatar-btn[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  cursor: pointer;\n  align-items: center;\n}\n.avatar-btn[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  height: 2.25rem;\n  width: 2.25rem;\n  min-width: 2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(186 230 253 / var(--tw-bg-opacity, 1));\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(2 132 199 / var(--tw-text-opacity, 1));\n  font-size: 0.875rem;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 8rem;\n  padding-bottom: 1.25rem;\n}\n@media screen and (min-width: 1024px) {\n  .main-container[_ngcontent-%COMP%] {\n    min-height: calc(100svh - 20.8rem);\n  }\n}\n.main-container[_ngcontent-%COMP%]:has(.hero) {\n  padding-top: 0px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n  min-width: 15rem;\n}\n\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.menu-button[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.menu-button[_ngcontent-%COMP%]   .material-symbols-rounded.hide[_ngcontent-%COMP%] {\n  width: 0px;\n  opacity: 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-sidenav-container[_ngcontent-%COMP%]:has(.mat-drawer-opened) {\n  height: 100svh;\n  overflow: auto;\n}\n\n.sidemenu-inner[_ngcontent-%COMP%] {\n  margin-top: 8rem;\n}\n\n.sidemenu-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n  border-color: rgb(0 0 0 / 0.3);\n}\n\n@media (min-width: 321px) {\n\n  .sidemenu-inner[_ngcontent-%COMP%] {\n    margin-top: 10rem;\n  }\n}\n.sidemenu-inner[_ngcontent-%COMP%]   .btn-stroke-white[_ngcontent-%COMP%] {\n  margin-right: auto;\n  width: 100%;\n  max-width: 24rem;\n}\n\n.menu-button[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.menu-button[_ngcontent-%COMP%]   .material-symbols-rounded.hide[_ngcontent-%COMP%] {\n  width: 0px;\n  opacity: 0;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgb(240 249 255 / 0.3);\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  --tw-backdrop-blur: blur(24px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.social-icon-wrap[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.social-icon-wrap[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n@media (min-width: 768px) {\n\n  .social-icon-wrap[_ngcontent-%COMP%] {\n    max-width: 24rem;\n  }\n}\n.social-icon-wrap[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  border-top-width: 1px;\n  border-color: rgb(255 255 255 / 0.5);\n}\n.social-icon-wrap[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  height: 2.75rem;\n  width: 2.75rem;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.sidenav-list[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.sidenav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidenav-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem;\n}\n\n.web-map[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n\n.web-map[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9fbGF5b3V0L3BhZ2VzL2RlZmF1bHQtY29udGFpbmVyL2RlZmF1bHQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQUEsZUFBQTtFQUFBLFdBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHVCQUFBO0VBQUEsOEJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsYUFBQTtFQUFBLG1CQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBO0FBR0k7RUFBQTtBQUFBOztBQUtKO0VBQUEsYUFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFBQSxlQUFBO0VBQUE7QUFBQTtBQUdJO0VBQUEsYUFBQTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxxQkFBQTtFQUFBLGtCQUFBO0VBQUEsNERBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsaURBQUE7RUFDQTtBQURBOztBQU1KO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7QUFFQTtFQUhKO0lBSVEsa0NBQUE7RUFBTjtBQUNGO0FBR1E7RUFBQTtBQUFBOztBQUtKO0VBQUEsa0JBQUE7RUFBQSw0REFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxzQkFBQTtFQUFBLDhCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGFBQUE7RUFBQSxVQUFBO0VBQ0E7QUFEQTtBQUlJO0VBQUEsVUFBQTtFQUFBO0FBQUE7O0FBS0o7RUFBQTtBQUFBO0FBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9JO0VBQUE7QUFBQTs7QUFBQTtFQUFBLHdCQUFBO0VBQUEsa0VBQUE7RUFBQSwyREFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7QUFHSTtFQUFBLGtCQUFBO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBS0o7RUFBQSxhQUFBO0VBQUEsVUFBQTtFQUNBO0FBREE7QUFJSTtFQUFBLFVBQUE7RUFBQTtBQUFBOztBQUtKO0VBQUEsV0FBQTtFQUFBLHdDQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQSw4QkFBQTtFQUFBLCtRQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSx1QkFBQTtFQUFBLHNEQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUdJO0VBQUEsY0FBQTtFQUFBLHFCQUFBO0VBQUE7QUFBQTtBQUlBO0VBQUEsYUFBQTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUtKO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBSUk7O0VBQUEsY0FBQTtFQUFBLHFCQUFBO0VBQUEsc0JBQUE7RUFBQSxvQkFBQTtFQUFBLHVCQUFBO0VBQUE7QUFBQTs7QUFLSjtFQUFBO0FBQUE7O0FBQUE7RUFBQSx1QkFBQTtFQUFBLCtEQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyIHtcclxuICAgIEBhcHBseSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTQgdy1mdWxsIGZpeGVkIHotMTA7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHJvdW5kZWQtZnVsbDtcclxuXHJcbiAgICAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcclxuICAgICAgICBAYXBwbHkgdGV4dC14bDtcclxuICAgIH1cclxufVxyXG5cclxuLmF2YXRhci1idG4ge1xyXG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIG1pbi13LWZpdCBjdXJzb3ItcG9pbnRlcjtcclxuXHJcbiAgICAudXNlciB7XHJcbiAgICAgICAgQGFwcGx5IHJvdW5kZWQtZnVsbCBtaW4tdy04IHctOSBoLTkgYmctc2t5LTIwMCB0ZXh0LXNreS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBAYXBwbHkgcHQtMzIgcGItNSByZWxhdGl2ZTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDIwLjhyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICY6aGFzKC5oZXJvKSB7XHJcbiAgICAgICAgQGFwcGx5IHB0LTA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgICBAYXBwbHkgYmctc3RvbmUtNTA7XHJcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xyXG4gICAgQGFwcGx5IHNoYWRvdy1ub25lO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XHJcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDAgdy02O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmLmhpZGUge1xyXG4gICAgICAgIEBhcHBseSBvcGFjaXR5LTAgdy0wO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgQGFwcGx5IGZsZXgtYXV0bztcclxuXHJcbiAgICAmOmhhcygubWF0LWRyYXdlci1vcGVuZWQpIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHN2aDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnNpZGVtZW51LWlubmVyIHtcclxuICAgIEBhcHBseSBtdC0zMiBkaXZpZGUteSBkaXZpZGUtYmxhY2svMzAgeHM6bXQtNDA7XHJcblxyXG4gICAgLmJ0bi1zdHJva2Utd2hpdGUge1xyXG4gICAgICAgIEBhcHBseSB3LWZ1bGwgbWF4LXctc20gbXItYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUtYnV0dG9uIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xyXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwIHctNjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJi5oaWRlIHtcclxuICAgICAgICBAYXBwbHkgb3BhY2l0eS0wIHctMDtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIEBhcHBseSBiZy1za3ktNTAvMzAgYmFja2Ryb3AtYmx1ci14bCB3LWZ1bGwgcHgtOCBweS00O1xyXG59XHJcblxyXG4uc29jaWFsLWljb24td3JhcCB7XHJcbiAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzcGFjZS14LTIgbXQtNSB3LWZ1bGwgbWQ6bWF4LXctOTY7XHJcblxyXG4gICAgLmRpdmlkZXIge1xyXG4gICAgICAgIEBhcHBseSBib3JkZXItdCBib3JkZXItd2hpdGUvNTAgZmxleC1hdXRvO1xyXG4gICAgfVxyXG5cclxuICAgID4gYSB7XHJcbiAgICAgICAgQGFwcGx5IHctMTEgaC0xMSBwLTIgZmxleCBpdGVtcy1jZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LWxpc3Qge1xyXG4gICAgQGFwcGx5IHB5LTM7XHJcblxyXG4gICAgYSxcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgQGFwcGx5IHRleHQtYmFzZSBweC0xIHB5LTMgYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZWItbWFwIHtcclxuICAgIEBhcHBseSBtdC01IHNwYWNlLXktMztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 72203:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/footer/footer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models */ 93146);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 82348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/core/src/lib/shared/pipes/ary-find-value.pipe */ 36175);

// Custom packages







function FooterComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const phone_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](phone_r9);
  }
}
function FooterComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fax_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](fax_r10);
  }
}
function FooterComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "opening hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opening_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](opening_r11);
  }
}
function FooterComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mail_r12);
  }
}
function FooterComponent_li_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const enAddr_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", enAddr_r15, " ");
  }
}
const _c0 = function () {
  return [];
};
function FooterComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p")(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FooterComponent_li_14_span_6_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "aryFindValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chtAddr_r13 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](chtAddr_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](7, 2, "LOCATION(\u82F1\u6587\u5730\u5740)", (ctx_r4.response == null ? null : ctx_r4.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0), "name", "value"));
  }
}
function FooterComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fbUrl_r16 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", fbUrl_r16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const igUrl_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", igUrl_r17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_a_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ytUrl_r18 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", ytUrl_r18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u672C\u7DB2\u7AD9\u63A1\u7528\u85CD\u65B0\u91D1\u6D41\uFF0C\u63D0\u4F9B\u60A8\u5B89\u5168\u3001\u4FBF\u5229\u7684\u4EA4\u6613\u74B0\u5883\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class FooterComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this._appStoreApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services__WEBPACK_IMPORTED_MODULE_2__.AppStoreApiServ);
    this.currYear = new Date().getFullYear();
    this.response = null;
  }
  ngOnInit() {
    this.doDataInit();
  }
  doDataInit() {
    this._appStoreApiServ.getAppObjectStoreValueByCode(_core_models__WEBPACK_IMPORTED_MODULE_1__.AppObjectStoreCodes.學會聯絡方式設定檔).subscribe({
      next: res => {
        if (!res) {
          return;
        }
        this.response = res;
      },
      error: err => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    });
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["web-footer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 58,
      consts: [["src", "assets/shared/img/logo/mark-white.png", "alt", "logo", 1, "w-36", "h-36", "object-contain", "mr-10", "mb-4"], [1, "web-map"], [1, "flex", "flex-wrap"], [4, "ngIf"], [1, "social-links"], ["target", "_blank", "rel", "noopener noreferrer", 4, "ngIf"], ["target", "_blank", 4, "ngIf"], [1, "copy-right"], [1, "pr-1"], [1, "flex"], ["routerLink", "/about/terms"], ["routerLink", "/about/privacy"], [1, "label"], [1, "inline-block"], ["class", "inline-block text-sm", 4, "ngIf"], [1, "inline-block", "text-sm"], ["target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/image/icon/fb.webp", "alt", "facebook"], ["target", "_blank"], ["src", "assets/image/icon/ig.webp", "alt", "instagram"], ["src", "assets/image/icon/yt.webp", "alt", "youtube"], ["src", "assets/image/logo/newebpay.png", "alt", "logo", 1, "w-60", "h-auto", "mb-2"], [1, "opacity-60", "tracking-wider", "-ml-1"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 1)(3, "div", 2)(4, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FooterComponent_li_5_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FooterComponent_li_7_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FooterComponent_li_9_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FooterComponent_li_12_Template, 5, 1, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FooterComponent_li_14_Template, 8, 8, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FooterComponent_a_17_Template, 2, 1, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FooterComponent_a_19_Template, 2, 1, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FooterComponent_a_21_Template, 2, 1, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "aryFindValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "section", 7)(24, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u860A\u548C\u5802 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 9)(29, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u670D\u52D9\u689D\u6B3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\uFF0E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u96B1\u79C1\u6B0A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, FooterComponent_div_34_Template, 4, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](6, 10, "PHONE", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](8, 15, "FAX", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](51, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](10, 20, "OPENING HOURS", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](52, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](13, 25, "MAIL", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](53, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](15, 30, "LOCATION(\u4E2D\u6587\u5730\u5740)", (ctx.response == null ? null : ctx.response.contactDetails) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](54, _c0), "name", "value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](18, 35, "Facebook", (ctx.response == null ? null : ctx.response.socialMedia) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](55, _c0), "name", "url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](20, 40, "Instagram", (ctx.response == null ? null : ctx.response.socialMedia) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](56, _c0), "name", "url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](22, 45, "Youtube", (ctx.response == null ? null : ctx.response.socialMedia) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](57, _c0), "name", "url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currYear, " All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _libs_core_src_lib_shared_pipes_ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_3__.AryFindValuePipe],
      styles: ["footer[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}@media (min-width: 1024px) {footer[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}footer[_ngcontent-%COMP%] {\n  background-color: var(--md-sys-color-on-sky-fixed-variant);\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 300;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.logo-col[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-direction: column;\n  padding: 1.25rem;\n  background-color: var(--md-sys-color-surface-dim);\n}\n\n.copy-right[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  border-top-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n  padding-top: 1.5rem;\n  opacity: 0.4;\n}\n\n@media (min-width: 1024px) {.copy-right[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvbW9kdWxlcy9fbGF5b3V0L3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxrQkFBQTtFQUFBLGFBQUE7RUFBQSxzQkFBQTtFQUFBLGVBQUE7RUFBQSxlQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBLENBQUEsNEJBQUE7SUFBQTtFQUFBO0FBQUEsQ0FESjtFQUVJLDBEQUFBO0FBQ0o7QUFHUTs7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLSjtFQUFBLGFBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQUEsc0JBQUE7RUFBQSxnQkFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHNCQUFBO0VBQUEscUJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBLDRCQUFBO0lBQUEsbUJBQUE7SUFBQTtFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgQGFwcGx5IHRleHQtd2hpdGUgcmVsYXRpdmUgcC02IGZsZXggZmxleC1jb2wgZmxleC13cmFwIGxnOmZsZXgtcm93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtc3lzLWNvbG9yLW9uLXNreS1maXhlZC12YXJpYW50KTtcclxuXHJcbiAgICBwLFxyXG4gICAgbGkge1xyXG4gICAgICAgIEBhcHBseSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dvLWNvbCB7XHJcbiAgICBAYXBwbHkgbWF4LXctZml0IHAtNSBmbGV4IGZsZXgtY29sO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWQtc3lzLWNvbG9yLXN1cmZhY2UtZGltKTtcclxufVxyXG5cclxuLmNvcHktcmlnaHQge1xyXG4gICAgQGFwcGx5IHctZnVsbCBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOmp1c3RpZnktYmV0d2VlbiBwdC02IGJvcmRlci10IGJvcmRlci13aGl0ZSBvcGFjaXR5LTQwO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 18737:
/*!*********************************************************!*\
  !*** ./apps/web/src/app/modules/_layout/pages/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContainerComponent: () => (/* reexport safe */ _default_container_default_container_component__WEBPACK_IMPORTED_MODULE_0__.DefaultContainerComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent)
/* harmony export */ });
/* harmony import */ var _default_container_default_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-container/default-container.component */ 21579);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 72203);



/***/ }),

/***/ 8493:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/glass-bg/glass-bg.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlassBgComponent: () => (/* binding */ GlassBgComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


const _c0 = ["*"];
class GlassBgComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
  }
  static {
    this.ɵfac = function GlassBgComponent_Factory(t) {
      return new (t || GlassBgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GlassBgComponent,
      selectors: [["web-glass-bg"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 0,
      consts: [[1, "liquidGlass-wrapper"], [1, "liquidGlass-effect"], [1, "liquidGlass-tint"], [1, "liquidGlass-shine"], [1, "liquidGlass-text"]],
      template: function GlassBgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 44457:
/*!*****************************************************!*\
  !*** ./apps/web/src/app/shared/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompleteComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.CompleteComponent),
/* harmony export */   FailComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.FailComponent),
/* harmony export */   GlassBgComponent: () => (/* reexport safe */ _glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_0__.GlassBgComponent),
/* harmony export */   PaginatorComponent: () => (/* reexport safe */ _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent),
/* harmony export */   PendingComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.PendingComponent),
/* harmony export */   ResultEmptyComponent: () => (/* reexport safe */ _results__WEBPACK_IMPORTED_MODULE_2__.ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _glass_bg_glass_bg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glass-bg/glass-bg.component */ 8493);
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator/paginator.component */ 94643);
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results */ 60132);




/***/ }),

/***/ 94643:
/*!*****************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/paginator/paginator.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatorComponent: () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 79682);

// Custom packages



class PaginatorComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.params = null;
    this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onPageIndexChange(e) {
    this.pageIndexChange.emit(e.pageIndex + 1);
  }
  static {
    this.ɵfac = function PaginatorComponent_Factory(t) {
      return new (t || PaginatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PaginatorComponent,
      selectors: [["web-paginator"]],
      inputs: {
        params: "params"
      },
      outputs: {
        pageIndexChange: "pageIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 5,
      consts: [[3, "hidePageSize", "showFirstLastButtons", "length", "pageSize", "pageIndex", "page"]],
      template: function PaginatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-paginator", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function PaginatorComponent_Template_mat_paginator_page_0_listener($event) {
            return ctx.onPageIndexChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidePageSize", true)("showFirstLastButtons", false)("length", (ctx.params == null ? null : ctx.params.length) || 0)("pageSize", (ctx.params == null ? null : ctx.params.pageSize) || 0)("pageIndex", (ctx.params == null ? null : ctx.params.pageIndex) ? ((ctx.params == null ? null : ctx.params.pageIndex) || 0) - 1 : 0);
        }
      },
      dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2947:
/*!*************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/partner-logos/partner-logos.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartnerLogosComponent: () => (/* binding */ PartnerLogosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/angular */ 38585);



function PartnerLogosComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const partner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", partner_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", partner_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partner_r1.description);
  }
}
function PartnerLogosComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PartnerLogosComponent_1_ng_template_0_Template, 4, 3, "ng-template", 2);
  }
}
class PartnerLogosComponent {
  constructor() {
    this.partners = [{
      logo: 'assets/shared/img/sponsor/bc-logo.png',
      name: 'Beckman Coulter',
      description: 'Beckman Coulter（貝克曼庫爾特）致力於研發、製造與行銷能夠簡化、自動化並創新複雜生物醫學檢測流程的產品。我們的體外診斷系統廣泛應用於全球各地的醫院與關鍵醫療照護場域，所產出的檢測資訊協助醫師進行疾病診斷、治療決策，以及病患健康狀況的持續監測。'
    }];
    this.swiperConfig = {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
    };
  }
  static {
    this.ɵfac = function PartnerLogosComponent_Factory(t) {
      return new (t || PartnerLogosComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PartnerLogosComponent,
      selectors: [["app-partner-logos"]],
      decls: 2,
      vars: 2,
      consts: [[3, "config"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, ""], [1, "w-full", "max-w-72", "aspect-video", "object-contain", "mx-auto", 3, "src", "alt"]],
      template: function PartnerLogosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartnerLogosComponent_1_Template, 1, 0, null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.swiperConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partners);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_2__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_2__.SwiperSlideDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7398:
/*!***********************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/complete/complete.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompleteComponent: () => (/* binding */ CompleteComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class CompleteComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '';
  }
  static {
    this.ɵfac = function CompleteComponent_Factory(t) {
      return new (t || CompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompleteComponent,
      selectors: [["web-complete"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 1,
      consts: [[1, "md:flex", "items-start", "justify-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 160 160"], ["fill", "none", "stroke", "var(--md-sys-color-primary)", "stroke-width", "10", "stroke-miterlimit", "10", "cx", "80", "cy", "80", "r", "70", 1, "path", "circle"], ["points", "115.2 55.7 66.5 104.3 44.8 83", "fill", "none", "stroke", "var(--md-sys-color-primary)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "check"], [1, "fade-in-left"], [1, "complete-title"]],
      template: function CompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2)(3, "polyline", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: block;\n  width: 5rem;\n}\n@media (min-width: 1280px) {\n  svg[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n}\n@media (min-width: 1600px) {\n  svg[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n.path.circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out;\n}\n.path.line[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: _ngcontent-%COMP%_dash 0.9s 0.35s ease-in-out forwards;\n}\n.path.check[_ngcontent-%COMP%] {\n  stroke-dashoffset: -100;\n  animation: _ngcontent-%COMP%_dash-check 0.9s 0.35s ease-in-out forwards;\n}\n\n.complete-title[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 4.5rem;\n  letter-spacing: 0.025em;\n  color: var(--md-sys-color-primary);\n}\n\n.fade-in-left[_ngcontent-%COMP%] {\n  --tw-translate-x: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  opacity: 0;\n  transition-delay: 200ms;\n  animation: _ngcontent-%COMP%_fadeInLeft 1s ease-out forwards; \n\n}\n\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0); \n\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_dash-check {\n  0% {\n    stroke-dashoffset: -100;\n  }\n  100% {\n    stroke-dashoffset: 900;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBRUk7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsY0FBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0lBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFHSjtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBRUksZ0NBQUE7QUFFUjtBQUFJO0VBQ0ksdUJBQUE7RUFFQSwrQ0FBQTtBQUVSO0FBQUk7RUFDSSx1QkFBQTtFQUVBLHFEQUFBO0FBRVI7O0FBR0k7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsdUJBQUE7RUFDQTtBQURBOztBQUtBO0VBQUEseUJBQUE7RUFBQSwrTEFBQTtFQUFBLFVBQUE7RUFBQSx1QkFBQTtFQUNBLDBDQUFBLEVBQUEsd0JBQUE7QUFEQTs7QUFJSjtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQSxFQUFBLGlDQUFBO0VBQ0Y7QUFDRjtBQVdBO0VBQ0k7SUFDSSx1QkFBQTtFQUROO0VBR0U7SUFDSSxvQkFBQTtFQUROO0FBQ0Y7QUFhQTtFQUNJO0lBQ0ksdUJBQUE7RUFITjtFQUtFO0lBQ0ksc0JBQUE7RUFITjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29tcGxldGUgKi9cclxuc3ZnIHtcclxuICAgIEBhcHBseSB3LTIwIGJsb2NrIG1yLTQgbWItNCB4bDp3LTI0IDN4bDp3LTMyO1xyXG59XHJcblxyXG4ucGF0aCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAmLmNpcmNsZSB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgICYubGluZSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMC45cyAwLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb246IGRhc2ggMC45cyAwLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgIH1cclxuICAgICYuY2hlY2sge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoLWNoZWNrIDAuOXMgMC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkYXNoLWNoZWNrIDAuOXMgMC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb21wbGV0ZS10aXRsZSB7XHJcbiAgICBAYXBwbHkgdGV4dC03eGwgdHJhY2tpbmctd2lkZSBtdC0xO1xyXG4gICAgY29sb3I6IHZhcigtLW1kLXN5cy1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZhZGUtaW4tbGVmdCB7XHJcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRlbGF5LTIwMCAtdHJhbnNsYXRlLXgtMTA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbkxlZnQgMXMgZWFzZS1vdXQgZm9yd2FyZHM7IC8qIEFwcGx5IHRoZSBhbmltYXRpb24gKi9cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAvKiBFbmQgYXQgaXRzIG9yaWdpbmFsIHBvc2l0aW9uICovXHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaC1jaGVjayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogOTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gtY2hlY2sge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDkwMDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 92776:
/*!***************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/fail/fail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FailComponent: () => (/* binding */ FailComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class FailComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '';
  }
  static {
    this.ɵfac = function FailComponent_Factory(t) {
      return new (t || FailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FailComponent,
      selectors: [["web-fail"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 1,
      consts: [[1, "md:flex", "items-start", "justify-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 160 160"], ["fill", "none", "stroke", "var(--md-sys-color-error)", "stroke-width", "10", "stroke-miterlimit", "10", "cx", "80", "cy", "80", "r", "70", 1, "path", "circle"], ["x1", "55", "y1", "55", "x2", "105", "y2", "105", "stroke", "var(--md-sys-color-error)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "x-line-1"], ["x1", "105", "y1", "55", "x2", "55", "y2", "105", "stroke", "var(--md-sys-color-error)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "x-line-2"], [1, "fade-in-left"], [1, "fail-title"]],
      template: function FailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2)(3, "line", 3)(4, "line", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: block;\n  width: 5rem;\n}\n@media (min-width: 1280px) {\n  svg[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n}\n@media (min-width: 1600px) {\n  svg[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n.path.circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out;\n}\n.path.x-line-1[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: _ngcontent-%COMP%_dash 0.9s 0.35s ease-in-out forwards;\n}\n.path.x-line-2[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: _ngcontent-%COMP%_dash 0.9s 0.5s ease-in-out forwards;\n}\n\n.fail-title[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 4.5rem;\n  letter-spacing: 0.025em;\n  color: var(--md-sys-color-error);\n}\n\n.fade-in-left[_ngcontent-%COMP%] {\n  --tw-translate-x: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  opacity: 0;\n  transition-delay: 200ms;\n  animation: _ngcontent-%COMP%_fadeInLeft 1s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9mYWlsL2ZhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUVJO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUVJLGdDQUFBO0FBRVI7QUFBSTtFQUNJLHVCQUFBO0VBRUEsK0NBQUE7QUFFUjtBQUFJO0VBQ0ksdUJBQUE7RUFFQSw4Q0FBQTtBQUVSOztBQUdJO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHVCQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLHlCQUFBO0VBQUEsK0xBQUE7RUFBQSxVQUFBO0VBQUEsdUJBQUE7RUFDQTtBQURBOztBQUlKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBQ0Y7QUFDRjtBQVdBO0VBQ0k7SUFDSSx1QkFBQTtFQUROO0VBR0U7SUFDSSxvQkFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYWlsICovXHJcbnN2ZyB7XHJcbiAgICBAYXBwbHkgdy0yMCBibG9jayBtci00IG1iLTQgeGw6dy0yNCAzeGw6dy0zMjtcclxufVxyXG5cclxuLnBhdGgge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgJi5jaXJjbGUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAmLngtbGluZS0xIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAwLjlzIDAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAwLjlzIDAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgfVxyXG4gICAgJi54LWxpbmUtMiB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMC45cyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAwLjlzIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWlsLXRpdGxlIHtcclxuICAgIEBhcHBseSB0ZXh0LTd4bCB0cmFja2luZy13aWRlIG10LTE7XHJcbiAgICBjb2xvcjogdmFyKC0tbWQtc3lzLWNvbG9yLWVycm9yKTtcclxufVxyXG5cclxuLmZhZGUtaW4tbGVmdCB7XHJcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRlbGF5LTIwMCAtdHJhbnNsYXRlLXgtMTA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbkxlZnQgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60132:
/*!*************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompleteComponent: () => (/* reexport safe */ _complete_complete_component__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent),
/* harmony export */   FailComponent: () => (/* reexport safe */ _fail_fail_component__WEBPACK_IMPORTED_MODULE_2__.FailComponent),
/* harmony export */   PendingComponent: () => (/* reexport safe */ _pending_pending_component__WEBPACK_IMPORTED_MODULE_3__.PendingComponent),
/* harmony export */   ResultEmptyComponent: () => (/* reexport safe */ _result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_0__.ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _result_empty_result_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-empty/result-empty.component */ 9898);
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete/complete.component */ 7398);
/* harmony import */ var _fail_fail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fail/fail.component */ 92776);
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending/pending.component */ 69650);





/***/ }),

/***/ 69650:
/*!*********************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/pending/pending.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingComponent: () => (/* binding */ PendingComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class PendingComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '';
  }
  static {
    this.ɵfac = function PendingComponent_Factory(t) {
      return new (t || PendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PendingComponent,
      selectors: [["web-pending"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 1,
      consts: [[1, "md:flex", "items-start", "justify-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 160 160"], ["fill", "none", "stroke", "var(--md-sys-color-surface-tint)", "stroke-width", "10", "stroke-miterlimit", "10", "cx", "80", "cy", "80", "r", "70", 1, "path"], ["x1", "80", "y1", "80", "x2", "80", "y2", "44", "stroke", "var(--md-sys-color-surface-tint)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "hour-hand"], ["x1", "80", "y1", "80", "x2", "110", "y2", "80", "stroke", "var(--md-sys-color-surface-tint)", "stroke-width", "10", "stroke-linecap", "round", "stroke-miterlimit", "10", 1, "path", "minute-hand"], ["fill", "var(--md-sys-color-surface-tint)", "cx", "80", "cy", "80", "r", "6"], [1, "fade-in-left"], [1, "pending-title"]],
      template: function PendingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 2)(3, "line", 3)(4, "line", 4)(5, "circle", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: block;\n  width: 5rem;\n}\n@media (min-width: 1280px) {\n  svg[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n}\n@media (min-width: 1600px) {\n  svg[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n.path.hour-hand[_ngcontent-%COMP%] {\n  transform-origin: 80px 80px;\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out, _ngcontent-%COMP%_tick-hour 6s linear infinite;\n}\n.path.minute-hand[_ngcontent-%COMP%] {\n  transform-origin: 80px 80px;\n  animation: _ngcontent-%COMP%_dash 0.9s ease-in-out, _ngcontent-%COMP%_tick-minute 1s linear infinite;\n}\n\n.pending-title[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 4.5rem;\n  letter-spacing: 0.025em;\n  color: var(--md-sys-color-surface-tint);\n}\n\n.fade-in-left[_ngcontent-%COMP%] {\n  --tw-translate-x: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  opacity: 0;\n  transition-delay: 200ms;\n  animation: _ngcontent-%COMP%_fadeInLeft 1s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_tick-hour {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_tick-minute {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9wZW5kaW5nL3BlbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQUVJO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLDJCQUFBO0VBRUEsOERBQUE7QUFDUjtBQUNJO0VBQ0ksMkJBQUE7RUFFQSxnRUFBQTtBQUNSOztBQUlJO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHVCQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLHlCQUFBO0VBQUEsK0xBQUE7RUFBQSxVQUFBO0VBQUEsdUJBQUE7RUFDQTtBQURBOztBQUlKO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFBTyx1QkFBQTtFQUFQO0VBQ0E7SUFBTyx5QkFBQTtFQUVQO0FBQ0Y7QUFBQTtFQUNFO0lBQU8sdUJBQUE7RUFHUDtFQUZBO0lBQU8seUJBQUE7RUFLUDtBQUNGO0FBRUE7RUFDSTtJQUFPLHVCQUFBO0VBU1Q7RUFSRTtJQUFPLG9CQUFBO0VBV1Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBlbmRpbmcgKi9cclxuc3ZnIHtcclxuICAgIEBhcHBseSB3LTIwIGJsb2NrIG1yLTQgbWItNCB4bDp3LTI0IDN4bDp3LTMyO1xyXG59XHJcblxyXG4ucGF0aCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICBcclxuICAgICYuaG91ci1oYW5kIHtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA4MHB4IDgwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dCwgdGljay1ob3VyIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb246IGRhc2ggMC45cyBlYXNlLWluLW91dCwgdGljay1ob3VyIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgICYubWludXRlLWhhbmQge1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDgwcHggODBweDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAwLjlzIGVhc2UtaW4tb3V0LCB0aWNrLW1pbnV0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDAuOXMgZWFzZS1pbi1vdXQsIHRpY2stbWludXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnBlbmRpbmctdGl0bGUge1xyXG4gICAgQGFwcGx5IHRleHQtN3hsIHRyYWNraW5nLXdpZGUgbXQtMTtcclxuICAgIGNvbG9yOiB2YXIoLS1tZC1zeXMtY29sb3Itc3VyZmFjZS10aW50KTtcclxufVxyXG5cclxuLmZhZGUtaW4tbGVmdCB7XHJcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRlbGF5LTIwMCAtdHJhbnNsYXRlLXgtMTA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbkxlZnQgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGljay1ob3VyIHtcclxuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICB0byAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRpY2stbWludXRlIHtcclxuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICB0byAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XHJcbiAgICAwJSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7IH1cclxuICAgIDEwMCUgeyBzdHJva2UtZGFzaG9mZnNldDogMDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwOyB9XHJcbiAgICAxMDAlIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9898:
/*!*******************************************************************************************!*\
  !*** ./apps/web/src/app/shared/components/results/result-empty/result-empty.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultEmptyComponent: () => (/* binding */ ResultEmptyComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class ResultEmptyComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.message = '目前尚無資料';
  }
  static {
    this.ɵfac = function ResultEmptyComponent_Factory(t) {
      return new (t || ResultEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResultEmptyComponent,
      selectors: [["web-result-empty"]],
      inputs: {
        message: "message"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 1,
      consts: [[1, "empty-content"], [1, "material-symbols-rounded"], [1, "text-xl"]],
      template: function ResultEmptyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "draft");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: [".empty-content[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    align-items: center;\n\n    justify-content: center;\n\n    border-radius: 0.5rem;\n\n    background-color: rgb(2 132 199 / 0.2);\n\n    padding-top: 2.5rem;\n\n    padding-bottom: 2.5rem;\n\n    opacity: 0.6\n}\n\nh1[_ngcontent-%COMP%], .material-symbols-rounded[_ngcontent-%COMP%] {\n\n    padding-left: 0.25rem;\n\n    padding-right: 0.25rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(3 105 161 / var(--tw-text-opacity, 1))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQtZW1wdHkvcmVzdWx0LWVtcHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGFBQUE7O0lBQUEsbUJBQUE7O0lBQUEsdUJBQUE7O0lBQUEscUJBQUE7O0lBQUEsc0NBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFLQTs7O0lBQUEscUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1jb250ZW50IHtcclxuICAgIEBhcHBseSBiZy1za3ktNjAwLzIwIG9wYWNpdHktNjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBweS0xMDtcclxufVxyXG5cclxuaDEsXHJcbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xyXG4gICAgQGFwcGx5IHRleHQtc2t5LTcwMCBweC0xO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 72255:
/*!***************************************************!*\
  !*** ./apps/web/src/app/shared/controls/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-code-control/zip-code-control.component */ 72257);


/***/ }),

/***/ 72257:
/*!*****************************************************************************************!*\
  !*** ./apps/web/src/app/shared/controls/zip-code-control/zip-code-control.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* binding */ ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ary-filter.pipe */ 44832);
/* harmony import */ var _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../libs/core/src/lib/shared/pipes/ctrl-has-required.pipe */ 71367);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages











function ZipCodeControlComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4);
  }
}
function ZipCodeControlComponent_mat_error_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r6);
  }
}
function ZipCodeControlComponent_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_5_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["city"].errors, "\u7E23\u5E02"));
  }
}
function ZipCodeControlComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", opt_r7.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", opt_r7.code, " - ", opt_r7.district, " ");
  }
}
function ZipCodeControlComponent_mat_error_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", msg_r9, " ");
  }
}
function ZipCodeControlComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_11_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["district"].errors, "\u9109\u93AE\u5340"));
  }
}
const _c0 = function (a1) {
  return {
    fieldName: "city",
    fieldValue: a1
  };
};
class ZipCodeControlComponent extends _core_shared__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get f() {
    return this.valForm.controls;
  }
  constructor(fb, injector) {
    super(injector);
    this.fb = fb;
    this.injector = injector;
    this.cities = [];
    this.districts = [];
    this.required = false;
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.getCaches();
  }
  // ngOnInit(): void { }
  writeValue(value) {
    this.valForm = this.fb.group({
      id: [value],
      city: [null],
      district: [null]
    });
    this.doSetValidators();
    if (this.districts.length) {
      this.doReverseZipCodeId(value);
    } else {
      // 防止跟不上快取處理
      setTimeout(() => {
        this.doReverseZipCodeId(value);
      }, 100);
    }
    this.f['id'].valueChanges.subscribe(res => {
      this.onChange(res);
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  validate() {
    if (this.valForm.invalid) return {
      invalid: true
    };
    return null;
  }
  markAllAsTouched() {
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({
      emitEvent: false
    });
    this.onValidatorChange?.();
  }
  getCaches() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.storeServ.getZipCodesCache()]).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this.cities = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).DistinctBy(item => item.city).Select(item => item.city).ToArray();
        this.districts = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).Select(item => ({
          id: item.id,
          code: item.code,
          city: item.city,
          district: item.district
        })).ToArray();
      }
    });
  }
  doReverseZipCodeId(id) {
    if (id) {
      const twZipCode = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(this.districts).Where(w => w?.id === id).FirstOrDefault();
      this.f['city'].setValue(twZipCode?.city);
      this.f['district'].setValue(twZipCode?.district);
    }
  }
  doSetValidators() {
    if (this.required) {
      this.f['city'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
      this.f['district'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
    } else {
      this.f['city'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator);
      this.f['district'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator);
    }
    this.f['city'].updateValueAndValidity();
    this.f['district'].updateValueAndValidity();
  }
  onDistrictSelectionChange(city, district, targetCtrl) {
    if (!city || !district) {
      return;
    }
    const dist = this.districts.find(item => item.city === city && item.district === district);
    if (!dist) {
      return;
    }
    targetCtrl.setValue(dist.id);
  }
  static {
    this.ɵfac = function ZipCodeControlComponent_Factory(t) {
      return new (t || ZipCodeControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ZipCodeControlComponent,
      selectors: [["web-zip-code-control"]],
      inputs: {
        required: "required"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 16,
      consts: [[1, "grid", "grid-cols-2", "gap-x-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full", "fill-black", "col-span-1"], ["formControlName", "city", 3, "required", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs", 4, "ngIf"], ["formControlName", "district", 3, "required", "selectionChange"], [3, "value"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function ZipCodeControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_2_listener() {
            ctx.f["district"].setValue(null);
            return ctx.f["id"].setValue(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ZipCodeControlComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ZipCodeControlComponent_mat_error_5_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 1)(7, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_7_listener() {
            return ctx.onDistrictSelectionChange(ctx.f["city"].value, ctx.f["district"].value, ctx.f["id"]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ZipCodeControlComponent_mat_option_9_Template, 2, 3, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "aryFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ZipCodeControlComponent_mat_error_11_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, ctx.f["city"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cities);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["city"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, ctx.f["district"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 11, ctx.districts, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.f["city"].value)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["district"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _libs_core_src_lib_shared_pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.AryFilterPipe, _libs_core_src_lib_shared_pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 51303:
/*!****************************************************************!*\
  !*** ./apps/web/src/app/shared/services/logo-state.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoStateService: () => (/* binding */ LogoStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class LogoStateService {
  constructor() {
    this.isLargeLogoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLargeLogo$ = this.isLargeLogoSubject.asObservable();
  }
  setLogoScale(isLarge) {
    // 新增setTimeout防止 錯誤：ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.isLargeLogoSubject.next(isLarge);
    });
  }
  static {
    this.ɵfac = function LogoStateService_Factory(t) {
      return new (t || LogoStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LogoStateService,
      factory: LogoStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 43889:
/*!**************************************************!*\
  !*** ./apps/web/src/app/shared/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 16567);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 38585);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/shared */ 76777);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 44457);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ 72255);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets */ 25446);
/* harmony import */ var _components_partner_logos_partner_logos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/partner-logos/partner-logos.component */ 2947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);



// Third party packages



// Custom packages






const CUST_MODULES = [_core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule];
const CUST_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FailComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PendingComponent];
const CUST_CONTROLS = [_controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent];
const CUST_WIDGETS = [_widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent];
const THIRD_MODULES = [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, CUST_MODULES, THIRD_MODULES, _core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FailComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PendingComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent, _components_partner_logos_partner_logos_component__WEBPACK_IMPORTED_MODULE_4__.PartnerLogosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule],
    exports: [_core_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _components__WEBPACK_IMPORTED_MODULE_1__.GlassBgComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PaginatorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ResultEmptyComponent, _components__WEBPACK_IMPORTED_MODULE_1__.CompleteComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FailComponent, _components__WEBPACK_IMPORTED_MODULE_1__.PendingComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.ImagePreviewDialogWidgetComponent, _widgets__WEBPACK_IMPORTED_MODULE_3__.JsonViewDialogWidgetComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule, _components_partner_logos_partner_logos_component__WEBPACK_IMPORTED_MODULE_4__.PartnerLogosComponent]
  });
})();

/***/ }),

/***/ 31108:
/*!**************************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/image-preview-dialog-widget/image-preview-dialog-widget.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreviewDialogWidgetComponent: () => (/* binding */ ImagePreviewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



class ImagePreviewDialogWidgetComponent {
  constructor(data) {
    this.data = data;
  }
  static {
    this.ɵfac = function ImagePreviewDialogWidgetComponent_Factory(t) {
      return new (t || ImagePreviewDialogWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagePreviewDialogWidgetComponent,
      selectors: [["web-image-preview-dialog-widget"]],
      decls: 5,
      vars: 1,
      consts: [["mat-dialog-content", ""], ["alt", "\u9810\u89BD\u5716\u7247", 2, "max-width", "100%", "max-height", "80vh", 3, "src"], ["mat-dialog-actions", "", "align", "end"], ["mat-dialog-close", ""]],
      template: function ImagePreviewDialogWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/jpeg;base64," + ctx.data.imageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
      styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding: 0;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL3dpZGdldHMvaW1hZ2UtcHJldmlldy1kaWFsb2ctd2lkZ2V0L2ltYWdlLXByZXZpZXctZGlhbG9nLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsY0FBYztNQUNkLFVBQVU7SUFDWiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 25446:
/*!**************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreviewDialogWidgetComponent: () => (/* reexport safe */ _image_preview_dialog_widget_image_preview_dialog_widget_component__WEBPACK_IMPORTED_MODULE_0__.ImagePreviewDialogWidgetComponent),
/* harmony export */   JsonViewDialogWidgetComponent: () => (/* reexport safe */ _json_view_dialog_widget_json_view_dialog_widget_component__WEBPACK_IMPORTED_MODULE_1__.JsonViewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _image_preview_dialog_widget_image_preview_dialog_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-preview-dialog-widget/image-preview-dialog-widget.component */ 31108);
/* harmony import */ var _json_view_dialog_widget_json_view_dialog_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-view-dialog-widget/json-view-dialog-widget.component */ 35988);



/***/ }),

/***/ 35988:
/*!******************************************************************************************************!*\
  !*** ./apps/web/src/app/shared/widgets/json-view-dialog-widget/json-view-dialog-widget.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonViewDialogWidgetComponent: () => (/* binding */ JsonViewDialogWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);




class JsonViewDialogWidgetComponent {
  constructor(data) {
    this.data = data;
  }
  static {
    this.ɵfac = function JsonViewDialogWidgetComponent_Factory(t) {
      return new (t || JsonViewDialogWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JsonViewDialogWidgetComponent,
      selectors: [["web-json-view-dialog-widget"]],
      decls: 9,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-dialog-close", ""]],
      template: function JsonViewDialogWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "JSON \u5167\u5BB9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 1)(7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u95DC\u9589");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.data));
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
      styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding: 0;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2ViL3NyYy9hcHAvc2hhcmVkL3dpZGdldHMvanNvbi12aWV3LWRpYWxvZy13aWRnZXQvanNvbi12aWV3LWRpYWxvZy13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGNBQWM7TUFDZCxVQUFVO0lBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 50706:
/*!**************************************************!*\
  !*** ./apps/web/src/environments/environment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  appPfm: 'WEB',
  storageTokenName: 'chuhungWebDevToken',
  storageAuthUserName: 'chuhungWebDevAuthUser',
  siteName: '蘊和堂',
  siteServer: 'http://localhost:4200',
  apiServer: 'http://localhost:5038/Portal',
  cdnServer: 'http://localhost:5038/',
  downloadUrl: '/AppAttach/DownloadAppFileAtt'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 18867:
/*!******************************!*\
  !*** ./apps/web/src/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 74150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23489);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 59853:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.actions.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrAuthUserActionStates: () => (/* binding */ CurrAuthUserActionStates),
/* harmony export */   failureCurrAuthUserAction: () => (/* binding */ failureCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserAction: () => (/* binding */ initialCurrAuthUserAction),
/* harmony export */   requestCurrAuthUserAction: () => (/* binding */ requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* binding */ successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 99797);

// States
var CurrAuthUserActionStates;
(function (CurrAuthUserActionStates) {
  CurrAuthUserActionStates["Initial"] = "[CurrAuthUser] Initial";
  CurrAuthUserActionStates["Request"] = "[CurrAuthUser] Request";
  CurrAuthUserActionStates["Success"] = "[CurrAuthUser] Success";
  CurrAuthUserActionStates["Failure"] = "[CurrAuthUser] Failure";
})(CurrAuthUserActionStates || (CurrAuthUserActionStates = {}));
// Actions
const initialCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Initial);
const requestCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Request);
const successCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Success, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const failureCurrAuthUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(CurrAuthUserActionStates.Failure,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 71220:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.effects.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrAuthUserEffects: () => (/* binding */ CurrAuthUserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 99497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 59853);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers */ 45963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);



// Custom packages






class CurrAuthUserEffects {
  constructor(actions$, appEnv, appUserApiServ) {
    this.actions$ = actions$;
    this.appEnv = appEnv;
    this.appUserApiServ = appUserApiServ;
    this.getCurrAuthUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
      return this.appUserApiServ.getCurrAuthUserInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
        if (res) {
          window.sessionStorage.setItem(this.appEnv.storageAuthUserName, JSON.stringify(res));
          return _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction({
            payload: res
          });
        } else {
          return _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction({
            payload: new Error('無法取得有效使用者資訊')
          });
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction({
        payload: err
      }))));
    })));
  }
  static {
    this.ɵfac = function CurrAuthUserEffects_Factory(t) {
      return new (t || CurrAuthUserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_1__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__.AppUserApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: CurrAuthUserEffects,
      factory: CurrAuthUserEffects.ɵfac
    });
  }
}

/***/ }),

/***/ 35726:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.reducer.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* binding */ CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   currAuthUserReducer: () => (/* binding */ currAuthUserReducer),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* binding */ initialCurrAuthUserCacheState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 59853);

// Custom packages

const CURR_AUTH_USER_FEATURE_KEY = 'curr-auth-user';
const initialCurrAuthUserCacheState = {
  cache: null,
  loading: false
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialCurrAuthUserCacheState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserAction, state => ({
  ...state,
  cache: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction, state => ({
  ...state,
  cache: null,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction, state => ({
  ...state,
  cache: state.cache,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction, state => ({
  ...state,
  cache: null,
  loading: false
})));
function currAuthUserReducer(state, action) {
  return reducer(state, action);
}

/***/ }),

/***/ 51452:
/*!******************************************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/curr-auth-user.selectors.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrAuthUserCache: () => (/* binding */ getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* binding */ getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* binding */ getCurrAuthUserState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.reducer */ 35726);


const getCurrAuthUserState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY);
const getCurrAuthUserLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getCurrAuthUserState, state => state.loading);
const getCurrAuthUserCache = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getCurrAuthUserState, state => state.cache);

/***/ }),

/***/ 34467:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/+states/curr-auth-user/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* reexport safe */ _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__.CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   CurrAuthUserActionStates: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.CurrAuthUserActionStates),
/* harmony export */   currAuthUserReducer: () => (/* reexport safe */ _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__.currAuthUserReducer),
/* harmony export */   failureCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction),
/* harmony export */   getCurrAuthUserCache: () => (/* reexport safe */ _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* reexport safe */ _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* reexport safe */ _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrAuthUserState),
/* harmony export */   initialCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* reexport safe */ _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__.initialCurrAuthUserCacheState),
/* harmony export */   requestCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _curr_auth_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user.actions */ 59853);
/* harmony import */ var _curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curr-auth-user.reducer */ 35726);
/* harmony import */ var _curr_auth_user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curr-auth-user.selectors */ 51452);




/***/ }),

/***/ 871:
/*!********************************************!*\
  !*** ./libs/core/src/lib/+states/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURR_AUTH_USER_FEATURE_KEY: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY),
/* harmony export */   CurrAuthUserActionStates: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.CurrAuthUserActionStates),
/* harmony export */   StatesModule: () => (/* reexport safe */ _states_module__WEBPACK_IMPORTED_MODULE_1__.StatesModule),
/* harmony export */   currAuthUserReducer: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.currAuthUserReducer),
/* harmony export */   failureCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.failureCurrAuthUserAction),
/* harmony export */   getCurrAuthUserCache: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.getCurrAuthUserCache),
/* harmony export */   getCurrAuthUserLoading: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.getCurrAuthUserLoading),
/* harmony export */   getCurrAuthUserState: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.getCurrAuthUserState),
/* harmony export */   initialCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserAction),
/* harmony export */   initialCurrAuthUserCacheState: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.initialCurrAuthUserCacheState),
/* harmony export */   requestCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.requestCurrAuthUserAction),
/* harmony export */   successCurrAuthUserAction: () => (/* reexport safe */ _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__.successCurrAuthUserAction)
/* harmony export */ });
/* harmony import */ var _curr_auth_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user */ 34467);
/* harmony import */ var _states_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.module */ 92723);



/***/ }),

/***/ 92723:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/+states/states.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatesModule: () => (/* binding */ StatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 99497);
/* harmony import */ var _curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curr-auth-user/curr-auth-user.reducer */ 35726);
/* harmony import */ var _curr_auth_user_curr_auth_user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curr-auth-user/curr-auth-user.effects */ 71220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








class StatesModule {
  static {
    this.ɵfac = function StatesModule_Factory(t) {
      return new (t || StatesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: StatesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot({
        [_curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.CURR_AUTH_USER_FEATURE_KEY]: _curr_auth_user_curr_auth_user_reducer__WEBPACK_IMPORTED_MODULE_0__.currAuthUserReducer
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([_curr_auth_user_curr_auth_user_effects__WEBPACK_IMPORTED_MODULE_1__.CurrAuthUserEffects])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StatesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsRootModule]
  });
})();

/***/ }),

/***/ 20204:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/consts/global.const.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MAX_UTC_DATE_ISO_FORMAT: () => (/* binding */ APP_MAX_UTC_DATE_ISO_FORMAT),
/* harmony export */   MAT_DATE_TW_FORMATS: () => (/* binding */ MAT_DATE_TW_FORMATS),
/* harmony export */   PAGING_DEFAULT_PAGE_INDEX: () => (/* binding */ PAGING_DEFAULT_PAGE_INDEX),
/* harmony export */   PAGING_DEFAULT_PAGE_SIZE: () => (/* binding */ PAGING_DEFAULT_PAGE_SIZE)
/* harmony export */ });
const APP_MAX_UTC_DATE_ISO_FORMAT = '2999-12-31T00:00:00.000Z';
const PAGING_DEFAULT_PAGE_INDEX = 1;
const PAGING_DEFAULT_PAGE_SIZE = 30;
const MAT_DATE_TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM/DD',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM/DD'
  }
};

/***/ }),

/***/ 84092:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/consts/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MAX_UTC_DATE_ISO_FORMAT: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT),
/* harmony export */   MAT_DATE_TW_FORMATS: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_TW_FORMATS),
/* harmony export */   PAGING_DEFAULT_PAGE_INDEX: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_INDEX),
/* harmony export */   PAGING_DEFAULT_PAGE_SIZE: () => (/* reexport safe */ _global_const__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_SIZE)
/* harmony export */ });
/* harmony import */ var _global_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.const */ 20204);


/***/ }),

/***/ 63005:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/directives/image-fallback.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFallbackDirective: () => (/* binding */ ImageFallbackDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


class ImageFallbackDirective {
  constructor(el) {
    this.el = el;
    this.defaultUrl = 'assets/img/illustration/default-image.svg';
  }
  ngOnInit() {
    // 若 input 為空字串或 undefined，改用預設圖
    if (!this.fallbackUrl || this.fallbackUrl.trim() === '') {
      this.fallbackUrl = this.defaultUrl;
    }
    const element = this.el.nativeElement;
    if (!element.src || element.src.trim() === '') {
      element.src = this.fallbackUrl;
    }
  }
  onError() {
    const element = this.el.nativeElement;
    if (element.src !== this.fallbackUrl) {
      element.src = this.fallbackUrl;
    }
  }
  static {
    this.ɵfac = function ImageFallbackDirective_Factory(t) {
      return new (t || ImageFallbackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ImageFallbackDirective,
      selectors: [["img", "appImageFallback", ""]],
      hostBindings: function ImageFallbackDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImageFallbackDirective_error_HostBindingHandler() {
            return ctx.onError();
          });
        }
      },
      inputs: {
        fallbackUrl: ["appImageFallback", "fallbackUrl"]
      }
    });
  }
}

/***/ }),

/***/ 82658:
/*!***********************************************!*\
  !*** ./libs/core/src/lib/directives/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFallbackDirective: () => (/* reexport safe */ _image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective)
/* harmony export */ });
/* harmony import */ var _image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-fallback.directive */ 63005);


/***/ }),

/***/ 64720:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-admin-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminDto: () => (/* binding */ AppAdminDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppAdminDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppAdmin {
  constructor() {
    super();
    this.avatarAttId = 0;
    this.account = '';
    this.password = '';
    this.appUserStartAt = null;
    this.appUserEndAt = null;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 64251:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-file-att-dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFileAttDto: () => (/* binding */ AppFileAttDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppFileAttDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppFileAtt {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 58625:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-news-msg-cat-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCatDto: () => (/* binding */ AppNewsMsgCatDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppNewsMsgCatDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgCat {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 5344:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-news-msg-dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgDto: () => (/* binding */ AppNewsMsgDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jtos */ 5851);


class AppNewsMsgDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsg {
  constructor() {
    super();
    this.contentJto = new _jtos__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgContentJto();
  }
}

/***/ }),

/***/ 21836:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-object-store-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppObjectStoreDto: () => (/* binding */ AppObjectStoreDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppObjectStoreDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppObjectStore {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 87583:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-role-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleDto: () => (/* binding */ AppRoleDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRoleDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRole {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 66915:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-role-route-dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRouteDto: () => (/* binding */ AppRoleRouteDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRoleRouteDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRoleRoute {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 83110:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-route-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteDto: () => (/* binding */ AppRouteDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppRouteDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppRoute {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 9364:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-user-dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserDto: () => (/* binding */ AppUserDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class AppUserDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppUser {
  constructor() {
    super();
    this.adminId = 0;
    this.custId = 0;
    this.name = '';
  }
}

/***/ }),

/***/ 70129:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/app-user-role-dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRoleDto: () => (/* binding */ AppUserRoleDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);
/* eslint-disable @typescript-eslint/no-explicit-any */

class AppUserRoleDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.AppUserRole {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 71341:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/banner-ad-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAdDto: () => (/* binding */ BannerAdDto)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities */ 63204);

class BannerAdDto extends _entities__WEBPACK_IMPORTED_MODULE_0__.BannerAd {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 44205:
/*!************************************************!*\
  !*** ./libs/core/src/lib/models/dtos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminDto: () => (/* reexport safe */ _app_admin_dto__WEBPACK_IMPORTED_MODULE_0__.AppAdminDto),
/* harmony export */   AppFileAttDto: () => (/* reexport safe */ _app_file_att_dto__WEBPACK_IMPORTED_MODULE_1__.AppFileAttDto),
/* harmony export */   AppNewsMsgCatDto: () => (/* reexport safe */ _app_news_msg_cat_dto__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatDto),
/* harmony export */   AppNewsMsgDto: () => (/* reexport safe */ _app_news_msg_dto__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgDto),
/* harmony export */   AppObjectStoreDto: () => (/* reexport safe */ _app_object_store_dto__WEBPACK_IMPORTED_MODULE_4__.AppObjectStoreDto),
/* harmony export */   AppRoleDto: () => (/* reexport safe */ _app_role_dto__WEBPACK_IMPORTED_MODULE_5__.AppRoleDto),
/* harmony export */   AppRoleRouteDto: () => (/* reexport safe */ _app_role_route_dto__WEBPACK_IMPORTED_MODULE_6__.AppRoleRouteDto),
/* harmony export */   AppRouteDto: () => (/* reexport safe */ _app_route_dto__WEBPACK_IMPORTED_MODULE_7__.AppRouteDto),
/* harmony export */   AppUserDto: () => (/* reexport safe */ _app_user_dto__WEBPACK_IMPORTED_MODULE_8__.AppUserDto),
/* harmony export */   AppUserRoleDto: () => (/* reexport safe */ _app_user_role_dto__WEBPACK_IMPORTED_MODULE_9__.AppUserRoleDto),
/* harmony export */   BannerAdDto: () => (/* reexport safe */ _banner_ad_dto__WEBPACK_IMPORTED_MODULE_10__.BannerAdDto)
/* harmony export */ });
/* harmony import */ var _app_admin_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-dto */ 64720);
/* harmony import */ var _app_file_att_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-file-att-dto */ 64251);
/* harmony import */ var _app_news_msg_cat_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-cat-dto */ 58625);
/* harmony import */ var _app_news_msg_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-news-msg-dto */ 5344);
/* harmony import */ var _app_object_store_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-object-store-dto */ 21836);
/* harmony import */ var _app_role_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-role-dto */ 87583);
/* harmony import */ var _app_role_route_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-role-route-dto */ 66915);
/* harmony import */ var _app_route_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-route-dto */ 83110);
/* harmony import */ var _app_user_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-dto */ 9364);
/* harmony import */ var _app_user_role_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user-role-dto */ 70129);
/* harmony import */ var _banner_ad_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad-dto */ 71341);












/***/ }),

/***/ 57453:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-admin.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* binding */ AppAdmin)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppAdmin extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appUserId = 0;
    this.name = '';
    this.nameEn = null;
    this.mobile = null;
    this.email = null;
  }
}

/***/ }),

/***/ 10464:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-file-att.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFileAtt: () => (/* binding */ AppFileAtt)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppFileAtt extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    /*自動編號 */
    this.id = 0;
    /*上傳檔案名稱 */
    this.uploadName = '';
    /*上傳檔案名稱 */
    this.guidName = '';
    /*檔案副檔名 */
    this.extension = '';
    /*內容類型 */
    this.contentType = '';
    /*完整路徑 */
    this.fullPath = '';
    /*存取權限 */
    this.accessPriv = 0;
    /*狀態 */
    this.status = 0;
  }
}

/***/ }),

/***/ 81042:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-news-msg-cat.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCat: () => (/* binding */ AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* binding */ AppNewsMsgCatStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppNewsMsgCat extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.name = '';
    this.status = +AppNewsMsgCatStatuses.啟用;
    this.sort = 0;
  }
}
var AppNewsMsgCatStatuses;
(function (AppNewsMsgCatStatuses) {
  AppNewsMsgCatStatuses[AppNewsMsgCatStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  AppNewsMsgCatStatuses[AppNewsMsgCatStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(AppNewsMsgCatStatuses || (AppNewsMsgCatStatuses = {}));

/***/ }),

/***/ 83335:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-news-msg.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsg: () => (/* binding */ AppNewsMsg),
/* harmony export */   AppNewsMsgStatuses: () => (/* binding */ AppNewsMsgStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppNewsMsg extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.uniqueId = '';
    this.catId = null;
    this.title = '';
    this.startAt = new Date();
    this.endAt = null;
    this.stickyAt = null;
    this.status = +AppNewsMsgStatuses.發佈;
    this.content = null;
  }
}
var AppNewsMsgStatuses;
(function (AppNewsMsgStatuses) {
  AppNewsMsgStatuses[AppNewsMsgStatuses["\u767C\u4F48"] = 60] = "\u767C\u4F48";
  AppNewsMsgStatuses[AppNewsMsgStatuses["\u4E0B\u67B6"] = 100] = "\u4E0B\u67B6";
})(AppNewsMsgStatuses || (AppNewsMsgStatuses = {}));

/***/ }),

/***/ 99391:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-object-store.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppObjectStore: () => (/* binding */ AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* binding */ AppObjectStoreCodes)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppObjectStore extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.type = 0;
    this.code = '';
    this.name = '';
    this.desc = '';
    this.value = '{}';
  }
}
var AppObjectStoreCodes;
(function (AppObjectStoreCodes) {
  AppObjectStoreCodes["\u95DC\u65BC\u5B78\u6703"] = "ORG_ABOUT_SETTING";
  AppObjectStoreCodes["\u5B78\u6703\u806F\u7D61\u65B9\u5F0F\u8A2D\u5B9A\u6A94"] = "ORG_CONTACT_SETTING";
  AppObjectStoreCodes["\u7DB2\u7AD9\u689D\u6B3E\u8A2D\u5B9A\u6A94"] = "WEB_POLICY_SETTING";
})(AppObjectStoreCodes || (AppObjectStoreCodes = {}));

/***/ }),

/***/ 28096:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-role-route.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRoute: () => (/* binding */ AppRoleRoute)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppRoleRoute extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appRoleId = 0;
    this.appRouteId = 0;
  }
}

/***/ }),

/***/ 36424:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-role.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRole: () => (/* binding */ AppRole),
/* harmony export */   AppRoleStatuses: () => (/* binding */ AppRoleStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppRole extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appPfm = '';
    this.name = '';
    this.status = AppRoleStatuses.啟用;
  }
}
var AppRoleStatuses;
(function (AppRoleStatuses) {
  AppRoleStatuses[AppRoleStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  AppRoleStatuses[AppRoleStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(AppRoleStatuses || (AppRoleStatuses = {}));

/***/ }),

/***/ 82463:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoute: () => (/* binding */ AppRoute)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppRoute extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.parentId = 0;
    this.appPfm = '';
    this.name = '';
    this.icon = null;
    this.path = null;
    this.startAt = new Date();
    this.endAt = null;
    this.sort = 0;
  }
}

/***/ }),

/***/ 46048:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-user-role.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRole: () => (/* binding */ AppUserRole)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppUserRole extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appUserId = 0;
    this.appRoleId = 0;
  }
}

/***/ }),

/***/ 60819:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/entities/app-user.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUser: () => (/* binding */ AppUser),
/* harmony export */   AppUserStatuses: () => (/* binding */ AppUserStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class AppUser extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.appPfm = '';
    this.account = '';
    this.password = '';
    this.avatarAttId = 0;
    this.startAt = new Date();
    this.endAt = null;
    this.status = AppUserStatuses.啟用;
  }
}
var AppUserStatuses;
(function (AppUserStatuses) {
  AppUserStatuses[AppUserStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  AppUserStatuses[AppUserStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(AppUserStatuses || (AppUserStatuses = {}));

/***/ }),

/***/ 69336:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/entities/banner-ad.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAd: () => (/* binding */ BannerAd),
/* harmony export */   BannerAdStatuses: () => (/* binding */ BannerAdStatuses)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 78134);

class BannerAd extends _shared__WEBPACK_IMPORTED_MODULE_0__.EntityBase {
  constructor() {
    super();
    this.id = 0;
    this.title = '';
    this.desc = null;
    this.startAt = new Date();
    this.endAt = null;
    this.status = +BannerAdStatuses.發佈;
    this.coverAttId = 0;
    this.sort = 0;
  }
}
var BannerAdStatuses;
(function (BannerAdStatuses) {
  BannerAdStatuses[BannerAdStatuses["\u767C\u4F48"] = 60] = "\u767C\u4F48";
  BannerAdStatuses[BannerAdStatuses["\u4E0B\u67B6"] = 100] = "\u4E0B\u67B6";
})(BannerAdStatuses || (BannerAdStatuses = {}));

/***/ }),

/***/ 63204:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/entities/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* reexport safe */ _app_admin__WEBPACK_IMPORTED_MODULE_0__.AppAdmin),
/* harmony export */   AppFileAtt: () => (/* reexport safe */ _app_file_att__WEBPACK_IMPORTED_MODULE_1__.AppFileAtt),
/* harmony export */   AppNewsMsg: () => (/* reexport safe */ _app_news_msg__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsg),
/* harmony export */   AppNewsMsgCat: () => (/* reexport safe */ _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* reexport safe */ _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatStatuses),
/* harmony export */   AppNewsMsgStatuses: () => (/* reexport safe */ _app_news_msg__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgStatuses),
/* harmony export */   AppObjectStore: () => (/* reexport safe */ _app_object_store__WEBPACK_IMPORTED_MODULE_4__.AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* reexport safe */ _app_object_store__WEBPACK_IMPORTED_MODULE_4__.AppObjectStoreCodes),
/* harmony export */   AppRole: () => (/* reexport safe */ _app_role__WEBPACK_IMPORTED_MODULE_6__.AppRole),
/* harmony export */   AppRoleRoute: () => (/* reexport safe */ _app_role_route__WEBPACK_IMPORTED_MODULE_5__.AppRoleRoute),
/* harmony export */   AppRoleStatuses: () => (/* reexport safe */ _app_role__WEBPACK_IMPORTED_MODULE_6__.AppRoleStatuses),
/* harmony export */   AppRoute: () => (/* reexport safe */ _app_route__WEBPACK_IMPORTED_MODULE_7__.AppRoute),
/* harmony export */   AppUser: () => (/* reexport safe */ _app_user__WEBPACK_IMPORTED_MODULE_9__.AppUser),
/* harmony export */   AppUserRole: () => (/* reexport safe */ _app_user_role__WEBPACK_IMPORTED_MODULE_8__.AppUserRole),
/* harmony export */   AppUserStatuses: () => (/* reexport safe */ _app_user__WEBPACK_IMPORTED_MODULE_9__.AppUserStatuses),
/* harmony export */   BannerAd: () => (/* reexport safe */ _banner_ad__WEBPACK_IMPORTED_MODULE_10__.BannerAd),
/* harmony export */   BannerAdStatuses: () => (/* reexport safe */ _banner_ad__WEBPACK_IMPORTED_MODULE_10__.BannerAdStatuses)
/* harmony export */ });
/* harmony import */ var _app_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin */ 57453);
/* harmony import */ var _app_file_att__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-file-att */ 10464);
/* harmony import */ var _app_news_msg_cat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-cat */ 81042);
/* harmony import */ var _app_news_msg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-news-msg */ 83335);
/* harmony import */ var _app_object_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-object-store */ 99391);
/* harmony import */ var _app_role_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-role-route */ 28096);
/* harmony import */ var _app_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-role */ 36424);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-route */ 82463);
/* harmony import */ var _app_user_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-user-role */ 46048);
/* harmony import */ var _app_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-user */ 60819);
/* harmony import */ var _banner_ad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad */ 69336);












/***/ }),

/***/ 93146:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/models/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdmin: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppAdmin),
/* harmony export */   AppAdminDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppAdminDto),
/* harmony export */   AppAdminReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppAdminReq),
/* harmony export */   AppFileAtt: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppFileAtt),
/* harmony export */   AppFileAttDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppFileAttDto),
/* harmony export */   AppNewsMsg: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsg),
/* harmony export */   AppNewsMsgCat: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCat),
/* harmony export */   AppNewsMsgCatDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgCatDto),
/* harmony export */   AppNewsMsgCatReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgCatReq),
/* harmony export */   AppNewsMsgCatStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses),
/* harmony export */   AppNewsMsgContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgContentJto),
/* harmony export */   AppNewsMsgDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgDto),
/* harmony export */   AppNewsMsgReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppNewsMsgReq),
/* harmony export */   AppNewsMsgStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses),
/* harmony export */   AppObjectStore: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppObjectStore),
/* harmony export */   AppObjectStoreCodes: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppObjectStoreCodes),
/* harmony export */   AppObjectStoreDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppObjectStoreDto),
/* harmony export */   AppRole: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRole),
/* harmony export */   AppRoleDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppRoleDto),
/* harmony export */   AppRoleReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppRoleReq),
/* harmony export */   AppRoleRoute: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRoleRoute),
/* harmony export */   AppRoleRouteDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppRoleRouteDto),
/* harmony export */   AppRoleRouteReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppRoleRouteReq),
/* harmony export */   AppRoleStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses),
/* harmony export */   AppRoute: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppRoute),
/* harmony export */   AppRouteDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppRouteDto),
/* harmony export */   AppRouteReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppRouteReq),
/* harmony export */   AppTokenInfo: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.AppTokenInfo),
/* harmony export */   AppUser: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppUser),
/* harmony export */   AppUserDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppUserDto),
/* harmony export */   AppUserReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppUserReq),
/* harmony export */   AppUserRole: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppUserRole),
/* harmony export */   AppUserRoleDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.AppUserRoleDto),
/* harmony export */   AppUserRoleReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.AppUserRoleReq),
/* harmony export */   AppUserStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses),
/* harmony export */   AuthUserInfo: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.AuthUserInfo),
/* harmony export */   AuthUserRoute: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.AuthUserRoute),
/* harmony export */   BankAccountJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.BankAccountJto),
/* harmony export */   BannerAd: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.BannerAd),
/* harmony export */   BannerAdDto: () => (/* reexport safe */ _dtos__WEBPACK_IMPORTED_MODULE_0__.BannerAdDto),
/* harmony export */   BannerAdReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.BannerAdReq),
/* harmony export */   BannerAdStatuses: () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses),
/* harmony export */   CampRegContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CampRegContentJto),
/* harmony export */   CampaignContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CampaignContentJto),
/* harmony export */   ChangePasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordReq),
/* harmony export */   CustGroupContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CustGroupContentJto),
/* harmony export */   CustMemberContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CustMemberContentJto),
/* harmony export */   CustOrderRefundContentJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.CustOrderRefundContentJto),
/* harmony export */   EntityBase: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.EntityBaseStatuses),
/* harmony export */   ForgetPasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ForgetPasswordReq),
/* harmony export */   OrgAboutJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.OrgAboutJto),
/* harmony export */   OrgContactJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.OrgContactJto),
/* harmony export */   PagingRequest: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.PagingRequest),
/* harmony export */   PagingResponse: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.PagingResponse),
/* harmony export */   PayInfo: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.PayInfo),
/* harmony export */   QueryRequestBase: () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_4__.QueryRequestBase),
/* harmony export */   ResetPasswordReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordReq),
/* harmony export */   SigninReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.SigninReq),
/* harmony export */   UploadFormReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.UploadFormReq),
/* harmony export */   WebPolicyJto: () => (/* reexport safe */ _jtos__WEBPACK_IMPORTED_MODULE_2__.WebPolicyJto),
/* harmony export */   ZipCodeReq: () => (/* reexport safe */ _requests__WEBPACK_IMPORTED_MODULE_3__.ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dtos */ 44205);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ 63204);
/* harmony import */ var _jtos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jtos */ 5851);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests */ 9769);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ 78134);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views */ 41775);







/***/ }),

/***/ 96896:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/app-news-msg-content-jto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgContentJto: () => (/* binding */ AppNewsMsgContentJto)
/* harmony export */ });
class AppNewsMsgContentJto {
  constructor() {
    this.desc = '';
  }
}

/***/ }),

/***/ 59373:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/bank-account-jto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankAccountJto: () => (/* binding */ BankAccountJto)
/* harmony export */ });
class BankAccountJto {
  constructor() {
    this.bankName = '';
    this.branchName = '';
    this.accountNo = '';
    this.accountName = '';
  }
}

/***/ }),

/***/ 73079:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/camp-reg-content-jto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampRegContentJto: () => (/* binding */ CampRegContentJto)
/* harmony export */ });
class CampRegContentJto {
  constructor() {
    this.currJob = '';
  }
}

/***/ }),

/***/ 55759:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/campaign-content-jto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignContentJto: () => (/* binding */ CampaignContentJto)
/* harmony export */ });
class CampaignContentJto {
  constructor() {
    this.location = '';
    this.speakers = '';
    this.hasMeal = false;
    this.desc = '';
  }
}

/***/ }),

/***/ 59796:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-group-content-jto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustGroupContentJto: () => (/* binding */ CustGroupContentJto)
/* harmony export */ });
class CustGroupContentJto {
  constructor() {
    this.cpEducation = '';
    this.cpExperience = '';
  }
}

/***/ }),

/***/ 55937:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-member-content-jto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustMemberContentJto: () => (/* binding */ CustMemberContentJto)
/* harmony export */ });
class CustMemberContentJto {
  constructor() {
    this.education = '';
    this.experience = '';
    this.currJob = '';
  }
}

/***/ }),

/***/ 35558:
/*!************************************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/cust-order-refund-content-jto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustOrderRefundContentJto: () => (/* binding */ CustOrderRefundContentJto)
/* harmony export */ });
class CustOrderRefundContentJto {
  constructor() {
    this.memo = '';
  }
}

/***/ }),

/***/ 5851:
/*!************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgContentJto: () => (/* reexport safe */ _app_news_msg_content_jto__WEBPACK_IMPORTED_MODULE_0__.AppNewsMsgContentJto),
/* harmony export */   BankAccountJto: () => (/* reexport safe */ _bank_account_jto__WEBPACK_IMPORTED_MODULE_1__.BankAccountJto),
/* harmony export */   CampRegContentJto: () => (/* reexport safe */ _camp_reg_content_jto__WEBPACK_IMPORTED_MODULE_2__.CampRegContentJto),
/* harmony export */   CampaignContentJto: () => (/* reexport safe */ _campaign_content_jto__WEBPACK_IMPORTED_MODULE_3__.CampaignContentJto),
/* harmony export */   CustGroupContentJto: () => (/* reexport safe */ _cust_group_content_jto__WEBPACK_IMPORTED_MODULE_4__.CustGroupContentJto),
/* harmony export */   CustMemberContentJto: () => (/* reexport safe */ _cust_member_content_jto__WEBPACK_IMPORTED_MODULE_5__.CustMemberContentJto),
/* harmony export */   CustOrderRefundContentJto: () => (/* reexport safe */ _cust_order_refund_content_jto__WEBPACK_IMPORTED_MODULE_6__.CustOrderRefundContentJto),
/* harmony export */   OrgAboutJto: () => (/* reexport safe */ _org_about_jto__WEBPACK_IMPORTED_MODULE_7__.OrgAboutJto),
/* harmony export */   OrgContactJto: () => (/* reexport safe */ _org_contact_jto__WEBPACK_IMPORTED_MODULE_8__.OrgContactJto),
/* harmony export */   WebPolicyJto: () => (/* reexport safe */ _web_policy_jto__WEBPACK_IMPORTED_MODULE_9__.WebPolicyJto)
/* harmony export */ });
/* harmony import */ var _app_news_msg_content_jto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-news-msg-content-jto */ 96896);
/* harmony import */ var _bank_account_jto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-account-jto */ 59373);
/* harmony import */ var _camp_reg_content_jto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camp-reg-content-jto */ 73079);
/* harmony import */ var _campaign_content_jto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-content-jto */ 55759);
/* harmony import */ var _cust_group_content_jto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cust-group-content-jto */ 59796);
/* harmony import */ var _cust_member_content_jto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cust-member-content-jto */ 55937);
/* harmony import */ var _cust_order_refund_content_jto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-order-refund-content-jto */ 35558);
/* harmony import */ var _org_about_jto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./org-about-jto */ 43851);
/* harmony import */ var _org_contact_jto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./org-contact-jto */ 9298);
/* harmony import */ var _web_policy_jto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-policy-jto */ 5574);











/***/ }),

/***/ 43851:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/org-about-jto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgAboutJto: () => (/* binding */ OrgAboutJto)
/* harmony export */ });
class OrgAboutJto {
  constructor() {
    this.charter = null;
  }
}

/***/ }),

/***/ 9298:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/org-contact-jto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgContactJto: () => (/* binding */ OrgContactJto)
/* harmony export */ });
class OrgContactJto {
  constructor() {
    this.contactDetails = [];
    this.socialMedia = [];
  }
}

/***/ }),

/***/ 5574:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/jtos/web-policy-jto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebPolicyJto: () => (/* binding */ WebPolicyJto)
/* harmony export */ });
class WebPolicyJto {
  constructor() {
    this.terms = null;
    this.privacy = null;
  }
}

/***/ }),

/***/ 7617:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-admin-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminReq: () => (/* binding */ AppAdminReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppAdminReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appUserStatus = 0;
  }
}

/***/ }),

/***/ 23472:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-news-msg-cat-req.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgCatReq: () => (/* binding */ AppNewsMsgCatReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppNewsMsgCatReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
  }
}

/***/ }),

/***/ 84817:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-news-msg-req.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNewsMsgReq: () => (/* binding */ AppNewsMsgReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppNewsMsgReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.catId = 0;
    this.uniqueId = null;
    this.takeCount = takeCount;
  }
}

/***/ }),

/***/ 16254:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-role-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleReq: () => (/* binding */ AppRoleReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppRoleReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appPfm = '';
  }
}

/***/ }),

/***/ 15914:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-role-route-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleRouteReq: () => (/* binding */ AppRoleRouteReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppRoleRouteReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appRoleId = 0;
    this.appRouteId = 0;
  }
}

/***/ }),

/***/ 67911:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-route-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteReq: () => (/* binding */ AppRouteReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppRouteReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.parentId = 0;
    this.appPfm = null;
  }
}

/***/ }),

/***/ 89077:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-user-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserReq: () => (/* binding */ AppUserReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppUserReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.account = '';
    this.appPfm = '';
  }
}

/***/ }),

/***/ 49512:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/app-user-role-req.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserRoleReq: () => (/* binding */ AppUserRoleReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class AppUserRoleReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.appUserId = 0;
    this.appRoleId = 0;
    this.appPfm = null;
  }
}

/***/ }),

/***/ 7876:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/banner-ad-req.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerAdReq: () => (/* binding */ BannerAdReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class BannerAdReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor(takeCount = 0) {
    super();
    this.takeCount = takeCount;
  }
}

/***/ }),

/***/ 39634:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/change-password-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordReq: () => (/* binding */ ChangePasswordReq)
/* harmony export */ });
class ChangePasswordReq {
  constructor() {
    this.appUserId = 0;
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}

/***/ }),

/***/ 64517:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/forget-password-req.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetPasswordReq: () => (/* binding */ ForgetPasswordReq)
/* harmony export */ });
class ForgetPasswordReq {
  constructor() {
    this.appPfm = '';
    this.account = '';
  }
}

/***/ }),

/***/ 9769:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/requests/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAdminReq: () => (/* reexport safe */ _app_admin_req__WEBPACK_IMPORTED_MODULE_0__.AppAdminReq),
/* harmony export */   AppNewsMsgCatReq: () => (/* reexport safe */ _app_news_msg_cat_req__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatReq),
/* harmony export */   AppNewsMsgReq: () => (/* reexport safe */ _app_news_msg_req__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgReq),
/* harmony export */   AppRoleReq: () => (/* reexport safe */ _app_role_req__WEBPACK_IMPORTED_MODULE_3__.AppRoleReq),
/* harmony export */   AppRoleRouteReq: () => (/* reexport safe */ _app_role_route_req__WEBPACK_IMPORTED_MODULE_4__.AppRoleRouteReq),
/* harmony export */   AppRouteReq: () => (/* reexport safe */ _app_route_req__WEBPACK_IMPORTED_MODULE_5__.AppRouteReq),
/* harmony export */   AppUserReq: () => (/* reexport safe */ _app_user_req__WEBPACK_IMPORTED_MODULE_6__.AppUserReq),
/* harmony export */   AppUserRoleReq: () => (/* reexport safe */ _app_user_role_req__WEBPACK_IMPORTED_MODULE_7__.AppUserRoleReq),
/* harmony export */   BannerAdReq: () => (/* reexport safe */ _banner_ad_req__WEBPACK_IMPORTED_MODULE_8__.BannerAdReq),
/* harmony export */   ChangePasswordReq: () => (/* reexport safe */ _change_password_req__WEBPACK_IMPORTED_MODULE_9__.ChangePasswordReq),
/* harmony export */   ForgetPasswordReq: () => (/* reexport safe */ _forget_password_req__WEBPACK_IMPORTED_MODULE_10__.ForgetPasswordReq),
/* harmony export */   ResetPasswordReq: () => (/* reexport safe */ _reset_password_req__WEBPACK_IMPORTED_MODULE_11__.ResetPasswordReq),
/* harmony export */   SigninReq: () => (/* reexport safe */ _signin_req__WEBPACK_IMPORTED_MODULE_12__.SigninReq),
/* harmony export */   UploadFormReq: () => (/* reexport safe */ _upload_form_req__WEBPACK_IMPORTED_MODULE_13__.UploadFormReq),
/* harmony export */   ZipCodeReq: () => (/* reexport safe */ _zip_code_req__WEBPACK_IMPORTED_MODULE_14__.ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _app_admin_req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-req */ 7617);
/* harmony import */ var _app_news_msg_cat_req__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news-msg-cat-req */ 23472);
/* harmony import */ var _app_news_msg_req__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-req */ 84817);
/* harmony import */ var _app_role_req__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role-req */ 16254);
/* harmony import */ var _app_role_route_req__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role-route-req */ 15914);
/* harmony import */ var _app_route_req__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route-req */ 67911);
/* harmony import */ var _app_user_req__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-req */ 89077);
/* harmony import */ var _app_user_role_req__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-role-req */ 49512);
/* harmony import */ var _banner_ad_req__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-ad-req */ 7876);
/* harmony import */ var _change_password_req__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password-req */ 39634);
/* harmony import */ var _forget_password_req__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forget-password-req */ 64517);
/* harmony import */ var _reset_password_req__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password-req */ 52823);
/* harmony import */ var _signin_req__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin-req */ 32342);
/* harmony import */ var _upload_form_req__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-form-req */ 21942);
/* harmony import */ var _zip_code_req__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zip-code-req */ 38879);
















/***/ }),

/***/ 52823:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/reset-password-req.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordReq: () => (/* binding */ ResetPasswordReq)
/* harmony export */ });
class ResetPasswordReq {
  constructor() {
    this.appUserId = 0;
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}

/***/ }),

/***/ 32342:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/signin-req.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninReq: () => (/* binding */ SigninReq)
/* harmony export */ });
class SigninReq {
  constructor() {
    this.account = '';
    this.password = '';
    this.appPfm = '';
  }
}

/***/ }),

/***/ 21942:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/requests/upload-form-req.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFormReq: () => (/* binding */ UploadFormReq)
/* harmony export */ });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ 49482);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);

class UploadFormReq extends form_data__WEBPACK_IMPORTED_MODULE_0__ {
  constructor() {
    super();
    this.jsonContent = null;
  }
}

/***/ }),

/***/ 38879:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/requests/zip-code-req.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeReq: () => (/* binding */ ZipCodeReq)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared */ 78134);

class ZipCodeReq extends _shared__WEBPACK_IMPORTED_MODULE_0__.QueryRequestBase {
  constructor() {
    super();
    this.version = 3;
    this.code = null;
  }
}

/***/ }),

/***/ 17547:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/models/shared/app-env.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 22214:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/app-token-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTokenInfo: () => (/* binding */ AppTokenInfo)
/* harmony export */ });
class AppTokenInfo {
  constructor() {
    this.appUserName = '';
    this.accessToken = '';
  }
}

/***/ }),

/***/ 47965:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/auth-user-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthUserInfo: () => (/* binding */ AuthUserInfo)
/* harmony export */ });
class AuthUserInfo {
  constructor() {
    this.appPfm = '';
    this.appUserId = 0;
    this.adminId = 0;
    this.custId = 0;
    this.account = '';
    this.passwordExpAt = null;
    this.avatarAttId = null;
    this.name = '';
    this.status = 0;
    this.authUserRoutes = null;
  }
}

/***/ }),

/***/ 54084:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/auth-user-route.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthUserRoute: () => (/* binding */ AuthUserRoute)
/* harmony export */ });
class AuthUserRoute {
  constructor() {
    this.appPfm = '';
    this.appUserId = 0;
    this.id = 0;
    this.parentId = 0;
    this.name = '';
    this.icon = null;
    this.path = null;
    this.sort = 0;
  }
}

/***/ }),

/***/ 46285:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/camp-attend-stat.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55813:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/entity-base.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityBase: () => (/* binding */ EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* binding */ EntityBaseStatuses)
/* harmony export */ });
class EntityBase {
  constructor() {
    this.crtBy = 0;
    this.crtAt = new Date();
    this.updBy = 0;
    this.updAt = new Date();
    this.delAt = new Date('2999-12-31T00:00:00.000Z');
  }
}
var EntityBaseStatuses;
(function (EntityBaseStatuses) {
  EntityBaseStatuses[EntityBaseStatuses["\u555F\u7528"] = 60] = "\u555F\u7528";
  EntityBaseStatuses[EntityBaseStatuses["\u505C\u7528"] = 100] = "\u505C\u7528";
})(EntityBaseStatuses || (EntityBaseStatuses = {}));

/***/ }),

/***/ 78134:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/models/shared/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTokenInfo: () => (/* reexport safe */ _app_token_info__WEBPACK_IMPORTED_MODULE_1__.AppTokenInfo),
/* harmony export */   AuthUserInfo: () => (/* reexport safe */ _auth_user_info__WEBPACK_IMPORTED_MODULE_2__.AuthUserInfo),
/* harmony export */   AuthUserRoute: () => (/* reexport safe */ _auth_user_route__WEBPACK_IMPORTED_MODULE_3__.AuthUserRoute),
/* harmony export */   EntityBase: () => (/* reexport safe */ _entity_base__WEBPACK_IMPORTED_MODULE_5__.EntityBase),
/* harmony export */   EntityBaseStatuses: () => (/* reexport safe */ _entity_base__WEBPACK_IMPORTED_MODULE_5__.EntityBaseStatuses),
/* harmony export */   PagingRequest: () => (/* reexport safe */ _paging_request__WEBPACK_IMPORTED_MODULE_6__.PagingRequest),
/* harmony export */   PagingResponse: () => (/* reexport safe */ _paging_response__WEBPACK_IMPORTED_MODULE_7__.PagingResponse),
/* harmony export */   PayInfo: () => (/* reexport safe */ _pay_info__WEBPACK_IMPORTED_MODULE_8__.PayInfo),
/* harmony export */   QueryRequestBase: () => (/* reexport safe */ _query_request_base__WEBPACK_IMPORTED_MODULE_9__.QueryRequestBase)
/* harmony export */ });
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-env */ 17547);
/* harmony import */ var _app_token_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-token-info */ 22214);
/* harmony import */ var _auth_user_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-user-info */ 47965);
/* harmony import */ var _auth_user_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-user-route */ 54084);
/* harmony import */ var _camp_attend_stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camp-attend-stat */ 46285);
/* harmony import */ var _entity_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entity-base */ 55813);
/* harmony import */ var _paging_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paging-request */ 28632);
/* harmony import */ var _paging_response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paging-response */ 662);
/* harmony import */ var _pay_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pay-info */ 31429);
/* harmony import */ var _query_request_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./query-request-base */ 88374);
/* harmony import */ var _renew_membership_result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renew-membership-result */ 70508);
/* harmony import */ var _value_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./value-info */ 40608);













/***/ }),

/***/ 28632:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/models/shared/paging-request.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingRequest: () => (/* binding */ PagingRequest)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);

class PagingRequest {
  constructor() {
    this.queryRequest = {};
    this.pageIndex = _consts__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_INDEX;
    this.pageSize = _consts__WEBPACK_IMPORTED_MODULE_0__.PAGING_DEFAULT_PAGE_SIZE;
  }
}

/***/ }),

/***/ 662:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/paging-response.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingResponse: () => (/* binding */ PagingResponse)
/* harmony export */ });
class PagingResponse {
  constructor() {
    this.rows = [];
    this.totalCount = 0;
    this.pageIndex = 0;
    this.pageSize = 0;
    this.totalPages = 0;
    this.hasPreviousPage = false;
    this.hasNextPage = false;
  }
}

/***/ }),

/***/ 31429:
/*!*****************************************************!*\
  !*** ./libs/core/src/lib/models/shared/pay-info.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayInfo: () => (/* binding */ PayInfo)
/* harmony export */ });
class PayInfo {
  constructor() {
    this.isPayable = false;
    this.allowPayFlow = false;
    this.postReq = null;
  }
}

/***/ }),

/***/ 88374:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/query-request-base.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryRequestBase: () => (/* binding */ QueryRequestBase)
/* harmony export */ });
class QueryRequestBase {
  constructor() {
    this.id = 0;
    this.type = 0;
    this.status = 0;
    this.startStatus = 0;
    this.endStatus = 0;
    this.activeAt = null;
    this.startAt = null;
    this.endAt = null;
    this.startTimeAt = null;
    this.endTimeAt = null;
    this.takeCount = 0;
    this.queryString = null;
    this.isShowContent = false;
  }
}

/***/ }),

/***/ 70508:
/*!********************************************************************!*\
  !*** ./libs/core/src/lib/models/shared/renew-membership-result.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 40608:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/models/shared/value-info.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 35458:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-admin-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55801:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-news-msg-cat-view.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 40926:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-news-msg-view.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 82875:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-role-route-view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55247:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-role-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 45772:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-route-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6365:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-user-role-view.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 68070:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/app-user-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8953:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/models/views/banner-ad-view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 41775:
/*!*************************************************!*\
  !*** ./libs/core/src/lib/models/views/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_admin_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-admin-view */ 35458);
/* harmony import */ var _app_news_msg_cat_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news-msg-cat-view */ 55801);
/* harmony import */ var _app_news_msg_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news-msg-view */ 40926);
/* harmony import */ var _app_role_route_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role-route-view */ 82875);
/* harmony import */ var _app_role_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role-view */ 55247);
/* harmony import */ var _app_route_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route-view */ 45772);
/* harmony import */ var _app_user_role_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-user-role-view */ 6365);
/* harmony import */ var _app_user_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-user-view */ 68070);
/* harmony import */ var _banner_ad_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-ad-view */ 8953);
/* harmony import */ var _zip_code_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zip-code-view */ 25244);











/***/ }),

/***/ 25244:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/models/views/zip-code-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 89433:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/services/app-attach.api.serv.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAttachApiServ: () => (/* binding */ AppAttachApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);


// Custom packages



class AppAttachApiServ {
  constructor(appEnv, http) {
    this.appEnv = appEnv;
    this.http = http;
    this.baseUrl = '/AppAttach';
  }
  //#region Shared
  uploadCdnFiles(request) {
    return this.http.post(`${this.baseUrl}/UploadCdnFiles`, request);
  }
  //#endregion
  //#region AppFileAtt
  downloadAppFileAtt(id) {
    return this.http.get(`${this.appEnv.downloadUrl}/${id}`, {
      responseType: 'blob'
    });
  }
  getAppFileAttObjectUrl(id) {
    return this.downloadAppFileAtt(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => URL.createObjectURL(res)));
  }
  static {
    this.ɵfac = function AppAttachApiServ_Factory(t) {
      return new (t || AppAttachApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AppAttachApiServ,
      factory: AppAttachApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 29544:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-auth.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthApiServ: () => (/* binding */ AppAuthApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 15463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);




// Custom packages
// import { StoreService } from 'src/app/services/store.service';






class AppAuthApiServ {
  constructor(appEnv, http, storeServ, permissionServ, router) {
    this.appEnv = appEnv;
    this.http = http;
    this.storeServ = storeServ;
    this.permissionServ = permissionServ;
    this.router = router;
    this.baseUrl = '/AppAuth';
    this.currToken = null;
    this.currUser = null;
    this.getCurrUser();
  }
  get isSignin() {
    if (this.hasAccessToken) {
      return true;
    }
    return false;
  }
  get hasAccessToken() {
    const tokenStr = this.getAccessToken()?.accessToken;
    if (!tokenStr || tokenStr.length <= 0) {
      return false;
    }
    return true;
  }
  signin(request) {
    let reqUrl = '';
    switch (this.appEnv.appPfm) {
      case 'WEB':
        {
          reqUrl = `${this.baseUrl}/SigninWEB`;
          break;
        }
      case 'CMS':
        {
          reqUrl = `${this.baseUrl}/SigninCMS`;
          break;
        }
      default:
        {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('無法取得有效的登入平台來源。'));
        }
    }
    return this.http.put(reqUrl, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(tokenInfo => {
      if (!tokenInfo || !tokenInfo?.accessToken) {
        return null;
      }
      this.currToken = tokenInfo;
      this.setAppTokenToStorage();
      return this.currToken;
    }));
  }
  signout(isNavigateSignin = true) {
    this.currToken = null;
    this.currUser = null;
    this.removeUserToStorage();
    this.storeServ.initCurrAuthUserCache();
    if (isNavigateSignin) {
      this.router.navigate(['auth/signin']);
    }
  }
  getCurrUser(isRefresh = false) {
    const tokenStr = this.getAccessToken()?.accessToken;
    if (!tokenStr || tokenStr.length <= 0) {
      this.currUser = null;
      return this.currUser;
    }
    if (isRefresh) {
      this.currUser = null;
    }
    if (!this.currUser && typeof window !== 'undefined') {
      this.getAuthUserFromStorage();
    }
    // 權限清單更新，搭配Pipe使用
    this.permissionServ.setAuthRoutes(this.currUser?.authUserRoutes || []);
    return this.currUser;
  }
  getAccessToken() {
    if (!this.currToken && typeof window !== 'undefined') {
      this.getAppTokenFromStorage();
    }
    return this.currToken;
  }
  getAppTokenFromStorage() {
    if (typeof window === 'undefined') {
      return null;
    }
    const tokenInfo = window.localStorage.getItem(this.appEnv.storageTokenName);
    if (!tokenInfo) {
      return null;
    }
    this.currToken = JSON.parse(tokenInfo);
    return this.currToken;
  }
  getAuthUserFromStorage() {
    if (typeof window === 'undefined') {
      return null;
    }
    const userInfo = window.sessionStorage.getItem(this.appEnv.storageAuthUserName);
    if (!userInfo) {
      return null;
    }
    this.currUser = JSON.parse(userInfo);
    return this.currUser;
  }
  setAppTokenToStorage() {
    if (typeof window === 'undefined') {
      return;
    }
    this.removeUserToStorage();
    window.localStorage.setItem(this.appEnv.storageTokenName, JSON.stringify(this.currToken));
  }
  removeUserToStorage() {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.removeItem(this.appEnv.storageTokenName);
    window.sessionStorage.removeItem(this.appEnv.storageAuthUserName);
  }
  static {
    this.ɵfac = function AppAuthApiServ_Factory(t) {
      return new (t || AppAuthApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.StoreServ), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.PermissionServ), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AppAuthApiServ,
      factory: AppAuthApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 28079:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/app-msg.api.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMsgApiServ: () => (/* binding */ AppMsgApiServ)
/* harmony export */ });
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 94485);

// Third party packages

// Custom packages



class AppMsgApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppMsg';
    this.appNewsMsgCatStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses;
    this.appNewsMsgCatStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses);
    this.appNewsMsgStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses;
    this.appNewsMsgStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses);
    this.bannerAdStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses;
    this.bannerAdStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses);
  }
  //#region AppNewsMsgCat
  getAppNewsMsgCatStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatStatuses.停用,
      style: 'error'
    }];
  }
  getAppNewsMsgCatDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgCatDtoById/${id}`);
  }
  getAppNewsMsgCatViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgCatViewById/${id}`);
  }
  getAppNewsMsgCatViewByUniqueId(uniqueId) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgCatViewByUniqueId/${uniqueId}`);
  }
  getAppNewsMsgCatViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgCatReq()) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgCatViews`, request);
  }
  getAppNewsMsgCatViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgCatViewsPaging`, request);
  }
  disableAppNewsMsgCat(id) {
    return this.http.put(`${this.baseUrl}/DisableAppNewsMsgCat/${id}`, null);
  }
  enableAppNewsMsgCat(id) {
    return this.http.put(`${this.baseUrl}/EnableAppNewsMsgCat/${id}`, null);
  }
  setAppNewsMsgCatDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppNewsMsgCatDto`, request);
  }
  //#endregion
  //#region AppNewsMsg
  getAppNewsMsgStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '發佈',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses.發佈,
      style: 'success'
    }, {
      name: '下架',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgStatuses.下架,
      style: 'error'
    }];
  }
  getAppNewsMsgDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgDtoById/${id}`);
  }
  getAppNewsMsgViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgViewById/${id}`);
  }
  getAppNewsMsgViewByUniqueId(uniqueId) {
    return this.http.get(`${this.baseUrl}/GetAppNewsMsgViewByUniqueId/${uniqueId}`);
  }
  getAppNewsMsgViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppNewsMsgReq(5)) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgViews`, request);
  }
  getAppNewsMsgViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppNewsMsgViewsPaging`, request);
  }
  disableAppNewsMsg(id) {
    return this.http.put(`${this.baseUrl}/DisableAppNewsMsg/${id}`, null);
  }
  enableAppNewsMsg(id) {
    return this.http.put(`${this.baseUrl}/EnableAppNewsMsg/${id}`, null);
  }
  setAppNewsMsgDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppNewsMsgDto`, request);
  }
  //#endregion
  //#region BannerAd
  getBannerAdStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return [{
      name: '發佈',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses.發佈,
      style: 'success'
    }, {
      name: '下架',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdStatuses.下架,
      style: 'error'
    }];
  }
  getBannerAdDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetBannerAdDtoById/${id}`);
  }
  getBannerAdViewById(id) {
    return this.http.get(`${this.baseUrl}/GetBannerAdViewById/${id}`);
  }
  getBannerAdViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.BannerAdReq()) {
    return this.http.put(`${this.baseUrl}/GetBannerAdViews`, request);
  }
  getBannerAdViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetBannerAdViewsPaging`, request);
  }
  disableBannerAd(id) {
    return this.http.put(`${this.baseUrl}/DisableBannerAd/${id}`, null);
  }
  enableBannerAd(id) {
    return this.http.put(`${this.baseUrl}/EnableBannerAd/${id}`, null);
  }
  uploadBannerAdDto(request) {
    return this.http.post(`${this.baseUrl}/UploadBannerAdDto`, request);
  }
  static {
    this.ɵfac = function AppMsgApiServ_Factory(t) {
      return new (t || AppMsgApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AppMsgApiServ,
      factory: AppMsgApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 27426:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-role.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoleApiServ: () => (/* binding */ AppRoleApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 94485);


// Thired party packages

// Custom packages



class AppRoleApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppRole';
    this.appRoleStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses);
  }
  //#region AppRole
  getAppRoleStatuses() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses));
  }
  getAppRoleStatusInfos() {
    const infos = [{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppRoleStatuses.停用,
      style: 'error'
    }];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(infos);
  }
  getAppRoleDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppRoleDtoById/${id}`);
  }
  getAppRoleViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppRoleViewById/${id}`);
  }
  getAppRoleViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppRoleReq()) {
    return this.http.put(`${this.baseUrl}/GetAppRoleViews`, request);
  }
  getAppRoleViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppRoleViewsPaging`, request);
  }
  setAppRoleDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppRoleDto`, request);
  }
  //#endregion
  //#region AppRoute
  getActiveAppRouteViews(request = new _models__WEBPACK_IMPORTED_MODULE_1__.AppRouteReq()) {
    return this.http.put(`${this.baseUrl}/GetActiveAppRouteViews`, request);
  }
  //#endregion
  //#region AppUserRole
  getAppUserRoleDtosByAppUserId(appUserId) {
    return this.http.get(`${this.baseUrl}/GetAppUserRoleDtosByAppUserId/${appUserId}`);
  }
  setAppUserRoleDtos(request) {
    return this.http.post(`${this.baseUrl}/SetAppUserRoleDtos`, request);
  }
  static {
    this.ɵfac = function AppRoleApiServ_Factory(t) {
      return new (t || AppRoleApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AppRoleApiServ,
      factory: AppRoleApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 62019:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/services/app-store.api.serv.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStoreApiServ: () => (/* binding */ AppStoreApiServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 94485);



class AppStoreApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/AppStore';
  }
  //#region AppObjectStore
  getAppObjectStoreValueByCode(code) {
    return this.http.get(`${this.baseUrl}/GetAppObjectStoreValueByCode/${code}`);
  }
  getAppObjectStoreByCode(code) {
    return this.http.get(`${this.baseUrl}/GetAppObjectStoreByCode/${code}`);
  }
  setAppObjectStore(request) {
    return this.http.post(`${this.baseUrl}/SetAppObjectStore`, request);
  }
  static {
    this.ɵfac = function AppStoreApiServ_Factory(t) {
      return new (t || AppStoreApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppStoreApiServ,
      factory: AppStoreApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 25599:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/services/app-user.api.serv.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUserApiServ: () => (/* binding */ AppUserApiServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 94485);


// Custom packages


// Third party packages



class AppUserApiServ {
  constructor(appEnv, http) {
    this.appEnv = appEnv;
    this.http = http;
    this.baseUrl = '/AppUser';
    this.appUserStatuses = _models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses;
    this.appUserStatusOpts = enum_values__WEBPACK_IMPORTED_MODULE_2__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses);
  }
  //#region AppAdmin
  getCurrAppAdminDto() {
    return this.http.get(`${this.baseUrl}/GetCurrAppAdminDto`);
  }
  getCurrAppAdminView() {
    return this.http.get(`${this.baseUrl}/GetCurrAppAdminView`);
  }
  getAppAdminDtoById(id) {
    return this.http.get(`${this.baseUrl}/GetAppAdminDtoById/${id}`);
  }
  getAppAdminViewById(id) {
    return this.http.get(`${this.baseUrl}/GetAppAdminViewById/${id}`);
  }
  getAppAdminOptions(request) {
    return this.http.put(`${this.baseUrl}/GetAppAdminOptions`, request);
  }
  getAppAdminViewsPaging(request) {
    return this.http.put(`${this.baseUrl}/GetAppAdminViewsPaging`, request);
  }
  setCurrAppAdminDto(request) {
    return this.http.post(`${this.baseUrl}/SetCurrAppAdminDto`, request);
  }
  setAppAdminDto(request) {
    return this.http.post(`${this.baseUrl}/SetAppAdminDto`, request);
  }
  //#endregion
  //#region AppUser
  getAppUserStatuses() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(enum_values__WEBPACK_IMPORTED_MODULE_2__.EnumValues.getNamesAndValues(_models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses));
  }
  getAppUserStatusInfos() {
    // 樣式遵循 ant nzColor 標準
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
      name: '啟用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses.啟用,
      style: 'success'
    }, {
      name: '停用',
      value: _models__WEBPACK_IMPORTED_MODULE_1__.AppUserStatuses.停用,
      style: 'error'
    }]);
  }
  getCurrAuthUserInfo() {
    return this.http.get(`${this.baseUrl}/GetCurrAuthUserInfo`);
  }
  changeCurrAppUserPassword(request) {
    return this.http.post(`${this.baseUrl}/ChangeCurrAppUserPassword`, request);
  }
  deleteCurrAppUser() {
    return this.http.delete(`${this.baseUrl}/DeleteCurrAppUser`);
  }
  disableAppUser(id) {
    return this.http.put(`${this.baseUrl}/DisableAppUser/${id}`, null);
  }
  enableAppUser(id) {
    return this.http.put(`${this.baseUrl}/EnableAppUser/${id}`, null);
  }
  forgetPassword(request) {
    request.appPfm = this.appEnv.appPfm;
    return this.http.put(`${this.baseUrl}/ForgetPassword`, request);
  }
  static {
    this.ɵfac = function AppUserApiServ_Factory(t) {
      return new (t || AppUserApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AppUserApiServ,
      factory: AppUserApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 82348:
/*!*********************************************!*\
  !*** ./libs/core/src/lib/services/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAttachApiServ: () => (/* reexport safe */ _app_attach_api_serv__WEBPACK_IMPORTED_MODULE_0__.AppAttachApiServ),
/* harmony export */   AppAuthApiServ: () => (/* reexport safe */ _app_auth_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAuthApiServ),
/* harmony export */   AppMsgApiServ: () => (/* reexport safe */ _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_2__.AppMsgApiServ),
/* harmony export */   AppPfms: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__.AppPfms),
/* harmony export */   AppRoleApiServ: () => (/* reexport safe */ _app_role_api_serv__WEBPACK_IMPORTED_MODULE_3__.AppRoleApiServ),
/* harmony export */   AppStoreApiServ: () => (/* reexport safe */ _app_store_api_serv__WEBPACK_IMPORTED_MODULE_4__.AppStoreApiServ),
/* harmony export */   AppUserApiServ: () => (/* reexport safe */ _app_user_api_serv__WEBPACK_IMPORTED_MODULE_5__.AppUserApiServ),
/* harmony export */   Genders: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__.Genders),
/* harmony export */   PermissionServ: () => (/* reexport safe */ _permission_serv__WEBPACK_IMPORTED_MODULE_6__.PermissionServ),
/* harmony export */   SEOServ: () => (/* reexport safe */ _seo_serv__WEBPACK_IMPORTED_MODULE_7__.SEOServ),
/* harmony export */   SharedDataApiServ: () => (/* reexport safe */ _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_8__.SharedDataApiServ),
/* harmony export */   SharedDataServ: () => (/* reexport safe */ _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__.SharedDataServ),
/* harmony export */   SharedFuncServ: () => (/* reexport safe */ _shared_func_serv__WEBPACK_IMPORTED_MODULE_10__.SharedFuncServ),
/* harmony export */   StoreServ: () => (/* reexport safe */ _store_serv__WEBPACK_IMPORTED_MODULE_11__.StoreServ)
/* harmony export */ });
/* harmony import */ var _app_attach_api_serv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-attach.api.serv */ 89433);
/* harmony import */ var _app_auth_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-auth.api.serv */ 29544);
/* harmony import */ var _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-msg.api.serv */ 28079);
/* harmony import */ var _app_role_api_serv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-role.api.serv */ 27426);
/* harmony import */ var _app_store_api_serv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-store.api.serv */ 62019);
/* harmony import */ var _app_user_api_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-user.api.serv */ 25599);
/* harmony import */ var _permission_serv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permission.serv */ 61715);
/* harmony import */ var _seo_serv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seo.serv */ 8535);
/* harmony import */ var _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-data.api.serv */ 74826);
/* harmony import */ var _shared_data_serv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-data.serv */ 76280);
/* harmony import */ var _shared_func_serv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-func.serv */ 40966);
/* harmony import */ var _store_serv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store.serv */ 187);













/***/ }),

/***/ 61715:
/*!*******************************************************!*\
  !*** ./libs/core/src/lib/services/permission.serv.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionServ: () => (/* binding */ PermissionServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class PermissionServ {
  constructor() {
    this.authRoutes = [];
  }
  setAuthRoutes(routes) {
    this.authRoutes = routes;
  }
  hasRoutePath(path) {
    return this.authRoutes.some(route => route.path === path);
  }
  static {
    this.ɵfac = function PermissionServ_Factory(t) {
      return new (t || PermissionServ)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PermissionServ,
      factory: PermissionServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8535:
/*!************************************************!*\
  !*** ./libs/core/src/lib/services/seo.serv.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEOServ: () => (/* binding */ SEOServ)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 74150);





class SEOServ {
  get metaTitle() {
    return this.title.getTitle();
  }
  set metaTitle(content) {
    if (!content) {
      this.title.setTitle(this.appEnv.siteName);
      return;
    }
    this.title.setTitle(content);
  }
  constructor(meta, title, injector) {
    this.meta = meta;
    this.title = title;
    this.injector = injector;
    this.appEnv = injector.get(_shared_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV);
    // this.initMetaTags();
  }

  initMetaTags() {
    this.metaTitle = '';
    this.meta.addTags([{
      property: 'og:site_name',
      content: this.appEnv.siteName
    }, {
      property: 'og:title',
      content: this.appEnv.siteName
    }, {
      property: 'og:url',
      content: this.appEnv.siteServer
    }, {
      property: 'og:image',
      content: `${this.appEnv.siteServer}/assets/image/og/tslmai.png`
    }, {
      property: 'og:description',
      content: this.appEnv.siteName
    }, {
      name: 'keywords',
      content: '蘊和堂'
    }, {
      name: 'description',
      content: this.appEnv.siteName
    }]);
  }
  updateMetaTags(title = this.appEnv.siteName, url = this.appEnv.siteServer, image = `${this.appEnv.siteServer}/assets/image/og/tslmai.png`, description = this.appEnv.siteName) {
    this.metaTitle = title;
    this.meta.updateTag({
      property: 'og:site_name',
      content: this.appEnv.siteName
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title
    });
    this.meta.updateTag({
      property: 'og:url',
      content: url
    });
    this.meta.updateTag({
      property: 'og:image',
      content: image
    });
    this.meta.updateTag({
      property: 'og:description',
      content: description
    });
    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }
  static {
    this.ɵfac = function SEOServ_Factory(t) {
      return new (t || SEOServ)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SEOServ,
      factory: SEOServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 74826:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/services/shared-data.api.serv.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedDataApiServ: () => (/* binding */ SharedDataApiServ)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 94485);

// Custom packages



class SharedDataApiServ {
  constructor(http) {
    this.http = http;
    this.baseUrl = '/SharedData';
  }
  //#region ZipCode
  getZipCodeViews(request = new _models__WEBPACK_IMPORTED_MODULE_0__.ZipCodeReq()) {
    return this.http.put(`${this.baseUrl}/GetZipCodeViews`, request);
  }
  static {
    this.ɵfac = function SharedDataApiServ_Factory(t) {
      return new (t || SharedDataApiServ)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SharedDataApiServ,
      factory: SharedDataApiServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 76280:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/shared-data.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPfms: () => (/* binding */ AppPfms),
/* harmony export */   Genders: () => (/* binding */ Genders),
/* harmony export */   SharedDataServ: () => (/* binding */ SharedDataServ)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enum-values */ 48065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);

// Thired party packages


class SharedDataServ {
  constructor() {
    this.appPfmOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(AppPfms);
    this.genderOpts = enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(Genders);
  }
  getAppPfms() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(AppPfms));
  }
  getGenders() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(enum_values__WEBPACK_IMPORTED_MODULE_0__.EnumValues.getNamesAndValues(Genders));
  }
  static {
    this.ɵfac = function SharedDataServ_Factory(t) {
      return new (t || SharedDataServ)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SharedDataServ,
      factory: SharedDataServ.ɵfac,
      providedIn: 'root'
    });
  }
}
var AppPfms;
(function (AppPfms) {
  AppPfms["WEB"] = "WEB";
  AppPfms["CMS"] = "CMS";
})(AppPfms || (AppPfms = {}));
var Genders;
(function (Genders) {
  Genders["\u7537"] = "M";
  Genders["\u5973"] = "F";
  Genders["\u975E\u4E8C\u5143\u6027\u5225"] = "N";
})(Genders || (Genders = {}));

/***/ }),

/***/ 40966:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/services/shared-func.serv.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedFuncServ: () => (/* binding */ SharedFuncServ)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 37286);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 23963);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 36896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);


// Thired party packages
class SharedFuncServ {
  doQueryTimeOptimize(request) {
    if (request.startTimeAt) {
      request.startAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(`${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(request.startAt || new Date(), 'yyyy-MM-dd')} ${request.startTimeAt}`);
    } else {
      if (request.startAt) {
        request.startAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfDay)(new Date(request.startAt || new Date()));
      }
    }
    if (request.endTimeAt) {
      request.endAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(`${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(request.endAt || new Date(), 'yyyy-MM-dd')} ${request.endTimeAt}:59`);
    } else {
      if (request.endAt) {
        request.endAt = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.endOfDay)(new Date(request.endAt || new Date()));
      }
    }
  }
  static {
    this.ɵfac = function SharedFuncServ_Factory(t) {
      return new (t || SharedFuncServ)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SharedFuncServ,
      factory: SharedFuncServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 187:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/services/store.serv.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreServ: () => (/* binding */ StoreServ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var _states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+states/curr-auth-user */ 34467);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ 93146);
/* harmony import */ var _app_msg_api_serv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-msg.api.serv */ 28079);
/* harmony import */ var _app_role_api_serv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-role.api.serv */ 27426);
/* harmony import */ var _shared_data_api_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-data.api.serv */ 74826);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 99797);


// import { BehaviorSubject, Observable } from 'rxjs';
// Third party packages


// Custom packages







class StoreServ {
  constructor(currAuthUserStore) {
    this.currAuthUserStore = currAuthUserStore;
    // Injects
    this._appMsgApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_app_msg_api_serv__WEBPACK_IMPORTED_MODULE_3__.AppMsgApiServ);
    this._appRoleApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_app_role_api_serv__WEBPACK_IMPORTED_MODULE_4__.AppRoleApiServ);
    this._sharedDataApiServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_shared_data_api_serv__WEBPACK_IMPORTED_MODULE_5__.SharedDataApiServ);
    // BehaviorSubject caches
    // Caches
    this.currAuthUserLoading$ = this.currAuthUserStore.select(_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.getCurrAuthUserLoading);
    this.currAuthUserCache$ = this.currAuthUserStore.select(_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.getCurrAuthUserCache);
    this._appNewsMsgCatsCache = null;
    this._appRoutesCache = null;
    this._appRolesCache = null;
    this._zipCodesCache = null;
  }
  // CurrAuthUserStore
  initCurrAuthUserCache() {
    this.currAuthUserStore.dispatch((0,_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.initialCurrAuthUserAction)());
  }
  getCurrAuthUserCache() {
    this.currAuthUserStore.dispatch((0,_states_curr_auth_user__WEBPACK_IMPORTED_MODULE_1__.requestCurrAuthUserAction)());
  }
  // AppNewsMsgCat cache
  getAppNewsMsgCatsCache() {
    if (this._appNewsMsgCatsCache === null) {
      const req = new _models__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatReq();
      req.status = +_models__WEBPACK_IMPORTED_MODULE_2__.AppNewsMsgCatStatuses.啟用;
      return this._appMsgApiServ.getAppNewsMsgCatViews(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appNewsMsgCatsCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._appNewsMsgCatsCache);
  }
  resetAppNewsMsgCatsCache() {
    this._appNewsMsgCatsCache = null;
  }
  // AppRole cache
  getAppRolesCache() {
    if (this._appRolesCache === null) {
      return this._appRoleApiServ.getAppRoleViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appRolesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._appRolesCache);
  }
  resetAppRolesCache() {
    this._appRolesCache = null;
  }
  // AppRoute cache
  getAppRoutesCache() {
    if (this._appRoutesCache === null) {
      return this._appRoleApiServ.getActiveAppRouteViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._appRoutesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._appRoutesCache);
  }
  resetAppRoutesCache() {
    this._appRoutesCache = null;
  }
  // ZipCode
  getZipCodesCache() {
    if (this._zipCodesCache === null) {
      return this._sharedDataApiServ.getZipCodeViews().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => res ? this._zipCodesCache = res : []));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this._zipCodesCache);
  }
  getZipCodeText(zipCodeId) {
    if (!zipCodeId) {
      return '';
    }
    if (this._zipCodesCache === null) {
      return '';
    }
    const zipCodeView = new linqts__WEBPACK_IMPORTED_MODULE_0__.List(this._zipCodesCache).Where(w => w?.id === zipCodeId).FirstOrDefault();
    if (!zipCodeView) {
      return '';
    }
    return `(${zipCodeView.code})${zipCodeView.city}${zipCodeView.district}`;
  }
  static {
    this.ɵfac = function StoreServ_Factory(t) {
      return new (t || StoreServ)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: StoreServ,
      factory: StoreServ.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 56767:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-base.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDBaseComponent: () => (/* binding */ BBDBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 39421);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/message */ 32703);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/notification */ 68135);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 16567);
/* harmony import */ var _extensions_array_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/array.extension */ 17890);
/* harmony import */ var _extensions_date_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/date.extension */ 35861);
/* harmony import */ var _extensions_string_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/string.extension */ 33060);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ 45963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _bbd_notify_bbd_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbd-notify/bbd-notify.service */ 9998);


// Antd packages




// Third party packages

// Custom packages






class BBDBaseComponent {
  // Gets & Sets
  get isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId);
  }
  get isSignin() {
    return this.appAuthApiServ.isSignin;
  }
  get currAccessToken() {
    return this.appAuthApiServ.getAccessToken();
  }
  get currUserInfo() {
    return this.appAuthApiServ.getCurrUser();
  }
  constructor(injector) {
    this.injector = injector;
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID);
    this.formHelper = _helpers__WEBPACK_IMPORTED_MODULE_3__.FormHelper;
    this.dateHelper = _helpers__WEBPACK_IMPORTED_MODULE_3__.DateHelper;
    this.appEnv = injector.get(_helpers__WEBPACK_IMPORTED_MODULE_3__.APP_ENV);
    this.appAuthApiServ = injector.get(_services__WEBPACK_IMPORTED_MODULE_4__.AppAuthApiServ);
    this.drawerServ = injector.get(ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__.NzDrawerService);
    this.messageServ = injector.get(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__.NzMessageService);
    this.modalServ = injector.get(ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalService);
    this.notificationServ = injector.get(ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_11__.NzNotificationService);
    this.spinnerServ = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService);
    this.storeServ = injector.get(_services__WEBPACK_IMPORTED_MODULE_4__.StoreServ);
    this.bbdNotifyServ = injector.get(_bbd_notify_bbd_notify_service__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyService);
  }
  // Funcs
  combineDownloadAttUrl(attId) {
    return `${this.appEnv.apiServer}${this.appEnv.downloadUrl}/${attId}`;
  }
  combineCdnUrl(filePath) {
    if (!filePath || filePath.isUndefinedOrNullOrEmpty()) return '';
    return `${this.appEnv.cdnServer}${filePath.startsWith('/') ? '' : '/'}${filePath}`;
  }
}

/***/ }),

/***/ 39930:
/*!************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-confirm-dialog/bbd-confirm-dialog.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDConfirmDialogComponent: () => (/* binding */ BBDConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 15849);





function BBDConfirmDialogComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDConfirmDialogComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onConfirm("confirmB"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.confirmTextB);
  }
}
class BBDConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onConfirm(confirmText = '') {
    if (!this.data.confirmText) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(confirmText ? confirmText : 'confirmA');
    }
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function BBDConfirmDialogComponent_Factory(t) {
      return new (t || BBDConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDConfirmDialogComponent,
      selectors: [["bbd-confirm-dialog"]],
      decls: 13,
      vars: 5,
      consts: [[1, "p-6", "text-center", "max-w-md", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "mx-auto", "mb-4", "text-red-500", "w-12", "h-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-600", "mb-6", "whitespace-pre-line"], [1, "flex", "justify-center", "space-x-4"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"]],
      template: function BBDConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDConfirmDialogComponent_Template_button_click_8_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDConfirmDialogComponent_Template_button_click_10_listener() {
            return ctx.onConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BBDConfirmDialogComponent_button_12_Template, 2, 1, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.content, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.cancelText || "\u53D6\u6D88");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.confirmText || "\u78BA\u5B9A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.confirmTextB);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 82920:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-file-upload/bbd-file-upload.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDFileUploadComponent: () => (/* binding */ BBDFileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* eslint-disable @typescript-eslint/no-explicit-any */



function BBDFileUploadComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8)(5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BBDFileUploadComponent_label_2_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function BBDFileUploadComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDFileUploadComponent_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.doOpenFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDFileUploadComponent_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fileName, " ");
  }
}
class BBDFileUploadComponent {
  constructor() {
    this.fileName = '下載檔案';
    this.selectedFile = null;
    this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileSelected.emit(file);
    }
  }
  doOpenFile() {
    if (!this.selectedFile) return;
    if (this.fileName) {
      const blobUrl = URL.createObjectURL(this.selectedFile);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = this.fileName;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } else {
      window.open(URL.createObjectURL(this.selectedFile), "_blank");
    }
  }
  remove() {
    this.selectedFile = null;
    this.fileName = '';
    this.fileSelected.emit(null);
  }
  static {
    this.ɵfac = function BBDFileUploadComponent_Factory(t) {
      return new (t || BBDFileUploadComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDFileUploadComponent,
      selectors: [["bbd-file-upload"]],
      inputs: {
        fileName: "fileName",
        selectedFile: "selectedFile"
      },
      outputs: {
        fileSelected: "fileSelected"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "space-y-4"], [1, "flex", "items-center", "w-full"], ["for", "bbd-file-upload", "class", "flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100", 4, "ngIf"], ["class", "mt-2 flex space-x-4", 4, "ngIf"], ["for", "bbd-file-upload", 1, "flex", "flex-col", "items-center", "justify-center", "w-full", "h-34", "border-2", "border-gray-300", "border-dashed", "rounded-lg", "cursor-pointer", "bg-gray-50", "hover:bg-gray-100"], [1, "flex", "flex-col", "items-center", "justify-center", "pt-5", "pb-6"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 20 16", 1, "w-8", "h-8", "mb-4", "text-gray-500"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"], [1, "mb-2", "text-sm", "text-gray-500"], [1, "font-semibold"], ["id", "bbd-file-upload", "type", "file", 1, "hidden", 3, "change"], [1, "mt-2", "flex", "space-x-4"], [1, "text-blue-600", "hover:underline", 3, "click"], [1, "bg-red-500", "text-white", "rounded-full", "w-5", "h-5", "flex", "items-center", "justify-center", "hover:bg-red-700", 3, "click"]],
      template: function BBDFileUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BBDFileUploadComponent_label_2_Template, 8, 0, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BBDFileUploadComponent_div_3_Template, 5, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 93266:
/*!********************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-image-upload/bbd-image-upload.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDImageUploadComponent: () => (/* binding */ BBDImageUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 51726);
/* harmony import */ var _pipes_file_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/file-url.pipe */ 79115);
/* eslint-disable @typescript-eslint/no-explicit-any */





function BBDImageUploadComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 3)(1, "div", 4)(2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " add_photo_alternate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BBDImageUploadComponent_label_1_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BBDImageUploadComponent_div_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BBDImageUploadComponent_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r5.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BBDImageUploadComponent_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "fileUrl");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r6.attId), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BBDImageUploadComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BBDImageUploadComponent_div_2_img_1_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BBDImageUploadComponent_div_2_img_2_Template, 2, 3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BBDImageUploadComponent_div_2_img_3_Template, 2, 3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BBDImageUploadComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedImage && !ctx_r1.attId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.attId > 0);
  }
}
class BBDImageUploadComponent {
  constructor() {
    this.imageUrl = null;
    this.attId = 0;
    this.imageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.selectedImage = null;
    this.file = null;
  }
  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.onload = () => this.selectedImage = reader.result;
      reader.readAsDataURL(file);
      this.imageSelected.emit(file);
    }
  }
  remove() {
    this.selectedImage = null;
    this.imageUrl = null;
    this.file = null;
    this.attId = 0;
    this.imageSelected.emit(null);
  }
  static {
    this.ɵfac = function BBDImageUploadComponent_Factory(t) {
      return new (t || BBDImageUploadComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BBDImageUploadComponent,
      selectors: [["bbd-image-upload"]],
      inputs: {
        imageUrl: "imageUrl",
        attId: "attId"
      },
      outputs: {
        imageSelected: "imageSelected"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "upload-img-label"], ["for", "bbd-image-upload", "class", "upload-img-label flex-auto", 4, "ngIf"], ["class", "uploaded-img aspect-[4/3]", 4, "ngIf"], ["for", "bbd-image-upload", 1, "upload-img-label", "flex-auto"], [1, "dash-hint", "aspect-[4/3]"], [1, "material-symbols-rounded"], ["id", "bbd-image-upload", "type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "uploaded-img", "aspect-[4/3]"], ["alt", "\u5716\u7247\u7E2E\u5716", "class", "rounded shadow", 3, "src", 4, "ngIf"], [1, "btn-ghost", 3, "click"], [1, "material-symbols-rounded", "pl-1"], ["alt", "\u5716\u7247\u7E2E\u5716", 1, "rounded", "shadow", 3, "src"]],
      template: function BBDImageUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BBDImageUploadComponent_label_1_Template, 7, 0, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BBDImageUploadComponent_div_2_Template, 7, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.selectedImage || ctx.imageUrl || ctx.attId));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedImage || ctx.imageUrl || ctx.attId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe, _pipes_file_url_pipe__WEBPACK_IMPORTED_MODULE_1__.FileUrlPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 26740:
/*!******************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-img-native-upload/bbd-img-native-upload.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDImgNativeUploadComponent: () => (/* binding */ BBDImgNativeUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var _services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-attach.api.serv */ 89433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 51726);
/* eslint-disable @typescript-eslint/no-explicit-any */








function BBDImgNativeUploadComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 2)(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BBDImgNativeUploadComponent_li_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onUploadFile($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 4)(3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u8ACB\u9078\u64C7\u5716\u7247\u6A94\u6848");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function BBDImgNativeUploadComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7)(1, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 14)(9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BBDImgNativeUploadComponent_li_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onDelAppFileAtt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("max-height", ctx_r1.maxImgHeight ? ctx_r1.maxImgHeight : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx_r1.previewSrc), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class BBDImgNativeUploadComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get attId() {
    return this._attId || 0;
  }
  set attId(value) {
    this._attId = value;
    this.propagateChange(this._attId);
    this._attIdChange.emit(this._attId);
  }
  constructor(appAttachApiServ, injector) {
    super(injector);
    this.appAttachApiServ = appAttachApiServ;
    this.injector = injector;
    this.previewSrc = '';
    // IOs
    this._attId = 0;
    this.maxImgHeight = '';
    this.isHighPixelImg = false;
    this._attIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.filesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.propagateChange = _ => {
      console.log();
    };
    this.propagateTouched = _ => {
      console.log();
    };
  }
  ngOnInit() {
    console.log();
  }
  writeValue(value) {
    if (value !== undefined) {
      this.attId = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUploadFile(target) {
    const files = target?.files;
    if (!files || files.length === 0) {
      this.bbdNotifyServ.warning('提示，您未選取要上傳的檔案。');
      return;
    }
    const formData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('file', files[0]);
    setTimeout(() => {
      if (files) {
        try {
          this.previewSrc = URL.createObjectURL(files[0]);
        } catch (e) {
          console.log(e.message);
        }
      }
    }, 200);
    this.filesChange.emit(files);
    // 臨時編號表示有上傳圖片
    this.attId = -1;
    this._attIdChange.emit(this._attId || 0);
  }
  onDelAppFileAtt() {
    this.attId = 0;
    this.previewSrc = '';
    this._attIdChange.emit(this._attId || 0);
    this.filesChange.emit(null);
  }
  static {
    this.ɵfac = function BBDImgNativeUploadComponent_Factory(t) {
      return new (t || BBDImgNativeUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAttachApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BBDImgNativeUploadComponent,
      selectors: [["bbd-img-native-upload"]],
      inputs: {
        previewSrc: "previewSrc",
        _attId: "_attId",
        files: "files",
        maxImgHeight: "maxImgHeight",
        isHighPixelImg: "isHighPixelImg"
      },
      outputs: {
        _attIdChange: "_attIdChange",
        filesChange: "filesChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => BBDImgNativeUploadComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [["matRipple", "", "class", "upload-img card card_lower", 4, "ngIf"], ["class", "card-basic mb-6", 4, "ngIf"], ["matRipple", "", 1, "upload-img", "card", "card_lower"], ["id", "upload-file", "type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["matRipple", "", "for", "upload-file", 1, "flex", "items-center", "flex-col", "justify-center", "w-full", "text-center", "border-4", "border-dashed", "border-gray-300", "rounded-lg", "py-6", "my-2", "text-gray-400"], [1, "material-icons-outlined", "w-36", "text-6xl"], [1, "font-medium", "text-lg"], [1, "card-basic", "mb-6"], ["tabindex", "0", 1, "group", "w-full", "h-full", "rounded-md", "focus:outline-none", "focus:shadow-outline", "elative", "bg-gray-100", "relative", "shadow-sm"], ["alt", "upload preview", 1, "img-preview", "w-full", "h-full", "sticky", "object-cover", "rounded-md", "bg-fixed", 3, "src"], [1, "flex", "flex-col", "rounded-md", "text-xs", "break-words", "w-full", "h-full", "z-20", "absolute", "top-0", "py-2", "px-3"], [1, "flex-1", "group-hover:text-blue-800"], [1, "flex"], [1, "p-1", "size", "text-xs", "text-gray-700"], [1, "delete", "ml-auto", "focus:outline-none", "hover:bg-gray-300", "p-1", "rounded-md", "text-gray-800"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "pointer-events-none", "fill-current", "w-4", "h-4", "ml-auto", "text-red-500"], ["d", "M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z", 1, "pointer-events-none"]],
      template: function BBDImgNativeUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BBDImgNativeUploadComponent_li_1_Template, 7, 0, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BBDImgNativeUploadComponent_li_2_Template, 12, 5, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.previewSrc);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.previewSrc);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeUrlPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 23028:
/*!******************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-loading-indicator/bbd-loading-indicator.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDLoadingIndicatorComponent: () => (/* binding */ BBDLoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);


function BBDLoadingIndicatorComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7)(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8)(10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function BBDLoadingIndicatorComponent_ng_container_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function BBDLoadingIndicatorComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BBDLoadingIndicatorComponent_ng_container_2_p_2_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.message);
  }
}
class BBDLoadingIndicatorComponent {
  constructor() {
    this.type = 'spinner';
    this.message = '資料讀取中...';
  }
  static {
    this.ɵfac = function BBDLoadingIndicatorComponent_Factory(t) {
      return new (t || BBDLoadingIndicatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDLoadingIndicatorComponent,
      selectors: [["bbd-loading-indicator"]],
      inputs: {
        type: "type",
        message: "message"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "loading-container", 3, "ngClass"], [4, "ngIf"], [1, "w-full", "rounded-md", "opacity-10"], [1, "animate-pulse", "space-y-6", "py-1"], [1, "h-2", "w-1/3", "rounded", "bg-current"], [1, "space-y-3"], [1, "grid", "grid-cols-3", "gap-4"], [1, "col-span-2", "h-2", "rounded", "bg-current"], [1, "col-span-1", "h-2", "rounded", "bg-current"], [1, "h-2", "rounded", "bg-current"], [1, "spinner-circle"], ["class", "spinner-message", 4, "ngIf"], [1, "spinner-message"]],
      template: function BBDLoadingIndicatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BBDLoadingIndicatorComponent_ng_container_1_Template, 12, 0, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BBDLoadingIndicatorComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "skeleton");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "spinner");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".spinner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.spinner[_ngcontent-%COMP%]   .spinner-message[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  font-size: 1.125rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n}\n\n.spinner-circle[_ngcontent-%COMP%] {\n  display: grid;\n  aspect-ratio: 1 / 1;\n  width: 5rem;\n}\n\n.spinner-circle[_ngcontent-%COMP%]::before, .spinner-circle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  grid-area: 1/1;\n  --c:no-repeat radial-gradient(farthest-side,#48d1bc 92%,#0000);\n  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;\n  background-size: 0.75rem 0.75rem;\n  animation: _ngcontent-%COMP%_l12 1s infinite;\n}\n\n.spinner-circle[_ngcontent-%COMP%]::before {\n  margin: 1.5rem;\n  filter: hue-rotate(45deg);\n  background-size: 0.5rem 0.5rem;\n  animation-timing-function: linear;\n}\n\n@keyframes _ngcontent-%COMP%_l12 {\n  100% {\n    transform: rotate(0.5turn);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2JiZC1sb2FkaW5nLWluZGljYXRvci9iYmQtbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLGFBQUE7RUFBQSxzQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUE7QUFBQTs7QUFLRjtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBRUY7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSw4REFBQTtFQUNBLGdGQUNFO0VBSUYsZ0NBQUE7RUFDQSwwQkFBQTtBQUhGOztBQU1FO0VBQUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQTtBQUhBOztBQU1GO0VBQ0U7SUFBSywwQkFBQTtFQURMO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgQGFwcGx5IHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyO1xyXG5cclxuICAuc3Bpbm5lci1tZXNzYWdlIHtcclxuICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIG10LTUgdHJhY2tpbmctd2lkZXN0O1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXItY2lyY2xlIHtcclxuICBAYXBwbHkgdy0yMCBhc3BlY3Qtc3F1YXJlIGdyaWQ7XHJcbn1cclxuLnNwaW5uZXItY2lyY2xlOjpiZWZvcmUsXHJcbi5zcGlubmVyLWNpcmNsZTo6YWZ0ZXIgeyAgICBcclxuICBjb250ZW50OlwiXCI7XHJcbiAgZ3JpZC1hcmVhOiAxLzE7XHJcbiAgLS1jOm5vLXJlcGVhdCByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSwjNDhkMWJjIDkyJSwjMDAwMCk7XHJcbiAgYmFja2dyb3VuZDogXHJcbiAgICB2YXIoLS1jKSA1MCUgIDAsIFxyXG4gICAgdmFyKC0tYykgNTAlICAxMDAlLCBcclxuICAgIHZhcigtLWMpIDEwMCUgNTAlLCBcclxuICAgIHZhcigtLWMpIDAgICAgNTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogLjc1cmVtIC43NXJlbTtcclxuICBhbmltYXRpb246IGwxMiAxcyBpbmZpbml0ZTtcclxufVxyXG4uc3Bpbm5lci1jaXJjbGU6OmJlZm9yZSB7XHJcbiAgQGFwcGx5IG0tNjtcclxuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoNDVkZWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogLjVyZW0gLjVyZW07XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbDEyIHsgXHJcbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSguNXR1cm4pfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 93930:
/*!********************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyComponent: () => (/* binding */ BBDNotifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);




class BBDNotifyComponent {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  static {
    this.ɵfac = function BBDNotifyComponent_Factory(t) {
      return new (t || BBDNotifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BBDNotifyComponent,
      selectors: [["bbd-notify"]],
      decls: 8,
      vars: 3,
      consts: [["role", "alert", 1, "flex", "items-center"], [1, "material-symbols-rounded", 3, "ngClass"], [1, "flex-auto", "pl-2", "truncate", "text-white"], [1, "btn-ghost", "w-10", 3, "click"], [1, "material-symbols-rounded", "align-middle"]],
      template: function BBDNotifyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BBDNotifyComponent_Template_button_click_5_listener() {
            return ctx.snackBarRef.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.iconStyle || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icon || "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text || "", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: [".mat-snack-bar-container {\n  padding: 0px !important;\n  border-radius: 0.5rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2JiZC1ub3RpZnkvYmJkLW5vdGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFBQSxpQkFBQTtFQUFBLHNCQUFBO0VBQUEsNERBQUE7RUFBQSxrQkFBQTtFQUFBLDREQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBAYXBwbHkgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGJnLXN0b25lLTUwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 16669:
/*!*****************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyModule: () => (/* binding */ BBDNotifyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _bbd_notify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-notify.service */ 9998);
/* harmony import */ var _bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbd-notify.component */ 93930);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





class BBDNotifyModule {
  static {
    this.ɵfac = function BBDNotifyModule_Factory(t) {
      return new (t || BBDNotifyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BBDNotifyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      providers: [_bbd_notify_service__WEBPACK_IMPORTED_MODULE_0__.BBDNotifyService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BBDNotifyModule, {
    declarations: [_bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__.BBDNotifyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule],
    exports: [_bbd_notify_component__WEBPACK_IMPORTED_MODULE_1__.BBDNotifyComponent]
  });
})();

/***/ }),

/***/ 9998:
/*!******************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-notify/bbd-notify.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDNotifyService: () => (/* binding */ BBDNotifyService)
/* harmony export */ });
/* harmony import */ var _bbd_notify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-notify.component */ 93930);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





class BBDNotifyService {
  constructor(snackbar) {
    this.snackbar = snackbar;
    this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarConfig();
    this.config.duration = 8000;
    this.config.verticalPosition = 'top';
  }
  open(text) {
    this.doShowLog(text);
    this.config.data = {
      text
    };
    this.openFromComponent();
  }
  success(text) {
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'check_circle',
      iconStyle: 'text-blue-500'
    };
    this.openFromComponent();
  }
  error(text, resMsg = null) {
    if (resMsg) {
      if (typeof resMsg === 'string') {
        text = `${text}「${resMsg}」`;
      } else {
        const errorMessage = resMsg?.errorMessage || resMsg?.error?.errorMessage;
        text = `${text} ${errorMessage ? '[' + errorMessage + ']' : ''}`;
      }
    }
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'cancel',
      iconStyle: 'text-red-500'
    };
    this.openFromComponent();
  }
  errorByFormValid(text, resMsg = null, controls = null) {
    if (controls) {
      Object.values(controls).forEach((control, index) => {
        if (!control.valid) {
          console.log(`請檢查必填欄位:${Object.keys(controls)[index]}`);
        }
      });
    }
    this.error(text, resMsg);
  }
  info(text) {
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'info',
      iconStyle: 'text-stone-500'
    };
    this.openFromComponent();
  }
  warning(text) {
    this.doShowLog(text);
    this.config.data = {
      text,
      icon: 'warning',
      iconStyle: 'text-orange-500'
    };
    this.openFromComponent();
  }
  openFromComponent() {
    this.dialogRef = this.snackbar.openFromComponent(_bbd_notify_component__WEBPACK_IMPORTED_MODULE_0__.BBDNotifyComponent, this.config);
  }
  doShowLog(text) {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
      console.log(`BBDNotify:${new Date().toISOString()} - ${text}`);
    }
  }
  static {
    this.ɵfac = function BBDNotifyService_Factory(t) {
      return new (t || BBDNotifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BBDNotifyService,
      factory: BBDNotifyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7376:
/*!**********************************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-quill-editor-viewer/bbd-quill-editor-viewer.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* binding */ BBDQuillEditorViewerComponent)
/* harmony export */ });
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/safe-html.pipe */ 32650);





function BBDQuillEditorViewerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.content), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
class BBDQuillEditorViewerComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.content = '';
  }
  ngOnInit() {
    console.log();
  }
  static {
    this.ɵfac = function BBDQuillEditorViewerComponent_Factory(t) {
      return new (t || BBDQuillEditorViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BBDQuillEditorViewerComponent,
      selectors: [["bbd-quill-editor-viewer"]],
      inputs: {
        content: "content"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "ql-container ql-snow", "style", "border: none !important;", 4, "ngIf"], [1, "ql-container", "ql-snow", 2, "border", "none !important"], [1, "ql-editor", 3, "innerHTML"]],
      template: function BBDQuillEditorViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BBDQuillEditorViewerComponent_div_0_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.content);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe],
      styles: ["pdf-viewer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nquill-editor[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%] {\n  padding: 0 0;\n  height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY29yZS9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2JiZC1xdWlsbC1lZGl0b3Itdmlld2VyL2JiZC1xdWlsbC1lZGl0b3Itdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInBkZi12aWV3ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxucXVpbGwtZWRpdG9yIC5hbnQtbW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIGhlaWdodDogODV2aDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 24446:
/*!********************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/components/bbd-quill-editor/bbd-quill-editor.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDQuillEditorComponent: () => (/* binding */ BBDQuillEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bbd-base.component */ 56767);
/* harmony import */ var _services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-attach.api.serv */ 89433);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 13615);








const _c0 = function () {
  return {
    flex: "1 1 auto",
    "min-height": "150px"
  };
};
class BBDQuillEditorComponent extends _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get content() {
    return this._content;
  }
  set content(value) {
    this._content = value;
    this.propagateChange(this._content);
    this._contentChange.emit(this._content);
  }
  constructor(appAttachApiServ, injector) {
    super(injector);
    this.appAttachApiServ = appAttachApiServ;
    this.injector = injector;
    this.placeholder = '請輸入內容';
    this.isUseLink = true;
    this.isUseImage = true;
    this.isUseVideo = true;
    this.formData = new FormData();
    // 樣式參考以下寫法才能完整正常運作
    // <div class="ql-container ql-snow" style="border: none !important;">
    //     <div class="ql-editor" [innerHTML]="(info.content || '{}' | jsonParse)?.desc | safeHtml">
    //     </div>
    // </div>
    this.quillConfig = {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote'], [{
        'header': 1
      }, {
        'header': 2
      }], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], [{
        'direction': 'rtl'
      }], [{
        'color': []
      }, {
        'background': []
      }], [{
        'size': ['small', false, 'large', 'huge']
      }], [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }], [{
        'font': []
      }], [{
        'align': []
      }], ['clean']
      // [this.isUseLink ? 'link' : '', 'image', 'video'],
      ]
    };
    // IOs
    this._content = '';
    this._contentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.propagateChange = _ => {
      console.log();
    };
    this.propagateTouched = _ => {
      console.log();
    };
  }
  ngOnInit() {
    console.log();
    if (this.quillConfig.toolbar) {
      const medias = [];
      if (this.isUseLink) {
        medias.push('link');
      }
      if (this.isUseImage) {
        medias.push('image');
      }
      if (this.isUseVideo) {
        medias.push('video');
      }
      if (medias.length) {
        this.quillConfig.toolbar.push(medias);
      }
    }
  }
  writeValue(value) {
    if (value !== undefined) {
      this._content = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }
  editorCreated(quill) {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
  }
  imageHandler() {
    const imageinput = document.createElement('input');
    imageinput.setAttribute('type', 'file');
    imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    imageinput.classList.add('ql-image');
    imageinput.addEventListener('change', () => {
      if (imageinput.files != null && imageinput.files[0] != null) {
        const formData = new FormData();
        Object.entries(this.formData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('file', (imageinput?.files || [])[0]);
        this.appAttachApiServ.uploadCdnFiles(formData).subscribe(res => {
          const range = this.editor.getSelection(true);
          const imageSrc = this.combineCdnUrl(res[0].fullPath);
          this.editor.insertEmbed(range.index, 'image', imageSrc);
        });
      }
    });
    imageinput.click();
  }
  static {
    this.ɵfac = function BBDQuillEditorComponent_Factory(t) {
      return new (t || BBDQuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_app_attach_api_serv__WEBPACK_IMPORTED_MODULE_1__.AppAttachApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BBDQuillEditorComponent,
      selectors: [["bbd-quill-editor"]],
      inputs: {
        placeholder: "placeholder",
        isUseLink: "isUseLink",
        isUseImage: "isUseImage",
        isUseVideo: "isUseVideo",
        _content: "_content"
      },
      outputs: {
        _contentChange: "_contentChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => BBDQuillEditorComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 5,
      consts: [["trackChanges", "all", 1, "col-span-1", "w-full", 3, "ngModel", "styles", "modules", "placeholder", "ngModelChange", "onEditorCreated"]],
      template: function BBDQuillEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "quill-editor", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BBDQuillEditorComponent_Template_quill_editor_ngModelChange_0_listener($event) {
            return ctx.content = $event;
          })("onEditorCreated", function BBDQuillEditorComponent_Template_quill_editor_onEditorCreated_0_listener($event) {
            return ctx.editorCreated($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.content)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("modules", ctx.quillConfig)("placeholder", ctx.placeholder);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillEditorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 71378:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/shared/components/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBDBaseComponent: () => (/* reexport safe */ _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent),
/* harmony export */   BBDConfirmDialogComponent: () => (/* reexport safe */ _bbd_confirm_dialog_bbd_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.BBDConfirmDialogComponent),
/* harmony export */   BBDFileUploadComponent: () => (/* reexport safe */ _bbd_file_upload_bbd_file_upload_component__WEBPACK_IMPORTED_MODULE_3__.BBDFileUploadComponent),
/* harmony export */   BBDImageUploadComponent: () => (/* reexport safe */ _bbd_image_upload_bbd_image_upload_component__WEBPACK_IMPORTED_MODULE_4__.BBDImageUploadComponent),
/* harmony export */   BBDImgNativeUploadComponent: () => (/* reexport safe */ _bbd_img_native_upload_bbd_img_native_upload_component__WEBPACK_IMPORTED_MODULE_5__.BBDImgNativeUploadComponent),
/* harmony export */   BBDLoadingIndicatorComponent: () => (/* reexport safe */ _bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__.BBDLoadingIndicatorComponent),
/* harmony export */   BBDQuillEditorComponent: () => (/* reexport safe */ _bbd_quill_editor_bbd_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent),
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* reexport safe */ _bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__.BBDQuillEditorViewerComponent)
/* harmony export */ });
/* harmony import */ var _bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbd-base.component */ 56767);
/* harmony import */ var _bbd_quill_editor_bbd_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbd-quill-editor/bbd-quill-editor.component */ 24446);
/* harmony import */ var _bbd_quill_editor_viewer_bbd_quill_editor_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bbd-quill-editor-viewer/bbd-quill-editor-viewer.component */ 7376);
/* harmony import */ var _bbd_file_upload_bbd_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bbd-file-upload/bbd-file-upload.component */ 82920);
/* harmony import */ var _bbd_image_upload_bbd_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbd-image-upload/bbd-image-upload.component */ 93266);
/* harmony import */ var _bbd_img_native_upload_bbd_img_native_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbd-img-native-upload/bbd-img-native-upload.component */ 26740);
/* harmony import */ var _bbd_confirm_dialog_bbd_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bbd-confirm-dialog/bbd-confirm-dialog.component */ 39930);
/* harmony import */ var _bbd_loading_indicator_bbd_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bbd-loading-indicator/bbd-loading-indicator.component */ 23028);









/***/ }),

/***/ 32920:
/*!****************************************************!*\
  !*** ./libs/core/src/lib/shared/controls/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _zip_code_control_zip_code_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-code-control/zip-code-control.component */ 44082);


/***/ }),

/***/ 44082:
/*!******************************************************************************************!*\
  !*** ./libs/core/src/lib/shared/controls/zip-code-control/zip-code-control.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipCodeControlComponent: () => (/* binding */ ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _components_bbd_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bbd-base.component */ 56767);
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/ary-filter.pipe */ 44832);
/* harmony import */ var _pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/ctrl-has-required.pipe */ 71367);
/* harmony import */ var _pipes_empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/empty-formatter.pipe */ 82287);
/* eslint-disable @typescript-eslint/no-explicit-any */


// Custom packages












function ZipCodeControlComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4);
  }
}
function ZipCodeControlComponent_mat_error_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](msg_r6);
  }
}
function ZipCodeControlComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_8_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.formHelper.errorMsgs(ctx_r1.f["city"].errors, "\u7E23\u5E02"));
  }
}
function ZipCodeControlComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r7.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", opt_r7.code, " - ", opt_r7.district, " ");
  }
}
function ZipCodeControlComponent_mat_error_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", msg_r9, " ");
  }
}
function ZipCodeControlComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZipCodeControlComponent_mat_error_17_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.formHelper.errorMsgs(ctx_r3.f["district"].errors, "\u9109\u93AE\u5340"));
  }
}
const _c0 = function (a1) {
  return {
    fieldName: "city",
    fieldValue: a1
  };
};
class ZipCodeControlComponent extends _components_bbd_base_component__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent {
  get f() {
    return this.valForm.controls;
  }
  constructor(fb, injector) {
    super(injector);
    this.fb = fb;
    this.injector = injector;
    this.cities = [];
    this.districts = [];
    this.title = '';
    this.required = false;
    this.onChange = () => void 0;
    this.onTouched = () => void 0;
    this.getCaches();
  }
  ngOnInit() {
    console.log('init');
  }
  writeValue(value) {
    this.valForm = this.fb.group({
      id: [value],
      city: [null],
      district: [null]
    });
    this.doSetValidators();
    if (this.districts.length) {
      this.doReverseZipCodeId(value);
    } else {
      // 防止跟不上快取處理
      setTimeout(() => {
        this.doReverseZipCodeId(value);
      }, 100);
    }
    this.f['id'].valueChanges.subscribe(res => {
      this.onChange(res);
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  validate() {
    if (this.valForm.invalid) return {
      invalid: true
    };
    return null;
  }
  markAllAsTouched() {
    this.valForm.markAllAsTouched();
    this.valForm.updateValueAndValidity({
      emitEvent: false
    });
    this.onValidatorChange?.();
  }
  getCaches() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.storeServ.getZipCodesCache()]).subscribe(([zipCodeViews]) => {
      if (zipCodeViews) {
        this.cities = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).DistinctBy(item => item.city).Select(item => item.city).ToArray();
        this.districts = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(zipCodeViews).Select(item => ({
          id: item.id,
          code: item.code,
          city: item.city,
          district: item.district
        })).ToArray();
      }
    });
  }
  doReverseZipCodeId(id) {
    if (id) {
      const twZipCode = new linqts__WEBPACK_IMPORTED_MODULE_1__.List(this.districts).Where(w => w?.id === id).FirstOrDefault();
      this.f['city'].setValue(twZipCode?.city);
      this.f['district'].setValue(twZipCode?.district);
    }
  }
  doSetValidators() {
    if (this.required) {
      this.f['city'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
      this.f['district'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    } else {
      this.f['city'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.nullValidator);
      this.f['district'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.nullValidator);
    }
    this.f['city'].updateValueAndValidity();
    this.f['district'].updateValueAndValidity();
  }
  onDistrictSelectionChange(city, district, targetCtrl) {
    if (!city || !district) {
      return;
    }
    const dist = this.districts.find(item => item.city === city && item.district === district);
    if (!dist) {
      return;
    }
    targetCtrl.setValue(dist.id);
  }
  static {
    this.ɵfac = function ZipCodeControlComponent_Factory(t) {
      return new (t || ZipCodeControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ZipCodeControlComponent,
      selectors: [["bbd-zip-code-control"]],
      inputs: {
        title: "title",
        required: "required"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => ZipCodeControlComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 18,
      vars: 24,
      consts: [[1, "grid", "grid-cols-12", "gap-x-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full", "col-span-full", "sm:col-span-6"], ["formControlName", "city", 3, "required", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs", 4, "ngIf"], ["formControlName", "district", 3, "required", "selectionChange"], [3, "value"], [1, "text-xs"], [4, "ngFor", "ngForOf"]],
      template: function ZipCodeControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "emptyFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_5_listener() {
            ctx.f["district"].setValue(null);
            return ctx.f["id"].setValue(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ZipCodeControlComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ZipCodeControlComponent_mat_error_8_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 1)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "emptyFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ZipCodeControlComponent_Template_mat_select_selectionChange_13_listener() {
            return ctx.onDistrictSelectionChange(ctx.f["city"].value, ctx.f["district"].value, ctx.f["id"]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "ctrlHasRequired");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ZipCodeControlComponent_mat_option_15_Template, 2, 3, "mat-option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "aryFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ZipCodeControlComponent_mat_error_17_Template, 2, 1, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.valForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 9, ctx.title, ""), "\u7E23\u5E02");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 12, ctx.f["city"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cities);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["city"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 14, ctx.title, ""), "\u9109\u93AE\u5340");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 17, ctx.f["district"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 19, ctx.districts, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.f["city"].value)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["district"].errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _pipes_ary_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.AryFilterPipe, _pipes_ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_3__.CtrlHasRequiredPipe, _pipes_empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 17890:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/array.extension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Array.prototype.isUndefinedOrNullOrEmpty = function () {
  if (!this) {
    return true;
  }
  if (this.length === 0) {
    return true;
  }
  return false;
};


/***/ }),

/***/ 35861:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/date.extension.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 23963);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 36896);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 87480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 37286);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);
// date-fns packages

// Custom packages

Date.prototype.getStartOfDay = function () {
  if (!this) {
    return this;
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(this);
};
Date.prototype.getEndOfDay = function () {
  if (!this) {
    return this;
  }
  const d = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfDay)(this);
  d.setMilliseconds(0);
  return d;
};
Date.prototype.getAppMaxUtcDate = () => {
  return new Date(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT);
};
Date.prototype.getFormatString = function (dateFormat) {
  if (!this) {
    return '';
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(this, dateFormat);
};
Date.prototype.isMaxUtcDate = function () {
  if (!this) {
    return false;
  }
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isEqual)(this, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
    return true;
  }
  return false;
};

/***/ }),

/***/ 33060:
/*!*****************************************************************!*\
  !*** ./libs/core/src/lib/shared/extensions/string.extension.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
String.prototype.isUndefinedOrNullOrEmpty = function () {
  if (!this) {
    return true;
  }
  if (this.trim() === '') {
    return true;
  }
  return false;
};


/***/ }),

/***/ 65637:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/guards/app-auth.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthGuard: () => (/* binding */ AppAuthGuard)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);

// Custom packages




class AppAuthGuard {
  constructor(appAuthApiServ, router) {
    this.appAuthApiServ = appAuthApiServ;
    this.router = router;
  }
  canActivate(next, state) {
    if (this.appAuthApiServ.isSignin !== true) {
      this.router.navigate(['auth/signin'], {
        queryParams: {
          next: state.url
        }
      });
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function AppAuthGuard_Factory(t) {
      return new (t || AppAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppAuthGuard,
      factory: AppAuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 16232:
/*!**************************************************!*\
  !*** ./libs/core/src/lib/shared/guards/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAuthGuard: () => (/* reexport safe */ _app_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AppAuthGuard)
/* harmony export */ });
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-auth.guard */ 65637);


/***/ }),

/***/ 48726:
/*!************************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/app-env.helper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* binding */ APP_ENV),
/* harmony export */   AppEnvHelper: () => (/* binding */ AppEnvHelper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

const APP_ENV = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('app.env.token');
class AppEnvHelper {
  static {
    this.getValueProvider = value => ({
      provide: APP_ENV,
      useValue: value
    });
  }
}

/***/ }),

/***/ 54917:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/date.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateHelper: () => (/* binding */ DateHelper)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 87480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 37286);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 6129);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 23963);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);
// date-fns packages

// Custom packages

class DateHelper {
  static parseAppMaxUtcDateToNull(value) {
    if (!value) {
      return null;
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isEqual)(value, (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
      return null;
    }
    return value;
  }
  static parseNullToAppMaxUtcDate(value) {
    if (!value) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT);
    }
    return value;
  }
  static getDateAndTimeMerge(dateAt, timeAt) {
    if (!dateAt) {
      return dateAt || new Date();
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isEqual)(dateAt, (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(_consts__WEBPACK_IMPORTED_MODULE_0__.APP_MAX_UTC_DATE_ISO_FORMAT)) === true) {
      return dateAt;
    }
    if (timeAt) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(`${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(dateAt || new Date(), 'yyyy-MM-dd')} ${timeAt}`);
    } else {
      if (dateAt) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfDay)(new Date(dateAt || new Date()));
      }
    }
    return dateAt;
  }
  static getHourMinute(value) {
    if (!value) {
      return '';
    }
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(value, "HH:mm");
  }
}

/***/ }),

/***/ 75103:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/form.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormHelper: () => (/* binding */ FormHelper)
/* harmony export */ });
class FormHelper {
  static errorMsgs(errors, label, sublabel = '') {
    const msgs = [];
    Object.keys(errors).forEach(validator => {
      if (validator === 'required') {
        msgs.push(`請輸入您的${label}`);
      }
      if (validator === 'pattern') {
        msgs.push(`請確認您輸入的格式或正負數是否正確`);
      }
      if (validator === 'phone') {
        msgs.push(`請填寫正確的行動電話`);
      }
      if (validator === 'email') {
        msgs.push(`請填寫正確的電子信箱格式`);
      }
      if (validator === 'min') {
        msgs.push(`不可小於 ${errors.min.min}`);
      }
      if (validator === 'max') {
        msgs.push(`不可大於 ${errors.max.max}`);
      }
      if (validator === 'minlength') {
        msgs.push(`長度至少為 ${errors.minlength.requiredLength} 碼字元`);
      }
      if (validator === 'maxlength') {
        msgs.push(`長度最多為 ${errors.maxlength.requiredLength} 碼字元`);
      }
      if (validator === 'matching') {
        msgs.push(`您填寫的${label}與${sublabel}必須為一樣`);
      }
      if (validator === 'noMatching') {
        msgs.push(`您填寫的${label}不能與${sublabel}一樣`);
      }
    });
    return msgs;
  }
  static hasRequired(ctrl) {
    if (!ctrl || !ctrl.validator) {
      return false;
    }
    const validator = ctrl.validator({});
    if (validator && validator['required']) {
      return true;
    }
    return false;
  }
}

/***/ }),

/***/ 45963:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* reexport safe */ _app_env_helper__WEBPACK_IMPORTED_MODULE_0__.APP_ENV),
/* harmony export */   AppEnvHelper: () => (/* reexport safe */ _app_env_helper__WEBPACK_IMPORTED_MODULE_0__.AppEnvHelper),
/* harmony export */   DateHelper: () => (/* reexport safe */ _date_helper__WEBPACK_IMPORTED_MODULE_1__.DateHelper),
/* harmony export */   FormHelper: () => (/* reexport safe */ _form_helper__WEBPACK_IMPORTED_MODULE_2__.FormHelper),
/* harmony export */   JsonHelper: () => (/* reexport safe */ _json_helper__WEBPACK_IMPORTED_MODULE_3__.JsonHelper)
/* harmony export */ });
/* harmony import */ var _app_env_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-env.helper */ 48726);
/* harmony import */ var _date_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.helper */ 54917);
/* harmony import */ var _form_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.helper */ 75103);
/* harmony import */ var _json_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json.helper */ 80703);





/***/ }),

/***/ 80703:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/helpers/json.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonHelper: () => (/* binding */ JsonHelper)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
class JsonHelper {
  static parseSafeJSON(str) {
    try {
      // 嘗試第一次解析
      let parsed = JSON.parse(str);
      // 如果結果是字串，代表原本有多包一層引號，再 parse 一次
      if (typeof parsed === 'string') {
        parsed = JSON.parse(parsed);
      }
      return parsed;
    } catch {
      return {};
    }
  }
}

/***/ }),

/***/ 76777:
/*!*******************************************!*\
  !*** ./libs/core/src/lib/shared/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ENV: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.APP_ENV),
/* harmony export */   AntdModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.AntdModule),
/* harmony export */   AppAuthGuard: () => (/* reexport safe */ _guards__WEBPACK_IMPORTED_MODULE_2__.AppAuthGuard),
/* harmony export */   AppEnvHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.AppEnvHelper),
/* harmony export */   BBDBaseComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDBaseComponent),
/* harmony export */   BBDConfirmDialogComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDConfirmDialogComponent),
/* harmony export */   BBDFileUploadComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDFileUploadComponent),
/* harmony export */   BBDImageUploadComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDImageUploadComponent),
/* harmony export */   BBDImgNativeUploadComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDImgNativeUploadComponent),
/* harmony export */   BBDLoadingIndicatorComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDLoadingIndicatorComponent),
/* harmony export */   BBDQuillEditorComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDQuillEditorComponent),
/* harmony export */   BBDQuillEditorViewerComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BBDQuillEditorViewerComponent),
/* harmony export */   DateHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.DateHelper),
/* harmony export */   FormHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.FormHelper),
/* harmony export */   HttpRequestInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpRequestInterceptor),
/* harmony export */   HttpResponseInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpResponseInterceptor),
/* harmony export */   JWTAuthInterceptor: () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_4__.JWTAuthInterceptor),
/* harmony export */   JsonHelper: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.JsonHelper),
/* harmony export */   MaterialModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.MaterialModule),
/* harmony export */   SharedModule: () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule),
/* harmony export */   ThirdPartyModule: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyModule),
/* harmony export */   Validation: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.Validation),
/* harmony export */   ZipCodeControlComponent: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.ZipCodeControlComponent)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 71378);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ 32920);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ 16232);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ 45963);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ 12838);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules */ 47691);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators */ 51977);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ 13348);









/***/ }),

/***/ 43494:
/*!***************************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/http.request.interceptor.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestInterceptor: () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages


class HttpRequestInterceptor {
  constructor(appEnv) {
    this.appEnv = appEnv;
  }
  intercept(request, next) {
    // 檢查 URL 是否已經是完整路徑（以 http:// 或 https:// 開頭）
    const isFullUrl = request.url.startsWith('http://') || request.url.startsWith('https://');
    // 如果是完整路徑，直接處理請求
    if (isFullUrl) {
      return next.handle(request);
    }
    let apiUrl = this.appEnv?.apiServer || '';
    if (request.url.startsWith('/ArcGen')) {
      apiUrl = apiUrl.replace('/Portal', '');
    }
    // 否則加上 API 伺服器前綴
    const newRequest = request.clone({
      url: apiUrl + request.url
    });
    return next.handle(newRequest);
  }
  static {
    this.ɵfac = function HttpRequestInterceptor_Factory(t) {
      return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helpers__WEBPACK_IMPORTED_MODULE_0__.APP_ENV));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpRequestInterceptor,
      factory: HttpRequestInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 27178:
/*!****************************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/http.response.interceptor.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpResponseInterceptor: () => (/* binding */ HttpResponseInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 15463);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);




// Custom packages



class HttpResponseInterceptor {
  constructor(appAuthApiServ) {
    this.appAuthApiServ = appAuthApiServ;
    this.isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(val => {
      if (val instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
        const body = val.body;
        this.doConvert(body);
      }
      return val;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(resp => {
      if (resp && resp.status && resp.status === 401) {
        this.appAuthApiServ.signout();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => resp);
    }));
  }
  isIsoDateString(value) {
    if (!value) {
      return false;
    }
    if (typeof value === 'string') {
      return this.isoDateFormat.test(value);
    }
    return false;
  }
  doConvert(body) {
    if (!body) {
      return body;
    }
    if (typeof body !== 'object') {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
        continue;
      }
      if (typeof value === 'object') {
        this.doConvert(value);
      }
    }
  }
  static {
    this.ɵfac = function HttpResponseInterceptor_Factory(t) {
      return new (t || HttpResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: HttpResponseInterceptor,
      factory: HttpResponseInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 12838:
/*!********************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestInterceptor: () => (/* reexport safe */ _http_request_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpRequestInterceptor),
/* harmony export */   HttpResponseInterceptor: () => (/* reexport safe */ _http_response_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpResponseInterceptor),
/* harmony export */   JWTAuthInterceptor: () => (/* reexport safe */ _jwt_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.JWTAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.request.interceptor */ 43494);
/* harmony import */ var _http_response_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.response.interceptor */ 27178);
/* harmony import */ var _jwt_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.auth.interceptor */ 6190);




/***/ }),

/***/ 6190:
/*!***********************************************************************!*\
  !*** ./libs/core/src/lib/shared/interceptors/jwt.auth.interceptor.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JWTAuthInterceptor: () => (/* binding */ JWTAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);

// Custom packages



class JWTAuthInterceptor {
  constructor(appAuthApiServ) {
    this.appAuthApiServ = appAuthApiServ;
  }
  intercept(request, next) {
    const token = this.appAuthApiServ.getAccessToken()?.accessToken;
    if (token && token.length > 0) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function JWTAuthInterceptor_Factory(t) {
      return new (t || JWTAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAuthApiServ));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JWTAuthInterceptor,
      factory: JWTAuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 13252:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/antd.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdModule: () => (/* binding */ AntdModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 12614);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/zh */ 93069);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 13281);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/badge */ 54643);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 3820);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/affix */ 26868);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 95289);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 46278);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 288);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 92953);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 81751);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 18801);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 85825);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 39421);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 79869);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 76987);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ 52873);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 65160);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 35634);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ 6057);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/image */ 8365);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 31774);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 86940);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/layout */ 1024);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/list */ 84938);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/menu */ 84791);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/message */ 32703);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/modal */ 38217);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/notification */ 68135);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 51515);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 99826);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 38129);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/radio */ 20579);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/select */ 71050);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 63671);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/result */ 49633);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/slider */ 13229);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 61724);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/steps */ 37987);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/switch */ 86614);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/table */ 40542);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 37766);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/tag */ 62138);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 17867);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 60388);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/spin */ 8034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ 90310);

















































(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_1__["default"]);
const ICONS = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowDownOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowUpOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.BellOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeInvisibleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FolderOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FormOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.HomeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.KeyOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.LeftOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NotificationOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NumberOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ScanOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ClearOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FormOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NotificationOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.BellOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.LeftOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.HomeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.FolderOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.NumberOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowUpOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowDownOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.EyeInvisibleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.KeyOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ScanOutline];
const MODULES = [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__.NzAffixModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__.NzBadgeModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.NzBreadCrumbModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__.NzCollapseModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__.NzDescriptionsModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__.NzEmptyModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__.NzMessageModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__.NzNotificationModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__.NzPageHeaderModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__.NzPopconfirmModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__.NzSelectModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__.NzSkeletonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__.NzSliderModule, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__.NzStatisticModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__.NzSwitchModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__.NzSpinModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__.NzTagModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__.NzTimelineModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__.NzCarouselModule];
class AntdModule {
  static {
    this.ɵfac = function AntdModule_Factory(t) {
      return new (t || AntdModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineNgModule"]({
      type: AntdModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineInjector"]({
      providers: [{
        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__.NZ_I18N,
        useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_47__.zh_TW
      }, {
        provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NZ_ICONS,
        useValue: ICONS
      }],
      imports: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__.NzAffixModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__.NzBadgeModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.NzBreadCrumbModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__.NzCollapseModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__.NzDescriptionsModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__.NzEmptyModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__.NzMessageModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__.NzNotificationModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__.NzPageHeaderModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__.NzPopconfirmModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__.NzSelectModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__.NzSkeletonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__.NzSliderModule, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__.NzStatisticModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__.NzSwitchModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__.NzSpinModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__.NzTagModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__.NzTimelineModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__.NzCarouselModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵsetNgModuleScope"](AntdModule, {
    exports: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__.NzAffixModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__.NzBadgeModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__.NzBreadCrumbModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_10__.NzCollapseModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_11__.NzDatePickerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_15__.NzDescriptionsModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__.NzEmptyModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_25__.NzMenuModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__.NzMessageModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_27__.NzModalModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_28__.NzNotificationModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_30__.NzPageHeaderModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_31__.NzPopconfirmModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_33__.NzSelectModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__.NzSkeletonModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_35__.NzSliderModule, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_36__.NzStatisticModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_38__.NzSwitchModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_39__.NzSpinModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_41__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_42__.NzTagModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_43__.NzTimelineModule, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_20__.NzImageModule, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_37__.NzStepsModule, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_44__.NzResultModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_45__.NzCarouselModule]
  });
})();

/***/ }),

/***/ 47691:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntdModule: () => (/* reexport safe */ _antd_module__WEBPACK_IMPORTED_MODULE_0__.AntdModule),
/* harmony export */   MaterialModule: () => (/* reexport safe */ _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule),
/* harmony export */   ThirdPartyModule: () => (/* reexport safe */ _third_party_module__WEBPACK_IMPORTED_MODULE_2__.ThirdPartyModule)
/* harmony export */ });
/* harmony import */ var _antd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antd.module */ 13252);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 26874);
/* harmony import */ var _third_party_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third-party.module */ 14533);




/***/ }),

/***/ 26874:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/material.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 70256);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 4987);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 54591);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ 99120);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 20288);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 24645);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 44186);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 15849);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 16490);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 70738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 29370);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 79682);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 55255);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 18033);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 33668);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 12949);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 26537);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 49678);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 44224);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 34651);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 68477);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 51661);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ 64566);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 76897);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 74292);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 17508);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 85409);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 94718);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/youtube-player */ 33426);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ 84092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 90310);
// Angular material packages































// Custom packages


const MODULES = [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__.MatStepperModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__.YouTubePlayerModule];
class MaterialModule {
  static {
    this.ɵfac = function MaterialModule_Factory(t) {
      return new (t || MaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_LOCALE,
        useValue: 'zh-TW'
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS,
        useValue: _consts__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_TW_FORMATS
      }],
      imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__.MatStepperModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__.YouTubePlayerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__.MatStepperModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_30__.YouTubePlayerModule]
  });
})();

/***/ }),

/***/ 14533:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/modules/third-party.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThirdPartyModule: () => (/* binding */ ThirdPartyModule)
/* harmony export */ });
/* harmony import */ var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-mat-timepicker */ 39291);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-print */ 77715);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 16567);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ 13615);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ 38585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);







;
const MODULES = [ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_print__WEBPACK_IMPORTED_MODULE_1__.NgxPrintModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule];
class ThirdPartyModule {
  static {
    this.ɵfac = function ThirdPartyModule_Factory(t) {
      return new (t || ThirdPartyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: ThirdPartyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [
      // 防止出現警告： Property "type" is missed
      ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule.forRoot({
        type: "''"
      }), ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_print__WEBPACK_IMPORTED_MODULE_1__.NgxPrintModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ThirdPartyModule, {
    imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule],
    exports: [ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_0__.NgxMatTimepickerModule, ngx_print__WEBPACK_IMPORTED_MODULE_1__.NgxPrintModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerModule, ngx_quill__WEBPACK_IMPORTED_MODULE_3__.QuillModule, swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule]
  });
})();

/***/ }),

/***/ 29004:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/area-convert.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConvertPipe: () => (/* binding */ AreaConvertPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class AreaConvertPipe {
  /**
   * @param value 原始數值（坪 or m²）
   * @param mode 'toPing'：m² ➜ 坪，'toM2'：坪 ➜ m²（預設 'toPing'）
   * @param digits 保留幾位小數（預設 2）
   * @param defaultValue 無效值時回傳預設（預設 '-'）
   */
  transform(value, mode = 'toPing', digits = 2, defaultValue = '-') {
    const num = Number(value);
    if (isNaN(num)) {
      return String(defaultValue);
    }
    let result;
    if (mode === 'toPing') {
      result = num / 3.305785;
    } else if (mode === 'toM2') {
      result = num * 3.305785;
    } else {
      return String(defaultValue); // 防止 mode 錯誤
    }

    return result.toFixed(digits);
  }
  static {
    this.ɵfac = function AreaConvertPipe_Factory(t) {
      return new (t || AreaConvertPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "areaConvert",
      type: AreaConvertPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 44832:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-filter.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFilterPipe: () => (/* binding */ AryFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class AryFilterPipe {
  transform(source, condition) {
    if (!source || source.length <= 0) {
      return [];
    }
    if (!condition) {
      return [];
    }
    let conditions = [];
    if (Array.isArray(condition)) {
      if (condition.length <= 0) {
        return [];
      }
      conditions = [...condition];
    } else {
      conditions.push(condition);
    }
    let result = [...source];
    for (let idx = 0; idx < conditions.length; idx++) {
      result = result.filter(item => item[conditions[idx].fieldName] === conditions[idx].fieldValue);
      if (!result || result.length <= 0) {
        return [];
      }
    }
    return result;
  }
  static {
    this.ɵfac = function AryFilterPipe_Factory(t) {
      return new (t || AryFilterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "aryFilter",
      type: AryFilterPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 36175:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-find-value.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFindValuePipe: () => (/* binding */ AryFindValuePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class AryFindValuePipe {
  transform(value, source, keyFieldName, valueFieldName) {
    if (!value) {
      return null;
    }
    if (!source) {
      return null;
    }
    const findObj = source.find(info => {
      if (info[keyFieldName] !== undefined) {
        return info[keyFieldName] === value;
      }
      return false;
    });
    if (findObj && findObj[valueFieldName] !== undefined) {
      return findObj[valueFieldName];
    }
    return null;
  }
  static {
    this.ɵfac = function AryFindValuePipe_Factory(t) {
      return new (t || AryFindValuePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "aryFindValue",
      type: AryFindValuePipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 9955:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-find.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AryFindPipe: () => (/* binding */ AryFindPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class AryFindPipe {
  transform(source, onlyFieldNameValue = null, conditions) {
    if (!source) {
      return null;
    }
    if (source.length <= 0) {
      return null;
    }
    if (!conditions || conditions.length <= 0) {
      return null;
    }
    let result = [...source];
    for (let idx = 0; idx < conditions.length; idx++) {
      result = result.filter(item => item[conditions[idx].fieldName] === conditions[idx].fieldValue);
      if (!result || result.length <= 0) {
        return null;
      }
    }
    if (onlyFieldNameValue) {
      return result[0][onlyFieldNameValue];
    }
    return result[0];
  }
  static {
    this.ɵfac = function AryFindPipe_Factory(t) {
      return new (t || AryFindPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "aryFind",
      type: AryFindPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 67278:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ary-sort.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArySortPipe: () => (/* binding */ ArySortPipe)
/* harmony export */ });
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linqts */ 41358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class ArySortPipe {
  transform(source, seq = '') {
    if (!source) {
      return source;
    }
    if (source.length <= 0) {
      return source;
    }
    const items = new linqts__WEBPACK_IMPORTED_MODULE_0__.List(source);
    if (seq === 'desc') {
      return items.OrderByDescending(ob => ob.sort).ToArray();
    } else {
      return items.OrderBy(ob => ob.sort).ToArray();
    }
  }
  static {
    this.ɵfac = function ArySortPipe_Factory(t) {
      return new (t || ArySortPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "arySort",
      type: ArySortPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 71367:
/*!******************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/ctrl-has-required.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CtrlHasRequiredPipe: () => (/* binding */ CtrlHasRequiredPipe)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 45963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
// Custom packages


class CtrlHasRequiredPipe {
  transform(ctrl) {
    if (!ctrl || !ctrl.validator) {
      return false;
    }
    return _helpers__WEBPACK_IMPORTED_MODULE_0__.FormHelper.hasRequired(ctrl);
  }
  static {
    this.ɵfac = function CtrlHasRequiredPipe_Factory(t) {
      return new (t || CtrlHasRequiredPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "ctrlHasRequired",
      type: CtrlHasRequiredPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 96304:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/date-formatter.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormatterPipe: () => (/* binding */ DateFormatterPipe)
/* harmony export */ });
/* harmony import */ var _extensions_date_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/date.extension */ 35861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
// Custom packages


class DateFormatterPipe {
  transform(value, format = 'yyyy-MM-dd', maxDateOrNullReplaceStr = '') {
    if (!value) {
      return maxDateOrNullReplaceStr;
    }
    if (value.isMaxUtcDate()) {
      return maxDateOrNullReplaceStr;
    }
    return value.getFormatString(format);
  }
  static {
    this.ɵfac = function DateFormatterPipe_Factory(t) {
      return new (t || DateFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dateFormatter",
      type: DateFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 82287:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/empty-formatter.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyFormatterPipe: () => (/* binding */ EmptyFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class EmptyFormatterPipe {
  transform(value, emptyReplaceStr = '') {
    if (value) {
      return value;
    }
    return emptyReplaceStr;
  }
  static {
    this.ɵfac = function EmptyFormatterPipe_Factory(t) {
      return new (t || EmptyFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "emptyFormatter",
      type: EmptyFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 79115:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/file-url.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUrlPipe: () => (/* binding */ FileUrlPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 74150);







class FileUrlPipe {
  constructor(appAttachApiServ, sanitizer) {
    this.appAttachApiServ = appAttachApiServ;
    this.sanitizer = sanitizer;
    this.cachedUrl = null;
    this.lastId = null;
  }
  transform(attId) {
    if (!attId || attId <= 0) {
      return null;
    }
    // 如果 attId 有變化，重新請求
    if (attId !== this.lastId) {
      this.lastId = attId;
      this.cachedUrl = null;
      this.appAttachApiServ.downloadAppFileAtt(attId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(blob => {
        const url = URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
      })).subscribe(safeUrl => {
        this.cachedUrl = safeUrl;
      });
    }
    return this.cachedUrl;
  }
  static {
    this.ɵfac = function FileUrlPipe_Factory(t) {
      return new (t || FileUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AppAttachApiServ, 16), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
      name: "fileUrl",
      type: FileUrlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 51902:
/*!*******************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/has-any-permission.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasAnyPermissionPipe: () => (/* binding */ HasAnyPermissionPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);



class HasAnyPermissionPipe {
  constructor(permissionServ) {
    this.permissionServ = permissionServ;
  }
  transform(paths) {
    return paths?.some(path => this.permissionServ.hasRoutePath(path));
  }
  static {
    this.ɵfac = function HasAnyPermissionPipe_Factory(t) {
      return new (t || HasAnyPermissionPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.PermissionServ, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "hasAnyPermission",
      type: HasAnyPermissionPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 43561:
/*!***************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/has-permission.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasPermissionPipe: () => (/* binding */ HasPermissionPipe)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 82348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);



class HasPermissionPipe {
  constructor(permissionServ) {
    this.permissionServ = permissionServ;
  }
  transform(path) {
    return this.permissionServ.hasRoutePath(path);
  }
  static {
    this.ɵfac = function HasPermissionPipe_Factory(t) {
      return new (t || HasPermissionPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.PermissionServ, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "hasPermission",
      type: HasPermissionPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 34015:
/*!*************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConvertPipe: () => (/* reexport safe */ _area_convert_pipe__WEBPACK_IMPORTED_MODULE_0__.AreaConvertPipe),
/* harmony export */   AryFilterPipe: () => (/* reexport safe */ _ary_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.AryFilterPipe),
/* harmony export */   AryFindPipe: () => (/* reexport safe */ _ary_find_pipe__WEBPACK_IMPORTED_MODULE_3__.AryFindPipe),
/* harmony export */   AryFindValuePipe: () => (/* reexport safe */ _ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_2__.AryFindValuePipe),
/* harmony export */   ArySortPipe: () => (/* reexport safe */ _ary_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe),
/* harmony export */   CtrlHasRequiredPipe: () => (/* reexport safe */ _ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__.CtrlHasRequiredPipe),
/* harmony export */   DateFormatterPipe: () => (/* reexport safe */ _date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__.DateFormatterPipe),
/* harmony export */   EmptyFormatterPipe: () => (/* reexport safe */ _empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__.EmptyFormatterPipe),
/* harmony export */   FileUrlPipe: () => (/* reexport safe */ _file_url_pipe__WEBPACK_IMPORTED_MODULE_8__.FileUrlPipe),
/* harmony export */   HasAnyPermissionPipe: () => (/* reexport safe */ _has_any_permission_pipe__WEBPACK_IMPORTED_MODULE_9__.HasAnyPermissionPipe),
/* harmony export */   HasPermissionPipe: () => (/* reexport safe */ _has_permission_pipe__WEBPACK_IMPORTED_MODULE_10__.HasPermissionPipe),
/* harmony export */   IsEmptyPipe: () => (/* reexport safe */ _is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__.IsEmptyPipe),
/* harmony export */   IsSameDatePipe: () => (/* reexport safe */ _is_same_date_pipe__WEBPACK_IMPORTED_MODULE_12__.IsSameDatePipe),
/* harmony export */   JsonParsePipe: () => (/* reexport safe */ _json_parse_pipe__WEBPACK_IMPORTED_MODULE_13__.JsonParsePipe),
/* harmony export */   PhoneFormatterPipe: () => (/* reexport safe */ _phone_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__.PhoneFormatterPipe),
/* harmony export */   RoundDefaultPipe: () => (/* reexport safe */ _round_default_pipe__WEBPACK_IMPORTED_MODULE_15__.RoundDefaultPipe),
/* harmony export */   SafeHtmlPipe: () => (/* reexport safe */ _safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe),
/* harmony export */   SafeUrlPipe: () => (/* reexport safe */ _safe_url_pipe__WEBPACK_IMPORTED_MODULE_17__.SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _area_convert_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-convert.pipe */ 29004);
/* harmony import */ var _ary_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ary-filter.pipe */ 44832);
/* harmony import */ var _ary_find_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ary-find-value.pipe */ 36175);
/* harmony import */ var _ary_find_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ary-find.pipe */ 9955);
/* harmony import */ var _ary_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ary-sort.pipe */ 67278);
/* harmony import */ var _ctrl_has_required_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ctrl-has-required.pipe */ 71367);
/* harmony import */ var _date_formatter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-formatter.pipe */ 96304);
/* harmony import */ var _empty_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty-formatter.pipe */ 82287);
/* harmony import */ var _file_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-url.pipe */ 79115);
/* harmony import */ var _has_any_permission_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./has-any-permission.pipe */ 51902);
/* harmony import */ var _has_permission_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./has-permission.pipe */ 43561);
/* harmony import */ var _is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./is-empty.pipe */ 49841);
/* harmony import */ var _is_same_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./is-same-date.pipe */ 38177);
/* harmony import */ var _json_parse_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./json-parse.pipe */ 78981);
/* harmony import */ var _phone_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./phone-formatter.pipe */ 41228);
/* harmony import */ var _round_default_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./round-default.pipe */ 10629);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./safe-html.pipe */ 32650);
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./safe-url.pipe */ 51726);



















/***/ }),

/***/ 49841:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/is-empty.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsEmptyPipe: () => (/* binding */ IsEmptyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class IsEmptyPipe {
  transform(value) {
    if (!value) {
      return true;
    }
    if (value instanceof Date) {
      return value.isMaxUtcDate();
    }
    if (Array.isArray(value) === true) {
      return value.length === 0;
    }
    return false;
  }
  static {
    this.ɵfac = function IsEmptyPipe_Factory(t) {
      return new (t || IsEmptyPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "isEmpty",
      type: IsEmptyPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 38177:
/*!*************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/is-same-date.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsSameDatePipe: () => (/* binding */ IsSameDatePipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 29328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class IsSameDatePipe {
  transform(value, compareValue = new Date()) {
    if (!value) {
      return false;
    }
    if (!compareValue) {
      return false;
    }
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(value, compareValue);
  }
  static {
    this.ɵfac = function IsSameDatePipe_Factory(t) {
      return new (t || IsSameDatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isSameDate",
      type: IsSameDatePipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 78981:
/*!***********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/json-parse.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonParsePipe: () => (/* binding */ JsonParsePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class JsonParsePipe {
  transform(value) {
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }
  static {
    this.ɵfac = function JsonParsePipe_Factory(t) {
      return new (t || JsonParsePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "jsonParse",
      type: JsonParsePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 41228:
/*!****************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/phone-formatter.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneFormatterPipe: () => (/* binding */ PhoneFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class PhoneFormatterPipe {
  transform(phoneStr, extStr, emptyReplaceStr = '') {
    let value = '';
    if ((phoneStr?.trim() || '').length > 0) value = phoneStr?.trim() || '';
    if ((extStr?.trim() || '').length > 0) value = `${value} #${extStr?.trim() || ''}`;
    if (value.trim().length <= 0) return emptyReplaceStr;
    return value;
  }
  static {
    this.ɵfac = function PhoneFormatterPipe_Factory(t) {
      return new (t || PhoneFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "phoneFormatter",
      type: PhoneFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 10629:
/*!**************************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/round-default.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundDefaultPipe: () => (/* binding */ RoundDefaultPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class RoundDefaultPipe {
  /**
   * @param value 要轉換的值（可為 string 或 number）
   * @param digits 保留幾位小數（預設 0）
   * @param defaultValue 當 value 無效時回傳的預設值（預設 '-'）
   * @param useThousandSeparator 是否使用千分位逗號（預設 true）
   */
  transform(value, digits = 0, defaultValue = '-', useThousandSeparator = true) {
    const num = Number(value);
    if (isNaN(num)) {
      return String(defaultValue);
    }
    const fixed = num.toFixed(digits);
    if (!useThousandSeparator) {
      return fixed;
    }
    const [intPart, decimalPart] = fixed.split('.');
    const withComma = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimalPart ? `${withComma}.${decimalPart}` : withComma;
  }
  static {
    this.ɵfac = function RoundDefaultPipe_Factory(t) {
      return new (t || RoundDefaultPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "roundDefault",
      type: RoundDefaultPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 32650:
/*!**********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/safe-html.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 74150);



class SafeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static {
    this.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 51726:
/*!*********************************************************!*\
  !*** ./libs/core/src/lib/shared/pipes/safe-url.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeUrlPipe: () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 74150);



class SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
  static {
    this.ɵfac = function SafeUrlPipe_Factory(t) {
      return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeUrl",
      type: SafeUrlPipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 13348:
/*!***************************************************!*\
  !*** ./libs/core/src/lib/shared/shared.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/third-party.module */ 14533);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 71378);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ 32920);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ 47691);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes */ 34015);
/* harmony import */ var _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bbd-notify/bbd-notify.module */ 16669);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../directives */ 82658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);


// Third party packages

// Custom packages







const CUST_MODULES = [_modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule];
const CUST_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDLoadingIndicatorComponent];
const CUST_CONTROLS = [_controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent];
const CUST_PIPES = [_pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe];
const THIRD_MODULES = [_modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule];
const CUST_DIRECTIVES = [_directives__WEBPACK_IMPORTED_MODULE_6__.ImageFallbackDirective];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, CUST_MODULES, THIRD_MODULES, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_directives__WEBPACK_IMPORTED_MODULE_6__.ImageFallbackDirective, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDLoadingIndicatorComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _modules__WEBPACK_IMPORTED_MODULE_3__.AntdModule, _modules__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFilterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindValuePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AryFindPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.ArySortPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.CtrlHasRequiredPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.DateFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.EmptyFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.JsonParsePipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.PhoneFormatterPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.FileUrlPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.RoundDefaultPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.AreaConvertPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.HasAnyPermissionPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe, _pipes__WEBPACK_IMPORTED_MODULE_4__.IsSameDatePipe, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDQuillEditorViewerComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImageUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDImgNativeUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDFileUploadComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDConfirmDialogComponent, _components__WEBPACK_IMPORTED_MODULE_1__.BBDLoadingIndicatorComponent, _controls__WEBPACK_IMPORTED_MODULE_2__.ZipCodeControlComponent, _modules_third_party_module__WEBPACK_IMPORTED_MODULE_0__.ThirdPartyModule, _components_bbd_notify_bbd_notify_module__WEBPACK_IMPORTED_MODULE_5__.BBDNotifyModule, _directives__WEBPACK_IMPORTED_MODULE_6__.ImageFallbackDirective]
  });
})();

/***/ }),

/***/ 51977:
/*!******************************************************!*\
  !*** ./libs/core/src/lib/shared/validators/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validation: () => (/* reexport safe */ _validation_validator__WEBPACK_IMPORTED_MODULE_0__.Validation)
/* harmony export */ });
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.validator */ 88542);


/***/ }),

/***/ 88542:
/*!*********************************************************************!*\
  !*** ./libs/core/src/lib/shared/validators/validation.validator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validation: () => (/* binding */ Validation)
/* harmony export */ });
class Validation {
  static match(controlName, matchingControlName) {
    return controls => {
      const control = controls.get(controlName);
      const compareControl = controls.get(matchingControlName);
      if (compareControl?.errors && !compareControl.errors['matching']) {
        return null;
      }
      if (control?.value !== compareControl?.value) {
        controls.get(matchingControlName)?.setErrors({
          matching: true
        });
        return {
          matching: true
        };
      } else {
        return null;
      }
    };
  }
  static noMatch(controlName, matchingControlName) {
    return controls => {
      const control = controls.get(controlName);
      const compareControl = controls.get(matchingControlName);
      if (compareControl?.errors && !compareControl.errors['noMatching']) {
        return null;
      }
      if (control?.value === compareControl?.value) {
        controls.get(matchingControlName)?.setErrors({
          noMatching: true
        });
        return {
          noMatching: true
        };
      } else {
        return null;
      }
    };
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(18867)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map