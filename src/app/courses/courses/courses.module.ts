import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';



@NgModule({
  declarations: [
    MiComponenteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiComponenteComponent
  ]
})
export class CoursesModule { }
