import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent {

  constructor(public as: AuthService) { }

  async disconnectAccount(): Promise<any> {
    await this.as.disconnectFromTchat();
  }

}
