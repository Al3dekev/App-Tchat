import {Component, OnInit} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {MessageService} from '../../Services/message.service';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit {

  public Messages: Observable<any>;

  constructor(private MS: MessageService) {
    this.Messages = interval(20).pipe(startWith(0)).pipe(switchMap(async () => this.MS.getHttpMessages()));
  }

  ngOnInit(): void {

  }

}
