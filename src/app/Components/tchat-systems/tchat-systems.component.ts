import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval} from 'rxjs';
import {MessageService} from '../../Services/message.service';
import {Message} from '../../Models/message';
import {AccountService} from '../../Services/account.service';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit, OnDestroy {

  public RoomMessages: Message[];
  private ReloadMessages: any;
  // @ViewChild('ScrollSystemTchat') ScrollTchat;
  @ViewChild(CdkVirtualScrollViewport) public viewport?: CdkVirtualScrollViewport;

  constructor(private MS: MessageService, public AS: AccountService) {
    this.RoomMessages = [];

    this.ReloadMessages = interval(500).subscribe(() => {
      const checkMessages: Message[] = this.MS.getHttpMessages();
      if (this.RoomMessages !== undefined && checkMessages !== undefined) {
        if (this.RoomMessages.toString() !== checkMessages.toString()) {
          this.RoomMessages = this.MS.actualMessages;
          console.log('LISTE INDEX => ', this.viewport);
          this.viewport.scrollToOffset(99999, 'smooth');
        }
      }
    }, error => {
      console.log(error);
    });

  }

  ngOnDestroy(): void{
    setTimeout(() => {
      this.ReloadMessages.unsubscribe();
    });
  }

  ngOnInit(): void {}

}
