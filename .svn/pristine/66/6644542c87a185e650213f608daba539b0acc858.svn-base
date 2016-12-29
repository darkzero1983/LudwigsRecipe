import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { AccountLoginModel, AccountRegisterModel, ForgotPasswordModel, FormResultModel, ResetPasswordModel, UserInformationModel } from 'app/models';

@Injectable()
export class AccountService implements CanActivate {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	public userInformations: UserInformationModel = new UserInformationModel();

	constructor(
		private http: Http,
		private router: Router
	) {
	}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		var that = this;
		return this.http.get('/api/account/GetUserInformation', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as UserInformationModel)
			.then(result => this.userInformations = result)
			.then(function (result) {
				let roles = route.data["roles"] as Array<string>;

				for (let role of roles) {
					if (that.isUserInGroup(role)) {
						return true;
					}
				}
				that.router.navigate(['/']);

				return false;
			})
			.catch(this.handleError);


	}

	private isUserInGroup(group: string) {
		switch (group) {
			case "author":
				return this.userInformations.isAuthor;
			case "admin":
				return this.userInformations.isAdmin;
		}
		return false;
	}

	public updateUserInformations() {
		this.http.get('/api/account/GetUserInformation', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as UserInformationModel)
			.then(result => this.userInformations = result)
			.catch(this.handleError);
	}

	login(data: AccountLoginModel): Promise<boolean> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let myData = JSON.stringify(data);
		let result: Promise<boolean>;
		result = this.http.post('/api/account/Login', myData, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as boolean)
			.catch(this.handleError);
		this.updateUserInformations();
		return result;
	}

	logout(): Promise<boolean> {
		return this.http.post('/api/account/Logout', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as boolean)
			.then(result => this.userInformations.isAdmin = false)
			.then(result => this.userInformations.isAuthenticated = false)
			.then(result => this.userInformations.isAuthor = false)
			.then(result => this.userInformations.isFriend = false)
			.then(result => this.userInformations.userName = null)
			.catch(this.handleError);
	}

	register(data: AccountRegisterModel): Promise<FormResultModel> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let myData = JSON.stringify(data);

		return this.http.post('/api/account/Register', myData, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as FormResultModel)
			.catch(this.handleError);
	}

	forgotPassword(data: ForgotPasswordModel): Promise<FormResultModel> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let myData = JSON.stringify(data);

		return this.http.post('/api/account/ForgotPassword', myData, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as FormResultModel)
			.catch(this.handleError);
	}

	resetPassword(data: ResetPasswordModel): Promise<FormResultModel> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let myData = JSON.stringify(data);

		return this.http.post('/api/account/ResetPassword', myData, { headers: this.headers })
			.toPromise()
			.then(response => response.json() as FormResultModel)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}