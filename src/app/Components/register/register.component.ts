import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {AccountService} from '../../Services/account.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public InscriptionForm: FormGroup;
  private CodeEnregistrement = 'ABDH';

  constructor(private AS: AccountService, private formBuilder: FormBuilder) { }

  CreatingAccount(): void{
    this.AS.createAccount();
  }


  FormInscription(): void{
    this.InscriptionForm = this.formBuilder.group({
      pseudonyme: '',
      motdepasse: ''
    });
  }

  ngOnInit(): void {
    this.FormInscription();
  }
}
