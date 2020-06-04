import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiErrorsService } from '../services/apiErrors.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiErrorsInterceptor implements HttpInterceptor {
  constructor(private apiErrorsService: ApiErrorsService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.apiErrorsService.errors$.next(error.status);

        return throwError(error);
      })
    );
  }
}
