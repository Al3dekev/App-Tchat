import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RoomService} from '../../Services/room.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private RS: RoomService) { }

  cancelDeletion(): void{
    this.dialogRef.closeAll();
  }

  confirmDeletion(): void{
    console.log('Room deleted');
    this.RS.deleteRoom(this.RS.id);
    this.cancelDeletion();
  }


  ngOnInit(): void {
  }

}
