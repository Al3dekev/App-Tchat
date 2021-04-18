import {Message} from './message';
import {Room} from './room';

export class Account {
  id: number;
  pseudo: string;
  RoomsOwned: Room[];
  RoomList: Room[];
}
