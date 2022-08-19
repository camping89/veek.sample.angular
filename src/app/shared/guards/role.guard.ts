import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '@app/environments';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private oauthService: OAuthService,
    public router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token') as any;
    // decode the token to get its payload
    const tokenPayload = decode(token) as any;
    if (
      !this.oauthService.hasValidAccessToken() ||
      tokenPayload['role'] !== expectedRole
    ) {
      this.oauthService.initCodeFlow();
      return false;
    }
    return true;
  }
}
