import { Injectable } from '@angular/core';
import { COURSES } from '../data/courses';
import { InterfaceCurso } from '../interface-curso';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): InterfaceCurso[] {
    return COURSES;
  }
}
