import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isApiUrl = request.url.startsWith(environment.API_URL);
    if (isApiUrl) {
      request = request.clone({
        setHeaders: {
          apiKey: `${user.apiKey}`,
        },
      });
    }
    return next.handle(request);
  }
}
