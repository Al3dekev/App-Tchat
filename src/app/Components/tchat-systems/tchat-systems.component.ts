import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {MessageService} from '../../Services/message.service';
import {Message} from '../../Models/message';
import {AccountService} from '../../Services/account.service';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit, OnDestroy {

  public RoomMessages: Message[];
  private ReloadMessages: any;

  constructor(private MS: MessageService, public AS: AccountService) {
    this.RoomMessages = [];

    this.ReloadMessages = interval(500).subscribe(() => {
      const checkMessages: Message[] = this.MS.getHttpMessages();
      if (this.RoomMessages !== undefined && checkMessages !== undefined){
        if (this.RoomMessages.toString() !== checkMessages.toString()){
          this.RoomMessages = this.MS.actualMessages;
        }
      }
    }, error => {
      console.log(error);
    });

  }

  @HostListener('unload')
  ngOnDestroy(): void{
    setTimeout(() => {
      this.ReloadMessages.unsubscribe();
    });
  }

  ngOnInit(): void {}

}
