﻿







export class IngredientListViewModel {
	Amount: number;
	Measurement: string;
	Ingredient: string;
}

export class RecipeDetailViewModel {
	Id: number;
	Name: string;
	Description: string;
	Content: string;
	PublishDate: string;
	TeaserImageUrl: string;
	IngredientCount: number;
	Measurement: MeasurementViewModel;
	Ingredients: IngredientListViewModel[];
	PreparationTime: number;
	WaitingTime: number;

	constructor() {
		this.Ingredients = new Array<IngredientListViewModel>();
		this.Measurement = new MeasurementViewModel();
	}
}

export class RecipeOverviewRecipe {
	Id: number;
	Name: string;
	Url: string;
	PublishDate: Date;
	Description: string;
	TeaserImageUrl: string;
}




export class PagingViewModel {
	CurrentPage: number;
	MaxPage: number;
	ShowPaging: boolean;
	ShowPreview: boolean;
	ShowNext: boolean;
}

export class RecipeOverviewViewModel {
	Title: string;
	Paging: PagingViewModel;
	Recipes: RecipeOverviewRecipe[];

	constructor() {
		this.Paging = new PagingViewModel();
	}
}



export class NavigationItemViewModel {
	Active: boolean;
	Name: string;
	Href: string;
	RouteName: string;
	SubCategoryUrl: string;
}

export class NavigationGroupViewModel {
	Active: boolean;
	Name: string;
	Href: string;
	RouteName: string;
	CategoryUrl: string;
	Items: NavigationItemViewModel[];

	constructor() {
		this.Items = new Array<NavigationItemViewModel>();
	}
}

export class NavigationViewModel {
	MainNavigation: NavigationGroupViewModel[];
	SubNavigation: NavigationGroupViewModel[];

	constructor() {
		this.MainNavigation = new Array<NavigationGroupViewModel>();
		this.SubNavigation = new Array<NavigationGroupViewModel>();
	}
}

export class HitCountViewModel {
	RecipeId: number;
	Url: string;
}



export class MeasurementViewModel {
	Id: number;
	Name: string;
}













export class CategoryEditViewModel {
	Categories: EditCategoryViewModel[];

	constructor() {
		this.Categories = new Array<EditCategoryViewModel>();
	}
}

export class EditCategoryViewModel {
	Id: number;
	Name: string;
	Url: string;
	IsMainMenu: boolean;
	Order: number;
	SubCategories: EditSubCategoryViewModel[];

	constructor() {
		this.SubCategories = new Array<EditSubCategoryViewModel>();
	}
}

export class EditSubCategoryViewModel {
	Id: number;
	Name: string;
	Url: string;
	Order: number;
}

export class ContactViewModel {
	Name: string;
	Email: string;
	Content: string;
}