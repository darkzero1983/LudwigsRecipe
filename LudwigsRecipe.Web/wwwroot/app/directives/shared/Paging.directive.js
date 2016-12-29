"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var models_1 = require('app/models');
var PagingDirective = (function () {
    function PagingDirective() {
        this.changePage = new core_1.EventEmitter();
        this.paging = new models_1.PagingModel();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.PagingModel)
    ], PagingDirective.prototype, "paging", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PagingDirective.prototype, "changePage", void 0);
    PagingDirective = __decorate([
        core_1.Component({
            selector: 'paging-directive',
            template: "\t<nav class=\"text-center\" *ngIf=\"paging.showPaging\">\n\t\t\t\t\t<ul class=\"pagination\">\n\t\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled: !paging.showPreview}\" (click)=\"changePage.emit(page - 1)\">\n\t\t\t\t\t\t\t<span class=\"page-link\" aria-label=\"Previous\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li *ngFor=\"let page of paging.pages\" (click)=\"changePage.emit(page)\" class=\"page-item active\" [ngClass]=\"{active: page == paging.currentPage}\"><span class=\"page-link\">{{page}}</span></li>\n\t\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled: !paging.ShowNext}\" (click)=\"changePage.emit(page + 1)\">\n\t\t\t\t\t\t\t<span class=\"page-link\" aria-label=\"Next\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PagingDirective);
    return PagingDirective;
}());
exports.PagingDirective = PagingDirective;
