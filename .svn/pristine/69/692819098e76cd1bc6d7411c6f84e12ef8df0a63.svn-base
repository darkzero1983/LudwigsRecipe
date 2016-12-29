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
var SearchService = (function () {
    function SearchService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.searchUrl = '/api/Recipe/Search';
        this.searchResult = new models_1.SearchResultModel();
    }
    SearchService.prototype.Search = function (term) {
        var myData = JSON.stringify(term);
        return this.http.post(this.searchUrl, myData, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SearchService.prototype.activeMobileSearch = function () {
        $('body').addClass('active-mobile-search');
        return true;
    };
    SearchService.prototype.deactivateMobileSearch = function () {
        $('body').removeClass('active-mobile-search');
        return true;
    };
    SearchService.prototype.changeSearchTerm = function () {
        var _this = this;
        this.GetScreenWidthAndHeight();
        $('.mobile-search-result').css('max-height', (window.displayHeight - 55) + 'px');
        if (this.searchTerm.length < 1) {
            this.searchResult = new models_1.SearchResultModel();
            return;
        }
        this.Search(this.searchTerm).then(function (result) { return _this.updateSearchResult(result); });
        return true;
    };
    SearchService.prototype.updateSearchResult = function (result) {
        if (result.searchTerm == this.searchTerm) {
            this.searchResult = result;
        }
    };
    SearchService.prototype.selectSearchResult = function (recipe) {
        this.router.navigate(['/Rezept/' + recipe.url + '/' + recipe.id]);
        this.searchResult = new models_1.SearchResultModel();
        this.searchTerm = "";
        $('body').removeClass('active-mobile-search');
    };
    SearchService.prototype.GetScreenWidthAndHeight = function () {
        this.displayWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.displayHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
