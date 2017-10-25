import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthUserService } from './auth-user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(
		private router: Router,
		private authUserService: AuthUserService
	) { }

	canActivate() {
		if (this.authUserService.isUserLogged) {
			return true;
		} else {
			this.router.navigate(['/blad/odmowa-dostepu']);
			return false;
		}
	}
}
