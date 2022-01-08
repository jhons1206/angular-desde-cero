import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscuelaDigitalComponent } from './escuela-digital/escuela-digital.component';
import { FiltroPipe } from './filtro.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseActionComponent } from './course-action/course-action.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaDigitalComponent,
    FiltroPipe,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    CoursesComponent,
    CourseActionComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
