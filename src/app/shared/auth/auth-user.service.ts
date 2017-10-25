import { AuthUserModel } from './../models/auth-user.model';
import { HttpInterceptorService } from './../http-interceptor.service';
import { BrowserMemoryService } from './../browser-memory.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthUserService {
    private userToken: string;
    private decodedJwt: any;
    private authUser: AuthUserModel;

    constructor(
        private browserMemory: BrowserMemoryService,
        private router: Router,
        private http: HttpInterceptorService
    ) {
        this.authUser = new AuthUserModel();
    }
    
    get isUserLogged(): boolean {
        return this.authUser.isLogged;
    }
    
    authorizeUser(userToken: string): boolean {
        if(!userToken) return;
        this.authUser.isLogged = true;
        this.authUser.token = userToken;
        this.saveUserToken(this.authUser.token, true);
        return true;
    }

    authorizeFromMemory(){
        this.userToken = this.getUserTokenFromMemory('user-token');
        if(!this.userToken){
            this.logOutUser();
            return false;
        }
        this.getRefreshToken();
        this.encodeUserToken();
        this.authorizeUser(this.userToken);
    }
    
    logOutUser() {
        delete this.userToken;
        this.authUser.isLogged = false;
        this.browserMemory.clearAllMemory();
        this.router.navigate(['/login']);
    }

    private getUserTokenFromMemory(authKey: string) {
        return this.browserMemory.getLocalStorage(authKey) || this.browserMemory.getSession(authKey);
    }

    private getRefreshToken(){
        //send request for new token
        this.userToken = this.userToken;
    }

    private encodeUserToken(){
        //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
        this.decodedJwt = this.parseJwt(this.userToken);
        
    }

    private saveUserToken(token: string, rememberMe: boolean): void {
        if (rememberMe) {
            this.browserMemory.setLocalStorage('user-token', token);
        } else {
            this.browserMemory.setSession('user-token', token);
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
}
