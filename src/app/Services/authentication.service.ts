import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Account } from '../Models/account';

import {Md5} from 'ts-md5';
import {Message} from '../Models/message';


interface NewAccount {
  id: number;
  pseudo: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {


  private apiURL = 'http://localhost:1789/';
  public EstEnLigne = false;
  public userAccount: Account;
  public MessageAccount: Message;


  constructor(private http: HttpClient, private router: Router) {

  }

  SendAMessage(message) {
    const NewMsg = new Message();
    NewMsg.account = this.userAccount;
    NewMsg.content = message;
    this.http.post(this.apiURL + 'messages', NewMsg).subscribe(res => {
      // console.log(res);
    });
  }


  GetMessages(): Message{
    this.http.get<any>(this.apiURL + 'messages').subscribe( res => {
      this.MessageAccount = res;
      return this.MessageAccount;
    });
    return this.MessageAccount;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.EstEnLigne) {
      return this.router.parseUrl('/login');
    } else {
      return this.EstEnLigne;
    }
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username, password);
    this.LoginSystem(username, password);
  }

  LoginSystem(pseudo: string, password: string){
    const md5 = new Md5();
    const AccountLink = this.apiURL + 'accounts/' + pseudo + '&' + md5.appendStr(password).end();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.get<any>(AccountLink).subscribe( res => {
      this.EstEnLigne = true;
      this.userAccount = res;
      console.log(this.userAccount);
      this.router.navigateByUrl('/discuss');
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');

    });
  }
}
