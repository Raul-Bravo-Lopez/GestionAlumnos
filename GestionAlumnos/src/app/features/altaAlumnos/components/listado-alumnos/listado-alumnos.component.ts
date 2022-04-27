import { AlumnosService } from './../../services/alumnos.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno.model';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss']
})
export class ListadoAlumnosComponent implements OnInit {

  panelOpenState=false;

  alumnos:Alumno[]=[]

  constructor(private alumnosService:AlumnosService) {
    this.alumnos=this.alumnosService.getAlumnos();
   }

  ngOnInit(): void {

    for(let i = 0 ;i<this.alumnos.length;i++){
      console.log(this.alumnos)
    }

  }

}
