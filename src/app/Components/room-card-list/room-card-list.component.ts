import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class RoomCardListComponent implements OnInit, OnDestroy {
  public ListofRooms: Room[];
  @ViewChild('ScrollSystemChat') public scrollTchat: CdkScrollable;
  private ReloadRooms: any;

  constructor(public AS: AccountService, private dialog: MatDialog) {
    this.ListofRooms = [];
    this.ReloadRooms = interval(500).subscribe(() => {
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

  @HostListener('unload')
  ngOnDestroy(): void{
    setTimeout(() => {
      this.ReloadRooms.unsubscribe();
    });
  }


  ngOnInit(): void {}

}
