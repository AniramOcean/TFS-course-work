import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static buildRequestWithToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem('TOKEN');
    const headers = req.headers.set('Authorization', `Bearer ${token}`);

    return req.clone({headers});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(AuthInterceptor.buildRequestWithToken(req));
  }
}
