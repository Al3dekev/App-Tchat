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
  private _URL: string;
  private _LinkedRoomId: string;

  constructor(private http: HttpClient, private AS: AccountService) {
    this.URL = 'http://localhost:1789/';
  }


  getHttpMessages(id: string | number = this.LinkedRoomId): Message[]{
    this.http.get<any>(this._URL + 'messages/' + id).subscribe((res) => {
      this.actualMessages = JSON.parse(res);
      return JSON.parse(res);
    });
    return this.actualMessages;
  }

  SendMessage(MessageTexte: string): any{
    const NewMsg = new Message();
    NewMsg.account = this.AS.actualAccount;
    NewMsg.content = MessageTexte;
    this.http.post(this._URL + 'messages', NewMsg).subscribe(res => {
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


  get URL(): string {
    return this._URL;
  }

  set URL(value: string) {
    this._URL = value;
  }

  get LinkedRoomId(): string {
    return this._LinkedRoomId;
  }

  set LinkedRoomId(value: string) {
    this._LinkedRoomId = value;
  }
}
