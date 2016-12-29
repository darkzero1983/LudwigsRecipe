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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var models_1 = require('app/models');
var NavigationService = (function () {
    function NavigationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.navigationUrl = '/api/Navigation/Load';
        this.navigation = new models_1.NavigationModel();
    }
    NavigationService.prototype.ngOnInit = function () {
    };
    NavigationService.prototype.loadNavigation = function () {
        var _this = this;
        this.http.get(this.navigationUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (result) { return _this.navigation = result; })
            .catch(this.handleError);
    };
    NavigationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    NavigationService.prototype.SetActiveNavigation = function (routeName) {
        var IsNaviFounded = false;
        this.navigation.MainNavigation.forEach(function (navigation) {
            if (navigation.RouteName === routeName) {
                navigation.Active = !IsNaviFounded;
                IsNaviFounded = true;
            }
            else {
                navigation.Active = false;
            }
        });
        if (!IsNaviFounded) {
            this.navigation.MainNavigation[0].Active = true;
        }
    };
    NavigationService.prototype.UpdateActiveNavigaton = function () {
        var _this = this;
        var IsNaviFounded = false;
        this.navigation.MainNavigation.forEach(function (navigation) {
            if (navigation.CategoryUrl != null && navigation.CategoryUrl === _this.currentCategoryUrl) {
                navigation.Active = !IsNaviFounded;
                IsNaviFounded = true;
            }
            else {
                navigation.Active = false;
            }
        });
        this.navigation.SubNavigation.forEach(function (navigation) {
            if (navigation.CategoryUrl != null && navigation.CategoryUrl === _this.currentCategoryUrl) {
                navigation.Active = !IsNaviFounded;
                IsNaviFounded = true;
            }
            else {
                navigation.Active = false;
            }
        });
        if (!IsNaviFounded && this.navigation != null && this.navigation.MainNavigation != null && this.navigation.MainNavigation.length >= 1) {
            this.navigation.MainNavigation[0].Active = true;
        }
    };
    NavigationService.prototype.SetMobileMenuHeight = function () {
        this.GetScreenWidthAndHeight();
        $('.mobile-menu-height').css('height', (this.displayHeight - 58) + 'px');
        $('.mobile-menu-height').css('max-height', (this.displayHeight - 58) + 'px');
    };
    NavigationService.prototype.GetScreenWidthAndHeight = function () {
        this.displayWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.displayHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    NavigationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
