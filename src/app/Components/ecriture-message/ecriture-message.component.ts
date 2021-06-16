import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from '../../Services/message.service';
import {RoomService} from '../../Services/room.service';
import {AccountService} from '../../Services/account.service';
import {Message} from '../../Models/message';

@Component({
  selector: 'app-ecriture-message',
  templateUrl: './ecriture-message.component.html',
  styleUrls: ['./ecriture-message.component.css']
})
export class EcritureMessageComponent implements OnInit {

  public MessageForm: FormGroup;
  @ViewChild('messagerie') inputMessagerie;

  constructor(private formBuilder: FormBuilder,
              private MS: MessageService,
              private RS: RoomService,
              private AS: AccountService) { }

  FormMessage(): void{
    this.MessageForm = this.formBuilder.group({
      messageInput: ''
    });
  }

  SendingMessage(): void{
    const bodyToSend = {
      name: this.RS.name,
      pseudo: this.AS.pseudo,
      content: this.MessageForm.value.messageInput.trim()
    };
    if (bodyToSend.content !== '') {
      this.MS.SendMessage(bodyToSend);
    }
    this.inputMessagerie.nativeElement.value = '';
  }

  ngOnInit(): void {
    this.FormMessage();
  }

}
