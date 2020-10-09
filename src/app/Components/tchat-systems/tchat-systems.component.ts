import {Component, Input, OnInit} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {AuthenticationService} from '../../Services/authentication.service';
import {startWith, switchMap} from 'rxjs/operators';
import {Message} from '../../Models/message';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit {

  public Messages: Observable<any>;
  public SomeMessages: Message;

  constructor(private auth: AuthenticationService) {
    this.Messages = interval(20).pipe(startWith(0)).pipe(switchMap(async () => this.auth.GetMessages()));
  }

  ngOnInit(): void {

  }

}
