import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public Auth: AuthenticationService) { }

  ngOnInit(): void {
  }

}
