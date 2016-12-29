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
var RecipeOverviewItemDirective = (function () {
    function RecipeOverviewItemDirective() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.RecipeOverviewRecipeModel)
    ], RecipeOverviewItemDirective.prototype, "recipe", void 0);
    RecipeOverviewItemDirective = __decorate([
        core_1.Component({
            selector: 'recipeoverviewitem-directive',
            template: "\t<div class=\"teaser-image\">\n\t\t\t\t\t<img src=\"{{recipe.teaserImageUrl}}?w=640&h=480&mode=crop\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"teaser-text\">\n\t\t\t\t\t<div class=\"recipe-name\">{{recipe.name}}</div>\n\n\t\t\t\t\t<div class=\"recipe-info\">\n\t\t\t\t\t\t<div class=\"hidden-sm-down\">{{recipe.description}}<br></div>\n\t\t\t\t\t\tErstellt: {{recipe.publishDate}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"clear:both\"></div>\n\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], RecipeOverviewItemDirective);
    return RecipeOverviewItemDirective;
}());
exports.RecipeOverviewItemDirective = RecipeOverviewItemDirective;
