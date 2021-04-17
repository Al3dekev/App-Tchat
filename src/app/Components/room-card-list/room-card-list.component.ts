import {Component, OnInit, ViewChild} from '@angular/core';
import {Room} from '../../Models/room';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../Services/auth.service';
import {CdkScrollable} from '@angular/cdk/overlay';

@Component({
  selector: 'app-room-card-list',
  templateUrl: './room-card-list.component.html',
  styleUrls: ['./room-card-list.component.css']
})
export class RoomCardListComponent implements OnInit {
  public ListofRooms: Room[];
  @ViewChild('ScrollSystemChat') public scrollTchat: CdkScrollable;

  constructor(private http: HttpClient, private as: AuthService) { }

  getAllRooms(): void{
    this.http.get<any>(this.as.URL + 'rooms/usr/' + this.as.usernameToken).subscribe((res) => {
      this.ListofRooms = JSON.parse(res);
      console.log(this.ListofRooms);
    });
  }

  ngOnInit(): void {
    this.getAllRooms();
  }

}
