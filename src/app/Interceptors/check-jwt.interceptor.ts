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

  constructor(private as: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.as.token
      })
    });

    return next.handle(authReq).pipe(
      tap((event: HttpResponse<any>) => {
          if (event instanceof HttpResponse) {
            this.as.token = event.headers.get('token');
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse){
            console.log(error.error);
            if (error.status >= 400 && error.status < 500) {
              this.as.EstEnLigne = false;
              this.router.navigateByUrl('/auth/login');
              // this.EstEnLigne = false
              // CanActivate => False
              // router redirect to login page
            }
          } else {
            console.log('issue while trying to retrieve new token:', error);
          }
        })
    );
  }

}
