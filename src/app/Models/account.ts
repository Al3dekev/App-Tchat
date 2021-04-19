import {Message} from './message';
import {Room} from './room';

export class Account {
  id: number;
  pseudo: string;
  password: string;
  RoomsOwned: Room[];
  RoomList: Room[];
}
