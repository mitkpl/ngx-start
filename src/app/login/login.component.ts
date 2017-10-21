import { Router } from '@angular/router';
import { HttpInterceptorService } from './../shared/http-interceptor.service';
import { LoginUserModel } from './../shared-account/login-user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserMemoryService } from './../shared/browser-memory.service';
import { AuthUserService } from '../shared-account/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor (
    @Inject(FormBuilder) fb: FormBuilder,
    private authUser: AuthUserService,
    private http: HttpInterceptorService,
    private route: Router
  ) {
    this.createLoginForm(fb);
  }

  createLoginForm(fb: FormBuilder): void {
    this.loginForm = fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(user: LoginUserModel): void {
    this.authUser.authorizeUser({token: 'token'});
    this.route.navigate(['/pulpit']);
  }

  ngOnInit() {
    
  }

}
