import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../../Models/room';
import {AuthService} from '../../Services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateRoomComponent} from '../create-room/create-room.component';
import {Router} from '@angular/router';
import {RoomService} from '../../Services/room.service';
import {AccountService} from '../../Services/account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public ListofRooms: Room[];

  constructor(private http: HttpClient,
              public as: AuthService,
              public dialog: MatDialog,
              public router: Router,
              public RS: RoomService,
              public AcS: AccountService) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(CreateRoomComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {}

}
