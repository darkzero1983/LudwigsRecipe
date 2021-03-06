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
var FormularCheckboxDirective = (function () {
    function FormularCheckboxDirective() {
        this.changeValue = new core_1.EventEmitter();
    }
    FormularCheckboxDirective.prototype.setValue = function (val) {
        if (val == undefined) {
            return;
        }
        this.value = val;
        this.changeValue.emit(this.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FormularCheckboxDirective.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormularCheckboxDirective.prototype, "displayName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularCheckboxDirective.prototype, "changeValue", void 0);
    FormularCheckboxDirective = __decorate([
        core_1.Component({
            selector: 'formularcheckbox-directive',
            template: "\n\t<div class=\"row\">\n\t\t<label class=\"col-xs-12 col-sm-2 form-control-label\" for=\"textinput\">{{displayName}}</label>\n\t\t<div class=\"col-xs-12 col-sm-10\">\n\t\t\t<label class=\"form-check-label\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"value\" (click)=\"setValue(!value)\">\n\t\t\t</label>\n\t\t</div>\n\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormularCheckboxDirective);
    return FormularCheckboxDirective;
}());
exports.FormularCheckboxDirective = FormularCheckboxDirective;
