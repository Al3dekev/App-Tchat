import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {RoomService} from '../../Services/room.service';
import {AccountService} from '../../Services/account.service';

@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css']
})
export class ManageRoomComponent implements OnInit {

  public RemoveUserInRoom: FormGroup;
  public AddUserInRoom: FormGroup;
  private productGroup: FormGroup;
  private variantsArray: FormArray;

  constructor(private formBuilder: FormBuilder,
              public RS: RoomService,
              public AS: AccountService) {}



  searchMemberToAdd(): any{
    this.RS.MsgHttpWarning = '';
    const body = {
      accountPseudo: this.AddUserInRoom.value.rechmember,
      roomId: this.RS.id
    };
    this.RS.addMemberToRoom(body);
    // Verifie si membre existe
    // Si existe pas, faire un message rouge juste en dessous
    // Si existe, inserer membre et faire message vert pour dire qu'il a été ajouté
  }

  RemoveMemberChip(mem): any{
    this.RS.MsgHttpWarning = '';
    const body = {
      accountPseudo: mem.pseudo,
      roomId: this.RS.id
    };
    if (mem.id !== this.AS.id.toString()) {
      this.RS.removeMemberToRoom(body);
    }
  }

  formManageRoom(): void{
    this.AddUserInRoom = this.formBuilder.group({
      rechmember: ''
    });

    this.RemoveUserInRoom = this.formBuilder.group({
      supprmember: []
    });
  }

  ngOnInit(): void {
    this.formManageRoom();
  }

}
