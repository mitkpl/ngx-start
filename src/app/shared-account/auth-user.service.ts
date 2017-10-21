import { HttpInterceptorService } from './../shared/http-interceptor.service';
import { Router } from '@angular/router';
import { LoginUserModel } from './login-user.model';
import { AuthUserModel } from './auth-user.model';
import { BrowserMemoryService } from './../shared/browser-memory.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthUserService {

    private authUser: AuthUserModel;

    constructor(
        private browserMemory: BrowserMemoryService,
        private router: Router,
        private http: HttpInterceptorService
    ) {
        this.authUser = new AuthUserModel();
    }

    rememberAuthUser(user: AuthUserModel, rememberMe: boolean): void {
        if (rememberMe) {
            this.browserMemory.setLocalStorage('user-token', user.token);
        } else {
            this.browserMemory.setSession('user-token', user.token);
        }
    }

    authorizeUser(user: AuthUserModel) {
        this.authUser = user;
        this.authUser.isLogged = true;
        let jwtUser = this.parseJwt(user.token);
        this.rememberAuthUser(this.authUser, true);
    }

    logOutUser() {
        delete this.authUser.token;
        this.authUser.isLogged = false;
        this.browserMemory.clearAllMemory();
        this.router.navigate(['/login']);
    }

    logInUserBasedOnMemory() {
        let user = new AuthUserModel();
        user.token = this.getUserTokenFromMemory().toString();
        
        if(!!user.token) {
            this.authorizeUser({token: user.token});
        } else {
            this.logOutUser();
        }
    }
    
    private parseJwt(token: string): any {
        var base64Url = token.split('.')[1];
        if (base64Url) {
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        } else {
            return null;
        }
    }

    getUserTokenFromMemory(): string {
        const userToken = this.browserMemory.getLocalStorage('user-token') || this.browserMemory.getSession('user-token');

        return userToken;
    }

    get isUserLogged(): boolean {
        return this.authUser.isLogged;
    }
}
