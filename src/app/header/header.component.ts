import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../shared/auth/auth-user.service';

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
