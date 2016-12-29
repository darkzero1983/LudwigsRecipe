import { CategoryEditItemModel } from 'app/models'

export class CategoryEditModel {
	categories: CategoryEditItemModel[];

	constructor() {
		this.categories = new Array<CategoryEditItemModel>();
	}
}