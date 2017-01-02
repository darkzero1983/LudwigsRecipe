import { Component } from '@angular/core'
import { IngredientModel } from 'app/models'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CmsService } from 'app/services';

@Component({
	template: `
		<h1 class="headline" > Zutaten Umbenennen</h1 >

		<strong>Zutaten:</strong> : <span *ngFor="let ingredient of ingredients">{{ingredient.name}}, </span>
		<br><br>

		<!-- Neuer Name -->
		<formulartextbox-directive [value]="ingredientName" (changeValue)="ingredientName=$event" displayName="Neuer Name"></formulartextbox-directive>

		<div class="navbar navbar-default navbar-fixed-bottom navbar-for-spans">
			<div class="container">
				<div class="navbar-header">
					<input type="submit" class="btn btn-success" value="Speichern" (click)="submit();">
				</div>
			</div>
		</div>
`
})

export class CmsIngredientRenameComponent {
	private ingredientIds: string;
	private ingredientName: string;
	private ingredients: IngredientModel[];

	constructor(
		private cmsService: CmsService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.route.params.forEach((params: Params) => {
			this.ingredientIds = params['ids'];
			if (this.ingredientIds != undefined && this.ingredientIds != '')
			{
				
				this.cmsService.getIngredientsForIds(this.ingredientIds).then(ingredients => this.ingredients = ingredients);
			}
		});
	}

	private submit() {
		if (this.ingredientIds == undefined)
		{
			return;
		}
		this.cmsService.putIngredients(this.ingredientIds, this.ingredientName).then(x => this.router.navigate(['/CMS/Zutaten']))
	}
}