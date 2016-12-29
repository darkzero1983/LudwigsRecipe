import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CmsService } from 'app/services';
import { RecipeOverviewModel } from 'app/models';

@Component({
	templateUrl: '/views/cms/CmsRecipeOverview.html'
})

export class CmsRecipeOverviewComponent implements OnInit {
	private currentPage: number = 1;
	recipeViewModel: RecipeOverviewModel = new RecipeOverviewModel();
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private cmsService: CmsService
	) {
	}

	ngOnInit(): void {
		this.loadRecipes(1);
	}

	loadRecipes(page: number) {
		if (page < 1) {
			return;
		}
		

		if (this.recipeViewModel.paging.maxPage > 0 && page > this.recipeViewModel.paging.maxPage) {
			return;
		}

		this.currentPage = page;

		this.cmsService.getRecipes(page).then(recipes => this.recipesLoaded(recipes));
	}

	deleteRecipe(id: number) {
		this.cmsService.deleteRecipe(id).then(recipes => this.loadRecipes(this.currentPage));
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