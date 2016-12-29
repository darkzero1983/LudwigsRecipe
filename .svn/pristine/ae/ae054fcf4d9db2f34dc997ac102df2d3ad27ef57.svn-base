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
var FormularDateTimeDirective = (function () {
    function FormularDateTimeDirective() {
        this.changePublishDate = new core_1.EventEmitter();
        this.changePublishHour = new core_1.EventEmitter();
        this.changePublishMinute = new core_1.EventEmitter();
        this.selectAbleHours = new Array();
        for (var i = 0; i <= 59; i++) {
            this.selectAbleHours.push(i);
        }
        this.selectAbleMinuts = new Array();
        for (var i = 0; i <= 50; i = i + 10) {
            this.selectAbleMinuts.push(i);
        }
    }
    FormularDateTimeDirective.prototype.changeValues = function () {
        this.changePublishDate.emit(this.publishDate);
        this.changePublishHour.emit(this.publishHour);
        this.changePublishMinute.emit(this.publishMinute);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormularDateTimeDirective.prototype, "publishDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FormularDateTimeDirective.prototype, "publishHour", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FormularDateTimeDirective.prototype, "publishMinute", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularDateTimeDirective.prototype, "changePublishDate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularDateTimeDirective.prototype, "changePublishHour", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularDateTimeDirective.prototype, "changePublishMinute", void 0);
    FormularDateTimeDirective = __decorate([
        core_1.Component({
            selector: 'formulardatetime-directive',
            template: "\n\t<div class=\"row\">\n\t\t<label class=\"col-xs-12 col-sm-2 form-control-label\" for=\"textinput\">ab</label>\n\t\t<div class=\"col-xs-12 col-sm-2\">\n\t\t\t<input [(ngModel)]=\"publishDate\" class=\"form-control date-picker\" type=\"text\" style=\"width:140px;\" (change)=\"changeValues()\">\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-8\">\n\t\t\t<label class=\"col-xs-12 col-sm-1 form-control-label no-padding-xs\">um</label>\n\t\t\t<div class=\"col-xs-12 col-sm-11 no-padding\">\n\t\t\t\t<div style=\"display:inline-block;width:80px;\">\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"publishHour\" (change)=\"changeValues()\">\n\t\t\t\t\t\t<option *ngFor=\"let hour of selectAbleHours\" value=\"{{hour}}\">{{hour}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<label class=\"form-control-label no-padding-xs text-center\">:</label>\n\t\t\t\t<div style=\"display:inline-block;width:80px;\">\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"publishMinute\" (change)=\"changeValues()\">\n\t\t\t\t\t\t<option *ngFor=\"let minute of selectAbleMinuts\" value=\"{{minute}}\">{{minute}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormularDateTimeDirective);
    return FormularDateTimeDirective;
}());
exports.FormularDateTimeDirective = FormularDateTimeDirective;
