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
var AccountLoginComponent = (function () {
    function AccountLoginComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.submitted = false;
    }
    AccountLoginComponent.prototype.ngOnInit = function () {
        this.model = new models_1.AccountLoginModel();
        this.model.rememberMe = true;
    };
    AccountLoginComponent.prototype.submit = function (model) {
        var _this = this;
        this.submitted = true;
        this.accountService.login(model)
            .then(function (loginSuccess) {
            if (loginSuccess) {
                _this.accountService.userInformations.isAuthenticated = true;
                _this.router.navigate(['/']);
            }
            else {
            }
        });
    };
    AccountLoginComponent = __decorate([
        core_1.Component({
            templateUrl: '/views/account/AccountLogin.html'
        }), 
        __metadata('design:paramtypes', [services_1.AccountService, router_1.Router])
    ], AccountLoginComponent);
    return AccountLoginComponent;
}());
exports.AccountLoginComponent = AccountLoginComponent;
