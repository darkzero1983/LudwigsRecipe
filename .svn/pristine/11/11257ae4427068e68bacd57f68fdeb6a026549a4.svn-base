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
var AccountLogoutComponent = (function () {
    function AccountLogoutComponent(accountService, navigationService, router) {
        this.accountService = accountService;
        this.navigationService = navigationService;
        this.router = router;
    }
    AccountLogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.logout().then(function (result) { return _this.loggedOut(); });
    };
    AccountLogoutComponent.prototype.loggedOut = function () {
        this.navigationService.loadNavigation();
        this.router.navigate(['/']);
    };
    AccountLogoutComponent = __decorate([
        core_1.Component({
            template: ''
        }), 
        __metadata('design:paramtypes', [services_1.AccountService, services_1.NavigationService, router_1.Router])
    ], AccountLogoutComponent);
    return AccountLogoutComponent;
}());
exports.AccountLogoutComponent = AccountLogoutComponent;
