import { Component, Input } from '@angular/core';
import { RecipeOverviewRecipeModel } from 'app/models';

@Component({
	selector: 'recipeoverviewitem-directive',
	template: `	<div class="teaser-image">
					<img src="{{recipe.teaserImageUrl}}?w=640&h=480&mode=crop">
				</div>
				<div class="teaser-text">
					<div class="recipe-name">{{recipe.name}}</div>

					<div class="recipe-info">
						<div class="hidden-sm-down">{{recipe.description}}<br></div>
						Erstellt: {{recipe.publishDate}}
					</div>
				</div>
				<div style="clear:both"></div>
			`
})

export class RecipeOverviewItemDirective {
	@Input() recipe: RecipeOverviewRecipeModel;
}