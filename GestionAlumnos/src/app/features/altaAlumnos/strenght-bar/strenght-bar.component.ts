import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-strenght-bar',
  templateUrl: './strenght-bar.component.html',
  styleUrls: ['./strenght-bar.component.scss'],
})
export class StrenghtBarComponent implements OnInit {
  @Input() controller: AbstractControl | null = null;

  private readonly COLORS = {
    default: 'black',
    empty: 'grey',
    errorVW: '#8B0000',
    weak:'#DC143C',
    normal: '#FF8C00',
    strong: '#8FBC8F',
    veryStrong: '#006400',
  };

  private readonly OPTIONS = {
    empty: {
      message: 'Introduce una contraseña',
      color: this.COLORS.empty,
      styles: [this.COLORS.empty, this.COLORS.empty, this.COLORS.empty],
    },
    veryWeak: {
      message: 'Muy débil',
      color: this.COLORS.errorVW,
      styles: [this.COLORS.errorVW, this.COLORS.empty, this.COLORS.empty],
    },
    weak: {
      message: 'Débil',
      color: this.COLORS.weak,
      styles: [this.COLORS.weak, this.COLORS.empty, this.COLORS.empty],
    },
    normal:{
      message: 'Moderada',
      color: this.COLORS.normal,
      styles: [this.COLORS.normal, this.COLORS.normal, this.COLORS.empty],
    },
    strong:{
      message: 'Fuerte',
      color: this.COLORS.strong,
      styles: [this.COLORS.strong, this.COLORS.strong, this.COLORS.strong],
    },
    veryStrong: {
      message: 'Muy fuerte',
      color: this.COLORS.veryStrong,
      styles: [this.COLORS.veryStrong, this.COLORS.veryStrong, this.COLORS.veryStrong],
    },
  };

  message: string = this.OPTIONS.empty.message;
  styles: string[] = this.OPTIONS.empty.styles;
  color: string = this.OPTIONS.empty.color;

  constructor() { }

  ngOnInit(): void {
    if (!!this.controller) {

      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

      this.controller.valueChanges.subscribe((password: string) => {

        let mayusculas: boolean=false;
        let minusculas: boolean=false;
        let simbolos: boolean=false;
        let numeros: boolean=false;
        let letras: boolean=false;
        let puntosLongitud=0;
        let puntosNumeros=0;
        let puntosSimbolos=0;
        let puntosLetras=0;
        let puntos2Letras=0;
        let puntosBonus=0;

        for (let i = 0; i < password.length; i++) {

          if (password[i].toUpperCase() === password[i] && password[i].toLowerCase() != password[i]) {

            mayusculas = true;
            letras=true;

          } else if (password[i].toLowerCase() === password[i] && password[i].toUpperCase() != password[i]) {

            minusculas = true;
            letras=true;

          } else if (Number.isInteger(Number(password[i]))) {

            numeros = true;

          } else if (format.test(password[i])) {

            simbolos = true;

          }

        }

        if(!password || password.length<=6){

          puntosLongitud=0;

        } else if (password.length === 7 || password.length === 8) {

          puntosLongitud=1;

        } else if (password.length >= 9 && password.length <=12) {

          puntosLongitud=2;

        } else if (password.length >=13) {

          puntosLongitud=3;

        }

        if(letras===true){

          puntosLetras=1;

        }

        if(mayusculas===true && minusculas===true){

          puntos2Letras=2;

        }

        if(numeros===true){

          puntosNumeros=1;

        }

        if(simbolos===true){

          puntosSimbolos=2;

        }

        if(password.length>12 && mayusculas && minusculas && numeros && simbolos){

          puntosBonus=1;

        }

         let puntos = puntosLongitud+puntosNumeros+puntos2Letras+puntosLetras+puntosSimbolos+puntosBonus;

         if(puntos===0){
          this.color = this.OPTIONS.empty.color;
          this.message = this.OPTIONS.empty.message;
          this.styles = this.OPTIONS.empty.styles;
         } else if (puntos===1 || puntos===2) {
           this.color = this.OPTIONS.veryWeak.color;
           this.message = this.OPTIONS.veryWeak.message;
           this.styles = this.OPTIONS.veryWeak.styles;
         } else if (puntos>=3 && puntos<=5) {
           this.color = this.OPTIONS.weak.color;
           this.message = this.OPTIONS.weak.message;
           this.styles = this.OPTIONS.weak.styles;
         } else if (puntos>=5 && puntos<=7) {
           this.color = this.OPTIONS.normal.color;
           this.message = this.OPTIONS.normal.message;
           this.styles = this.OPTIONS.normal.styles;
         } else if (puntos===8 || puntos===9) {
           this.color = this.OPTIONS.strong.color;
           this.message = this.OPTIONS.strong.message;
           this.styles = this.OPTIONS.strong.styles;
         } else if(puntos>=10){
          this.color = this.OPTIONS.veryStrong.color;
          this.message = this.OPTIONS.veryStrong.message;
          this.styles = this.OPTIONS.veryStrong.styles;
         }

      });
    }
  }

  getBackground(color: string) {
    return { 'background-color': color };
  }
}
