import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RoomService} from '../../Services/room.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  public CreateRoom: FormGroup;
  public msgerror: string;

  constructor(private formBuilder: FormBuilder,
              public RS: RoomService,
              private dialogRef: MatDialog) {
    this.msgerror = '';
  }

  cancelCreation(): void{
    this.dialogRef.closeAll();
  }

  confirmCreation(): void{
    if (this.CreateRoom.value.RoomNameInput !== ''){
      this.msgerror = '';
      this.RS.createNewRoom(this.CreateRoom.value.RoomNameInput);
      this.cancelCreation();
    } else {
      this.msgerror = 'Veuillez saisir un nom';
    }

  }

  formCreateRoom(): void{
    this.CreateRoom = this.formBuilder.group({
      RoomNameInput: ''
    });
  }

  ngOnInit(): void {
    this.formCreateRoom();
  }

}
