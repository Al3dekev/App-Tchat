import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
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


  constructor(private http: HttpClient, private router: Router) {

  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }



  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username, password);
    this.LoginTest(username, password);
  }

  LoginTest(pseudo: string, password: string){
    let EstTrouve: boolean = false;
    const md5 = new Md5();
    const AccountLink = this.apiURL + 'accounts/' + pseudo + '&' + md5.appendStr(password).end();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.get<any>(AccountLink).subscribe( res => {
      EstTrouve = true;
      console.log(EstTrouve);
      this.router.navigateByUrl('/discuss');
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    });
    if (EstTrouve === false) {
      alert('Pseudo ou Mot de passe incorrect');
    }

  }
}
