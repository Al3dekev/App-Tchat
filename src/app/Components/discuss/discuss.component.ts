import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../../Services/message.service';
import {RoomService} from '../../Services/room.service';

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent implements OnInit {

  /*MessageForm = new FormControl('', [

  ]);*/
  public NouvMess: string;
  @ViewChild('ChatSystem') public ChatCall;

  constructor() {}

  /*ClickToSave(){
    this.auth.SendAMessage(this.NouvMess);
    this.ChatCall.scrollDown();
  }*/

  ngOnInit(): void {
  }

}
