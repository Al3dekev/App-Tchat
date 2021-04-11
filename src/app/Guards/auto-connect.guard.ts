import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../Services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutoConnectGuard implements CanActivate {


  constructor(private lss: LocalStorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.lss.get('token') === '' || this.lss.get('token') === null){
      return this.router.parseUrl('/auth/login');
    } else {
      console.log('[GUARD]: ALready connected due to token active');
      return this.router.parseUrl('/main');
    }
  }

}
