import { environment } from '@app/environments';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class RestService {
  constructor(private httpClient: HttpClient) {}

  request<R, T>(
    request: { method: string; url: string; body?: any; params?: any },
    {
      apiName = 'Default',
      ...options
    }: { apiName?: string; [key: string]: any } = {},
    appendSuffix: boolean = true
  ): Observable<T> {
    const apiUrl = appendSuffix ? `${API_URL}${request.url}` : request.url;

    // remove null or undefined from request.params
    if (request.params != null) {
      Object.keys(request.params).forEach((key) => {
        if (request.params[key] === undefined) {
          delete request.params[key];
        }
      });
    }

    console.log(`%c ${request.method} ${apiName}` , 'color: green');

    return this.httpClient.request<T>(request.method, apiUrl, {
      body: request.body,
      params: request.params,
    });
  }
}
