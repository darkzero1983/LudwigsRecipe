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
var FormularImageUploadDirective = (function () {
    function FormularImageUploadDirective() {
        this.changeTeaserImageUrl = new core_1.EventEmitter();
    }
    FormularImageUploadDirective.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.makeFileRequest("/api/CMS/Recipe/Upload", [], this.filesToUpload).then(function (result) {
            _this.teaserImageUrl = "/upload/" + _this.filesToUpload[0].name;
            _this.changeTeaserImageUrl.emit(_this.teaserImageUrl);
        });
    };
    FormularImageUploadDirective.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("file", files[0], files[0].name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormularImageUploadDirective.prototype, "teaserImageUrl", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormularImageUploadDirective.prototype, "changeTeaserImageUrl", void 0);
    FormularImageUploadDirective = __decorate([
        core_1.Component({
            selector: 'formularimageupload-directive',
            template: "\n\t<div class=\"row\">\n\t\t<label class=\"col-xs-12 col-sm-2 form-control-label\" for=\"textinput\">TeaserImage</label>\n\t\t<div class=\"col-xs-12 col-sm-10\">\n\t\t\t<div class=\"teaser-image\"><img src=\"{{teaserImageUrl}}?w=640&h=480&mode=crop\"></div>\n\t\t\t<input class=\"form-control input-md\" type=\"file\" style=\"width:100%;\" (change)=\"fileChangeEvent($event)\">\n\t\t</div>\n\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormularImageUploadDirective);
    return FormularImageUploadDirective;
}());
exports.FormularImageUploadDirective = FormularImageUploadDirective;
