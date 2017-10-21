import { HttpInterceptorService } from './../shared/http-interceptor.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: [ ]
})
export class SpinnerComponent implements OnDestroy {
    public isSpinnerVisible: boolean;
    private subscription: Subscription;

    constructor(private http: HttpInterceptorService) {
        this.subscription = this.http
            .pendingRequestsStatus
            .subscribe(isSpinnerVisible => {
                this.isSpinnerVisible = isSpinnerVisible;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}