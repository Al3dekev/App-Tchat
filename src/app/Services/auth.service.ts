import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5';
import {LocalStorageService} from './local-storage.service';
import {Account} from '../Models/account';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _URL: string;
  private _token: string;
  private _EstEnLigne: boolean;
  private _userAccount: Account;
  private _ErrorAuth: string;
  private _decodedToken: any;

  constructor(private http: HttpClient, private router: Router, private lss: LocalStorageService) {
    this.URL = 'http://localhost:1789/';
    this.ErrorAuth = '';
  }


  TryToLogin(username: string, password: string): any{
    const md5 = new Md5();
    const loginURL = this.URL + 'auth/logger';
    const bodyURL = {
      username,
      password: md5.appendStr(password).end()
    };

    this.http.post<any>(loginURL, bodyURL).subscribe( (res) => {
      console.log('TOKEN GENERATED', res);
      this.EstEnLigne = true;
      this.token = res.trim();
      console.log(this.lss.get('token'));
      if (res.trim() !== ''){
        this.router.navigateByUrl('/main').then((e) => {
          console.log(e, 'err1');
        }).catch((e) => {
          console.log(e, 'err2');
        });
      } else{
        console.log('Mauvais identifiants');
      }

    }, err => {
      console.log(err, err.message);
    }, () => {
      console.log('completed');

    });

  }

  clearTheToken(): void {
    this.token = '';
    this.EstEnLigne = false;
  }

  get userIdToken(): any{
    return this.decodedToken ? this.decodedToken.userId : null;
  }
  get expiredTimeToken(): any{
    return this.decodedToken ? this.decodedToken.exp : null;
  }
  get usernameToken(): any{
    return this.decodedToken ? this.decodedToken.username : null;
  }

  get decodedToken(): any {
    return this._decodedToken;
  }

  set decodedToken(value: any) {
    this._decodedToken = value;
  }

  get URL(): string {
    return this._URL;
  }

  set URL(value: string) {
    this._URL = value;
  }

  get token(): string {
    if (this._token === this.lss.get('token')){
      return this._token;
    } else {
      return '';
    }
  }

  set token(value: string) {
    this.lss.set('token', value);
    this._token = value;
    if (!this.lss.ConditionGuard.includes(value)) {
      this.decodedToken = jwt_decode(value);
    } else {
      this.decodedToken = '';
    }
  }

  get EstEnLigne(): boolean {
    return this._EstEnLigne;
  }

  set EstEnLigne(value: boolean) {
    this._EstEnLigne = value;
  }

  get userAccount(): Account {
    return this._userAccount;
  }

  set userAccount(value: Account) {
    this._userAccount = value;
  }

  get ErrorAuth(): string {
    return this._ErrorAuth;
  }

  set ErrorAuth(value: string) {
    this._ErrorAuth = value;
  }
}
