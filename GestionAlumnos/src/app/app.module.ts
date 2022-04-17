import { AlumnosModuleModule } from './features/altaAlumnos/alumnos-module.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ListadoAlumnosComponent } from './features/listado-alumnos/listado-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    AlumnosModuleModule,

  ],
  exports: [


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
