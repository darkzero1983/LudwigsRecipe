﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { RecipeOverviewModel, RecipeDetailModel, RecipeEditModel } from 'app/models';

@Injectable()
export class RecipeService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	
	constructor(private http: Http) { }

	getRecipeOverview(page: number, categoryUrl: string, subCategoryUrl: string): Promise<RecipeOverviewModel> {
		var url: string = '/api/RecipeOverview?page=' + page;
		if (categoryUrl != null && categoryUrl != 'null') {
			url = url + '&categoryUrl=' + categoryUrl;
		}
		if (subCategoryUrl != null && subCategoryUrl != 'null') {
			url = url + '&subCategoryUrl=' + subCategoryUrl;
		}

		return this.http.get(url, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as RecipeOverviewModel)
			.catch(this.handleError);
	}

	getRecipeDetail(id): Promise<RecipeDetailModel> {
		return this.http.get('/api/RecipeDetail/' + id, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as RecipeDetailModel)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}