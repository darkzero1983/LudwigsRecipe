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
var RecipeIngredientsDirective = (function () {
    function RecipeIngredientsDirective() {
        this.changeCostumAmount = new core_1.EventEmitter();
    }
    RecipeIngredientsDirective.prototype.ngOnChanges = function () {
        if (this.amount != undefined) {
            this.costumAmount = this.amount;
            this.changeCostumAmount.emit(this.costumAmount);
        }
    };
    RecipeIngredientsDirective.prototype.calculateAmount = function (value) {
        return value / this.amount * this.costumAmount;
    };
    RecipeIngredientsDirective.prototype.addCostumAmount = function () {
        this.costumAmount = +this.costumAmount + 1;
        this.changeCostumAmount.emit(this.costumAmount);
    };
    RecipeIngredientsDirective.prototype.subtractCostumAmount = function () {
        if (this.costumAmount > 1) {
            this.costumAmount = +this.costumAmount - 1;
            this.changeCostumAmount.emit(this.costumAmount);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RecipeIngredientsDirective.prototype, "ingredients", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RecipeIngredientsDirective.prototype, "measurement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RecipeIngredientsDirective.prototype, "amount", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RecipeIngredientsDirective.prototype, "changeCostumAmount", void 0);
    RecipeIngredientsDirective = __decorate([
        core_1.Component({
            selector: 'recipeingredients-directive',
            templateUrl: '/views/directives/recipe/RecipeIngredients.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RecipeIngredientsDirective);
    return RecipeIngredientsDirective;
}());
exports.RecipeIngredientsDirective = RecipeIngredientsDirective;
