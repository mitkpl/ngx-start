import { AuthUserService } from './shared-account/auth-user.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(
        private authUserService: AuthUserService,
    ){
        
    }

    ngOnInit() {
        this.authUserService.logInUserBasedOnMemory();
    }
}
