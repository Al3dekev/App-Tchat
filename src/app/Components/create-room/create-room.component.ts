import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  public CreateRoom: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  formCreateRoom(): void{
    this.CreateRoom = this.formBuilder.group({
      RoomNameInput: ''
    });
  }

  ngOnInit(): void {
    this.formCreateRoom();
  }

}
