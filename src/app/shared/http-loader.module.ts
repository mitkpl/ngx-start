import { NgModule } from '@angular/core';
import { HttpInterceptorServiceFactoryProvider } from './http-interceptor.service';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SpinnerComponent } from "app/spinner/spinner.component";

@NgModule({
    declarations: [
        SpinnerComponent,
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        SpinnerComponent,
    ],
    providers: [
        HttpInterceptorServiceFactoryProvider
    ]
})
export class NgHttpLoaderModule {
}