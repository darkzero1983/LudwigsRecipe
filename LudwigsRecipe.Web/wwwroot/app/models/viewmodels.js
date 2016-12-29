"use strict";
var IngredientListViewModel = (function () {
    function IngredientListViewModel() {
    }
    return IngredientListViewModel;
}());
exports.IngredientListViewModel = IngredientListViewModel;
var RecipeDetailViewModel = (function () {
    function RecipeDetailViewModel() {
        this.Ingredients = new Array();
        this.Measurement = new MeasurementViewModel();
    }
    return RecipeDetailViewModel;
}());
exports.RecipeDetailViewModel = RecipeDetailViewModel;
var RecipeOverviewRecipe = (function () {
    function RecipeOverviewRecipe() {
    }
    return RecipeOverviewRecipe;
}());
exports.RecipeOverviewRecipe = RecipeOverviewRecipe;
var PagingViewModel = (function () {
    function PagingViewModel() {
    }
    return PagingViewModel;
}());
exports.PagingViewModel = PagingViewModel;
var RecipeOverviewViewModel = (function () {
    function RecipeOverviewViewModel() {
        this.Paging = new PagingViewModel();
    }
    return RecipeOverviewViewModel;
}());
exports.RecipeOverviewViewModel = RecipeOverviewViewModel;
var NavigationItemViewModel = (function () {
    function NavigationItemViewModel() {
    }
    return NavigationItemViewModel;
}());
exports.NavigationItemViewModel = NavigationItemViewModel;
var NavigationGroupViewModel = (function () {
    function NavigationGroupViewModel() {
        this.Items = new Array();
    }
    return NavigationGroupViewModel;
}());
exports.NavigationGroupViewModel = NavigationGroupViewModel;
var NavigationViewModel = (function () {
    function NavigationViewModel() {
        this.MainNavigation = new Array();
        this.SubNavigation = new Array();
    }
    return NavigationViewModel;
}());
exports.NavigationViewModel = NavigationViewModel;
var HitCountViewModel = (function () {
    function HitCountViewModel() {
    }
    return HitCountViewModel;
}());
exports.HitCountViewModel = HitCountViewModel;
var MeasurementViewModel = (function () {
    function MeasurementViewModel() {
    }
    return MeasurementViewModel;
}());
exports.MeasurementViewModel = MeasurementViewModel;
var CategoryEditViewModel = (function () {
    function CategoryEditViewModel() {
        this.Categories = new Array();
    }
    return CategoryEditViewModel;
}());
exports.CategoryEditViewModel = CategoryEditViewModel;
var EditCategoryViewModel = (function () {
    function EditCategoryViewModel() {
        this.SubCategories = new Array();
    }
    return EditCategoryViewModel;
}());
exports.EditCategoryViewModel = EditCategoryViewModel;
var EditSubCategoryViewModel = (function () {
    function EditSubCategoryViewModel() {
    }
    return EditSubCategoryViewModel;
}());
exports.EditSubCategoryViewModel = EditSubCategoryViewModel;
var ContactViewModel = (function () {
    function ContactViewModel() {
    }
    return ContactViewModel;
}());
exports.ContactViewModel = ContactViewModel;
