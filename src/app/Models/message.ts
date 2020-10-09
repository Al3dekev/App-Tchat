import {Account} from './account';

export class Message {
  id: number;
  content: string;
  date_envoi: string;
  account: Account;
}
