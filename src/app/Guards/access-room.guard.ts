import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../Services/account.service';
import {RoomService} from '../Services/room.service';

@Injectable({
  providedIn: 'root'
})
export class AccessRoomGuard implements CanActivate {
  private URL: string;

  constructor(private http: HttpClient,
              private AccS: AccountService,
              private RS: RoomService) {
    this.URL = 'http://localhost:1789';
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // 1) Clique sur le bouton de la room
    // 2) Acces au lien "/discuss/4"
    // 3) Verifie si groupe est bien dans la liste des groupes du AccountService
    // 4) Si c'est le cas, accepter acces au lien et remplir RoomService puis MessageService
    console.log('let\'s see what\'s inside ROOM[]', this.AccS.RoomList);
    for (const rooms of this.AccS.RoomList){
      if (rooms.id.toString() === route.paramMap.get('id')){
        this.RS.getHttpRoom(rooms.id.toString());
        return true;
      }
    }
    return false;
  }
  // Si l'id du lien ne correspond pas a la liste des ID de room de l'utilisateur
  // Alors ne pas accepter la venue
  //
  // Ou alors, a chaque accès dans un lien de room, faire une requete SQL. Si pas de résultat avec l'ID de l'utilisateur,
  // alors refuser l'entrée
}
