import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {AuthenticationService} from '../../Services/authentication.service';
import {startWith, switchMap} from 'rxjs/operators';
import {Message} from '../../Models/message';
import {CdkScrollable} from '@angular/cdk/overlay';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit {

  public Messages: Observable<any>;
  public SomeMessages: Message;
  @ViewChild('ScrollSystemChat') public scrollTchat: CdkScrollable;

  constructor(private auth: AuthenticationService) {
    this.Messages = interval(20).pipe(startWith(0)).pipe(switchMap(async () => this.auth.GetMessages()));
  }

  scrollDown(){
    this.scrollTchat.scrollTo({top: 5000});
  }

  ngOnInit(): void {

  }

}
