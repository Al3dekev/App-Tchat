import { Injectable } from '@angular/core';
import {Room} from '../Models/room';
import {Account} from '../Models/account';
import {Message} from '../Models/message';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private _actualRoom: Room;
  private _id: number;
  private _name: string;
  private _AccountOwner: Account;
  private _dateCreation: string;
  private _members: Account[];
  private _messages: Message[];
  private URL: string;

  constructor(private http: HttpClient, private MS: MessageService, private AS: AccountService) {
    this.URL = 'http://localhost:1789/';
  }


  getHttpRoom(id: string): Room{
    this.http.get<any>(this.URL + 'rooms/' + id).subscribe((res) => {
      this.actualRoom = JSON.parse(res);
      this.MS.getHttpMessages(id);
      return JSON.parse(res);
    });
    return this.actualRoom;
  }

  createNewRoom(newRoomName: string): void{
    const bodyRoomInfos = {
      pseudo: this.AS.pseudo,
      name: newRoomName
    };
    this.http.post<any>(this.URL + 'rooms/create/' + '')
    // Appel HTTP pour creer la room - a revoir selon WS
  }

  get actualRoom(): Room {
    return this._actualRoom;
  }

  set actualRoom(value: Room) {
    this._actualRoom = value;
    this.id = this._actualRoom.id;
    this.name = this._actualRoom.name;
    this.AccountOwner = this._actualRoom.AccountOwner;
    this.dateCreation = this._actualRoom.dateCreation;
    this.members = this._actualRoom.members;
    this.messages = this._actualRoom.messages;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get AccountOwner(): Account {
    return this._AccountOwner;
  }

  set AccountOwner(value: Account) {
    this._AccountOwner = value;
  }

  get dateCreation(): string {
    return this._dateCreation;
  }

  set dateCreation(value: string) {
    this._dateCreation = value;
  }

  get members(): Account[] {
    return this._members;
  }

  set members(value: Account[]) {
    this._members = value;
  }

  get messages(): Message[] {
    return this._messages;
  }

  set messages(value: Message[]) {
    this._messages = value;
  }

}
