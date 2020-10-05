import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Account } from '../Models/account';

import {Md5} from 'ts-md5';


interface NewAccount {
  id: number;
  pseudo: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedInStatus = false;
  private apiURL = 'http://localhost:1789/';


  constructor(private http: HttpClient) {

  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  LoginTest(pseudo: string, password: string){
    const md5 = new Md5();
    const AccountLink = this.apiURL + 'accounts/' + pseudo + '&' + md5.appendStr(password).end()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.get<any>(AccountLink)
      .subscribe( res => {
      console.log(res);
    }, error => console.error('There was an error!', error));
  }
}
