import { AuthUserService } from 'app/shared-account/auth-user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authUserService: AuthUserService
  ) { }

  canActivate() {
    if(this.authUserService.isUserLogged){
      return true;
    } else {
      this.router.navigate(['/blad/odmowa-dostepu']);
      return false;
    }
  }

}
