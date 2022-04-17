import { RouterModule } from '@angular/router';
import { StrenghtBarComponent } from './strenght-bar/strenght-bar.component';
import { AltaAlumnosComponent } from './alta-alumnos/alta-alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AltaAlumnosComponent,
    StrenghtBarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [

    AltaAlumnosComponent,
    StrenghtBarComponent,
  ]
})
export class AlumnosModuleModule { }
