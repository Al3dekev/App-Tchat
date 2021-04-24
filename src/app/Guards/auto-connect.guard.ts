import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../Services/local-storage.service';
import {AuthService} from '../Services/auth.service';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AutoConnectGuard implements CanActivate {


  constructor(private lss: LocalStorageService,
              private router: Router,
              private as: AuthService,
              private http: HttpClient,
              private accS: AccountService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('[AutoConnectGuard/Token]', this.lss.get('token'), typeof this.lss.get('token'));
    if (this.lss.ConditionGuard.includes(this.lss.get('token'))){
      return true;
    } else {
      console.log('[GUARD]: Already connected due to token active', this.lss.get('token'));
      if (this.lss.ConditionGuard.includes(this.as.token)){
        this.as.token = this.lss.get('token');
        this.http.get<any>('http://localhost:1789/accounts/' + this.as.usernameToken).subscribe((e) => {
          if (e !== undefined){
            e = JSON.parse(e);
            console.log('IDDDD', e);
            console.log('getHttpAccount => AutoConnectGuard');
            this.accS.getHttpAccount(e.pseudo, e.password);
          } else {
            console.log('error');
          }
        });
      }
      return this.router.parseUrl('/main');
    }
  }

}
