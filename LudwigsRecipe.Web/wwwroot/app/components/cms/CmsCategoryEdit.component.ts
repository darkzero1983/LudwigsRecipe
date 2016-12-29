import { Component } from '@angular/core'
import { CategoryEditModel, FormResultModel, CategoryEditItemModel, CategoryEditSubCategoryModel } from 'app/models'
import { Router } from '@angular/router';
import { CmsService } from 'app/services';

@Component({
	templateUrl: '/views/cms/CmsCategoryEdit.html'
})

export class CmsCategoryEditComponent {

	public viewModel: CategoryEditModel = new CategoryEditModel;
	requestResult: FormResultModel = new FormResultModel;
	public example = 'Test';
	private timer;

	static $inject = ['$timeout'];
	constructor(public router: Router, private cmsService: CmsService) {
		this.loadData();
	}

	loadData() {
		this.cmsService.getCategories().then(result => this.viewModel = result);
	}

	debug() {
		console.info(this.viewModel);
	}

	addCategory() {
		var category: CategoryEditItemModel = new CategoryEditItemModel;
		category.name = "";
		category.url = "";
		category.order = 1;
		category.subCategories = Array<CategoryEditSubCategoryModel>();
		this.viewModel.categories.push(category);
	}

	addSubCategory(model: CategoryEditItemModel) {
		var subCategory: CategoryEditSubCategoryModel = new CategoryEditSubCategoryModel;
		subCategory.name = "";
		subCategory.url = "";
		subCategory.order = 1;
		model.subCategories.push(subCategory);
	}

	deleteCategory(category: CategoryEditItemModel) {
		var index: number = this.viewModel.categories.indexOf(category);
		var categories: CategoryEditItemModel[] = new Array<CategoryEditItemModel>();
		categories = this.viewModel.categories;
		delete categories[index];
		this.viewModel.categories = new Array<CategoryEditItemModel>();
		categories.forEach(category => {
			this.viewModel.categories.push(category);
		});

	}

	deleteSubCategory(category: CategoryEditItemModel, subCategory: CategoryEditSubCategoryModel) {
		var index: number = category.subCategories.indexOf(subCategory);
		var subcategories: CategoryEditSubCategoryModel[] = new Array<CategoryEditSubCategoryModel>();
		subcategories = category.subCategories;
		delete subcategories[index];
		category.subCategories = new Array<CategoryEditSubCategoryModel>();
		subcategories.forEach(subCategory => {
			category.subCategories.push(subCategory);
		});

	}
	submit(model: CategoryEditModel) {

		this.cmsService.saveCategories(model)
			.then(result => this.requestResult = result)
			.then(x => this.timer = setTimeout(() => this.requestResult.successMessage = null, 3000))
	}
}