import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upper-app-infos',
  templateUrl: './upper-app-infos.component.html',
  styleUrls: ['./upper-app-infos.component.css']
})
export class UpperAppInfosComponent implements OnInit {


  constructor(public as: AuthService, public router: Router) {}

  ngOnInit(): void {
  }

}
