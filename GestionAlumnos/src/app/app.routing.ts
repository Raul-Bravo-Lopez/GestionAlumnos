import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnosComponent } from './features/altaAlumnos/components/alta-alumnos/alta-alumnos.component';
import { ListadoAlumnosComponent } from './features/altaAlumnos/components/listado-alumnos/listado-alumnos.component';

const routes: Routes = [

  { path: '', component: AltaAlumnosComponent },
  { path: 'altaAlumnos', component: AltaAlumnosComponent },
  { path: 'listadoAlumnos', component: ListadoAlumnosComponent },
  //{ path: 'modificadoAlumnos', component: ListadoAlumnosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
