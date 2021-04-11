import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }


  disconnectFromTchat(): void{
    this.as.EstEnLigne = false;
    this.as.token = '';
    this.router.navigateByUrl('auth/login');
  }

  ngOnInit(): void {
  }

}
