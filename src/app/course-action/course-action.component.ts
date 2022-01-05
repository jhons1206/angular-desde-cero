import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceCurso } from '../interface-curso';

@Component({
  selector: 'ed-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso!: InterfaceCurso;

  @Output()
  edit: EventEmitter<InterfaceCurso> = new EventEmitter<InterfaceCurso>();

  @Output()
  delete: EventEmitter<InterfaceCurso> = new EventEmitter<InterfaceCurso>();

  constructor() { }

  ngOnInit(): void {
  }

  editarCurso(curso: InterfaceCurso) {
    console.log('Editar', curso);
    // Propagando el objeto hacia el componente padre
    this.edit.emit(curso);
  }

  eliminarCurso(curso: InterfaceCurso) {
    console.log('Eliminar', curso);
    this.delete.emit(curso);
  }

  onMouseover(event: any) {
    console.log('Mouse Over', event);
  }

  onDobleclick(event: any) {
    console.log('Doble Click', event);
  }

}
