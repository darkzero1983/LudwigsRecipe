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
var FormularRecipeTextareaDirective = (function () {
    function FormularRecipeTextareaDirective() {
        this.changeValue = new core_1.EventEmitter();
    }
    FormularRecipeTextareaDirective.prototype.changeContent = function (type) {
        switch (type) {
            case "dn":
                this.wrapText('recipeContentTextarea', '<d n="', '"></d>');
                break;
            case "li":
                this.wrapText('recipeContentTextarea', '<li>', '</li>');
                break;
        }
        this.value = $('#recipeContentTextarea').val();
    };
    FormularRecipeTextareaDirective.prototype.wrapText = function (elementID, openTag, closeTag) {
        var textArea = $('#' + elementID);
        var len = textArea.val().length;
        var start = textArea[0].selectionStart;
        var end = textArea[0].selectionEnd;
        var selectedText = textArea.val().substring(start, end);
        var replacement = openTag + selectedText + closeTag;
        textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormularRecipeTextareaDirective.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormularRecipeTextareaDirective.prototype, "displayName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FormularRecipeTextareaDirective.prototype, "rows", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularRecipeTextareaDirective.prototype, "changeValue", void 0);
    FormularRecipeTextareaDirective = __decorate([
        core_1.Component({
            selector: 'formularrecipetextarea-directive',
            template: "\n\t<div class=\"row\">\n\t\t<label class=\"col-xs-12 col-sm-2 form-control-label\" for=\"textinput\">{{displayName}}</label>\n\t\t<div class=\"col-xs-12 col-sm-10\">\n\t\t\t<span class=\"btn btn-secondary\" (click)=\"changeContent('dn')\">DN</span>\n\t\t\t<span class=\"btn btn-secondary\" (click)=\"changeContent('li')\">li</span>\n\t\t\t<textarea id=\"recipeContentTextarea\" [(ngModel)]=\"value\" (change)=\"changeValue.emit(this.value);\" class=\"form-control\" cols=\"20\" rows=\"{{rows}}\"></textarea>\n\t\t</div>\n\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormularRecipeTextareaDirective);
    return FormularRecipeTextareaDirective;
}());
exports.FormularRecipeTextareaDirective = FormularRecipeTextareaDirective;
