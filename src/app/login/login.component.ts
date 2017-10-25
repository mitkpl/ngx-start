import { LoginUserModel } from './login-user.model';
import { Router } from '@angular/router';
import { HttpInterceptorService } from './../shared/http-interceptor.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserMemoryService } from './../shared/browser-memory.service';
import { AuthUserService } from '../shared/auth/auth-user.service';

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
    if(user.login && user.password) {
      this.authUser.authorizeUser ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
      this.route.navigate(['/pulpit']);
    }
  }

  ngOnInit() {
    
  }

}
