import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, RequestOptions, XHRBackend, Http} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AuthComponent} from "./components/auth/auth.component";
import {CourierDashboardComponent} from "./components/dashboard/courier-dashboard/courier-dashboard.component";
import {ClientDashboardComponent} from "./components/dashboard/client-dashboard/client-dashboard.component";
import {NotAuthorizedGuard} from "./guards/not-authorized.guard";
import {AuthService} from "./services/auth.service";
import {RegisterComponent} from "./components/register/register.component";
import {AdminGuard} from "./guards/admin.guard";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {LandingHeaderComponent} from "./components/landing-page/header/header.component";
import {LandingFooterComponent} from "./components/landing-page/footer/footer.component";
import {OrderService} from "./services/order.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {httpFactory} from "./services/interceptors/http.factory";
import {Router} from "@angular/router";
import {ClientGuard} from "./guards/client.guard";
import {CourierGuard} from "./guards/courier.guard";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {ProfileComponent} from "./components/profile/profile.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AdminPanelModule} from "./components/admin-panel/admin-panel.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent,
    CourierDashboardComponent,
    ClientDashboardComponent,
    RegisterComponent,
    LandingPageComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminPanelModule,
    AppRoutingModule
  ],
  providers: [
    NotAuthorizedGuard,
    AdminGuard,
    CourierGuard,
    ClientGuard,
    LoggedInGuard,
    AuthService,
    OrderService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
