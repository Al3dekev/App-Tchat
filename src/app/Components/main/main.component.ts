import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../../Models/room';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public ListofRooms: Room[];

  constructor(private http: HttpClient, public as: AuthService) {}

  ngOnInit(): void {}

}
