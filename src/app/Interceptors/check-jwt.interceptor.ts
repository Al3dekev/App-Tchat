import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../Services/auth.service';
import {catchError, tap} from 'rxjs/operators';
import {LocalStorageService} from '../Services/local-storage.service';
import {Router} from '@angular/router';

@Injectable()
export class CheckJWTInterceptor implements HttpInterceptor {

  constructor(private as: AuthService, private router: Router, private lss: LocalStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.as.token
      }),
      responseType: 'text'
    });

    return next.handle(authReq).pipe(
      tap((event: HttpResponse<any>) => {
          this.as.ErrorAuth = '';
          if (event instanceof HttpResponse) {
            if (!this.lss.ConditionGuard.includes(event.headers.get('token'))){
              this.as.token = event.headers.get('token');
            } else {
              console.log('token is missing in header');
            }
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse){
            console.log(error.error, error.status);
            this.as.ErrorAuth = error.error;
            if (error.status >= 400 && error.status < 500) {
              this.as.EstEnLigne = false;
              this.as.token = '';
              this.router.parseUrl('/auth/login');
            }
          } else {
            console.log('issue while trying to retrieve new token:', error);
          }
        })
    );
  }

}
