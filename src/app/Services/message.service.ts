import { Injectable } from '@angular/core';
import {Account} from '../Models/account';
import {Room} from '../Models/room';
import {HttpClient} from '@angular/common/http';
import {Message} from '../Models/message';
import {RoomService} from './room.service';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _actualMessages: Message[];
  private URL: string;

  constructor(private http: HttpClient,
              private RS: RoomService,
              private AS: AccountService) {
    this.URL = 'http://localhost:1789/';
  }


  getHttpMessages(id: string | number = this.RS.id): Message[]{
    this.http.get<any>(this.URL + 'messages/' + id).subscribe((res) => {
      this.actualMessages = JSON.parse(res);
      return JSON.parse(res);
    });
    return this.actualMessages;
  }

  SendMessage(MessageTexte: string): any{
    const NewMsg = new Message();
    NewMsg.account = this.AS.actualAccount;
    NewMsg.content = MessageTexte;
    this.http.post(this.URL + 'messages', NewMsg).subscribe(res => {
      console.log(res);
      this.getHttpMessages();
    });
  }

  get actualMessages(): Message[] {
    return this._actualMessages;
  }

  set actualMessages(value: Message[]) {
    this._actualMessages = value;
  }

}
