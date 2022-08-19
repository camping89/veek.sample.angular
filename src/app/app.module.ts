import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from './shared/shared.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DevExtremeModule } from 'devextreme-angular';
import { AuthInterceptor } from '@app/interceptors';
import { Constants } from './shared/helpers/constants';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AuthService } from '@app/services';
import { environment } from '@app/environments';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from '../app/shared/utils/custom-overlay-container';
import { AppSettings } from './app.settings';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { FlexLayoutModule } from '@angular/flex-layout';

const config: InputFileConfig = {
  fileAccept: '*'
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: false,
  suppressScrollX: true               
};

export function getToken() {
  return localStorage.getItem(Constants.Access_Token);
}

const configAuthZero: AuthConfig = environment.idp;
// We need a factory, since localStorage is not available during AOT build time.
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    DevExtremeModule,
    SharedModule,
    PerfectScrollbarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
      },
    }),
    OAuthModule.forRoot(),
    InputFileModule.forRoot(config),
    NgProgressModule,
    NgProgressHttpModule,
    FlexLayoutModule
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    SharedModule,
    AuthService,
    { provide: AuthConfig, useValue: configAuthZero },
    { provide: OAuthStorage, useFactory: storageFactory },
    {
      provide: APP_INITIALIZER,
      useFactory: (initialAuthService: AuthService) => () =>
        initialAuthService.initAuth(),
      deps: [AuthService],
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
    AppSettings
  ],
  bootstrap: [AppComponent],
  exports: [PerfectScrollbarModule],
})
export class AppModule {}
