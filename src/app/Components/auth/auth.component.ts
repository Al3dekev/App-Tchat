import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../../Services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{

  public isPCsize: boolean;

  constructor(public router: Router, public as: AuthService) {
    this.onResize();
  }

  EditErrorInWS(): any{
    if (this.router.url.includes('login')) {
      if (this.as.ErrorAuth === 'Can\'t find usr in db.'){
        return 'le pseudo est inconnu';
      } else if (this.as.ErrorAuth === 'usr/pwd missing'){
        return 'Pseudo ou mot de passe manquant';
      } else if (this.as.ErrorAuth === 'pwd isn\'t correct'){
        return 'Le pseudo ou mot de passe est incorrect';
      } else {
        return 'Une erreur est survenue, recommencez.';
      }
    }else if (this.router.url.includes('register')){
      if (this.as.ErrorAuth === 'code auth incorrect'){
        return 'Code d\'enregistrement incorrect';
      } else if (this.as.ErrorAuth === 'usr already in db'){
        return 'Pseudonyme déjà utilisé';
      } else {
        return 'Une erreur est survenue, recommencez.';
      }
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(): any {
    this.isPCsize = window.innerWidth >= 800;
  }

}
