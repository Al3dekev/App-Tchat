import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public router: Router, public as: AuthService) {}

  EditErrorInWS(): any{
    if (this.as.ErrorAuth === 'Can\'t find usr in db.'){
      return 'le pseudo est inconnu';
    } else if (this.as.ErrorAuth === 'usr/pwd missing'){
      return 'Pseudo ou mot de passe manquant';
    } else if (this.as.ErrorAuth === 'pwd isn\'t correct'){
      return 'Le pseudo ou mot de passe est incorrect';
    } else {
      return 'Une erreur est survenue, recommencez.';
    }

    // pour le register:
    // usr deja utilise en base
  }

  ngOnInit(): void {
  }

}
