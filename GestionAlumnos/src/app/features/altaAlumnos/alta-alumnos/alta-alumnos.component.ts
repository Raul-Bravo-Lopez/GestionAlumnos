import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USER_CONTANTS } from '../../alumnos/utils/user-constants';
import { USER_ERRORS } from './../../alumnos/utils/user-errors';

@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.scss']
})
export class AltaAlumnosComponent implements OnInit {

  readonly USER_CONTANTS = USER_CONTANTS;
  readonly USER_ERRORS = USER_ERRORS;

  signInForm: FormGroup;
  showPassword = false;

  constructor() {

    this.signInForm = new FormGroup({
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
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(USER_CONTANTS.password.minLength),
        ]
      ),
    })

  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.signInForm.invalid){
      return;
    }
  }

}
