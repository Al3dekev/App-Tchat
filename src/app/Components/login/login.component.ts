import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';
import {Account} from '../../Models/account';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private apiURL = 'http://localhost:1789/';

  @Input() name: string;
  public type: string;
  public titreForm: string;

  constructor(public Auth: AuthenticationService, public router: Router) {
    this.type = this.name;
    this.titreForm = 'Connexion';
  }

  ngOnInit() {
  }






}
