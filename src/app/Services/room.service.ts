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
  private readonly URL: string;
  public isOwner: boolean;
  private _MsgHttpWarning: string;

  constructor(private http: HttpClient,
              private AS: AccountService,
              private MS: MessageService) {
    this.URL = 'http://localhost:1789/rooms/';
    this.isOwner = false;
    this._MsgHttpWarning = '';
  }


  getHttpRoom(id: string): Room{
    this.http.get<any>(this.URL + id + '/details').subscribe((res) => {
      this.actualRoom = JSON.parse(res);
      this.MS.LinkedRoomId = id;
      this.MS.getHttpMessages(id);
      this.getHttpOwner(this.actualRoom.id);
      return JSON.parse(res);
    });
    return this.actualRoom;
  }

  getHttpOwner(idRoom: number): void {
    this.http.get<any>(this.URL + idRoom + '/owner').subscribe((res) => {
      const room: Room = JSON.parse(res);
      this.isOwner = this.AS.id === room.AccountOwner.id;
      return room.AccountOwner;
    });
  }

  deleteRoom(idRoom: number): void{
    console.log(this.URL + idRoom.toString());
    this.http.delete(this.URL + idRoom.toString()).subscribe(() => {
      console.log('deleted with success');
    });
  }

  createNewRoom(newRoomName: string): void{
    const bodyRoomInfos = {
      pseudo: this.AS.pseudo,
      name: newRoomName
    };
    this.http.post<any>(this.URL + 'create', bodyRoomInfos).subscribe((e) => {
      console.log('INSERTION ROOM => ', e);
      // this.AS.reloadHttpAccount();
      // reload deja realise regulierement
    });
  }

  addMemberToRoom(body: any): void {
    this.http.post<any>(this.URL + 'addmember', body).subscribe(() => {
      console.log('MEMBER ADDED => ', body.accountPseudo);
      const acc: Account = new Account();
      acc.pseudo = body.accountPseudo;
      this.members.push(acc);
    });
  }

  removeMemberToRoom(body: any): void {
    this.http.post<any>(this.URL + 'removemember', body).subscribe(() => {
      console.log('MEMBER REMOVED => ', body.accountPseudo);
      this.members = this.members.filter( (obj) => {
        return obj.pseudo !== body.accountPseudo;
      });
    });
  }

  get MsgHttpWarning(): string {
    return this._MsgHttpWarning;
  }

  set MsgHttpWarning(value: string) {
    if (value === 'owner is unknown'){
      this._MsgHttpWarning = 'proprio inconnu';
    } else if (value === 'already in room') {
      this._MsgHttpWarning = 'Déjà membre du groupe';
    } else if (value === 'account not found') {
      this._MsgHttpWarning = 'pseudonyme inconnu';
    } else if (value === '') {
      this._MsgHttpWarning = '';
    } else {
      this._MsgHttpWarning = 'Erreur est survenue';
    }


  }

  get actualRoom(): Room {
    return this._actualRoom;
  }

  set actualRoom(value: Room) {
    this._actualRoom = value;
    this.id = this._actualRoom.id;
    this.name = this._actualRoom.name;
    // this.AccountOwner = this._actualRoom.AccountOwner;
    this.dateCreation = this._actualRoom.dateCreation;
    this.members = this._actualRoom.members;
    // this.messages = this._actualRoom.messages;
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
