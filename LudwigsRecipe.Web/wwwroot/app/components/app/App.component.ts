import { Component, OnInit } from '@angular/core';
import { AccountService, NavigationService } from 'app/services';

@Component({
	selector: 'my-app',
	providers: [NavigationService],
	templateUrl: '/views/template/layout.html'
})

export class AppComponent implements OnInit {
	constructor(
		private accountService: AccountService,
		private navigationService: NavigationService
	) {
	}

	ngOnInit(): void {
		this.accountService.updateUserInformations();
		this.navigationService.loadNavigation();
	}
}