import { NotificationModel } from './../notifications/notification.model';
import { NotificationsComponent } from './../notifications/notifications.component';
import { Injectable, EventEmitter, Output } from '@angular/core';
import {
    ConnectionBackend,
    Http,
    Request,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    XHRBackend
} from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class HttpInterceptorService extends Http {
    private _pendingRequests = 0;
    private _pendingRequestsStatus: Subject<boolean> = new Subject<boolean>();
    private _notification: Subject<NotificationModel> = new Subject<NotificationModel>();

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions
    ) {
        super(backend, defaultOptions);
    }

    get pendingRequestsStatus(): Observable<boolean> {
        return this._pendingRequestsStatus.asObservable();
    }

    get notificationEmitter(): Observable<NotificationModel> {
        return this._notification.asObservable();
    }

    get pendingRequests(): number {
        return this._pendingRequests;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        this._pendingRequests++;
        

        if (1 === this._pendingRequests) {
            this._pendingRequestsStatus.next(true);
        }

        return super.request(url, options)
            .map(result => {
                return result;
            })
            .catch(error => {
                this._notification.next({
                    message: 'Wystąpił błąd',
                    type: 'error'
                });
                
                return Observable.throw(error);
            })
            .finally(() => {
                this._pendingRequests--;

                if (0 === this._pendingRequests) {
                    this._pendingRequestsStatus.next(false);
                }
            });
    }
}

export function HttpInterceptorServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
    return new HttpInterceptorService(backend, defaultOptions);
}

export let HttpInterceptorServiceFactoryProvider = {
    provide: HttpInterceptorService,
    useFactory: HttpInterceptorServiceFactory,
    deps: [XHRBackend, RequestOptions]
};