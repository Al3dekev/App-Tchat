import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Account } from '../Models/account';

import {Md5} from 'ts-md5';
import {Message} from '../Models/message';
import {CdkScrollable} from '@angular/cdk/overlay';
import {Observable} from 'rxjs';


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


}
