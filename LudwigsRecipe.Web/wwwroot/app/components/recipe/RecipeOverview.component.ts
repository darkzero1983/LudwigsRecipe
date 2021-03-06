﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from 'app/services';
import { RecipeOverviewModel } from 'app/models';

@Component({
	templateUrl: '/views/recipe/RecipeOverview.html'
})

export class RecipeOverviewComponent implements OnInit {
	recipeViewModel: RecipeOverviewModel = new RecipeOverviewModel();
	categoryUrl: string;
	subCategoryUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private recipeService: RecipeService
	) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			this.categoryUrl = params['categoryUrl'];
			this.subCategoryUrl = params['subCategoryUrl'];
			this.loadRecipes(1);
		});
	}

	

	loadRecipes(page: number) {
		if (page < 1) {
			return;
		}
		if (this.recipeViewModel.paging.maxPage > 0 && page > this.recipeViewModel.paging.maxPage) {
			return;
		}
		
		this.recipeService.getRecipeOverview(page, this.categoryUrl, this.subCategoryUrl).then(recipes => this.recipesLoaded(recipes));
	}

	recipesLoaded(data: RecipeOverviewModel) {
		this.recipeViewModel = data;
		this.recipeViewModel.paging.showPaging = false;
		this.recipeViewModel.paging.showPreview = true;
		this.recipeViewModel.paging.showNext = true;
		if (data.paging.maxPage > 1) {
			this.recipeViewModel.paging.showPaging = true;
			this.recipeViewModel.paging.pages = new Array<number>()
			var minPage = data.paging.currentPage - 2;
			var maxPage = data.paging.currentPage + 2;
			if (data.paging.currentPage == 1) {
				maxPage = maxPage + 2;
			}
			if (data.paging.currentPage == 2) {
				maxPage = maxPage + 1;
			}
			if ((data.paging.currentPage + 1) > data.paging.maxPage) {
				minPage = minPage - 1;
			}
			if ((data.paging.currentPage + 2) > data.paging.maxPage) {
				minPage = minPage - 1;
			}
			this.recipeViewModel.paging.showPreview = (data.paging.currentPage != 1);
			this.recipeViewModel.paging.showNext = (data.paging.currentPage != data.paging.maxPage);

			for (var n = 1; n <= data.paging.maxPage; n++) {
				if (n >= minPage && n <= maxPage) {
					this.recipeViewModel.paging.pages.push(n);
				}
			}
		}
	}
}