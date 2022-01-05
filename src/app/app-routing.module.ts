import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', // localhost:4200/dashboard
    component: DashboardComponent
  },
  {
    path: 'navbar', // localhost:4200/navbar
    component: NavbarComponent
  },
  {
    path: 'sidenav', // localhost:4200/sidenav
    component: SidenavComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'course/:id',
    component: CourseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
