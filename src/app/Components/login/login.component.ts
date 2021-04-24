import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private apiURL = 'http://localhost:1789/';

  @Input() name: string;
  public type: string;
  public titreForm: string;
  public ConnexionForm: FormGroup;

  constructor(public Auth: AuthService, private formBuilder: FormBuilder) {
    this.type = this.name;
    this.titreForm = 'Connexion';
  }

  AuthIdentifiants(): void{
    const formValue = this.ConnexionForm.value;
    this.Auth.TryToLogin(formValue.pseudonyme, formValue.motdepasse);
  }

  FormConnexion(): void{
    this.ConnexionForm = this.formBuilder.group({
      pseudonyme: '',
      motdepasse: ''
    });
  }

  ngOnInit(): void {
    this.FormConnexion();
  }






}
