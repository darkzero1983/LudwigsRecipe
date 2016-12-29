﻿import { AuthorModel, CategoryModel, IngredientListItemModel, MeasurementModel, SeoTagModel } from 'app/models';

export class RecipeEditModel {
	id: number;
	isPublished: boolean;
	isOnlyForFriends: boolean;
	publishDate: string;
	publishHour: number;
	publishMinute: number;
	name: string;
	description: string;
	content: string;
	teaserImageUrl: string;
	ingredientCount: number;
	measurement: MeasurementModel;
	ingredientList: IngredientListItemModel[];
	authors: AuthorModel[];
	seoTags: SeoTagModel[];
	categories: CategoryModel[];
	preparationTime: number;
	waitingTime: number;

	constructor() {
		this.id = 0;
		this.ingredientList = new Array<IngredientListItemModel>();
		this.authors = new Array<AuthorModel>();
		this.seoTags = new Array<SeoTagModel>();
		this.categories = new Array<CategoryModel>();
		this.measurement = new MeasurementModel();
	}
}