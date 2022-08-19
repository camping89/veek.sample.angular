import { RestService } from './rest.service';
import {
  AuthConfig,
  OAuthService,
  NullValidationHandler,
} from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiName = 'Auth';
  private jwtHelper: JwtHelperService = new JwtHelperService();

  // tslint:disable-next-line:variable-name
  private _decodedAccessToken: any;
  // tslint:disable-next-line:variable-name
  private _decodedIDToken: any;
  get decodedAccessToken() {
    return this._decodedAccessToken;
  }
  get decodedIDToken() {
    return this._decodedIDToken;
  }

  constructor(
    private oauthService: OAuthService,
    private authConfig: AuthConfig,
    public router: Router,
    private restService: RestService
  ) {
  }

  async initAuth(): Promise<any> {
    return new Promise<void>((resolveFn, rejectFn) => {
      // setup oauthService
      this.oauthService.configure(this.authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService.tokenValidationHandler = new NullValidationHandler();

      // subscribe to token events
      this.oauthService.events
        .pipe(filter((e: any) => e.type === 'token_received'))
        .subscribe((a) => {
          this.handleNewToken();
        });

      this.oauthService.loadDiscoveryDocumentAndLogin().then((isLoggedIn) => {
        const token = this.oauthService.getAccessToken();
        if (isLoggedIn && token) {
          this.oauthService.setupAutomaticSilentRefresh();
          resolveFn();
        } else {
          this.oauthService.initLoginFlow();
          rejectFn();
        }
      });
    });
  }

  private handleNewToken() {
    this._decodedAccessToken = this.jwtHelper.decodeToken(
      this.oauthService.getAccessToken()
    );

    this._decodedIDToken = this.jwtHelper.decodeToken(
      this.oauthService.getIdToken()
    );
  }

  logout = () => {
    this.oauthService.stopAutomaticRefresh();
    this.oauthService.revokeTokenAndLogout();

    return this.restService.request<any, any>(
      {
        method: 'GET',
        url: `/api/account/logout`,
        body: null,
      },
      { apiName: this.apiName }
    );
  };
}
