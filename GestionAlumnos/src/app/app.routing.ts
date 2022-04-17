import { ListadoAlumnosComponent } from './features/listado-alumnos/listado-alumnos.component';
import { AltaAlumnosComponent } from './features/altaAlumnos/alta-alumnos/alta-alumnos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: AltaAlumnosComponent },
  { path: 'altaAlumnos', component: AltaAlumnosComponent },
  { path: 'listadoAlumnos', component: ListadoAlumnosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
