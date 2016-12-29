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
var router_1 = require('@angular/router');
var services_1 = require('app/services');
var CmsCategoryEditComponent = (function () {
    function CmsCategoryEditComponent(router, cmsService) {
        this.router = router;
        this.cmsService = cmsService;
        this.viewModel = new models_1.CategoryEditModel;
        this.requestResult = new models_1.FormResultModel;
        this.example = 'Test';
        this.loadData();
    }
    CmsCategoryEditComponent.prototype.loadData = function () {
        var _this = this;
        this.cmsService.getCategories().then(function (result) { return _this.viewModel = result; });
    };
    CmsCategoryEditComponent.prototype.debug = function () {
        console.info(this.viewModel);
    };
    CmsCategoryEditComponent.prototype.addCategory = function () {
        var category = new models_1.CategoryEditItemModel;
        category.name = "";
        category.url = "";
        category.order = 1;
        category.subCategories = Array();
        this.viewModel.categories.push(category);
    };
    CmsCategoryEditComponent.prototype.addSubCategory = function (model) {
        var subCategory = new models_1.CategoryEditSubCategoryModel;
        subCategory.name = "";
        subCategory.url = "";
        subCategory.order = 1;
        model.subCategories.push(subCategory);
    };
    CmsCategoryEditComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        var index = this.viewModel.categories.indexOf(category);
        var categories = new Array();
        categories = this.viewModel.categories;
        delete categories[index];
        this.viewModel.categories = new Array();
        categories.forEach(function (category) {
            _this.viewModel.categories.push(category);
        });
    };
    CmsCategoryEditComponent.prototype.deleteSubCategory = function (category, subCategory) {
        var index = category.subCategories.indexOf(subCategory);
        var subcategories = new Array();
        subcategories = category.subCategories;
        delete subcategories[index];
        category.subCategories = new Array();
        subcategories.forEach(function (subCategory) {
            category.subCategories.push(subCategory);
        });
    };
    CmsCategoryEditComponent.prototype.submit = function (model) {
        var _this = this;
        this.cmsService.saveCategories(model)
            .then(function (result) { return _this.requestResult = result; })
            .then(function (x) { return _this.timer = setTimeout(function () { return _this.requestResult.successMessage = null; }, 3000); });
    };
    CmsCategoryEditComponent.$inject = ['$timeout'];
    CmsCategoryEditComponent = __decorate([
        core_1.Component({
            templateUrl: '/views/cms/CmsCategoryEdit.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.CmsService])
    ], CmsCategoryEditComponent);
    return CmsCategoryEditComponent;
}());
exports.CmsCategoryEditComponent = CmsCategoryEditComponent;
