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
var FormularSelectOrNewTextboxDirective = (function () {
    function FormularSelectOrNewTextboxDirective() {
        this.changeSelectId = new core_1.EventEmitter();
        this.changeSelectName = new core_1.EventEmitter();
    }
    FormularSelectOrNewTextboxDirective.prototype.changeSelect = function (id) {
        this.changeSelectId.emit(id);
        var result = this.selectItems.find(function (x) { return x.id == id; });
        if (result != undefined) {
            this.changeSelectName.emit(result.name);
            this.name = result.name;
        }
    };
    FormularSelectOrNewTextboxDirective.prototype.changeTextbox = function (newName) {
        this.changeSelectName.emit(newName);
        var result = this.selectItems.find(function (x) { return x.name.toLowerCase() == newName.toLocaleLowerCase(); });
        if (result != undefined) {
            this.changeSelectId.emit(result.id);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FormularSelectOrNewTextboxDirective.prototype, "selectId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FormularSelectOrNewTextboxDirective.prototype, "selectItems", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularSelectOrNewTextboxDirective.prototype, "changeSelectId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularSelectOrNewTextboxDirective.prototype, "changeSelectName", void 0);
    FormularSelectOrNewTextboxDirective = __decorate([
        core_1.Component({
            selector: 'formularselectornewtextbox-directive',
            template: "\n\t<select class=\"form-control\" [(ngModel)]=\"selectId\" (change)=\"changeSelect(this.selectId);\">\n\t\t<option value=\"0\">-- Neu --</option>\n\t\t<option *ngFor=\"let item of selectItems\" [(value)]=\"item.id\">{{item.name}}</option>\n\t</select>\n\t<input type=\"text\" class=\"form-control input-md\" [(ngModel)]=\"name\" [hidden]=\"selectId != 0\" (change)=\"changeTextbox(this.name);\">\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormularSelectOrNewTextboxDirective);
    return FormularSelectOrNewTextboxDirective;
}());
exports.FormularSelectOrNewTextboxDirective = FormularSelectOrNewTextboxDirective;
