import { Injectable } from '@angular/core';
import {Message} from '../Models/message';
import {Room} from '../Models/room';
import {Account} from '../Models/account';
import {HttpClient} from '@angular/common/http';
import {Md5} from 'ts-md5';
import {LocalStorageService} from './local-storage.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _actualAccount: Account;
  private _id: number;
  private _pseudo: string;
  private _RoomsOwned: Room[];
  private _RoomList: Room[];
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:1789/';
  }

  getHttpAccount(pseudonyme: string, password: string | Int32Array): Account{
      console.log(this.URL + 'accounts/' + pseudonyme + '&' + password.toString() + '/details');
      this.http.get<any>(this.URL + 'accounts/' + pseudonyme + '&' + password.toString() + '/details').subscribe((res) => {
        console.log('NEO ACCOUUUUNT', res);
        this.actualAccount = JSON.parse(res);
        return JSON.parse(res);
      });
      return this.actualAccount;
  }

  get actualAccount(): Account {
    return this._actualAccount;
  }

  set actualAccount(value: Account) {
    this._actualAccount = value;
    this.id = this._actualAccount.id;
    this.pseudo = this._actualAccount.pseudo;
    this.RoomsOwned = this._actualAccount.RoomsOwned;
    this.RoomList = this._actualAccount.RoomList;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get RoomsOwned(): Room[] {
    return this._RoomsOwned;
  }

  set RoomsOwned(value: Room[]) {
    this._RoomsOwned = value;
  }

  get RoomList(): Room[] {
    return this._RoomList;
  }

  set RoomList(value: Room[]) {
    this._RoomList = value;
  }
}
