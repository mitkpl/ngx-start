import { AuthUserService } from './../shared-account/auth-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthUserService
  ) {

  }

  logout(){
    this.authService.logOutUser();
  }

  ngOnInit() {
    
  }
}
