import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Tchat';
  type = 'Inscription';

  SwitchType(){
    if (this.type === 'Inscription') {
      this.type = 'Connexion';
    } else {
      this.type = 'Inscription';
    }
  }


}
