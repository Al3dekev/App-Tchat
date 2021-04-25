import {Component, OnInit, ViewChild} from '@angular/core';
import {Room} from '../../Models/room';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../Services/auth.service';
import {CdkScrollable} from '@angular/cdk/overlay';
import {AccountService} from '../../Services/account.service';

@Component({
  selector: 'app-room-card-list',
  templateUrl: './room-card-list.component.html',
  styleUrls: ['./room-card-list.component.css']
})
export class RoomCardListComponent implements OnInit {
  public ListofRooms: Room[];
  @ViewChild('ScrollSystemChat') public scrollTchat: CdkScrollable;

  constructor(public AccS: AccountService) {}

  ngOnInit(): void {}

}
