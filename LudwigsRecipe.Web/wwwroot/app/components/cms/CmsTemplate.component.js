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
var global_1 = require('app/global');
var CmsTemplateComponent = (function () {
    function CmsTemplateComponent(globalVariables) {
        this.globalVariables = globalVariables;
    }
    CmsTemplateComponent = __decorate([
        core_1.Component({
            template: "\n\t<div class=\"alert alert-success navbar-fixed-top\" role=\"alert\" [hidden]=\"!globalVariables.requestResult.successMessage\">{{globalVariables.requestResult.successMessage}}</div>\n\t<div class=\"alert alert-danger navbar-fixed-top\" role=\"alert\" [hidden]=\"!globalVariables.requestResult.errorMessage\">{{globalVariables.requestResult.errorMessage}}</div>\n\n\t<h1 class=\"headline\">CMS</h1>\n\t\n\t<ul class=\"nav nav-tabs\">\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/CMS/Rezepte\">Rezepte</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/CMS/Kategorien\">Kategorien</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/CMS/Zutaten\">Zustaten</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/CMS/Einheiten\">Einheiten</a></li>\n\t\t<!--<li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/CMS/Dashboard\">Dashboard</a></li>-->\n\t</ul>\n\t<br>\n\n\t<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [global_1.GlobalVariables])
    ], CmsTemplateComponent);
    return CmsTemplateComponent;
}());
exports.CmsTemplateComponent = CmsTemplateComponent;
