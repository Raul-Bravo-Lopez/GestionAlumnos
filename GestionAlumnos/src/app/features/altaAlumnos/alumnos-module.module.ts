import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AltaAlumnosComponent } from './alta-alumnos/alta-alumnos.component';
import { StrenghtBarComponent } from './strenght-bar/strenght-bar.component';

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
    MatSelectModule
  ],
  exports: [

    AltaAlumnosComponent,
    StrenghtBarComponent,
  ]
})
export class AlumnosModuleModule { }
