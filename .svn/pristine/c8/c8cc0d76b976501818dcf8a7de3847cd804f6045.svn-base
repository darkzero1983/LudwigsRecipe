import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IngredientListModel } from 'app/models';

@Component({
	selector: 'recipeingredients-directive',
	templateUrl: '/views/directives/recipe/RecipeIngredients.html'
})

export class RecipeIngredientsDirective implements OnChanges {
	private costumAmount: number;
	@Input() ingredients: Array<IngredientListModel>;
	@Input() measurement: string;
	@Input() amount: number;
	@Output() changeCostumAmount: EventEmitter<number> = new EventEmitter<number>();

	ngOnChanges() {
		if (this.amount != undefined) {
			this.costumAmount = this.amount;
			this.changeCostumAmount.emit(this.costumAmount);
		}

	}

	calculateAmount(value: number) {
		return value / this.amount * this.costumAmount;
	}

	addCostumAmount() {
		this.costumAmount = +this.costumAmount + 1;
		this.changeCostumAmount.emit(this.costumAmount);
	}

	subtractCostumAmount() {
		if (this.costumAmount > 1)
		{
			this.costumAmount = +this.costumAmount - 1;
			this.changeCostumAmount.emit(this.costumAmount);
		}
	}
}