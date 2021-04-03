import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _URL = 'http://localhost:1789/';
  private _token: string;

  constructor(private http: HttpClient, private router: Router) { }


  login(){

  }


  get URL(): string {
    return this._URL;
  }

  set URL(value: string) {
    this._URL = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
