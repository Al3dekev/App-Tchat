import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-app-infos',
  templateUrl: './upper-app-infos.component.html',
  styleUrls: ['./upper-app-infos.component.css']
})
export class UpperAppInfosComponent implements OnInit {

  TitleApp: string;
  provBlocDeDroite: string;

  constructor() {
    this.TitleApp = 'AppTchat';
    this.provBlocDeDroite = 'Bloc de droite';
  }

  ngOnInit(): void {
  }

}
