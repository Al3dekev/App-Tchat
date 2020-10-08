import {Component, Input, OnInit} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {AuthenticationService} from '../../Services/authentication.service';
import {startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-tchat-systems',
  templateUrl: './tchat-systems.component.html',
  styleUrls: ['./tchat-systems.component.css']
})
export class TchatSystemsComponent implements OnInit {

  @Input() Messages: Observable<any>;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    /*interval(2000).pipe(startWith(0)).subscribe(() => {
      this.Messages = this.auth.GetMessages();
    });*/
    console.log("INIT TCHAT");
    this.Messages = interval(2000).pipe(startWith(0)).pipe(switchMap(async () => this.auth.GetMessages()));

  }

}
