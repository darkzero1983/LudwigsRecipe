﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from 'app/services';
import { RecipeDetailModel } from 'app/models';

@Component({
	templateUrl: '/views/recipe/RecipeDetail.html'
})

export class RecipeDetailComponent implements OnInit {
	private costumAmount: number;
	private id: number;
	private recipe: RecipeDetailModel = new RecipeDetailModel();

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private recipeService: RecipeService
	) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			this.id = +params['id'];
			this.recipeService
				.getRecipeDetail(this.id)
				.then(recipe => this.setRecipe(recipe));
		});
	}

	setRecipe(newRecipe: RecipeDetailModel) {
		this.recipe = newRecipe;
		this.costumAmount = this.recipe.ingredientCount;
		this.replaceContentNumbers();
	}

	replaceContentNumbers() {
		if (this.costumAmount == undefined)
		{
			this.costumAmount = this.recipe.ingredientCount;
		}
		var match = this.recipe.content.match(/\bd n="([^"]*)"/g);
		if (match != null) {
			
			for (var n = 0; n < match.length; n++) {
				var amount: number = Number(match[n].replace("d n=\"", "").replace("\"", ""));
				if (!isNaN(amount)) {
					var parse: string = "<d n=\"" + amount + "\">[^>]*<\/d>";
					var re = new RegExp(parse, "g");
					this.recipe.content = this.recipe.content.replace(re, "<d n=\"" + amount + "\">" + (amount / this.recipe.ingredientCount * this.costumAmount).toFixed(2).toString().replace(".", ",").replace(",00", "") + "<\/d>");
				}
			}
		}
	}
}