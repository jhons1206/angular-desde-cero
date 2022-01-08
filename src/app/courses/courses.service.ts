import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceCurso } from '../interface-curso';
// import { COURSES } from '../data/courses';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // DI(Dependency Injection)
  constructor(private httpClient: HttpClient) { }

  // getCourses(): InterfaceCurso[] {
  //   return COURSES;
  // }
  getCursos(): Observable<InterfaceCurso[]> {
    return this.httpClient.get<InterfaceCurso[]>('assets/api/courses/courses.json')
    .pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('Error de cliente', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    // catch and rethrow
    return throwError('Hubo un problema al obtener los datos. Intente más tarde')
  }
}
