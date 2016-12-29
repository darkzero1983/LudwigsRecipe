import { Injectable, OnInit }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { NavigationModel} from 'app/models';

@Injectable()
export class NavigationService implements OnInit {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private navigationUrl = '/api/Navigation/Load';
	private isMobileMenuOpen: boolean;
	private positionTop: number;
	private displayHeight: number;
	private displayWidth: number;
	private currentCategoryUrl: string;
	public navigation: NavigationModel = new NavigationModel();
	

	constructor(
		private http: Http,
		private router: Router
	) { }

	ngOnInit()
	{
		
	}

	loadNavigation(): void {
		this.http.get(this.navigationUrl, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as NavigationModel)
			.then(result => this.navigation = result)
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
	
	SetActiveNavigation(routeName: string): void {
		var IsNaviFounded: boolean = false;

		this.navigation.MainNavigation.forEach(navigation => {
			if (navigation.RouteName === routeName) {
				navigation.Active = !IsNaviFounded;
				IsNaviFounded = true;
			} else {
				navigation.Active = false;
			}
		});
		if (!IsNaviFounded) {
			this.navigation.MainNavigation[0].Active = true;
		}
	}

	UpdateActiveNavigaton(): void {
		var IsNaviFounded: boolean = false;
		this.navigation.MainNavigation.forEach(navigation => {
			if (navigation.CategoryUrl != null && navigation.CategoryUrl === this.currentCategoryUrl) {

				navigation.Active = !IsNaviFounded;
				IsNaviFounded = true;
			} else {
				navigation.Active = false;
			}
		});
		this.navigation.SubNavigation.forEach(navigation => {
			if (navigation.CategoryUrl != null && navigation.CategoryUrl === this.currentCategoryUrl) {

				navigation.Active = !IsNaviFounded;
				IsNaviFounded = true;
			} else {
				navigation.Active = false;
			}
		});
		if (!IsNaviFounded && this.navigation != null && this.navigation.MainNavigation != null && this.navigation.MainNavigation.length >= 1) {
			this.navigation.MainNavigation[0].Active = true;
		}
	}

	

	SetMobileMenuHeight() {
		this.GetScreenWidthAndHeight();
		$('.mobile-menu-height').css('height', (this.displayHeight - 58) + 'px');
		$('.mobile-menu-height').css('max-height', (this.displayHeight - 58) + 'px');
	}

	GetScreenWidthAndHeight() {
		this.displayWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.displayHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}
}