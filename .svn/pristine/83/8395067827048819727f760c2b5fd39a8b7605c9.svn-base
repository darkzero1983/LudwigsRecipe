import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from 'app/services'
import { AccountLoginModel } from 'app/models';
@Component({
	templateUrl: '/views/account/AccountLogin.html'
})

export class AccountLoginComponent implements OnInit {
	private model: AccountLoginModel;
	private submitted = false;

	constructor(
		private accountService: AccountService,
		private router: Router
	) {
		
	}

	ngOnInit(): void {
		this.model = new AccountLoginModel();
		this.model.rememberMe = true;
	}

	submit(model: AccountLoginModel) {
		this.submitted = true;
		this.accountService.login(model)
			.then((loginSuccess: boolean) => {
				if (loginSuccess) {
					this.accountService.userInformations.isAuthenticated = true;

					this.router.navigate(['/']);
					/*
					if (this.globalVariables.returnUrl != null) {
						window.location.href = this.globalVariables.returnUrl;
					}
					else {
						this.router.navigate(['/']);
					}*/

				}
				else {
					//this.loginFailed = true;
				}
			});

		//this.hitCountService.AddHitCount().subscribe();
	}
}