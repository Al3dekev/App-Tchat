import {Component, OnInit, ViewChild} from '@angular/core';
import {Room} from '../../Models/room';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../Services/auth.service';
import {CdkScrollable} from '@angular/cdk/overlay';
import {AccountService} from '../../Services/account.service';
import {interval} from 'rxjs';
import {Message} from '../../Models/message';
import {RoomService} from '../../Services/room.service';
import {MatDialog} from '@angular/material/dialog';
import {ManageRoomComponent} from '../manage-room/manage-room.component';
import {DeleteRoomComponent} from '../delete-room/delete-room.component';

@Component({
  selector: 'app-room-card-list',
  templateUrl: './room-card-list.component.html',
  styleUrls: ['./room-card-list.component.css']
})
export class RoomCardListComponent implements OnInit {
  public ListofRooms: Room[];
  @ViewChild('ScrollSystemChat') public scrollTchat: CdkScrollable;

  constructor(public AS: AccountService, private dialog: MatDialog) {
    this.ListofRooms = [];
    interval(200).subscribe(() => {
      const checkRoomStatus: Room[] = this.AS.reloadHttpAccount().RoomList;
      if (this.ListofRooms !== undefined && checkRoomStatus !== undefined){
        if (this.ListofRooms.toString() !== checkRoomStatus.toString()){
          this.ListofRooms = this.AS.RoomList;
        }
      }
    }, error => {
      console.log(error);
    });
  }



  createDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteRoomComponent, {
      width: '200px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('createDeleteDialog() => closing');
    });
  }






  ngOnInit(): void {}

}
