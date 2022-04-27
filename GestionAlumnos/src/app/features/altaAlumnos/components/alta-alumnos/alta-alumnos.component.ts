import { AlumnosService } from './../../services/alumnos.service';
import { PROVINCES } from '../../data/provinces.list';
import { COUNTRIES } from '../../data/countries.list';
import { DniValidator } from '../../validators/dni.validator';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USER_CONTANTS } from '../../utils/user-constants';
import { USER_ERRORS } from '../../utils/user-errors';
import * as CryptoJS from 'crypto-js';
import { Alumno } from '../../model/alumno.model';
import { StrenghtBarComponent } from '../strenght-bar/strenght-bar.component';
@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.scss']
})
export class AltaAlumnosComponent implements OnInit {

  @ViewChild(StrenghtBarComponent) value!: number;

  readonly USER_CONTANTS = USER_CONTANTS;
  readonly USER_ERRORS = USER_ERRORS;
  readonly COUNTRIES = COUNTRIES;
  readonly PROVINCES = PROVINCES

  signUpForm: FormGroup;
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnosService) {

      this.alumnos=this.alumnoService.getAlumnos();

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
          DniValidator.isValidDni()
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
          Validators.pattern("[0-5][0-9]{4}"),
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
          Validators.required,
        ]
      ),
      country: new FormControl(null,
        [
          Validators.required,
        ]
      ),
      prov: new FormControl(null,
        [
          Validators.required,
        ]
      ),
    })

  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.signUpForm.invalid) {
      return;
    }

    if (!(this.signUpForm.get('password')?.value === this.signUpForm.get('password2')?.value)) {

      alert("Las contraseñas no son iguales")
      return;
    }

    if(this.value<8){



    }


    let passwordHash = CryptoJS.SHA512(this.signUpForm.get('password')?.value);

    let alumnos={
      'Nombre':this.signUpForm.get('name')?.value,
      'Apellido1':this.signUpForm.get('surname1')?.value,
      'Apellido2':this.signUpForm.get('surname2')?.value,
      'Email':this.signUpForm.get('email')?.value,
      'DNI':this.signUpForm.get('dni')?.value,
      'Teléfono1':this.signUpForm.get('phone1')?.value,
      'Teléfono2':this.signUpForm.get('phone2')?.value,
      'País':this.signUpForm.get('country')?.value,
      'Provincia':this.signUpForm.get('prov')?.value,
      'CP':this.signUpForm.get('cp')?.value,
      'Localidad':this.signUpForm.get('location')?.value,
      'Nickname':this.signUpForm.get('nickname')?.value,
      'Password':passwordHash
    }

    localStorage.setItem(this.alumnoService.sumarLastId(), JSON.stringify(alumnos))

  }

}
