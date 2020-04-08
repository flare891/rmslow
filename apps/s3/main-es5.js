function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../libs/core/src/index.ts":
  /*!************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/core/src/index.ts ***!
    \************************************************************************/

  /*! exports provided: CoreModule */

  /***/
  function libsCoreSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/core.module */
    "../../libs/core/src/lib/core.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return _lib_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"];
    });
    /***/

  },

  /***/
  "../../libs/core/src/lib/core.module.ts":
  /*!**********************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/core/src/lib/core.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: CoreModule */

  /***/
  function libsCoreSrcLibCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/radio */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/stepper */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/expansion */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/chips */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js"); //Angular Material Components


    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/file-explorer/src/index.ts":
  /*!*********************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/index.ts ***!
    \*********************************************************************************/

  /*! exports provided: FileExplorerModule, FileElement */

  /***/
  function libsFileExplorerSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_file_explorer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/file-explorer.module */
    "../../libs/file-explorer/src/lib/file-explorer.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function () {
      return _lib_file_explorer_module__WEBPACK_IMPORTED_MODULE_0__["FileExplorerModule"];
    });
    /* harmony import */


    var _lib_models_file_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/models/file-element */
    "../../libs/file-explorer/src/lib/models/file-element.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileElement", function () {
      return _lib_models_file_element__WEBPACK_IMPORTED_MODULE_1__["FileElement"];
    });
    /***/

  },

  /***/
  "../../libs/file-explorer/src/lib/file-explorer.module.ts":
  /*!****************************************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/lib/file-explorer.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: FileExplorerModule */

  /***/
  function libsFileExplorerSrcLibFileExplorerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function () {
      return FileExplorerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @rms-frontend/core */
    "../../libs/core/src/index.ts");
    /* harmony import */


    var _file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./file-explorer/file-explorer.component */
    "../../libs/file-explorer/src/lib/file-explorer/file-explorer.component.ts");
    /* harmony import */


    var _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rename-modal/rename-modal.component */
    "../../libs/file-explorer/src/lib/rename-modal/rename-modal.component.ts");
    /* harmony import */


    var _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-folder-modal/new-folder-modal.component */
    "../../libs/file-explorer/src/lib/new-folder-modal/new-folder-modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-file-drop */
    "../../node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");

    var FileExplorerModule = function FileExplorerModule() {
      _classCallCheck(this, FileExplorerModule);
    };

    FileExplorerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileExplorerModule
    });
    FileExplorerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FileExplorerModule_Factory(t) {
        return new (t || FileExplorerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileExplorerModule, {
        declarations: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"], _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__["RenameModalComponent"], _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_5__["NewFolderModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"]],
        exports: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileExplorerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"]],
          declarations: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"], _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__["RenameModalComponent"], _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_5__["NewFolderModalComponent"]],
          exports: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/file-explorer/src/lib/file-explorer/file-explorer.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/lib/file-explorer/file-explorer.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: FileExplorerComponent */

  /***/
  function libsFileExplorerSrcLibFileExplorerFileExplorerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileExplorerComponent", function () {
      return FileExplorerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_file_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/file-element */
    "../../libs/file-explorer/src/lib/models/file-element.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../new-folder-modal/new-folder-modal.component */
    "../../libs/file-explorer/src/lib/new-folder-modal/new-folder-modal.component.ts");
    /* harmony import */


    var _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rename-modal/rename-modal.component */
    "../../libs/file-explorer/src/lib/rename-modal/rename-modal.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-file-drop */
    "../../node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");

    function FileExplorerComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.navigateUp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " arrow_back ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileExplorerComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.selected.length, " File(s) Selected");
      }
    }

    function FileExplorerComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selected = [];
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " clear ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileExplorerComponent_mat_grid_tile_17_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " folder ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileExplorerComponent_mat_grid_tile_17_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " insert_drive_file ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        element: a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "background-color": a0
      };
    };

    function FileExplorerComponent_mat_grid_tile_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_mat_grid_tile_17_Template_div_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var element_r14 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.navigate(element_r14, $event);
        })("contextmenu", function FileExplorerComponent_mat_grid_tile_17_Template_div_contextmenu_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _r15.openMenu();

          return $event.preventDefault();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileExplorerComponent_mat_grid_tile_17_mat_icon_4_Template, 2, 0, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileExplorerComponent_mat_grid_tile_17_mat_icon_5_Template, 2, 0, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4)("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, element_r14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r3.selected.includes(element_r14) ? "grey" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r14.isFolder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r14.isFolder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.name);
      }
    }

    function FileExplorerComponent_ng_template_20_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_ng_template_20_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var element_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().element;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.encrypt(element_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Encrypt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileExplorerComponent_ng_template_20_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_ng_template_20_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var element_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().element;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.decrypt(element_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lock_open");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Decrypt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0) {
      return {
        self: a0
      };
    };

    function FileExplorerComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "open_with");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Move To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_ng_template_20_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var element_r21 = ctx.element;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.openRenameDialog(element_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rename");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_ng_template_20_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var element_r21 = ctx.element;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.deleteElement(element_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FileExplorerComponent_ng_template_20_button_15_Template, 5, 0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FileExplorerComponent_ng_template_20_button_16_Template, 5, 0, "button", 27);
      }

      if (rf & 2) {
        var element_r21 = ctx.element;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6)("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, element_r21));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.selected.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r21.isFolder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r21.isFolder);
      }
    }

    function FileExplorerComponent_ng_template_23_ng_container_0_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_ng_template_23_ng_container_0_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var self_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().self;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.moveElement(self_r33, element_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.name, " ");
      }
    }

    function FileExplorerComponent_ng_template_23_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileExplorerComponent_ng_template_23_ng_container_0_button_1_Template, 2, 1, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var element_r35 = ctx.$implicit;

        var self_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().self;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r35.isFolder && element_r35.id !== self_r33.id && !ctx_r34.selected.includes(element_r35));
      }
    }

    function FileExplorerComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileExplorerComponent_ng_template_23_ng_container_0_Template, 2, 1, "ng-container", 28);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7._fileElements);
      }
    }

    function FileExplorerComponent_ngx_file_drop_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-file-drop", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFileDrop", function FileExplorerComponent_ngx_file_drop_24_Template_ngx_file_drop_onFileDrop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r43.dropped($event);
          return ctx_r43.dragged = false;
        })("onFileOver", function FileExplorerComponent_ngx_file_drop_24_Template_ngx_file_drop_onFileOver_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.fileOver($event);
        })("onFileLeave", function FileExplorerComponent_ngx_file_drop_24_Template_ngx_file_drop_onFileLeave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r46.fileLeave($event);
          return ctx_r46.dragged = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FileExplorerComponent = /*#__PURE__*/function () {
      function FileExplorerComponent(dialog) {
        _classCallCheck(this, FileExplorerComponent);

        this.dialog = dialog;
        this.selected = [];
        this._fileElements = [];
        this.folderAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filesUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigatedDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigatedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.encryptEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.decryptEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FileExplorerComponent, [{
        key: "deleteElement",
        value: function deleteElement(element) {
          var _this = this;

          if (this.selected.length) {
            if (!this.selected.includes(element)) this.selected.push(element);
            this.selected.forEach(function (elem) {
              _this.elementRemoved.emit(elem);
            });
          } else this.elementRemoved.emit(element);
        }
      }, {
        key: "navigate",
        value: function navigate(element, event) {
          if (event.ctrlKey) {
            this.selected = this.toggleInArray(this.selected, element);
          } else {
            this.selected = [];

            if (element.isFolder) {
              this.navigatedDown.emit(element);
            } else {
              this.fileSelected.emit(element);
            }
          }
        }
      }, {
        key: "navigateUp",
        value: function navigateUp() {
          this.navigatedUp.emit();
        }
      }, {
        key: "moveElement",
        value: function moveElement(element, moveTo) {
          var _this2 = this;

          if (this.selected.length) {
            if (!this.selected.includes(element)) this.selected.push(element);
            this.selected.forEach(function (elem) {
              _this2.elementMoved.emit({
                element: elem,
                moveTo: moveTo
              });
            });
          } else this.elementMoved.emit({
            element: element,
            moveTo: moveTo
          });
        }
      }, {
        key: "openNewFolderDialog",
        value: function openNewFolderDialog() {
          var _this3 = this;

          var dialogRef = this.dialog.open(_new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_3__["NewFolderModalComponent"]);
          dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
              _this3.folderAdded.emit({
                name: res
              });
            }
          });
        }
      }, {
        key: "openRenameDialog",
        value: function openRenameDialog(element) {
          var _this4 = this;

          var dialogRef = this.dialog.open(_rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__["RenameModalComponent"]);
          dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
              element.name = res;

              _this4.elementRenamed.emit(element);
            }
          });
        }
      }, {
        key: "openMenu",
        value: function openMenu(event, element, viewChild) {
          event.preventDefault();
          viewChild.openMenu();
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var files = event.srcElement.files;
          var fileArray = [];

          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileElem = new _models_file_element__WEBPACK_IMPORTED_MODULE_1__["FileElement"]();
            fileElem.actualFile = file;
            fileElem.isFolder = false;
            fileElem.name = file.name;
            fileArray.push(fileElem);
          }

          this.filesUploaded.emit(fileArray);
        }
      }, {
        key: "dropped",
        value: function dropped(files, element) {
          var _this5 = this;

          var fileArray = [];
          var total = files.length;
          var count = 0;

          var _iterator = _createForOfIteratorHelper(files),
              _step;

          try {
            var _loop = function _loop() {
              var droppedFile = _step.value;

              // Is it a file?
              if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                  var relPath = droppedFile.relativePath;
                  var pathArray = relPath.split('/');
                  pathArray.pop();
                  relPath = pathArray.join('/');
                  count++;
                  var fileElem = new _models_file_element__WEBPACK_IMPORTED_MODULE_1__["FileElement"]();
                  fileElem.actualFile = file;
                  fileElem.isFolder = false;
                  fileElem.name = file.name;
                  fileElem.parent = relPath;
                  fileArray.push(fileElem);
                  if (count === total) _this5.filesUploaded.emit(fileArray);
                });
              } else {
                // It was a directory (empty directories are added, otherwise only files)
                var _fileEntry = droppedFile.fileEntry;
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "fileOver",
        value: function fileOver(event) {//Add any fileOver code
        }
      }, {
        key: "fileLeave",
        value: function fileLeave(event) {//Add any fileLeave code
        }
      }, {
        key: "encrypt",
        value: function encrypt(file) {
          this.encryptEmitter.emit(file);
        }
      }, {
        key: "decrypt",
        value: function decrypt(file) {
          this.decryptEmitter.emit(file);
        }
      }, {
        key: "toggleInArray",
        value: function toggleInArray(array, element) {
          var index = array.indexOf(element);

          if (index === -1) {
            array.push(element);
          } else {
            array.splice(index, 1);
          }

          return array;
        }
      }, {
        key: "fileElements",
        set: function set(value) {
          this._fileElements = value;
          this.selected = [];
        }
      }]);

      return FileExplorerComponent;
    }();

    FileExplorerComponent.ɵfac = function FileExplorerComponent_Factory(t) {
      return new (t || FileExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    FileExplorerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileExplorerComponent,
      selectors: [["rms-file-explorer"]],
      inputs: {
        fileElements: "fileElements",
        canNavigateUp: "canNavigateUp",
        path: "path"
      },
      outputs: {
        folderAdded: "folderAdded",
        filesUploaded: "filesUploaded",
        elementRemoved: "elementRemoved",
        elementRenamed: "elementRenamed",
        elementMoved: "elementMoved",
        navigatedDown: "navigatedDown",
        fileSelected: "fileSelected",
        navigatedUp: "navigatedUp",
        encryptEmitter: "encryptEmitter",
        decryptEmitter: "decryptEmitter"
      },
      decls: 27,
      vars: 7,
      consts: [[3, "dragover"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [2, "margin-left", "8px"], [1, "spacer"], ["style", "font-size: small;", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between stretch", 1, "container"], ["fxFlex", "", "fxLayout", "row", 1, "content"], ["cols", "8", "rowHeight", "100px", "fxFlex", ""], ["class", "file-or-folder", 4, "ngFor", "ngForOf"], [3, "overlapTrigger"], ["rootMenu", "matMenu"], ["matMenuContent", ""], ["moveToMenu", "matMenu"], ["dropZoneLabel", "Drop files here", "dropZoneClassName", "drop-area", "contentClassName", "drop-content", 3, "onFileDrop", "onFileOver", "onFileLeave", 4, "ngIf"], ["hidden", "", "multiple", "", "type", "file", 3, "change"], ["uploader", ""], [2, "font-size", "small"], [1, "file-or-folder"], [3, "matMenuTriggerFor", "matMenuTriggerData"], ["menuTrigger", "matMenuTrigger"], [1, "element-container", 3, "ngStyle", "click", "contextmenu"], ["color", "primary", "class", "file-or-folder-icon pointer", 4, "ngIf"], ["color", "primary", 1, "file-or-folder-icon", "pointer"], ["mat-menu-item", "", 3, "matMenuTriggerFor", "matMenuTriggerData"], ["mat-menu-item", "", 3, "disabled", "click"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["dropZoneLabel", "Drop files here", "dropZoneClassName", "drop-area", "contentClassName", "drop-content", 3, "onFileDrop", "onFileOver", "onFileLeave"]],
      template: function FileExplorerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function FileExplorerComponent_Template_div_dragover_0_listener() {
            return ctx.dragged = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileExplorerComponent_button_2_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FileExplorerComponent_span_6_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FileExplorerComponent_button_7_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_Template_button_click_8_listener() {
            return ctx.openNewFolderDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " create_new_folder ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileExplorerComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            return _r9.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " cloud_upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-list", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FileExplorerComponent_mat_grid_tile_17_Template, 8, 10, "mat-grid-tile", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-menu", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FileExplorerComponent_ng_template_20_Template, 17, 7, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FileExplorerComponent_ng_template_23_Template, 1, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FileExplorerComponent_ngx_file_drop_24_Template, 1, 0, "ngx-file-drop", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileExplorerComponent_Template_input_change_25_listener($event) {
            return ctx.uploadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canNavigateUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.path || "Files", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._fileElements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dragged);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__["NgxFileDropComponent"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-or-folder[_ngcontent-%COMP%] {\n  padding: 8px;\n  overflow: hidden;\n}\n\n.file-or-folder-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.element-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: space-between;\n  flex-direction: column;\n  padding: 15px;\n  word-break: break-all;\n  overflow-y: hidden;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NtY2ZhbGwyL2RlcGxveS9ybXNsb3cvcm1zLWZyb250ZW5kL2xpYnMvZmlsZS1leHBsb3Jlci9zcmMvbGliL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyIsIi4uL2xpYnMvZmlsZS1leHBsb3Jlci9zcmMvbGliL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFRiIsImZpbGUiOiIuLi9saWJzL2ZpbGUtZXhwbG9yZXIvc3JjL2xpYi9maWxlLWV4cGxvcmVyL2ZpbGUtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5maWxlLW9yLWZvbGRlciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpbGUtb3ItZm9sZGVyLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uZWxlbWVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmlsZS1vci1mb2xkZXIge1xuICBwYWRkaW5nOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5maWxlLW9yLWZvbGRlci1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZWxlbWVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgaGVpZ2h0OiA2MHB4O1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileExplorerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'rms-file-explorer',
          templateUrl: './file-explorer.component.html',
          styleUrls: ['./file-explorer.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        fileElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fileElements']
        }],
        canNavigateUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        folderAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        filesUploaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        elementRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        elementRenamed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        elementMoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        navigatedDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        fileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        navigatedUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        encryptEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        decryptEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/file-explorer/src/lib/models/file-element.ts":
  /*!***************************************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/lib/models/file-element.ts ***!
    \***************************************************************************************************/

  /*! exports provided: FileElement */

  /***/
  function libsFileExplorerSrcLibModelsFileElementTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileElement", function () {
      return FileElement;
    });

    var FileElement = function FileElement() {
      _classCallCheck(this, FileElement);
    };
    /***/

  },

  /***/
  "../../libs/file-explorer/src/lib/new-folder-modal/new-folder-modal.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/lib/new-folder-modal/new-folder-modal.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: NewFolderModalComponent */

  /***/
  function libsFileExplorerSrcLibNewFolderModalNewFolderModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewFolderModalComponent", function () {
      return NewFolderModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NewFolderModalComponent = /*#__PURE__*/function () {
      function NewFolderModalComponent() {
        _classCallCheck(this, NewFolderModalComponent);
      }

      _createClass(NewFolderModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewFolderModalComponent;
    }();

    NewFolderModalComponent.ɵfac = function NewFolderModalComponent_Factory(t) {
      return new (t || NewFolderModalComponent)();
    };

    NewFolderModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewFolderModalComponent,
      selectors: [["s3-new-folder-modal"]],
      decls: 10,
      vars: 2,
      consts: [["mat-dialog-title", ""], [1, "example-full-width"], ["matInput", "", "placeholder", "Folder Name", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]],
      template: function NewFolderModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create a new folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewFolderModalComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.folderName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.folderName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.folderName);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9saWJzL2ZpbGUtZXhwbG9yZXIvc3JjL2xpYi9uZXctZm9sZGVyLW1vZGFsL25ldy1mb2xkZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewFolderModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 's3-new-folder-modal',
          templateUrl: './new-folder-modal.component.html',
          styleUrls: ['./new-folder-modal.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/file-explorer/src/lib/rename-modal/rename-modal.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/lib/rename-modal/rename-modal.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: RenameModalComponent */

  /***/
  function libsFileExplorerSrcLibRenameModalRenameModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenameModalComponent", function () {
      return RenameModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var RenameModalComponent = /*#__PURE__*/function () {
      function RenameModalComponent() {
        _classCallCheck(this, RenameModalComponent);
      }

      _createClass(RenameModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RenameModalComponent;
    }();

    RenameModalComponent.ɵfac = function RenameModalComponent_Factory(t) {
      return new (t || RenameModalComponent)();
    };

    RenameModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RenameModalComponent,
      selectors: [["s3-rename-modal"]],
      decls: 10,
      vars: 2,
      consts: [["mat-dialog-title", ""], [1, "example-full-width"], ["matInput", "", "placeholder", "Folder Name", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]],
      template: function RenameModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rename Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RenameModalComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.folderName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.folderName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.folderName);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9saWJzL2ZpbGUtZXhwbG9yZXIvc3JjL2xpYi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenameModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 's3-rename-modal',
          templateUrl: './rename-modal.component.html',
          styleUrls: ['./rename-modal.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/+state/file.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/+state/file.actions.ts ***!
    \****************************************/

  /*! exports provided: UploadFiles, AddFolder, DeleteFolder, DeleteFile, RenameFile, RenameFolder, MoveFolder, MoveFile, NavigateTo, NavigateUp */

  /***/
  function srcAppStateFileActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFiles", function () {
      return UploadFiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFolder", function () {
      return AddFolder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteFolder", function () {
      return DeleteFolder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteFile", function () {
      return DeleteFile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenameFile", function () {
      return RenameFile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenameFolder", function () {
      return RenameFolder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveFolder", function () {
      return MoveFolder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveFile", function () {
      return MoveFile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigateTo", function () {
      return NavigateTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigateUp", function () {
      return NavigateUp;
    });

    var UploadFiles = function UploadFiles(files) {
      _classCallCheck(this, UploadFiles);

      this.files = files;
    };

    UploadFiles.type = '[Explorer] Upload Files';

    var AddFolder = function AddFolder(folder) {
      _classCallCheck(this, AddFolder);

      this.folder = folder;
    };

    AddFolder.type = '[Explorer] Add Folder';

    var DeleteFolder = function DeleteFolder(id) {
      _classCallCheck(this, DeleteFolder);

      this.id = id;
    };

    DeleteFolder.type = '[Explorer] Delete Folder';

    var DeleteFile = function DeleteFile(id) {
      _classCallCheck(this, DeleteFile);

      this.id = id;
    };

    DeleteFile.type = '[Explorer] Delete File';

    var RenameFile = function RenameFile(id, name) {
      _classCallCheck(this, RenameFile);

      this.id = id;
      this.name = name;
    };

    RenameFile.type = '[Explorer] Rename File';

    var RenameFolder = function RenameFolder(id, name) {
      _classCallCheck(this, RenameFolder);

      this.id = id;
      this.name = name;
    };

    RenameFolder.type = '[Explorer] Rename Folder';

    var MoveFolder = function MoveFolder(id, parent) {
      _classCallCheck(this, MoveFolder);

      this.id = id;
      this.parent = parent;
    };

    MoveFolder.type = '[Explorer] Move Folder';

    var MoveFile = function MoveFile(id, parent) {
      _classCallCheck(this, MoveFile);

      this.id = id;
      this.parent = parent;
    };

    MoveFile.type = '[Explorer] Move File';

    var NavigateTo = function NavigateTo(folder) {
      _classCallCheck(this, NavigateTo);

      this.folder = folder;
    };

    NavigateTo.type = '[Explorer] Navigate To';

    var NavigateUp = function NavigateUp() {
      _classCallCheck(this, NavigateUp);
    };

    NavigateUp.type = '[Explorer] Navigate Up';
    /***/
  },

  /***/
  "./src/app/+state/file.state.ts":
  /*!**************************************!*\
    !*** ./src/app/+state/file.state.ts ***!
    \**************************************/

  /*! exports provided: ExplorerState */

  /***/
  function srcAppStateFileStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplorerState", function () {
      return ExplorerState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _file_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./file.actions */
    "./src/app/+state/file.actions.ts");
    /* harmony import */


    var _ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs-labs/immer-adapter */
    "../../node_modules/@ngxs-labs/immer-adapter/__ivy_ngcc__/fesm2015/ngxs-labs-immer-adapter.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExplorerState = /*#__PURE__*/function () {
      function ExplorerState() {
        _classCallCheck(this, ExplorerState);
      }

      _createClass(ExplorerState, [{
        key: "uploadFiles",
        value: function uploadFiles(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          files.push.apply(files, _toConsumableArray(action.files));
          ctx.setState(function (hereState) {
            hereState.files = files;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "addFolder",
        value: function addFolder(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          files.push(action.folder);
          ctx.setState(function (hereState) {
            hereState.files = files;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "deleteFolder",
        value: function deleteFolder(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          ctx.setState(function (hereState) {
            hereState.files = files.filter(function (entry) {
              return entry.id !== action.id && entry.parent !== action.id;
            });
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          var filteredFiles = files.filter(function (entry) {
            return entry.id !== action.id;
          });
          ctx.setState(function (hereState) {
            hereState.files = filteredFiles;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "renameFile",
        value: function renameFile(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          files.find(function (file) {
            return file.id === action.id;
          }).name = action.name;
          ctx.setState(function (hereState) {
            hereState.files = files;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "renameFolder",
        value: function renameFolder(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          files.find(function (file) {
            return file.id === action.id;
          }).name = action.name;
          ctx.setState(function (hereState) {
            hereState.files = files;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "moveFolder",
        value: function moveFolder(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          files.find(function (file) {
            return file.id === action.id;
          }).parent = action.parent;
          ctx.setState(function (hereState) {
            hereState.files = files;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "moveFile",
        value: function moveFile(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          files.find(function (file) {
            return file.id === action.id;
          }).parent = action.parent;
          ctx.setState(function (hereState) {
            hereState.files = files;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "navigateTo",
        value: function navigateTo(ctx, action) {
          ctx.setState(function (hereState) {
            hereState.currentRoot = action.folder;
            return hereState;
          }); //Add code to send files to server here
        }
      }, {
        key: "navigateUp",
        value: function navigateUp(ctx, action) {
          var state = ctx.getState();
          var files = state.files;
          var newRoot = files.find(function (a) {
            return a.id === state.currentRoot.parent;
          }) || {
            id: 'root',
            name: 'Files',
            isFolder: true,
            parent: ''
          };
          ctx.setState(function (hereState) {
            hereState.currentRoot = newRoot;
            return hereState;
          }); //Add code to send files to server here
        }
      }], [{
        key: "currentSpace",
        value: function currentSpace(state) {
          return state.files.filter(function (file) {
            return file.parent === state.currentRoot.id;
          });
        }
      }, {
        key: "currentRoot",
        value: function currentRoot(state) {
          return state.currentRoot;
        }
      }]);

      return ExplorerState;
    }();

    ExplorerState.ɵfac = function ExplorerState_Factory(t) {
      return new (t || ExplorerState)();
    };

    ExplorerState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ExplorerState,
      factory: ExplorerState.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["UploadFiles"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["UploadFiles"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "uploadFiles", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["AddFolder"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["AddFolder"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "addFolder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteFolder"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteFolder"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "deleteFolder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteFile"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteFile"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "deleteFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["RenameFile"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["RenameFile"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "renameFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["RenameFolder"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["RenameFolder"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "renameFolder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["MoveFolder"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["MoveFolder"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "moveFolder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["MoveFile"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["MoveFile"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "moveFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["NavigateTo"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["NavigateTo"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "navigateTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_file_actions__WEBPACK_IMPORTED_MODULE_2__["NavigateUp"]), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableContext"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _file_actions__WEBPACK_IMPORTED_MODULE_2__["NavigateUp"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState.prototype, "navigateUp", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableSelector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState, "currentSpace", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), Object(_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_3__["ImmutableSelector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ExplorerState, "currentRoot", null);
    ExplorerState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'explorer',
      defaults: {
        files: [],
        currentRoot: {
          id: 'root',
          name: 'Files',
          isFolder: true,
          parent: ''
        }
      }
    })], ExplorerState);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ExplorerState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
      }], null, {
        uploadFiles: [],
        addFolder: [],
        deleteFolder: [],
        deleteFile: [],
        renameFile: [],
        renameFolder: [],
        moveFolder: [],
        moveFile: [],
        navigateTo: [],
        navigateUp: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @rms-frontend/file-explorer */
    "../../libs/file-explorer/src/index.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! uuid */
    "../../node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _state_file_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./+state/file.actions */
    "./src/app/+state/file.actions.ts");
    /* harmony import */


    var _state_file_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./+state/file.state */
    "./src/app/+state/file.state.ts");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! crypto-js */
    "../../node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _libs_file_explorer_src_lib_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../libs/file-explorer/src/lib/file-explorer/file-explorer.component */
    "../../libs/file-explorer/src/lib/file-explorer/file-explorer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(store) {
        var _this6 = this;

        _classCallCheck(this, AppComponent);

        this.store = store;
        this.title = 's3';
        this.canNavigateUp = false;
        this.password = 'testpassword';
        this.serverkey = 'randomkey';
        this.rootSub = this.root$.subscribe(function (a) {
          _this6.currentRoot = a;
          _this6.canNavigateUp = !!(a === null || a === void 0 ? void 0 : a.parent);
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          var initialFolders = [];

          for (var i = 0; i < 10; i++) {
            var folder = new _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_3__["FileElement"]();
            folder.isFolder = true;
            folder.name = "Folder".concat(i);
            folder.parent = 'root';
            folder.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
            initialFolders.push(folder);
          }

          initialFolders.forEach(function (element) {
            _this7.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["AddFolder"](element));
          });
        }
      }, {
        key: "addFolder",
        value: function addFolder(folder) {
          this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["AddFolder"]({
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
            isFolder: true,
            name: folder.name,
            parent: this.currentRoot ? this.currentRoot.id : 'root'
          }));
        }
      }, {
        key: "removeElement",
        value: function removeElement(element) {
          if (element.isFolder) this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteFolder"](element.id));else this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteFile"](element.id));
        }
      }, {
        key: "moveElement",
        value: function moveElement(event) {
          if (event.element.isFolder) this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["MoveFolder"](event.element.id, event.moveTo.id));else this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["MoveFile"](event.element.id, event.moveTo.id));
        }
      }, {
        key: "renameElement",
        value: function renameElement(element) {
          if (element.isFolder) this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["RenameFolder"](element.id, element.name));else this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["RenameFile"](element.id, element.name));
        }
      }, {
        key: "navigateUp",
        value: function navigateUp() {
          this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["NavigateUp"]());
          this.currentPath = this.popFromPath(this.currentPath) || 'Files';
        }
      }, {
        key: "navigateToFolder",
        value: function navigateToFolder(element) {
          this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["NavigateTo"](element));
          this.currentPath = this.pushToPath(this.currentPath, element.name);
          this.canNavigateUp = true;
        }
      }, {
        key: "fileSelected",
        value: function fileSelected(file) {
          alert("You clicked ".concat(file.name));
        }
      }, {
        key: "filesUploaded",
        value: function filesUploaded(files) {
          var _this8 = this;

          var pathFolders = [];
          var createfFolders = [];
          files.forEach(function (element, totalIndex) {
            if (element.parent) {
              var path = element.parent.split('/');
              var previd = '';
              path.forEach(function (newFolderName, index, array) {
                var _a;

                if (!createfFolders.includes(newFolderName)) {
                  createfFolders.push(newFolderName);
                  var folder = new _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_3__["FileElement"]();
                  folder.isFolder = true;
                  folder.name = newFolderName;

                  if (index === 0) {
                    folder.parent = ((_a = _this8.currentRoot) === null || _a === void 0 ? void 0 : _a.id) || 'root';
                  } else {
                    if (previd.length) folder.parent = previd;else {
                      folder.parent = pathFolders.find(function (a) {
                        return a.name === array[index - 1];
                      }).id;
                    }
                  }

                  folder.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                  previd = folder.id;

                  _this8.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["AddFolder"](folder));

                  pathFolders.push(folder);
                }
              });
            }
          });
          this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["UploadFiles"](files.map(function (file) {
            var _a;

            file.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();

            if (file.parent) {
              var filePath = file.parent.split('/');
              file.parent = pathFolders.find(function (folder) {
                return folder.name === filePath[filePath.length - 1];
              }).id;
            } else file.parent = ((_a = _this8.currentRoot) === null || _a === void 0 ? void 0 : _a.id) || 'root';

            return file;
          })));
        }
      }, {
        key: "pushToPath",
        value: function pushToPath(path, folderName) {
          if (path === 'Files') path = '';
          var p = path ? path : '';
          p += "".concat(folderName, "/");
          return p;
        }
      }, {
        key: "popFromPath",
        value: function popFromPath(path) {
          var p = path ? path : '';
          var split = p.split('/');
          split.splice(split.length - 2, 1);
          p = split.join('/');
          return p;
        }
      }, {
        key: "encrypt",
        value: function encrypt(file) {
          var text = file.name;
          var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(text, this.password).toString();
          file.name = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(encrypted.toString(), this.serverkey).toString();
          this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["RenameFile"](file.id, file.name));
        }
      }, {
        key: "decrypt",
        value: function decrypt(file) {
          if (file.name.startsWith('U2')) {
            var encrypted = file.name;
            var decrypted1 = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].decrypt(encrypted, this.serverkey);
            decrypted1 = decrypted1.toString(crypto_js__WEBPACK_IMPORTED_MODULE_8__["enc"].Utf8);
            var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].decrypt(decrypted1.toString(), this.password);
            file.name = decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_8__["enc"].Utf8);
            this.store.dispatch(new _state_file_actions__WEBPACK_IMPORTED_MODULE_6__["RenameFile"](file.id, file.name));
          } else alert("File not encrypted");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["s3-root"]],
      decls: 4,
      vars: 5,
      consts: [[2, "height", "100%", "width", "100%", "box-sizing", "border-box"], [2, "height", "100%", "width", "100%", "box-sizing", "border-box", "padding", "0"], [3, "fileElements", "path", "canNavigateUp", "folderAdded", "elementRemoved", "navigatedDown", "navigatedUp", "elementRenamed", "elementMoved", "filesUploaded", "fileSelected", "encryptEmitter", "decryptEmitter"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rms-file-explorer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("folderAdded", function AppComponent_Template_rms_file_explorer_folderAdded_2_listener($event) {
            return ctx.addFolder($event);
          })("elementRemoved", function AppComponent_Template_rms_file_explorer_elementRemoved_2_listener($event) {
            return ctx.removeElement($event);
          })("navigatedDown", function AppComponent_Template_rms_file_explorer_navigatedDown_2_listener($event) {
            return ctx.navigateToFolder($event);
          })("navigatedUp", function AppComponent_Template_rms_file_explorer_navigatedUp_2_listener() {
            return ctx.navigateUp();
          })("elementRenamed", function AppComponent_Template_rms_file_explorer_elementRenamed_2_listener($event) {
            return ctx.renameElement($event);
          })("elementMoved", function AppComponent_Template_rms_file_explorer_elementMoved_2_listener($event) {
            return ctx.moveElement($event);
          })("filesUploaded", function AppComponent_Template_rms_file_explorer_filesUploaded_2_listener($event) {
            return ctx.filesUploaded($event);
          })("fileSelected", function AppComponent_Template_rms_file_explorer_fileSelected_2_listener($event) {
            return ctx.fileSelected($event);
          })("encryptEmitter", function AppComponent_Template_rms_file_explorer_encryptEmitter_2_listener($event) {
            return ctx.encrypt($event);
          })("decryptEmitter", function AppComponent_Template_rms_file_explorer_decryptEmitter_2_listener($event) {
            return ctx.decrypt($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fileElements", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.files$))("path", ctx.currentPath)("canNavigateUp", ctx.canNavigateUp);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _libs_file_explorer_src_lib_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_10__["FileExplorerComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzMy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_state_file_state__WEBPACK_IMPORTED_MODULE_7__["ExplorerState"].currentSpace), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AppComponent.prototype, "files$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_state_file_state__WEBPACK_IMPORTED_MODULE_7__["ExplorerState"].currentRoot), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AppComponent.prototype, "root$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 's3-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, {
        files$: [],
        root$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rms_frontend_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @rms-frontend/core */
    "../../libs/core/src/index.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/devtools-plugin */
    "../../node_modules/@ngxs/devtools-plugin/__ivy_ngcc__/fesm2015/ngxs-devtools-plugin.js");
    /* harmony import */


    var _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @rms-frontend/file-explorer */
    "../../libs/file-explorer/src/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _state_file_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./+state/file.state */
    "./src/app/+state/file.state.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_rms_frontend_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_5__["FileExplorerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([_state_file_state__WEBPACK_IMPORTED_MODULE_7__["ExplorerState"]]), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_rms_frontend_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_5__["FileExplorerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵj"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_rms_frontend_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _rms_frontend_file_explorer__WEBPACK_IMPORTED_MODULE_5__["FileExplorerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([_state_file_state__WEBPACK_IMPORTED_MODULE_7__["ExplorerState"]]), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/smcfall2/deploy/rmslow/rms-frontend/apps/s3/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map