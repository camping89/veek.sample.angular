import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    private oauthService: OAuthService
  ) {}
  canActivate(): boolean {
    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.initCodeFlow();
      return false;
    }

    return true;
  }
}
