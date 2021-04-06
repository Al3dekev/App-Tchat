import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5';
import {LocalStorageService} from './local-storage.service';
import {Account} from '../Models/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _URL: string;
  private _token: string;
  private _EstEnLigne: boolean;
  private _userAccount: Account;

  constructor(private http: HttpClient, private router: Router, private lss: LocalStorageService) {
    this.URL = 'http://localhost:1789/';
  }


  TryToLogin(username: string, password: string): any{
    const md5 = new Md5();
    const loginURL = this.URL + 'auth/logger/';
    const bodyURL = {
      username,
      password: md5.appendStr(password).end()
    };

    this.http.post<any>(loginURL, bodyURL).subscribe( res => {
      this.EstEnLigne = true;
      console.log(res);
      this.token = res.trim();
      if (res.trim() !== ''){
        this.router.navigate(['/main/discuss']).then((e) => {
          console.log(e);
        }).catch((e) => {
          console.log(e);
        });
      } else{
        console.log('Mauvais identifiants');
      }

    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');

    });

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
}
