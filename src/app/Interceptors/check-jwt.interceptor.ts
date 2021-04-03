import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../Services/auth.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class CheckJWTInterceptor implements HttpInterceptor {

  constructor(private as: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.as.token)
    });

    return next.handle(authReq).pipe(
      tap(e => {
        if (e instanceof HttpResponse){
          this.as.token = e.headers.get('token');
        }
      }, error => {
        console.log('issue while trying to retrieve new token: ' + error);
      })
    );
  }

}
