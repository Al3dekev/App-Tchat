import {Message} from './message';
import {Account} from './account';

export class Room {
  id: number;
  name: string;
  AccountOwner: Account;
  dateCreation: string;
  members: Account[];
  messages: Message[];
}
