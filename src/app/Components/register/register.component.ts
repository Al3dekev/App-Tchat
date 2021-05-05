import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public InscriptionForm: FormGroup;
  private _CodeEnregistrement: string[];

  constructor(private formBuilder: FormBuilder, private as: AuthService) {
    this.CodeEnregistrement = [
      'e232baabf13fa4b5812c837c7cfb9026',
      '6a55919315f8b0778df71f28752ddca8',
      'de02b1f7cfa42cca4891d32bb26741d3',
      '03dca587494c887ec2c53e6889c97470',
      '39a176545b8cb3133de7ce0cd2d537c0'
    ];
  }

  CreatingAccount(): void{
    const formValue = this.InscriptionForm.value;
    if (this.CodeEnregistrement.includes(this.as.convertToMD5(formValue.registercode))){
      this.as.createAccount(formValue.pseudonyme, formValue.password);
    } else {
      this.as.ErrorAuth = 'code auth incorrect';
    }
  }

  FormInscription(): void{
    this.InscriptionForm = this.formBuilder.group({
      pseudonyme: '',
      password: '',
      registercode: ''
    });
  }


  get CodeEnregistrement(): string[] {
    return this._CodeEnregistrement;
  }

  set CodeEnregistrement(value: string[]) {
    this._CodeEnregistrement = value;
  }

  ngOnInit(): void {
    this.FormInscription();
  }
}
