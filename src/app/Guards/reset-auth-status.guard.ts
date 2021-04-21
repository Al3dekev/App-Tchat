import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResetAuthStatusGuard implements CanActivate {

  constructor(private as: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.as.ErrorAuth = '';
    return true;
  }

}
