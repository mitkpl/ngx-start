import { NotificationModel } from './notification.model';
import { HttpInterceptorService } from './../shared/http-interceptor.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    private toastrOptions: ToastOptions;
    private toastLauncher: Subscription;

    constructor(
        public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private http: HttpInterceptorService
    ) {
        // this.toastrOptions.animate = 'flyRight';
        // this.toastrOptions.positionClass = 'toast-top-right';
        // this.toastrOptions.showCloseButton = true;
        this.toastr.setRootViewContainerRef(vcr);
        this.toastLauncher = this.http
            .notificationEmitter
            .subscribe(toastr => {
                this.showNotification(toastr);
                
            });
    }

    showNotification(toastr: NotificationModel) {
        switch(toastr.type){
            case('error'):
                this.toastr.error(toastr.message);
        }
    }

    showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.toastLauncher.unsubscribe();
    }

}
