import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USER_CONTANTS } from '../../alumnos/utils/user-constants';
import { USER_ERRORS } from './../../alumnos/utils/user-errors';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.scss']
})
export class AltaAlumnosComponent implements OnInit {

  readonly USER_CONTANTS = USER_CONTANTS;
  readonly USER_ERRORS = USER_ERRORS;

  signUpForm: FormGroup;


  constructor() {

    this.signUpForm = new FormGroup({
      name: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.name.minLength),
          Validators.maxLength(USER_CONTANTS.name.maxLength),
        ]
      ),
      surname1: new FormControl(null,
          [
            Validators.required,
            Validators.minLength(USER_CONTANTS.lastname.minLength),
            Validators.maxLength(USER_CONTANTS.lastname.maxLength),
          ]
      ),
      surname2: new FormControl(null,
        [
          Validators.minLength(USER_CONTANTS.lastname.minLength),
          Validators.maxLength(USER_CONTANTS.lastname.maxLength),
        ]
      ),
      email: new FormControl(null,
        [
          Validators.required,
          Validators.email
        ]
      ),
      dni: new FormControl(null,
        [
          Validators.required,
          Validators.pattern("[0-9]{8}[A-Z]{1}"),
        ]
      ),
      phone1: new FormControl(null,
        [
          Validators.required,
          Validators.pattern("(6|7)([0-9]){2}[ -]?(([0-9]){2}[ -]?([0-9]){2}[ -]?([0-9]){2}|([0-9]){3}[ -]?([0-9]){3})"),
        ]
      ),
      phone2: new FormControl(null,
        [
          Validators.pattern("(6|7)([0-9]){2}[ -]?(([0-9]){2}[ -]?([0-9]){2}[ -]?([0-9]){2}|([0-9]){3}[ -]?([0-9]){3})"),
        ]
      ),
      cp: new FormControl(null,
        [
          Validators.required,
          Validators.pattern("28[0-9]{3}"),
        ]
      ),
      location: new FormControl(null,
      [
        Validators.required,
      ]
      ),
      nickname: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.nick.minLength),
          Validators.maxLength(USER_CONTANTS.nick.maxLength),
        ]
      ),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.password.minLength),
        ]
      ),
      password2: new FormControl(null,
        [

        ]
      ),
    })

  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.signUpForm.invalid){
      return;
    }

   // if(this.signUpForm.get('password')?.value===this.signUpForm.get('password2')){

      let alumno= {
        'Nombre':this.signUpForm.get('name')?.value,
        'Apellido':this.signUpForm.get('surname')?.value,
        'Apellido2': this.signUpForm.get('surname2')?.value,
      }
      localStorage.setItem("Alumno", JSON.stringify(alumno));


      localStorage.setItem("Email", this.signUpForm.get('email')?.value);
      localStorage.setItem("DNI", this.signUpForm.get('dni')?.value);
      localStorage.setItem("Phone1", this.signUpForm.get('phone1')?.value);
      localStorage.setItem("Phone2", this.signUpForm.get('phone2')?.value);
      localStorage.setItem("CP", this.signUpForm.get('cp')?.value);
      localStorage.setItem("Location", this.signUpForm.get('location')?.value);
      localStorage.setItem("Nickname", this.signUpForm.get('nickname')?.value);
      let hash = CryptoJS.SHA512(this.signUpForm.get('password')?.value);
      localStorage.setItem("Password",hash.toString());

    //}


  }

}
