import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public ConditionGuard: string[];

  constructor(){
    this.ConditionGuard = [
      null,
      'null',
      '',
      undefined
    ];
  }

  set(key: string, value: string): void{
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

}
