import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CmsService } from 'app/services';
import { RecipeEditModel, IngredientModel, MeasurementModel, AuthorModel, SeoTagModel, IngredientListItemModel, FormResultModel, CategoryModel, SubCategoryModel } from 'app/models';
import { GlobalVariables } from 'app/global';

//Directives
import {
	FormularCheckboxDirective,
	FormularDateTimeDirective,
	FormularImageUploadDirective,
	FormularNumberDirective,
	FormularSelectOrNewTextboxDirective,
	FormularRecipeTextareaDirective,
	FormularTextareaDirective,
	FormularTextboxDirective
} from 'app/directives';

@Component({
	templateUrl: '/views/cms/CmsRecipeEdit.html',
	providers: [
		FormularCheckboxDirective,
		FormularDateTimeDirective,
		FormularImageUploadDirective,
		FormularNumberDirective,
		FormularSelectOrNewTextboxDirective,
		FormularRecipeTextareaDirective,
		FormularTextareaDirective,
		FormularTextboxDirective
	]
})

export class CmsRecipeEditComponent implements OnInit {
	id: number;
	successMessage: string;
	errorMessage: string;
	recipe: RecipeEditModel = new RecipeEditModel();
	private timer : any;
	SelectAbleIngerdients: IngredientModel[];
	SelectAbleMeasurements: MeasurementModel[];
	SelectAbleAuthors: AuthorModel[];
	SelectAbleSeoTags: SeoTagModel[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private cmsService: CmsService,
		private globalVariables: GlobalVariables
	) {
	}

	ngOnInit(): void {
		this.cmsService.getIngredients().then(ingredients => this.SelectAbleIngerdients = ingredients);
		this.cmsService.getMeasurements().then(measurements => this.SelectAbleMeasurements = measurements);
		this.cmsService.getAuthors().then(authors => this.SelectAbleAuthors = authors);
		this.cmsService.getSeoTags().then(seos => this.SelectAbleSeoTags = seos);

		this.route.params.forEach((params: Params) => {
			if (!isNaN(+params['id']))
			{
				this.id = +params['id'];
			}
			else
			{
				this.id = 0;
			}
			this.cmsService.getRecipe(this.id).then(recipe => this.setRecipe(recipe));
		});
	}

	submit(model: RecipeEditModel) {
		console.info(model);
		this.cmsService.saveRecipe(model)
			.then((result: FormResultModel) => {
				this.globalVariables.requestResult = result;
				this.timer = setTimeout(() => this.globalVariables.requestResult = new FormResultModel(), 3000);
				this.router.navigate(['/CMS/Rezepte/Bearbeiten/' + result.newId])
			});
	}

	setRecipe(newRecipe: RecipeEditModel) {
		this.recipe = newRecipe;
	}

	addIngredient() {

		if (this.recipe.ingredientList == null) {
			this.recipe.ingredientList = new Array<IngredientListItemModel>();
		}
		var ingredientListItem: IngredientListItemModel = new IngredientListItemModel();
		ingredientListItem.id = 0;
		ingredientListItem.amount = 1;
		ingredientListItem.ingredientId = 0;
		ingredientListItem.ingredientName = "";
		ingredientListItem.measurementId = 0;
		ingredientListItem.measurementName = "";
		this.recipe.ingredientList.push(ingredientListItem);
	}

	isAuthorSelected(id: string) {
		return (this.recipe.authors.filter(x => x.id == id).length > 0);
	}

	setAuthorSelected(selectElement) {
		this.recipe.authors = new Array<AuthorModel>();
		for (var i = 0; i < selectElement.options.length; i++) {
			var optionElement = selectElement.options[i];
			
			if (optionElement.selected == true) {
				var selectedAuthor: AuthorModel = new AuthorModel();
				selectedAuthor.id = optionElement.value;
				this.recipe.authors.push(selectedAuthor);
			}
		}
	}

	isSeoTagSelected(id: number) {
		return (this.recipe.seoTags.filter(x => x.id == id).length > 0);
	}

	setSeoTagSelected(selectElement) {
		this.recipe.seoTags = new Array<SeoTagModel>();
		for (var i = 0; i < selectElement.options.length; i++) {
			var optionElement = selectElement.options[i];

			if (optionElement.selected == true) {
				var selectedSeoTag: SeoTagModel = new SeoTagModel();
				selectedSeoTag.id = optionElement.value;
				this.recipe.seoTags.push(selectedSeoTag);
			}
		}
	}

	changeCategory(category: CategoryModel) {
		if (category.isSelected) {
			for (var index in category.subCategories) {
				category.subCategories[index].isSelected = false;
			}
		}
	}

	changeSubCategory(category: CategoryModel, subCategory: SubCategoryModel) {
		if (!subCategory.isSelected) {
			category.isSelected = true;
		}
	}

	

	
}