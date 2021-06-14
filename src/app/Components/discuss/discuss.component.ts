import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent implements OnInit {

  @ViewChild('ChatSystem') public ChatCall;

  constructor(public as: AuthService) {}

  ngOnInit(): void {
  }

}
