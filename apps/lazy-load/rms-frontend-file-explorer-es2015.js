(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rms-frontend-file-explorer"],{

/***/ "../../libs/file-explorer/src/index.ts":
/*!*********************************************************************************!*\
  !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: FileExplorerModule, FileElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_file_explorer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/file-explorer.module */ "../../libs/file-explorer/src/lib/file-explorer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function() { return _lib_file_explorer_module__WEBPACK_IMPORTED_MODULE_0__["FileExplorerModule"]; });

/* harmony import */ var _lib_models_file_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/file-element */ "../../libs/file-explorer/src/lib/models/file-element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileElement", function() { return _lib_models_file_element__WEBPACK_IMPORTED_MODULE_1__["FileElement"]; });





/***/ }),

/***/ "../../libs/file-explorer/src/lib/file-explorer.module.ts":
/*!****************************************************************************************************!*\
  !*** /home/smcfall2/deploy/rmslow/rms-frontend/libs/file-explorer/src/lib/file-explorer.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: FileExplorerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function() { return FileExplorerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rms-frontend/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-explorer/file-explorer.component */ "../../libs/file-explorer/src/lib/file-explorer/file-explorer.component.ts");
/* harmony import */ var _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rename-modal/rename-modal.component */ "../../libs/file-explorer/src/lib/rename-modal/rename-modal.component.ts");
/* harmony import */ var _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-folder-modal/new-folder-modal.component */ "../../libs/file-explorer/src/lib/new-folder-modal/new-folder-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "../../node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");









class FileExplorerModule {
}
FileExplorerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FileExplorerModule });
FileExplorerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FileExplorerModule_Factory(t) { return new (t || FileExplorerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileExplorerModule, { declarations: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"],
        _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__["RenameModalComponent"],
        _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_5__["NewFolderModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"]], exports: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileExplorerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rms_frontend_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"]
                ],
                declarations: [
                    _file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"],
                    _rename_modal_rename_modal_component__WEBPACK_IMPORTED_MODULE_4__["RenameModalComponent"],
                    _new_folder_modal_new_folder_modal_component__WEBPACK_IMPORTED_MODULE_5__["NewFolderModalComponent"]
                ],
                exports: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rms-frontend-file-explorer-es2015.js.map