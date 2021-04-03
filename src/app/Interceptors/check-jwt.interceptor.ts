import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpHeaders
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
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.as.token
      })
    });

    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse){
          this.as.token = event.headers.get('token');
        }
      }, error => {
        console.log('issue while trying to retrieve new token: ' + error);
      })
      // ici, gerer si erreur err.status <> 400-499 alors rediriger route vers page login
      // + this.EstEnligne = false donc CanActivate = false
    ;
  }

}
