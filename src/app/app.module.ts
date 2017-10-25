import { BrowserMemoryService } from './shared/browser-memory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from './shared/http-loader.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AppPublicComponent } from './app-public/app-public.component';
import { AppPrivateComponent } from './app-private/app-private.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthUserService } from './shared/auth/auth-user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NotificationsComponent,
    AppPublicComponent,
    AppPrivateComponent,
    ErrorPageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    BrowserModule,
    NgHttpLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuardService, AuthUserService, BrowserMemoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
