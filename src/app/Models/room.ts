import {Message} from './message';
import {Account} from './account';

export class Room {
  id: number;
  name: string;
  idAccountOwner: number;
  dateCreation: string;
  members: Account[];
  messages: Message[];
}
