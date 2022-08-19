import { OAuthService } from 'angular-oauth2-oidc';
import { Constants } from '../helpers/constants';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Notification } from '../helpers/notification';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';

  constructor(
    private oAuthService:OAuthService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      let contentType = 'application/json';
      if (this.isFormUrlencodedContentType(req)) {
        contentType = 'application/x-www-form-urlencoded';
      }

      req = req.clone({
        headers: req.headers.set('Content-Type', contentType),
      });
    }

    req = this.addAuthenticationToken(req);

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
        }

        let errorMessage = error.error.error_description || error.message;
        if (!errorMessage) {
          errorMessage = 'An unknown error occurred.';
        }

        Notification.Error(errorMessage);
        console.log(`%c ${errorMessage}`, 'color: red');

        return throwError(error);
      })
    ) as any;
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    const token = this.oAuthService.getAccessToken();
    if (!token) {
      return request;
    }

    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + token),
    });
  }

  private isFormUrlencodedContentType(request: HttpRequest<any>): boolean {
    return (
      ((request.url.match('connect/token') &&
        request.method === 'POST') as boolean) ||
      ((request.url.match('https://oauth2.googleapis.com/token') &&
        request.method === 'POST') as boolean)
    );
  }
}
