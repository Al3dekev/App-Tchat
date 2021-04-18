import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ecriture-message',
  templateUrl: './ecriture-message.component.html',
  styleUrls: ['./ecriture-message.component.css']
})
export class EcritureMessageComponent implements OnInit {

  public MessageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  SendMessage(): void{

  }

  FormMessage(): void{
    this.MessageForm = this.formBuilder.group({
      message: ''
    });
  }

  ngOnInit(): void {
    this.FormMessage();
  }

}
