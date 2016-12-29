import { SubCategoryModel } from 'app/models';
export class CategoryModel {
	id: number;
	name: string;
	isSelected: boolean;
	subCategories: SubCategoryModel[];

	constructor() {
		this.subCategories = new Array<SubCategoryModel>();
	}
}