import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { AuthUserService } from './shared/auth/auth-user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(
        private authUserService: AuthUserService,
    ){
        
    }

    ngOnInit() {
        this.authUserService.authorizeFromMemory();
    }
}
