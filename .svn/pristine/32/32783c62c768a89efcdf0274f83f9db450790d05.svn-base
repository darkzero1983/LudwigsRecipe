import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsRecipeOverviewComponent, CmsRecipeEditComponent } from 'app/components'
import { AccountService } from 'app/services'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'Rezepte', component: CmsRecipeOverviewComponent,
				canActivate: [AccountService],
				data: { roles: ['author', 'admin'], cms: true }
			},
			{
				path: 'CMS/Rezept/:id', component: CmsRecipeEditComponent,
				canActivate: [AccountService],
				data: { roles: ['author', 'admin'] }
			},
			{ path: '', redirectTo: 'Rezepte', pathMatch: 'full' }
		])
	],
	exports: [
		RouterModule
	]
})

export class CmsModule { }