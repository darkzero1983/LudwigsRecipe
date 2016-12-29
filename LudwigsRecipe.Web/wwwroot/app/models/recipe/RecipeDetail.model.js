"use strict";
var models_1 = require('app/models');
var RecipeDetailModel = (function () {
    function RecipeDetailModel() {
        this.ingredients = new Array();
        this.measurement = new models_1.MeasurementModel();
    }
    return RecipeDetailModel;
}());
exports.RecipeDetailModel = RecipeDetailModel;
