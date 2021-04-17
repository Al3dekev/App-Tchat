import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../Services/local-storage.service';
import {AuthService} from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private lss: LocalStorageService, private router: Router, private as: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('[AuthGuard/Token]', this.lss.get('token'), typeof this.lss.get('token'));
    if (this.lss.ConditionGuard.includes(this.lss.get('token'))){
      console.log('[GUARD]: Route isn\'t allowed');
      return this.router.parseUrl('/auth/login');
    } else {
      console.log('[GUARD]: Route is allowed');
      if (this.lss.ConditionGuard.includes(this.as.token)){
        this.as.token = this.lss.get('token');
      }
      return true;
    }
  }

}
