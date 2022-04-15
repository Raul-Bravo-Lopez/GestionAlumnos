import { AltaAlumnosComponent } from './features/altaAlumnos/alta-alumnos/alta-alumnos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: AltaAlumnosComponent },
  { path: 'altaAlumnos', component: AltaAlumnosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
