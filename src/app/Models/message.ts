import {Account} from './account';
import {Room} from './room';

export class Message {
  id: number;
  content: string;
  date_envoi: string;
  account: Account;
  RoomList: Room[];
}
