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
              public AS: AccountService) { }



  searchMemberToAdd(): any{
    return true;
  }

  RemoveMemberChip(): any{
    console.log('chips removed');
  }

  addMembersInChips(): void{
    this.variantsArray = this.productGroup.get('variants') as FormArray;
    this.variantsArray.push(this.formBuilder.group({
      type: '',
      options: ''
    }));

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
    this.productGroup = this.formBuilder.group({
      name: '',
      variants: this.formBuilder.array([
        this.formBuilder.group({
          type: '',
          options: ''
        })
      ]),
    });
  }

}
