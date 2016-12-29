import { MeasurementModel, IngredientListModel } from 'app/models';

export class RecipeDetailModel {
	id: number;
	name: string;
	description: string;
	content: string;
	publishDate: string;
	teaserImageUrl: string;
	ingredientCount: number;
	measurement: MeasurementModel;
	ingredients: Array<IngredientListModel>;
	preparationTime: number;
	waitingTime: number;

	constructor() {
		this.ingredients = new Array<IngredientListModel>();
		this.measurement = new MeasurementModel();
	}
}