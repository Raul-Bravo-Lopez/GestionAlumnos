import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { StrenghtBarComponent } from './components/strenght-bar/strenght-bar.component';

@NgModule({
  declarations: [
    AltaAlumnosComponent,
    StrenghtBarComponent,
    ListadoAlumnosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    RouterModule,
    MatSelectModule
  ],
  exports: [

    AltaAlumnosComponent,
    StrenghtBarComponent,
    ListadoAlumnosComponent,

  ]
})
export class AlumnosModuleModule { }
