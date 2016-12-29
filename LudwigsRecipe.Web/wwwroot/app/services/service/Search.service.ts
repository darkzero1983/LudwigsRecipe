import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import {SearchResultModel, SearchResultRecipeModel } from 'app/models';

@Injectable()
export class SearchService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private searchUrl = '/api/Recipe/Search';
	private displayHeight: number;
	private displayWidth: number;
	public searchTerm: string;
	public searchResult: SearchResultModel = new SearchResultModel();


	constructor(
		private http: Http,
		private router: Router
	) { }
	
	Search(term: string): Promise<SearchResultModel> {
		let myData = JSON.stringify(term);

		return this.http.post(this.searchUrl, myData, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as SearchResultModel)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}



	public activeMobileSearch(): boolean {
		$('body').addClass('active-mobile-search');
		return true;
	}

	public deactivateMobileSearch(): boolean {
		$('body').removeClass('active-mobile-search');
		return true;
	}

	changeSearchTerm() {
		this.GetScreenWidthAndHeight();
		$('.mobile-search-result').css('max-height', (window.displayHeight - 55) + 'px');
		if (this.searchTerm.length < 1) {
			this.searchResult = new SearchResultModel();
			return;
		}

		this.Search(this.searchTerm).then(result => this.updateSearchResult(result));
		return true;
	}

	updateSearchResult(result: SearchResultModel) {
		if (result.searchTerm == this.searchTerm) {
			this.searchResult = result;
		}
	}
	selectSearchResult(recipe: SearchResultRecipeModel) {
		this.router.navigate(['/Rezept/' + recipe.url + '/' + recipe.id]);
		this.searchResult = new SearchResultModel();
		this.searchTerm = "";
		$('body').removeClass('active-mobile-search');
	}

	GetScreenWidthAndHeight() {
		this.displayWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.displayHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}
}