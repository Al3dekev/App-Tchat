import { Injectable } from '@angular/core';
import {Account} from '../Models/account';
import {Room} from '../Models/room';
import {HttpClient} from '@angular/common/http';
import {Message} from '../Models/message';
import {RoomService} from './room.service';
import {AccountService} from './account.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _actualMessages: Message[];
  private _URL: string;
  private _LinkedRoomId: string;

  constructor(private http: HttpClient) {
    this.URL = environment.apiurl + 'messages/';
  }


  getHttpMessages(id: string | number = this.LinkedRoomId): Message[]{
    this.http.get<any>(this._URL + id).subscribe((res) => {
      this.actualMessages = JSON.parse(res);
      return JSON.parse(res);
    });
    return this.actualMessages;
  }

  SendMessage(BodyToSend: any): any{
    this.http.post(this._URL + 'new', BodyToSend).subscribe(res => {
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
