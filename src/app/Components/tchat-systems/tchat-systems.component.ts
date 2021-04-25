import {Component, OnInit} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {MessageService} from '../../Services/message.service';
import {Message} from '../../Models/message';
import {isUndefined} from 'util';
import {AccountService} from '../../Services/account.service';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit {

  public RoomMessages: Message[];
  public checkIfNewMsg: boolean;

  constructor(private MS: MessageService, public AS: AccountService) {
    this.RoomMessages = [];

    interval(200).subscribe(() => {
      const checkMessages: Message[] = this.MS.getHttpMessages();
      if (this.RoomMessages !== undefined && checkMessages !== undefined){
        if (this.RoomMessages.toString() !== this.MS.getHttpMessages().toString()){
          this.RoomMessages = this.MS.actualMessages;
        }
      }

    }, error => {
      console.log(error);
    });

    // this.MessageObserver = interval(20).pipe(startWith(0)).pipe(switchMap(() => ));
    /*this.MessageObserver.subscribe((e) => {
      console.log(e, this.RoomMessages);
      if (e.toString() !== this.RoomMessages.toString()){
       this.RoomMessages = e;
     }
    });*/

  }

  ngOnInit(): void {}

}
