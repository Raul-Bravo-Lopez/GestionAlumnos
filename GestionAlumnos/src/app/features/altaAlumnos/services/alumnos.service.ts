import { Alumno } from '../model/alumno.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  alumnos: Alumno[] = [];

  getAlumnos(): Alumno[]{
    const numAlumnos = localStorage.length;
    for(let i = 0; i < numAlumnos; i++){
      let cod = i + '';
      let obj = localStorage.getItem(cod);
      if(!!obj && obj.length > 0){
        let alumno = JSON.parse(obj);
        alumno.id = cod;
        this.alumnos.push(alumno);
      }
    }
    return this.alumnos?.map(alumno => new Alumno
      (alumno.id, alumno.name, alumno.surname1,
      alumno.email, alumno.dni, alumno.phone1,
      alumno.country, alumno.province, alumno.cp,
      alumno.location, alumno.nickname, alumno.password,
      alumno.surname2, alumno.phone2));
  }

  sumarLastId(){
    if(this.alumnos.length === 0){
      return '0';
    }else{
      let lastID = this.alumnos[this.alumnos.length - 1].id;
      let aux = parseInt(lastID);
      aux+=1;
      return aux.toString();
    }
  }

  deleteAlumno(alumno: Alumno){
    if(!!alumno){
      localStorage.removeItem(alumno.id);
    }
  }
}
