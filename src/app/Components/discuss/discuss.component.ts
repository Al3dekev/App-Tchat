import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../../Services/authentication.service';

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

  constructor(public auth: AuthenticationService) {

  }

  ClickToSave(){
    this.auth.SendAMessage(this.NouvMess);
    this.ChatCall.scrollDown();
  }

  ngOnInit(): void {
  }

}
