import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardService } from './shared-account/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppPublicComponent } from './app-public/app-public.component';
import { AppPrivateComponent } from './app-private/app-private.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';

const appRoutes: Routes = [
    {
        path: '', component: AppPublicComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
        ]
    },
    {
        path: 'pulpit', component: AppPrivateComponent, canActivate: [AuthGuardService], children: [
            { path: '', component: DashboardComponent }
        ]
    },

    { path: 'blad/:errorInfo', component: ErrorPageComponent },
    { path: '**', redirectTo: 'blad/nie-znaleziono-strony' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}