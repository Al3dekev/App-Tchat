import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from '../../Services/message.service';

@Component({
  selector: 'app-ecriture-message',
  templateUrl: './ecriture-message.component.html',
  styleUrls: ['./ecriture-message.component.css']
})
export class EcritureMessageComponent implements OnInit {

  public MessageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private MS: MessageService) { }

  FormMessage(): void{
    this.MessageForm = this.formBuilder.group({
      message: ''
    });
  }

  SendingMessage(): void{
    const formValue = this.MessageForm.value;
    this.MS.SendMessage(formValue.message);
  }

  ngOnInit(): void {
    this.FormMessage();
  }

}
