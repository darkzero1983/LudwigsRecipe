import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService, NavigationService } from 'app/services';

@Component({
	template: ''
})

export class AccountLogoutComponent implements OnInit {
	constructor(
		private accountService: AccountService,
		private navigationService: NavigationService,
		private router: Router
	) {
	}

	ngOnInit() {
		this.accountService.logout().then(result => this.loggedOut());
	}

	private loggedOut()
	{
		this.navigationService.loadNavigation();
		this.router.navigate(['/'])
	}
}