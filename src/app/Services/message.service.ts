import { Injectable } from '@angular/core';
import {Account} from '../Models/account';
import {Room} from '../Models/room';
import {HttpClient} from '@angular/common/http';
import {Message} from '../Models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _actualMessages: Message[];
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:1789/';
  }


  getHttpMessages(id: string | number): void{
    this.http.get<any>(this.URL + 'messages/' + id).subscribe((res) => {
      this.actualMessages = JSON.parse(res);
      return JSON.parse(res);
    });
  }

  get actualMessages(): Message[] {
    return this._actualMessages;
  }

  set actualMessages(value: Message[]) {
    this._actualMessages = value;
  }

}
