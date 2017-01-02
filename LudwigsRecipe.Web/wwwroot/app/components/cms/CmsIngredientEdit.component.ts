﻿import { Component } from '@angular/core'
import { IngredientModel } from 'app/models'
import { Router } from '@angular/router';
import { CmsService } from 'app/services';

@Component({
	template: `
		<h1 class="headline" > Zutaten Bearbeiten</h1 >
		<div class="row hidden-sm-down">
			<div class="col-md-1"><strong></strong></div>
			<div class="col-md-8"><strong>Name</strong></div>
			<div class="col-md-3 text-right"><strong>Aktionen</strong></div>
		</div>
		<div *ngFor="let ingredient of ingredients">
			

			<div class="row" style="padding-bottom:3px;margin-bottom:3px;border-bottom:1px solid #D6D6D6">
				
				<div class="col-xs-8 col-md-1" style="padding-top:10px;">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox">
					</label>
				</div>

				<div class="row hidden-md-up"><div class="col-xs-12">Name</div></div>
				<div class="col-xs-12 col-md-8" style="padding-top:10px;">
					{{ingredient.name}} ({{ingredient.usageCount}})
				</div>


				
				<div class="col-xs-8 col-md-3 category-buttons">
					<span class="btn btn-danger" style="margin-left:5px;" (click)="deleteCategory(category);" [hidden]="ingredient.usageCount > 0">
						<i class="fa fa-minus"></i>
					</span>
					<span class="btn btn-primary" style="margin-left:5px;" (click)="deleteCategory(category);">
						<i class="fa fa-pencil"></i>
					</span>
				</div>
			</div>
		</div>

	<div class="navbar navbar-default navbar-fixed-bottom navbar-for-spans">
		<div class="container">
			<div class="navbar-header">
				<input type="submit" class="btn btn-success" value="Auswahl zusammenlegen" (click)="submit();">
			</div>
		</div>
	</div>
		
`
})

export class CmsIngredientEditComponent {
	private ingredients: IngredientModel[];

	constructor(private cmsService: CmsService) {
		this.cmsService.getIngredients().then(ingredients => this.ingredients = ingredients);
	}
}