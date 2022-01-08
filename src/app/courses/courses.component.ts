import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { InterfaceCurso } from '../interface-curso';
import { CoursesService } from './courses.service';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  titulo: string = 'Lista de cursos EDTeam';
  anchoImagen: string = '40px';
  @ViewChild('filtro', { static: false })
  filtro!: ElementRef;
  private _textoFiltro: string = '';

  // Se ejecuta cuando cambia el estado del atributo _textoFiltro
  set textoFiltro(t: string) {
    console.log('textoFiltro', t);
    this._textoFiltro = t;
    // filtrar los cursos
    this.filtrarCursos(t);
    // this.cursos = t? this.filtrarCursos(t): this.cursosService.getCourses();
  }

  // Se ejecuta el atributo _textoFiltro es de solo lectura
  get textoFiltro() {
    return this._textoFiltro;
  }


  cursos: InterfaceCurso[] = [];
  cursosFiltrados: InterfaceCurso[] = [];
  mensajeError: string | undefined;

  constructor(private router: Router, private cursosService: CoursesService) {
    // this.eliminarCursos();
  }

  ngOnInit(): void {
    this.getCursos();

  }

  getCursos() {
    this.cursosService.getCursos()
    .pipe(
      tap(cursos => console.log('Cursos', cursos)),
      catchError(error => {
        this.mensajeError = error;
        // catch and replace
        return EMPTY;
      })
    )
    .subscribe((cursos: InterfaceCurso[]) => {
      this.cursos = cursos;
      this.cursosFiltrados = cursos;
    });
  }

  ngAfterViewInit() {
    // this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(texto: string) {
    this.cursosFiltrados = this.cursos.filter((curso: InterfaceCurso) => curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0);
  }

  eliminarCursos() {
    setTimeout(() => {
      this.cursos = [];
    }, 5000);
  }

  onEditCurso(curso: InterfaceCurso) {
    console.log('[Courses] Edit', curso);
    // Redirección: course/{curso.id}
    this.router.navigate([`course/${curso.id}`]);
  }

  onDeleteCurso(curso: InterfaceCurso) {
    console.log('[Courses] Delete', curso);
    this.cursos = this.cursos.filter((c: InterfaceCurso)=>{
      return c.id !== curso.id
    });
  }

}
