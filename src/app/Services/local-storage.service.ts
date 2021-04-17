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

  async set(key: string, value: string): Promise<any> {
    await localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

}
