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
var models_1 = require('app/models');
var global_1 = require('app/global');
var directives_1 = require('app/directives');
var CmsRecipeEditComponent = (function () {
    function CmsRecipeEditComponent(route, router, cmsService, globalVariables) {
        this.route = route;
        this.router = router;
        this.cmsService = cmsService;
        this.globalVariables = globalVariables;
        this.recipe = new models_1.RecipeEditModel();
    }
    CmsRecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cmsService.getIngredients().then(function (ingredients) { return _this.SelectAbleIngerdients = ingredients; });
        this.cmsService.getMeasurements().then(function (measurements) { return _this.SelectAbleMeasurements = measurements; });
        this.cmsService.getAuthors().then(function (authors) { return _this.SelectAbleAuthors = authors; });
        this.cmsService.getSeoTags().then(function (seos) { return _this.SelectAbleSeoTags = seos; });
        this.route.params.forEach(function (params) {
            if (!isNaN(+params['id'])) {
                _this.id = +params['id'];
            }
            else {
                _this.id = 0;
            }
            _this.cmsService.getRecipe(_this.id).then(function (recipe) { return _this.setRecipe(recipe); });
        });
    };
    CmsRecipeEditComponent.prototype.submit = function (model) {
        var _this = this;
        console.info(model);
        this.cmsService.saveRecipe(model)
            .then(function (result) {
            _this.globalVariables.requestResult = result;
            _this.timer = setTimeout(function () { return _this.globalVariables.requestResult = new models_1.FormResultModel(); }, 3000);
            _this.router.navigate(['/CMS/Rezepte/Bearbeiten/' + result.newId]);
        });
    };
    CmsRecipeEditComponent.prototype.setRecipe = function (newRecipe) {
        this.recipe = newRecipe;
    };
    CmsRecipeEditComponent.prototype.addIngredient = function () {
        if (this.recipe.ingredientList == null) {
            this.recipe.ingredientList = new Array();
        }
        var ingredientListItem = new models_1.IngredientListItemModel();
        ingredientListItem.id = 0;
        ingredientListItem.amount = 1;
        ingredientListItem.ingredientId = 0;
        ingredientListItem.ingredientName = "";
        ingredientListItem.measurementId = 0;
        ingredientListItem.measurementName = "";
        this.recipe.ingredientList.push(ingredientListItem);
    };
    CmsRecipeEditComponent.prototype.isAuthorSelected = function (id) {
        return (this.recipe.authors.filter(function (x) { return x.id == id; }).length > 0);
    };
    CmsRecipeEditComponent.prototype.setAuthorSelected = function (selectElement) {
        this.recipe.authors = new Array();
        for (var i = 0; i < selectElement.options.length; i++) {
            var optionElement = selectElement.options[i];
            if (optionElement.selected == true) {
                var selectedAuthor = new models_1.AuthorModel();
                selectedAuthor.id = optionElement.value;
                this.recipe.authors.push(selectedAuthor);
            }
        }
    };
    CmsRecipeEditComponent.prototype.isSeoTagSelected = function (id) {
        return (this.recipe.seoTags.filter(function (x) { return x.id == id; }).length > 0);
    };
    CmsRecipeEditComponent.prototype.setSeoTagSelected = function (selectElement) {
        this.recipe.seoTags = new Array();
        for (var i = 0; i < selectElement.options.length; i++) {
            var optionElement = selectElement.options[i];
            if (optionElement.selected == true) {
                var selectedSeoTag = new models_1.SeoTagModel();
                selectedSeoTag.id = optionElement.value;
                this.recipe.seoTags.push(selectedSeoTag);
            }
        }
    };
    CmsRecipeEditComponent.prototype.changeCategory = function (category) {
        if (category.isSelected) {
            for (var index in category.subCategories) {
                category.subCategories[index].isSelected = false;
            }
        }
    };
    CmsRecipeEditComponent.prototype.changeSubCategory = function (category, subCategory) {
        if (!subCategory.isSelected) {
            category.isSelected = true;
        }
    };
    CmsRecipeEditComponent = __decorate([
        core_1.Component({
            templateUrl: '/views/cms/CmsRecipeEdit.html',
            providers: [
                directives_1.FormularCheckboxDirective,
                directives_1.FormularDateTimeDirective,
                directives_1.FormularImageUploadDirective,
                directives_1.FormularNumberDirective,
                directives_1.FormularSelectOrNewTextboxDirective,
                directives_1.FormularRecipeTextareaDirective,
                directives_1.FormularTextareaDirective,
                directives_1.FormularTextboxDirective
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, services_1.CmsService, global_1.GlobalVariables])
    ], CmsRecipeEditComponent);
    return CmsRecipeEditComponent;
}());
exports.CmsRecipeEditComponent = CmsRecipeEditComponent;
