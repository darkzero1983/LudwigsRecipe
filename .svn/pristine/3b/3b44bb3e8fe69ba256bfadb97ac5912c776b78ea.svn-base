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
var router_1 = require('@angular/router');
var services_1 = require('app/services');
var CmsIngredientRenameComponent = (function () {
    function CmsIngredientRenameComponent(cmsService, route, router) {
        var _this = this;
        this.cmsService = cmsService;
        this.route = route;
        this.router = router;
        this.route.params.forEach(function (params) {
            _this.ingredientIds = params['ids'];
            if (_this.ingredientIds != undefined && _this.ingredientIds != '') {
                _this.cmsService.getIngredientsForIds(_this.ingredientIds).then(function (ingredients) { return _this.ingredients = ingredients; });
            }
        });
    }
    CmsIngredientRenameComponent.prototype.submit = function () {
        var _this = this;
        if (this.ingredientIds == undefined) {
            return;
        }
        this.cmsService.putIngredients(this.ingredientIds, this.ingredientName).then(function (x) { return _this.router.navigate(['/CMS/Zutaten']); });
    };
    CmsIngredientRenameComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<h1 class=\"headline\" > Zutaten Umbenennen</h1 >\n\n\t\t<strong>Zutaten:</strong> : <span *ngFor=\"let ingredient of ingredients\">{{ingredient.name}}, </span>\n\t\t<br><br>\n\n\t\t<!-- Neuer Name -->\n\t\t<formulartextbox-directive [value]=\"ingredientName\" (changeValue)=\"ingredientName=$event\" displayName=\"Neuer Name\"></formulartextbox-directive>\n\n\t\t<div class=\"navbar navbar-default navbar-fixed-bottom navbar-for-spans\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Speichern\" (click)=\"submit();\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n"
        }), 
        __metadata('design:paramtypes', [services_1.CmsService, router_1.ActivatedRoute, router_1.Router])
    ], CmsIngredientRenameComponent);
    return CmsIngredientRenameComponent;
}());
exports.CmsIngredientRenameComponent = CmsIngredientRenameComponent;
